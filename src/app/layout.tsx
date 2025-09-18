import { Poppins, Noto_Sans_KR } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Korean With Us - Learn Korean Language & Culture",
    template: "%s | Korean With Us - Learn Korean Language & Culture"
  },
  description: "Join Korean With Us language center in Myanmar. Learn Korean from beginner to advanced levels with experienced teachers. TOPIK preparation, speaking practice, and cultural immersion.",
  keywords: "Korean language, Korean classes, TOPIK preparation, Myanmar, Korean culture, language learning, Hangul, Korean education",
  authors: [{ name: "Korean With Us" }],
  creator: "Korean With Us",
  publisher: "Korean With Us",
  robots: "index, follow",
  applicationName: "Korean With Us",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      { url: '/favicon.svg', sizes: '32x32', type: 'image/x-icon' }, 
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg', sizes: '192x192', type: 'image/png' },
    ],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL('https://koreanwithus.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://koreanwithus.com",
    title: "Korean With Us - Learn Korean Language & Culture",
    description: "Join Korean With Us language center in Myanmar. Learn Korean from beginner to advanced levels with experienced teachers. TOPIK preparation, speaking practice, and cultural immersion.",
    siteName: "Korean With Us",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Korean With Us - Learn Korean Language & Culture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Korean With Us - Learn Korean Language & Culture",
    description: "Join Korean With Us language center in Myanmar. Learn Korean from beginner to advanced levels with experienced teachers. TOPIK preparation, speaking practice, and cultural immersion.",
    images: ["/twitter-image.jpg"],
    creator: "@koreanwithus",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#F472B6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Search Console Verification - Replace with your actual verification code */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE_HERE" />
      </head>
      <body
        className={`${poppins.variable} ${notoSansKR.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}