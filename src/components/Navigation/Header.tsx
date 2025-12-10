'use client';

import Link from 'next/link';
import { SITE_TITLE, AMAZON_LINK } from '@/lib/constants';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-christmas-red text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-serif font-bold hover:text-christmas-gold transition-colors">
            {SITE_TITLE}
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-christmas-gold transition-colors font-medium">
              Calendar
            </Link>
            <Link href="/about" className="hover:text-christmas-gold transition-colors font-medium">
              About the Author
            </Link>
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-christmas-gold text-christmas-red px-5 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
            >
              Buy the Book
            </a>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/"
              className="block hover:text-christmas-gold transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Calendar
            </Link>
            <Link
              href="/about"
              className="block hover:text-christmas-gold transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About the Author
            </Link>
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-christmas-gold text-christmas-red px-5 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-colors text-center"
            >
              Buy the Book
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
