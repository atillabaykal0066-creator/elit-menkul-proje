"use client";

import React, { useEffect, useRef,紧useState } from 'react';
import * as Icons from 'lucide-react';

// TRADINGVIEW CANLI VERİ BANDI
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
          { "proName": "BITSTAMP:BTCUSD", "title": "BITCOIN" },
          { "proName": "OANDA:XAGUSD", "title": "GÜMÜŞ" }
        ],
        "showSymbolLogo": true, "colorTheme": "dark", "isTransparent": false, "displayMode": "adaptive", "locale": "tr"
      });
      container.current.appendChild(script);
    }
  }, []);
  return <div ref={container} className="tradingview-widget-container" />;
};

// EKONOMİK TAKVİM WIDGET
const EconomicCalendar = () => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (container.current && !container.current.querySelector('script')) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
      script.type = "text/javascript"; script.async = true;
      script.innerHTML = JSON.stringify({
        "colorTheme": "light", "isTransparent": false, "width": "100%", "height": "400", "locale": "tr", "importanceFilter": "-1,0,1", "currencyFilter": "USD,EUR,TRY"
      });
      container.current.appendChild(script);
    }
  }, []);
  return <div ref={container} className="tradingview-widget-container" />;
};

export default function ElitMenkulMasterEdition() {
  const [activeTab, setActiveTab] = useState('hisse');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const WHATSAPP_URL = "https://wa.me/905391046011"; 
  const REGISTER_URL = "https://sube.elitmenkulonline.com/register";
  const TELEFON = "+90 539 104 60 11";

  return (
    <div className="min-h-screen bg-white text-[#1b294b] font-sans selection:bg-[#c5a059] selection:text-white">
      
      {/* CANLI PİYASA VE ÜST PANEL */}
      <header className="fixed top-0 w-full z-[1000] shadow-2xl">
        <TradingViewTicker />
        <div className="bg-[#1b294b] py-2 px-6 md:px-12 flex justify-between items-center border-t border-white/5">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-black text-[#c5a059] tracking-widest uppercase">
              <Icons.Activity size={14} className="animate-pulse" /> Piyasa Durumu: <span className="text-green-500">AÇIK</span>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-[10px] font-bold text-gray-400 tracking-widest uppercase">
              <Icons.ShieldCheck size={14} className="text-[#c5a059]" /> Takasbank Saklama Lisanslı
            </div>
          </div>
          <div className="flex gap-4">
             <a href={REGISTER_URL} target="_blank" className="bg-[#c5a059] text-white px-8 py-2 rounded-sm text-[10px] font-black tracking-widest hover:bg-white hover:text-[#1b294b] transition-all uppercase">E-ŞUBE GİRİŞ</a>
          </div>
        </div>
      </header>

      {/* PROFESYONEL NAVİGASYON */}
      <nav className="bg-white/95 backdrop-blur-md pt-[110px] pb-8 px-6 md:px-12 border-b border-gray-100 relative z-[900]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex gap-10 items-center text-[11px] font-black uppercase tracking-[0.2em]">
            <a href="#strateji" className="hover:text-[#c5a059] transition-all">Strateji</a>
            <a href="#piyasalar" className="hover:text-[#c5a059] transition-all">Piyasalar</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
               <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Elit Menkul</div>
               <div className="text-[12px] font-black text-[#1b294b] uppercase tracking-[0.1em]">Değerler A.Ş.</div>
            </div>
            <div className="w-[2px] h-10 bg-[#c5a059] hidden sm:block"></div>
            <span className="text-6xl font-light text-[#1b294b] tracking-tighter italic">Elit</span>
          </div>

          <div className="flex gap-10 items-center text-[11px] font-black uppercase tracking-[0.2em]">
            <a href="#analiz" className="hover:text-[#c5a059] transition-all text-[#00bcd4]">Analiz</a>
            <a href="#iletisim" className="border-b-2 border-[#c5a059] pb-1">İletişim</a>
          </div>
        </div>
      </nav>

      {/* ULTRA PROFESSIONAL HERO */}
      <section className="relative h-[850px] flex items-center px-6 md:px-24 bg-[#0a1428] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?q=80&w=2070')] bg-cover bg-fixed opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428] via-[#0a1428]/95 to-transparent z-10"></div>
        
        <div className="relative z-20 max-w-7xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-[2px] bg-[#c5a059]"></div>
            <div className="text-[#c5a059] text-[11px] font-black tracking-[0.5em] uppercase">Global Yatırım Standartları</div>
          </div>
          <h1 className="text-7xl md:text-[160px] font-black mb-10 leading-[0.75] uppercase italic tracking-tighter">
            Yatırımda <br/><span className="text-[#c5a059]">Elit</span> <br/>Standartlar
          </h1>
          <p className="text-gray-400 text-2xl max-w-3xl mb-14 font-medium italic leading-relaxed border-l-8 border-[#c5a059] pl-10">
            Sermayenizi sadece yönetmeyin, büyütün. T+0 hızı, sıfır komisyon ve çift yönlü işlem gücüyle Elit Menkul'de limitleri siz belirlersiniz.
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            <a href={REGISTER_URL} target="_blank" className="bg-[#c5a059] text-white px-20 py-8 rounded-sm font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-[#1b294b] transition-all shadow-[0_20px_50px_rgba(197,160,89,0.3)]">
              HEMEN HESAP AÇIN
            </a>
            <div className="flex items-center gap-6 border-l border-white/10 pl-8">
              <div className="text-center">
                <div className="text-2xl font-black">24h</div>
                <div className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">Destek</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black">T+0</div>
                <div className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">Hızlı Nakit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 ALTIN KURAL - DETAYLI ANLATIM */}
      <section id="strateji" className="py-40 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="space-y-8 p-12 bg-gray-50 rounded-br-[80px] hover:shadow-2xl transition-all border-l-4 border-[#1b294b]">
            <Icons.ZapOff className="text-[#c5a059]" size={60} />
            <h3 className="text-4xl font-black uppercase italic leading-none text-[#1b294b]">T+2 Takas <br/>Beklemeyin</h3>
            <p className="text-gray-500 leading-relaxed font-medium italic">
              Borsa İstanbul'un klasik 2 günlük nakit bekleme süresini Elit Menkul teknolojisi ile aşıyoruz. Satış yaptığınız anda paranız hesabınızda, yeni bir fırsatı yakalamak için saniyeleriniz var.
            </p>
          </div>
          <div className="space-y-8 p-12 bg-[#1b294b] rounded-br-[80px] shadow-2xl scale-105 z-10">
            <Icons.CircleDollarSign className="text-[#c5a059]" size={60} />
            <h3 className="text-4xl font-black uppercase italic leading-none text-white">Sıfır <br/>Komisyon</h3>
            <p className="text-gray-300 leading-relaxed font-medium italic">
              İşlem hacmi yüksek yatırımcılar için maliyetleri tamamen ortadan kaldırdık. Kazancınızın tek kuruşunu dahi komisyona kaptırmadan, net kârınızı maksimize edin. Sizin başarınız, bizim vizyonumuz.
            </p>
          </div>
          <div className="space-y-8 p-12 bg-gray-50 rounded-br-[80px] hover:shadow-2xl transition-all border-l-4 border-[#1b294b]">
            <Icons.ArrowDownUp className="text-[#c5a059]" size={60} />
            <h3 className="text-4xl font-black uppercase italic leading-none text-[#1b294b]">Çift Yönlü <br/>Kazanç</h3>
            <p className="text-gray-500 leading-relaxed font-medium italic">
              Ayı piyasası mı geliyor? Korkmayın. Açığa satış (Short) ve VİOP entegrasyonumuzla fiyatlar düşerken de kazanmaya devam edin. Piyasayı tek yönlü değil, 360 derece yönetin.
            </p>
          </div>
        </div>
      </section>

      {/* EKONOMİK TAKVİM VE ANALİZ (Yeni Eklenen Bölüm) */}
      <section id="analiz" className="py-32 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-black uppercase italic mb-8 text-[#1b294b]">Ekonomik <span className="text-[#c5a059]">Ajanda</span></h2>
            <p className="text-gray-600 mb-10 font-medium italic">Küresel piyasalara yön veren kritik verileri saniyelik takip edin. Fed kararlarından işsizlik verilerine kadar her şey burada.</p>
            <div className="bg-white p-6 rounded-3xl shadow-xl overflow-hidden">
               <EconomicCalendar />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-12">
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform">
               <Icons.BarChart3 className="text-[#c5a059] mb-6" size={40} />
               <h4 className="text-2xl font-black uppercase italic mb-4">Günlük Bülten</h4>
               <p className="text-gray-500 text-sm mb-6 font-medium italic">Uzman ekibimiz tarafından hazırlanan sabah analizleri ve hisse önerileri her sabah 09:00'da e-postanızda.</p>
               <button className="text-[#1b294b] font-black uppercase text-xs tracking-widest border-b-2 border-[#c5a059] pb-1">ABONE OLUN</button>
            </div>
            <div className="bg-[#1b294b] p-10 rounded-3xl shadow-2xl text-white hover:-translate-y-2 transition-transform">
               <Icons.Landmark className="text-[#c5a059] mb-6" size={40} />
               <h4 className="text-2xl font-black uppercase italic mb-4">VIP Portföy Yönetimi</h4>
               <p className="text-gray-400 text-sm mb-6 font-medium italic">1M TL üzeri portföyler için kişiye özel atanmış lisanslı yatırım danışmanı ile stratejinizi profesyonelleştirin.</p>
               <a href={WHATSAPP_URL} target="_blank" className="text-[#c5a059] font-black uppercase text-xs tracking-widest border-b-2 border-white/20 pb-1">BİLGİ ALIN</a>
            </div>
          </div>
        </div>
      </section>

      {/* GÜVENLİK (Takasbank Vurgusu) */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <div className="flex justify-center items-center gap-10 opacity-30">
            <span className="text-3xl font-black italic">BIST</span>
            <span className="text-3xl font-black italic">TAKASBANK</span>
            <span className="text-3xl font-black italic">SPK</span>
            <span className="text-3xl font-black italic">MKK</span>
          </div>
          <p className="text-gray-400 font-bold uppercase tracking-[0.4em] text-[10px]">Tüm varlıklar devlet güvencesindeki Takasbank nezdinde saklanmaktadır.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="iletisim" className="bg-[#0a1428] text-white py-40 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24">
          <div className="space-y-10">
            <div className="text-5xl font-light italic">Elit <span className="text-[#c5a059] font-black">Menkul</span></div>
            <p className="text-gray-500 text-sm leading-relaxed font-medium italic">
              2003 yılında İstanbul'da kurulan Elit Menkul Değerler A.Ş., Türkiye'nin en köklü ve güvenilir aracı kurumlarından biridir. Teknoloji odaklı yatırımın öncüsüyüz.
            </p>
          </div>
          <div className="space-y-10">
            <h5 className="font-black uppercase text-[10px] tracking-[0.5em] text-[#c5a059]">Bize Ulaşın</h5>
            <div className="space-y-6">
              <a href={`tel:${TELEFON}`} className="flex items-center gap-4 text-2xl font-black italic hover:text-[#c5a059] transition">{TELEFON}</a>
              <p className="text-gray-500 font-medium italic">info@elitmenkultr.com</p>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Buyukdere Cad. No:127 Kat:8 Levent/Istanbul</p>
            </div>
          </div>
          <div className="space-y-10">
            <h5 className="font-black uppercase text-[10px] tracking-[0.5em] text-[#c5a059]">Linkler</h5>
            <div className="grid grid-cols-2 gap-4 text-xs font-black uppercase tracking-widest text-gray-500">
              <a href="#" className="hover:text-white transition">Komisyon Oranları</a>
              <a href="#" className="hover:text-white transition">İşlem Saatleri</a>
              <a href="#" className="hover:text-white transition">KVKK</a>
              <a href="#" className="hover:text-white transition">Risk Bildirimi</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-32 pt-16 border-t border-white/5 opacity-50">
           <p className="text-[10px] font-black tracking-[0.6em] uppercase">© 2026 ELİT MENKUL DEĞERLER A.Ş. — LİSANSLI ARACI KURUM</p>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href={WHATSAPP_URL} target="_blank" className="fixed bottom-10 right-10 z-[2000] bg-[#25d366] text-white p-6 rounded-full shadow-[0_20px_60px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all group">
        <Icons.MessageCircle size={32} />
        <span className="absolute right-full mr-6 bg-[#0a1428] text-white py-2 px-6 rounded-md text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Uzmana Bağlanın</span>
      </a>
    </div>
  );
}