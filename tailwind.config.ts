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
        brand: {
          teal: "#0D9488",
          "teal-light": "#14B8A6",
          "teal-dark": "#0F766E",
          "teal-deep": "#042F2E",
          orange: "#F97316",
          "orange-light": "#FDBA74",
          cream: "#FDF8F0",
          "cream-dark": "#F5EDDF",
          dark: "#111110",
          "dark-warm": "#1A1918",
          text: "#3D3B37",
          "text-light": "#78736A",
          border: "#E8E3DA",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        serif: ["var(--font-fraunces)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;