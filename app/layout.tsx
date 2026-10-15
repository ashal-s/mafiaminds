import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Mafia Minds",
  description: "The classic game of deception, online.",
  applicationName: "Mafia Minds",
  // Makes the Home Screen PWA run standalone on iOS, which is required for
  // Web Push to be delivered (iOS 16.4+).
  appleWebApp: {
    capable: true,
    title: "Mafia Minds",
    statusBarStyle: "black-translucent",
  },
  // Favicon / apple-touch icons come from app/favicon.ico, app/icon.png, and
  // app/apple-icon.png (Next.js file-based metadata).
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${geistSans.className} flex min-h-full flex-col`}>
        {children}
      </body>
    </html>
  );
}
