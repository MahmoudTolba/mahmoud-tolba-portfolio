import type { Metadata } from "next";
import { Inter, Geist, Permanent_Marker } from "next/font/google";
import "./globals.css";

// 1. خط نصوص الجسم الافتراضي (Inter)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 2. خط العناوين الحديث (Geist)
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

// 3. خط الفرشاة الحر (Permanent Marker) الخاص باللوجو
const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-brush",
  display: "swap",
});

// إعدادات الـ SEO الأولية (هنتوسع فيها لاحقاً)
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
      <body className="bg-[#131313] text-[#e5e2e1] antialiased selection:bg-[#c0c1ff] selection:text-[#1000a9]">
        {children}
      </body>
    </html>
  );
}