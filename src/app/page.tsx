import { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Korean With Us language center in Myanmar. Learn Korean from beginner to advanced levels with experienced teachers. TOPIK preparation, speaking practice, and cultural immersion.",
  openGraph: {
    title: "Korean With Us - Learn Korean Language & Culture",
    description: "Welcome to Korean With Us language center in Myanmar. Learn Korean from beginner to advanced levels with experienced teachers. TOPIK preparation, speaking practice, and cultural immersion.",
    url: "https://koreanwithus.com",
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
    title: "Korean With Us - Learn Korean Language & Culture",
    description: "Welcome to Korean With Us language center in Myanmar. Learn Korean from beginner to advanced levels with experienced teachers. TOPIK preparation, speaking practice, and cultural immersion.",
    images: ["/twitter-image.jpg"],
  },
};

export default function Home() {
  return <HomePageClient />;
}