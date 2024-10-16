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
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
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
    },
  },
  plugins: [],
};
export default config;
