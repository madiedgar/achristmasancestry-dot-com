export const CALENDAR_YEAR = 2025;

export interface AdventDay {
  dayNumber: number;
  unlockDate: string;
  title: string;
}

// Calendar layout inspired by building design with 24 days
// Matches the vertical building layout from Figma
export const adventDays: AdventDay[] = [
  { dayNumber: 1, unlockDate: '2025-11-27', title: 'The Beginning' },
  { dayNumber: 2, unlockDate: '2025-12-02', title: 'Faith' },
  { dayNumber: 3, unlockDate: '2025-12-03', title: 'Hope' },
  { dayNumber: 4, unlockDate: '2025-12-04', title: 'Promise' },
  { dayNumber: 5, unlockDate: '2025-12-05', title: 'Covenant' },
  { dayNumber: 6, unlockDate: '2025-12-06', title: 'Journey' },
  { dayNumber: 7, unlockDate: '2025-12-07', title: 'Blessing' },
  { dayNumber: 8, unlockDate: '2025-12-08', title: 'Wisdom' },
  { dayNumber: 9, unlockDate: '2025-12-09', title: 'Strength' },
  { dayNumber: 10, unlockDate: '2025-12-10', title: 'Mercy' },
  { dayNumber: 11, unlockDate: '2025-12-11', title: 'Grace' },
  { dayNumber: 12, unlockDate: '2025-12-12', title: 'Light' },
  { dayNumber: 13, unlockDate: '2025-12-13', title: 'Truth' },
  { dayNumber: 14, unlockDate: '2025-12-14', title: 'Peace' },
  { dayNumber: 15, unlockDate: '2025-12-15', title: 'Joy' },
  { dayNumber: 16, unlockDate: '2025-12-16', title: 'Love' },
  { dayNumber: 17, unlockDate: '2025-12-17', title: 'Sacrifice' },
  { dayNumber: 18, unlockDate: '2025-12-18', title: 'Redemption' },
  { dayNumber: 19, unlockDate: '2025-12-19', title: 'Worship' },
  { dayNumber: 20, unlockDate: '2025-12-20', title: 'Prophecy' },
  { dayNumber: 21, unlockDate: '2025-12-21', title: 'Fulfillment' },
  { dayNumber: 22, unlockDate: '2025-12-22', title: 'Wonder' },
  { dayNumber: 23, unlockDate: '2025-12-23', title: 'Preparation' },
  { dayNumber: 24, unlockDate: '2025-12-24', title: 'Anticipation' },
];

export const TOTAL_DAYS = adventDays.length;
