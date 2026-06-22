import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        landing: {
          surface: "rgba(255, 255, 255, 0.10)",
          "surface-hover": "rgba(255, 255, 255, 0.16)",
          border: "rgba(255, 255, 255, 0.10)",
          "border-strong": "rgba(255, 255, 255, 0.20)",
          text: "rgba(255, 255, 255, 0.80)",
          "text-muted": "rgba(255, 255, 255, 0.60)",
        },
      },
    },
  },
};

export default config;
