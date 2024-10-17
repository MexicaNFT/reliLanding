// /src/app/subscription/api/stripeWebhook/route.ts

import { NextRequest, NextResponse } from 'next/server';

const HARD_CODED_SECRET = "HEIHFISHBDJBY#E836edh7wredhwwdw098776tdgbsdnnvsv"; // Replace this with your secret

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');

  // Check if the secret matches
  if (secret !== HARD_CODED_SECRET) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  // Temporarily return the environment variables for testing
  return NextResponse.json({
    message: 'Environment variables',
    env: process.env, // NEVER expose this in production
  });
}