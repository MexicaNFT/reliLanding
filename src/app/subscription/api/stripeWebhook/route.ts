// /src/app/subscription/api/stripeWebhook/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Temporarily return the environment variables for testing
  return NextResponse.json({
    message: "Hello from the Stripe Webhook!",
  });
}
