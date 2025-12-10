'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AdventDay } from '@/lib/calendar-config';
import { isDayUnlocked, getUnlockCountdown } from '@/lib/time-utils';

interface CalendarDoorProps {
  day: AdventDay;
  size?: 'small' | 'medium' | 'wide' | 'tall';
}

export default function CalendarDoor({ day, size = 'medium' }: CalendarDoorProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [countdown, setCountdown] = useState<string>('');

  useEffect(() => {
    // Check unlock status
    const checkUnlock = () => {
      const isUnlocked = isDayUnlocked(day.unlockDate);
      setUnlocked(isUnlocked);

      if (!isUnlocked) {
        const { timeUntil } = getUnlockCountdown(day.unlockDate);
        setCountdown(timeUntil || '');
      }
    };

    checkUnlock();
    // Update every minute
    const interval = setInterval(checkUnlock, 60000);

    return () => clearInterval(interval);
  }, [day.unlockDate]);

  const sizeClasses = {
    small: 'aspect-square',
    medium: 'aspect-square md:col-span-1',
    wide: 'aspect-[2/1] col-span-2',
    tall: 'aspect-[1/2] row-span-2',
  };

  const content = (
    <div
      className={`
        advent-door
        ${sizeClasses[size]}
        border-3 border-christmas-green rounded-md
        flex flex-col items-center justify-center
        p-4
        ${unlocked
          ? 'bg-white hover:bg-christmas-snow cursor-pointer'
          : 'advent-door-locked bg-gray-100 cursor-not-allowed'
        }
      `}
    >
      <div className="text-center">
        <div className={`text-3xl md:text-4xl font-bold ${unlocked ? 'text-christmas-red' : 'text-gray-400'}`}>
          {day.dayNumber}
        </div>
        {!unlocked && (
          <div className="mt-2">
            <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            {countdown && (
              <p className="text-xs text-gray-500 mt-1">
                {countdown}
              </p>
            )}
          </div>
        )}
        {unlocked && (
          <p className="text-xs text-christmas-green mt-1 font-medium">
            {day.title}
          </p>
        )}
      </div>
    </div>
  );

  if (unlocked) {
    return (
      <Link href={`/day/${day.dayNumber}`}>
        {content}
      </Link>
    );
  }

  return content;
}
