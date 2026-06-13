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
  title: "MARA සිංහ | Premium Fragrances & Cosmetics",
  description: "Experience the art of premium fragrance and cosmetic items with MARA සිංහ's luxury collection.",
  keywords: ["fragrance", "cosmetics", "premium cosmetics", "Sri Lanka", "aromatherapy", "luxury beauty"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-poppins" suppressHydrationWarning>{children}</body>
    </html>
  );
}
