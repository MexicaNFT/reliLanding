"use client";

import React, { useEffect, useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { components } from "../components/AuthComponents";
import Subscriptions from "../components/Subscriptions";
import { useSearchParams } from 'next/navigation';

Amplify.configure(outputs);

export default function Subscription() {
  const searchParams = useSearchParams();
  const [authState, setAuthState] = useState<"signIn" | "signUp">("signUp");

  useEffect(() => {
    if (searchParams.get('state') === 'signIn') {
      setAuthState('signIn');
    }
  }, [searchParams]);

  return (
    <Authenticator.Provider>
      <div className="h-screen flex items-center justify-center">
        <Authenticator initialState={authState} components={components}>
          <Subscriptions />
        </Authenticator>
      </div>
    </Authenticator.Provider>
  );
}