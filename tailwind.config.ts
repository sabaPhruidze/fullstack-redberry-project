import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        redberry: {
          background: "#F5F5F5",

          border: {
            gray: "#D1D1D1",
            purple: {
              light: "#958FEF",
            },
          },

          text: {
            purple: "#4F46E5",

            gray: {
              light: "#525252",
              medium: "#3D3D3D",
            },
            black: "#0A0A0A",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
