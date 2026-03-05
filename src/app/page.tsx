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

export default function ElitMenkulFullPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const REGISTER_URL = "https://sube.elitmenkulonline.com/register";
  const WHATSAPP_URL = "https://wa.me/905391046011"; 
  const TELEFON = "+90 539 104 60 11";

  const faqs = [
    { q: "Hesap Açılış Süreci Nasıl İlerler?", a: "Dijital kayıt formumuzu doldurmanızın ardından müşteri temsilcimiz sizinle iletişime geçer ve hesabınız dakikalar içinde aktif edilir." },
    { q: "Varlıklarım Güvende mi?", a: "Tüm varlıklarınız Takasbank güvencesinde, kurumumuzdan ayrı hesaplarda saklanır ve devlet denetimi altındadır." },
    { q: "Komisyon Oranları Nedir?", a: "Yeni açılan hesaplarda belirli hacme kadar %0 komisyon ve T+0 (aynı gün nakit) avantajı sunmaktayız." }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1b294b] font-sans selection:bg-[#c5a059] selection:text-white">
      
      {/* Sabit WhatsApp Butonu */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-[999] bg-[#25d366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95">
        <MessageCircle size={30} />
      </a>

      {/* Üst Bilgi Çubuğu */}
      <div className="bg-[#1b294b] text-white py-2 px-6 md:px-12 text-[10px] flex justify-between items-center tracking-[0.1em] font-bold">
        <div className="flex gap-6">
          <a href={`tel:${TELEFON.replace(/\s/g, '')}`} className="flex items-center gap-1.5 hover:text-[#c5a059] transition">
            <Phone size={12} className="text-[#c5a059]" /> {TELEFON}
          </a>
          <span className="hidden sm:flex items-center gap-1.5 opacity-80">
            <Mail size={12} className="text-[#c5a059]" /> info@elitmenkultr.com
          </span>
        </div>
        <div className="flex items-center gap-1.5 opacity-80 uppercase font-black">
          <Clock size={12} className="text-[#c5a059]" /> 2003'TEN BERİ İSTANBUL
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-[100] py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1b294b] flex items-center justify-center rounded-lg font-black text-[#c5a059] text-xl italic shadow-lg">E</div>
          <div className="text-2xl font-black tracking-tighter leading-none uppercase">ELİT<br/><span className="text-[#c5a059] text-lg tracking-[0.1em]">MENKUL</span></div>
        </div>
        <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="bg-[#1b294b] text-white px-8 py-3 rounded-md font-bold text-xs tracking-widest hover:bg-[#c5a059] transition shadow-md flex items-center gap-2 uppercase">
          WEB TRADER <MousePointer2 size={16} />
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center px-6 md:px-24 bg-[#0a1428] overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428] via-[#0a1428]/70 to-transparent z-10"></div>
        <div className="relative z-20 max-w-4xl">
          <div className="w-20 h-1 bg-[#c5a059] mb-8"></div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight uppercase italic tracking-tighter">Yatırımda <br/><span className="text-[#c5a059]">Hız</span> Ve Güven</h1>
          <p className="text-gray-300 text-xl max-w-2xl mb-10 font-light italic leading-relaxed">İstanbul'un köklü finans tecrübesiyle, modern teknolojiyi birleştirdik. T+0 hızıyla piyasaların hakimi olun.</p>
          <div className="flex flex-wrap gap-5">
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="bg-[#c5a059] text-white px-12 py-5 rounded-md font-black text-sm uppercase tracking-widest hover:bg-white hover:text-[#1b294b] transition-all shadow-xl">Hemen Kayıt Ol</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="border-2 border-white/20 text-white px-12 py-5 rounded-md font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
              <MessageCircle size={18}/> Canlı Destek
            </a>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 text-center items-center">
          <div className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-2xl transition-shadow">
            <Users className="mx-auto text-[#c5a059] mb-6" size={64} />
            <div className="text-6xl font-black text-[#1b294b] tracking-tighter">100K+</div>
            <div className="text-gray-500 font-bold uppercase tracking-[0.3em] text-sm mt-2">Premium Yatırımcı</div>
          </div>
          <div className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-2xl transition-shadow">
            <BarChart3 className="mx-auto text-[#c5a059] mb-6" size={64} />
            <div className="text-6xl font-black text-[#1b294b] tracking-tighter">₺50M+</div>
            <div className="text-gray-500 font-bold uppercase tracking-[0.3em] text-sm mt-2">Günlük İşlem Hacmi</div>
          </div>
        </div>
      </section>

      {/* Sık Sorulan Sorular */}
      <section className="py-32 px-6 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-center mb-16 underline decoration-[#c5a059]">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl bg-white transition-all shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-bold text-[#1b294b] uppercase text-sm">{faq.q}</span>
                  {openFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                {openFaq === index && (
                  <div className="p-6 bg-gray-50 text-gray-600 border-t border-gray-100 italic text-sm animate-in fade-in duration-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1b294b] text-white py-16 px-6 text-center border-t border-[#c5a059]/30">
        <div className="text-3xl font-black mb-4 uppercase italic tracking-tighter">ELİT <span className="text-[#c5a059]">MENKUL</span></div>
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
          © 2026 ELİT MENKUL DEĞERLER A.Ş. — TÜM HAKLARI SAKLIDIR.
        </p>
      </footer>
    </div>
  );
}