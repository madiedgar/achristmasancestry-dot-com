# Audio Integration Plan for Advent Calendar

## Overview

Plan for integrating audio devotional readings into the Christmas Ancestry advent calendar website. Audio files will be stored in `/public/audio/` and deployed via Vercel CDN.

## Storage Strategy

### Hosting Location

**Vercel Public Directory: `/public/audio/`**

- **URL Pattern:** `https://yourdomain.com/audio/day-01.mp3`
- **Hosting:** Vercel Edge Network (200+ global locations)
- **CDN:** Automatic distribution included
- **Configuration:** Zero setup required
- **Cost:** $0 (included with Vercel hosting)
- **File Limits:** 100MB per file (Hobby plan)
- **Total Size Limit:** ~100MB compressed deployment

### Why This Approach?

- Files deploy automatically with your Next.js app
- Same domain as website (no CORS issues)
- Professional CDN performance
- Zero ongoing maintenance
- Simple to update (just push to git)
- Already have `/public/audio/` directory created

### File Organization

```text
achristmasancestry-dot-com/
├── public/
│   └── audio/
│       ├── day-01.mp3
│       ├── day-02.mp3
│       └── ... (through day-24.mp3)
├── src/
└── ...
```

### File Naming Convention

- **Pattern:** `day-01.mp3`, `day-02.mp3`, ..., `day-24.mp3`
- **Zero-padded numbers:** 01, 02, not 1, 2
- **Lowercase:** All filenames lowercase
- **No spaces:** Use hyphens if needed

## Security Considerations

### Current Approach: Public URLs

**Files are publicly accessible** (same as YouTube videos):
- Anyone with URL can access
- Search engines can index
- No time-based restrictions
- Simple, no configuration needed

### Unlock Logic via UI

The calendar UI prevents casual access:
- Days appear locked until unlock date
- Users can't click future days
- Modal doesn't open for locked days

**However:** Tech-savvy users could:
- Guess URL pattern (`/audio/day-15.mp3`)
- Access directly in browser
- Download files early

**Is this acceptable?**
- Your YouTube videos are already publicly accessible
- Devotional content benefits from sharing
- Most users won't circumvent UI

### Optional: API-Based Access Control

If you need stricter security:

**Approach:** Serve audio through Next.js API route

**Implementation:**
1. Keep files in `/public/audio/` or move to `/private/audio/`
2. Create API route: `/api/audio/[day]`
3. Check unlock date server-side
4. Return audio file only if unlocked
5. Return 403 error if locked

**Trade-offs:**
- More complex setup
- Slightly slower (goes through server)
- No CDN caching benefits
- Required for truly private content

**Recommendation:** Start with public URLs. Only add API protection if needed.

## Implementation Steps

### Phase 1: Update Data Structure

**File:** `/src/data/devotionals.json`

Add `audioUrl` field to each devotional:

```json
{
  "dayNumber": 1,
  "unlockDate": "2025-11-27",
  "title": "The Beginning",
  "subtitle": "Abraham: Father of Faith",
  "devotionalText": "...",
  "scriptureReference": "Matthew 1:1-2",
  "reflection": "...",
  "videoId": "dQw4w9WgXcQ",
  "videoTitle": "Day 1: Abraham's Journey of Faith",
  "videoDuration": "5:23",
  "audioUrl": "/audio/day-01.mp3"
}
```

**Note:** Use relative URLs (`/audio/day-01.mp3`) not absolute URLs.

**Alternative:** Generate URLs programmatically via utility function (cleaner, more maintainable).

### Phase 2: Create Audio Player Component

**File:** `/src/components/DevotionalContent/AudioPlayer.tsx` (NEW FILE)

