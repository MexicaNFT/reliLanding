// src/app/register/cancel/page.tsx

import React from "react";

export default function CancelPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Payment Cancelled</h1>
      <p className="mt-4">
        You have cancelled the payment. If this was a mistake, you can try
        again.
      </p>
      <a href="/register" className="mt-6 p-2 bg-blue-500 text-white rounded">
        Go Back to Registration
      </a>
    </div>
  );
}
