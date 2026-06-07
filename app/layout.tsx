import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "That's You | 나만의 추구미 찾기",
  description: "당신의 퍼스널 컬러와 에스테틱을 찾아보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-[#FAF8F5] text-[#4A4A4A] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
