'use client';

import { useEffect, useRef } from 'react';
import VideoEmbed from './VideoEmbed';
import NewsletterCTA from './NewsletterCTA';

interface DevotionalModalProps {
  isOpen: boolean;
  onClose: () => void;
  devotional: {
    dayNumber: number;
    title: string;
    subtitle: string;
    devotionalText: string;
    scriptureReference: string;
    reflection: string;
    videoId: string;
    videoTitle: string;
  };
}

export default function DevotionalModal({ isOpen, onClose, devotional }: DevotionalModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-20 backdrop-blur-sm flex items-start justify-center p-4">
      <div
        ref={modalRef}
        className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full my-8 max-h-[90vh] overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 mt-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Modal content */}
        <div className="p-8 pt-4">
          <div className="devotional-content">
            {/* Header */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">Day {devotional.dayNumber}</div>
              <h1 className="text-3xl font-bold mb-2">{devotional.title}</h1>
              <h2 className="text-xl text-gray-600 mb-4">{devotional.subtitle}</h2>
              <div className="text-sm text-christmas-red font-semibold">
                {devotional.scriptureReference}
              </div>
            </div>

            {/* Video */}
            <div className="mb-6">
              <VideoEmbed
                videoId={devotional.videoId}
                title={devotional.videoTitle}
              />
            </div>

            {/* Devotional text */}
            <div className="mb-6 space-y-4">
              {devotional.devotionalText.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Reflection */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-3 text-christmas-red">
                Reflection
              </h3>
              <p className="text-gray-700 italic">{devotional.reflection}</p>
            </div>

            {/* Newsletter CTA */}
            <NewsletterCTA />
          </div>
        </div>
      </div>
    </div>
  );
}
