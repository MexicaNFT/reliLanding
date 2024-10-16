// src/app/register/success/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Stripe } from "stripe"; // Use Stripe types from the backend SDK

export default function SuccessPage() {
  const [session, setSession] = useState<Stripe.Checkout.Session | null>(null);
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const fetchSession = async () => {
      if (sessionId) {
        try {
          const res = await fetch(
            `/register/api/getCheckoutSession?session_id=${sessionId}`
          );
          const data: Stripe.Checkout.Session = await res.json();
          setSession(data);
        } catch (error) {
          console.error("Error fetching session data:", error);
        }
      }
    };
    fetchSession();
  }, [sessionId]);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Payment Successful!</h1>
      {session ? (
        <div className="mt-4">
          <p>Thank you for your purchase, {session.customer_email}!</p>
          <p>
            Amount: {session.amount_total && session.amount_total / 100}{" "}
            {session.currency && session.currency.toUpperCase()}
          </p>
        </div>
      ) : (
        <p>Loading details...</p>
      )}
    </div>
  );
}
