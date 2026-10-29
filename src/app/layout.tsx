import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ومن الصفر تقدر توصل - دليل عملي لبناء أول موقع لعرض خدمة",
  description: "دليل عربي عملي يساعد المبتدئ على بناء أول موقع لعرض خدمة، وإنشاء عرض تجريبي، والتواصل مع العملاء المحتملين",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body className={`${ibmPlexSansArabic.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
