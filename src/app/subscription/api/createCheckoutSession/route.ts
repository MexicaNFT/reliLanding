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

    // Check if a customer with the given email already exists
    const customers = await stripe.customers.list({
      email: email,
      limit: 1,
    });

    let customerId: string;

    if (customers.data.length > 0) {
      // Customer exists, use the existing customer ID
      customerId = customers.data[0].id;

      // Optionally update the customer's metadata
      await stripe.customers.update(customerId, {
        metadata: {
          userId,
        },
      });
    } else {
      // Customer does not exist, create a new one with the metadata
      const customer = await stripe.customers.create({
        email: email,
        metadata: {
          userId,
        },
      });
      customerId = customer.id;
    }

    // Create Stripe Checkout Session with the customer ID
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer: customerId, // Use the customer ID
      line_items: [
        {
          price: planId, // Stripe Price ID of the plan selected by the user
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
      mode: "subscription", // Subscription mode for recurring payments
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/subscription/cancel`,
      subscription_data: {
        metadata: {
          userId,
        },
      },
      metadata: {
        // Store the user ID in the session metadata
        userId,
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
