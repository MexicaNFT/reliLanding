import React from "react";
import { XCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#e6f7f4] via-white via-60% to-[#e6f7f4] p-4">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-gray-400">
          <div className="bg-white rounded-t-3xl p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-red-100 rounded-full p-3">
                <XCircle className="h-12 w-12 text-red-500" />
              </div>
            </div>
            <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
              Payment Cancelled
            </h1>
            <p className="text-center text-gray-600">
              Your payment has been cancelled. If this was a mistake, you can
              try again.
            </p>
          </div>
        </div>
        <div className="p-8 space-y-6">
          <p className="text-sm text-gray-500 text-center">
            If you have any questions or concerns, please contact our support
            team.
          </p>
          <Link
            href="/subscription"
            className=" w-full bg-red-500  text-white font-bold py-3 px-6 rounded-full hover:from-red-500 hover:to-pink-600 transition duration-300 ease-in-out flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Return to Registration
          </Link>
        </div>
      </div>
    </div>
  );
}
