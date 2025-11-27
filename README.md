# A Christmas Ancestry - Advent Calendar Website

A beautiful, interactive advent calendar website featuring daily devotionals exploring the genealogy of Jesus Christ. Built with Next.js 14, Tailwind CSS, and deployed on Vercel.

## Features

- **24-Day Advent Calendar**: Interactive building-style calendar with time-locked doors
- **Daily Devotionals**: Rich content with scripture references, reflections, and video
- **YouTube Integration**: Embedded devotional videos (~5 minutes each)
- **Email Newsletter**: Automated daily emails via Resend API
- **Time-Lock System**: Doors unlock at midnight EST each December day
- **Responsive Design**: Mobile-first, works on all devices
- **Newsletter CTAs**: Footer signup and post-engagement prompts

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom Christmas theme
- **Language**: TypeScript
- **Email**: Resend API + React Email templates
- **Deployment**: Vercel with cron jobs
- **Timezone**: EST (America/New_York) for unlocks

## Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout with Header + Footer
│   ├── page.tsx              # Home page with calendar grid
│   ├── about/page.tsx        # About the Author
│   ├── day/[dayNumber]/      # Dynamic devotional pages
│   └── api/                  # API routes
│       ├── newsletter/       # Subscribe/unsubscribe
│       └── send-daily-email/ # Cron job endpoint
├── components/
│   ├── AdventCalendar/       # Calendar grid and doors
│   ├── DevotionalContent/    # Devotional cards, video, CTA
│   ├── Navigation/           # Header and Footer
│   └── Newsletter/           # Subscribe form
├── lib/
│   ├── calendar-config.ts    # Day configuration (24 days)
│   ├── time-utils.ts         # EST timezone unlock logic
│   └── constants.ts          # Site constants
├── data/
│   ├── devotionals.json      # All devotional content
│   └── subscribers.json      # Email subscriber list
└── emails/                   # React Email templates
    ├── WelcomeEmail.tsx
    └── DailyDevotional.tsx
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Resend API key (get free at [resend.com](https://resend.com))
- Vercel account (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/madiedgar/achristmasancestry-dot-com.git
   cd achristmasancestry-dot-com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy `.env.local` and update with your values:
   ```bash
   # Resend Email API
   RESEND_API_KEY=re_your_actual_key_here

   # Cron Job Secret (generate random string)
   CRON_SECRET=your_random_secret_string

   # Site URL
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## Content Management

### Updating Devotional Content

Edit [`src/data/devotionals.json`](src/data/devotionals.json):

```json
{
  "dayNumber": 1,
  "unlockDate": "2025-12-01",
  "title": "The Beginning",
  "subtitle": "Abraham: Father of Faith",
  "devotionalText": "Full devotional text here...",
  "scriptureReference": "Matthew 1:1-2",
  "reflection": "Reflection questions...",
  "videoId": "your_youtube_video_id",
  "videoTitle": "Day 1 Video Title",
  "videoDuration": "5:23"
}
```

### Annual Reset (30-60 minutes)

1. **Update calendar year** in `src/lib/calendar-config.ts`:
   ```typescript
   export const CALENDAR_YEAR = 2026;
   ```

2. **Update unlock dates** in `calendar-config.ts`:
   ```typescript
   { dayNumber: 1, unlockDate: '2026-12-01', title: '...' }
   ```

3. **Update devotional content** in `src/data/devotionals.json`
   - Add new YouTube video IDs
   - Update devotional text if needed

4. **Optional: Reset subscribers** in `src/data/subscribers.json`

5. **Deploy**: Push to main branch → Vercel auto-deploys

## Deployment

### Vercel Setup

1. **Connect to Vercel**
   ```bash
   npx vercel link
   ```

2. **Add environment variables** in Vercel Dashboard:
   - `RESEND_API_KEY`
   - `CRON_SECRET`
   - `NEXT_PUBLIC_SITE_URL`

3. **Configure custom domain**
   - Add domain in Vercel project settings
   - Update DNS records as instructed
   - SSL auto-provisioned

4. **Configure email DNS** (for Resend):
   - Add SPF, DKIM, DMARC records from Resend dashboard
   - Verify domain in Resend

5. **Deploy**
   ```bash
   npx vercel --prod
   ```

### Cron Job Schedule

Configured in `vercel.json`:
```json
{
  "crons": [
    {
      "path": "/api/send-daily-email",
      "schedule": "1 6 * 12 *"
    }
  ]
}
```

**Schedule**: 6:01 AM UTC = 1:01 AM EST (during December)

## Key Features Implementation

### Time-Lock System

- **Server-side verification** prevents client manipulation
- Uses `date-fns-tz` for EST timezone handling
- Doors unlock at midnight EST
- Countdown timer updates every minute

### Newsletter Flow

1. **Footer signup**: Primary conversion point (all pages)
2. **Post-engagement CTA**: Appears after 30 seconds OR scroll past video
3. **Automated emails**: Sent daily at midnight EST via Vercel cron

### Building-Style Calendar

Inspired by Figma design with:
- Vertical building structure
- Mixed-size windows (small, medium, wide)
- Christmas-themed colors (red, green, gold)
- Responsive grid layout

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Color Palette

```css
--christmas-red: #991b1b
--christmas-green: #065f46
--christmas-gold: #fbbf24
--snow: #f9fafb
```

## Troubleshooting

### Emails not sending

1. Check `RESEND_API_KEY` is set correctly
2. Verify domain in Resend dashboard
3. Check DNS records (SPF, DKIM, DMARC)
4. Review Vercel function logs

### Doors not unlocking

1. Verify date format in `calendar-config.ts` (YYYY-MM-DD)
2. Check server timezone settings
3. Clear browser cache/localStorage

### Cron job not running

1. Verify `CRON_SECRET` matches in code and environment
2. Check Vercel cron logs in dashboard
3. Ensure cron schedule is correct for EST

## Future Enhancements

- [ ] Figma MCP integration for design sync
- [ ] CMS integration (Sanity/Contentful) for easier content editing
- [ ] Migrate to Vercel KV for subscriber storage (200+ subscribers)
- [ ] Google Analytics integration
- [ ] Admin dashboard for content management

## License

ISC

## Contact

For questions or issues, please open an issue on GitHub.

---

**Built with ❤️ for advent season 2025**
