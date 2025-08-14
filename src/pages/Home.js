import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Car, 
  BookOpen, 
  Calendar, 
  Users, 
  Shield, 
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Home = () => {
  const { t, i18n } = useTranslation();

  const features = [
    {
      icon: BookOpen,
      title: t('theory'),
      description: 'Master driving theory with interactive practice tests and comprehensive study materials.',
    },
    {
      icon: Car,
      title: t('practical'),
      description: 'Schedule and manage practical driving lessons with certified instructors.',
    },
    {
      icon: Calendar,
      title: t('appointments'),
      description: 'Easy appointment scheduling and management for both students and instructors.',
    },
    {
      icon: Users,
      title: 'Student Management',
      description: 'Track progress, manage profiles, and monitor learning outcomes.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Comprehensive safety guidelines and best practices for driving education.',
    },
    {
      icon: Globe,
      title: 'Multilingual',
      description: 'Available in English and Krio for better accessibility and understanding.',
    },
  ];

  const benefits = [
    'Free registration and access',
    'Interactive theory tests',
    'Progress tracking',
    'Mobile-friendly design',
    'Real-time notifications',
    'Multilingual support',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fahrschulcard
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Modern Driving School Management System
            </p>
            <p className="text-lg mb-12 text-blue-200 max-w-3xl mx-auto">
              The complete solution for driving schools, instructors, and students. 
              Manage theory tests, practical lessons, and track progress with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="btn btn-primary bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                {t('register')} - {t('free')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/login"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold"
              >
                {t('login')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Driving Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and features designed to make driving education 
              more effective, accessible, and enjoyable for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Fahrschulcard?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of students and instructors who trust our platform 
                for their driving education needs. Experience the difference with 
                our modern, user-friendly system.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get Started Today
              </h3>
              <p className="text-gray-600 mb-6">
                Create your free account and start your driving education journey. 
                No hidden fees, no complicated setup.
              </p>
              <Link
                to="/register"
                className="btn btn-primary w-full justify-center py-3 text-lg"
              >
                {t('register')} {t('free')}
              </Link>
              <p className="text-sm text-gray-500 text-center mt-4">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-700">
                  {t('login')}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Language Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Multilingual Support
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our platform supports multiple languages to ensure everyone can access 
            quality driving education in their preferred language.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-8">
              <div className="text-4xl mb-4">🇺🇸</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">English</h3>
              <p className="text-gray-600">
                Complete platform in English with comprehensive driving theory and practice materials.
              </p>
            </div>
            <div className="card p-8">
              <div className="text-4xl mb-4">🇸🇱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Krio</h3>
              <p className="text-gray-600">
                Full support for Krio language, making driving education accessible to more communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Driving Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join our community of learners and instructors. Start with a free account 
            and experience the future of driving education.
          </p>
          <Link
            to="/register"
            className="btn bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold inline-flex items-center"
          >
            {t('register')} {t('free')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;