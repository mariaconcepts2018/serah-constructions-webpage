import {
  Geist,
  Geist_Mono,
  Quintessential,
  Sansation,
  Roboto,
  Righteous,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BottomNavbar from "@/components/BottomNavbar";
import PopupButtons from "@/components/PopupButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quintessential = Quintessential({
  variable: "--font-quintessential-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const sansation = Sansation({
  variable: "--font-sansation-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const righteous = Righteous({
  variable: "--font-righteous",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Serah Constructions - Building Trust and Strong Foundations",

  description:
    "Serah Constructions offering a comprehensive range of services designed to meet the unique needs of every client with a dedication to quality, innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${righteous.variable} ${quintessential.variable} ${roboto.variable} ${sansation.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <PopupButtons />
        <BottomNavbar />
      </body>
    </html>
  );
}
