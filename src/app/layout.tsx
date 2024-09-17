import type { Metadata } from "next";
import "./globals.css";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SITE_IMAGE_CLOUDINARY_URL,
  SITE_NAME_URL,
} from "@/utils/site";
import { ReactNode } from "react";
import AppWrappers from "./AppWrappers";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  keywords: [
    "base",
    "scooper",
    "scooper labs",
    "labs",
    "Optimism",
    "Mode",
    "Ethereum",
    "base",
    "onchain summer",
    "blockRepo",
    "assetscooper",
    "warpcast",
    "build onchain",
    "onchain",
    "superchain",
    "building the future of onchain",
    "onchain economy",
    "base builder rounds",
    "blockRepo base database",
  ],
  applicationName: SITE_NAME,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: SITE_IMAGE_CLOUDINARY_URL,
        width: 1200,
        height: 630,
      },
    ],
    siteName: SITE_NAME_URL,
  },
  twitter: {
    card: "summary_large_image",
    site: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SITE_IMAGE_CLOUDINARY_URL,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id={"root"} suppressHydrationWarning={true}>
        <AppWrappers>{children}</AppWrappers>
      </body>
    </html>
  );
}
