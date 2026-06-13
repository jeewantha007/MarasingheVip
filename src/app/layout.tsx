import type { Metadata } from "next";
import { Bodoni_Moda, Poppins } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marasinghevip.lk"),
  title: {
    default: "MARA සිංහ | Premium Fragrances & Cosmetics",
    template: "%s | MARA සිංහ",
  },
  description: "Experience the art of premium fragrance and cosmetic items with MARA සිංහ's luxury collection.",
  keywords: ["fragrance", "cosmetics", "premium cosmetics", "Sri Lanka", "aromatherapy", "luxury beauty", "MARA සිංහ", "incense sticks"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marasinghevip.lk",
    siteName: "MARA සිංහ VIP",
    title: "MARA සිංහ | Premium Fragrances & Cosmetics",
    description: "Experience the art of premium fragrance and cosmetic items with MARA සිංහ's luxury collection.",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "MARA සිංහ VIP Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MARA සිංහ | Premium Fragrances",
    description: "Experience the art of premium fragrance and cosmetics.",
    images: ["/banner.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "MARA සිංහ VIP",
  "image": "https://marasinghevip.lk/assets/logo.png",
  "url": "https://marasinghevip.lk",
  "telephone": "+94760093140",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "LK"
  },
  "description": "Premium fragrances, aromatherapy, and cosmetics crafted in Sri Lanka.",
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bodoni.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-poppins" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
