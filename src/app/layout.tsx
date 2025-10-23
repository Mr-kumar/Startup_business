import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MegaMenuHeader from "@/components/layout/MegaMenuHeader";
import ZincFooter from "@/components/layout/ZincFooter";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ashtronx - Professional Business Services & Compliance Solutions",
  description: "Expert business registration, compliance, legal, and consulting services. From GST registration to trademark filing, we help businesses grow with professional solutions in Patna and across India.",
  keywords: "business services, GST registration, trademark registration, company registration, legal compliance, business consulting, Patna, India",
  authors: [{ name: "Ashtronx" }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16' },
    ],
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'icon',
      url: '/NewL.png',
    },
  },
  openGraph: {
    title: "Ashtronx - Professional Business Services",
    description: "Expert business registration, compliance, and consulting services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning className="font-sans antialiased">
        <MegaMenuHeader />
        <main>{children}</main>
        <ZincFooter />
      </body>
    </html>
  );
}
