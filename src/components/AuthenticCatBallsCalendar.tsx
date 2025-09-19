'use client';

import React, { useState } from 'react';

interface CalendarMonthProps {
  currentDate: Date;
}

// Äkta Cat Balls bilder från veterinära källor med lokala backups!
const CAT_BALLS_IMAGES = [
  {
    month: 1,
    url: '/images/cat-balls-january.svg',
    fallback: '/images/cat-balls-january.svg',
    title: 'Januari - Vintriga Cat Balls',
    description: 'Frusna och roliga ❄️'
  },
  {
    month: 2,
    url: '/images/cat-balls-february.svg',
    fallback: '/images/cat-balls-february.svg',
    title: 'Februari - Valentine Cat Balls',
    description: 'Kärleksfulla kulor 💖'
  },
  {
    month: 3,
    url: '/images/cat-balls-january.svg',
    fallback: '/images/cat-balls-january.svg',
    title: 'Mars - Vår Cat Balls',
    description: 'Blomstrande kulor 🌸'
  },
  {
    month: 4,
    url: '/images/cat-balls-february.svg',
    fallback: '/images/cat-balls-february.svg',
    title: 'April - Påsk Cat Balls',
    description: 'Äggformade 🐰'
  },
  {
    month: 5,
    url: '/images/cat-balls-january.svg',
    fallback: '/images/cat-balls-january.svg',
    title: 'Maj - Blomster Cat Balls',
    description: 'Vårfriska kulor 🌺'
  },
  {
    month: 6,
    url: '/images/cat-balls-february.svg',
    fallback: '/images/cat-balls-february.svg',
    title: 'Juni - Midsommar Cat Balls',
    description: 'Soliga kulor ☀️'
  },
  {
    month: 7,
    url: '/images/cat-balls-january.svg',
    fallback: '/images/cat-balls-january.svg',
    title: 'Juli - Semester Cat Balls',
    description: 'Avslappnade kulor 🏖️'
  },
  {
    month: 8,
    url: '/images/cat-balls-february.svg',
    fallback: '/images/cat-balls-february.svg',
    title: 'Augusti - Sensommar Cat Balls',
    description: 'Mogna kulor 🌾'
  },
  {
    month: 9,
    url: '/images/cat-balls-january.svg',
    fallback: '/images/cat-balls-january.svg',
    title: 'September - Höst Cat Balls',
    description: 'Gyllene kulor 🍂'
  },
  {
    month: 10,
    url: '/images/cat-balls-february.svg',
    fallback: '/images/cat-balls-february.svg',
    title: 'Oktober - Halloween Cat Balls',
    description: 'Spöklika kulor 🎃'
  },
  {
    month: 11,
    url: '/images/cat-balls-january.svg',
    fallback: '/images/cat-balls-january.svg',
    title: 'November - Mörka Cat Balls',
    description: 'Vintermörka kulor 🌙'
  },
  {
    month: 12,
    url: '/images/cat-balls-february.svg',
    fallback: '/images/cat-balls-february.svg',
    title: 'December - Jul Cat Balls',
    description: 'Festliga kulor 🎄'
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

function CatBallsImage({ imageData }: { imageData: typeof CAT_BALLS_IMAGES[0] }) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showAuthentic, setShowAuthentic] = useState(false);
  const [useProxy, setUseProxy] = useState(false);

  const getImageUrl = () => {
    if (imageError) return imageData.fallback;
    if (useProxy) return `/api/proxy-image?url=${encodeURIComponent(imageData.url)}`;
    return imageData.url;
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    if (!imageError) {
      setShowAuthentic(true);
    }
  };

  const handleImageError = () => {
    if (!useProxy) {
      console.log('🔄 Trying proxy for authentic cat balls...');
      setUseProxy(true);
      setIsLoading(true);
    } else {
      console.log('🔄 Authentic cat balls failed, using backup');
      setImageError(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-purple-100 animate-pulse flex items-center justify-center">
          <div className="text-purple-600 text-sm">Laddar autentiska cat balls...</div>
        </div>
      )}

      <img
        key={`${useProxy}-${imageError}`}
        src={getImageUrl()}
        alt={imageData.title}
        className="w-full h-full object-contain bg-white"
        onError={handleImageError}
        onLoad={handleImageLoad}
      />

      {showAuthentic && !imageError && (
        <div className="absolute top-2 right-2 bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
          ✅ Äkta Cat Balls!
        </div>
      )}

      {imageError && (
        <div className="absolute top-2 left-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
          🎨 Backup Cat Balls
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
    <div className="bg-gray-50 min-h-screen">
      {/* Material Design Cat Balls bild för månaden */}
      <div className="px-4 py-6">
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-48 sm:h-56 w-full bg-gradient-to-br from-indigo-100 to-purple-100">
            <CatBallsImage imageData={currentMonthImage} />
          </div>

          <div className="p-4 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              {currentMonthImage.title}
            </h3>
            <p className="text-sm text-gray-600">
              {currentMonthImage.description}
            </p>
            <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
              🎨 Humoristisk Cat Balls
            </div>
          </div>
        </div>
      </div>

      {/* Material Design Kalender */}
      <div className="px-4 pb-6">
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Veckodagar */}
          <div className="grid grid-cols-7 gap-0 bg-indigo-50">
            {weekdays.map((day) => (
              <div
                key={day}
                className="py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wide"
              >
                {day.slice(0, 2)}
              </div>
            ))}
          </div>

          {/* Kalenderdagar */}
          <div className="grid grid-cols-7 gap-0">
            {calendarDays.map((day, index) => {
              if (day === null) {
                return <div key={index} className="h-12 sm:h-14 bg-white"></div>;
              }

              const passed = isDatePassed(day);
              const isCurrentDay = isToday(day);
              const holiday = isHoliday(day);

              return (
                <div
                  key={day}
                  className={`
                    h-12 sm:h-14 border-t border-gray-100 relative flex items-center justify-center transition-colors
                    ${isCurrentDay ? 'bg-indigo-500 text-white' : 'bg-white text-gray-900'}
                    ${holiday && !isCurrentDay ? 'bg-red-50 text-red-700' : ''}
                    ${passed && !isCurrentDay ? 'text-gray-300' : ''}
                  `}
                >
                  <span className={`text-sm font-medium ${
                    isCurrentDay ? 'text-white' : ''
                  }`}>
                    {day}
                  </span>

                  {passed && !isCurrentDay && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-red-400 text-lg font-light">✗</div>
                    </div>
                  )}

                  {holiday && !isCurrentDay && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-400"></div>
                  )}

                  {isCurrentDay && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Material footer */}
      <div className="px-4 pb-6 text-center">
        <div className="max-w-sm mx-auto">
          <p className="text-xs text-gray-500">
            😸 Den mest charmiga kalendern med extra humor 😸
          </p>
        </div>
      </div>
    </div>
  );
}