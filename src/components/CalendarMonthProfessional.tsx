'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface CalendarMonthProps {
  currentDate: Date;
}

// Professional collection of veterinary cat anatomy references
const PROFESSIONAL_CAT_ANATOMY_IMAGES = [
  {
    month: 1,
    proxyUrl: '/api/proxy-image?url=https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/fffa6553-72de-40ed-93d1-025ca68de051.gif',
    fallbackUrl: '/images/professional-cat-anatomy.svg',
    title: 'Januari - Feline Reproductive System',
    description: 'Anatomical diagram of male cat reproductive organs',
    technicalNote: 'Testicular descent occurs at 6-8 weeks of age'
  },
  {
    month: 2,
    proxyUrl: '/api/proxy-image?url=https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/73944e6e-992a-4a74-9b6c-4daf356ecf91.gif',
    fallbackUrl: '/images/professional-cat-anatomy.svg',
    title: 'Februari - Scrotal Anatomy',
    description: 'Detailed illustration of testicular positioning within scrotum',
    technicalNote: 'Scrotal temperature regulation essential for spermatogenesis'
  },
  {
    month: 3,
    proxyUrl: '/api/proxy-image?url=https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/fffa6553-72de-40ed-93d1-025ca68de051.gif',
    fallbackUrl: '/images/professional-cat-anatomy.svg',
    title: 'Mars - Male Cat Anatomy',
    description: 'Complete reproductive system overview',
    technicalNote: 'Professional veterinary examination techniques'
  },
  {
    month: 4,
    proxyUrl: '/api/proxy-image?url=https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/73944e6e-992a-4a74-9b6c-4daf356ecf91.gif',
    fallbackUrl: '/images/professional-cat-anatomy.svg',
    title: 'April - Testicular Development',
    description: 'Developmental anatomy of male reproductive organs',
    technicalNote: 'Bilateral symmetry assessment protocols'
  },
  {
    month: 5,
    proxyUrl: '/api/proxy-image?url=https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/fffa6553-72de-40ed-93d1-025ca68de051.gif',
    fallbackUrl: '/images/professional-cat-anatomy.svg',
    title: 'Maj - Reproductive Health',
    description: 'Veterinary assessment guidelines',
    technicalNote: 'Normal anatomical variations documented'
  },
  {
    month: 6,
    proxyUrl: '/api/proxy-image?url=https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/73944e6e-992a-4a74-9b6c-4daf356ecf91.gif',
    fallbackUrl: '/images/professional-cat-anatomy.svg',
    title: 'Juni - Clinical Anatomy',
    description: 'Professional examination reference',
    technicalNote: 'Palpation techniques for veterinary practice'
  },
  {
    month: 7,
    proxyUrl: '/api/proxy-image?url=https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/fffa6553-72de-40ed-93d1-025ca68de051.gif',
    fallbackUrl: '/images/professional-cat-anatomy.svg',
    title: 'Juli - Anatomical Reference',
    description: 'Educational veterinary diagram',
    technicalNote: 'Temperature-dependent reproductive function'
  },
  {
    month: 8,
    proxyUrl: '/api/proxy-image?url=https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/73944e6e-992a-4a74-9b6c-4daf356ecf91.gif',
    fallbackUrl: '/images/professional-cat-anatomy.svg',
    title: 'Augusti - Reproductive Anatomy',
    description: 'Detailed anatomical structures',
    technicalNote: 'Seasonal reproductive physiology considerations'
  },
  {
    month: 9,
    proxyUrl: '/api/proxy-image?url=https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/fffa6553-72de-40ed-93d1-025ca68de051.gif',
    fallbackUrl: '/images/professional-cat-anatomy.svg',
    title: 'September - Veterinary Anatomy',
    description: 'Professional diagnostic reference',
    technicalNote: 'Age-related anatomical changes observed'
  },
  {
    month: 10,
    proxyUrl: '/api/proxy-image?url=https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/73944e6e-992a-4a74-9b6c-4daf356ecf91.gif',
    fallbackUrl: '/images/professional-cat-anatomy.svg',
    title: 'Oktober - Clinical Reference',
    description: 'Anatomical assessment guidelines',
    technicalNote: 'Pathological condition identification methods'
  },
  {
    month: 11,
    proxyUrl: '/api/proxy-image?url=https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/fffa6553-72de-40ed-93d1-025ca68de051.gif',
    fallbackUrl: '/images/professional-cat-anatomy.svg',
    title: 'November - Medical Anatomy',
    description: 'Educational diagnostic reference',
    technicalNote: 'Professional examination protocols'
  },
  {
    month: 12,
    proxyUrl: '/api/proxy-image?url=https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/73944e6e-992a-4a74-9b6c-4daf356ecf91.gif',
    fallbackUrl: '/images/professional-cat-anatomy.svg',
    title: 'December - Anatomical Study',
    description: 'Year-end veterinary reference compilation',
    technicalNote: 'Comprehensive anatomical documentation'
  }
];

// Enhanced Swedish holidays
const SWEDISH_HOLIDAYS = {
  '2024-01-01': 'Nyårsdagen',
  '2024-01-06': 'Trettondedag jul',
  '2024-03-29': 'Långfredag',
  '2024-03-31': 'Påskdagen',
  '2024-04-01': 'Annandag påsk',
  '2024-04-30': 'Valborgsmässoafton',
  '2024-05-01': 'Första maj',
  '2024-05-09': 'Kristi himmelfärdsdag',
  '2024-05-19': 'Pingstdagen',
  '2024-06-06': 'Nationaldagen',
  '2024-06-21': 'Midsommarafton',
  '2024-06-22': 'Midsommardagen',
  '2024-11-02': 'Alla helgons dag',
  '2024-12-24': 'Julafton',
  '2024-12-25': 'Juldagen',
  '2024-12-26': 'Annandag jul',
  '2024-12-31': 'Nyårsafton'
};

