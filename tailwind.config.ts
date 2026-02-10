import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-green": "#1ABC9C",
        "primary-blue": "#3758f9",
        "secondary-green": "#13C296",
        "dark": "#111928",
        "neutral-100": "#F5F5F5",
        "neutral-200": "#E5E7EB",
        "gray-700": "#374151",
        "gray-900": "#111928",
        "blue-900": "#1E3A8A",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      textColor: {
        teal: '#1ABC9C',
        'teal-hover': '#159d82',
        'sky-blue': '#4A90E2',
        'charcoal-gray': '#36454F',
        'light-gray': '#BDC3C7',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        'custom': '0px 1px 3px 0px rgba(166,175,195,0.4)',
        'custom-inset': '0px 0px 20px 0px inset rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
