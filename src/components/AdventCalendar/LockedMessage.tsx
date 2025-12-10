'use client';

import { useEffect, useState } from 'react';
import { getUnlockCountdown, formatUnlockDate } from '@/lib/time-utils';

interface LockedMessageProps {
  unlockDate: string;
}

export default function LockedMessage({ unlockDate }: LockedMessageProps) {
  const [countdown, setCountdown] = useState<string>('');

  useEffect(() => {
    const updateCountdown = () => {
      const { timeUntil } = getUnlockCountdown(unlockDate);
      setCountdown(timeUntil || '');
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);

    return () => clearInterval(interval);
  }, [unlockDate]);

  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border-4 border-christmas-green">
        <svg className="w-20 h-20 mx-auto text-christmas-gold mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2-2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>

        <h2 className="text-3xl font-serif font-bold text-christmas-red mb-4">
          This Door is Locked
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          This devotional will unlock on <span className="font-semibold text-christmas-green">{formatUnlockDate(unlockDate)}</span> at midnight EST.
        </p>

        {countdown && (
          <div className="bg-christmas-snow p-4 rounded-md mb-6">
            <p className="text-sm text-gray-600 mb-1">Unlocks in:</p>
            <p className="text-2xl font-bold text-christmas-red">{countdown}</p>
          </div>
        )}

        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter to receive each devotional in your inbox as soon as it unlocks!
        </p>

        <a
          href="/#newsletter"
          className="inline-block bg-christmas-red text-white px-6 py-3 rounded-md font-semibold hover:bg-red-800 transition-colors"
        >
          Subscribe for Daily Updates
        </a>
      </div>
    </div>
  );
}
