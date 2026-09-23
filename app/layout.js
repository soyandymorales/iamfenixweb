import { headers } from "next/headers";
import { Marcellus, Jost } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";

import "../styles/tokens.css";
import "../styles/typography.css";
import "../styles/spacing.css";
import "../styles/animations.css";
import "../styles/utilities.css";
import "./globals.css";

import { getSiteCopy, siteMetadata } from "@/content/metadata/site";
import {
  DEFAULT_LOCALE,
  htmlLang,
  LOCALE_HEADER,
  pickLocale,
} from "@/libs/locale";

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

export async function generateMetadata() {
  const headerList = await headers();
  const locale = pickLocale(headerList.get(LOCALE_HEADER) || DEFAULT_LOCALE);
  const copy = getSiteCopy(locale);
  return {
    title: copy.title,
    description: copy.description,
    metadataBase: new URL(siteMetadata.url),
  };
}

export default async function RootLayout({ children }) {
  const headerList = await headers();
  const locale = pickLocale(headerList.get(LOCALE_HEADER) || DEFAULT_LOCALE);

  return (
    <html
      lang={htmlLang(locale)}
      className={`${marcellus.variable} ${jost.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js");if(location.hash==="#empieza-aqui"){document.documentElement.style.scrollBehavior="auto";}`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-684VXEPVGK" />
    </html>
  );
}
