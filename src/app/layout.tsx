import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elit Menkul Değerler | Hızlı ve Güvenli Yatırım",
  description: "2003'ten beri İstanbul'un yatırım merkezi. Hisse senedi ve VİOP'ta profesyonel çözüm.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}