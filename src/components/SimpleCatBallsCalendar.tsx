'use client';

import React, { useState } from 'react';

interface CalendarMonthProps {
  currentDate: Date;
}

// Cat Balls bilder för varje månad (inside joke!)
const CAT_BALLS_IMAGES = [
  {
    month: 1,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/fffa6553-72de-40ed-93d1-025ca68de051.gif',
    title: 'Januari - Vintriga Cat Balls',
    description: 'Frusna och roliga'
  },
  {
    month: 2,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/73944e6e-992a-4a74-9b6c-4daf356ecf91.gif',
    title: 'Februari - Valentine Cat Balls',
    description: 'Kärleksfulla kulor'
  },
  {
    month: 3,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/fffa6553-72de-40ed-93d1-025ca68de051.gif',
    title: 'Mars - Vår Cat Balls',
    description: 'Blomstrande kulor'
  },
  {
    month: 4,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/73944e6e-992a-4a74-9b6c-4daf356ecf91.gif',
    title: 'April - Påsk Cat Balls',
    description: 'Äggformade'
  },
  {
    month: 5,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/fffa6553-72de-40ed-93d1-025ca68de051.gif',
    title: 'Maj - Blomster Cat Balls',
    description: 'Vårfriska kulor'
  },
  {
    month: 6,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/73944e6e-992a-4a74-9b6c-4daf356ecf91.gif',
    title: 'Juni - Midsommar Cat Balls',
    description: 'Soliga kulor'
  },
  {
    month: 7,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/fffa6553-72de-40ed-93d1-025ca68de051.gif',
    title: 'Juli - Semester Cat Balls',
    description: 'Avslappnade kulor'
  },
  {
    month: 8,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/73944e6e-992a-4a74-9b6c-4daf356ecf91.gif',
    title: 'Augusti - Sensommar Cat Balls',
    description: 'Mogna kulor'
  },
  {
    month: 9,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/fffa6553-72de-40ed-93d1-025ca68de051.gif',
    title: 'September - Höst Cat Balls',
    description: 'Gyllene kulor'
  },
  {
    month: 10,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/73944e6e-992a-4a74-9b6c-4daf356ecf91.gif',
    title: 'Oktober - Halloween Cat Balls',
    description: 'Spöklika kulor'
  },
  {
    month: 11,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/fffa6553-72de-40ed-93d1-025ca68de051.gif',
    title: 'November - Mörka Cat Balls',
    description: 'Vintermörka kulor'
  },
  {
    month: 12,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/73944e6e-992a-4a74-9b6c-4daf356ecf91.gif',
    title: 'December - Jul Cat Balls',
    description: 'Festliga kulor'
  }
];

// Svenska helgdagar
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

function CatBallsImage({ imageData, month }: { imageData: typeof CAT_BALLS_IMAGES[0]; month: number }) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-purple-100 animate-pulse flex items-center justify-center">
          <div className="text-purple-600 text-sm">Laddar cat balls...</div>
        </div>
      )}

      <img
        src={imageData.url}
        alt={imageData.title}
        className="w-full h-full object-contain bg-white"
        onError={() => setImageError(true)}
        onLoad={() => setIsLoading(false)}
        crossOrigin="anonymous"
      />

      {imageError && (
        <div className="absolute inset-0 bg-pink-100 flex items-center justify-center">
          <div className="text-center text-pink-600">
            <div className="text-4xl mb-2">🐱</div>
            <div className="text-sm">Cat Balls Loading...</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CalendarMonth({ currentDate }: CalendarMonthProps) {
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const today = new Date();

  const currentMonthImage = CAT_BALLS_IMAGES.find(img => img.month === month) || CAT_BALLS_IMAGES[0];

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
    const monthStr = month.toString().padStart(2, '0');
    const dayStr = day.toString().padStart(2, '0');
    return `${year}-${monthStr}-${dayStr}`;
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
    <div className="bg-purple-50">
      {/* Cat Balls bild för månaden */}
      <div className="px-6 py-4 bg-gradient-to-b from-purple-100 to-purple-200">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg border-2 border-purple-300 overflow-hidden">
          <div className="relative h-64 w-full">
            <CatBallsImage imageData={currentMonthImage} month={month} />
          </div>

          <div className="p-4 text-center bg-purple-100">
            <h3 className="text-lg font-serif font-bold text-purple-900 mb-1">
              {currentMonthImage.title}
            </h3>
            <p className="text-sm text-purple-700 italic">
              {currentMonthImage.description}
            </p>
            <div className="mt-2 text-xs text-pink-600">
              🐱 Autentiska Cat Balls! 🐱
            </div>
          </div>
        </div>
      </div>

      {/* Kalender */}
      <div className="p-6">
        {/* Veckodagar */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekdays.map((day) => (
            <div
              key={day}
              className="p-2 text-center font-serif font-bold text-purple-900 bg-purple-200 border border-purple-300"
            >
              {day.slice(0, 3)}
            </div>
          ))}
        </div>

        {/* Kalenderdagar */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => {
            if (day === null) {
              return <div key={index} className="h-20 bg-purple-100 border border-purple-200"></div>;
            }

            const passed = isDatePassed(day);
            const isCurrentDay = isToday(day);
            const holiday = isHoliday(day);

            return (
              <div
                key={day}
                className={`
                  h-20 border-2 border-purple-300 bg-white relative p-1 flex flex-col
                  ${isCurrentDay ? 'border-purple-600 bg-purple-100' : ''}
                  ${holiday ? 'bg-red-50' : ''}
                `}
              >
                <div className={`
                  text-lg font-serif font-bold
                  ${passed ? 'text-gray-400' : 'text-purple-900'}
                  ${isCurrentDay ? 'text-purple-800' : ''}
                  ${holiday ? 'text-red-700' : ''}
                `}>
                  {day}
                </div>

                {passed && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-red-500 text-3xl font-bold transform rotate-12">✗</div>
                  </div>
                )}

                {holiday && (
                  <div className="text-xs text-red-600 font-bold mt-auto">
                    {holiday.length > 10 ? holiday.substring(0, 10) + '...' : holiday}
                  </div>
                )}

                {isCurrentDay && (
                  <div className="absolute top-0 right-0 w-3 h-3 bg-purple-600 rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Rolig footer */}
      <div className="px-6 pb-4 text-center">
        <p className="text-xs text-purple-600 italic">
          😸 Den ultimata inside joke-kalendern med äkta cat balls! 😸
        </p>
      </div>
    </div>
  );
}