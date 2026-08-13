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
  metadataBase: new URL("https://www.graceonedevelopments.com"),

  title: {
    default:
      "Grace One Developments | Tampa Real Estate Development, Housing & Remodeling",
    template: "%s | Grace One Developments",
  },

  description:
    "Grace One Developments is a Tampa, Florida residential real estate development and investment company focused on property acquisition, remodeling, rental housing, Section 8 opportunities, and long-term community value.",

  keywords: [
    "Grace One Developments",
    "Tampa real estate development",
    "Tampa residential development",
    "Tampa property investment",
    "Tampa Section 8 housing",
    "Tampa Housing Choice Voucher",
    "Tampa rental properties",
    "Tampa remodeling",
    "Tampa home renovation",
    "Tampa investment properties",
    "Tampa real estate opportunities",
  ],

  authors: [
    {
      name: "Grace One Developments",
    },
  ],

  creator: "Grace One Developments",
  publisher: "Grace One Developments",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Grace One Developments | Tampa Real Estate Development & Housing",
    description:
      "Residential development, property investment, remodeling, rental housing, and housing opportunities in Tampa, Florida.",
    url: "https://www.graceonedevelopments.com",
    siteName: "Grace One Developments",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-home.jpg",
        width: 1200,
        height: 630,
        alt: "Grace One Developments residential real estate development in Tampa, Florida",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Grace One Developments | Tampa Real Estate Development & Housing",
    description:
      "Residential development, remodeling, rental housing, and investment opportunities in Tampa, Florida.",
    images: ["/images/hero-home.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
      <body>{children}</body>
    </html>
  );
}