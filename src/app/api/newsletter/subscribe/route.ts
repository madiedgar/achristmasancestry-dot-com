import { NextResponse } from 'next/server';
import { z } from 'zod';
import fs from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';

const emailSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate email
    const validation = emailSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues[0].message },
        { status: 400 }
      );
    }

    const { email } = validation.data;

    // Read existing subscribers
    const subscribersPath = path.join(process.cwd(), 'src/data/subscribers.json');
    const fileContent = await fs.readFile(subscribersPath, 'utf-8');
    const data = JSON.parse(fileContent);

    // Check if already subscribed
    const existingSubscriber = data.subscribers.find(
      (sub: any) => sub.email === email
    );

    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'This email is already subscribed' },
        { status: 400 }
      );
    }

    // Add new subscriber
    const newSubscriber = {
      email,
      subscribedAt: new Date().toISOString(),
      unsubscribeToken: randomUUID(),
    };

    data.subscribers.push(newSubscriber);

    // Write back to file
    await fs.writeFile(
      subscribersPath,
      JSON.stringify(data, null, 2),
      'utf-8'
    );

    // TODO: Send welcome email via Resend when API key is configured
    // For now, just return success
    console.log(`New subscriber: ${email}`);

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed!',
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
