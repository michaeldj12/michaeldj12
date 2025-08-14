import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const en = {
  translation: {
    // Navigation
    home: 'Home',
    dashboard: 'Dashboard',
    appointments: 'Appointments',
    theory: 'Theory',
    practical: 'Practical',
    profile: 'Profile',
    logout: 'Logout',
    login: 'Login',
    register: 'Register',
    
    // Authentication
    email: 'Email',
    password: 'Password',
    firstName: 'First Name',
    lastName: 'Last Name',
    confirmPassword: 'Confirm Password',
    forgotPassword: 'Forgot Password?',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    alreadyHaveAccount: 'Already have an account?',
    dontHaveAccount: "Don't have an account?",
    role: 'Role',
    student: 'Student',
    instructor: 'Instructor',
    admin: 'Administrator',
    
    // Dashboard
    welcome: 'Welcome',
    upcomingAppointments: 'Upcoming Appointments',
    theoryProgress: 'Theory Progress',
    practicalProgress: 'Practical Progress',
    recentActivity: 'Recent Activity',
    noAppointments: 'No upcoming appointments',
    viewAll: 'View All',
    
    // Appointments
    scheduleAppointment: 'Schedule Appointment',
    appointmentType: 'Appointment Type',
    date: 'Date',
    time: 'Time',
    duration: 'Duration',
    location: 'Location',
    vehicle: 'Vehicle',
    notes: 'Notes',
    status: 'Status',
    scheduled: 'Scheduled',
    confirmed: 'Confirmed',
    completed: 'Completed',
    cancelled: 'Cancelled',
    instructor: 'Instructor',
    student: 'Student',
    createAppointment: 'Create Appointment',
    editAppointment: 'Edit Appointment',
    deleteAppointment: 'Delete Appointment',
    confirmDelete: 'Are you sure you want to delete this appointment?',
    
    // Theory
    theoryTest: 'Theory Test',
    practiceQuestions: 'Practice Questions',
    categories: 'Categories',
    trafficSigns: 'Traffic Signs',
    roadRules: 'Road Rules',
    safety: 'Safety',
    environment: 'Environment',
    startTest: 'Start Test',
    submitTest: 'Submit Test',
    question: 'Question',
    of: 'of',
    correct: 'Correct',
    incorrect: 'Incorrect',
    score: 'Score',
    percentage: 'Percentage',
    explanation: 'Explanation',
    nextQuestion: 'Next Question',
    previousQuestion: 'Previous Question',
    finishTest: 'Finish Test',
    testResults: 'Test Results',
    congratulations: 'Congratulations!',
    tryAgain: 'Try Again',
    
    // Profile
    personalInfo: 'Personal Information',
    contactInfo: 'Contact Information',
    phone: 'Phone',
    address: 'Address',
    licenseType: 'License Type',
    schoolId: 'School ID',
    saveChanges: 'Save Changes',
    changePassword: 'Change Password',
    currentPassword: 'Current Password',
    newPassword: 'New Password',
    language: 'Language',
    english: 'English',
    krio: 'Krio',
    
    // Common
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    remove: 'Remove',
    search: 'Search',
    filter: 'Filter',
    sort: 'Sort',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    warning: 'Warning',
    info: 'Information',
    yes: 'Yes',
    no: 'No',
    ok: 'OK',
    close: 'Close',
    
    // Messages
    loginSuccess: 'Login successful!',
    registerSuccess: 'Registration successful!',
    logoutSuccess: 'Logout successful!',
    appointmentCreated: 'Appointment created successfully!',
    appointmentUpdated: 'Appointment updated successfully!',
    appointmentDeleted: 'Appointment deleted successfully!',
    profileUpdated: 'Profile updated successfully!',
    testSubmitted: 'Test submitted successfully!',
    invalidCredentials: 'Invalid email or password',
    userExists: 'User already exists',
    networkError: 'Network error. Please try again.',
    serverError: 'Server error. Please try again later.',
    
    // Validation
    required: 'This field is required',
    invalidEmail: 'Please enter a valid email address',
    passwordTooShort: 'Password must be at least 6 characters',
    passwordsDontMatch: 'Passwords do not match',
    invalidPhone: 'Please enter a valid phone number',
    
    // Time
    minutes: 'minutes',
    hours: 'hours',
    days: 'days',
    weeks: 'weeks',
    months: 'months',
    years: 'years',
    
    // Status
    active: 'Active',
    inactive: 'Inactive',
    pending: 'Pending',
    approved: 'Approved',
    rejected: 'Rejected',
    
    // License Types
    car: 'Car',
    motorcycle: 'Motorcycle',
    truck: 'Truck',
    bus: 'Bus',
    learner: 'Learner',
    provisional: 'Provisional',
    full: 'Full License'
  }
};

