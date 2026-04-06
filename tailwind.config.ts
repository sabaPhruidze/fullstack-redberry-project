import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        redberry: {
          background: "#F5F5F5",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