```typescript
'use client';

import { useRef, useEffect } from 'react';

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
  dayNumber: number;
  autoPlay?: boolean; // Optional prop for auto-play
}

export default function AudioPlayer({ audioUrl, title, dayNumber, autoPlay = false }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      // Auto-play when component mounts
      audioRef.current.play().catch(error => {
        // Some browsers block auto-play, handle gracefully
        console.log('Auto-play prevented:', error);
      });
    }
  }, [autoPlay]);

  return (
    <div className="my-6">
      <div className="bg-christmas-beige rounded-lg p-4 shadow-md">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-christmas-red flex items-center gap-2">
            <span>🎙️</span>
            <span>Audio Devotional</span>
          </h3>
          <p className="text-sm text-gray-600 mt-1">{title}</p>
        </div>

        <audio
          ref={audioRef}
          controls
          className="w-full"
          preload="metadata"
          style={{ height: '40px' }}
        >
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}
```

**Features:**
- **Auto-play when modal opens** (optional via prop)
- HTML5 native controls (best compatibility)
- Preload metadata only (shows duration, fast page load)
- Styled to match Christmas theme
- Responsive and mobile-friendly
- Accessible via keyboard
- Gracefully handles browser auto-play restrictions

### Phase 3: Update DevotionalModal

**File:** `/src/components/DevotionalContent/DevotionalModal.tsx`

**Step 3a: Import AudioPlayer**

```typescript
import AudioPlayer from './AudioPlayer';
```

**Step 3b: Update Interface**

```typescript
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
    audioUrl?: string; // Add this (optional)
  };
}
```

**Step 3c: Add Audio Player to Modal**

Insert between header and video (line ~80):

```typescript
{/* Audio Player - place ABOVE video */}
{devotional.audioUrl && (
  <div className="mb-6">
    <AudioPlayer
      audioUrl={devotional.audioUrl}
      title={`Day ${devotional.dayNumber}: ${devotional.subtitle}`}
      dayNumber={devotional.dayNumber}
      autoPlay={true}  // Enable auto-play when modal opens
    />
  </div>
)}

{/* Video */}
<div className="mb-6">
  <VideoEmbed
    videoId={devotional.videoId}
    title={devotional.videoTitle}
  />
</div>
```

**Why audio above video:**
- Audio is primary content (narrated devotionals)
- Audio loads faster
- Better mobile UX
- Video is supplementary

**Conditional rendering (`devotional.audioUrl &&`):**
- Only shows if audio URL exists
- Allows incremental rollout
- Site doesn't break if audio missing
- Can test with partial content

### Phase 4: Optional TypeScript Updates

**File:** `/src/lib/calendar-config.ts` (optional)

If you want type safety, add `audioUrl` to interface:

```typescript
export interface AdventDay {
  dayNumber: number;
  unlockDate: string;
  title: string;
  audioUrl?: string; // Optional
}
```

**Alternative:** Create utility function:

```typescript
export function getAudioUrl(dayNumber: number): string {
  const paddedDay = String(dayNumber).padStart(2, '0');
  return `/audio/day-${paddedDay}.mp3`;
}
```

Then use in components:
```typescript
<AudioPlayer audioUrl={getAudioUrl(devotional.dayNumber)} ... />
```

## Audio File Preparation

### Format Specifications

**Required:**
- **Format:** MP3
- **Encoding:** CBR (Constant Bit Rate)
- **Sample Rate:** 44.1kHz

**Recommended for Voice:**
- **Bitrate:** 128kbps (good quality, 1MB per minute)
- **Channels:** Mono (smaller file size)
- **Target Duration:** 3-5 minutes
- **Target Size:** 3-6MB per file

**Alternative bitrates:**
- 64kbps: Smaller files, acceptable quality for voice
- 192kbps: Higher quality, larger files

### File Size Targets

- **Per file:** 1-5MB (ideal)
- **Total 24 files:** ~25-100MB
- **Vercel limit:** 100MB compressed deployment
- **Keep individual files under 10MB**

### Quality Checklist

Before uploading files:

- [ ] Remove background noise
- [ ] Normalize audio levels (consistent volume across all files)
- [ ] Trim silence from start/end
- [ ] Add 1-2 second fade in/out
- [ ] Export as MP3, 128kbps, 44.1kHz
- [ ] Test playback in browser
- [ ] Verify file sizes under 10MB each

