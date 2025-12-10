import { NextResponse } from 'next/server';
import { toZonedTime } from 'date-fns-tz';
import devotionals from '@/data/devotionals.json';
import subscribers from '@/data/subscribers.json';

const EST_TIMEZONE = 'America/New_York';

export async function GET(request: Request) {
  try {
    // Verify cron secret
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;

    if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get current date in EST
    const now = new Date();
    const nowEST = toZonedTime(now, EST_TIMEZONE);
    const today = nowEST.toISOString().split('T')[0]; // YYYY-MM-DD

    // Find today's devotional
    const todaysDevotion = devotionals.days.find(d => d.unlockDate === today);

    if (!todaysDevotion) {
      return NextResponse.json({
        message: 'No devotional scheduled for today',
        date: today,
      });
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.log('Resend API key not configured. Skipping email send.');
      return NextResponse.json({
        message: 'Email API not configured',
        devotional: todaysDevotion.title,
        subscriberCount: subscribers.subscribers.length,
      });
    }

    // TODO: Send emails via Resend
    // This will be implemented once Resend is properly configured
    console.log(`Would send devotional "${todaysDevotion.title}" to ${subscribers.subscribers.length} subscribers`);

    return NextResponse.json({
      success: true,
      devotional: todaysDevotion.title,
      dayNumber: todaysDevotion.dayNumber,
      subscriberCount: subscribers.subscribers.length,
      message: 'Emails would be sent (Resend not configured yet)',
    });
  } catch (error) {
    console.error('Send daily email error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
