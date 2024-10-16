// src/app/register/api/createCheckoutSession/route.ts

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-09-30.acacia",
});

export async function POST(req: NextRequest) {
  try {
    const { userId, email, planId } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Create Stripe Checkout Session with the email
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: planId, // Stripe Price ID of the plan selected by the user
          quantity: 1,
        },
      ],
      mode: "subscription", // Subscription mode for recurring payments
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/register/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/register/cancel`,
      customer_email: email, // Force the user's email to be used in Stripe
      metadata: {
        userId, // Attach the userId for reference
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating Stripe Checkout session:", error);
    return NextResponse.json(
      { error: "Failed to create session" },
      { status: 500 }
    );
  }
}
