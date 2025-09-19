'use client';

import { useState } from 'react';
import CalendarMonth from '@/components/AuthenticCatBallsCalendar';

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Material Design Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-sm mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              🐱 Cat Balls Calendar
            </h1>
            <p className="text-gray-600 text-sm">
              En humoristisk kalender med charm
            </p>
          </div>
        </div>
      </div>

      {/* Clean Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-sm mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={goToPreviousMonth}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
          >
            ← Föregående
          </button>

          <h2 className="text-lg font-semibold text-gray-900 text-center flex-1 mx-4">
            {currentDate.toLocaleDateString('sv-SE', { month: 'long', year: 'numeric' })}
          </h2>

          <button
            onClick={goToNextMonth}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
          >
            Nästa →
          </button>
        </div>
      </div>

      {/* Calendar component */}
      <CalendarMonth currentDate={currentDate} />
    </div>
  );
}
