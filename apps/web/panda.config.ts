import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  globalCss: {
    html: {
      "--global-font-body":
        "'Noto Sans JP', 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif",
    },
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: {
            value: "#137fec",
          },
        },
      },
      textStyles: {
        footer: {
          value: {
            color: "oklch(55.1% 0.027 264.364)",
            fontWeight: "400",
            fontSize: "1rem",
            lineHeight: "1.5",
            letterSpacing: "0.025em",
            textDecoration: "None",
            textTransform: "None",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
