'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CatBallsImage {
  url: string;
  month: number;
  verified: boolean;
  description: string;
}

// Curated collection of authentic cat ball images
const CAT_BALLS_COLLECTION: CatBallsImage[] = [
  {
    url: '/images/cat-balls/january.jpg',
    month: 1,
    verified: true,
    description: 'Vintriga pungkulor'
  },
  {
    url: '/images/cat-balls/february.jpg',
    month: 2,
    verified: true,
    description: 'Kärleksfulla pungkulor'
  },
  {
    url: '/images/cat-balls/march.jpg',
    month: 3,
    verified: true,
    description: 'Våriga pungkulor'
  },
  {
    url: '/images/cat-balls/april.jpg',
    month: 4,
    verified: true,
    description: 'Blommande pungkulor'
  },
  {
    url: '/images/cat-balls/may.jpg',
    month: 5,
    verified: true,
    description: 'Majliga pungkulor'
  },
  {
    url: '/images/cat-balls/june.jpg',
    month: 6,
    verified: true,
    description: 'Midsommar pungkulor'
  },
  {
    url: '/images/cat-balls/july.jpg',
    month: 7,
    verified: true,
    description: 'Soliga pungkulor'
  },
  {
    url: '/images/cat-balls/august.jpg',
    month: 8,
    verified: true,
    description: 'Augustiska pungkulor'
  },
  {
    url: '/images/cat-balls/september.jpg',
    month: 9,
    verified: true,
    description: 'Höstiga pungkulor'
  },
  {
    url: '/images/cat-balls/october.jpg',
    month: 10,
    verified: true,
    description: 'Spöklika pungkulor'
  },
  {
    url: '/images/cat-balls/november.jpg',
    month: 11,
    verified: true,
    description: 'Mörka pungkulor'
  },
  {
    url: '/images/cat-balls/december.jpg',
    month: 12,
    verified: true,
    description: 'Julaktiga pungkulor'
  }
];

interface CatBallsImageFinderProps {
  month: number;
}

export default function CatBallsImageFinder({ month }: CatBallsImageFinderProps) {
  const [currentImage, setCurrentImage] = useState<CatBallsImage | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const findImageForMonth = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // First try our curated collection
        const curatedImage = CAT_BALLS_COLLECTION.find(img => img.month === month);
        if (curatedImage) {
          setCurrentImage(curatedImage);
          setIsLoading(false);
          return;
        }

        // If no curated image, try to find one online using The Cat API
        // with AI verification for authenticity
        const response = await fetch('/api/find-cat-balls', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ month }),
        });

        if (!response.ok) {
          throw new Error('Failed to find authentic cat balls image');
        }

        const data = await response.json();
        setCurrentImage(data.image);
      } catch (err) {
        console.error('Error finding cat balls image:', err);
        setError('Kunde inte hitta autentiska pungkulebilder');

        // Fallback to placeholder
        setCurrentImage({
          url: `https://placekitten.com/600/400?random=${month}`,
          month,
          verified: false,
          description: 'Placeholder kattbild (ej verifierade pungkulor)'
        });
      } finally {
        setIsLoading(false);
      }
    };

    findImageForMonth();
  }, [month]);

  if (isLoading) {
    return (
      <div className="w-full h-64 bg-amber-100 rounded-lg flex items-center justify-center">
        <div className="text-amber-700 text-lg font-serif">
          🔍 Letar efter autentiska pungkulor...
        </div>
      </div>
    );
  }

  if (error || !currentImage) {
    return (
      <div className="w-full h-64 bg-red-100 rounded-lg flex items-center justify-center">
        <div className="text-red-700 text-lg font-serif text-center">
          ❌ {error || 'Kunde inte ladda pungkulebilden'}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-amber-50 rounded-lg overflow-hidden border-2 border-amber-200">
      <div className="relative h-64 w-full">
        <Image
          src={currentImage.url}
          alt={`${currentImage.description} för månad ${month}`}
          fill
          className="object-cover"
          priority={month === new Date().getMonth() + 1}
        />
        {!currentImage.verified && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-yellow-900 px-2 py-1 rounded text-xs font-bold">
            ICKE VERIFIERAD
          </div>
        )}
      </div>
      <div className="p-3 text-center">
        <h3 className="text-lg font-serif text-amber-900 mb-1">
          {currentImage.description}
        </h3>
        {currentImage.verified && (
          <div className="text-green-700 text-sm">
            ✅ Verifierade äkta pungkulor
          </div>
        )}
      </div>
    </div>
  );
}