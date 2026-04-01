import type { Metadata } from "next";
import { playfair, dmSans, cormorant } from "@/lib/fonts";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thepurelycompany.com"),
  title: "The Purely Company | Organic Grass-Fed Tallow Skincare",
  description:
    "Nutrient-rich tallow skincare, handcrafted in Tampa with 100% organic, grass-fed ingredients your skin actually recognizes.",
  keywords: [
    "tallow skincare",
    "organic skincare",
    "grass-fed tallow",
    "natural skincare",
    "Tampa",
    "handmade",
  ],
  openGraph: {
    title: "The Purely Company | Organic Grass-Fed Tallow Skincare",
    description:
      "Handcrafted with 100% organic, grass-fed tallow — the ingredient list your skin has been waiting for.",
    url: "https://thepurelycompany.com",
    siteName: "The Purely Company",
    images: [
      {
        url: "/images/products/whipped-tallow-2.5oz.jpg",
        width: 1200,
        height: 630,
        alt: "The Purely Company — Whipped Tallow Moisturizer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Purely Company | Organic Grass-Fed Tallow Skincare",
    description:
      "Handcrafted with 100% organic, grass-fed tallow — the ingredient list your skin has been waiting for.",
    images: ["/images/products/whipped-tallow-2.5oz.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
