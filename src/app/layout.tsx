import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Outfit  } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    icon: '/Logo.png',
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
