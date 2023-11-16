import type { Metadata } from "next";
import { Roboto, Titillium_Web } from "next/font/google";
import Header from "./_components/header";
import "./globals.css";

const titilliumWeb = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-titillium",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
  subsets: ["latin"],
  fallback: ["sans-serif"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Razer Clone",
  description: "For Gamers. By Gamers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <body className={`${titilliumWeb.variable} ${roboto.variable} bg-black`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
