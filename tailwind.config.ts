import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        colton: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        colton: "-0.03em",
      },
      lineHeight: {
        colton: "1.2",
      },
      colors: {
        dark: "#0a0a0a",
        light: "#f5f5f5",
        accent: "#6366f1",
      },
    },
  },
  plugins: [],
};

export default config;
