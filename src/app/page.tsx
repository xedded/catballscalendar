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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-2xl border-4 border-purple-900 overflow-hidden">
          {/* Humoristisk header */}
          <div className="bg-gradient-to-r from-purple-800 to-pink-800 text-center py-6 px-4">
            <h1 className="text-4xl font-serif text-purple-100 mb-2 tracking-wide">
              🐱 Cat Balls Calendar 🐱
            </h1>
            <p className="text-purple-200 text-lg font-serif italic">
              En klassisk väggalmanacka med extra charm
            </p>
            <p className="text-purple-300 text-sm mt-2">
              The ultimate inside joke calendar
            </p>
          </div>

          {/* Navigation */}
          <div className="bg-purple-100 border-b-2 border-purple-300 px-6 py-4 flex justify-between items-center">
            <button
              onClick={goToPreviousMonth}
              className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg font-serif text-lg transition-colors"
            >
              ← Föregående
            </button>

            <h2 className="text-3xl font-serif text-purple-900 tracking-wide">
              {currentDate.toLocaleDateString('sv-SE', { month: 'long', year: 'numeric' })}
            </h2>

            <button
              onClick={goToNextMonth}
              className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg font-serif text-lg transition-colors"
            >
              Nästa →
            </button>
          </div>

          {/* Calendar component */}
          <CalendarMonth currentDate={currentDate} />

          {/* Rolig footer */}
          <div className="bg-purple-100 border-t-2 border-purple-300 px-6 py-4 text-center">
            <p className="text-purple-800 text-sm font-serif">
              😸 Den mest charmiga kalendern du aldrig visste att du behövde! 😸
            </p>
            <p className="text-purple-600 text-xs mt-1">
              Inside joke appreciation society approved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
