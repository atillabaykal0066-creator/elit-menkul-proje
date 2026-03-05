"use client";

import React, { useState } from 'react';
import { 
  Shield, BarChart3, Globe, MousePointer2, ChevronRight, Phone, Mail, 
  Clock, MessageCircle, CheckCircle2, X, Users, Plus, Minus, Zap, 
  Building2, History, Award, TrendingUp, PieChart, Landmark, Briefcase,
  ArrowDownUp, CircleDollarSign, ZapOff
} from 'lucide-react';

export default function ElitMenkulUltraPro() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const REGISTER_URL = "https://sube.elitmenkulonline.com/register";
  const WHATSAPP_URL = "https://wa.me/905391046011"; 
  const TELEFON = "+90 539 104 60 11";

  return (
    <div className="min-h-screen bg-white text-[#1b294b] font-sans">
      
      {/* Üst Şerit */}
      <div className="bg-[#1b294b] py-3 flex justify-center items-center">
        <a href={REGISTER_URL} target="_blank" className="bg-[#c5a059] hover:bg-white hover:text-[#1b294b] text-white px-10 py-2 rounded text-[11px] font-black tracking-[0.2em] transition-all shadow-lg uppercase">
          E-ŞUBE GERÇEK ZAMANLI İŞLEM PANELİ
        </a>
      </div>

      {/* Navigasyon */}
      <nav className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-8 items-center order-2 md:order-1">
            <a href="#avantajlar" className="text-[12px] font-black hover:text-[#c5a059] transition uppercase">AVANTAJLARIMIZ</a>
            <a href="#hakkimizda" className="text-[12px] font-black hover:text-[#c5a059] transition uppercase">KURUMSAL</a>
          </div>

          <div className="flex flex-col items-center order-1 md:order-2">
            <div className="flex items-baseline">
              <span className="text-5xl font-light text-gray-800 tracking-tighter italic">Elit</span>
              <span className="ml-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Aracı Kurum A.Ş.</span>
            </div>
          </div>

          <div className="flex gap-8 items-center order-3">
            <a href="#hizmetler" className="text-[12px] font-black hover:text-[#c5a059] transition uppercase">PİYASALAR</a>
            <a href="#iletisim" className="text-[12px] font-black border-b-2 border-[#c5a059] pb-1 uppercase">BİZE ULAŞIN</a>
          </div>
        </div>
      </nav>

      {/* Hero - Avantaj Odaklı */}
      <section className="relative h-[700px] flex items-center px-6 md:px-24 bg-[#0a1428] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974717482-58a00f244b3d?q=80&w=2070')] bg-cover bg-center opacity-30 scale-105 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428] via-[#0a1428]/90 to-transparent z-10"></div>
        
        <div className="relative z-20 max-w-5xl">
          <div className="inline-block bg-[#c5a059] text-white px-4 py-1 rounded-sm text-[10px] font-black tracking-widest uppercase mb-6">
            Yeni Nesil Yatırım Standartları
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] uppercase italic tracking-tighter">
            Kuralları <br/><span className="text-[#c5a059]">Yeniden</span> Yazıyoruz
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mb-12 font-medium italic leading-relaxed border-l-4 border-[#c5a059] pl-6">
            T+2 beklemeye son! Sıfır komisyon ile anlık likiditeye ulaşın. Piyasa düşerken de kazanabileceğiniz çift yönlü işlem stratejileriyle sermayenizi koruyun.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href={REGISTER_URL} target="_blank" className="bg-white text-[#1b294b] px-14 py-6 rounded-md font-black text-sm uppercase tracking-widest hover:bg-[#c5a059] hover:text-white transition-all shadow-2xl">Hesabınızı Onaylatın</a>
          </div>
        </div>
      </section>

      {/* KRİTİK 3 KURAL BÖLÜMÜ (İstediğin Detaylar) */}
      <section id="avantajlar" className="py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4 text-[#1b294b]">Neden Elit Menkul?</h2>
            <div className="w-24 h-2 bg-[#c5a059] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* T2 Kuralı Yok */}
            <div className="group p-10 bg-gray-50 rounded-3xl border-t-8 border-[#1b294b] hover:shadow-2xl transition-all">
              <ZapOff className="text-[#c5a059] mb-8 group-hover:scale-110 transition-transform" size={56} />
              <h3 className="text-2xl font-black uppercase mb-6 italic">T+2 Kuralı Yok</h3>
              <p className="text-gray-500 leading-relaxed font-medium italic">
                Sermaye piyasalarındaki klasik 2 günlük bekleme süresini ortadan kaldırdık. Satış yaptığınız anda nakit gücünüz hesabınızda! Anlık fırsatları kaçırmadan portföyünüzü yönetin.
              </p>
            </div>

            {/* Komisyon Yok */}
            <div className="group p-10 bg-gray-50 rounded-3xl border-t-8 border-[#c5a059] hover:shadow-2xl transition-all">
              <CircleDollarSign className="text-[#1b294b] mb-8 group-hover:scale-110 transition-transform" size={56} />
              <h3 className="text-2xl font-black uppercase mb-6 italic">Sıfır Komisyon</h3>
              <p className="text-gray-500 leading-relaxed font-medium italic">
                Yatırımcı dostu modelimizle işlem maliyetlerini sıfıra indirdik. Gizli ücretler veya yüksek komisyonlar yok. Kazancınızın tamamı sadece size kalsın.
              </p>
            </div>

            {/* Düşüşten Kazanç */}
            <div className="group p-10 bg-gray-50 rounded-3xl border-t-8 border-[#1b294b] hover:shadow-2xl transition-all">
              <ArrowDownUp className="text-[#c5a059] mb-8 group-hover:scale-110 transition-transform" size={56} />
              <h3 className="text-2xl font-black uppercase mb-6 italic">Çift Yönlü İşlem</h3>
              <p className="text-gray-500 leading-relaxed font-medium italic">
                Piyasanın sadece yükselmesini beklemeyin. Düşüş yönlü pozisyonlar (Short) açarak, ayı piyasasında da kâr elde etme avantajını yakalayın. Her trendde kazanç imkanı!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hakkımızda / Kurumsal */}
      <section id="hakkimizda" className="py-32 px-6 bg-[#fcfcfc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#c5a059]/10 rounded-full blur-3xl"></div>
             <h2 className="text-5xl font-black uppercase italic mb-10 leading-[1.1]">Kurumsal <br/> Güvence ve Şeffaflık</h2>
             <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
                Elit Menkul Değerler A.Ş., 2003 yılından bu yana İstanbul merkezli olarak sermaye piyasalarında aracılık hizmeti sunmaktadır. Geniş yetkili aracı kurum lisansımızla, yatırımcılarımıza dünya standartlarında bir deneyim vaat ediyoruz.
             </p>
             <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                    <CheckCircle2 className="text-[#c5a059]" />
                    <span className="font-black uppercase text-sm tracking-widest text-gray-400 group-hover:text-[#1b294b] transition">Varlıklar Takasbank Güvencesinde</span>
                </div>
                <div className="flex items-center gap-4 group">
                    <CheckCircle2 className="text-[#c5a059]" />
                    <span className="font-black uppercase text-sm tracking-widest text-gray-400 group-hover:text-[#1b294b] transition">Sermaye Piyasası Kurulu (SPK) Denetimi</span>
                </div>
                <div className="flex items-center gap-4 group">
                    <CheckCircle2 className="text-[#c5a059]" />
                    <span className="font-black uppercase text-sm tracking-widest text-gray-400 group-hover:text-[#1b294b] transition">Hafta İçi 24 Saat Uzman Desteği</span>
                </div>
             </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-12 rounded-[40px] shadow-xl border-b-8 border-[#c5a059]">
               <div className="text-5xl font-black text-[#1b294b] mb-2 tracking-tighter">100K+</div>
               <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Portföy Sahibi</div>
            </div>
            <div className="bg-[#1b294b] p-12 rounded-[40px] shadow-xl border-b-8 border-white">
               <div className="text-5xl font-black text-white mb-2 tracking-tighter">₺50M+</div>
               <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Hacim Payı</div>
            </div>
          </div>
        </div>
      </section>

      {/* Piyasalar / Hizmetler */}
      <section id="hizmetler" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-6">Piyasa Enstrümanları</h2>
              <p className="text-gray-400 font-medium italic text-lg">Tek platform üzerinden dünya borsalarına ve yerel pazarlara erişim sağlayın.</p>
            </div>
            <a href={REGISTER_URL} className="text-[#c5a059] font-black uppercase text-sm tracking-widest border-b-4 border-[#c5a059] pb-2">Tümünü İncele</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { t: "Hisse Senedi", i: <TrendingUp />, d: "BİST ve Global Pay Piyasaları" },
              { t: "VİOP / Futures", i: <PieChart />, d: "Kaldıraçlı ve Çift Yönlü İşlem" },
              { t: "Forex", i: <Globe />, d: "7/24 Döviz ve Emtia Ticareti" },
              { t: "Kripto Varlık", i: <Landmark />, d: "Dijital Varlık Yönetimi" }
            ].map((p, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl hover:bg-[#1b294b] group transition-all cursor-pointer">
                <div className="text-[#c5a059] mb-6 group-hover:scale-110 transition-transform">{p.i}</div>
                <h4 className="font-black text-gray-800 group-hover:text-white uppercase text-sm mb-2">{p.t}</h4>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 font-bold uppercase tracking-tighter">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="iletisim" className="bg-[#0a1428] text-white py-24 px-6 border-t border-[#c5a059]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
          <div>
             <div className="text-4xl font-light italic mb-8">Elit <span className="text-[#c5a059] font-black">Menkul</span></div>
             <p className="text-gray-500 text-sm leading-relaxed italic">
               Geleceğin yatırım dünyasını bugünün teknolojisiyle buluşturuyoruz. Sizin kazancınız, bizim itibarımızdır.
             </p>
          </div>
          <div className="space-y-8">
             <h5 className="font-black uppercase text-xs tracking-[0.3em] text-[#c5a059]">Bize Ulaşın</h5>
             <div className="space-y-4">
               <div className="flex items-center gap-4 hover:text-[#c5a059] transition cursor-pointer">
                  <Phone size={18} /> <span className="font-bold">{TELEFON}</span>
               </div>
               <div className="flex items-center gap-4 hover:text-[#c5a059] transition cursor-pointer">
                  <Mail size={18} /> <span className="font-bold">info@elitmenkultr.com</span>
               </div>
               <div className="flex items-center gap-4 text-gray-500 italic text-sm">
                  <Clock size={18} /> <span>Pzt - Cum: 09:00 - 18:00</span>
               </div>
             </div>
          </div>
          <div className="space-y-8">
             <h5 className="font-black uppercase text-xs tracking-[0.3em] text-[#c5a059]">Yasal Bilgilendirme</h5>
             <p className="text-[10px] text-gray-500 leading-relaxed uppercase font-bold tracking-tighter">
               Burada yer alan bilgiler genel niteliktedir. Yatırım danışmanlığı kapsamında değildir. Kayıplar sermayenizin tamamına ulaşabilir.
             </p>
          </div>
        </div>
        <div className="text-center mt-24 pt-12 border-t border-white/5">
           <p className="text-[10px] text-gray-600 font-black tracking-[0.4em] uppercase">© 2026 ELİT MENKUL DEĞERLER A.Ş. — TÜM HAKLARI SAKLIDIR.</p>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href={WHATSAPP_URL} target="_blank" className="fixed bottom-10 right-10 z-[999] bg-[#25d366] text-white p-5 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform active:scale-95">
        <MessageCircle size={32} />
      </a>
    </div>
  );
}