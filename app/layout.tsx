import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from './providers';
import SmoothScroll from './components/SmoothScroll';
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omar Mohamed - Full Stack Developer",
  description: "Full Stack Developer crafting digital experiences that push the boundaries of what's possible. Specializing in modern web technologies, mobile apps, and innovative solutions.",
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
        <Providers>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
