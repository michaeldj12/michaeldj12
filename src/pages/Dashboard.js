import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import { 
  Calendar, 
  BookOpen, 
  Car, 
  TrendingUp, 
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Dashboard = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  // Mock data - in a real app, this would come from API
  const stats = [
    {
      title: 'Upcoming Appointments',
      value: '3',
      icon: Calendar,
      color: 'bg-blue-500',
      change: '+2 this week'
    },
    {
      title: 'Theory Progress',
      value: '75%',
      icon: BookOpen,
      color: 'bg-purple-500',
      change: '+5% this week'
    },
    {
      title: 'Practical Lessons',
      value: '12',
      icon: Car,
      color: 'bg-green-500',
      change: '+3 this month'
    },
    {
      title: 'Hours Completed',
      value: '24',
      icon: Clock,
      color: 'bg-orange-500',
      change: '+6 this month'
    }
  ];

  const recentAppointments = [
    {
      id: 1,
      type: 'theory',
      title: 'Traffic Signs Practice',
      date: '2024-01-15',
      time: '10:00 AM',
      status: 'scheduled'
    },
    {
      id: 2,
      type: 'practical',
      title: 'Driving Lesson',
      date: '2024-01-16',
      time: '2:00 PM',
      status: 'confirmed'
    },
    {
      id: 3,
      type: 'theory',
      title: 'Road Rules Test',
      date: '2024-01-18',
      time: '11:30 AM',
      status: 'scheduled'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled':
        return 'text-blue-600 bg-blue-100';
      case 'confirmed':
        return 'text-green-600 bg-green-100';
      case 'completed':
        return 'text-gray-600 bg-gray-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'theory':
        return <BookOpen className="w-5 h-5" />;
      case 'practical':
        return <Car className="w-5 h-5" />;
      case 'exam':
        return <CheckCircle className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {t('welcome')}, {user?.firstName}!
        </h1>
        <p className="text-gray-600 mt-2">
          Here's an overview of your driving education progress.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="card p-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.color} text-white`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {stat.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Appointments */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="card-header">
              <h2 className="text-lg font-semibold text-gray-900">
                {t('upcomingAppointments')}
              </h2>
            </div>
            <div className="card-body">
              {recentAppointments.length > 0 ? (
                <div className="space-y-4">
                  {recentAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                          {getTypeIcon(appointment.type)}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {appointment.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                          {t(appointment.status)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">
                    {t('noAppointments')}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Get started by scheduling your first appointment.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions & Progress */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="card">
            <div className="card-header">
              <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
            </div>
            <div className="card-body">
              <div className="space-y-3">
                <button className="w-full btn btn-primary">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Start Theory Test
                </button>
                <button className="w-full btn btn-outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </button>
                <button className="w-full btn btn-outline">
                  <Car className="w-4 h-4 mr-2" />
                  Book Practical Lesson
                </button>
              </div>
            </div>
          </div>

          {/* Progress Overview */}
          <div className="card">
            <div className="card-header">
              <h2 className="text-lg font-semibold text-gray-900">Progress Overview</h2>
            </div>
            <div className="card-body">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Theory Progress</span>
                    <span className="text-gray-900">75%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Practical Hours</span>
                    <span className="text-gray-900">24/40</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Tests Passed</span>
                    <span className="text-gray-900">3/5</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="card">
            <div className="card-header">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <div className="card-body">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-900">Completed Traffic Signs test</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-900">Upcoming theory exam reminder</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-900">Practical lesson scheduled</p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;