"use client";

import React, { useEffect, useRef, useState } from 'react';
import { 
  Shield, BarChart3, Globe, MousePointer2, Phone, Mail, 
  Clock, MessageCircle, CheckCircle2, X, Users, Plus, Minus, 
  Zap, Landmark, Briefcase, ArrowDownUp, CircleDollarSign, 
  ZapOff, Activity, Target, TrendingUp, ShieldCheck, Lock,
  FileText, Award, BarChart
} from 'lucide-react';

// TRADINGVIEW CANLI VERI BANDI (Gerçek Fiyatlar)
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
          { "proName": "FX:GBPUSD", "title": "GBP/USD" },
          { "proName": "OANDA:XAGUSD", "title": "GÜMÜŞ" }
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

export default function ElitMenkulFullTerminal() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const WHATSAPP_URL = "https://wa.me/905391046011"; 
  const REGISTER_URL = "https://sube.elitmenkulonline.com/register";
  const TELEFON = "+90 539 104 60 11";

  return (
    <div className="min-h-screen bg-white text-[#1b294b] font-sans selection:bg-[#c5a059] selection:text-white">
      
      {/* 1. TOP BAR & CANLI VERİ (Ticker) */}
      <div className="fixed top-0 w-full z-[1000]">
        <TradingViewTicker />
        <div className="bg-[#1b294b] py-2 px-6 md:px-12 flex justify-between items-center border-t border-white/5 shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-black text-[#c5a059] tracking-widest uppercase">
              <Activity size={14} className="animate-pulse" /> Piyasa Durumu: <span className="text-green-500">AÇIK</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-[10px] font-bold text-gray-400 tracking-widest uppercase">
              <ShieldCheck size={14} /> Lisans: <span className="text-white">Geniş Yetkili Aracı Kurum</span>
            </div>
          </div>
          <a href={REGISTER_URL} target="_blank" className="bg-[#c5a059] text-white px-6 py-1.5 rounded-sm text-[10px] font-black tracking-widest hover:bg-white hover:text-[#1b294b] transition-all shadow-lg uppercase">
            E-ŞUBE / WEB TRADER
          </a>
        </div>
      </div>

      {/* 2. ANA NAVİGASYON (image_4f3fba.png yapısına göre) */}
      <nav className="bg-white/95 backdrop-blur-md pt-[100px] pb-8 px-6 md:px-12 border-b border-gray-100 relative z-[900]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex gap-10 items-center order-2 md:order-1 font-black text-[11px] uppercase tracking-[0.2em] text-[#1b294b]">
            <a href="#hakkimizda" className="hover:text-[#c5a059] border-b border-transparent hover:border-[#c5a059] transition-all pb-1">Hakkımızda</a>
            <a href="#kurumsal" className="text-[#00bcd4] hover:opacity-80 transition-all pb-1">Kurumsal</a>
          </div>

          <div className="flex flex-col items-center order-1 md:order-2">
            <div className="flex items-baseline">
              <span className="text-6xl font-light text-[#4a4a4a] tracking-tighter italic">Elit</span>
              <div className="ml-3 flex flex-col">
                <span className="text-[11px] font-black text-[#1b294b] uppercase tracking-[0.3em] leading-none">Menkul Değerler</span>
                <span className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.4em] mt-1">Anonim Şirketi</span>
              </div>
            </div>
          </div>

          <div className="flex gap-10 items-center order-3 font-black text-[11px] uppercase tracking-[0.2em] text-[#1b294b]">
            <a href="#hizmetler" className="hover:text-[#c5a059] transition-all pb-1">Hizmetler</a>
            <a href="#iletisim" className="hover:text-[#c5a059] transition-all pb-1">İletişim</a>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION (image_4eda80.jpg tasarımının birebir hali) */}
      <section className="relative h-[800px] flex items-center px-6 md:px-24 bg-[#0a1428] text-white overflow-hidden">
        {/* Arka plan görsel dokusu */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428] via-[#0a1428]/95 to-transparent z-10"></div>
        
        <div className="relative z-20 max-w-6xl">
          <div className="inline-block border border-[#c5a059]/50 text-[#c5a059] px-4 py-1 text-[10px] font-black tracking-[0.4em] uppercase mb-10">
            20 Yıllık Finansal Tecrübe
          </div>
          <h1 className="text-6xl md:text-[140px] font-black mb-10 leading-[0.8] uppercase italic tracking-tighter">
            Yatırımda <br/><span className="text-[#c5a059]">Elit</span> <br/>Standartlar
          </h1>
          <div className="max-w-3xl space-y-8">
            <p className="text-gray-400 text-xl font-medium italic leading-relaxed border-l-4 border-[#c5a059] pl-8">
              Beklemeye son! T+0 likidite hızı, sıfır komisyon avantajı ve piyasa düşerken kazandıran çift yönlü işlem modelleriyle sermayenizi Elit Menkul güvencesiyle yönetin.
            </p>
            <div className="flex flex-wrap gap-8 pt-6">
              <a href={REGISTER_URL} target="_blank" className="bg-[#c5a059] text-white px-16 py-7 rounded-sm font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-[#1b294b] transition-all shadow-2xl">
                Hesabınızı Hemen Aktif Edin
              </a>
              <div className="flex items-center gap-4 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                <Lock size={16} className="text-[#c5a059]" /> Takasbank Saklama Güvencesi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STRATEJİK AVANTAJLAR (3 Altın Kural) */}
      <section id="hizmetler" className="py-40 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {/* Kural 1 */}
            <div className="group space-y-8">
              <div className="w-20 h-20 bg-gray-50 flex items-center justify-center rounded-3xl group-hover:bg-[#1b294b] transition-all duration-500">
                <ZapOff className="text-[#c5a059] group-hover:text-white" size={40} />
              </div>
              <h3 className="text-3xl font-black uppercase italic leading-none text-[#1b294b]">T+2 Bekleme <br/>Süresi Yok</h3>
              <p className="text-gray-500 leading-relaxed font-medium italic text-sm">
                Borsa İstanbul'da uygulanan standart 2 günlük takas süresini Elit Menkul teknolojisiyle sıfırlıyoruz. Satış yaptığınız an tutar hesabınıza yansır; yeni fırsatları kaçırmadan anında aksiyon alırsınız. Nakit gücünüz saniyeler içinde elinizde.
              </p>
            </div>

            {/* Kural 2 */}
            <div className="group space-y-8">
              <div className="w-20 h-20 bg-gray-50 flex items-center justify-center rounded-3xl group-hover:bg-[#c5a059] transition-all duration-500">
                <CircleDollarSign className="text-[#1b294b] group-hover:text-white" size={40} />
              </div>
              <h3 className="text-3xl font-black uppercase italic leading-none text-[#1b294b]">Sıfır Komisyon <br/>İmkanı</h3>
              <p className="text-gray-500 leading-relaxed font-medium italic text-sm">
                Yatırımcının en büyük maliyeti olan işlem komisyonlarını minimize ediyoruz. Belirli hacim limitleri dahilinde %0 komisyon avantajı sunarak, elde ettiğiniz kârın tamamının portföyünüzde kalmasını sağlıyoruz. Gizli maliyet yok, şeffaf kazanç var.
              </p>
            </div>

            {/* Kural 3 */}
            <div className="group space-y-8">
              <div className="w-20 h-20 bg-gray-50 flex items-center justify-center rounded-3xl group-hover:bg-[#1b294b] transition-all duration-500">
                <ArrowDownUp className="text-[#c5a059] group-hover:text-white" size={40} />
              </div>
              <h3 className="text-3xl font-black uppercase italic leading-none text-[#1b294b]">Çift Yönlü <br/>İşlem Gücü</h3>
              <p className="text-gray-500 leading-relaxed font-medium italic text-sm">
                Piyasanın sadece yükselişinden değil, düşüşünden de kazanç sağlayın. Açığa satış (Short) ve kaldıraçlı işlem yetkilerimizle, ayı piyasasında dahi kâr stratejileri geliştirebilirsiniz. Her türlü piyasa koşulunda kontrol sizde olsun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GÜVENLİK VE LİSANS (Kurumsal Ciddiyet) */}
      <section id="kurumsal" className="py-32 px-6 bg-[#fcfcfc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <div className="flex-1 space-y-10">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-[1.1] text-[#1b294b]">Sermayeniz <br/><span className="text-[#c5a059]">Devlet</span> Güvencesinde</h2>
            <div className="space-y-6 text-gray-600 font-medium italic leading-relaxed text-lg">
              <p>Elit Menkul Değerler A.Ş., Sermaye Piyasası Kurulu (SPK) tarafından düzenli olarak denetlenen, 20 yıllık köklü bir geçmişe sahip **Geniş Yetkili Aracı Kurumdur.**</p>
              <p>Tüm yatırımcı varlıkları, kurumumuzun özkaynaklarından tamamen bağımsız olarak **Takasbank** nezdinde, yatırımcının kendi adına açılmış hesaplarda saklanır. Bu, yatırımlarınızın her koşulda devlet güvencesi altında olması demektir.</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm">
                <ShieldCheck className="text-green-500" size={32} />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1b294b]">SPK Lisanslı Denetim</span>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm">
                <FileText className="text-[#c5a059]" size={32} />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1b294b]">Şeffaf Raporlama</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-6">
            <div className="bg-[#1b294b] p-12 rounded-[40px] text-center text-white space-y-4 shadow-2xl">
              <Award className="mx-auto text-[#c5a059]" size={48} />
              <div className="text-4xl font-black italic">20+</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Yıllık Tecrübe</div>
            </div>
            <div className="bg-white p-12 rounded-[40px] text-center space-y-4 shadow-xl border border-gray-100">
              <Users className="mx-auto text-[#c5a059]" size={48} />
              <div className="text-4xl font-black italic text-[#1b294b]">100K+</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Aktif Portföy</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PİYASA ARAÇLARI */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4 text-[#1b294b]">Geniş Enstrüman Yelpazesi</h2>
          <div className="w-24 h-2 bg-[#c5a059] mx-auto"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "BİST Hisse", desc: "Pay Piyasası", icon: <BarChart /> },
            { title: "VİOP", desc: "Vadeli İşlemler", icon: <TrendingUp /> },
            { title: "Forex", desc: "Döviz Piyasası", icon: <Globe /> },
            { title: "Emtia", desc: "Altın & Petrol", icon: <Landmark /> }
          ].map((item, idx) => (
            <div key={idx} className="p-12 border border-gray-100 rounded-3xl hover:bg-[#0a1428] hover:text-white transition-all duration-300 group">
              <div className="text-[#c5a059] mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-black uppercase italic text-sm mb-2">{item.title}</h4>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SSS (Güven Tamamlayıcı) */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-center mb-16 text-[#1b294b]">Sıkça Sorulan Sorular</h2>
          <div className="space-y-4">
            {[
              { q: "Nasıl hesap açabilirim?", a: "E-Şube üzerinden 'Hemen Kayıt Ol' butonuna basarak dijital formumuzu doldurmanız yeterlidir. Müşteri temsilcimiz onay için sizi arayacaktır." },
              { q: "Nakit çekim süreleri nedir?", a: "T+0 altyapımız sayesinde satış yaptığınız tutar anında bakiyenize eklenir ve mesai saatleri içinde banka hesabınıza transfer edilebilir." },
              { q: "Veriler ne kadar gecikmeli?", a: "Sitemizde ve işlem platformumuzda sağlanan tüm veriler Borsa İstanbul ve global sağlayıcılardan saniyelik, gerçek zamanlı akar." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full p-8 flex justify-between items-center text-left">
                  <span className="font-black uppercase text-xs tracking-widest text-[#1b294b]">{faq.q}</span>
                  {openFaq === idx ? <Minus size={18} className="text-[#c5a059]" /> : <Plus size={18} className="text-gray-400" />}
                </button>
                {openFaq === idx && <div className="p-8 pt-0 text-gray-500 italic text-sm border-t border-gray-50 animate-in fade-in duration-300">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer id="iletisim" className="bg-[#0a1428] text-white py-32 px-6 text-center border-t border-white/5">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="flex flex-col items-center">
            <div className="text-5xl font-light italic mb-2">Elit <span className="text-[#c5a059] font-black underline decoration-1 underline-offset-[12px]">Menkul</span></div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.5em] mt-4">Geleceğin Finansal Standartları</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm font-black uppercase tracking-[0.2em] border-y border-white/5 py-12">
            <a href={`tel:${TELEFON}`} className="flex items-center justify-center gap-4 hover:text-[#c5a059] transition"><Phone size={18} /> {TELEFON}</a>
            <div className="flex items-center justify-center gap-4 text-gray-400 tracking-normal font-normal italic"><Mail size={18} /> info@elitmenkultr.com</div>
            <div className="flex items-center justify-center gap-4 text-gray-500 italic font-normal tracking-normal uppercase text-xs"><Clock size={18} /> Hafta İçi: 09:00 - 18:00</div>
          </div>

          <div className="space-y-6">
            <p className="text-[10px] text-gray-600 leading-relaxed uppercase font-bold tracking-tighter max-w-2xl mx-auto">
              YASAL UYARI: Burada yer alan bilgiler yatırım danışmanlığı kapsamında değildir. Yatırım yapmak risk içerir. Geçmiş performans gelecek sonuçların garantisi olamaz.
            </p>
            <p className="text-[10px] text-gray-500 font-black tracking-[0.4em] uppercase">© 2026 ELİT MENKUL DEĞERLER A.Ş. — LİSANSLI ARACI KURUM</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href={WHATSAPP_URL} target="_blank" className="fixed bottom-10 right-10 z-[2000] bg-[#25d366] text-white p-5 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-all active:scale-95 group">
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-[#0a1428] text-white text-[10px] font-black uppercase tracking-widest py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Destek Hattı</span>
      </a>
    </div>
  );
}