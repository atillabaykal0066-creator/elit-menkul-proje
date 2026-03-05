"use client";

import React, { useState } from 'react';
import { 
  Shield, 
  BarChart3, 
  Globe, 
  MousePointer2, 
  ChevronRight, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  CheckCircle2,
  X,
  Users,
  Plus,
  Minus,
  Zap,
  Building2,
  History,
  Award,
  TrendingUp
} from 'lucide-react';

export default function ElitMenkulCorporate() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const REGISTER_URL = "https://sube.elitmenkulonline.com/register";
  const WHATSAPP_URL = "https://wa.me/905391046011"; 
  const TELEFON = "+90 539 104 60 11";

  return (
    <div className="min-h-screen bg-white text-[#1b294b] font-sans">
      
      {/* 1. ÜST ŞERİT - E-ŞUBE VURGUSU (Görseldeki gibi) */}
      <div className="bg-gray-50 py-3 border-b border-gray-100 flex justify-center items-center">
        <a 
          href={REGISTER_URL} 
          target="_blank" 
          className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-1.5 rounded text-xs font-bold tracking-widest transition shadow-md uppercase"
        >
          E-ŞUBE
        </a>
      </div>

      {/* 2. ANA NAVİGASYON (Görseldeki Menü Yapısı) */}
      <nav className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Menü Sol */}
          <div className="flex gap-8 items-center order-2 md:order-1">
            <a href="#hakkimizda" className="text-[13px] font-black border-2 border-[#1b294b] px-4 py-2 hover:bg-[#1b294b] hover:text-white transition uppercase tracking-tighter">HAKKIMIZDA</a>
            <a href="#kurumsal" className="text-[13px] font-black text-cyan-500 hover:text-cyan-600 transition uppercase tracking-tighter">KURUMSAL</a>
          </div>

          {/* Orta Logo (Görseldeki Stil) */}
          <div className="flex flex-col items-center order-1 md:order-2">
            <div className="flex items-baseline">
              <span className="text-5xl font-light text-gray-700 tracking-tighter">Elit</span>
              <span className="ml-2 text-[11px] font-bold text-gray-500 uppercase tracking-widest">Menkul Değerler A.Ş.</span>
            </div>
          </div>

          {/* Menü Sağ */}
          <div className="flex gap-8 items-center order-3">
            <a href="#hizmetler" className="text-[13px] font-black hover:text-blue-700 transition uppercase tracking-tighter">HİZMETLER</a>
            <a href="#iletisim" className="text-[13px] font-black hover:text-blue-700 transition uppercase tracking-tighter">İLETİŞİM</a>
          </div>
        </div>
      </nav>

      {/* 3. HERO (Giriş) */}
      <section className="relative h-[600px] flex items-center px-6 md:px-24 bg-[#0a1428] overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-20 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight uppercase italic tracking-tighter">
            Yatırımın <br/><span className="text-cyan-400">Yeni Nesil</span> Yüzü
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mb-10 font-light italic leading-relaxed">
            Hız, güven ve şeffaflık ilkelerimizle 2003'ten beri piyasadayız.
          </p>
          <div className="flex flex-wrap gap-5">
            <a href={REGISTER_URL} target="_blank" className="bg-cyan-500 text-white px-12 py-5 rounded-md font-black text-sm uppercase tracking-widest hover:bg-white hover:text-[#1b294b] transition-all shadow-xl">Hesap Aç</a>
            <a href={`tel:${TELEFON}`} className="border-2 border-white/20 text-white px-12 py-5 rounded-md font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
              <Phone size={18}/> {TELEFON}
            </a>
          </div>
        </div>
      </section>

      {/* 4. İSTATİSTİKLER (100K+ Bölümü) */}
      <section id="kurumsal" className="py-24 px-6 bg-white border-b">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 text-center">
          <div className="p-12 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm">
            <Users className="mx-auto text-cyan-500 mb-6" size={50} />
            <div className="text-7xl font-black text-[#1b294b] tracking-tighter">100K+</div>
            <div className="text-gray-400 font-bold uppercase tracking-[0.4em] text-xs mt-4">Aktif Yatırımcı</div>
          </div>
          <div className="p-12 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm">
            <BarChart3 className="mx-auto text-cyan-500 mb-6" size={50} />
            <div className="text-7xl font-black text-[#1b294b] tracking-tighter">₺50M+</div>
            <div className="text-gray-400 font-bold uppercase tracking-[0.4em] text-xs mt-4">Günlük İşlem</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="iletisim" className="bg-[#1b294b] text-white py-12 px-6 text-center">
        <div className="text-2xl font-black mb-4 tracking-tighter">ELİT MENKUL</div>
        <p className="text-[10px] text-gray-500 tracking-[0.2em] font-bold uppercase">
          © 2026 ELİT MENKUL DEĞERLER A.Ş. — TÜM HAKLARI SAKLIDIR.
        </p>
      </footer>

      {/* WhatsApp Butonu */}
      <a href={WHATSAPP_URL} target="_blank" className="fixed bottom-6 right-6 z-[999] bg-[#25d366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
        <MessageCircle size={30} />
      </a>
    </div>
  );
}