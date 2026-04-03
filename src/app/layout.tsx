import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Tarayıcı sekmesinde ve Google'da görünecek isim
  title: "Elit Menkul Değerler | Yatırımda Elit Standartlar",
  
  // Site paylaşıldığında (Telegram, WhatsApp vb.) görünecek açıklama
  description: "T+0 likidite hızı ve sıfır komisyon avantajıyla sermayenizi Elit Menkul güvencesiyle yönetin. SPK denetimli resmi yatırım platformu.",
  
  // Favicon ve ikon ayarları
  icons: {
    icon: [
      {
        url: "/favicon.ico", // Public klasöründeki favicon dosyanız
        href: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={inter.className}>
        {/* Sayfa içeriği burada yüklenir */}
        {children}
      </body>
    </html>
  );
}