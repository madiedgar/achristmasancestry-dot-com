import CalendarGrid from "@/components/AdventCalendar/CalendarGrid";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-christmas-red mb-4">
          A Christmas Ancestry
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Journey through the genealogy of Jesus Christ with daily devotionals.
          Each window unlocks at midnight EST throughout December, revealing a new chapter in the story that leads to Christmas.
        </p>
      </div>

      <CalendarGrid />
    </div>
  );
}