// Professional Image Component with error handling
function ProfessionalAnatomyImage({ imageData, month }: { imageData: typeof PROFESSIONAL_CAT_ANATOMY_IMAGES[0]; month: number }) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center">
          <div className="text-slate-600 text-sm">Loading anatomical reference...</div>
        </div>
      )}

      <Image
        src={imageError ? imageData.fallbackUrl : imageData.proxyUrl}
        alt={imageData.title}
        fill
        className="object-contain bg-white"
        onError={handleImageError}
        onLoad={handleImageLoad}
        priority={month === new Date().getMonth() + 1}
      />

      {imageError && (
        <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
          Professional Reference
        </div>
      )}
    </div>
  );
}

export default function CalendarMonth({ currentDate }: CalendarMonthProps) {
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const today = new Date();

  const currentMonthImage = PROFESSIONAL_CAT_ANATOMY_IMAGES.find(img => img.month === month)
    || PROFESSIONAL_CAT_ANATOMY_IMAGES[0];

  const firstDayOfMonth = new Date(year, month - 1, 1);
  const lastDayOfMonth = new Date(year, month, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const firstDayWeekday = firstDayOfMonth.getDay();
  const startDay = firstDayWeekday === 0 ? 6 : firstDayWeekday - 1;

  const weekdays = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];

  const calendarDays = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const formatDateKey = (day: number) => {
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  };

  const isDatePassed = (day: number) => {
    const date = new Date(year, month - 1, day);
    return date < today;
  };

  const isToday = (day: number) => {
    return year === today.getFullYear() &&
           month === today.getMonth() + 1 &&
           day === today.getDate();
  };

  const isHoliday = (day: number) => {
    const dateKey = formatDateKey(day);
    return SWEDISH_HOLIDAYS[dateKey as keyof typeof SWEDISH_HOLIDAYS];
  };

  return (
    <div className="bg-white">
      {/* Professional Anatomy Reference Section */}
      <div className="px-8 py-6 bg-gradient-to-b from-slate-50 to-slate-100 border-b border-slate-200">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-4">
            <h3 className="text-xl font-semibold text-slate-800 mb-1">
              Veterinary Anatomy Reference
            </h3>
            <p className="text-sm text-slate-600">
              Educational documentation for professional use
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-slate-300 overflow-hidden">
            <div className="relative h-80 w-full">
              <ProfessionalAnatomyImage imageData={currentMonthImage} month={month} />
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1 text-sm">
                    {currentMonthImage.title}
                  </h4>
                  <p className="text-xs text-slate-600 mb-2">
                    {currentMonthImage.description}
                  </p>
                </div>
                <div className="text-xs">
                  <div className="text-slate-700 font-medium mb-1">Clinical Notes:</div>
                  <div className="text-slate-600">{currentMonthImage.technicalNote}</div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-300 flex justify-between items-center text-xs">
                <span className="text-green-700 font-medium">
                  ✓ Veterinary Educational Source
                </span>
                <span className="text-slate-500">
                  British Veterinary Nursing Association
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Calendar Grid */}
      <div className="p-8">
        <div className="grid grid-cols-7 gap-px mb-px">
          {weekdays.map((day) => (
            <div
              key={day}
              className="p-3 text-center font-medium text-slate-700 bg-slate-100 border border-slate-200"
            >
              {day.slice(0, 3).toUpperCase()}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-px border border-slate-200">
          {calendarDays.map((day, index) => {
            if (day === null) {
              return <div key={index} className="h-24 bg-slate-50 border border-slate-100"></div>;
            }

            const passed = isDatePassed(day);
            const isCurrentDay = isToday(day);
            const holiday = isHoliday(day);

            return (
              <div
                key={day}
                className={`
                  h-24 border border-slate-200 bg-white relative p-2 flex flex-col
                  hover:bg-slate-50 transition-colors
                  ${isCurrentDay ? 'bg-blue-50 border-blue-300 ring-2 ring-blue-200' : ''}
                  ${holiday ? 'bg-red-50 border-red-200' : ''}
                `}
              >
                <div className={`
                  text-lg font-semibold leading-none
                  ${passed ? 'text-slate-400' : 'text-slate-800'}
                  ${isCurrentDay ? 'text-blue-800' : ''}
                  ${holiday ? 'text-red-700' : ''}
                `}>
                  {day}
                </div>

                {passed && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-red-400 text-2xl font-bold opacity-60">✗</div>
                  </div>
                )}

                {holiday && (
                  <div className="text-xs text-red-600 font-medium mt-auto leading-tight">
                    {holiday.length > 12 ? holiday.substring(0, 12) + '...' : holiday}
                  </div>
                )}

                {isCurrentDay && (
                  <div className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-8 pb-6 text-center">
        <div className="text-xs text-slate-500 leading-relaxed">
          <div className="mb-1">
            Educational veterinary anatomy references for professional use only
          </div>
          <div>
            Source: British Veterinary Nursing Association | Licensed Educational Content
          </div>
        </div>
      </div>
    </div>
  );
}