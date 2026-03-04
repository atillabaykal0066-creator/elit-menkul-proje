"use client";

import React, { useState } from 'react';
import { 
  Shield, 
  BarChart3, 
  Globe, 
  MousePointer2, 
  ChevronRight, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  CheckCircle2,
  X,
  Users,
  Plus,
  Minus,
  Zap,
  Building2,
  History,
  Award
} from 'lucide-react';

export default function ElitMenkulFinalMaster() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // GÜNCEL İLETİŞİM BİLGİLERİ
  const REGISTER_URL = "https://sube.elitmenkulonline.com/register";
  const WHATSAPP_URL = "https://wa.me/905391046011"; 
  const TELEFON = "+90 539 104 60 11";

  const serviceDetails = {
    hisse: {
      title: "Hisse Senetleri & T+0 Hızı",
      content: "Borsa İstanbul ve dünya piyasalarında T+2 bekleme süresi olmadan işlem yapın. Sattığınız hissenin tutarı anında nakit bakiyenize geçer. Hızlı yatırımın tek adresi."
    },
    viop: {
      title: "VİOP & Çift Yönlü Kazanç",
      content: "Piyasalar düşerken de kazanmak mümkün! Açığa satış ve kaldıraçlı işlem seçenekleriyle her türlü piyasa koşulunda portföyünüzü yönetin."
    },
    guven: {
      title: "Sıfır Komisyon & Tam Güven",
      content: "Yatırımlarınızda %0 komisyon avantajıyla maliyetleri sıfırlayın. SPK lisansı ve Takasbank güvencesiyle varlıklarınız her zaman emniyette."
    }
  };

  const faqs = [
    { q: "Hesap Açılış Süreci Nasıl İlerler?", a: "Kayıt ol butonuna basarak dijital formumuzu doldurmanızın ardından müşteri temsilcimiz sizinle iletişime geçer ve hesabınız dakikalar içinde aktif edilir." },
    { q: "Uyum (AML / KYC) Süreçleri Nasıl Uygulanır?", a: "Uluslararası finansal standartlara uygun olarak kimlik doğrulama süreçleri güvenli altyapımız üzerinden tamamen dijital olarak gerçekleştirilir." },
    { q: "Yatırımcı Varlıklarının Güvenliği Nasıl Sağlanır?", a: "Varlıklarınız Takasbank güvencesinde, kurumumuzdan ayrı hesaplarda saklanır ve devlet güvencesi altındadır." },
    { q: "Destek Hizmetlerinden Nasıl Yararlanabilirim?", a: "Hafta içi her gün uzman yatırım danışmanlarımıza WhatsApp, telefon veya e-posta yoluyla anlık olarak ulaşabilirsiniz." },
    { q: "ELİT YATIRIM Yatırım Danışmanlığı Hizmeti Verir Mi?", a: "Evet, profesyonel analiz ekibimiz piyasa bültenleri ve kişiye özel stratejik danışmanlık hizmeti sunmaktadır." }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1b294b] font-sans scroll-smooth">
      
      {/* MODAL */}
      {activeModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-[#1b294b]/80 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-in zoom-in-95 duration-200">
            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-gray-400 hover:text-[#1b294b]"><X size={24} /></button>
            <h3 className="text-2xl font-black mb-4 flex items-center gap-2"><CheckCircle2 className="text-[#c5a059]" /> {serviceDetails[activeModal as keyof typeof serviceDetails].title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6 italic">{serviceDetails[activeModal as keyof typeof serviceDetails].content}</p>
            <a href={REGISTER_URL} target="_blank" className="block w-full bg-[#1b294b] text-white text-center py-4 rounded-lg font-bold hover:bg-[#c5a059] transition uppercase text-xs tracking-widest">Hemen Ücretsiz Başla</a>
          </div>
        </div>
      )}

      {/* WHATSAPP FLOAT - GÜNCEL NUMARA: +90 539 104 60 11 */}
      <a href={WHATSAPP_URL} target="_blank" className="fixed bottom-6 right-6 z-[999] bg-[#25d366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"><MessageCircle size={30} /></a>

      {/* ÜST BAR */}
      <div className="bg-[#1b294b] text-white py-2 px-6 md:px-12 text-[10px] flex justify-between items-center border-b border-white/5 tracking-[0.1em] font-bold">
        <div className="flex gap-6">
          <a href={`tel:${TELEFON.replace(/\s/g, '')}`} className="flex items-center gap-1.5 opacity-80 hover:text-[#c5a059] transition"><Phone size={12} className="text-[#c5a059]" /> {TELEFON}</a>
          <span className="flex items-center gap-1.5 opacity-80"><Mail size={12} className="text-[#c5a059]" /> info@elitmenkultr.com</span>
        </div>
        <div className="hidden md:flex items-center gap-1.5 opacity-80 uppercase font-black"><Clock size={12} className="text-[#c5a059]" /> 2003'ten beri istanbul</div>
      </div>

      {/* HEADER */}
      <header className="bg-white sticky top-0 z-[100] py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1b294b] flex items-center justify-center rounded-lg font-black text-[#c5a059] text-xl italic shadow-lg">E</div>
          <div className="text-2xl font-black tracking-tighter leading-none uppercase">ELİT<br/><span className="text-[#c5a059] text-lg tracking-[0.1em]">MENKUL</span></div>
        </div>
        <nav className="hidden lg:flex gap-10 font-bold text-[11px] uppercase tracking-[0.2em]">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[#c5a059]">Anasayfa</button>
          <a href="#hizmetler" className="hover:text-[#c5a059] transition">Hizmetler</a>
          <a href="#kurumsal" className="hover:text-[#c5a059] transition">Kurumsal</a>
          <a href="#sss" className="hover:text-[#c5a059] transition">S.S.S</a>
        </nav>
        <a href={REGISTER_URL} target="_blank" className="bg-[#1b294b] text-white px-8 py-3 rounded-md font-bold text-xs tracking-widest hover:bg-[#c5a059] transition shadow-md flex items-center gap-2 uppercase">WEB TRADER <MousePointer2 size={16} /></a>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-[650px] flex items-center px-6 md:px-24 bg-[#0a1428] overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428] via-[#0a1428]/60 to-transparent z-10"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1611974714658-058f40da23bb?q=80&w=2070')] bg-cover bg-center"></div>
        <div className="relative z-20 max-w-4xl">
          <div className="w-20 h-1 bg-[#c5a059] mb-8"></div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight uppercase italic tracking-tighter">Yatırımda <br/><span className="text-[#c5a059]">Hız</span> Ve Güven</h1>
          <p className="text-gray-300 text-xl max-w-2xl mb-10 font-light italic leading-relaxed">İstanbul finans piyasalarındaki 20 yılı aşkın tecrübemizle, T+0 hızı ve %0 komisyon avantajıyla yanınızdayız.</p>
          <div className="flex flex-wrap gap-5">
            <a href={REGISTER_URL} target="_blank" className="bg-[#c5a059] text-white px-12 py-5 rounded-md font-black text-sm uppercase tracking-widest hover:bg-white hover:text-[#1b294b] transition-all">Hemen Kayıt Ol</a>
            <a href={WHATSAPP_URL} target="_blank" className="border-2 border-white/20 text-white px-12 py-5 rounded-md font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2"><MessageCircle size={18}/> Canlı Destek</a>
          </div>
        </div>
      </section>

      {/* İSTATİSTİKLER */}
      <section className="py-24 px-6 bg-white border-b">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 text-center items-center">
          <div className="space-y-4">
            <Users className="mx-auto text-gray-300" size={64} />
            <div className="text-6xl font-black text-[#1b294b] tracking-tighter">100K+</div>
            <div className="text-gray-500 font-bold uppercase tracking-[0.3em] text-sm">Premium Yatırımcı</div>
          </div>
          <div className="space-y-4">
            <BarChart3 className="mx-auto text-gray-300" size={64} />
            <div className="text-6xl font-black text-[#1b294b] tracking-tighter">₺50M+</div>
            <div className="text-gray-500 font-bold uppercase tracking-[0.3em] text-sm">Günlük İşlem Hacmi</div>
          </div>
        </div>
      </section>

      {/* HİZMET KARTLARI */}
      <section id="hizmetler" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div onClick={() => setActiveModal('hisse')} className="bg-white p-12 shadow-sm border-b-4 border-[#c5a059] hover:-translate-y-3 cursor-pointer transition-all duration-300 group">
            <BarChart3 className="text-[#c5a059] mb-10 group-hover:scale-110 transition-transform" size={60} />
            <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter italic">Hisse Senetleri</h3>
            <p className="text-gray-500 mb-10 text-sm leading-relaxed font-medium">BIST ve Uluslararası piyasalarda profesyonel işlem desteği. T+0 ile anında likidite.</p>
            <span className="text-[#1b294b] font-black text-xs flex items-center gap-1 group-hover:text-[#c5a059] transition-colors">İNCELE <ChevronRight size={14}/></span>
          </div>

          <div onClick={() => setActiveModal('viop')} className="bg-white p-12 shadow-sm border-b-4 border-[#1b294b] hover:-translate-y-3 cursor-pointer transition-all duration-300 group">
            <Globe className="text-[#1b294b] mb-10 group-hover:scale-110 transition-transform" size={60} />
            <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter italic">VİOP & FX</h3>
            <p className="text-gray-500 mb-10 text-sm leading-relaxed font-medium">Kaldıraçlı piyasalarda risk yönetimi ve arbitraj fırsatları. Çift yönlü işlem avantajı.</p>
            <span className="text-[#1b294b] font-black text-xs flex items-center gap-1 group-hover:text-[#c5a059] transition-colors">İNCELE <ChevronRight size={14}/></span>
          </div>

          <div onClick={() => setActiveModal('guven')} className="bg-white p-12 shadow-sm border-b-4 border-[#c5a059] hover:-translate-y-3 cursor-pointer transition-all duration-300 group">
            <Shield className="text-[#c5a059] mb-10 group-hover:scale-110 transition-transform" size={60} />
            <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter italic">Güvenli Liman</h3>
            <p className="text-gray-500 mb-10 text-sm leading-relaxed font-medium">SPK denetiminde, yatırımcı haklarını gözeten şeffaf ve %0 komisyonlu yapı.</p>
            <span className="text-[#1b294b] font-black text-xs flex items-center gap-1 group-hover:text-[#c5a059] transition-colors">İNCELE <ChevronRight size={14}/></span>
          </div>
        </div>
      </section>

      {/* SSS BÖLÜMÜ */}
      <section id="sss" className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">Sık Sorulan Sorular</h2>
            <p className="text-gray-400 mt-4 text-xs font-bold uppercase tracking-[0.4em]">Şeffaf Yatırımın Adresi ELİT YATIRIM</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:border-[#c5a059] transition-colors">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-7 bg-white hover:bg-gray-50 transition text-left"
                >
                  <span className="font-black text-[#1b294b] text-sm uppercase tracking-tight">{faq.q}</span>
                  {openFaq === index ? <Minus size={20} className="text-[#c5a059]" /> : <Plus size={20} className="text-gray-400" />}
                </button>
                {openFaq === index && (
                  <div className="p-7 bg-gray-50 text-gray-600 border-t border-gray-100 leading-relaxed italic text-sm animate-in slide-in-from-top-2 duration-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1b294b] text-white py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <div className="text-3xl font-black mb-4 uppercase italic tracking-tighter">ELİT <span className="text-[#c5a059]">MENKUL</span></div>
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mb-6">İstanbul Kuruluşlu • 2003'ten Günümüze</p>
            <div className="flex gap-4">
               <a href={WHATSAPP_URL} target="_blank" className="p-4 bg-white/5 rounded-full hover:bg-[#25d366] transition-colors"><MessageCircle size={20}/></a>
               <a href={`mailto:info@elitmenkultr.com`} className="p-4 bg-white/5 rounded-full hover:bg-[#c5a059] transition-colors"><Mail size={20}/></a>
            </div>
          </div>
          <div className="text-[11px] text-gray-500 leading-loose border-l border-white/10 pl-8 max-w-2xl uppercase tracking-widest italic font-medium">
            <span className="text-gray-300 block mb-2 font-black">Yasal Bilgilendirme</span>
            Burada yer alan yatırım bilgi, yorum ve tavsiyeleri yatırım danışmanlığı kapsamında değildir. 2003 yılından bu yana İstanbul merkezli hizmet veren ELİT MENKUL, SPK mevzuatına uygun şekilde faaliyet göstermektedir. Varlıklarınız Takasbank güvencesindedir.
            <br/><br/>© 2026 ELİT MENKUL DEĞERLER A.Ş. — TÜM HAKLARI SAKLIDIR.
          </div>
        </div>
      </footer>
    </div>
  );
}