"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as Icons from 'lucide-react';

// TRADINGVIEW CANLI VERİ BİLEŞENİ
const TradingViewTicker = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current && !container.current.querySelector('script')) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbols": [
          { "proName": "BIST:XU100", "title": "BIST 100" },
          { "proName": "FX_IDC:USDTRY", "title": "USD/TRY" },
          { "proName": "FX_IDC:EURTRY", "title": "EUR/TRY" },
          { "proName": "OANDA:XAUUSD", "title": "ONS ALTIN" },
          { "proName": "BITSTAMP:BTCUSD", "title": "BITCOIN" }
        ],
        "showSymbolLogo": true,
        "colorTheme": "dark",
        "isTransparent": false,
        "displayMode": "adaptive",
        "locale": "tr"
      });
      container.current.appendChild(script);
    }
  }, []);

  return <div ref={container} className="tradingview-widget-container" />;
};

export default function ElitMenkulFinal() {
  const WHATSAPP_URL = "https://wa.me/905391046011"; 
  const REGISTER_URL = "https://sube.elitmenkulonline.com/register";
  const TELEFON = "+90 539 104 60 11";

  return (
    <div className="min-h-screen bg-white text-[#1b294b] font-sans selection:bg-[#c5a059]">
      
      {/* CANLI VERİ VE ÜST BAR */}
      <div className="sticky top-0 z-[150] shadow-xl">
        <TradingViewTicker />
        <div className="bg-[#1b294b] py-2 px-6 flex justify-between items-center border-t border-white/5">
           <div className="flex items-center gap-4 text-[10px] font-black text-[#c5a059] tracking-widest uppercase">
             <Icons.Activity size={14} className="animate-pulse" /> Piyasa Erişimi: Aktif
           </div>
           <a href={REGISTER_URL} target="_blank" className="bg-[#c5a059] text-white px-6 py-1.5 rounded text-[10px] font-black hover:bg-white hover:text-[#1b294b] transition-all uppercase shadow-lg">
             E-ŞUBE GİRİŞ
           </a>
        </div>
      </div>

      {/* NAVİGASYON */}
      <nav className="bg-white/95 backdrop-blur-md py-6 px-6 md:px-12 border-b border-gray-100 relative z-[100]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-8 items-center text-[11px] font-black uppercase tracking-widest order-2 md:order-1">
            <a href="#hizmetler" className="hover:text-[#c5a059] transition">Hizmetler</a>
            <a href="#avantajlar" className="hover:text-[#c5a059] transition">Avantajlar</a>
          </div>

          <div className="flex flex-col items-center order-1 md:order-2">
            <div className="flex items-baseline">
              <span className="text-5xl font-light text-gray-800 tracking-tighter italic">Elit</span>
              <span className="ml-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">Menkul Değerler</span>
            </div>
          </div>

          <div className="flex gap-8 items-center text-[11px] font-black uppercase tracking-widest order-3">
            <a href="#hakkimizda" className="hover:text-[#c5a059] transition">Kurumsal</a>
            <a href="#iletisim" className="border-b-2 border-[#c5a059] pb-1 hover:text-[#c5a059] transition">İletişim</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION (image_4eda80.jpg stilinde) */}
      <section className="relative h-[700px] flex items-center px-6 md:px-24 bg-[#0a1428] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974717482-58a00f244b3d?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428] via-[#0a1428]/80 to-transparent z-10"></div>
        
        <div className="relative z-20 max-w-5xl">
          <div className="border border-[#c5a059] inline-block px-4 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-[#c5a059] mb-8">
            20 Yıllık Finansal Tecrübe
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.85] uppercase italic tracking-tighter">
            Yatırımda <br/><span className="text-[#c5a059]">Elit</span> Standartlar
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mb-12 font-medium italic leading-relaxed border-l-4 border-[#c5a059] pl-6">
            T+0 likidite hızı, sıfır komisyon avantajı ve piyasa düşerken kazandıran çift yönlü işlem modelleriyle sermayenizi devlet güvencesinde yönetin.
          </p>
          <a href={REGISTER_URL} target="_blank" className="bg-[#c5a059] text-white px-16 py-6 rounded-md font-black text-sm uppercase tracking-widest hover:bg-white hover:text-[#1b294b] transition-all shadow-2xl">
            Hesabınızı Hemen Aktif Edin
          </a>
        </div>
      </section>

      {/* 3 ALTIN KURAL - GÜVEN BÖLÜMÜ */}
      <section id="avantajlar" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="p-12 bg-gray-50 rounded-[40px] border-t-8 border-[#1b294b] hover:shadow-2xl transition-all group">
            <Icons.ZapOff className="text-[#c5a059] mb-8 group-hover:scale-110 transition-transform" size={56} />
            <h3 className="text-2xl font-black uppercase mb-4 italic">T+2 Kuralı Yok</h3>
            <p className="text-gray-500 text-sm leading-relaxed italic font-medium">Satış yaptığınız tutar için 2 gün beklemeyin. Nakit gücünüz anında kullanılabilir bakiyenizde.</p>
          </div>
          <div className="p-12 bg-gray-50 rounded-[40px] border-t-8 border-[#c5a059] hover:shadow-2xl transition-all group">
            <Icons.CircleDollarSign className="text-[#1b294b] mb-8 group-hover:scale-110 transition-transform" size={56} />
            <h3 className="text-2xl font-black uppercase mb-4 italic">Sıfır Komisyon</h3>
            <p className="text-gray-500 text-sm leading-relaxed italic font-medium">İşlem maliyetlerini sıfıra indirin. Kazancınız kurumlara değil, portföyünüze kalsın.</p>
          </div>
          <div className="p-12 bg-gray-50 rounded-[40px] border-t-8 border-[#1b294b] hover:shadow-2xl transition-all group">
            <Icons.TrendingDown className="text-[#c5a059] mb-8 group-hover:scale-110 transition-transform" size={56} />
            <h3 className="text-2xl font-black uppercase mb-4 italic">Çift Yönlü Kar</h3>
            <p className="text-gray-500 text-sm leading-relaxed italic font-medium">Sadece yükselişte değil, düşüş trendlerinde de açığa satış ile kazanç sağlayın.</p>
          </div>
        </div>
      </section>

      {/* GÜVENLİK VURGUSU */}
      <section className="py-24 bg-[#f8f9fa] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1">
            <h2 className="text-5xl font-black uppercase italic mb-8 tracking-tighter text-[#1b294b]">Takasbank <span className="text-[#c5a059]">Güvencesi</span></h2>
            <p className="text-gray-600 text-lg font-medium italic leading-relaxed mb-6">
              Elit Menkul'de tüm yatırımcı varlıkları kurumumuzun özkaynaklarından bağımsız olarak devlet nezdindeki **Takasbank** üzerinde saklanır.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-[#1b294b]"><Icons.ShieldCheck className="text-green-500"/> SPK Denetimli</div>
              <div className="flex items-center gap-2 text-xs font-black uppercase text-[#1b294b]"><Icons.Lock className="text-green-500"/> 256-Bit Şifreleme</div>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            <div className="bg-white p-10 rounded-3xl shadow-sm border-b-4 border-[#c5a059] text-center">
              <Icons.Landmark className="mx-auto mb-4 text-[#1b294b]" />
              <div className="font-black text-xl">20+ Yıl</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tecrübe</div>
            </div>
            <div className="bg-[#1b294b] p-10 rounded-3xl shadow-sm border-b-4 border-white text-center text-white">
              <Icons.Users className="mx-auto mb-4 text-[#c5a059]" />
              <div className="font-black text-xl">100K+</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Yatırımcı</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="iletisim" className="bg-[#0a1428] text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-3xl font-light italic mb-12">Elit <span className="text-[#c5a059] font-black underline decoration-1 underline-offset-8">Menkul</span></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm font-black uppercase tracking-[0.2em] mb-12">
            <a href={`tel:${TELEFON}`} className="flex items-center justify-center gap-3 hover:text-[#c5a059] transition"><Icons.Phone size={18}/> {TELEFON}</a>
            <div className="flex items-center justify-center gap-3 text-gray-400 tracking-normal font-medium italic"><Icons.Mail size={18}/> info@elitmenkultr.com</div>
          </div>
          <p className="text-[10px] text-gray-600 tracking-[0.4em] uppercase font-bold">© 2026 ELİT MENKUL DEĞERLER A.Ş. — LİSANSLI ARACI KURUM</p>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a href={WHATSAPP_URL} target="_blank" className="fixed bottom-10 right-10 z-[200] bg-[#25d366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-90">
        <Icons.MessageCircle size={32} />
      </a>
    </div>
  );
}