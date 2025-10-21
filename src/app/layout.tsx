import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Outfit  } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DoStartup",
  description: "DoStartup",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${outfit.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
