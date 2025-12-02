'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation/Navigation';
import CalendarModal from '@/components/CalendarModal/CalendarModal';
import Rooftop from '@/components/Building/Rooftop';
import Lobby from '@/components/Building/Lobby';
import MainBuilding from '@/components/Building/MainBuilding';

export default function Home() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const handleWindowClick = (day: number) => {
    setSelectedDay(day);
  };

  return (
    <div className="min-h-screen bg-[#f9fff1]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-[#458352] mb-4">A Christmas Ancestry</h1>
          <p className="text-[#458352] text-xl italic mb-2">
            Following the Scarlet Thread Through Scripture
          </p>
          <p className="text-[#458352] max-w-2xl mx-auto">
            Journey through the biblical story of Jesus with this 24-day Advent devotional.
            Discover how God's promise of redemption weaves through generations,
            culminating in the birth of our Savior.
          </p>
        </div>

        {/* Advent Calendar Building */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Rooftop */}
            <div className="w-full h-32 relative">
              <Rooftop />
            </div>

            {/* Main Building with clickable windows */}
            <div
              className="w-full relative cursor-pointer"
              style={{ aspectRatio: '450/1100' }}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // Calculate relative positions (approximate window positions)
                const windowMap = [
                  { day: 15, x1: 75, y1: 40, x2: 270, y2: 145 },
                  { day: 3, x1: 285, y1: 40, x2: 380, y2: 145 },
                  { day: 9, x1: 75, y1: 160, x2: 165, y2: 265 },
                  { day: 6, x1: 180, y1: 160, x2: 270, y2: 215 },
                  { day: 20, x1: 285, y1: 160, x2: 380, y2: 265 },
                  { day: 19, x1: 180, y1: 225, x2: 270, y2: 275 },
                  { day: 24, x1: 75, y1: 285, x2: 165, y2: 390 },
                  { day: 23, x1: 180, y1: 285, x2: 375, y2: 360 },
                  { day: 5, x1: 75, y1: 405, x2: 165, y2: 510 },
                  { day: 17, x1: 180, y1: 370, x2: 270, y2: 540 },
                  { day: 7, x1: 285, y1: 365, x2: 380, y2: 445 },
                  { day: 10, x1: 285, y1: 455, x2: 380, y2: 535 },
                  { day: 12, x1: 75, y1: 525, x2: 165, y2: 630 },
                  { day: 8, x1: 180, y1: 525, x2: 270, y2: 575 },
                  { day: 13, x1: 285, y1: 525, x2: 380, y2: 630 },
                  { day: 21, x1: 180, y1: 585, x2: 270, y2: 635 },
                  { day: 14, x1: 75, y1: 645, x2: 270, y2: 750 },
                  { day: 1, x1: 285, y1: 645, x2: 380, y2: 750 },
                  { day: 4, x1: 75, y1: 765, x2: 165, y2: 870 },
                  { day: 11, x1: 180, y1: 765, x2: 375, y2: 840 },
                  { day: 18, x1: 75, y1: 885, x2: 165, y2: 990 },
                  { day: 2, x1: 180, y1: 850, x2: 270, y2: 1020 },
                  { day: 16, x1: 285, y1: 850, x2: 380, y2: 930 },
                  { day: 22, x1: 285, y1: 940, x2: 380, y2: 1020 },
                ];

                // Scale coordinates based on actual size
                const scale = rect.width / 450;

                for (const window of windowMap) {
                  const x1 = window.x1 * scale;
                  const y1 = window.y1 * scale;
                  const x2 = window.x2 * scale;
                  const y2 = window.y2 * scale;

                  if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
                    handleWindowClick(window.day);
                    break;
                  }
                }
              }}
            >
              <MainBuilding />

              {/* Lobby Sign */}
              <div className="w-full h-40 relative">
                <Lobby />
              </div>
            </div>
          </div>

          <p className="text-center text-[#458352] mt-4 italic">
            Click on any window to preview that day's devotional
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[#458352] text-center mb-8">About the Devotional</h2>

          <div className="space-y-6 text-[#458352]">
            <p>
              <strong>"A Christmas Ancestry"</strong> traces the scarlet thread of redemption
              woven throughout Scripture, from the Garden of Eden to the manger in Bethlehem.
              This 24-day Advent devotional invites you to discover how God's promise of a Savior
              runs through every generation, every prophet, and every story in the Bible.
            </p>

            <p>
              Each day reveals another strand in this beautiful tapestry—from Abraham's faith
              to David's lineage, from ancient prophecies to their fulfillment in Christ. You'll
              see how God's plan of redemption was not an afterthought, but a promise carefully
              preserved and passed down through the ages.
            </p>

            <p>
              Perfect for personal reflection or family devotions, this guide helps you prepare
              your heart for Christmas by understanding the depth of God's love and the significance
              of Jesus's birth as the culmination of His eternal plan.
            </p>

            <div className="bg-[#f9fff1] border-2 border-[#458352] p-6 rounded-lg mt-8">
              <h3 className="text-[#458352] mb-4">About the Author</h3>
              <p>
                [Your bio here - share your heart for this devotional and what inspired you to
                write about the scarlet thread connecting Christ's ancestry through Scripture.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buy Section */}
      <section id="buy" className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[#458352] mb-4">Get Your Copy</h2>
          <p className="text-[#458352] mb-8">
            Begin your Advent journey today and discover the scarlet thread
            that connects us all to the greatest gift ever given.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              className="bg-[#458352] text-[#f9fff1] px-8 py-4 rounded-lg hover:opacity-90 transition-opacity inline-block"
            >
              Buy on Amazon
            </a>
            <a
              href="#"
              className="border-2 border-[#458352] text-[#458352] px-8 py-4 rounded-lg hover:bg-[#458352] hover:text-[#f9fff1] transition-colors inline-block"
            >
              Other Retailers
            </a>
          </div>

          <p className="text-[#458352] mt-8 italic">
            Available in paperback and e-book formats
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#458352] text-[#f9fff1] py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>© 2024 A Christmas Ancestry. All rights reserved.</p>
          <p className="mt-2 opacity-80">Following the scarlet thread of redemption</p>
        </div>
      </footer>

      {/* Modal */}
      {selectedDay !== null && (
        <CalendarModal
          day={selectedDay}
          onClose={() => setSelectedDay(null)}
        />
      )}
    </div>
  );
}
