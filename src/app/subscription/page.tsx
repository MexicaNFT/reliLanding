"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { components } from "../components/AuthComponents";
import Subscriptions from "../components/Subscriptions";

// Configure Amplify once at the top level of your app.
Amplify.configure(outputs);

/**
 * This component does the actual work of using `useSearchParams`.
 */
function SubscriptionContent() {
  const searchParams = useSearchParams();
  const [initialState, setInitialState] = useState<
    "signUp" | "signIn" | "forgotPassword" | null
  >(null);

  useEffect(() => {
    // Ensure stateParam is one of the allowed values
    const stateParam = (searchParams.get("state") || "signUp") as
      | "signUp"
      | "signIn"
      | "forgotPassword";

    setInitialState(stateParam);
  }, [searchParams]);

  // Until we have an initialState, show nothing or a loader
  if (!initialState) {
    return null; // or return <p>Loading...</p>
  }

  return (
    <Authenticator.Provider>
      <div className="h-screen flex items-center justify-center">
        <Authenticator initialState={initialState} components={components}>
          <Subscriptions />
        </Authenticator>
      </div>
    </Authenticator.Provider>
  );
}

/**
 * The default export for the page.
 * Wraps `SubscriptionContent` in a Suspense boundary to satisfy Next.js requirements.
 */
export default function SubscriptionPage() {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center">
          Loading subscription...
        </div>
      }
    >
      <SubscriptionContent />
    </Suspense>
  );
}
