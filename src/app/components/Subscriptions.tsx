"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Loader2,
  CreditCard,
  LogOut,
} from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import Card from "../components/PlanCard";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Plan as BasePlan } from "../subscription/api/getPrices/route";
import {
  ErrorCode,
  Package,
  Purchases,
  PurchasesError,
} from "@revenuecat/purchases-js";
import { fetchUserAttributes } from "aws-amplify/auth";

// 1) Extend your existing Plan type to store rcPackage
interface ExtendedPlan extends BasePlan {
  rcPackage?: Package;
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function Subscriptions() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  const [loading, setLoading] = useState(true);
  const [plans, setPlans] = useState<ExtendedPlan[]>([]);
  const [isMonthly, setIsMonthly] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subscriptionUrl, setSubscriptionUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // We'll keep a ref to store the Purchases instance
  const purchasesRef = useRef<Purchases | null>(null);

  // ------------------------------------------------------------------
  // !!! KEEP THESE useEffect HOOKS EXACTLY AS THEY ARE (per your code) !!!
  // ------------------------------------------------------------------

  // Check if the user is subscribed on revenuecat
  useEffect(() => {
    const checkSubscription = async () => {
      setLoading(true); // Set loading before the async task
      try {
        // Only configure if we haven't yet
        if (!purchasesRef.current) {
          purchasesRef.current = Purchases.configure(
            "rcb_sb_lswGPZrndUEQiJOirkugQuaQR",
            user.username
          );
        }

        const info = await purchasesRef.current.getCustomerInfo();

        setSubscriptionUrl(info.managementURL);

        setLoading(false); // Set loading after the async task
      } catch (error) {
        console.error("Error checking subscription status:", error);
        setErrorMessage(
          "Unable to check subscription status. Please try again."
        );
      }
    };

    checkSubscription();
  }, [user]);

