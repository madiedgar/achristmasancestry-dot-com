import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json(
        { error: 'Unsubscribe token is required' },
        { status: 400 }
      );
    }

    // Read existing subscribers
    const subscribersPath = path.join(process.cwd(), 'src/data/subscribers.json');
    const fileContent = await fs.readFile(subscribersPath, 'utf-8');
    const data = JSON.parse(fileContent);

    // Find subscriber by token
    const subscriberIndex = data.subscribers.findIndex(
      (sub: any) => sub.unsubscribeToken === token
    );

    if (subscriberIndex === -1) {
      return NextResponse.json(
        { error: 'Invalid unsubscribe token' },
        { status: 404 }
      );
    }

    // Remove subscriber
    const removedSubscriber = data.subscribers[subscriberIndex];
    data.subscribers.splice(subscriberIndex, 1);

    // Write back to file
    await fs.writeFile(
      subscribersPath,
      JSON.stringify(data, null, 2),
      'utf-8'
    );

    console.log(`Unsubscribed: ${removedSubscriber.email}`);

    return NextResponse.json({
      success: true,
      message: 'You have been successfully unsubscribed',
    });
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
