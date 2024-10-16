"use client";

import { fetchUserAttributes } from "@aws-amplify/auth";

import React, { useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { loadStripe } from "@stripe/stripe-js";
import outputs from "@/../amplify_outputs.json";

Amplify.configure(outputs);

// Initialize Stripe.js with your publishable key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function Register() {
  const [loading, setLoading] = useState(false);
  const plans = [
    {
      id: "price_1Nb6QDCBXHATCbDFJxlb6sK0",
      name: "Monthly Plan",
      price: "$15/month",
    },
  ];

  const getUserEmail = async () => {
    try {
      const userAttributes = await fetchUserAttributes();
      const email = userAttributes.email;
      return email;
    } catch (error) {
      console.error("Error fetching user email:", error);
    }
  };

  const handleCheckout = async (
    planId: string,
    userId: string | undefined,
    email: string | undefined
  ) => {
    if (!userId || !email) {
      console.error("User ID or email is missing.");
      return;
    }
    setLoading(true);
    try {
      // Call your API to create a Stripe Checkout session
      const response = await fetch("/register/api/createCheckoutSession", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          email,
          planId,
        }),
      });

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          console.error(error.message);
        }
      } else {
        console.error("Stripe.js failed to load.");
      }
    } catch (error) {
      console.error("Error initiating checkout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Authenticator.Provider>
      <div className="h-screen flex items-center justify-center">
        <Authenticator initialState="signUp">
          {({ signOut, user }) => (
            <main>
              <h1>Hello {user?.username}</h1>

              <div className="mt-4">
                <h2>Select a Plan</h2>
                {plans.map((plan) => (
                  <button
                    key={plan.id}
                    className="m-2 p-2 bg-blue-500 text-white"
                    disabled={loading}
                    onClick={async () => {
                      const email = await getUserEmail();
                      handleCheckout(plan.id, user?.username, email);
                    }}
                  >
                    {plan.name} - {plan.price}
                  </button>
                ))}
              </div>

              <button
                onClick={signOut}
                className="mt-4 p-2 bg-red-500 text-white"
              >
                Sign out
              </button>
            </main>
          )}
        </Authenticator>
      </div>
    </Authenticator.Provider>
  );
}
