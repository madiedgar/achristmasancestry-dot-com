import { X } from 'lucide-react';

interface CalendarModalProps {
  day: number;
  onClose: () => void;
}

const devotionalPreviews: { [key: number]: { title: string; verse: string; preview: string } } = {
  1: { title: "The Promise Begins", verse: "Genesis 3:15", preview: "From the very beginning, God wove a scarlet thread of redemption through history..." },
  2: { title: "Abraham's Faith", verse: "Genesis 22:8", preview: "God will provide Himself a lamb—a promise that echoes through generations..." },
  3: { title: "Isaac's Sacrifice", verse: "Genesis 22:13", preview: "The ram in the thicket foreshadows the ultimate sacrifice to come..." },
  4: { title: "Jacob's Ladder", verse: "Genesis 28:12", preview: "A ladder between heaven and earth, pointing to the One who bridges the divide..." },
  5: { title: "Joseph Sold", verse: "Genesis 37:28", preview: "Betrayed for silver, yet God's plan unfolds through suffering..." },
  6: { title: "The Passover Lamb", verse: "Exodus 12:13", preview: "Blood on the doorposts—protection through sacrifice..." },
  7: { title: "Rahab's Cord", verse: "Joshua 2:18", preview: "A scarlet cord in the window, salvation for those who believe..." },
  8: { title: "Ruth's Redemption", verse: "Ruth 4:14", preview: "The kinsman-redeemer foreshadows our ultimate Redeemer..." },
  9: { title: "David Anointed", verse: "1 Samuel 16:13", preview: "From shepherd boy to king, pointing to the Good Shepherd..." },
  10: { title: "Isaiah's Vision", verse: "Isaiah 53:5", preview: "By His wounds we are healed—prophecy of the suffering servant..." },
  11: { title: "The Branch", verse: "Isaiah 11:1", preview: "A shoot from the stump of Jesse will bear fruit..." },
  12: { title: "Jeremiah's Promise", verse: "Jeremiah 23:5", preview: "A righteous Branch who will reign wisely..." },
  13: { title: "Ezekiel's Shepherd", verse: "Ezekiel 34:23", preview: "One shepherd over all—the divine Shepherd coming..." },
  14: { title: "Daniel's Vision", verse: "Daniel 7:13", preview: "The Son of Man coming on the clouds of heaven..." },
  15: { title: "Micah's Prophecy", verse: "Micah 5:2", preview: "From Bethlehem, one who will be ruler over Israel..." },
  16: { title: "Zechariah's King", verse: "Zechariah 9:9", preview: "Your king comes to you, gentle and riding on a donkey..." },
  17: { title: "Malachi's Messenger", verse: "Malachi 3:1", preview: "The messenger will prepare the way before me..." },
  18: { title: "Gabriel's Visit", verse: "Luke 1:26-27", preview: "The angel brings news that will change everything..." },
  19: { title: "Mary's Yes", verse: "Luke 1:38", preview: "Let it be to me according to your word..." },
  20: { title: "The Journey", verse: "Luke 2:4-5", preview: "Joseph and Mary travel to the city of David..." },
  21: { title: "No Room", verse: "Luke 2:7", preview: "The King of kings born where animals feed..." },
  22: { title: "Angels Sing", verse: "Luke 2:13-14", preview: "Glory to God in the highest, peace on earth..." },
  23: { title: "Shepherds Come", verse: "Luke 2:15-16", preview: "They came with haste and found Mary, Joseph, and the baby..." },
  24: { title: "The Word Made Flesh", verse: "John 1:14", preview: "The scarlet thread complete—Emmanuel, God with us..." }
};

export default function CalendarModal({ day, onClose }: CalendarModalProps) {
  const content = devotionalPreviews[day] || {
    title: `Day ${day}`,
    verse: "Coming Soon",
    preview: "Open this window on December " + day + " to reveal the daily devotional."
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-[#f9fff1] border-4 border-[#458352] rounded-lg max-w-lg w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#458352] hover:opacity-70"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-4">
          <div className="inline-block bg-[#458352] text-[#f9fff1] px-4 py-2 rounded-full mb-4">
            Day {day}
          </div>
          <h2 className="text-[#458352] mb-2">{content.title}</h2>
          <p className="text-[#458352] italic mb-4">{content.verse}</p>
        </div>
        
        <p className="text-[#458352] leading-relaxed mb-6">
          {content.preview}
        </p>
        
        <div className="text-center">
          <a
            href="#buy"
            className="inline-block bg-[#458352] text-[#f9fff1] px-6 py-3 rounded hover:opacity-90 transition-opacity"
            onClick={onClose}
          >
            Get the Full Devotional
          </a>
        </div>
      </div>
    </div>
  );
}
