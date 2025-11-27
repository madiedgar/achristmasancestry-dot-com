'use client';

import { adventDays } from '@/lib/calendar-config';
import CalendarDoor from './CalendarDoor';

// Building-style layout inspired by Figma design
// Creates a vertical structure with mixed-size windows
export default function CalendarGrid() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Building structure - vertical layout with varied door sizes */}
      <div className="bg-white border-4 border-christmas-green rounded-lg shadow-2xl overflow-hidden">
        {/* Roof/Top section */}
        <div className="bg-christmas-red h-16 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 bg-christmas-gold rounded-full border-4 border-white" />
          </div>
        </div>

        {/* Building body - advent calendar doors */}
        <div className="p-4 md:p-6 bg-gradient-to-b from-gray-50 to-white">
          {/* Row 1 */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            <CalendarDoor day={adventDays[14]} size="medium" />
            <CalendarDoor day={adventDays[1]} size="small" />
            <CalendarDoor day={adventDays[19]} size="medium" />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-4 gap-3 mb-3">
            <CalendarDoor day={adventDays[8]} size="small" />
            <CalendarDoor day={adventDays[3]} size="small" />
            <CalendarDoor day={adventDays[4]} size="small" />
            <CalendarDoor day={adventDays[15]} size="small" />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <CalendarDoor day={adventDays[23]} size="wide" />
            <CalendarDoor day={adventDays[22]} size="tall" />
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            <CalendarDoor day={adventDays[0]} size="small" />
            <CalendarDoor day={adventDays[16]} size="medium" />
            <CalendarDoor day={adventDays[6]} size="small" />
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-4 gap-3 mb-3">
            <CalendarDoor day={adventDays[11]} size="small" />
            <CalendarDoor day={adventDays[5]} size="small" />
            <CalendarDoor day={adventDays[7]} size="small" />
            <CalendarDoor day={adventDays[12]} size="small" />
          </div>

          {/* Row 6 */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <CalendarDoor day={adventDays[13]} size="wide" />
            <CalendarDoor day={adventDays[9]} size="small" />
          </div>

          {/* Row 7 */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            <CalendarDoor day={adventDays[3]} size="small" />
            <CalendarDoor day={adventDays[10]} size="wide" />
          </div>

          {/* Row 8 */}
          <div className="grid grid-cols-3 gap-3">
            <CalendarDoor day={adventDays[2]} size="small" />
            <CalendarDoor day={adventDays[1]} size="medium" />
            <CalendarDoor day={adventDays[21]} size="small" />
          </div>
        </div>

        {/* Building base */}
        <div className="bg-christmas-green text-white text-center py-4 font-serif">
          <p className="text-sm uppercase tracking-wider">Christmas</p>
          <p className="text-lg font-bold">Advent Calendar</p>
        </div>
      </div>
    </div>
  );
}
