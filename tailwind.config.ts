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
      },
      fontSize: {
        'title-md': ['32px', '40px'],
        'title-sm': ['24px', '32px'],
        'title-xs': ['18px', '24px'],
        'text-xl': ['24px', '30px'],
        'text-lg': ['18px', '24px'],
        'text-md': ['16px', '24px'],
        'text-sm': ['14px', '20px'],
        'text-xs': ['12px', '18px'],
      }
    },
  },
  plugins: [],
};
export default config;
