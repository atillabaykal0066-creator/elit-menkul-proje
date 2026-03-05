"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as Icons from 'lucide-react';

/**
 * TRADINGVIEW CANLI PİYASA VERİLERİ
 * Yatırımcıya anlık veri sunarak sitenin "yaşayan" bir finans platformu olduğunu kanıtlar.
 */
const LiveMarketTicker = () => {
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
        "colorTheme": "light",
        "isTransparent": false,
        "displayMode": "adaptive",
        "locale": "tr"
      });
      container.current.appendChild(script);
    }
  }, []);
  return <div ref={container} className="tradingview-widget-container border-b border-gray-100" />;
};

export default function ElitMenkulProfessional() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const WHATSAPP_URL = "https://wa.me/905391046011"; 
  const REGISTER_URL = "https://sube.elitmenkulonline.com/register";
  const TELEFON = "+90 539 104 60 11";

  return (
    <div className="min-h-screen bg-white text-[#1b294b] font-sans selection:bg-[#c5a059] selection:text-white">
      
      {/* 1. ÜST BİLGİ VE CANLI VERİ PANELİ */}
      <div className="fixed top-0 w-full z-[1000] shadow-sm bg-white">
        <LiveMarketTicker />
        <div className="bg-[#1b294b] py-2 px-6 md:px-12 flex justify-between items-center text-[10px] font-bold text-white tracking-widest uppercase">
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1.5 text-[#c5a059]">
              <Icons.ShieldCheck size={12} /> SPK LİSANSLI VE DENETİMLİ
            </span>
            <span className="hidden md:block opacity-60">MERKEZ: LEVENT, İSTANBUL</span>
          </div>
          <div className="flex items-center gap-4">
            <Icons.Clock size={12} className="text-[#c5a059]" /> 
            PİYASALARIN AÇILMASINA: <span className="text-green-400">AKTİF</span>
          </div>
        </div>
      </div>

      {/* 2. PROFESYONEL NAVİGASYON */}
      <nav className="bg-white/90 backdrop-blur-lg pt-[100px] pb-6 px-6 md:px-12 border-b border-gray-100 relative z-[900]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Sol Linkler */}
          <div className="flex gap-8 items-center text-[11px] font-black uppercase tracking-[0.2em] order-2 md:order-1">
            <a href="#hakkimizda" className="hover:text-[#c5a059] transition-colors">Hakkımızda</a>
            <a href="#kurumsal" className="text-[#00bcd4] hover:opacity-80 transition-opacity">Kurumsal</a>
          </div>

          {/* Merkez Logo */}
          <div className="flex flex-col items-center order-1 md:order-2">
            <div className="flex items-baseline">
              <span className="text-6xl font-light text-[#4a4a4a] tracking-tighter italic">Elit</span>
              <div className="ml-3 flex flex-col">
                <span className="text-[11px] font-black text-[#1b294b] uppercase tracking-[0.3em] leading-none">Menkul Değerler</span>
                <span className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.4em] mt-1">Anonim Şirketi</span>
              </div>
            </div>
          </div>

          {/* Sağ Linkler */}
          <div className="flex gap-8 items-center text-[11px] font-black uppercase tracking-[0.2em] order-3">
            <a href="#hizmetler" className="hover:text-[#c5a059] transition-colors">Hizmetler</a>
            <a href="#iletisim" className="hover:text-[#c5a059] transition-colors">İletişim</a>
            <a href={REGISTER_URL} target="_blank" className="bg-[#2c2ce0] text-white px-8 py-2.5 rounded-sm text-[10px] font-black shadow-lg hover:brightness-110 transition-all">E-ŞUBE</a>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION - ELİT STANDARTLAR */}
      <section className="relative h-[850px] flex items-center px-6 md:px-24 bg-[#0a1428] text-white overflow-hidden">
        {/* Premium Arka Plan Dokusu */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070')] bg-cover bg-fixed opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428] via-[#0a1428]/90 to-transparent z-10"></div>
        
        <div className="relative z-20 max-w-6xl animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-block border-2 border-[#c5a059]/30 text-[#c5a059] px-5 py-1.5 text-[10px] font-black tracking-[0.4em] uppercase mb-10 bg-[#c5a059]/5">
            20 Yıllık Finansal Mimari
          </div>
          <h1 className="text-7xl md:text-[150px] font-black mb-10 leading-[0.75] uppercase italic tracking-tighter">
            Yatırımda <br/><span className="text-[#c5a059]">Elit</span> <br/>Standartlar
          </h1>
          <div className="max-w-3xl space-y-8">
            <p className="text-gray-400 text-2xl font-medium italic leading-relaxed border-l-8 border-[#c5a059] pl-10">
              Beklemeye son! T+0 likidite hızı, sıfır komisyon avantajı ve piyasa düşerken kazandıran çift yönlü işlem modelleriyle sermayenizi Elit Menkul güvencesiyle yönetin.
            </p>
            <div className="flex flex-wrap gap-10 pt-8">
              <a href={REGISTER_URL} target="_blank" className="bg-[#c5a059] text-white px-16 py-7 rounded-sm font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-[#1b294b] transition-all shadow-[0_20px_50px_rgba(197,160,89,0.2)]">
                Hesabınızı Hemen Aktif Edin
              </a>
              <div className="flex items-center gap-6">
                <div className="h-16 w-[1px] bg-white/10 hidden md:block"></div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Saklama Güvencesi</div>
                  <div className="text-lg font-black italic text-white uppercase">Takasbank</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STRATEJİK HİZMETLER (Detaylandırılmış) */}
      <section id="hizmetler" className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black uppercase italic tracking-tighter text-[#1b294b] mb-6">Finansal Özgürlüğün <br/><span className="text-[#c5a059]">3 Ana Sütunu</span></h2>
              <p className="text-gray-500 font-medium italic">Sıradan bir aracı kurumun ötesinde, yatırımcının başarısını merkeze alan teknik altyapımızla tanışın.</p>
            </div>
            <div className="text-[80px] font-black text-gray-50 opacity-10 leading-none select-none">STRATEGY</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: <Icons.ZapOff size={48} />,
                title: "Anında Likidite (T+0)",
                desc: "Hisse senedi satış işlemlerinizde takas süresini (T+2) beklemenize gerek kalmaz. Nakit gücünüzü saniyeler içinde yeni yatırımlara dönüştürebilir veya banka hesabınıza transfer edebilirsiniz."
              },
              {
                icon: <Icons.CircleDollarSign size={48} />,
                title: "Sıfır Komisyon Yapısı",
                desc: "Yatırım maliyetlerinizi minimize ediyoruz. Yüksek hacimli işlemlerde komisyon oranlarını sıfırlayarak, elde ettiğiniz kârın tamamının portföyünüzde kalmasını sağlıyoruz."
              },
              {
                icon: <Icons.ArrowDownUp size={48} />,
                title: "Çift Yönlü Kar Potansiyeli",
                desc: "Piyasalar sadece yükselirken değil, düşerken de kazanç sağlayın. Açığa satış ve kaldıraçlı işlem yetkilerimizle her türlü piyasa koşulunda strateji geliştirme imkanı sunuyoruz."
              }
            ].map((item, i) => (
              <div key={i} className="group relative p-12 bg-gray-50 rounded-2xl hover:bg-[#1b294b] transition-all duration-500 hover:-translate-y-4">
                <div className="text-[#c5a059] mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-black uppercase italic mb-6 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed italic group-hover:text-gray-300 transition-colors">{item.desc}</p>
                <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                   <Icons.TrendingUp size={100} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. KURUMSAL GÜVEN VE DENETİM */}
      <section id="kurumsal" className="py-32 px-6 bg-[#fcfcfc] border-y border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10 relative z-20">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-tight text-[#1b294b]">Şeffaf, Lisanslı ve <br/><span className="text-[#c5a059]">Güçlü Altyapı</span></h2>
            <div className="space-y-6 text-gray-600 font-medium italic leading-relaxed text-lg">
              <p>Elit Menkul Değerler A.Ş., Türkiye sermaye piyasalarında 20 yılı aşkın süredir "Geniş Yetkili Aracı Kurum" sıfatıyla faaliyet göstermektedir.</p>
              <p>Yatırımcılarımızın tüm varlıkları, kurumumuzdan tamamen bağımsız olarak devlet nezdindeki **Takasbank** ve **Merkezi Kayıt Kuruluşu (MKK)** üzerinde yatırımcıların kendi isimlerine özel hesaplarda saklanır.</p>
            </div>
            <div className="flex gap-12 pt-4">
              <div className="text-center">
                <div className="text-4xl font-black text-[#1b294b]">2003</div>
                <div className="text-[10px] font-bold text-[#c5a059] uppercase tracking-widest mt-2">Kuruluş Yılı</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-[#1b294b]">100K+</div>
                <div className="text-[10px] font-bold text-[#c5a059] uppercase tracking-widest mt-2">Aktif Yatırımcı</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-[#1b294b] uppercase italic">SPK</div>
                <div className="text-[10px] font-bold text-[#c5a059] uppercase tracking-widest mt-2">Tam Denetim</div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#c5a059]/10 rounded-full blur-3xl group-hover:bg-[#c5a059]/20 transition-all duration-700"></div>
            <div className="relative bg-[#1b294b] p-16 rounded-[40px] shadow-2xl text-white">
              <Icons.ShieldCheck className="text-[#c5a059] mb-8" size={64} />
              <h4 className="text-3xl font-black uppercase italic mb-6 leading-none">Varlıklarınız <br/>Emanetimizde Değil, <br/>Güvencemizde.</h4>
              <p className="text-gray-400 text-sm italic font-medium">Sermayeniz her zaman sizin kontrolünüzdedir. Elit Menkul, sadece sizin talimatlarınız doğrultusunda işlem yapan profesyonel bir aracıdır.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIKÇA SORULAN SORULAR */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4 text-[#1b294b]">Merak Edilenler</h2>
            <div className="w-20 h-1.5 bg-[#c5a059] mx-auto"></div>
          </div>
          <div className="space-y-6">
            {[
              { q: "Neden Elit Menkul'ü tercih etmeliyim?", a: "Hız, teknoloji ve güven üçgeninde Türkiye'nin en rekabetçi işlem koşullarını sunuyoruz. T+0 likidite ve sıfır komisyon avantajı bizi diğerlerinden ayırır." },
              { q: "Hesap açılış süreci ne kadar sürer?", a: "Tamamen dijital süreçlerimiz sayesinde başvurunuzu yaptıktan sonra hesabınız aynı gün içinde aktif hale getirilir ve işlem yapmaya başlayabilirsiniz." },
              { q: "Destek hizmetleriniz nelerdir?", a: "Hafta içi her gün uzman yatırım danışmanlarımızla WhatsApp veya telefon üzerinden anlık olarak birebir iletişim kurabilirsiniz." }
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-3xl overflow-hidden bg-white shadow-sm hover:border-[#c5a059]/30 transition-all">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full p-8 flex justify-between items-center text-left group">
                  <span className="font-black uppercase text-xs tracking-[0.1em] text-[#1b294b] group-hover:text-[#c5a059] transition-colors">{faq.q}</span>
                  {openFaq === idx ? <Icons.Minus size={18} className="text-[#c5a059]" /> : <Icons.Plus size={18} className="text-gray-300" />}
                </button>
                {openFaq === idx && <div className="p-8 pt-0 text-gray-500 italic text-sm leading-relaxed border-t border-gray-50 animate-in fade-in duration-500">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer id="iletisim" className="bg-[#0a1428] text-white py-32 px-6 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1 space-y-8">
            <div className="text-4xl font-light italic">Elit <span className="text-[#c5a059] font-black">Menkul</span></div>
            <p className="text-gray-500 text-xs font-medium italic leading-relaxed">İstanbul Levent finans merkezinde, küresel standartlarda yatırımcılara profesyonel aracılık hizmeti sunuyoruz.</p>
          </div>
          <div className="space-y-6">
            <h5 className="font-black uppercase text-[10px] tracking-[0.4em] text-[#c5a059]">İletişim</h5>
            <div className="space-y-4">
              <a href={`tel:${TELEFON}`} className="block text-xl font-black italic hover:text-[#c5a059] transition-colors">{TELEFON}</a>
              <p className="text-gray-500 text-xs font-medium italic">info@elitmenkultr.com</p>
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="font-black uppercase text-[10px] tracking-[0.4em] text-[#c5a059]">Hızlı Erişim</h5>
            <div className="grid grid-cols-1 gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Risk Bildirimi</a>
              <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
              <a href="#" className="hover:text-white transition-colors">Duyurular</a>
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="font-black uppercase text-[10px] tracking-[0.4em] text-[#c5a059]">Yasal</h5>
            <p className="text-[9px] text-gray-600 font-bold uppercase leading-relaxed tracking-tighter">Sitede yer alan tüm bilgiler yatırım danışmanlığı kapsamında değildir. Yatırım kararları kişisel risk tercihlerine göre verilmelidir.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 text-center">
           <p className="text-[10px] font-black tracking-[0.6em] uppercase text-gray-600">© 2026 ELİT MENKUL DEĞERLER A.Ş. — TÜM HAKLARI SAKLIDIR.</p>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href={WHATSAPP_URL} target="_blank" className="fixed bottom-10 right-10 z-[2000] bg-[#25d366] text-white p-6 rounded-full shadow-[0_20px_60px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all group">
        <Icons.MessageCircle size={32} />
        <span className="absolute right-full mr-6 bg-[#0a1428] text-white py-2 px-6 rounded-md text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Danışmana Bağlanın</span>
      </a>
    </div>
  );
}