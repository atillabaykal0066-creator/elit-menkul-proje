"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as Icons from 'lucide-react';

/** * 1. TRADINGVIEW WIDGET BİLEŞENLERİ
 * Hydration hatalarını önlemek için useEffect içinde yüklenir.
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
          { "proName": "BITSTAMP:BTCUSD", "title": "BITCOIN" }
        ],
        "showSymbolLogo": true, "colorTheme": "dark", "isTransparent": false, "displayMode": "adaptive", "locale": "tr"
      });
      container.current.appendChild(script);
    }
  }, []);
  return <div ref={container} className="tradingview-widget-container" />;
};

const EconomicCalendarWidget = () => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (container.current && !container.current.querySelector('script')) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
      script.type = "text/javascript"; script.async = true;
      script.innerHTML = JSON.stringify({
        "colorTheme": "light", "isTransparent": false, "width": "100%", "height": "500", "locale": "tr", "importanceFilter": "-1,0,1", "currencyFilter": "USD,EUR,TRY,GBP"
      });
      container.current.appendChild(script);
    }
  }, []);
  return <div ref={container} className="tradingview-widget-container" />;
};

/**
 * 2. ANA SAYFA BİLEŞENİ
 */
export default function ElitMenkulMasterTerminal() {
  const [investment, setInvestment] = useState(50000);
  const [term, setTerm] = useState(12);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const WHATSAPP_URL = "https://wa.me/905391046011"; 
  const REGISTER_URL = "https://sube.elitmenkulonline.com/register";
  const TELEFON = "+90 539 104 60 11";

  // Tahmini kazanç hesaplama (Örn: Yıllık ortalama %45 Elit Strateji Getirisi)
  const estimatedProfit = (investment * (0.45 / 12) * term).toLocaleString('tr-TR', { maximumFractionDigits: 0 });

  return (
    <div className="min-h-screen bg-white text-[#1b294b] font-sans selection:bg-[#c5a059] selection:text-white">
      
      {/* ÜST BİLGİ VE CANLI VERİ PANELİ */}
      <header className="fixed top-0 w-full z-[1000] shadow-2xl">
        <TradingViewTicker />
        <div className="bg-[#1b294b] py-2 px-6 md:px-12 flex justify-between items-center border-t border-white/5">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-black text-[#c5a059] tracking-widest uppercase">
              <Icons.Activity size={14} className="animate-pulse" /> SİSTEM DURUMU: <span className="text-green-500">OPTİMAL</span>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-[10px] font-bold text-gray-400 tracking-widest uppercase">
              <Icons.ShieldCheck size={14} className="text-[#c5a059]" /> LİSANS: GENİŞ YETKİLİ ARACI KURUM
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
            <a href="#analiz" className="hover:text-[#c5a059] transition-all text-[#00bcd4]">Ekonomik Takvim</a>
            <a href="#iletisim" className="border-b-2 border-[#c5a059] pb-1">İletişim</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-[850px] flex items-center px-6 md:px-24 bg-[#0a1428] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974717482-4800b1ee2e24?q=80&w=2070')] bg-cover bg-fixed opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428] via-[#0a1428]/95 to-transparent z-10"></div>
        
        <div className="relative z-20 max-w-7xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-[2px] bg-[#c5a059]"></div>
            <div className="text-[#c5a059] text-[11px] font-black tracking-[0.5em] uppercase">20 Yıllık Finansal Mimari</div>
          </div>
          <h1 className="text-7xl md:text-[160px] font-black mb-10 leading-[0.75] uppercase italic tracking-tighter">
            Yatırımda <br/><span className="text-[#c5a059]">Elit</span> <br/>Standartlar
          </h1>
          <p className="text-gray-400 text-2xl max-w-3xl mb-14 font-medium italic leading-relaxed border-l-8 border-[#c5a059] pl-10">
            Beklemeye son! T+0 likidite hızı, sıfır komisyon avantajı ve piyasa düşerken kazandıran çift yönlü işlem modelleriyle sermayenizi yönetin.
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            <a href={REGISTER_URL} target="_blank" className="bg-[#c5a059] text-white px-20 py-8 rounded-sm font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-[#1b294b] transition-all shadow-2xl">
              HEMEN KAYIT OLUN
            </a>
          </div>
        </div>
      </section>

      {/* DÜNYA BORSA SAATLERİ (Yeni Panel) */}
      <section className="py-20 bg-gray-50 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
             <Icons.Globe className="text-[#c5a059]" size={24} />
             <h2 className="text-2xl font-black uppercase italic tracking-widest">Dünya Borsa Saatleri</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { city: "İSTANBUL", hours: "10:00 - 18:00", status: "AÇIK", color: "text-green-500" },
              { city: "NEW YORK", hours: "17:30 - 00:00", status: "KAPALI", color: "text-red-500" },
              { city: "LONDRA", hours: "11:00 - 19:30", status: "AÇIK", color: "text-green-500" },
              { city: "TOKYO", hours: "03:00 - 09:00", status: "KAPALI", color: "text-red-500" }
            ].map((market, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-[10px] font-black text-gray-400 tracking-[0.3em] mb-2">{market.city}</div>
                <div className="text-lg font-black italic text-[#1b294b]">{market.hours}</div>
                <div className={`text-[10px] font-bold uppercase mt-4 flex items-center gap-2 ${market.color}`}>
                  <span className={`w-2 h-2 rounded-full bg-current animate-pulse`}></span> {market.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YATIRIM HESAPLAMA ARACI (Slider) */}
      <section className="py-32 px-6 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-tight text-[#1b294b]">
              Potansiyelini <br/><span className="text-[#c5a059]">Keşfet</span>
            </h2>
            <p className="text-gray-500 font-medium italic text-lg leading-relaxed">
              Elit Menkul'ün profesyonel portföy stratejileriyle sermayenizin zaman içindeki gelişimini simüle edin. Doğru hamle, doğru zamanlama.
            </p>
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest text-gray-400">
                  <span>Başlangıç Sermayesi</span>
                  <span className="text-[#c5a059]">{investment.toLocaleString()} TL</span>
                </div>
                <input type="range" min="10000" max="1000000" step="10000" value={investment} onChange={(e) => setInvestment(Number(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#c5a059]" />
              </div>
              <div className="space-y-6">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest text-gray-400">
                  <span>Yatırım Süresi (Ay)</span>
                  <span className="text-[#c5a059]">{term} Ay</span>
                </div>
                <input type="range" min="1" max="36" value={term} onChange={(e) => setTerm(Number(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#1b294b]" />
              </div>
            </div>
          </div>
          <div className="bg-[#1b294b] p-16 rounded-[40px] text-white shadow-2xl relative">
            <div className="absolute top-0 right-0 p-10 opacity-10"><Icons.TrendingUp size={120} /></div>
            <div className="relative z-10 space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#c5a059]">Tahmini Elit Getiri</h4>
              <div className="text-7xl font-black italic leading-none">+{estimatedProfit} <span className="text-2xl text-gray-400">TL</span></div>
              <p className="text-gray-400 text-sm font-medium italic border-l-2 border-[#c5a059] pl-6">
                Bu hesaplama, geçmiş dönem Elit Model Portföy verileri baz alınarak ortalama %45 yıllık getiri varsayımıyla yapılmıştır. Kesin kâr taahhüdü değildir.
              </p>
              <a href={REGISTER_URL} target="_blank" className="block w-full text-center bg-[#c5a059] py-6 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-[#1b294b] transition-all">BU STRATEJİYE KATILIN</a>
            </div>
          </div>
        </div>
      </section>

      {/* EKONOMİK TAKVİM BÖLÜMÜ */}
      <section id="analiz" className="py-32 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black uppercase italic tracking-tighter text-[#1b294b] mb-4">Ekonomik <span className="text-[#c5a059]">Takvim</span></h2>
              <p className="text-gray-500 font-medium italic">Dünya piyasalarına yön veren tüm makroekonomik veriler anlık olarak terminalinizde.</p>
            </div>
            <div className="text-[100px] font-black text-gray-200 opacity-20 leading-none select-none">CALENDAR</div>
          </div>
          <div className="bg-white p-2 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
             <EconomicCalendarWidget />
          </div>
        </div>
      </section>

      {/* 3 ALTIN KURAL - DETAYLI ANLATIM */}
      <section id="strateji" className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="group space-y-8">
            <div className="w-20 h-20 bg-gray-50 flex items-center justify-center rounded-3xl group-hover:bg-[#1b294b] transition-all">
              <Icons.ZapOff className="text-[#c5a059] group-hover:text-white" size={40} />
            </div>
            <h3 className="text-3xl font-black uppercase italic leading-none">T+2 Bekleme <br/>Süresi Yok</h3>
            <p className="text-gray-500 italic text-sm leading-relaxed">Nakit gücünüzü saniyeler içinde yönetin. Satış yaptığınız an tutar hesabınızda, yeni fırsatlar için hazır.</p>
          </div>
          <div className="group space-y-8">
            <div className="w-20 h-20 bg-gray-50 flex items-center justify-center rounded-3xl group-hover:bg-[#c5a059] transition-all">
              <Icons.CircleDollarSign className="text-[#1b294b] group-hover:text-white" size={40} />
            </div>
            <h3 className="text-3xl font-black uppercase italic leading-none">Sıfır Komisyon <br/>Fırsatı</h3>
            <p className="text-gray-500 italic text-sm leading-relaxed">Maliyetlerinizi sıfırlayın. Elde ettiğiniz kârın tamamı portföyünüzde kalsın, biz büyümenize aracılık edelim.</p>
          </div>
          <div className="group space-y-8">
            <div className="w-20 h-20 bg-gray-50 flex items-center justify-center rounded-3xl group-hover:bg-[#1b294b] transition-all">
              <Icons.ArrowDownUp className="text-[#c5a059] group-hover:text-white" size={40} />
            </div>
            <h3 className="text-3xl font-black uppercase italic leading-none">Çift Yönlü <br/>İşlem Gücü</h3>
            <p className="text-gray-500 italic text-sm leading-relaxed">Piyasa düşerken de kazanın. Açığa satış ve kaldıraçlı işlem yetkileriyle 360 derece yatırım stratejisi.</p>
          </div>
        </div>
      </section>

      {/* KURUMSAL VE GÜVENLİK */}
      <section className="py-32 px-6 bg-[#fcfcfc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-[#1b294b]">Takasbank <br/><span className="text-[#c5a059]">Güvencesi</span></h2>
            <p className="text-gray-600 font-medium italic text-lg leading-relaxed">
              Elit Menkul Değerler A.Ş., SPK tarafından denetlenen 20 yıllık bir kurumdur. Tüm varlıklarınız yatırımcının kendi adına açılmış hesaplarda, Takasbank nezdinde saklanır.
            </p>
            <div className="flex gap-10">
               <div className="text-center">
                 <div className="text-4xl font-black">20+</div>
                 <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Tecrübe</div>
               </div>
               <div className="text-center">
                 <div className="text-4xl font-black">100%</div>
                 <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Şeffaflık</div>
               </div>
            </div>
          </div>
          <div className="bg-[#1b294b] p-16 rounded-[40px] text-white shadow-2xl">
            <Icons.ShieldCheck className="text-[#c5a059] mb-8" size={64} />
            <h4 className="text-3xl font-black uppercase italic mb-6">Sermayeniz <br/>Lisanslı Ellerde</h4>
            <p className="text-gray-400 text-sm font-medium italic leading-relaxed">
              SPK denetimleri, şeffaf raporlama ve global siber güvenlik standartları ile yatırımlarınız her saniye koruma altındadır.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="iletisim" className="bg-[#0a1428] text-white py-40 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24">
          <div className="space-y-10">
            <div className="text-5xl font-light italic">Elit <span className="text-[#c5a059] font-black">Menkul</span></div>
            <p className="text-gray-500 text-sm leading-relaxed font-medium italic">
              Türkiye'nin en hızlı büyüyen teknoloji odaklı aracı kurumu. Geleceğin finansal standartlarını bugünden inşa ediyoruz.
            </p>
          </div>
          <div className="space-y-10">
            <h5 className="font-black uppercase text-[10px] tracking-[0.5em] text-[#c5a059]">İletişim</h5>
            <div className="space-y-6">
              <a href={`tel:${TELEFON}`} className="flex items-center gap-4 text-2xl font-black italic hover:text-[#c5a059] transition">{TELEFON}</a>
              <p className="text-gray-500 font-medium italic">info@elitmenkultr.com</p>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Levent, Büyükdere Cad. No:127, İstanbul</p>
            </div>
          </div>
          <div className="space-y-10">
             <h5 className="font-black uppercase text-[10px] tracking-[0.5em] text-[#c5a059]">Yasal</h5>
             <p className="text-[9px] text-gray-600 font-black uppercase leading-relaxed tracking-tighter">
               UYARI: Yatırım yapmak risk içerir. Geçmiş performans gelecek sonuçların garantisi değildir. Lütfen risk bildirimlerini okuyunuz.
             </p>
             <p className="text-[9px] text-gray-500 font-black tracking-[0.6em] uppercase">© 2026 ELİT MENKUL DEĞERLER A.Ş.</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href={WHATSAPP_URL} target="_blank" className="fixed bottom-10 right-10 z-[2000] bg-[#25d366] text-white p-6 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group">
        <Icons.MessageCircle size={32} />
        <span className="absolute right-full mr-6 bg-[#0a1428] text-white py-2 px-6 rounded-md text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Danışmana Sorun</span>
      </a>
    </div>
  );
}