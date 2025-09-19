'use client';

import React from 'react';
import Image from 'next/image';

interface CalendarMonthProps {
  currentDate: Date;
}

// Curated collection of authentic veterinary cat testicle images
const AUTHENTIC_CAT_BALLS_IMAGES = [
  {
    month: 1,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/fffa6553-72de-40ed-93d1-025ca68de051.gif',
    title: 'Januari - Reproduktionssystemet hos katt',
    description: 'Veterinärt diagram över hankatts fortplantningsorgan'
  },
  {
    month: 2,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/73944e6e-992a-4a74-9b6c-4daf356ecf91.gif',
    title: 'Februari - Testiklar i pungen',
    description: 'Detaljerat diagram över testiklarna inom skrotum'
  },
  {
    month: 3,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/fffa6553-72de-40ed-93d1-025ca68de051.gif',
    title: 'Mars - Vårens hankatts anatomi',
    description: 'Komplett reproduktionssystem hos tomcat'
  },
  {
    month: 4,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/73944e6e-992a-4a74-9b6c-4daf356ecf91.gif',
    title: 'April - Påsktestiklar',
    description: 'Detaljstudie av manliga könsorganen'
  },
  {
    month: 5,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/fffa6553-72de-40ed-93d1-025ca68de051.gif',
    title: 'Maj - Blomstrande pungkulor',
    description: 'Reproduktivt system i vårens tecken'
  },
  {
    month: 6,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/73944e6e-992a-4a74-9b6c-4daf356ecf91.gif',
    title: 'Juni - Midsommartestiklar',
    description: 'Solbelysta anatomiska detaljer'
  },
  {
    month: 7,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/fffa6553-72de-40ed-93d1-025ca68de051.gif',
    title: 'Juli - Sommarsoltestiklar',
    description: 'Varma veterinära diagram'
  },
  {
    month: 8,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/73944e6e-992a-4a74-9b6c-4daf356ecf91.gif',
    title: 'Augusti - Sensommarpungkulor',
    description: 'Mogna anatomiska strukturer'
  },
  {
    month: 9,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/fffa6553-72de-40ed-93d1-025ca68de051.gif',
    title: 'September - Hösttestiklar',
    description: 'Gyllene reproduktionsorgan'
  },
  {
    month: 10,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/73944e6e-992a-4a74-9b6c-4daf356ecf91.gif',
    title: 'Oktober - Halloween pungkulor',
    description: 'Spöklikt anatomiska hemligheter'
  },
  {
    month: 11,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/fffa6553-72de-40ed-93d1-025ca68de051.gif',
    title: 'November - Mörka testiklar',
    description: 'Vintriga reproduktiva strukturer'
  },
  {
    month: 12,
    url: 'https://storage.uk.cloud.ovh.net/v1/AUTH_f3100dad5acd4df793f8778d19bcea24/bvna/73944e6e-992a-4a74-9b6c-4daf356ecf91.gif',
    title: 'December - Jultestiklar',
    description: 'Festliga anatomiska presenter'
  }
];

// Swedish holidays 2024
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

export default function CalendarMonth({ currentDate }: CalendarMonthProps) {
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const today = new Date();

  // Get the current month's authentic cat balls image
  const currentMonthImage = AUTHENTIC_CAT_BALLS_IMAGES.find(img => img.month === month)
    || AUTHENTIC_CAT_BALLS_IMAGES[0];

  // Calendar grid calculation
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const lastDayOfMonth = new Date(year, month, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const firstDayWeekday = firstDayOfMonth.getDay();
  const startDay = firstDayWeekday === 0 ? 6 : firstDayWeekday - 1; // Monday = 0

  const weekdays = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];

  // Generate calendar days
  const calendarDays = [];

  // Empty cells for days before month starts
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }

  // Days of the month
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
    <div className="bg-amber-50">
      {/* Featured Cat Balls Image */}
      <div className="px-6 py-4 bg-gradient-to-b from-amber-50 to-amber-100">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg border-2 border-amber-300 overflow-hidden">
          <div className="relative h-64 w-full">
            <Image
              src={currentMonthImage.url}
              alt={currentMonthImage.title}
              fill
              className="object-contain bg-white"
              priority
            />
          </div>
          <div className="p-4 text-center bg-amber-100">
            <h3 className="text-lg font-serif font-bold text-amber-900 mb-1">
              {currentMonthImage.title}
            </h3>
            <p className="text-sm text-amber-700 italic">
              {currentMonthImage.description}
            </p>
            <div className="mt-2 text-xs text-green-700">
              ✅ Autentisk veterinär källa
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-6">
        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekdays.map((day) => (
            <div
              key={day}
              className="p-2 text-center font-serif font-bold text-amber-900 bg-amber-200 border border-amber-300"
            >
              {day.slice(0, 3)}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => {
            if (day === null) {
              return <div key={index} className="h-20 bg-amber-100 border border-amber-200"></div>;
            }

            const passed = isDatePassed(day);
            const isCurrentDay = isToday(day);
            const holiday = isHoliday(day);

            return (
              <div
                key={day}
                className={`
                  h-20 border-2 border-amber-300 bg-white relative p-1 flex flex-col
                  ${isCurrentDay ? 'border-amber-600 bg-amber-100' : ''}
                  ${holiday ? 'bg-red-50' : ''}
                `}
              >
                {/* Date number */}
                <div className={`
                  text-lg font-serif font-bold
                  ${passed ? 'text-gray-400' : 'text-amber-900'}
                  ${isCurrentDay ? 'text-amber-800' : ''}
                  ${holiday ? 'text-red-700' : ''}
                `}>
                  {day}
                </div>

                {/* Red X for passed days */}
                {passed && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-red-500 text-3xl font-bold transform rotate-12">
                      ✗
                    </div>
                  </div>
                )}

                {/* Holiday indicator */}
                {holiday && (
                  <div className="text-xs text-red-600 font-bold mt-auto">
                    {holiday.length > 10 ? holiday.substring(0, 10) + '...' : holiday}
                  </div>
                )}

                {/* Today indicator */}
                {isCurrentDay && (
                  <div className="absolute top-0 right-0 w-3 h-3 bg-amber-600 rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Image source credit */}
      <div className="px-6 pb-4 text-center">
        <p className="text-xs text-amber-600 italic">
          Bilder från British Veterinary Nursing Association - Autentiska veterinära diagram
        </p>
      </div>
    </div>
  );
}