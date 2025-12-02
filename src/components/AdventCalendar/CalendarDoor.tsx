'use client';

import { useState, useEffect } from 'react';
import { AdventDay } from '@/lib/calendar-config';
import { isDayUnlocked } from '@/lib/time-utils';
import Image from 'next/image';
import DoorFrame from './DoorFrame';

interface CalendarDoorProps {
  day: AdventDay;
  width: number;
  height: number;
  onClick?: (dayNumber: number) => void;
}

// Map door numbers to illustration images with crop/zoom settings
interface IllustrationConfig {
  src: string;
  objectPosition?: string;
  scale?: number;
}

const doorIllustrations: Record<number, IllustrationConfig> = {
  1: { src: '/illustrations/living-room.png', objectPosition: 'center', scale: 1 },
  2: { src: '/illustrations/living-room.png', objectPosition: 'left center', scale: 1.5 },
  3: { src: '/illustrations/office.png', objectPosition: 'center', scale: 1 },
  4: { src: '/illustrations/living-room.png', objectPosition: 'right center', scale: 1.5 },
  5: { src: '/illustrations/office.png', objectPosition: 'left center', scale: 1.5 },
  6: { src: '/illustrations/living-room.png', objectPosition: 'center top', scale: 1.8 },
  7: { src: '/illustrations/office.png', objectPosition: 'right top', scale: 1.8 },
  8: { src: '/illustrations/living-room.png', objectPosition: 'left bottom', scale: 1.8 },
  9: { src: '/illustrations/office.png', objectPosition: 'center bottom', scale: 1.5 },
  10: { src: '/illustrations/living-room.png', objectPosition: 'right top', scale: 2 },
  11: { src: '/illustrations/office.png', objectPosition: 'center', scale: 1 },
  12: { src: '/illustrations/living-room.png', objectPosition: 'center', scale: 1.2 },
  13: { src: '/illustrations/office.png', objectPosition: 'left bottom', scale: 1.5 },
  14: { src: '/illustrations/living-room.png', objectPosition: 'center', scale: 1 },
  15: { src: '/illustrations/office.png', objectPosition: 'center', scale: 1 },
};

export default function CalendarDoor({ day, width, height, onClick }: CalendarDoorProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  useEffect(() => {
    const checkUnlock = () => {
      setUnlocked(isDayUnlocked(day.unlockDate));
    };
    checkUnlock();
    const interval = setInterval(checkUnlock, 60000);
    return () => clearInterval(interval);
  }, [day.unlockDate]);

  const illustrationConfig = doorIllustrations[day.dayNumber];
  const showIllustration = (isHovered || isTapped) && unlocked;

  const handleClick = () => {
    if (unlocked && onClick) {
      onClick(day.dayNumber);
    }
  };

  const content = (
    <div
      className="advent-door relative cursor-pointer"
      style={{ width: `${width}px`, height: `${height}px` }}
      onMouseEnter={() => unlocked && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => unlocked && setIsTapped(true)}
      onTouchEnd={() => setIsTapped(false)}
    >
      <DoorFrame width={width} height={height}>
        {/* Door Number */}
        <div
          className={`door-number transition-opacity duration-500 ${showIllustration ? 'opacity-0' : 'opacity-100'}`}
          style={{
            fontSize: width > 200 ? '48px' : '32px',
            color: unlocked ? '#458352' : '#d1d5db',
            fontWeight: 'bold',
          }}
        >
          {day.dayNumber}
        </div>

        {/* Illustration on hover */}
        {unlocked && illustrationConfig && (
          <div
            className={`door-illustration absolute inset-0 transition-opacity duration-500 pointer-events-none ${
              showIllustration ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={illustrationConfig.src}
              alt={`Day ${day.dayNumber}`}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: illustrationConfig.objectPosition || 'center',
                transform: `scale(${illustrationConfig.scale || 1})`,
                transformOrigin: 'center',
              }}
              className="p-4"
              unoptimized
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Lock icon for locked doors */}
        {!unlocked && (
          <div className="absolute top-2 right-2">
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        )}
      </DoorFrame>
    </div>
  );

  return unlocked && onClick ? (
    <button onClick={handleClick} className="block">
      {content}
    </button>
  ) : (
    content
  );
}
