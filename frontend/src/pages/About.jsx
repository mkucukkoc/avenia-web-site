import React from 'react';
import { Card } from '../components/ui/card';
import { Target, Eye, Heart, Users } from 'lucide-react';
import { teamMembers } from '../data/mock';

export default function About() {
  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00c896]/20 border border-[#00c896]/30 mb-8">
            <span className="text-[#00c896] text-sm font-medium">🏢 Şirket</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-[#00c896]">Avenia</span> Hakkında
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Yapay zeka teknolojilerini herkes için erişilebilir kılma misyonuyla yola çıktık. 
            Türkiye'nin öncü AI asistan platformunu geliştiriyoruz.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Hikayemiz</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Avenia, 2024 yılında Türkiye'de yapay zeka teknolojilerini günlük yaşama entegre etme 
                vizyonuyla kuruldu. Ekibimiz, yıllarca büyük teknoloji şirketlerinde çalışmış 
                deneyimli mühendisler ve araştırmacılardan oluşuyor.
              </p>
              <p>
                İlk günden itibaren amacımız, karmaşık AI teknolojilerini basit ve kullanıcı dostu 
                arayüzlerle sunmak oldu. Belge özetlemeden görsel analizine, ses işlemeden metin 
                üretimine kadar geniş bir yelpazede hizmet veriyoruz.
              </p>
              <p>
                Bugün binlerce kullanıcının günlük iş akışlarını kolaylaştırıyor, 
                verimliliğini artırıyoruz. Geleceğe dönük vizyonumuz ise AI'ı her kesimden 
                insanın hayatına dokunacak şekilde demokratikleştirmek.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-gray-800/30 border-gray-700/50 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-[#00c896]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">1000+</div>
                  <div className="text-gray-400">Aktif Kullanıcı</div>
                </div>
              </div>
            </Card>
            
            <Card className="bg-gray-800/30 border-gray-700/50 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-[#00c896]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-gray-400">İşlenen Dosya</div>
                </div>
              </div>
            </Card>
            
            <Card className="bg-gray-800/30 border-gray-700/50 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-[#00c896]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4.9/5</div>
                  <div className="text-gray-400">Kullanıcı Memnuniyeti</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="bg-gray-800/30 border-gray-700/50 p-8 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-[#00c896]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Misyonumuz</h3>
            <p className="text-gray-300 leading-relaxed">
              Yapay zeka teknolojilerini herkes için erişilebilir, anlaşılır ve faydalı hale getirerek 
              toplumsal verimliliği artırmak.
            </p>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50 p-8 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-[#00c896]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Vizyonumuz</h3>
            <p className="text-gray-300 leading-relaxed">
              Türkiye'nin önde gelen AI platformu olarak küresel ölçekte teknoloji lideri olmak ve 
              AI alanında öncü çözümler geliştirmek.
            </p>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50 p-8 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-[#00c896]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Değerlerimiz</h3>
            <p className="text-gray-300 leading-relaxed">
              Şeffaflık, kullanıcı odaklılık, sürekli öğrenme ve etik AI geliştirme prensipleriyle 
              hareket ediyoruz.
            </p>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Kurucu <span className="text-[#00c896]">Ekibimiz</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700/50 p-8 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#00c896] font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Values in Detail */}
        <Card className="bg-gradient-to-r from-gray-800/40 to-gray-800/60 p-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Çalışma <span className="text-[#00c896]">Prensipleri</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">🔒 Gizlilik Önceliği</h3>
                <p className="text-gray-300">
                  Kullanıcı verilerinin korunması bizim için en önemli konudur. 
                  GDPR ve KVKK standartlarında veri işleme gerçekleştiriyoruz.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">⚡ Sürekli İnovasyon</h3>
                <p className="text-gray-300">
                  AI teknolojilerindeki gelişmeleri yakından takip ediyor, 
                  en son teknolojileri platformumuza entegre ediyoruz.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">🌍 Türkçe Odaklı</h3>
                <p className="text-gray-300">
                  Türkçe dil işleme konusunda uzmanlaşarak yerel ihtiyaçlara 
                  en uygun çözümleri geliştiriyoruz.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">🤝 Topluluk Destekli</h3>
                <p className="text-gray-300">
                  Kullanıcı geri bildirimlerini dinliyor, önerilerini ürün 
                  geliştirme sürecine dahil ediyoruz.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}