import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";
import type React from 'react';

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Вьювери",
  description: "Наслаждайтесь видео, которые вы любите, загружайте оригинальный контент, и делитесь этим всем с друзьями, семьей и всем миром на Viewery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
