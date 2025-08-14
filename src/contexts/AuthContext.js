import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import api from '../utils/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const { t, i18n } = useTranslation();

  // Initialize auth state
  useEffect(() => {
    const initializeAuth = async () => {
      if (token) {
        try {
          const response = await api.get('/user/profile');
          setUser(response.data);
          
          // Set user's preferred language
          if (response.data.language && response.data.language !== i18n.language) {
            i18n.changeLanguage(response.data.language);
          }
        } catch (error) {
          console.error('Failed to load user profile:', error);
          localStorage.removeItem('token');
          setToken(null);
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, [token, i18n]);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const { token: newToken, user: userData } = response.data;
      
      localStorage.setItem('token', newToken);
      setToken(newToken);
      setUser(userData);
      
      // Set user's preferred language
      if (userData.language && userData.language !== i18n.language) {
        i18n.changeLanguage(userData.language);
      }
      
      toast.success(t('loginSuccess'));
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || t('networkError');
      toast.error(message);
      return { success: false, error: message };
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      const response = await api.post('/auth/register', {
        ...userData,
        language: i18n.language
      });
      const { token: newToken, user: newUser } = response.data;
      
      localStorage.setItem('token', newToken);
      setToken(newToken);
      setUser(newUser);
      
      toast.success(t('registerSuccess'));
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || t('networkError');
      toast.error(message);
      return { success: false, error: message };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    toast.success(t('logoutSuccess'));
  };

  // Update user profile
  const updateProfile = async (profileData) => {
    try {
      const response = await api.put('/user/profile', {
        ...profileData,
        language: i18n.language
      });
      
      setUser(response.data);
      
      // Update language if changed
      if (profileData.language && profileData.language !== i18n.language) {
        i18n.changeLanguage(profileData.language);
      }
      
      toast.success(t('profileUpdated'));
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || t('networkError');
      toast.error(message);
      return { success: false, error: message };
    }
  };

  // Change language
  const changeLanguage = async (language) => {
    try {
      await i18n.changeLanguage(language);
      
      // Update user's language preference in backend
      if (user) {
        await api.put('/user/profile', { language });
        setUser(prev => ({ ...prev, language }));
      }
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
    changeLanguage,
    isAuthenticated: !!user,
    isStudent: user?.role === 'student',
    isInstructor: user?.role === 'instructor',
    isAdmin: user?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};