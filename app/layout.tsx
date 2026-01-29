import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk"
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Colton Batts — Motion Graphics & Video Production",
  description:
    "Lead Motion Graphics Designer & Editor. Shop with Google, Kate Spade Fashion Week, Under Armour. NYC-based creative director.",
  openGraph: {
    title: "Colton Batts — Motion Graphics & Video Production",
    description:
      "Lead Motion Graphics Designer & Editor. Award-winning creative production.",
    url: "https://coltonbatts.com",
    siteName: "Colton Batts Portfolio",
    images: [
      {
        url: "https://coltonbatts.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
