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
        teal: {
          DEFAULT: "#0D9488",
          light: "#14B8A6",
          dark: "#0F766E",
          deep: "#042F2E",
        },
        orange: {
          DEFAULT: "#F97316",
          light: "#FDBA74",
        },
        cream: {
          DEFAULT: "#FDF8F0",
          dark: "#F5EDDF",
        },
        dark: "#111110",
        "dark-warm": "#1A1918",
        text: "#3D3B37",
        "text-light": "#78736A",
        border: "#E8E3DA",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        serif: ["var(--font-fraunces)", "serif"],
      },
      borderRadius: {
        xl: "20px",
        lg: "12px",
      },
    },
  },
  plugins: [],
};

export default config;