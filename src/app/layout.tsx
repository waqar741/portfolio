import type { Metadata } from "next";
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
  metadataBase: new URL("https://www.waquarshaikh.me"),
  title: {
    default: "Waquar Shaikh | Freelance Web Developer in Navi Mumbai",
    template: "%s | Waquar Shaikh",
  },
  description: "Computer Engineer and full-stack developer in Navi Mumbai. Specializing in Next.js, React, and Python to build high-performance web applications.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Waquar Shaikh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  authors: [{ name: "Waquar Shaikh" }],
  creator: "Waquar Shaikh",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "TODO(waquar): Add your Google verification code",
    // yandex, yahoo, other verifications...
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-500">{children}</body>
    </html>
  );
}