### Naming Files

Rename files to match convention:

```text
day-01.mp3
day-02.mp3
day-03.mp3
...
day-24.mp3
```

Use tools like Bulk Rename Utility or bash script:

```bash
# Example bash rename script
for i in {1..24}; do
  mv "audio-$i.mp3" "day-$(printf '%02d' $i).mp3"
done
```

## Deployment Workflow

### When You Receive Audio Files

**Step 1: Prepare Files**

1. Rename files to naming convention
2. Verify audio quality
3. Check file sizes (all under 10MB)
4. Test one file in browser

**Step 2: Add Files to Repository**

```bash
# Navigate to repository
cd /Users/madisonedgar/GitHub/MadiEdgar/achristmasancestry-dot-com

# Copy audio files to public/audio/
# (directory already exists)
cp ~/path/to/audio/*.mp3 public/audio/

# Verify files are there
ls -lh public/audio/
```

**Step 3: Update Data File**

Edit `/src/data/devotionals.json` and add `audioUrl` to each day:

```json
"audioUrl": "/audio/day-01.mp3"
```

Can do this manually or with find/replace.

**Step 4: Create Audio Player Component**

Create `/src/components/DevotionalContent/AudioPlayer.tsx` using code from Phase 2 above.

**Step 5: Update DevotionalModal**

Edit `/src/components/DevotionalContent/DevotionalModal.tsx` following Phase 3 above.

**Step 6: Test Locally**

```bash
npm run dev
```

- Open calendar
- Click on a day
- Verify audio player appears
- Test audio plays correctly
- Check styling looks good

**Step 7: Deploy**

```bash
git add public/audio/*.mp3
git add src/data/devotionals.json
git add src/components/DevotionalContent/AudioPlayer.tsx
git add src/components/DevotionalContent/DevotionalModal.tsx
git commit -m "Add audio devotionals"
git push
```

Vercel auto-deploys in ~2 minutes.

**Step 8: Verify Production**

- Visit live site
- Test audio on deployed version
- Check on mobile devices
- Verify all 24 days work

## Testing Checklist

Before going live:

### Functionality

- [ ] Audio player appears in modal
- [ ] Audio loads and plays
- [ ] Play/pause/seek controls work
- [ ] Volume control works
- [ ] Works on iOS Safari
- [ ] Works on Android Chrome
- [ ] Works on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Days without audio don't show broken player
- [ ] Audio duration displays correctly

### Performance

