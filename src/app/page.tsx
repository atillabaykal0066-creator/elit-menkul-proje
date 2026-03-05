"use client";

import React, { useEffect, useRef, useState } from 'react';
import { 
  Shield, BarChart3, Globe, MousePointer2, ChevronRight, Phone, Mail, 
  Clock, MessageCircle, CheckCircle2, X, Users, Plus, Minus, Zap, 
  Building2, History, Award, TrendingUp, PieChart, Landmark, Briefcase,
  ArrowDownUp, CircleDollarSign, ZapOff, Activity, Target, TrendingDown
} from 'lucide-react';

// TRADINGVIEW CANLI VERİ BİLEŞENİ (Widget)
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
          { "proName": "FX:GBPUSD", "title": "GBP/USD" }
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

  return (
    <div ref={container} className="tradingview-widget-container border-b border-white/10" />
  );
};

export default function ElitMenkulUltimateMaster() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const REGISTER_URL = "https://sube.elitmenkulonline.com/register";
  const WHATSAPP_URL = "https://wa.me/905391046011"; 
  const TELEFON = "+90 539 104 60 11";

  return (
    <div className="min-h-screen bg-white text-[#1b294b] font-sans selection:bg-[#c5a059] selection:text-white">
      
      {/* 1. GERÇEK ZAMANLI PİYASA BANDI */}
      <div className="sticky top-0 z-[150]">
        <TradingViewTicker />
      </div>

      {/* 2. E-ŞUBE HIZLI ERİŞİM ŞERİDİ */}
      <div className="bg-[#1b294b] py-3 px-6 md:px-12 flex justify-between items-center relative z-[140]">
        <div className="flex items-center gap-4 text-[10px] font-black text-white/60 tracking-widest uppercase">
          <Activity size={14} className="text-green-500 animate-pulse" /> 
          Piyasa Durumu: <span className="text-white">Gerçek Zamanlı Veri Aktif</span>
        </div>
        <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="bg-[#c5a059] hover:bg-white hover:text-[#1b294b] text-white px-8 py-2 rounded text-[10px] font-black tracking-widest transition-all shadow-xl uppercase">
          E-ŞUBE / WEB TRADER GİRİŞ
        </a>
      </div>

      {/* 3. ANA NAVİGASYON */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 relative z-[130]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-8 items-center order-2 md:order-1">
            <a href="#avantajlar" className="text-[11px] font-black hover:text-[#c5a059] transition uppercase tracking-[0.2em]">Avantajlar</a>
            <a href="#piyasalar" className="text-[11px] font-black hover:text-[#c5a059] transition uppercase tracking-[0.2em]">Piyasalar</a>
          </div>

          <div className="flex flex-col items-center order-1 md:order-2">
            <div className="flex items-baseline">
              <span className="text-5xl font-light text-gray-800 tracking-tighter italic">Elit</span>
              <span className="ml-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">Aracı Kurum A.Ş.</span>
            </div>
          </div>

          <div className="flex gap-8 items-center order-3">
            <a href="#hakkimizda" className="text-[11px] font-black hover:text-[#c5a059] transition uppercase tracking-[0.2em]">Kurumsal</a>
            <a href="#iletisim" className="text-[11px] font-black border-b-2 border-[#c5a059] pb-1 uppercase tracking-[0.2em]">İletişim</a>
          </div>
        </div>
      </nav>

      {/* 4. HERO SECTION */}
      <section className="relative h-[750px] flex items-center px-6 md:px-24 bg-[#0a1428] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974717482-58a00f244b3d?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428] via-[#0a1428]/90 to-transparent z-10"></div>
        
        <div className="relative z-20 max-w-5xl">
          <div className="inline-block border border-[#c5a059] text-[#c5a059] px-4 py-1 rounded-sm text-[10px] font-black tracking-widest uppercase mb-8">
            20 Yıllık Finansal Tecrübe
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.85] uppercase italic tracking-tighter">
            Yatırımda <br/><span className="text-[#c5a059]">Elit</span> Standartlar
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mb-12 font-medium italic leading-relaxed border-l-4 border-[#c5a059] pl-6">
            Beklemeye son! T+0 likidite hızı, sıfır komisyon avantajı ve piyasa düşerken kazandıran çift yönlü işlem modelleriyle sermayenizi Elit Menkul güvencesiyle yönetin.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="bg-[#c5a059] text-white px-16 py-6 rounded-md font-black text-sm uppercase tracking-widest hover:bg-white hover:text-[#1b294b] transition-all shadow-2xl">Hesabınızı Hemen Aktif Edin</a>
          </div>
        </div>
      </section>

      {/* 5. 3 ALTIN KURAL - DETAYLI BÖLÜM */}
      <section id="avantajlar" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4 text-[#1b294b]">Neden Bizi Seçmelisiniz?</h2>
            <div className="w-24 h-2 bg-[#c5a059] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* T2 KURALI YOK */}
            <div className="group p-12 bg-gray-50 rounded-[40px] border-t-8 border-[#1b294b] hover:shadow-2xl transition-all">
              <ZapOff className="text-[#c5a059] mb-8 group-hover:scale-110 transition-transform" size={56} />
              <h3 className="text-2xl font-black uppercase mb-6 italic leading-none">T+2 Kuralı <br/>Burada Yok</h3>
              <p className="text-gray-500 leading-relaxed font-medium italic text-sm">
                Sermaye piyasalarındaki klasik 2 günlük nakit bekleme süresini Elit Menkul altyapısıyla ortadan kaldırdık. Satış yaptığınız anda nakit gücünüz hesabınızda! Anlık fırsatları kaçırmadan portföyünüzü yeniden şekillendirin.
              </p>
            </div>

            {/* SIFIR KOMİSYON */}
            <div className="group p-12 bg-gray-50 rounded-[40px] border-t-8 border-[#c5a059] hover:shadow-2xl transition-all">
              <CircleDollarSign className="text-[#1b294b] mb-8 group-hover:scale-110 transition-transform" size={56} />
              <h3 className="text-2xl font-black uppercase mb-6 italic leading-none">Komisyonsuz <br/>İşlem Modeli</h3>
              <p className="text-gray-500 leading-relaxed font-medium italic text-sm">
                Yüksek işlem hacimlerinde kârınızı eriten komisyon oranlarına son veriyoruz. Yatırımcı dostu politikamızla gizli ücretler olmadan, %0 komisyon avantajıyla işlem yapın. Sizin kazancınız, sizin başarınızdır.
              </p>
            </div>

            {/* ÇİFT YÖNLÜ İŞLEM */}
            <div className="group p-12 bg-gray-50 rounded-[40px] border-t-8 border-[#1b294b] hover:shadow-2xl transition-all">
              <TrendingDown className="text-[#c5a059] mb-8 group-hover:scale-110 transition-transform" size={56} />
              <h3 className="text-2xl font-black uppercase mb-6 italic leading-none">Düşüşten <br/>Kazanç Sağlayın</h3>
              <p className="text-gray-500 leading-relaxed font-medium italic text-sm">
                Piyasanın sadece yükselmesini bekleyerek vakit kaybetmeyin. Açığa satış (Short) ve VİOP entegrasyonumuz sayesinde, fiyatlar düşerken de kâr elde etme avantajını yakalayın. Her trendi kazanca dönüştürün.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HAKKIMIZDA / KURUMSAL GÜVENCE */}
      <section id="hakkimizda" className="py-32 px-6 bg-[#fcfcfc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
             <h2 className="text-5xl font-black uppercase italic mb-10 leading-[1.1]">20 Yıllık <br/> Kurumsal Miras</h2>
             <p className="text-gray-600 text-lg leading-relaxed mb-8 italic font-medium">
                Elit Menkul Değerler A.Ş., 2003 yılında İstanbul'da kurulan, sermaye piyasalarının öncü ve geniş yetkili aracı kurumlarından biridir. Binlerce yatırımcımıza modern teknoloji ve şeffaf hizmet anlayışıyla aracılık ediyoruz.
             </p>
             <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <CheckCircle2 className="text-[#c5a059]" />
                    <span className="font-black uppercase text-xs tracking-widest text-[#1b294b]">Tamamen Takasbank Güvencesinde Varlık Yönetimi</span>
                </div>
                <div className="flex items-center gap-4">
                    <CheckCircle2 className="text-[#c5a059]" />
                    <span className="font-black uppercase text-xs tracking-widest text-[#1b294b]">SPK Lisanslı ve Düzenli Denetlenen Şeffaf Yapı</span>
                </div>
                <div className="flex items-center gap-4">
                    <CheckCircle2 className="text-[#c5a059]" />
                    <span className="font-black uppercase text-xs tracking-widest text-[#1b294b]">Hafta İçi 24 Saat Kesintisiz Uzman Desteği</span>
                </div>
             </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-12 rounded-[40px] shadow-xl border-b-8 border-[#c5a059] text-center">
               <Users className="mx-auto mb-4 text-gray-300" size={40} />
               <div className="text-5xl font-black text-[#1b294b] mb-2 tracking-tighter">100K+</div>
               <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Aktif Yatırımcı</div>
            </div>
            <div className="bg-[#1b294b] p-12 rounded-[40px] shadow-xl border-b-8 border-white text-center">
               <TrendingUp className="mx-auto mb-4 text-[#c5a059]" size={40} />
               <div className="text-5xl font-black text-white mb-2 tracking-tighter">₺50M+</div>
               <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Günlük Hacim</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PİYASA ENSTRÜMANLARI */}
      <section id="piyasalar" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4">Piyasa Erişimi</h2>
            <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs">Tek Platform, Sınırsız İmkan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { t: "Hisse Senedi", i: <TrendingUp />, d: "BİST ve Global Borsalar" },
              { t: "VİOP / Futures", i: <PieChart />, d: "Kaldıraçlı İşlem Gücü" },
              { t: "Emtia / Altın", i: <Landmark />, d: "Değerli Metal Ticareti" },
              { t: "Forex", i: <Globe />, d: "24 Saat Kesintisiz Döviz" }
            ].map((p, idx) => (
              <div key={idx} className="bg-gray-50 p-10 rounded-3xl hover:bg-[#1b294b] group transition-all">
                <div className="text-[#c5a059] mb-8 group-hover:scale-110 transition-transform">{p.i}</div>
                <h4 className="font-black text-gray-800 group-hover:text-white uppercase text-sm mb-2">{p.t}</h4>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 font-bold uppercase tracking-tighter">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. İLETİŞİM & FOOTER */}
      <footer id="iletisim" className="bg-[#0a1428] text-white py-24 px-6 border-t border-[#c5a059]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
          <div>
             <div className="text-4xl font-light italic mb-8">Elit <span className="text-[#c5a059] font-black">Menkul</span></div>
             <p className="text-gray-500 text-sm leading-relaxed italic font-medium">
               2003'ten beri İstanbul'un finans merkezinde, yatırımcının yanındayız. Güven, hız ve teknolojiyle geleceği inşa ediyoruz.
             </p>
          </div>
          <div className="space-y-8">
             <h5 className="font-black uppercase text-xs tracking-[0.3em] text-[#c5a059]">BİZE ULAŞIN</h5>
             <div className="space-y-4">
               <a href={`tel:${TELEFON}`} className="flex items-center gap-4 hover:text-[#c5a059] transition">
                  <Phone size={18} /> <span className="font-bold">{TELEFON}</span>
               </a>
               <div className="flex items-center gap-4 hover:text-[#c5a059] transition cursor-pointer">
                  <Mail size={18} /> <span className="font-bold">info@elitmenkultr.com</span>
               </div>
               <div className="flex items-center gap-4 text-gray-500 italic text-sm">
                  <Clock size={18} /> <span>Pzt - Cum: 09:00 - 18:00</span>
               </div>
             </div>
          </div>
          <div className="space-y-8">
             <h5 className="font-black uppercase text-xs tracking-[0.3em] text-[#c5a059]">YASAL UYARI</h5>
             <p className="text-[10px] text-gray-500 leading-relaxed uppercase font-bold tracking-tighter">
               Yatırım yapmak risk içerir. Geçmiş performans gelecek sonuçların garantisi değildir. Lütfen yatırım kararlarınızdan önce risk formunu okuyunuz.
             </p>
          </div>
        </div>
        <div className="text-center mt-24 pt-12 border-t border-white/5">
           <p className="text-[10px] text-gray-600 font-black tracking-[0.4em] uppercase">© 2026 ELİT MENKUL DEĞERLER A.Ş. — TÜM HAKLARI SAKLIDIR.</p>
        </div>
      </footer>

      {/* WHATSAPP FLOAT BUTTON */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="fixed bottom-10 right-10 z-[200] bg-[#25d366] text-white p-5 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform active:scale-95">
        <MessageCircle size={32} />
      </a>
    </div>
  );
}