// Krio translations
const krio = {
  translation: {
    // Navigation
    home: 'Home',
    dashboard: 'Dashboard',
    appointments: 'Appointments',
    theory: 'Theory',
    practical: 'Practical',
    profile: 'Profile',
    logout: 'Logout',
    login: 'Login',
    register: 'Register',
    
    // Authentication
    email: 'Email',
    password: 'Password',
    firstName: 'First Name',
    lastName: 'Last Name',
    confirmPassword: 'Confirm Password',
    forgotPassword: 'Forgot Password?',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    alreadyHaveAccount: 'Already have an account?',
    dontHaveAccount: "Don't have an account?",
    role: 'Role',
    student: 'Student',
    instructor: 'Instructor',
    admin: 'Administrator',
    
    // Dashboard
    welcome: 'Welcome',
    upcomingAppointments: 'Upcoming Appointments',
    theoryProgress: 'Theory Progress',
    practicalProgress: 'Practical Progress',
    recentActivity: 'Recent Activity',
    noAppointments: 'No upcoming appointments',
    viewAll: 'View All',
    
    // Appointments
    scheduleAppointment: 'Schedule Appointment',
    appointmentType: 'Appointment Type',
    date: 'Date',
    time: 'Time',
    duration: 'Duration',
    location: 'Location',
    vehicle: 'Vehicle',
    notes: 'Notes',
    status: 'Status',
    scheduled: 'Scheduled',
    confirmed: 'Confirmed',
    completed: 'Completed',
    cancelled: 'Cancelled',
    instructor: 'Instructor',
    student: 'Student',
    createAppointment: 'Create Appointment',
    editAppointment: 'Edit Appointment',
    deleteAppointment: 'Delete Appointment',
    confirmDelete: 'Are you sure you want to delete this appointment?',
    
    // Theory
    theoryTest: 'Theory Test',
    practiceQuestions: 'Practice Questions',
    categories: 'Categories',
    trafficSigns: 'Traffic Signs',
    roadRules: 'Road Rules',
    safety: 'Safety',
    environment: 'Environment',
    startTest: 'Start Test',
    submitTest: 'Submit Test',
    question: 'Question',
    of: 'of',
    correct: 'Correct',
    incorrect: 'Incorrect',
    score: 'Score',
    percentage: 'Percentage',
    explanation: 'Explanation',
    nextQuestion: 'Next Question',
    previousQuestion: 'Previous Question',
    finishTest: 'Finish Test',
    testResults: 'Test Results',
    congratulations: 'Congratulations!',
    tryAgain: 'Try Again',
    
    // Profile
    personalInfo: 'Personal Information',
    contactInfo: 'Contact Information',
    phone: 'Phone',
    address: 'Address',
    licenseType: 'License Type',
    schoolId: 'School ID',
    saveChanges: 'Save Changes',
    changePassword: 'Change Password',
    currentPassword: 'Current Password',
    newPassword: 'New Password',
    language: 'Language',
    english: 'English',
    krio: 'Krio',
    
    // Common
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    remove: 'Remove',
    search: 'Search',
    filter: 'Filter',
    sort: 'Sort',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    warning: 'Warning',
    info: 'Information',
    yes: 'Yes',
    no: 'No',
    ok: 'OK',
    close: 'Close',
    
    // Messages
    loginSuccess: 'Login successful!',
    registerSuccess: 'Registration successful!',
    logoutSuccess: 'Logout successful!',
    appointmentCreated: 'Appointment created successfully!',
    appointmentUpdated: 'Appointment updated successfully!',
    appointmentDeleted: 'Appointment deleted successfully!',
    profileUpdated: 'Profile updated successfully!',
    testSubmitted: 'Test submitted successfully!',
    invalidCredentials: 'Invalid email or password',
    userExists: 'User already exists',
    networkError: 'Network error. Please try again.',
    serverError: 'Server error. Please try again later.',
    
    // Validation
    required: 'This field is required',
    invalidEmail: 'Please enter a valid email address',
    passwordTooShort: 'Password must be at least 6 characters',
    passwordsDontMatch: 'Passwords do not match',
    invalidPhone: 'Please enter a valid phone number',
    
    // Time
    minutes: 'minutes',
    hours: 'hours',
    days: 'days',
    weeks: 'weeks',
    months: 'months',
    years: 'years',
    
    // Status
    active: 'Active',
    inactive: 'Inactive',
    pending: 'Pending',
    approved: 'Approved',
    rejected: 'Rejected',
    
    // License Types
    car: 'Car',
    motorcycle: 'Motorcycle',
    truck: 'Truck',
    bus: 'Bus',
    learner: 'Learner',
    provisional: 'Provisional',
    full: 'Full License'
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      krio
    },
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;