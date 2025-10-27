import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MegaMenuHeader from "@/components/layout/MegaMenuHeader";
import ZincFooter from "@/components/layout/ZincFooter";
import { OrganizationStructuredData, LocalBusinessStructuredData } from "@/components/seo/StructuredData";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL('https://ashtronx.com'),
  title: {
    default: "Ashtronx - Professional Business Services & Compliance Solutions in India",
    template: "%s | Ashtronx - Business Services India"
  },
  description: "Expert business registration, compliance, legal, and consulting services. From GST registration to trademark filing, we help businesses grow with professional solutions in Patna and across India. Trusted by 5000+ businesses.",
  keywords: [
    "business services India",
    "GST registration online",
    "trademark registration India",
    "company registration Patna",
    "private limited company registration",
    "LLP registration",
    "FSSAI license",
    "MSME registration",
    "ISO certification India",
    "legal compliance services",
    "business consulting Patna",
    "startup registration India",
    "tax filing services",
    "business license India"
  ],
  authors: [{ name: "Ashtronx", url: "https://ashtronx.com" }],
  creator: "Ashtronx",
  publisher: "Ashtronx",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/NewL.png',
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ashtronx.com",
    siteName: "Ashtronx",
    title: "Ashtronx - Professional Business Services & Compliance Solutions in India",
    description: "Expert business registration, compliance, legal, and consulting services. Trusted by 5000+ businesses across India. Fast, reliable, and affordable solutions.",
    images: [
      {
        url: "/NewL.png",
        width: 1200,
        height: 630,
        alt: "Ashtronx - Professional Business Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashtronx - Professional Business Services & Compliance Solutions",
    description: "Expert business registration, compliance, and legal services. Trusted by 5000+ businesses across India.",
    images: ["/NewL.png"],
    creator: "@ashtronx",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://ashtronx.com',
  },
  category: 'business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <body suppressHydrationWarning className="font-sans antialiased">
        <MegaMenuHeader />
        <main>{children}</main>
        <ZincFooter />
      </body>
    </html>
  );
}
