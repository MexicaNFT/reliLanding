import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-09-30.acacia',
});

export async function POST(req: NextRequest) {
    const { email } = await req.json();
  
    try {
      // Retrieve the customer by email
      const customers = await stripe.customers.list({ email });
      if (customers.data.length === 0) {
        return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
      }
  
      const customer = customers.data[0];
  
      // Create a Stripe customer portal session
      const session = await stripe.billingPortal.sessions.create({
        customer: customer.id,  
        return_url: `${process.env.NEXT_PUBLIC_DOMAIN}/register`
      });
  
      return NextResponse.json({ url: session.url });
    } catch (error) {
      console.error('Error creating customer portal session:', error);
      return NextResponse.json({ error: 'Failed to create customer portal session' }, { status: 500 });
    }
  }