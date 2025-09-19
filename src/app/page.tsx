'use client';

import { useState } from 'react';
import CalendarMonth from '@/components/CalendarMonthProfessional';

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-xl border border-slate-300 overflow-hidden">
          {/* Professional header */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-center py-8 px-6">
            <h1 className="text-3xl font-bold text-white mb-3 tracking-wide">
              Veterinary Anatomy Calendar
            </h1>
            <p className="text-slate-200 text-lg mb-2">
              Professional Feline Reproductive System Reference
            </p>
            <p className="text-slate-300 text-sm">
              Educational documentation for veterinary professionals and students
            </p>
          </div>

          {/* Professional navigation */}
          <div className="bg-slate-50 border-b border-slate-200 px-8 py-6 flex justify-between items-center">
            <button
              onClick={goToPreviousMonth}
              className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-md font-medium text-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              ← Previous Month
            </button>

            <h2 className="text-2xl font-bold text-slate-800 tracking-wide capitalize">
              {currentDate.toLocaleDateString('sv-SE', { month: 'long', year: 'numeric' })}
            </h2>

            <button
              onClick={goToNextMonth}
              className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-md font-medium text-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Next Month →
            </button>
          </div>

          {/* Calendar component */}
          <CalendarMonth currentDate={currentDate} />

          {/* Professional footer */}
          <div className="bg-slate-50 border-t border-slate-200 px-8 py-6">
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center space-x-4 text-sm text-slate-600">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Veterinary Educational Source
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Professional Reference Material
                </span>
              </div>
              <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
                This educational calendar features authentic veterinary anatomy diagrams sourced from 
                the British Veterinary Nursing Association. All content is intended for educational 
                and professional development purposes in veterinary medicine.
              </p>
              <div className="pt-2 border-t border-slate-300 text-xs text-slate-400">
                Licensed Educational Content | Professional Use Only
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
