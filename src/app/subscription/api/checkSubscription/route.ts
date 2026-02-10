import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-09-30.acacia',
});

/**
 * Handles a POST request to check the subscription status of a user.
 * It takes an email address in the request body, finds the corresponding Stripe customer,
 * and checks for an active subscription.
 *
 * @param {NextRequest} req - The incoming Next.js request object.
 * @returns {Promise<NextResponse>} A response object with the subscription status.
 */
export async function POST(req: NextRequest) {
  const { email } = await req.json();

  try {
    // Retrieve the customer by email
    const customers = await stripe.customers.list({ email });
    if (customers.data.length === 0) {
      return NextResponse.json({ subscribed: false, message: 'No customer found' });
    }

    const customer = customers.data[0];

    // List the customer's subscriptions
    const subscriptions = await stripe.subscriptions.list({
      customer: customer.id,
      status: 'active', // Only check active subscriptions
      expand: ['data.items'],
    });

    if (subscriptions.data.length === 0) {
      return NextResponse.json({ subscribed: false, message: 'No active subscriptions' });
    }

    return NextResponse.json({ subscribed: true, subscription: subscriptions.data[0] });
  } catch (error) {
    console.error('Error fetching subscription:', error);
    return NextResponse.json({ error: 'Failed to fetch subscription status' }, { status: 500 });
  }
}