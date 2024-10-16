"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  const [loading, setLoading] = useState(true); // Start loading on component mount
  const [plans, setPlans] = useState<Plan[]>([]); // Dynamic plans
  const [isMonthly, setIsMonthly] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionUrl, setSubscriptionUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // For error handling

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
    <div className="h-screen flex items-center justify-center flex-col">
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      ) : errorMessage ? (
        <div className="h-screen flex items-center justify-center">
          <p className="text-red-500">{errorMessage}</p>
        </div>
      ) : (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-0 relative overflow-hidden mt-20">
          <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-0 relative overflow-hidden mt-20">
            <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
              <h1 className="text-3xl font-bold text-center mb-2 text-[#36454F]">
                {isSubscribed
                  ? "Manage your subscription"
                  : "Upgrade your plans for more features"}
              </h1>

              {isSubscribed ? (
                <a
                  href={subscriptionUrl}
                  className="mt-4 p-2 bg-blue-500 text-white rounded-full"
                >
                  Manage Subscription
                </a>
              ) : (
                <>
                  <div className="flex justify-center mb-8">
                    <div className="bg-gray-200 p-1 rounded-full">
                      <button
                        className={`px-4 py-2 rounded-full ${
                          isMonthly ? "bg-white shadow-sm" : "text-gray-700"
                        }`}
                        onClick={() => setIsMonthly(true)}
                      >
                        Monthly
                      </button>
                      <button
                        className={`px-4 py-2 rounded-full ${
                          !isMonthly ? "bg-white shadow-sm" : "text-gray-700"
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
                          className="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent p-2 rounded-full shadow-md z-10 focus:outline-none md:-translate-x-[200px]"
                          aria-label="Previous plan"
                        >
                          <ChevronLeft className="w-6 h-6 text-gray-600" />
                        </button>
                        <button
                          onClick={nextSlide}
                          className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent p-2 rounded-full shadow-md z-10 focus:outline-none md:translate-x-[200px]"
                          aria-label="Next plan"
                        >
                          <ChevronRight className="w-6 h-6 text-gray-600" />
                        </button>

                        {/* Card Carousel */}
                        <div className="overflow-hidden">
                          <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{
                              transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                          >
                            {plans.map((plan) => (
                              <div
                                key={plan.id}
                                className="w-full flex-shrink-0"
                              >
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
                      <p className="text-center text-gray-500">
                        No plans available
                      </p>
                    )}
                  </div>
                </>
              )}

              {/* Mobile Pagination Indicator */}
              {!isSubscribed && (
                <div className="flex justify-center mt-4 space-x-2 md:hidden">
                  {plans.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-2 rounded-full ${
                        index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <button
        className="mt-4 p-2 bg-red-500 text-white rounded-full"
        onClick={signOut}
      >
        Sign Out
      </button>
    </div>
  );
}
