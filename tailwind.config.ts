import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        card: "#0a0a0a",
        "card-foreground": "#FFFFFF",
        primary: "#FFFFFF",
        "primary-foreground": "#000000",
        secondary: "#141414",
        "secondary-foreground": "#FFFFFF",
        muted: "#141414",
        "muted-foreground": "#a3a3a3",
        accent: "#FFFFFF",
        "accent-foreground": "#000000",
        border: "#282828",
        input: "#282828",
        ring: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans-arabic)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
