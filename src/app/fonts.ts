import { Barlow_Semi_Condensed } from "next/font/google";

export const fontPrimary_init = Barlow_Semi_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
  variable: "--font-primary",
});

export const fontPrimary = fontPrimary_init.variable;
