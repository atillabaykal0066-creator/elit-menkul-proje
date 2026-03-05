"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as Icons from 'lucide-react';

/**
 * 1. TRADINGVIEW CANLI VERİ BANDI
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

export default function ElitMenkulFullCode() {
  const [investment, setInvestment] = useState(50000);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const WHATSAPP_URL = "https://wa.me/905391046011"; 
  const REGISTER_URL = "https://sube.elitmenkulonline.com/register";
  const TELEFON = "+90 539 104 60 11";

  // Kazanç hesaplama: 50.000 TL'ye ~15.000 TL (Aylık %30 baz alınmıştır)
  const monthlyProfit = (investment * 0.30).toLocaleString('tr-TR', { maximumFractionDigits: 0 });

  return (
    <div className="min-h-screen bg-white text-[#1b294b] font-sans selection:bg-[#c5a059] selection:text-white">
      
      {/* ÜST PANEL & TICKER */}
      <header className="fixed top-0 w-full z-[1000] shadow-2xl">
        <TradingViewTicker />
        <div className="bg-[#1b294b] py-2.5 px-6 md:px-12 flex justify-between items-center border-t border-white/5">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-black text-[#c5a059] tracking-widest uppercase">
              <Icons.Activity size={14} className="animate-pulse" /> SİSTEM: <span className="text-green-500">ONLINE</span>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-[10px] font-bold text-gray-400 tracking-widest uppercase">
              <Icons.ShieldCheck size={14} className="text-[#c5a059]" /> SPK GENİŞ YETKİLİ ARACI KURUM
            </div>
          </div>
          <div className="flex gap-4">
             <a href={REGISTER_URL} target="_blank" className="bg-[#c5a059] text-white px-8 py-2 rounded-sm text-[10px] font-black tracking-widest hover:bg-white hover:text-[#1b294b] transition-all uppercase">E-ŞUBE GİRİŞ</a>
          </div>
        </div>
      </header>

      {/* PROFESYONEL NAVİGASYON */}
      <nav className="bg-white/95 backdrop-blur-md pt-[115px] pb-8 px-6 md:px-12 border-b border-gray-100 relative z-[900]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex gap-10 items-center text-[11px] font-black uppercase tracking-[0.2em]">
            <a href="#strateji" className="hover:text-[#c5a059] transition-all">Strateji</a>
            <a href="#piyasalar" className="hover:text-[#c5a059] transition-all">Piyasalar</a>
          </div>

          <div className="flex items-center gap-4 scale-90 md:scale-100">
            <div className="text-right hidden sm:block">
               <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Elit Menkul</div>
               <div className="text-[12px] font-black text-[#1b294b] uppercase tracking-[0.1em]">Değerler A.Ş.</div>
            </div>
            <div className="w-[2px] h-10 bg-[#c5a059] hidden sm:block"></div>
            <span className="text-6xl font-light text-[#1b294b] tracking-tighter italic">Elit</span>
          </div>

          <div className="flex gap-10 items-center text-[11px] font-black uppercase tracking-[0.2em]">
            <a href="#hesaplama" className="hover:text-[#c5a059] transition-all text-[#00bcd4]">Kazanç Analizi</a>
            <a href="#iletisim" className="border-b-2 border-[#c5a059] pb-1">İletişim</a>
          </div>
        </div>
      </nav>

      {/* PROFESYONELLEŞTİRİLMİŞ HERO SECTION */}
      <section className="relative h-[750px] flex items-center px-6 md:px-24 bg-[#0a1428] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428] via-[#0a1428]/95 to-transparent z-10"></div>
        
        <div className="relative z-20 max-w-7xl">
          <div className="flex items-center gap-4 mb-8 animate-in fade-in duration-1000">
            <div className="w-12 h-[2px] bg-[#c5a059]"></div>
            <div className="text-[#c5a059] text-[11px] font-black tracking-[0.5em] uppercase">Sermaye Yönetiminde Global Vizyon</div>
          </div>
          {/* Yazı Boyutu Küçültüldü ve Profesyonelleştirildi */}
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-tight uppercase italic tracking-tighter">
            Yatırımda <br/><span className="text-[#c5a059] text-6xl md:text-9xl">Elit Standartlar</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mb-14 font-medium italic leading-relaxed border-l-4 border-[#c5a059] pl-8">
            Beklemeye son! T+0 likidite hızı, sıfır komisyon avantajı ve piyasa düşerken kazandıran çift yönlü işlem modelleriyle portföyünüzü elit seviyeye taşıyın.
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            <a href={REGISTER_URL} target="_blank" className="bg-[#c5a059] text-white px-16 py-6 rounded-sm font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-[#1b294b] transition-all shadow-2xl">
              PORTFÖYÜNÜZÜ OLUŞTURUN
            </a>
          </div>
        </div>
      </section>

      {/* DÜNYA BORSA SAATLERİ PANELİ */}
      <section className="py-20 bg-gray-50 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
             <Icons.Globe className="text-[#c5a059]" size={24} />
             <h2 className="text-2xl font-black uppercase italic tracking-widest text-[#1b294b]">Global İşlem Saatleri</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { city: "BIST (İSTANBUL)", hours: "10:00 - 18:00", status: "AÇIK", color: "text-green-500" },
              { city: "NYSE (NEW YORK)", hours: "17:30 - 00:00", status: "KAPALI", color: "text-red-500" },
              { city: "LSE (LONDRA)", hours: "11:00 - 19:30", status: "AÇIK", color: "text-green-500" },
              { city: "TSE (TOKYO)", hours: "03:00 - 09:00", status: "KAPALI", color: "text-red-500" }
            ].map((market, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group hover:border-[#c5a059]/50 transition-all">
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

      {/* VURGULANMIŞ YATIRIM HESAPLAMA ARACI */}
      <section id="hesaplama" className="py-32 px-6 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-tight text-[#1b294b]">
              Stratejik <br/><span className="text-[#c5a059]">Getiri Analizi</span>
            </h2>
            <p className="text-gray-500 font-medium italic text-lg leading-relaxed">
              Elit Menkul'ün yüksek frekanslı işlem stratejileriyle sermayenizin potansiyelini görün. Profesyonel yönetim, maksimum verim.
            </p>
            <div className="space-y-12 bg-gray-50 p-10 rounded-[30px]">
              <div className="space-y-6">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest text-gray-400">
                  <span>Yatırım Sermayesi</span>
                  <span className="text-[#c5a059] text-xl">{investment.toLocaleString()} TL</span>
                </div>
                <input 
                  type="range" 
                  min="10000" 
                  max="1000000" 
                  step="10000" 
                  value={investment} 
                  onChange={(e) => setInvestment(Number(e.target.value))} 
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#c5a059]" 
                />
              </div>
              <div className="flex items-center gap-4 text-gray-400 italic text-sm">
                <Icons.Info size={16} className="text-[#c5a059]" />
                Sermaye miktarını kaydırarak aylık potansiyeli görün.
              </div>
            </div>
          </div>

          {/* VURGULANAN KAZANÇ KARTI */}
          <div className="bg-[#1b294b] p-16 rounded-[40px] text-white shadow-[0_30px_100px_rgba(27,41,75,0.3)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
              <Icons.TrendingUp size={180} />
            </div>
            <div className="relative z-10 space-y-10">
              <div className="inline-block bg-[#c5a059] text-white px-4 py-1 text-[10px] font-black tracking-widest uppercase rounded-full">
                ELİT MODEL GETİRİSİ
              </div>
              <div className="space-y-2">
                <h4 className="text-gray-400 text-xs font-bold uppercase tracking-[0.4em]">Tahmini Aylık Kazanç</h4>
                <div className="text-7xl md:text-8xl font-black italic leading-none text-[#c5a059] drop-shadow-2xl">
                  {monthlyProfit} <span className="text-3xl text-white/50">TL</span>
                </div>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-gray-300 text-sm font-medium italic leading-relaxed">
                  <span className="text-white font-black underline decoration-[#c5a059] underline-offset-4">50.000 TL</span> sermaye ile <span className="text-white font-black">aylık 15.000 TL</span> civarı getiri, Elit Menkul'ün çift yönlü işlem ve sıfır komisyon stratejileriyle hedeflenebilir bir standarttır.
                </p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" className="block w-full text-center bg-white text-[#1b294b] py-6 font-black uppercase tracking-widest text-sm hover:bg-[#c5a059] hover:text-white transition-all">
                BU STRATEJİYİ BAŞLATIN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 TEMEL AVANTAJ */}
      <section id="strateji" className="py-40 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-xl transition-all">
            <Icons.ZapOff className="text-[#c5a059] mb-8" size={48} />
            <h3 className="text-3xl font-black uppercase italic leading-none mb-6">T+2 Takas <br/>Engeli Yok</h3>
            <p className="text-gray-500 italic text-sm leading-relaxed">Sermayeniz hapsolmasın. Satış yaptığınız an nakit gücünüzü kullanın, piyasadaki yeni fırsatları saniyeler içinde yakalayın.</p>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-xl transition-all">
            <Icons.CircleDollarSign className="text-[#c5a059] mb-8" size={48} />
            <h3 className="text-3xl font-black uppercase italic leading-none mb-6">Sıfır <br/>Komisyon</h3>
            <p className="text-gray-500 italic text-sm leading-relaxed">Hacim kısıtlaması olmadan, elde ettiğiniz kârın tamamı sizin kalsın. Komisyon maliyetlerini sıfıra indirerek net kazancınızı maksimize edin.</p>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-xl transition-all">
            <Icons.ArrowDownUp className="text-[#c5a059] mb-8" size={48} />
            <h3 className="text-3xl font-black uppercase italic leading-none mb-6">Çift Yönlü <br/>İşlem Modeli</h3>
            <p className="text-gray-500 italic text-sm leading-relaxed">Piyasa düşerken de kazanma özgürlüğü. Açığa satış ve kaldıraçlı işlem yetkileriyle her koşulda portföyünüzü koruyun ve büyütün.</p>
          </div>
        </div>
      </section>

      {/* KURUMSAL GÜVENLİK */}
      <section className="py-32 px-6 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-[#1b294b]">Takasbank <br/><span className="text-[#c5a059]">Güvencesi</span></h2>
            <p className="text-gray-600 font-medium italic text-lg leading-relaxed">
              Elit Menkul Değerler A.Ş., SPK tarafından denetlenen 20 yıllık köklü bir kuruluştur. Tüm yatırımcı varlıkları, devlet nezdindeki Takasbank ve MKK bünyesinde, yatırımcının kendi adına açılmış hesaplarda saklanır.
            </p>
            <div className="flex gap-12">
               <div className="text-center">
                 <div className="text-5xl font-black text-[#1b294b]">20+</div>
                 <div className="text-[10px] font-bold text-[#c5a059] uppercase tracking-widest mt-2">Yıllık Tecrübe</div>
               </div>
               <div className="text-center">
                 <div className="text-5xl font-black text-[#1b294b]">100%</div>
                 <div className="text-[10px] font-bold text-[#c5a059] uppercase tracking-widest mt-2">Şeffaf Saklama</div>
               </div>
            </div>
          </div>
          <div className="bg-[#1b294b] p-16 rounded-[50px] text-white shadow-2xl border-b-8 border-[#c5a059]">
            <Icons.Lock className="text-[#c5a059] mb-8" size={64} />
            <h4 className="text-3xl font-black uppercase italic mb-6">Maksimum <br/>Siber Güvenlik</h4>
            <p className="text-gray-400 text-sm font-medium italic leading-relaxed">
              İşlemleriniz 256-bit SSL şifreleme ve iki aşamalı doğrulama protokolleri ile korunmaktadır. Finansal verileriniz bizimle tamamen güvende.
            </p>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black uppercase italic text-center mb-16">Sıkça Sorulan Sorular</h2>
          <div className="space-y-4">
            {[
              { q: "Nakit çekim hızı nedir?", a: "T+0 sistemimiz sayesinde satış yaptığınız an bakiyenizi banka hesabınıza transfer talebi olarak gönderebilirsiniz." },
              { q: "Komisyon oranları her hisse için geçerli mi?", a: "Evet, Elit Menkul standartlarında BIST 100 içerisindeki tüm hisselerde sıfıra yakın komisyon avantajından yararlanabilirsiniz." },
              { q: "Minimum yatırım tutarı var mı?", a: "Profesyonel stratejilerimizden tam verim alabilmeniz için önerilen başlangıç sermayesi 50.000 TL'dir." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full p-8 flex justify-between items-center text-left">
                  <span className="font-black uppercase text-xs tracking-widest">{faq.q}</span>
                  {openFaq === idx ? <Icons.Minus size={18} className="text-[#c5a059]" /> : <Icons.Plus size={18} className="text-gray-300" />}
                </button>
                {openFaq === idx && <div className="p-8 pt-0 text-gray-500 italic text-sm border-t border-gray-50">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="iletisim" className="bg-[#0a1428] text-white py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24">
          <div className="space-y-8">
            <div className="text-5xl font-light italic">Elit <span className="text-[#c5a059] font-black">Menkul</span></div>
            <p className="text-gray-500 text-xs font-medium italic leading-relaxed">2003'ten beri finansal geleceğinizi elit standartlarla inşa ediyoruz. Teknoloji ve güvenin buluşma noktası.</p>
          </div>
          <div className="space-y-8">
            <h5 className="font-black uppercase text-[10px] tracking-[0.5em] text-[#c5a059]">Bize Ulaşın</h5>
            <div className="space-y-4">
              <a href={`tel:${TELEFON}`} className="block text-2xl font-black italic hover:text-[#c5a059] transition">{TELEFON}</a>
              <p className="text-gray-500 text-sm italic font-medium">info@elitmenkultr.com</p>
              <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">Levent, Büyükdere Cad. No:127, İstanbul</p>
            </div>
          </div>
          <div className="space-y-8">
             <h5 className="font-black uppercase text-[10px] tracking-[0.5em] text-[#c5a059]">Yasal Uyarı</h5>
             <p className="text-[9px] text-gray-600 font-bold uppercase leading-relaxed tracking-tighter">
               Burada sunulan kazanç tabloları model portföy performanslarına dayalı tahminlerdir. Yatırım yapmak risk içerir.
             </p>
             <p className="text-[10px] text-gray-400 font-black tracking-[0.6em] uppercase pt-4">© 2026 ELİT MENKUL DEĞERLER A.Ş.</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP DESTEK */}
      <a href={WHATSAPP_URL} target="_blank" className="fixed bottom-10 right-10 z-[2000] bg-[#25d366] text-white p-6 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all group">
        <Icons.MessageCircle size={32} />
        <span className="absolute right-full mr-6 bg-[#0a1428] text-white py-2 px-6 rounded-md text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">Danışmana Bağlan</span>
      </a>
    </div>
  );
}