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
 * Renders the subscription content, including the AWS Amplify Authenticator.
 * It uses the `useSearchParams` hook to determine the initial state of the authenticator.
 *
 * @returns {JSX.Element | null} The rendered subscription content, or null if the initial state is not yet determined.
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
 * The subscription page component.
 * It wraps the `SubscriptionContent` component in a `Suspense` boundary to handle dynamic loading.
 *
 * @returns {JSX.Element} The rendered subscription page.
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
