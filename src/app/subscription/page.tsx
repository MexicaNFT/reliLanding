"use client";

import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { components } from "../components/AuthComponents";
import Subscriptions from "../components/Subscriptions";

Amplify.configure(outputs);

export default function Subscription() {
  return (
    <Authenticator.Provider>
      <div className="h-screen flex items-center justify-center">
        <Authenticator initialState="signUp" components={components}>
          <Subscriptions />
        </Authenticator>
      </div>
    </Authenticator.Provider>
  );
}