- [ ] Modal opens quickly (audio doesn't block)
- [ ] Audio preloads metadata (duration shows)
- [ ] No console errors
- [ ] Page load speed unchanged
- [ ] First Contentful Paint under 2s
- [ ] Total deployment size under 100MB

### Design/UX

- [ ] Audio player matches site theme
- [ ] Responsive on mobile
- [ ] Layout works with audio + video
- [ ] Accessible via keyboard (tab, space, arrows)
- [ ] Screen reader announces player

### Edge Cases

- [ ] Missing audio URL handled gracefully
- [ ] 404 if audio file doesn't exist
- [ ] Slow network shows loading state
- [ ] Audio stops when modal closes (optional)
- [ ] Can switch between days while audio playing

## File Reference

### Files to Create/Modify

**New Files:**
1. `/src/components/DevotionalContent/AudioPlayer.tsx` - Audio player component

**Modified Files:**
2. `/src/data/devotionals.json` - Add audioUrl to all 24 entries
3. `/src/components/DevotionalContent/DevotionalModal.tsx` - Integrate audio player
4. `/src/lib/calendar-config.ts` - Update types (optional)

**Audio Files:**
5. `/public/audio/day-01.mp3` through `/public/audio/day-24.mp3`

## Quick Implementation Commands

When ready to implement:

```bash
# Navigate to repo
cd /Users/madisonedgar/GitHub/MadiEdgar/achristmasancestry-dot-com

# Create AudioPlayer component
touch src/components/DevotionalContent/AudioPlayer.tsx

# Copy your MP3 files
cp ~/Downloads/advent-audio/*.mp3 public/audio/

# Test locally
npm run dev

# When ready, deploy
git add .
git commit -m "Add audio devotional integration"
git push
```

## Future Enhancements (Optional)

### Advanced Features

1. **Download Button**
   ```html
   <a href={audioUrl} download className="text-sm text-christmas-red">
     Download Audio
   </a>
   ```

2. **Playback Speed Control**
   - Add 1x, 1.5x, 2x speed options
   - Use JavaScript Audio API

3. **Custom Styled Player**
   - Replace native controls
   - Christmas-themed design
   - Progress bar with Christmas colors

4. **Transcriptions**
   - Add text below audio
   - Accessibility improvement
   - SEO benefit

5. **Analytics**
   - Track play events
   - See which days most popular
   - Measure engagement

### API Route Protection (If Needed)

If you need to prevent direct access:

**Create:** `/src/app/api/audio/[day]/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { isDateUnlocked } from '@/lib/time-utils';

export async function GET(
  request: NextRequest,
  { params }: { params: { day: string } }
) {
  const dayNumber = parseInt(params.day);

  // Check if day is unlocked
  if (!isDateUnlocked(dayNumber)) {
    return new NextResponse('Not yet available', { status: 403 });
  }

  // Serve audio file
  const audioPath = join(process.cwd(), 'public', 'audio', `day-${params.day}.mp3`);
  const audioBuffer = await readFile(audioPath);

  return new NextResponse(audioBuffer, {
    headers: {
      'Content-Type': 'audio/mpeg',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}
```

Then use URLs like: `/api/audio/01`

**Trade-off:** Slower, no CDN caching, but provides security.

## Success Criteria

Implementation complete when:

1. ✅ All 24 audio files in `/public/audio/`
2. ✅ Audio player component created
3. ✅ Audio integrated into DevotionalModal
4. ✅ All 24 days have audioUrl in JSON
5. ✅ Audio plays on all major browsers
6. ✅ Mobile experience works well
7. ✅ Site performance maintained
8. ✅ No console errors
9. ✅ Design matches Christmas theme
10. ✅ Deployed to production

## Auto-Play Implementation

### How It Works

When you click on a day and the modal opens, the audio will automatically start playing:

1. Modal opens → AudioPlayer component mounts
2. `useEffect` hook runs with `autoPlay={true}`
3. Audio starts playing automatically
4. User can still pause/play with controls

### Browser Considerations

**Important:** Some browsers (Safari, Chrome) block auto-play by default to prevent annoying users. The implementation handles this gracefully:

- **If allowed:** Audio starts playing immediately
- **If blocked:** User sees player with controls, can click play manually
- **No error shown to user:** Console logs the restriction quietly

### Making Auto-Play More Reliable

Browsers allow auto-play more often when:
- User has interacted with the page (they clicked the day, so this helps)
- Audio is muted initially (not recommended for devotionals)
- Site is in user's trusted sites

Since users are actively clicking to open the modal, auto-play will work in most cases.

### Optional: Stop Audio When Modal Closes

If you want audio to stop when user closes the modal, add to `DevotionalModal.tsx`:

```typescript
useEffect(() => {
  // Existing code...

  return () => {
    // Cleanup: stop all audio when modal closes
    const audioElements = modalRef.current?.querySelectorAll('audio');
    audioElements?.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  };
}, [isOpen]);
```

This pauses and resets audio when modal closes.

## Questions for Later

These can be decided during implementation:

1. **Audio content:** Same as devotional text, or different narration?
2. ~~**Auto-play:** Should audio start automatically when modal opens?~~ ✅ **ANSWERED: Yes, enabled by default**
3. **Audio pause:** Should audio pause when modal closes? (Optional enhancement above)
4. **Both media:** Can both audio and video play simultaneously? (Yes, currently both can play)
5. **Analytics:** Track audio plays with Google Analytics?
6. **Updates:** Will audio be updated yearly, or one-time for 2025?

Default answers work fine if not specified.
