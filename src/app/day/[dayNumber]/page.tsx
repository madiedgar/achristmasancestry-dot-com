import { adventDays } from '@/lib/calendar-config';
import { isDayUnlocked } from '@/lib/time-utils';
import DevotionalCard from '@/components/DevotionalContent/DevotionalCard';
import LockedMessage from '@/components/AdventCalendar/LockedMessage';
import { notFound } from 'next/navigation';

interface DayPageProps {
  params: Promise<{ dayNumber: string }>;
}

export default async function DayPage({ params }: DayPageProps) {
  const { dayNumber } = await params;
  const dayNum = parseInt(dayNumber);

  // Find the day in our config
  const day = adventDays.find(d => d.dayNumber === dayNum);

  if (!day) {
    notFound();
  }

  // Server-side check: Is this day unlocked?
  const unlocked = isDayUnlocked(day.unlockDate);

  return (
    <div className="container mx-auto">
      {unlocked ? (
        <DevotionalCard dayNumber={dayNum} />
      ) : (
        <LockedMessage unlockDate={day.unlockDate} />
      )}
    </div>
  );
}

// Generate static params for all days
export async function generateStaticParams() {
  return adventDays.map(day => ({
    dayNumber: day.dayNumber.toString(),
  }));
}

// Generate metadata for each day
export async function generateMetadata({ params }: DayPageProps) {
  const { dayNumber } = await params;
  const dayNum = parseInt(dayNumber);
  const day = adventDays.find(d => d.dayNumber === dayNum);

  if (!day) {
    return {
      title: 'Day Not Found',
    };
  }

  return {
    title: `Day ${day.dayNumber}: ${day.title} | A Christmas Ancestry`,
    description: `Daily devotional for Day ${day.dayNumber} of the Advent Calendar`,
  };
}
