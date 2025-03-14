import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icons from "@/components/Icons";
import { Analytics } from "@vercel/analytics/react"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Manuel Orosco Home Supplies | Expert Home Remodeling Supplies & Installations",
    template: "Manuel Orosco - %s"
  },
  description: "Discover top-quality home remodeling supplies and professional installation services at Manuel Orosco Home Supplies.Located in Dunellen, New Jersey. Transform your home with our expert solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <Header />
        {children}
        <Icons />
        <Footer />
      </body>
    </html>
  );
}
