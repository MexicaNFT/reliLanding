"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Loader2,
  CreditCard,
  LogOut,
} from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import Card from "../components/PlanCard";
import { fetchUserAttributes } from "aws-amplify/auth";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Plan } from "../subscription/api/getPrices/route";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function Subscriptions() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  const [loading, setLoading] = useState(true);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [isMonthly, setIsMonthly] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionUrl, setSubscriptionUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Check if the user is subscribed
  useEffect(() => {
    const checkSubscription = async () => {
      setLoading(true); // Set loading before the async task
      const email = await getUserEmail();
      try {
        const response = await fetch("/subscription/api/checkSubscription", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          throw new Error("Failed to check subscription status.");
        }

        const data = await response.json();
        if (data.subscribed) {
          setIsSubscribed(true);
          const portalResponse = await fetch(
            "/subscription/api/createCustomerPortalSession",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email }),
            }
          );
          if (!portalResponse.ok) {
            throw new Error("Failed to create customer portal session.");
          }
          const portalData = await portalResponse.json();
          setSubscriptionUrl(portalData.url);
        }
      } catch (error) {
        console.error("Error checking subscription status:", error);
        setErrorMessage(
          "Unable to check subscription status. Please try again."
        );
      } finally {
        setLoading(false); // Ensure loading is set to false regardless of success or failure
      }
    };

    checkSubscription();
  }, [user]);

  // Fetch Stripe plans dynamically
  useEffect(() => {
    const fetchPlans = async () => {
      setLoading(true);
      try {
        const interval = isMonthly ? "month" : "year";
        const response = await fetch(
          `/subscription/api/getPrices?interval=${interval}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch plans.");
        }
        const data = await response.json();
        if (data.prices) {
          setPlans(data.prices);
        }
      } catch (error) {
        console.error("Error fetching prices:", error);
        setErrorMessage("Unable to load plans. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, [isMonthly]);

  // Get the user's email from Amplify
  const getUserEmail = async () => {
    try {
      const userAttributes = await fetchUserAttributes();
      return userAttributes.email;
    } catch (error) {
      console.error("Error fetching user email:", error);
    }
  };

  // Handle Stripe Checkout session creation
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
      const response = await fetch("/subscription/api/createCheckoutSession", {
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

      if (!response.ok) {
        throw new Error("Failed to create checkout session.");
      }

      const { sessionId } = await response.json();
      const stripe = await stripePromise;

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          console.error(error.message);
          setErrorMessage("Error redirecting to checkout.");
        }
      } else {
        console.error("Stripe.js failed to load.");
        setErrorMessage("Stripe.js failed to load.");
      }
    } catch (error) {
      console.error("Error initiating checkout:", error);
      setErrorMessage("Failed to initiate checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Carousel controls
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === plans.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? plans.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#e6f7f4] via-white via-60% to-[#e6f7f4] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto bg-white bg-opacity-90 rounded-3xl shadow-2xl p-8 backdrop-blur-sm">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="h-12 w-12 animate-spin text-green-600" />
          </div>
        ) : errorMessage ? (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-md"
            role="alert"
          >
            <p className="font-bold">Error</p>
            <p>{errorMessage}</p>
          </div>
        ) : (
          <>
            <h1 className="text-5xl font-extrabold text-center mb-8 text-green-800 leading-tight">
              {isSubscribed
                ? "Manage Your Subscription"
                : "Choose Your Perfect Plan"}
            </h1>

            {isSubscribed ? (
              <a
                href={subscriptionUrl}
                className="block w-full max-w-md mx-auto px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out text-center text-lg"
              >
                <CreditCard className="inline-block mr-2 h-6 w-6" />
                Manage Subscription
              </a>
            ) : (
              <>
                <div className="flex justify-center mb-12">
                  <div className="bg-green-50 p-1 rounded-full shadow-lg">
                    <button
                      className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                        isMonthly
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                          : "text-green-800 hover:bg-green-100"
                      }`}
                      onClick={() => setIsMonthly(true)}
                    >
                      Monthly
                    </button>
                    <button
                      className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                        !isMonthly
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                          : "text-green-800 hover:bg-green-100"
                      }`}
                      onClick={() => setIsMonthly(false)}
                    >
                      Annual
                    </button>
                  </div>
                </div>

                <div className="relative w-full max-w-md mx-auto">
                  {plans.length > 0 ? (
                    <>
                      <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 focus:outline-none hover:bg-green-100 transition duration-300 ease-in-out md:-left-20"
                        aria-label="Previous plan"
                      >
                        <ChevronLeft className="w-8 h-8 text-green-600" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 focus:outline-none hover:bg-green-100 transition duration-300 ease-in-out md:-right-20"
                        aria-label="Next plan"
                      >
                        <ChevronRight className="w-8 h-8 text-green-600" />
                      </button>

                      <div className="overflow-hidden">
                        <div
                          className="flex transition-transform duration-300 ease-in-out"
                          style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                          }}
                        >
                          {plans.map((plan) => (
                            <div key={plan.id} className="w-full flex-shrink-0">
                              <Card
                                plan={plan}
                                onClick={async () => {
                                  const email = await getUserEmail();
                                  handleCheckout(
                                    plan.id,
                                    user?.username,
                                    email
                                  );
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="text-center text-green-800 text-lg">
                      No plans available at the moment
                    </p>
                  )}
                </div>

                <div className="flex justify-center mt-8 space-x-3">
                  {plans.map((_, index) => (
                    <div
                      key={index}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-green-500 w-8"
                          : "bg-green-200 w-3"
                      }`}
                    ></div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
      <button
        className="mt-12 px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out font-semibold text-lg flex items-center"
        onClick={signOut}
      >
        <LogOut className="mr-2 h-5 w-5" />
        Sign Out
      </button>
    </div>
  );
}
