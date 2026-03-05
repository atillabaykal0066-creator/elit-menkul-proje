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
export default function ElitMenkulFinalPortal() {
  const [investment, setInvestment] = useState(50000);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const WHATSAPP_URL = "https://wa.me/905391046011"; 
  const TELEFON = "+90 539 104 60 11";
  
  // SENİN YENİ FORMSPREE ID'N BURAYA EKLENDİ
  const FORMSPREE_URL = "https://formspree.io/f/mbdzrgnr"; 

  // Kazanç hesaplama: 50.000 TL -> 15.000 TL (%30 aylık getiri vurgusu)
  const monthlyProfit = (investment * 0.30).toLocaleString('tr-TR', { maximumFractionDigits: 0 });

  // Form Gönderim Fonksiyonu
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
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Bir hata oluştu, lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error("Gönderim hatası", error);
      alert("Bağlantı hatası oluştu.");
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
              <Icons.Activity size={14} className="animate-pulse" /> SİSTEM DURUMU: <span className="text-green-500">AKTİF</span>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-[10px] font-bold text-gray-400 tracking-widest uppercase">
              <Icons.ShieldCheck size={14} className="text-[#c5a059]" /> SPK DENETİMLİ ARACILIK HİZMETLERİ
            </div>
          </div>
          <div className="flex gap-4">
             <a href="#kayit" className="bg-[#c5a059] text-white px-8 py-2 rounded-sm text-[10px] font-black tracking-widest hover:bg-white hover:text-[#1b294b] transition-all uppercase">BAŞVURU YAP</a>
          </div>
        </div>
      </header>

      {/* NAVİGASYON */}
      <nav className="bg-white/95 backdrop-blur-md pt-[115px] pb-8 px-6 md:px-12 border-b border-gray-100 relative z-[900]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex gap-10 items-center text-[11px] font-black uppercase tracking-[0.2em]">
            <a href="#hizmetler" className="hover:text-[#c5a059] transition-all">Kurumsal</a>
            <a href="#hesaplama" className="hover:text-[#c5a059] transition-all text-[#00bcd4]">Kazanç Analizi</a>
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
            <a href="#borsa" className="hover:text-[#c5a059] transition-all">Piyasalar</a>
            <a href="#kayit" className="border-b-2 border-[#c5a059] pb-1">Hızlı Kayıt</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-[750px] flex items-center px-6 md:px-24 bg-[#0a1428] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974717482-4800b1ee2e24?q=80&w=2070')] bg-cover opacity-10 scale-110"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428] via-[#0a1428]/95 to-transparent z-10"></div>
        
        <div className="relative z-20 max-w-7xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-[#c5a059]"></div>
            <div className="text-[#c5a059] text-[11px] font-black tracking-[0.5em] uppercase">Sermaye Yönetiminde Yeni Nesil Standart</div>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-tight uppercase italic tracking-tighter">
            Yatırımda <br/><span className="text-[#c5a059] text-6xl md:text-9xl">Elit Standartlar</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mb-14 font-medium italic leading-relaxed border-l-4 border-[#c5a059] pl-8">
            T+0 likidite hızı ve sıfır komisyon avantajıyla sermayenizi yönetin. Piyasa düşerken de kazandıran "Elit Stratejiler" ile tanışın.
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            <a href="#kayit" className="bg-[#c5a059] text-white px-20 py-8 rounded-sm font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-[#1b294b] transition-all shadow-2xl">
              ÜYELİĞİNİZİ BAŞLATIN
            </a>
          </div>
        </div>
      </section>

      {/* DÜNYA BORSA SAATLERİ */}
      <section id="borsa" className="py-20 bg-gray-50 px-6 border-b border-gray-100">
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
                <div className="text-lg font-black italic text-[#1b294b] group-hover:text-[#c5a059] transition-colors">{market.hours}</div>
                <div className={`text-[10px] font-bold uppercase mt-4 flex items-center gap-2 ${market.color}`}>
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span> {market.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YATIRIM HESAPLAMA & VURGULANAN KAZANÇ */}
      <section id="hesaplama" className="py-32 px-6 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-tight text-[#1b294b]">
              Getiri <br/><span className="text-[#c5a059]">Potansiyeli</span>
            </h2>
            <p className="text-gray-500 font-medium italic text-lg leading-relaxed">
              Elit Menkul'ün yüksek frekanslı işlem modelleriyle sermayenizin ay sonundaki değerini simüle edin.
            </p>
            <div className="space-y-12 bg-gray-50 p-10 rounded-[30px] border border-gray-100 shadow-inner">
              <div className="space-y-6">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest text-gray-400">
                  <span>Sermaye Miktarı</span>
                  <span className="text-[#c5a059] text-2xl font-black">{investment.toLocaleString()} TL</span>
                </div>
                <input 
                  type="range" min="10000" max="1000000" step="10000" value={investment} 
                  onChange={(e) => setInvestment(Number(e.target.value))} 
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#c5a059]" 
                />
              </div>
            </div>
          </div>

          {/* VURGULANAN KAZANÇ KARTI */}
          <div className="bg-[#1b294b] p-16 rounded-[50px] text-white shadow-[0_40px_100px_rgba(27,41,75,0.4)] relative border-b-8 border-[#c5a059]">
            <div className="absolute top-0 right-0 p-10 opacity-5"><Icons.TrendingUp size={150} /></div>
            <div className="relative z-10 space-y-10 text-center md:text-left">
              <div className="inline-block bg-[#c5a059] text-white px-5 py-1.5 text-[10px] font-black tracking-widest uppercase rounded-full">ELİT MODEL GETİRİSİ</div>
              <div className="space-y-2">
                <h4 className="text-gray-400 text-xs font-bold uppercase tracking-[0.4em]">Tahmini Aylık Kazanç</h4>
                <div className="text-7xl md:text-8xl font-black italic leading-none text-[#c5a059] drop-shadow-2xl">
                  {monthlyProfit} <span className="text-3xl text-white/50">TL</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm font-medium italic leading-relaxed pt-6 border-t border-white/10">
                <span className="text-white font-black underline underline-offset-8 decoration-[#c5a059]">50.000 TL</span> sermaye ile <span className="text-white">aylık 15.000 TL</span> civarı getiri, profesyonel yönetim altındaki hesaplarımız için bir standarttır.
              </p>
              <a href="#kayit" className="block w-full text-center bg-white text-[#1b294b] py-6 font-black uppercase tracking-widest text-sm hover:bg-[#c5a059] hover:text-white transition-all">HEMEN BAŞVURUN</a>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEJİK HİZMETLER */}
      <section id="hizmetler" className="py-40 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="bg-white p-12 rounded-[40px] shadow-sm hover:shadow-2xl transition-all border border-gray-100 group">
             <Icons.ZapOff className="text-[#c5a059] mb-8 group-hover:scale-110 transition-transform" size={48} />
             <h3 className="text-2xl font-black uppercase italic mb-6">T+0 Nakit <br/>Esnekliği</h3>
             <p className="text-gray-500 text-sm italic leading-relaxed">Varlıklarınızı sattığınız an nakit gücünüzü kullanın. Takas günlerini beklemeden yeni fırsatlara yelken açın.</p>
          </div>
          <div className="bg-white p-12 rounded-[40px] shadow-sm hover:shadow-2xl transition-all border border-gray-100 group">
             <Icons.CircleDollarSign className="text-[#c5a059] mb-8 group-hover:scale-110 transition-transform" size={48} />
             <h3 className="text-2xl font-black uppercase italic mb-6">Maliyetsiz <br/>İşlem Hacmi</h3>
             <p className="text-gray-500 text-sm italic leading-relaxed">Sıfır komisyon avantajıyla kazancınızın tamamı cebinizde kalsın. Yatırım maliyetlerini tarihe gömün.</p>
          </div>
          <div className="bg-white p-12 rounded-[40px] shadow-sm hover:shadow-2xl transition-all border border-gray-100 group">
             <Icons.ArrowDownUp className="text-[#c5a059] mb-8 group-hover:scale-110 transition-transform" size={48} />
             <h3 className="text-2xl font-black uppercase italic mb-6">Çift Yönlü <br/>Kâr Planı</h3>
             <p className="text-gray-500 text-sm italic leading-relaxed">Piyasaların düşüşünden endişe etmeyin. Açığa satış yetkisiyle her türlü trendde kâr odaklı kalın.</p>
          </div>
        </div>
      </section>

      {/* KAYIT FORMU & ONAY EKRANI */}
      <section id="kayit" className="py-40 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto">
          {!isSubmitted ? (
            <div className="bg-white p-12 md:p-20 rounded-[60px] shadow-[0_50px_150px_rgba(0,0,0,0.08)] border border-gray-100">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-black uppercase italic tracking-tighter text-[#1b294b] mb-4">Üyelik Başvurusu</h2>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.4em]">Finansal Elitlerin Arasına Katılın</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-5">İsim Soyisim</label>
                    <input name="isim_soyisim" required className="w-full bg-gray-50 border-none p-6 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#c5a059] transition-all" placeholder="Adınız ve Soyadınız" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-5">Telefon Numarası</label>
                    <input name="telefon" type="tel" required className="w-full bg-gray-50 border-none p-6 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#c5a059] transition-all" placeholder="05xx xxx xx xx" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-5">E-Posta Adresi</label>
                    <input name="email" type="email" required className="w-full bg-gray-50 border-none p-6 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#c5a059] transition-all" placeholder="örnek@eposta.com" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-5">Referans Numarası</label>
                    <input name="referans" className="w-full bg-gray-50 border-none p-6 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#c5a059] transition-all" placeholder="Varsa Referans No" />
                  </div>
                </div>
                <button 
                  disabled={loading}
                  className="w-full bg-[#1b294b] text-white py-8 rounded-[20px] font-black uppercase tracking-[0.4em] text-sm hover:bg-[#c5a059] transition-all shadow-xl flex justify-center items-center gap-4 group"
                >
                  {loading ? "GÖNDERİLİYOR..." : "ÜYELİĞİ BAŞLAT"} <Icons.ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          ) : (
            /* ONAY EKRANI */
            <div className="bg-[#1b294b] p-24 rounded-[60px] shadow-2xl text-center animate-in zoom-in duration-700">
              <div className="w-24 h-24 bg-[#c5a059] rounded-full flex items-center justify-center mx-auto mb-12 shadow-[0_0_50px_rgba(197,160,89,0.4)]">
                 <Icons.ShieldCheck size={48} className="text-white" />
              </div>
              <h2 className="text-5xl font-black uppercase italic text-white mb-8 leading-tight">Başvurunuz <br/>Kuyruğa Alındı</h2>
              <div className="w-20 h-1.5 bg-[#c5a059] mx-auto mb-12"></div>
              <p className="text-gray-300 text-xl font-medium italic leading-relaxed max-w-2xl mx-auto mb-16">
                Hesabınız şu an <span className="text-[#c5a059] font-black underline underline-offset-8">"ONAY BEKLİYOR"</span> statüsündedir. <br/><br/>
                Kıdemli yatırım danışmanlarımız 24 saat içerisinde profilinizi aktive etmek üzere sizinle iletişime geçecektir.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                <a href="/" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition">Panele Dön</a>
                <a href={WHATSAPP_URL} target="_blank" className="bg-[#25d366] text-white px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg hover:scale-105 transition-all">ONAY SÜRECİNİ HIZLANDIR</a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="iletisim" className="bg-[#0a1428] text-white py-40 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24 relative z-10">
          <div className="space-y-10">
            <div className="text-5xl font-light italic">Elit <span className="text-[#c5a059] font-black">Menkul</span></div>
            <p className="text-gray-500 text-sm leading-relaxed italic font-medium">Türkiye'nin en hızlı büyüyen teknoloji odaklı portföy yönetimi ve aracılık kuruluşu. 20 yıllık güven, elit standartlar.</p>
          </div>
          <div className="space-y-10">
            <h5 className="font-black uppercase text-[10px] tracking-[0.5em] text-[#c5a059]">İletişim Terminali</h5>
            <div className="space-y-6">
              <a href={`tel:${TELEFON}`} className="block text-3xl font-black italic hover:text-[#c5a059] transition-colors">{TELEFON}</a>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest leading-loose">
                Büyükdere Cad. No:127 Kat:8 Levent / İSTANBUL<br/>
                info@elitmenkultr.com
              </p>
            </div>
          </div>
          <div className="space-y-10">
             <h5 className="font-black uppercase text-[10px] tracking-[0.5em] text-[#c5a059]">Yasal Protokoller</h5>
             <p className="text-[10px] text-gray-600 font-bold uppercase leading-relaxed tracking-tighter">
               UYARI: Yatırım yapmak sermaye riski içerir. Geçmişteki başarılar gelecekteki getirilerin garantisi değildir. Lütfen tüm risk bildirimlerini inceleyiniz.
             </p>
             <div className="pt-8 border-t border-white/5">
                <p className="text-[10px] text-gray-500 font-black tracking-[0.8em] uppercase">© 2026 ELİT MENKUL A.Ş.</p>
             </div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href={WHATSAPP_URL} target="_blank" className="fixed bottom-10 right-10 z-[2000] bg-[#25d366] text-white p-6 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group">
        <Icons.MessageCircle size={32} />
        <div className="absolute right-full mr-6 bg-[#0a1428] text-white py-2 px-6 rounded-md text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">VIP ONAY HATTI</div>
      </a>
    </div>
  );
}