'use client';

import { useState, useEffect } from 'react';
import SubscribeForm from '../Newsletter/SubscribeForm';

export default function NewsletterCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user already subscribed
    const isSubscribed = localStorage.getItem('newsletter_subscribed') === 'true';
    const wasDismissed = sessionStorage.getItem('newsletter_cta_dismissed') === 'true';

    if (isSubscribed || wasDismissed) {
      return;
    }

    // Show CTA after 30 seconds OR after scroll past video
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    sessionStorage.setItem('newsletter_cta_dismissed', 'true');
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="my-12 bg-gradient-to-r from-christmas-green to-green-700 text-white rounded-lg shadow-xl p-8 relative">
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white hover:text-christmas-gold transition-colors"
        aria-label="Dismiss"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">
        Get Tomorrow's Devotional in Your Inbox!
      </h3>
      <p className="text-lg mb-6 text-gray-100">
        Subscribe to receive each day's devotional delivered automatically at midnight EST.
      </p>

      <div className="max-w-md">
        <SubscribeForm />
      </div>
    </div>
  );
}
