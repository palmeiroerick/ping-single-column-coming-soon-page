import type { Metadata } from "next";
import type { NextFont } from "next/dist/compiled/@next/font";
import { Libre_Franklin } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const libreFranklin: NextFont = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ping Single Column Coming Soon Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libreFranklin.className}>{children}</body>
    </html>
  );
}
