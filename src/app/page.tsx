"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as Icons from 'lucide-react';

/**
 * 1. CANLI PİYASA VERİ BANDI (TRADINGVIEW)
 */
const TradingViewTicker = () => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (container.current && !container.current.querySelector('script')) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript"; script.async = true;
      script.innerHTML = JSON.stringify({
        "symbols": [
          { "proName": "BIST:XU100", "title": "BIST 100" },
          { "proName": "FX_IDC:USDTRY", "title": "USD/TRY" },
          { "proName": "OANDA:XAUUSD", "title": "ONS ALTIN" },
          { "proName": "BITSTAMP:BTCUSD", "title": "BITCOIN" },
          { "proName": "FX:EURUSD", "title": "EUR/USD" }
        ],
        "showSymbolLogo": true, "colorTheme": "dark", "isTransparent": false, "displayMode": "adaptive", "locale": "tr"
      });
      container.current.appendChild(script);
    }
  }, []);
  return <div ref={container} className="tradingview-widget-container" />;
};

/**
 * 2. ANA PORTAL BİLEŞENİ
 */
export default function ElitMenkulFullPortal() {
  const [investment, setInvestment] = useState(50000);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // İLETİŞİM VE LİNKLER
  const WHATSAPP_URL = "https://wa.me/905391046011"; 
  const TELEFON = "+90 539 104 60 11";
  const FORMSPREE_URL = "https://formspree.io/f/mbdzrgnr"; 

  // MT5 LİNKLERİ
  const MT5_WINDOWS = "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe";
  const MT5_IOS = "https://apps.apple.com/tr/app/metatrader-5/id413251709"; // GÜNCELLENDİ
  const MT5_ANDROID = "https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5";

  // SLIDER VERİLERİ
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1611974717482-4800b1ee2e24?q=80&w=2070",
      title: "Yatırımda Elit Standartlar",
      desc: "T+0 likidite hızı ve sıfır komisyon avantajıyla sermayenizi global piyasalarda yönetin."
    },
    {
      img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070",
      title: "Global Borsalara Erişim",
      desc: "NYSE, NASDAQ ve BIST işlemlerinizi tek bir profesyonel panel üzerinden saniyeler içinde gerçekleştirin."
    },
    {
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
      title: "Algoritmik İşlem Hızı",
      desc: "0.01ms emir iletim hızıyla piyasadaki fırsatları kaçırmadan portföyünüzü büyütün."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const monthlyProfit = (investment * 0.30).toLocaleString('tr-TR', { maximumFractionDigits: 0 });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) setIsSubmitted(true);
    } catch (error) {
      console.error("Hata", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1b294b] font-sans selection:bg-[#c5a059] selection:text-white">
      
      {/* HEADER & TICKER */}
      <header className="fixed top-0 w-full z-[1000] shadow-2xl">
        <TradingViewTicker />
        <div className="bg-[#1b294b] py-2.5 px-6 md:px-12 flex justify-between items-center border-t border-white/5">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-black text-[#c5a059] tracking-widest uppercase">
              <Icons.ShieldCheck size={14} className="animate-pulse" /> LİSANSLI KURUM: <span className="text-white">SPK DENETİMLİ</span>
            </div>
          </div>
          <div className="flex gap-4">
             <a href="#kayit" className="bg-[#c5a059] text-white px-8 py-2 rounded-sm text-[10px] font-black tracking-widest hover:bg-white hover:text-[#1b294b] transition-all uppercase">HESAP AÇ</a>
          </div>
        </div>
      </header>

      {/* NAVİGASYON */}
      <nav className="bg-white/95 backdrop-blur-md pt-[115px] pb-8 px-6 md:px-12 border-b border-gray-100 relative z-[900]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex gap-8 items-center text-[10px] font-black uppercase tracking-[0.2em]">
            <a href="#guven" className="hover:text-[#c5a059] transition-all">Güvenlik</a>
            <a href="#platform" className="hover:text-[#c5a059] transition-all">MT5 Terminal</a>
            <a href="#hizmetler" className="hover:text-[#c5a059] transition-all">Hizmetler</a>
            <a href="#hesaplama" className="hover:text-[#c5a059] transition-all text-[#00bcd4]">Getiri Analizi</a>
            <a href="#sss" className="hover:text-[#c5a059] transition-all hidden lg:block">S.S.S</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
                <div className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">Elit Menkul</div>
                <div className="text-[11px] font-black text-[#1b294b] uppercase tracking-[0.1em]">Değerler A.Ş.</div>
            </div>
            <div className="w-[2px] h-10 bg-[#c5a059] hidden sm:block"></div>
            <span className="text-6xl font-light text-[#1b294b] tracking-tighter italic">Elit</span>
          </div>

          <div className="flex gap-10 items-center text-[10px] font-black uppercase tracking-[0.2em]">
            <a href="#borsa" className="hover:text-[#c5a059] transition-all">Piyasalar</a>
            <a href="#kayit" className="border-b-2 border-[#c5a059] pb-1">Hızlı Kayıt</a>
          </div>
        </div>
      </nav>

      {/* HERO SLIDER SECTION */}
      <section className="relative h-[850px] bg-[#0a1428] text-white overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.img})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428] via-[#0a1428]/80 to-transparent"></div>
            
            <div className="relative z-20 h-full flex items-center px-6 md:px-24 max-w-7xl">
              <div className="max-w-4xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[2px] bg-[#c5a059]"></div>
                  <div className="text-[#c5a059] text-[11px] font-black tracking-[0.5em] uppercase">Varlık Yönetimi {index + 1}</div>
                </div>
                <h1 className="text-6xl md:text-9xl font-black mb-10 leading-[0.9] uppercase italic tracking-tighter">
                  {slide.title.split(' ')[0]} <br/>
                  <span className="text-[#c5a059]">{slide.title.split(' ').slice(1).join(' ')}</span>
                </h1>
                <p className="text-gray-300 text-xl max-w-2xl mb-14 font-medium italic leading-relaxed border-l-4 border-[#c5a059] pl-8">
                  {slide.desc}
                </p>
                <div className="flex flex-wrap gap-8 items-center">
                  <a href="#kayit" className="bg-[#c5a059] text-white px-20 py-8 rounded-sm font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-[#1b294b] transition-all shadow-2xl">
                    ÜYELİĞİNİZİ BAŞLATIN
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-12 left-24 z-30 flex gap-4">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`h-1.5 transition-all duration-500 ${i === currentSlide ? 'w-16 bg-[#c5a059]' : 'w-8 bg-white/20'}`}></button>
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <div className="bg-white border-b border-gray-100 py-16 relative z-30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "AKTİF YATIRIMCI", value: "14.800+", icon: <Icons.Users size={20}/> },
            { label: "GÜNLÜK HACİM", value: "$64M+", icon: <Icons.Activity size={20}/> },
            { label: "DESTEK HATTI", value: "7/24", icon: <Icons.Headphones size={20}/> },
            { label: "EMİR HIZI", value: "0.01ms", icon: <Icons.Zap size={20}/> },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left border-r last:border-0 border-gray-100 pr-4 group">
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#c5a059] mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</span>
              </div>
              <div className="text-3xl font-black text-[#1b294b] italic tracking-tighter">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* GÜVEN VE LİSANS */}
      <section id="guven" className="py-32 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-block bg-[#1b294b] text-[#c5a059] px-6 py-2 text-[10px] font-black tracking-[0.3em] uppercase rounded-full">Kurumsal Güvence</div>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-tight text-[#1b294b]">Varlıklarınız <br/><span className="text-[#c5a059]">Devlet Güvencesinde</span></h2>
            <p className="text-gray-500 font-medium italic text-lg leading-relaxed">Elit Menkul Değerler A.Ş., tüm faaliyetlerini **Sermaye Piyasası Kurulu (SPK)** denetimi altında yürütür. Yatırımcı tazmin merkezi ve Takasbank koruması altındasınız.</p>
            <div className="grid grid-cols-2 gap-8 pt-6">
               <div className="flex items-start gap-4">
                 <div className="bg-gray-50 p-4 rounded-xl text-[#c5a059]"><Icons.Lock size={24} /></div>
                 <div>
                   <h5 className="font-black text-xs uppercase tracking-widest mb-1">Takasbank</h5>
                   <p className="text-[10px] text-gray-400 font-bold italic uppercase">Nakit Saklama</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="bg-gray-50 p-4 rounded-xl text-[#c5a059]"><Icons.Database size={24} /></div>
                 <div>
                   <h5 className="font-black text-xs uppercase tracking-widest mb-1">MKK</h5>
                   <p className="text-[10px] text-gray-400 font-bold italic uppercase">Hisse Tescili</p>
                 </div>
               </div>
            </div>
          </div>
          <div className="bg-[#f8f9fa] p-12 md:p-20 rounded-[60px] relative overflow-hidden group border border-gray-100 shadow-inner">
             <Icons.BadgeCheck size={300} className="absolute -right-20 -top-20 opacity-5 group-hover:rotate-12 transition-transform duration-1000" />
             <div className="relative z-10 space-y-8">
                <Icons.Verified className="text-[#c5a059]" size={64} />
                <h3 className="text-3xl font-black uppercase italic text-[#1b294b]">Geniş Yetkili Aracı Kurum Lisansı</h3>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em] leading-loose">Lisans No: G-044 (345) <br/>Regülatör: Sermaye Piyasası Kurulu</p>
             </div>
          </div>
        </div>
      </section>

      {/* GLOBAL BORSA SAATLERİ */}
      <section id="borsa" className="py-24 bg-gray-50 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-12">
             <Icons.Globe className="text-[#c5a059]" size={24} />
             <h2 className="text-2xl font-black uppercase italic tracking-widest text-[#1b294b]">Global İşlem Terminali</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { city: "BIST (İSTANBUL)", hours: "10:00 - 18:00", status: "AÇIK", color: "text-green-500" },
              { city: "NYSE (NEW YORK)", hours: "17:30 - 00:00", status: "KAPALI", color: "text-red-500" },
              { city: "LSE (LONDRA)", hours: "11:00 - 19:30", status: "AÇIK", color: "text-green-500" },
              { city: "TSE (TOKYO)", hours: "03:00 - 09:00", status: "KAPALI", color: "text-red-500" }
            ].map((market, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#c5a059]/50 transition-all">
                <div className="text-[10px] font-black text-gray-400 tracking-[0.3em] mb-2">{market.city}</div>
                <div className="text-lg font-black italic text-[#1b294b]">{market.hours}</div>
                <div className={`text-[10px] font-bold uppercase mt-4 flex items-center gap-2 ${market.color}`}>
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span> {market.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EKSİKSİZ METATRADER 5 TERMİNAL BÖLÜMÜ */}
      <section id="platform" className="py-40 px-6 bg-[#030712] text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#c5a059]/10 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[180px] rounded-full"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          
          {/* MT5 Terminal & LOGO Visualisation */}
          <div className="relative group">
            {/* Arka plan logosu */}
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-[#c5a059]/20 rounded-full blur-3xl"></div>
            
            <div className="bg-[#111827] p-3 rounded-[40px] border border-white/10 shadow-[0_0_100px_rgba(197,160,89,0.1)] transition-transform duration-700 group-hover:scale-[1.02]">
               <div className="bg-[#030712] rounded-[32px] overflow-hidden border border-white/5 relative aspect-video">
                  {/* Mockup Terminal Top Bar */}
                  <div className="bg-[#1f2937] px-5 py-3 flex justify-between items-center border-b border-white/5">
                    <div className="flex gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                    </div>
                    {/* LOGO EKLEMESİ */}
                    <div className="flex items-center gap-2">
                       <div className="w-5 h-5 bg-[#c5a059] rounded-full flex items-center justify-center text-[10px] font-black text-black">5</div>
                       <span className="text-[10px] font-black text-gray-400 tracking-widest uppercase">MetaTrader 5 Elit</span>
                    </div>
                  </div>
                  {/* Terminal İçerik Mockup */}
                  <div className="p-8 flex flex-col h-full justify-between">
                    <div className="space-y-6">
                       <div className="flex justify-between items-end border-b border-white/5 pb-6">
                         <div>
                           <div className="text-[10px] text-gray-500 font-black uppercase mb-1">XAUUSD - GOLD / PRO ACCOUNT</div>
                           <div className="text-5xl font-black italic text-[#c5a059]">2,145.82 <span className="text-sm text-green-500 ml-2">▲ +0.84%</span></div>
                         </div>
                         <Icons.BarChart size={54} className="text-[#c5a059] opacity-50" />
                       </div>
                    </div>
                    {/* Grafik Çubukları */}
                    <div className="flex items-end gap-2 h-24">
                       {[30, 50, 40, 80, 60, 95, 70, 85, 55, 75].map((h, i) => (
                         <div key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-t-sm transition-all duration-1000 ${i % 2 === 0 ? 'bg-[#c5a059]/40' : 'bg-[#c5a059]'} animate-pulse`} />
                       ))}
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Yüzen Rozet */}
            <div className="absolute -bottom-8 -right-8 bg-[#c5a059] text-white p-8 rounded-3xl shadow-2xl animate-bounce-slow">
               <Icons.Zap size={32} className="mb-2" />
               <div className="text-[9px] font-black uppercase opacity-80">Emir Hızı</div>
               <div className="text-3xl font-black italic">0.01ms</div>
            </div>
          </div>

          {/* MT5 İçerik ve İndirme */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 border border-[#c5a059]/40 px-6 py-2.5 rounded-full bg-[#c5a059]/5">
                <Icons.Activity size={16} className="text-[#c5a059]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#c5a059]">Profesyonel İşlem Terminali</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black uppercase italic leading-[0.8] tracking-tighter">
                MetaTrader <span className="text-[#c5a059]">5</span>
              </h2>
              <p className="text-gray-400 text-lg font-medium italic leading-relaxed border-l-4 border-[#c5a059] pl-8">
                Dünyanın en güçlü işlem platformu şimdi Elit Menkul hızıyla birleşti. Gelişmiş indikatörler, sınırsız robotik işlem desteği (EA) ve tek tıkla emir iletimi.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10">
               <div className="space-y-3">
                 <Icons.ShieldCheck className="text-[#c5a059]" size={28} />
                 <h5 className="font-black text-xs uppercase tracking-widest">Yüksek Güvenlik</h5>
                 <p className="text-[10px] text-gray-500 uppercase font-bold italic">128-bit şifrelenmiş veri iletimi.</p>
               </div>
               <div className="space-y-3">
                 <Icons.MousePointer2 className="text-[#c5a059]" size={28} />
                 <h5 className="font-black text-xs uppercase tracking-widest">Anlık İletim</h5>
                 <p className="text-[10px] text-gray-500 uppercase font-bold italic">Sıfır hata ile borsa emirleri.</p>
               </div>
            </div>

            {/* AKTİF İNDİRME ALANI */}
            <div className="pt-8 flex flex-wrap gap-5">
              <a href={MT5_WINDOWS} target="_blank" rel="noopener" className="bg-white text-black px-10 py-6 rounded-2xl flex items-center gap-5 hover:bg-[#c5a059] hover:text-white transition-all shadow-xl group">
                <Icons.Monitor size={28} />
                <div className="text-left">
                  <div className="text-[9px] font-black opacity-50 uppercase leading-none">Windows</div>
                  <div className="text-sm font-black uppercase">Setup .EXE</div>
                </div>
              </a>
              <a href={MT5_IOS} target="_blank" rel="noopener" className="bg-white/5 border border-white/10 px-10 py-6 rounded-2xl flex items-center gap-5 hover:bg-white hover:text-black transition-all group">
                <Icons.Apple size={28} />
                <div className="text-left">
                  <div className="text-[9px] font-black opacity-50 uppercase leading-none">App Store</div>
                  <div className="text-sm font-black uppercase">iOS Yükle</div>
                </div>
              </a>
              <a href={MT5_ANDROID} target="_blank" rel="noopener" className="bg-white/5 border border-white/10 px-10 py-6 rounded-2xl flex items-center gap-5 hover:bg-white hover:text-black transition-all group">
                <Icons.PlayCircle size={28} />
                <div className="text-left">
                  <div className="text-[9px] font-black opacity-50 uppercase leading-none">Google Play</div>
                  <div className="text-sm font-black uppercase">Android</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEJİK HİZMETLER */}
      <section id="hizmetler" className="py-40 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="bg-white p-12 rounded-[50px] shadow-sm hover:shadow-2xl transition-all border border-gray-100 group text-center">
               <Icons.ZapOff className="text-[#c5a059] mb-8 mx-auto group-hover:scale-110 transition-transform" size={56} />
               <h3 className="text-2xl font-black uppercase italic mb-6">T+0 Nakit <br/>Esnekliği</h3>
               <p className="text-gray-500 text-sm italic leading-relaxed">Varlıklarınızı sattığınız an nakit gücünüzü kullanın. Bekleme sürelerini ortadan kaldırın.</p>
            </div>
            <div className="bg-white p-12 rounded-[50px] shadow-sm hover:shadow-2xl transition-all border border-gray-100 group text-center">
               <Icons.CircleDollarSign className="text-[#c5a059] mb-8 mx-auto group-hover:scale-110 transition-transform" size={56} />
               <h3 className="text-2xl font-black uppercase italic mb-6">Sıfır <br/>Komisyon</h3>
               <p className="text-gray-500 text-sm italic leading-relaxed">İşlem maliyetlerini sıfıra indirin, kazancınızın tamamı portföyünüzde kalsın.</p>
            </div>
            <div className="bg-white p-12 rounded-[50px] shadow-sm hover:shadow-2xl transition-all border border-gray-100 group text-center">
               <Icons.ArrowDownUp className="text-[#c5a059] mb-8 mx-auto group-hover:scale-110 transition-transform" size={56} />
               <h3 className="text-2xl font-black uppercase italic mb-6">Çift Yönlü <br/>Kâr Planı</h3>
               <p className="text-gray-500 text-sm italic leading-relaxed">Sadece yükselişlerde değil, açığa satış yetkisiyle düşüşlerde de kazanç odaklı kalın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GETİRİ HESAPLAMA */}
      <section id="hesaplama" className="py-32 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-[#1b294b]">Getiri <br/><span className="text-[#c5a059]">Analizi</span></h2>
            <div className="space-y-12 bg-white p-12 rounded-[40px] shadow-inner border border-gray-200">
              <div className="space-y-8">
                <div className="flex justify-between text-[11px] font-black uppercase text-gray-400 tracking-widest">
                  <span>Yatırım Sermayesi</span>
                  <span className="text-[#c5a059] text-3xl font-black">{investment.toLocaleString()} TL</span>
                </div>
                <input 
                  type="range" min="10000" max="1000000" step="10000" value={investment} 
                  onChange={(e) => setInvestment(Number(e.target.value))} 
                  className="w-full h-2.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#c5a059]" 
                />
              </div>
            </div>
          </div>
          <div className="bg-[#1b294b] p-16 rounded-[60px] text-white shadow-2xl relative border-b-8 border-[#c5a059] overflow-hidden">
            <Icons.TrendingUp className="absolute top-10 right-10 opacity-5" size={200} />
            <div className="relative z-10 space-y-10 text-center md:text-left">
              <div className="inline-block bg-[#c5a059] text-white px-6 py-2 text-[10px] font-black tracking-widest uppercase rounded-full">ELİT MODEL PROJEKSİYONU</div>
              <div>
                <h4 className="text-gray-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Tahmini Aylık Kazanç</h4>
                <div className="text-7xl md:text-9xl font-black italic text-[#c5a059] drop-shadow-2xl">
                  {monthlyProfit} <span className="text-3xl text-white/50">TL</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm font-medium italic pt-8 border-t border-white/5 leading-relaxed">
                Bu simülasyon profesyonel yönetim altındaki hesapların geçmiş başarı ortalamaları baz alınarak hazırlanmıştır.
              </p>
              <a href="#kayit" className="block w-full text-center bg-white text-[#1b294b] py-8 font-black uppercase tracking-widest text-sm hover:bg-[#c5a059] hover:text-white transition-all">HEMEN BAŞVURUN</a>
            </div>
          </div>
        </div>
      </section>

      {/* NASIL ÇALIŞIR (PROCESS) */}
      <section className="py-40 px-6 bg-white text-center">
        <h2 className="text-5xl font-black uppercase italic text-[#1b294b] mb-24 tracking-tighter">3 Adımda <span className="text-[#c5a059]">Kazanmaya Başla</span></h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gray-100 -z-10"></div>
          {[
            { step: "01", t: "Üyeliği Başlat", d: "Başvuru formunu doldurun, kıdemli yatırım danışmanınızla stratejinizi belirleyin." },
            { step: "02", t: "Güvenli Fonlama", d: "Sermayenizi Takasbank güvencesindeki kendi isminize tescilli hesabınıza aktarın." },
            { step: "03", t: "Kâr Yönetimi", d: "MetaTrader 5 ve profesyonel algoritmalarımızla kârınızı her gün takip edin." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-14 rounded-[50px] border border-gray-100 shadow-2xl hover:-translate-y-4 transition-all duration-500 group">
               <div className="text-8xl font-black text-gray-50 mb-10 group-hover:text-[#c5a059]/10 transition-colors">{item.step}</div>
               <h4 className="text-2xl font-black uppercase italic mb-6 text-[#1b294b]">{item.t}</h4>
               <p className="text-gray-400 text-sm italic font-medium leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SIKÇA SORULAN SORULAR (FAQ) */}
      <section id="sss" className="py-40 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black uppercase italic text-[#1b294b]">Merak <span className="text-[#c5a059]">Edilenler</span></h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "Varlıklarım hangi kurumda saklanıyor?", a: "Tüm nakit ve menkul kıymetleriniz SPK denetimindeki Takasbank ve Merkezi Kayıt Kuruluşu (MKK) nezdinde, doğrudan kendi isminize açılan hesaplarda saklanır." },
              { q: "Komisyon oranlarınız neden %0?", a: "Operasyonel maliyetlerimizi teknoloji ile optimize ediyoruz. Bu teknolojik avantajı yatırımcılarımıza sıfır komisyon olarak yansıtarak global standartlarda hizmet veriyoruz." },
              { q: "MetaTrader 5 kullanımı ücretli mi?", a: "Hayır, Elit Menkul bünyesinde aktif yatırım yapan tüm müşterilerimiz MT5 terminalini ve tüm teknik analiz araçlarını tamamen ücretsiz olarak kullanabilir." },
              { q: "Minimum yatırım tutarı nedir?", a: "Hizmet kalitesini ve profesyonel portföy yönetim standartlarını korumak adına önerilen başlangıç sermayesi 50.000 TL'dir." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-[32px] border border-gray-200 p-8 cursor-pointer transition-all hover:border-[#c5a059]/50 shadow-sm">
                <summary className="flex justify-between items-center font-black uppercase italic text-sm tracking-widest text-[#1b294b]">
                  {faq.q} <Icons.Plus size={20} className="group-open:rotate-45 transition-transform text-[#c5a059]" />
                </summary>
                <div className="mt-8 text-gray-500 text-base italic border-t border-gray-50 pt-8 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* KAYIT FORMU */}
      <section id="kayit" className="py-40 px-6 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          {!isSubmitted ? (
            <div className="bg-white p-12 md:p-24 rounded-[70px] shadow-[0_60px_150px_rgba(0,0,0,0.08)] border border-gray-100 relative z-10">
              <div className="text-center mb-20 space-y-4">
                <h2 className="text-5xl font-black uppercase italic tracking-tighter text-[#1b294b]">Üyelik Başvurusu</h2>
                <div className="w-20 h-1.5 bg-[#c5a059] mx-auto"></div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.4em] pt-4">Finansal Elitlerin Arasına Katılın</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-6">Adınız Soyadınız</label>
                    <input name="isim_soyisim" required className="w-full bg-gray-50 p-7 rounded-3xl text-sm font-bold focus:ring-2 focus:ring-[#c5a059] border-none transition-all" placeholder="Örn: Ahmet Yılmaz" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-6">Telefon Numarası</label>
                    <input name="telefon" type="tel" required className="w-full bg-gray-50 p-7 rounded-3xl text-sm font-bold focus:ring-2 focus:ring-[#c5a059] border-none transition-all" placeholder="05xx xxx xx xx" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-6">E-Posta Adresi</label>
                    <input name="email" type="email" required className="w-full bg-gray-50 p-7 rounded-3xl text-sm font-bold focus:ring-2 focus:ring-[#c5a059] border-none transition-all" placeholder="örnek@mail.com" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-6">Referans Kodu</label>
                    <input name="referans" className="w-full bg-gray-50 p-7 rounded-3xl text-sm font-bold focus:ring-2 focus:ring-[#c5a059] border-none transition-all" placeholder="Varsa Referans No" />
                  </div>
                </div>
                <button 
                  disabled={loading} 
                  className="w-full bg-[#1b294b] text-white py-9 rounded-[30px] font-black uppercase tracking-[0.5em] text-sm hover:bg-[#c5a059] transition-all flex justify-center items-center gap-6 shadow-2xl group"
                >
                  {loading ? "İŞLENİYOR..." : "ÜYELİĞİ BAŞLAT"} <Icons.ArrowRight className="group-hover:translate-x-3 transition-transform" />
                </button>
                <p className="text-[9px] text-gray-400 font-bold uppercase text-center tracking-widest leading-loose">
                  * Başvuru yaparak yasal aydınlatma metnini ve verilerinizin işlenmesini kabul etmiş olursunuz.
                </p>
              </form>
            </div>
          ) : (
            <div className="bg-[#1b294b] p-24 rounded-[70px] text-center animate-in zoom-in duration-1000 shadow-2xl border-b-8 border-[#c5a059]">
              <div className="w-24 h-24 bg-[#c5a059] rounded-full flex items-center justify-center mx-auto mb-12 shadow-[0_0_60px_rgba(197,160,89,0.5)]">
                 <Icons.ShieldCheck size={56} className="text-white" />
              </div>
              <h2 className="text-6xl font-black uppercase italic text-white mb-8">Başvuru Alındı</h2>
              <div className="w-24 h-2 bg-[#c5a059] mx-auto mb-10"></div>
              <p className="text-gray-300 text-xl font-medium italic mb-16 leading-relaxed max-w-2xl mx-auto">
                Profiliniz <span className="text-[#c5a059] font-black underline underline-offset-8">"ONAY BEKLIYOR"</span> statüsüne alındı. Kıdemli danışmanlarımız 24 saat içinde sizi arayacaktır.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <a href={WHATSAPP_URL} target="_blank" className="bg-[#25d366] text-white px-14 py-6 rounded-full text-xs font-black uppercase tracking-[0.3em] hover:scale-110 transition-all shadow-xl">VIP ONAY HATTI</a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="iletisim" className="bg-[#0a1428] text-white py-40 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24 relative z-10">
          <div className="space-y-12">
            <div className="text-5xl font-light italic">Elit <span className="text-[#c5a059] font-black">Menkul</span></div>
            <p className="text-gray-500 text-sm leading-relaxed italic font-medium">Türkiye'nin teknoloji odaklı portföy yönetimi ve aracılık kuruluşu. 20 yıllık güven, elit standartlar.</p>
            <div className="flex gap-6">
               <div className="bg-white/5 p-4 rounded-xl hover:bg-[#c5a059] transition-colors cursor-pointer"><Icons.Instagram size={20} /></div>
               <div className="bg-white/5 p-4 rounded-xl hover:bg-[#c5a059] transition-colors cursor-pointer"><Icons.Twitter size={20} /></div>
               <div className="bg-white/5 p-4 rounded-xl hover:bg-[#c5a059] transition-colors cursor-pointer"><Icons.Linkedin size={20} /></div>
            </div>
          </div>
          <div className="space-y-12">
            <h5 className="font-black uppercase text-[11px] tracking-[0.5em] text-[#c5a059]">İletişim Merkezi</h5>
            <div className="space-y-8">
              <a href={`tel:${TELEFON}`} className="block text-4xl font-black italic hover:text-[#c5a059] transition-colors">{TELEFON}</a>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.2em] leading-loose">
                Büyükdere Cad. No:127 Kat:8 Levent / İSTANBUL<br/>
                info@elitmenkultr.com
              </p>
            </div>
          </div>
          <div className="space-y-12">
             <h5 className="font-black uppercase text-[11px] tracking-[0.5em] text-[#c5a059]">Yasal Denetim</h5>
             <p className="text-[10px] text-gray-600 font-bold uppercase leading-relaxed tracking-tighter">
               UYARI: Yatırım yapmak risk içerir. Geçmiş getiriler gelecek sonuçların garantisi değildir. Elit Menkul A.Ş. SPK tarafından yetkilendirilmiş bir kuruluştur.
             </p>
             <div className="pt-10 border-t border-white/5">
                <p className="text-[10px] text-gray-500 font-black tracking-[0.8em] uppercase">© 2026 ELİT MENKUL A.Ş.</p>
             </div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href={WHATSAPP_URL} target="_blank" className="fixed bottom-12 right-12 z-[2000] bg-[#25d366] text-white p-7 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group">
        <Icons.MessageCircle size={36} />
        <div className="absolute right-full mr-8 bg-[#0a1428] text-white py-3 px-8 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100 whitespace-nowrap border border-white/10">VIP ONAY HATTI</div>
      </a>
    </div>
  );
}