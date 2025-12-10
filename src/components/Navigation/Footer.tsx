import SubscribeForm from '../Newsletter/SubscribeForm';
import { SITE_TITLE } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-christmas-green text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl font-serif font-bold text-center mb-3">
            Receive Daily Devotionals
          </h3>
          <p className="text-center text-gray-200 mb-6">
            Subscribe to get each day's devotional delivered to your inbox at midnight EST
          </p>
          <SubscribeForm />
        </div>

        {/* Footer Links */}
        <div className="border-t border-green-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © {currentYear} {SITE_TITLE}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="hover:text-christmas-gold transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-christmas-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
