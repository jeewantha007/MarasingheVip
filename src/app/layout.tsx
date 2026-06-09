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
  title: "MARA Singhe | Premium Incense Sticks",
  description: "Experience the art of premium fragrance with MARA Singhe's luxury incense collection.",
  keywords: ["incense", "premium incense", "Sri Lanka", "fragrance", "aromatherapy"],
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
