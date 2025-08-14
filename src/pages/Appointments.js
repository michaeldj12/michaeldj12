import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Plus } from 'lucide-react';

const Appointments = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {t('appointments')}
        </h1>
        <p className="text-gray-600 mt-2">
          Manage your driving lessons and appointments.
        </p>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">
              {t('appointments')}
            </h2>
            <button className="btn btn-primary">
              <Plus className="w-4 h-4 mr-2" />
              {t('scheduleAppointment')}
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="text-center py-12">
            <Calendar className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No appointments scheduled
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by scheduling your first appointment.
            </p>
            <div className="mt-6">
              <button className="btn btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                {t('scheduleAppointment')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;