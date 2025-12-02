'use client';

import { useState } from 'react';
import { adventDays } from '@/lib/calendar-config';
import CalendarDoor from './CalendarDoor';
import DevotionalModal from '@/components/DevotionalContent/DevotionalModal';
import devotionalsData from '@/data/devotionals.json';

// Exact Figma layout - matching reference.png with precise positioning
export default function CalendarGrid() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const handleDoorClick = (dayNumber: number) => {
    setSelectedDay(dayNumber);
  };

  const handleCloseModal = () => {
    setSelectedDay(null);
  };

  const selectedDevotional = selectedDay
    ? devotionalsData.days.find(d => d.dayNumber === selectedDay)
    : null;

  return (
    <>
      <DevotionalModal
        isOpen={!!selectedDevotional}
        onClose={handleCloseModal}
        devotional={selectedDevotional!}
      />

      <div className="w-full flex justify-center py-8" style={{ backgroundColor: '#F5F1E8' }}>
        {/* Building Container - Exact Figma dimensions: 749px wide */}
        <div
          className="relative"
          style={{
            width: 'min(100%, 749px)',
            backgroundColor: '#F9FFF1',
          }}
        >
          {/* Rooftop Section - 195px tall */}
          <div
            className="relative w-full"
            style={{
              height: '195px',
              backgroundColor: '#F9FFF1',
            }}
          >
            {/* Chimney Body */}
            <div
              className="absolute"
              style={{
                width: '75px',
                height: '133px',
                left: '5px',
                top: '4px',
                backgroundColor: '#F9FFF1',
                border: '3px solid #458352',
              }}
            />
            {/* Chimney Cap */}
            <div
              className="absolute"
              style={{
                width: '75px',
                height: '21px',
                left: '5px',
                top: '4px',
                backgroundColor: '#F9FFF1',
                border: '3px solid #458352',
              }}
            />
            {/* Roof Trim (bottom layer) */}
            <div
              className="absolute"
              style={{
                width: '100%',
                height: '21px',
                bottom: '21px',
                left: '-8px',
                right: '-8px',
                backgroundColor: '#F9FFF1',
                border: '3px solid #458352',
              }}
            />
            {/* Roof Edge */}
            <div
              className="absolute"
              style={{
                width: '100%',
                height: '37px',
                bottom: '0',
                backgroundColor: '#F9FFF1',
                border: '3px solid #458352',
              }}
            />
          </div>

          {/* Main Building - 1142px tall, contains all doors */}
          <div
            className="relative w-full"
            style={{
              backgroundColor: '#F9FFF1',
              border: '3px solid #458352',
              borderTop: 'none',
              height: '1142px',
            }}
          >
            {/* Door 1 - Top Left (154x172) */}
            <div className="absolute" style={{ left: '116px', top: '48px' }}>
              <CalendarDoor day={adventDays[0]} width={154} height={172} onClick={handleDoorClick} />
            </div>

            {/* Door 11 - Top Wide (328x116) */}
            <div className="absolute" style={{ left: '296px', top: '41px' }}>
              <CalendarDoor day={adventDays[10]} width={328} height={116} onClick={handleDoorClick} />
            </div>

            {/* Door 8 - Small (154x80) */}
            <div className="absolute" style={{ left: '116px', top: '253px' }}>
              <CalendarDoor day={adventDays[7]} width={154} height={80} onClick={handleDoorClick} />
            </div>

            {/* Door 12 - Medium (154x172) */}
            <div className="absolute" style={{ left: '296px', top: '168px' }}>
              <CalendarDoor day={adventDays[11]} width={154} height={172} onClick={handleDoorClick} />
            </div>

            {/* Door 13 - Right (154x172) */}
            <div className="absolute" style={{ left: '468px', top: '169px' }}>
              <CalendarDoor day={adventDays[12]} width={154} height={172} onClick={handleDoorClick} />
            </div>

            {/* Door 14 - Wide (328x172) */}
            <div className="absolute" style={{ left: '114px', top: '357px' }}>
              <CalendarDoor day={adventDays[13]} width={328} height={172} onClick={handleDoorClick} />
            </div>

            {/* Door 3 - Right (154x172) */}
            <div className="absolute" style={{ left: '467px', top: '360px' }}>
              <CalendarDoor day={adventDays[2]} width={154} height={172} onClick={handleDoorClick} />
            </div>

            {/* Door 4 - Left (154x172) */}
            <div className="absolute" style={{ left: '114px', top: '549px' }}>
              <CalendarDoor day={adventDays[3]} width={154} height={172} onClick={handleDoorClick} />
            </div>

            {/* Door 6 - Small (154x80) */}
            <div className="absolute" style={{ left: '294px', top: '547px' }}>
              <CalendarDoor day={adventDays[5]} width={154} height={80} onClick={handleDoorClick} />
            </div>

            {/* Door 7 - Medium (154x110) */}
            <div className="absolute" style={{ left: '468px', top: '547px' }}>
              <CalendarDoor day={adventDays[6]} width={154} height={110} onClick={handleDoorClick} />
            </div>

            {/* Door 2 - Tall (154x230) */}
            <div className="absolute" style={{ left: '296px', top: '638px' }}>
              <CalendarDoor day={adventDays[1]} width={154} height={230} onClick={handleDoorClick} />
            </div>

            {/* Door 9 - Right (154x172) */}
            <div className="absolute" style={{ left: '468px', top: '677px' }}>
              <CalendarDoor day={adventDays[8]} width={154} height={172} onClick={handleDoorClick} />
            </div>

            {/* Door 10 - Small (154x110) */}
            <div className="absolute" style={{ left: '114px', top: '741px' }}>
              <CalendarDoor day={adventDays[9]} width={154} height={110} onClick={handleDoorClick} />
            </div>

            {/* Door 5 - Bottom Left (154x172) */}
            <div className="absolute" style={{ left: '114px', top: '880px' }}>
              <CalendarDoor day={adventDays[4]} width={154} height={172} onClick={handleDoorClick} />
            </div>

            {/* Door 15 - Wide Bottom (328x172) */}
            <div className="absolute" style={{ left: '294px', top: '880px' }}>
              <CalendarDoor day={adventDays[14]} width={328} height={172} onClick={handleDoorClick} />
            </div>
          </div>

          {/* Storefront/Lobby Section - 243px tall */}
          <div
            className="relative w-full"
            style={{
              height: '243px',
              backgroundColor: '#F9FFF1',
              border: '3px solid #458352',
              borderTop: 'none',
            }}
          >
            {/* Striped Awning - 39 stripes */}
            <div className="absolute top-0 left-0 right-0 flex" style={{ height: '64px' }}>
              {Array.from({ length: 39 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '20px',
                    height: '64px',
                    backgroundColor: '#F9FFF1',
                    border: '3px solid #458352',
                    borderRight: i === 38 ? '3px solid #458352' : 'none',
                  }}
                />
              ))}
            </div>

            {/* Storefront Windows/Doors */}
            <div className="absolute" style={{ left: '67px', bottom: '46px', width: '87px', height: '194px', backgroundColor: '#F9FFF1', border: '3px solid #458352' }} />
            <div className="absolute" style={{ left: '154px', bottom: '46px', width: '87px', height: '194px', backgroundColor: '#F9FFF1', border: '3px solid #458352' }} />

            {/* "christmas ADVENT CALENDAR" Sign */}
            <div
              className="absolute flex items-center justify-center"
              style={{
                left: '370px',
                bottom: '81px',
                width: '225px',
                height: '76px',
                backgroundColor: '#458352',
              }}
            >
              <div className="text-center">
                <div className="text-3xl italic" style={{ fontFamily: 'Georgia, serif', color: '#F9FFF1' }}>
                  christmas
                </div>
                <div className="text-xs uppercase tracking-widest" style={{ color: '#F9FFF1' }}>
                  ADVENT CALENDAR
                </div>
              </div>
            </div>

            {/* OPEN Sign */}
            <div
              className="absolute flex items-center justify-center"
              style={{
                left: '175px',
                top: '102px',
                width: '42px',
                height: '18px',
                backgroundColor: '#F9FFF1',
                border: '1.25px solid #458352',
                transform: 'rotate(15deg)',
              }}
            >
              <span className="text-xs font-bold" style={{ color: '#458352', fontSize: '10px' }}>
                OPEN
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
