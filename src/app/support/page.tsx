"use client";

import { useEffect } from "react";

/**
 * A component that embeds a Tally.so form for customer support.
 * The form is loaded dynamically by adding the Tally embed script to the page.
 *
 * @returns {JSX.Element} The rendered support page with the embedded form.
 */
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
