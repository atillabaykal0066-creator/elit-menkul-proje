"use client";

import React, { useState } from 'react';
// Gerekli tüm ikonları ekliyoruz (Eksiltmemek için lucide-react yüklü olmalıdır)
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
  Minus
} from 'lucide-react';

export default function ElitMenkulProfesyonelPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Kurumsal Bilgiler (image_9.png'daki metne uygun şekilde düzenlendi)
  const WHATSAPP_URL = "https://wa.me/905391046011"; 
  const REGISTER_URL = "https://sube.elitmenkulonline.com/register";
  const TELEFON = "+90 539 104 60 11";

  const faqs = [
    { q: "Hesap Açılış Süreci Nasıl İlerler?", a: "Dijital kayıt formumuzu doldurmanızın ardından müşteri temsilcimiz sizinle iletişime geçer ve hesabınız dakikalar içinde aktif edilir." },
    { q: "Varlıklarım Güvende mi?", a: "Tüm varlıklarınız Takasbank güvencesinde, kurumumuzdan ayrı hesaplarda saklanır ve devlet denetimi altındadır." },
    { q: "Destek Hizmetlerinden Nasıl Yararlanabilirim?", a: "Hafta içi her gün uzman yatırım danışmanlarımıza WhatsApp, telefon veya e-posta yoluyla anlık olarak ulaşabilirsiniz." }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1b294b] font-sans selection:bg-[#c5a059] selection:text-white">
      
      {/* 1. ÜST BİLGİ VE İLETİŞİM ÇUBUĞU (Kurumsal Güven İçin) */}
      <div className="bg-[#1b294b] text-white py-2 px-6 md:px-12 text-[10px] flex justify-between items-center border-b border-white/5 tracking-[0.1em] font-bold">
        <div className="flex gap-6">
          <a href={`tel:${TELEFON}`} className="flex items-center gap-1.5 hover:text-[#c5a059] transition">
            <Phone size={12} className="text-[#c5a059]" /> {TELEFON}
          </a>
          <span className="hidden sm:flex items-center gap-1.5 opacity-80">
            <Mail size={12} className="text-[#c5a059]" /> info@elitmenkultr.com
          </span>
        </div>
        <div className="flex items-center gap-1.5 opacity-80 uppercase font-black">
          <Clock size={12} className="text-[#c5a059]" /> 2003'TEN BERİ İSTANBUL
        </div>
      </div>

      {/* 2. HEADER / LOGO ALANI */}
      <header className="bg-white sticky top-0 z-[100] py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          {/* image_9.png'daki kurumsal "E" logosunun stilize hali */}
          <div className="w-10 h-10 bg-[#1b294b] flex items-center justify-center rounded-lg font-black text-[#c5a059] text-xl italic shadow-lg">E</div>
          <div className="text-2xl font-black tracking-tighter leading-none uppercase">ELİT<br/><span className="text-[#c5a059] text-lg tracking-[0.1em]">MENKUL</span></div>
        </div>
        <div className="flex items-center gap-3">
          <a href={REGISTER_URL} target="_blank" className="bg-[#1b294b] text-white px-8 py-3 rounded-md font-bold text-xs tracking-widest hover:bg-[#c5a059] transition shadow-md flex items-center gap-2 uppercase">
            WEB TRADER <MousePointer2 size={16} />
          </a>
        </div>
      </header>

      {/* 3. HERO SECTION (image_9.png'daki bölümün profesyonelce detaylandırılmış hali) */}
      <section className="relative h-[700px] flex items-center px-6 md:px-24 bg-[#0a1428] overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428] via-[#0a1428]/70 to-transparent z-10"></div>
        {/* image_9.png'daki arka planın dokusal hissi için hafif bir desen */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNjNWExNTkiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMCAwaDg0djI0SDBWMHptMjQgMjRoMjR2MjRIMjRWMjR6TTAgMjRoMjR2MjRIMFYyNHptMjQgMEgwaDI0djI0SDI0VjI0eiIvPjwvZz48L2c+PC9zdmc+')]"></div>

        <div className="relative z-20 max-w-5xl">
          <div className="w-20 h-1 bg-[#c5a059] mb-8"></div>
          {/* image_9.png'daki ana başlık ve renkler */}
          <h1 className="text-6xl md:text-9xl font-black mb-8 leading-tight uppercase italic tracking-tighter">
            Yatırımda <br/><span className="text-[#c5a059]">Elit</span> <br/>Standartlar
          </h1>
          {/* image_9.png'daki açıklamanın profesyonelce detaylandırılmış hali */}
          <p className="text-gray-300 text-xl max-w-3xl mb-12 font-medium italic leading-relaxed border-l-4 border-[#c5a059] pl-6">
            Beklemeye son! İstanbul'un finans merkezindeki 20 yıllık tecrübemizle; T+0 likidite hızı, sıfır komisyon avantajı ve piyasa düşerken kazandıran çift yönlü işlem modelleriyle sermayenizi Elit Menkul güvencesiyle, profesyonelce yönetin.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href={WHATSAPP_URL} target="_blank" className="bg-[#c5a059] text-white px-16 py-6 rounded-md font-black text-sm uppercase tracking-widest hover:bg-white hover:text-[#1b294b] transition-all shadow-2xl">
              Hesabınızı Hemen Aktif Edin
            </a>
            <button onClick={() => setActiveModal('iletisim')} className="border-2 border-white/20 text-white px-12 py-6 rounded-md font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
              <Phone size={18}/> Bizi Arayın
            </button>
          </div>
        </div>
      </section>

      {/* 4. TEMEL AVANTAJLAR (Güven Artırıcı Bölüm) */}
      <section className="py-32 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4 text-[#1b294b]">Güvenilir Çözüm Ortağınız</h2>
            <div className="w-24 h-2 bg-[#c5a059] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Shield size={48} className="text-[#c5a059]" />, title: "Kurumsal Güvence", desc: "Takasbank saklama güvencesi ve SPK denetimine tabi, şeffaf aracı kurum hizmeti." },
              { icon: <ZapOff size={48} className="text-[#c5a059]" />, title: "Yüksek Hız (T+0)", desc: "Satış tutarını aynı gün nakit olarak kullanın, piyasa fırsatlarını kaçırmayın." },
              { icon: <ArrowDownUp size={48} className="text-[#c5a059]" />, title: "Çift Yönlü Piyasa", desc: "Piyasa sadece yükselirken değil, düşerken de kazanabileceğiniz işlem modelleri." }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-black uppercase mb-4 italic text-[#1b294b]">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium italic text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GÜVENLİK VE LİSANS VURGUSU */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
             <h2 className="text-4xl font-black uppercase italic mb-8 border-l-8 border-[#1b294b] pl-6 text-[#1b294b]">Mevzuata Tam Uyum</h2>
             <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
                Elit Menkul Değerler A.Ş., Sermaye Piyasası Kurulu (SPK) tarafından lisanslanmış ve düzenli olarak denetlenen, geniş yetkili bir aracı kurumdur. Yatırımcılarımızın haklarını en üst seviyede koruma taahhüdümüz, kurumsal kültürümüzün temelini oluşturur.
             </p>
             <div className="flex items-center gap-3 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
               <Shield className="text-green-500" />
               <span className="font-bold text-gray-800">Tüm varlıklarınız Takasbank nezdinde, isminize özel saklanır.</span>
             </div>
          </div>
          <div className="w-full md:w-auto grid grid-cols-2 gap-4">
             {[
              { label: "Kuruluş", value: "2003" },
              { label: "Denetim", value: "SPK" },
              { label: "Saklama", value: "Takasbank" },
              { label: "Şube", value: "İstanbul" }
             ].map(item => (
                <div key={item.label} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center">
                   <div className="text-5xl font-black text-[#1b294b] mb-1 tracking-tighter">{item.value}</div>
                   <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.label}</div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. SIK SORULAN SORULAR */}
      <section className="py-32 px-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4 text-[#1b294b]">Merak Edilenler</h2>
            <div className="w-16 h-1 bg-[#c5a059] mx-auto"></div>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:border-[#c5a059]/20 transition">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-7 text-left group"
                >
                  <span className="font-bold text-[#1b294b] uppercase text-sm">{faq.q}</span>
                  {openFaq === index ? <Minus size={20} className="text-[#c5a059]" /> : <Plus size={20} className="text-gray-400 group-hover:text-[#c5a059]" />}
                </button>
                {openFaq === index && (
                  <div className="p-7 bg-gray-50 text-gray-600 border-t border-gray-100 italic text-sm animate-in fade-in duration-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer id="iletisim" className="bg-[#1b294b] text-white py-20 px-6 mt-auto">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center gap-2 justify-center mb-4">
              <div className="w-10 h-10 bg-[#c5a059] flex items-center justify-center rounded-lg font-black text-[#1b294b] text-xl italic shadow-lg">E</div>
              <div className="text-3xl font-black mb-4 uppercase italic tracking-tighter">ELİT <span className="text-[#c5a059]">MENKUL</span></div>
          </div>
          <p className="text-[11px] text-gray-500 uppercase tracking-[0.2em] font-bold">© 2026 ELİT MENKUL DEĞERLER A.Ş. — TÜM HAKLARI SAKLIDIR.</p>
        </div>
      </footer>

      {/* MODAL: İletişim */}
      {activeModal === 'iletisim' && (
        <div className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-6 animate-in fade-in" onClick={() => setActiveModal(null)}>
          <div className="bg-white p-12 rounded-3xl max-w-lg w-full relative shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 text-gray-400 hover:text-black transition">
              <X size={24} />
            </button>
            <h3 className="text-3xl font-black uppercase italic mb-8 text-[#1b294b]">Bizi Arayın</h3>
            <div className="space-y-6 text-lg">
                <a href={`tel:${TELEFON}`} className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl hover:bg-[#c5a059]/10 transition">
                  <Phone className="text-[#c5a059]" size={24}/> <span className="font-bold text-gray-900">{TELEFON}</span>
                </a>
            </div>
          </div>
        </div>
      )}

      {/* SABİT WHATSAPP BUTONU */}
      <a href={WHATSAPP_URL} target="_blank" className="fixed bottom-6 right-6 z-[999] bg-[#25d366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95">
        <MessageCircle size={30} />
      </a>
    </div>
  );
}