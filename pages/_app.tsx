import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, Theme } from "@emotion/react";
import { Hanken_Grotesk } from "next/font/google";

const inter = Hanken_Grotesk({ weight: ["500", "700", "800"], preload: false });

const theme: Theme = {
  colors: {
    primary: {
      lightRed: "hsl(0, 100%, 67%)",
      orangeyYellow: "hsl(39, 100%, 56%)",
      greenTeal: "hsl(166, 100%, 37%)",
      cobaltBlue: "hsl(234, 85%, 45%)",
    },
    secondary: {
      lightRed: "hsla(0, 100%, 90%, 1)",
      orangeyYellow: "hsla(39, 100%, 90%)",
      greenTeal: "hsla(166, 100%, 90%)",
      cobaltBlue: "hsla(234, 100%, 90%)",
    },
    gradients: {
      lightStateBlue: "hsl(252, 100%, 67%)",
      lightRoyalBlue: "hsl(241, 81%, 54%)",
      violetBlue: "hsla(256, 72%, 46%, 1)",
      persianBlue: "hsla(241, 72%, 46%, 0)",
    },
    neutral: {
      white: "hsl(0, 0%, 100%)",
      paleBlue: "hsl(221, 100%, 96%)",
      lightLavender: "hsl(241, 100%, 89%)",
      darkGrayBlue: " hsl(224, 30%, 27%)",
    },
  },
  fontSize: "18px",
  width: {
    mobile: "375px",
    desktop: "1440px",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
