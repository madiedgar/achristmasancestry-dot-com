import VideoEmbed from './VideoEmbed';
import NewsletterCTA from './NewsletterCTA';
import devotionals from '@/data/devotionals.json';

interface DevotionalCardProps {
  dayNumber: number;
}

export default function DevotionalCard({ dayNumber }: DevotionalCardProps) {
  const devotional = devotionals.days.find(d => d.dayNumber === dayNumber);

  if (!devotional) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center">
        <p className="text-xl text-gray-600">Devotional not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <article className="bg-white rounded-lg shadow-xl p-8 md:p-12">
        {/* Header */}
        <header className="mb-8 border-b-2 border-christmas-gold pb-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl md:text-5xl font-bold text-christmas-red">
              Day {devotional.dayNumber}
            </span>
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-christmas-green">
                {devotional.title}
              </h1>
              {devotional.subtitle && (
                <p className="text-lg md:text-xl text-gray-600 italic mt-1">
                  {devotional.subtitle}
                </p>
              )}
            </div>
          </div>

          <p className="text-sm text-christmas-red font-semibold">
            {devotional.scriptureReference}
          </p>
        </header>

        {/* Devotional Text */}
        <div className="devotional-content mb-8">
          {devotional.devotionalText.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-800 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Video */}
        <VideoEmbed
          videoId={devotional.videoId}
          title={devotional.videoTitle}
        />

        {/* Reflection */}
        {devotional.reflection && (
          <div className="mt-8 bg-christmas-snow p-6 rounded-md border-l-4 border-christmas-gold">
            <h3 className="text-lg font-serif font-bold text-christmas-green mb-3">
              Reflection
            </h3>
            <p className="text-gray-700 italic">
              {devotional.reflection}
            </p>
          </div>
        )}

        {/* Newsletter CTA */}
        <NewsletterCTA />

        {/* Back to Calendar */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-christmas-red hover:text-red-800 font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Calendar
          </a>
        </div>
      </article>
    </div>
  );
}
