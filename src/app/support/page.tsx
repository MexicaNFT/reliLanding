"use client";

import { useEffect } from "react";

export default function SupportPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="m-0 h-[100vh] overflow-hidden mb-20">
      <iframe
        src="https://tally.so/r/3EZrG4?transparentBackground=1"
        width="100%"
        height="107%"
        title="Contact Support"
      />
    </div>
  );
}
