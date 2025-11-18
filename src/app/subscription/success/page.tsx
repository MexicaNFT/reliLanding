"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Stripe } from "stripe";
import { CheckCircle, Mail, ArrowRight } from "lucide-react";

/**
 * Renders the success page content, including fetching and displaying the Stripe Checkout session details.
 *
 * @returns {JSX.Element} The rendered success page content.
 */
function SuccessPageContent() {
  const [session, setSession] = useState<Stripe.Checkout.Session | null>(null);
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const fetchSession = async () => {
      if (sessionId) {
        try {
          const res = await fetch(
            `/subscription/api/getCheckoutSession?session_id=${sessionId}`
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#e6f7f4] via-white via-60% to-[#e6f7f4] p-4">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-gray-400">
          <div className="bg-white rounded-t-3xl p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-100 rounded-full p-3">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
            </div>
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
              Payment Successful!
            </h1>
            <p className="text-xl text-center text-gray-600">
              Thank you for your purchase
            </p>
          </div>
        </div>

        {session ? (
          <div className="p-8 space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-inner">
              <p className="text-lg text-gray-700 mb-4">
                Your subscription is linked to the email address:
                <span className="font-semibold"> {session.customer_email}</span>
              </p>
              <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                <span className="text-gray-600 font-medium">Amount Paid:</span>
                <span className="text-3xl font-bold bg-gradient-to-r from-green-800 to-blue-900 text-transparent bg-clip-text">
                  {session.amount_total &&
                    (session.amount_total / 100).toFixed(2)}{" "}
                  {session.currency && session.currency.toUpperCase()}
                </span>
              </div>
            </div>

            <div className="mt-6">
              {" "}
              {/* Added margin top to create space above the button */}
              <a href="https://app.reli.ai/">
                <button className="w-full bg-[#34C1A6] text-white font-bold py-3 px-6 rounded-full hover:from-green-500 hover:to-blue-600 transition duration-300 ease-in-out flex items-center justify-center">
                  Go to the App
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </a>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * The success page component.
 * It wraps the `SuccessPageContent` component in a `Suspense` boundary to handle dynamic loading.
 *
 * @returns {JSX.Element} The rendered success page.
 */
export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-red-100">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
        </div>
      }
    >
      <SuccessPageContent />
    </Suspense>
  );
}
