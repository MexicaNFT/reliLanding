"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { components } from "../components/AuthComponents";
import Subscriptions from "../components/Subscriptions";

// Configure Amplify once at the top level of your app.
Amplify.configure(outputs);

export default function SubscriptionPage() {
  const searchParams = useSearchParams();
  const [initialState, setInitialState] = useState<
    "signUp" | "signIn" | "forgotPassword" | null
  >(null);

  React.useEffect(() => {
    // Type assertion to ensure stateParam is one of the allowed values
    const stateParam = (searchParams.get("state") || "signUp") as
      | "signUp"
      | "signIn"
      | "forgotPassword";
    setInitialState(stateParam);
  }, [searchParams]);

  // Don't render anything (or optionally show a loading indicator) until we know the initialState
  if (!initialState) {
    return null; // or <p>Loading...</p>
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
