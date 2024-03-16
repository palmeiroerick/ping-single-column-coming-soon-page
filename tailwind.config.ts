import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.tsx", "./app/**/*.tsx"],
  theme: {
    screens: {
      sm: "375px",
      md: "1440px",
    },
    colors: {
      blue: "hsl(223, 87%, 63%)",
      paleBlue: "hsl(223, 100%, 88%)",
      lightRed: "hsl(354, 100%, 66%)",
      gray: "hsl(0, 0%, 59%)",
      veryDarkBlue: "hsl(209, 33%, 12%)",
      white: "#ffffff",
    },
    fontWeight: {
      light: "300",
      semibold: "600",
      bold: "700",
    },
  },
};

export default config;
