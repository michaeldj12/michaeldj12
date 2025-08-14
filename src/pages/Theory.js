import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Play } from 'lucide-react';

const Theory = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {t('theory')}
        </h1>
        <p className="text-gray-600 mt-2">
          Practice driving theory and prepare for your test.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card">
          <div className="card-body text-center">
            <BookOpen className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Traffic Signs
            </h3>
            <p className="text-gray-600 mb-4">
              Learn and practice traffic signs recognition.
            </p>
            <button className="btn btn-primary">
              <Play className="w-4 h-4 mr-2" />
              Start Practice
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-body text-center">
            <BookOpen className="mx-auto h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Road Rules
            </h3>
            <p className="text-gray-600 mb-4">
              Master the rules of the road.
            </p>
            <button className="btn btn-primary">
              <Play className="w-4 h-4 mr-2" />
              Start Practice
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-body text-center">
            <BookOpen className="mx-auto h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Safety
            </h3>
            <p className="text-gray-600 mb-4">
              Learn about road safety and best practices.
            </p>
            <button className="btn btn-primary">
              <Play className="w-4 h-4 mr-2" />
              Start Practice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theory;