import { toZonedTime } from 'date-fns-tz';

const EST_TIMEZONE = 'America/New_York';

/**
 * Check if a day is unlocked based on EST timezone
 * @param unlockDateStr Date string in YYYY-MM-DD format
 * @returns true if unlocked, false otherwise
 */
export function isDayUnlocked(unlockDateStr: string): boolean {
  const now = new Date();
  const nowEST = toZonedTime(now, EST_TIMEZONE);

  // Parse the unlock date and set time to midnight EST
  const unlockDate = new Date(unlockDateStr + 'T00:00:00');
  const unlockEST = toZonedTime(unlockDate, EST_TIMEZONE);

  return nowEST >= unlockEST;
}

/**
 * Get countdown information for a locked day
 * @param unlockDateStr Date string in YYYY-MM-DD format
 * @returns Object with unlock status and time remaining
 */
export function getUnlockCountdown(unlockDateStr: string): {
  isUnlocked: boolean;
  timeUntil?: string;
  daysRemaining?: number;
  hoursRemaining?: number;
} {
  const unlocked = isDayUnlocked(unlockDateStr);

  if (unlocked) {
    return { isUnlocked: true };
  }

  const now = toZonedTime(new Date(), EST_TIMEZONE);
  const unlock = toZonedTime(new Date(unlockDateStr + 'T00:00:00'), EST_TIMEZONE);
  const diffMs = unlock.getTime() - now.getTime();

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  let timeUntil = '';
  if (days > 0) {
    timeUntil = `${days} day${days > 1 ? 's' : ''}, ${hours} hour${hours > 1 ? 's' : ''}`;
  } else if (hours > 0) {
    timeUntil = `${hours} hour${hours > 1 ? 's' : ''}, ${minutes} minute${minutes > 1 ? 's' : ''}`;
  } else {
    timeUntil = `${minutes} minute${minutes > 1 ? 's' : ''}`;
  }

  return {
    isUnlocked: false,
    timeUntil,
    daysRemaining: days,
    hoursRemaining: hours,
  };
}

/**
 * Format unlock date for display
 * @param unlockDateStr Date string in YYYY-MM-DD format
 * @returns Formatted date string
 */
export function formatUnlockDate(unlockDateStr: string): string {
  const date = new Date(unlockDateStr);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    timeZone: EST_TIMEZONE,
  });
}