  // Fetch RevenueCat offerings
  useEffect(() => {
    (async function fetchOfferings() {
      if (!user) return;

      try {
        // Only configure if we haven't yet
        if (!purchasesRef.current) {
          purchasesRef.current = Purchases.configure(
            "rcb_sb_lswGPZrndUEQiJOirkugQuaQR",
            user.username
          );
        }

        // 1. Fetch ALL offerings from RevenueCat
        const offerings = await purchasesRef.current.getOfferings();
        if (!offerings.all) {
          console.warn("No offerings returned from RevenueCat");
          return;
        } else {
          console.log("Offerings:", offerings.all);
        }

        const allOfferings = offerings.all;
        const formattedPlans: ExtendedPlan[] = [];
        setPlans([]); // Clear existing plans

        // 2. Loop over each offering key (e.g. "basic", "pro")
        for (const offeringKey in allOfferings) {
          const offering = allOfferings[offeringKey];
          if (!offering) continue;

          // Choose monthly OR annual based on `isMonthly`
          const rcPackage = isMonthly ? offering.monthly : offering.annual;
          if (!rcPackage) {
            // If, for example, there's no annual package, skip
            continue;
          }

          // Optional: parse metadata-based features (if present)
          let features: string[] = [""];
          if (offering.metadata?.features) {
            features = (offering.metadata.features as string)
              .split(",")
              .map((feat: string) => feat.trim());
          }

          // 3. Create a Plan object, and store the entire `rcPackage`
          const plan: ExtendedPlan = {
            id: rcPackage.webBillingProduct.identifier,
            name: rcPackage.webBillingProduct.title,
            description:
              (offering.metadata?.description as string) ||
              rcPackage.webBillingProduct.description ||
              "No description available",
            price:
              rcPackage.webBillingProduct.currentPrice.amountMicros /
                1_000_000 +
              "",
            currency: rcPackage.webBillingProduct.currentPrice.currency,
            formattedPrice:
              rcPackage.webBillingProduct.currentPrice.formattedPrice,
            interval:
              rcPackage.webBillingProduct.subscriptionOptions.base_option.base
                .period?.unit || "month",
            features,
            rcPackage: rcPackage, // <-- store the entire Package object
          };

          formattedPlans.push(plan);
        }

        // 4. Optionally add a free plan at the end
        formattedPlans.push({
          id: "free",
          name: "Reli.Ai Gratis",
          description:
            "Plan gratuito para siempre, sin tarjeta de crédito requerida",
          price: "0.00",
          currency: "MXN",
          formattedPrice: "MXN 0.00",
          interval: "month",
          features: [
            "🗄️ Acceso a Compendios Temáticos",
            "📜 Acceso a los 500 documentos legales más relevantes",
            "👨‍⚖️ Acceso limitado a S.A.U.L.",
            "🔍 7 documentos analizados por consulta",
          ],
          // no rcPackage here because it's a free plan
        });

        // 5. Sort by price if desired
        const sortedPlans = formattedPlans.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );

        // 6. Set state
        setPlans(sortedPlans);
      } catch (err) {
        console.error("Error fetching RevenueCat offerings:", err);
      }
    })();
  }, [user, isMonthly]);

  // ------------------------------------------------------------------
  // End of required effects
  // ------------------------------------------------------------------

  // Utility: get the user's email from Amplify
  const getUserEmail = async () => {
    try {
      const userAttributes = await fetchUserAttributes();
      return userAttributes.email;
    } catch (error) {
      console.error("Error fetching user email:", error);
    }
  };

  // A function to handle purchases (using rcPackage):
  const handlePurchase = async (plan: ExtendedPlan) => {
    if (!purchasesRef.current || !plan.rcPackage) {
      console.error(
        "Purchases not initialized or no rcPackage found for this plan."
      );
      return;
    }

    try {
      // Purchase using the entire Package object
      const email = await getUserEmail();
      const purchaseResult = await purchasesRef.current.purchase({
        rcPackage: plan.rcPackage,
        customerEmail: email,
      });
      console.log("Purchase successful:", purchaseResult);

      // After purchase, refresh customer info
      const info = await purchasesRef.current.getCustomerInfo();
      setSubscriptionUrl(info.managementURL);
    } catch (err) {
      const error = err as PurchasesError;
      console.error("Error purchasing product:", err);
      const userCancelError = 1 as ErrorCode;
      if (error.errorCode == userCancelError) {
        console.warn("User cancelled the purchase.");
        return;
      }
      setErrorMessage(`Error purchasing plan: ${err}`);
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
    <div className="m-16">
      <div className="mt-16">
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
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 md:mb-4 md:mt-24 text-emerald-600 leading-tight">
              {subscriptionUrl
                ? "Manage Your Subscription"
                : "Choose Your Perfect Plan"}
            </h1>

            {subscriptionUrl ? (
              <a
                href={subscriptionUrl}
                className="block w-full max-w-md mx-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out text-center text-base md:text-lg"
              >
                <CreditCard className="inline-block mr-2 h-5 w-5 md:h-6 md:w-6" />
                Manage Subscription
              </a>
            ) : (
              <>
                <div className="flex justify-center mb-8">
                  <div className="bg-green-50 p-1 rounded-full shadow-lg">
                    <button
                      className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                        isMonthly
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                          : "text-green-800 hover:bg-green-100"
                      }`}
                      onClick={() => setIsMonthly(true)}
                    >
                      Monthly
                    </button>
                    <button
                      className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
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
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 focus:outline-none hover:bg-green-100 transition duration-300 ease-in-out md:-left-16"
                        aria-label="Previous plan"
                      >
                        <ChevronLeft className="w-6 h-6 text-green-600" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 focus:outline-none hover:bg-green-100 transition duration-300 ease-in-out md:-right-16"
                        aria-label="Next plan"
                      >
                        <ChevronRight className="w-6 h-6 text-green-600" />
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
                                onClick={() => handlePurchase(plan)}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="text-center text-green-800 text-base">
                      No plans available at the moment
                    </p>
                  )}
                </div>

                <div className="flex justify-center mt-6 space-x-2">
                  {plans.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-green-500 w-6"
                          : "bg-green-200 w-2"
                      }`}
                    ></div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
      <div className="flex justify-center mt-8 mb-8">
        <button
          className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out font-semibold text-base flex items-center"
          onClick={signOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
