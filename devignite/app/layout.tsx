import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBrain, faLink, faLock, faCloud, faGlobe, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
library.add(faBrain, faLink, faLock, faCloud, faGlobe, faStar);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevIgnite",
  description: "The Ultimate Hackathon Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights/>
        <Analytics/>
        </body>
    </html>
  );
}
