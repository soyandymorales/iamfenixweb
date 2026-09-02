import { Marcellus, Jost } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "../styles/tokens.css";
import "../styles/typography.css";
import "../styles/spacing.css";
import "../styles/animations.css";
import "../styles/utilities.css";
import "./globals.css";

import { siteMetadata } from "@/content/metadata/site";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const jost = Jost({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang={siteMetadata.locale}
      className={`${marcellus.variable} ${jost.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js");`,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
      <GoogleAnalytics gaId="G-684VXEPVGK" />
    </html>
  );
}
