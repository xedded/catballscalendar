'use client';

import { useState } from 'react';
import CalendarMonth from '@/components/CalendarMonth';

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 p-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-2xl border-4 border-amber-900 overflow-hidden">
          {/* Header with vintage design */}
          <div className="bg-gradient-to-r from-amber-800 to-amber-900 text-center py-6 px-4">
            <h1 className="text-4xl font-serif text-amber-100 mb-2 tracking-wide">
              🐱 Cat Balls Calendar 🐱
            </h1>
            <p className="text-amber-200 text-lg font-serif italic">
              En klassisk väggalmanacka med autentiska veterinära diagram
            </p>
            <p className="text-amber-300 text-sm mt-2">
              Featuring authentic feline testicle imagery from veterinary sources
            </p>
          </div>

          {/* Navigation */}
          <div className="bg-amber-100 border-b-2 border-amber-300 px-6 py-4 flex justify-between items-center">
            <button
              onClick={goToPreviousMonth}
              className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-serif text-lg transition-colors shadow-lg"
            >
              ← Föregående
            </button>

            <h2 className="text-3xl font-serif text-amber-900 tracking-wide capitalize">
              {currentDate.toLocaleDateString('sv-SE', { month: 'long', year: 'numeric' })}
            </h2>

            <button
              onClick={goToNextMonth}
              className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-serif text-lg transition-colors shadow-lg"
            >
              Nästa →
            </button>
          </div>

          {/* Calendar component */}
          <CalendarMonth currentDate={currentDate} />

          {/* Footer */}
          <div className="bg-amber-100 border-t-2 border-amber-300 px-6 py-4 text-center">
            <p className="text-amber-800 text-sm font-serif">
              📚 Educational purposes only - Veterinary anatomy reference
            </p>
            <p className="text-amber-600 text-xs mt-1">
              Images sourced from British Veterinary Nursing Association
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
