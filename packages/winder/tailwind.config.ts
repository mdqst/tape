import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--tape-font-sans)",
        serif: "var(--tape-font-serif)",
        mono: "var(--tape-font-mono)"
      },
      backgroundColor: {
        site: "hsl(var(--site-background))"
      },
      borderColor: {
        custom: "hsl(var(--border))"
      },
      divideColor: {
        custom: "hsl(var(--divider))"
      },
      textColor: {
        muted: "hsl(var(--text-muted))"
      },
      borderRadius: {
        custom: "var(--radius)",
        "card-sm": "calc(var(--radius) + 6px)",
        card: "calc(var(--radius) + 11px)"
      },
      ringColor: {
        custom: "hsl(var(--border))"
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))"
        },
        upbyte: {
          DEFAULT: "hsl(var(--upbyte))"
        },
        theme: {
          DEFAULT: "hsl(var(--theme))"
        }
      },
      screens: {
        "3xl": "1800px"
      },
      transitionProperty: {
        filter: "filter"
      }
    }
  },
  plugins: [
    require("@vidstack/react/tailwind.cjs"),
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    (api: PluginAPI) => {
      const { addUtilities } = api;
      addUtilities({
        ".no-scrollbar": {
          "::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */
        }
      });
    }
  ]
} satisfies Config;
