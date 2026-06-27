import type { Metadata } from "next";
import { Inter, Geist, Permanent_Marker } from "next/font/google";
import Navbar from "../components/common/Navbar"; // الاستيراد من الـ Alias المظبوط
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-brush",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahmoud Tolba | Front-End Developer",
  description: "Innovative Front-End Developer specialized in building next-gen web interfaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
 }) {
  return (
    <html 
      lang="en" 
      className={`dark ${inter.variable} ${geist.variable} ${permanentMarker.variable} scroll-smooth`}
    >
      <body className="bg-background text-on-background antialiased selection:bg-primary selection:text-on-primary">
        <Navbar />
        {children}
      </body>
    </html>
  );
}