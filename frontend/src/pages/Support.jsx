import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { MessageCircle, Mail, BookOpen, Video, Download, ExternalLink } from 'lucide-react';

export default function Support() {
  const guides = [
    {
      title: "PDF Özetleme Rehberi",
      description: "Belgelerinizi nasıl etkili şekilde özetleyeceğinizi öğrenin",
      icon: "📄",
      readTime: "3 dk"
    },
    {
      title: "Görsel/Video Analizi",
      description: "AI vs gerçek içerik tespiti nasıl çalışır?",
      icon: "🔍", 
      readTime: "5 dk"
    },
    {
      title: "TTS/STT Kullanımı",
      description: "Ses-metin dönüşümü için ipuçları ve püf noktaları",
      icon: "🔊",
      readTime: "4 dk"
    }
  ];

  const supportChannels = [
    {
      title: "Canlı Destek",
      description: "Premium üyeler için 7/24 canlı destek",
      icon: MessageCircle,
      action: "Sohbet Başlat",
      available: "Premium üyeler için"
    },
    {
      title: "E-posta Desteği",
      description: "Tüm kullanıcılar için e-posta desteği",
      icon: Mail,
      action: "E-posta Gönder",
      available: "24 saat içinde yanıt"
    },
    {
      title: "Video Eğitimler",
      description: "Adım adım kullanım kılavuzları",
      icon: Video,
      action: "Videolara Git",
      available: "Ücretsiz erişim"
    }
  ];

  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00c896]/20 border border-[#00c896]/30 mb-8">
            <span className="text-[#00c896] text-sm font-medium">🤝 Destek</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Destek <span className="text-[#00c896]">Merkezi</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Size yardımcı olmak için buradayız. Rehberlerimizi inceleyin veya 
            doğrudan bizimle iletişime geçin.
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportChannels.map((channel, index) => {
            const IconComponent = channel.icon;
            
            return (
              <Card key={index} className="bg-gray-800/30 border-gray-700/50 p-8 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-[#00c896]" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <p className="text-[#00c896] text-sm font-medium mb-6">{channel.available}</p>
                
                <Button 
                  className="w-full bg-[#00c896] hover:bg-[#00b085] text-white py-2 rounded-xl font-semibold transition-all duration-200"
                >
                  {channel.action}
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Quick Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Hızlı <span className="text-[#00c896]">Rehberler</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700/50 p-6 hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-3xl">{guide.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{guide.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#00c896] text-xs font-medium">{guide.readTime} okuma</span>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Sık Sorulan <span className="text-[#00c896]">Sorular</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800/30 border-gray-700/50 p-6">
              <h3 className="text-white font-semibold mb-3">Verilerim güvende mi?</h3>
              <p className="text-gray-300 text-sm">
                Evet, verileriniz Firebase güvenli depolama ile şifrelenir ve işlem sonrası silinir. 
                GDPR ve KVKK standartlarına uygunuz.
              </p>
            </Card>
            
            <Card className="bg-gray-800/30 border-gray-700/50 p-6">
              <h3 className="text-white font-semibold mb-3">Ücretsiz vs Premium farkı?</h3>
              <p className="text-gray-300 text-sm">
                Ücretsizde günlük limitler var. Premium ile sınırsız kullanım, öncelikli işlem 
                ve canlı destek alırsınız.
              </p>
            </Card>
            
            <Card className="bg-gray-800/30 border-gray-700/50 p-6">
              <h3 className="text-white font-semibold mb-3">Hangi dosya türleri destekleniyor?</h3>
              <p className="text-gray-300 text-sm">
                PDF, Word, PowerPoint, Excel, TXT dosyaları ile JPEG, PNG, GIF, MP4, AVI 
                formatlarını destekliyoruz.
              </p>
            </Card>
            
            <Card className="bg-gray-800/30 border-gray-700/50 p-6">
              <h3 className="text-white font-semibold mb-3">API nasıl kullanırım?</h3>
              <p className="text-gray-300 text-sm">
                Premium üyelikle API anahtarınızı alabilir, RESTful API'mizi kullanarak 
                kendi uygulamalarınıza entegre edebilirsiniz.
              </p>
            </Card>
          </div>
        </div>

        {/* Contact Support */}
        <Card className="bg-gradient-to-r from-gray-800/40 to-gray-800/60 p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sorunuz Bulunamadı mı?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Özel durumunuz için bizimle doğrudan iletişime geçin
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#00c896] hover:bg-[#00b085] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#00c896]/25"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Canlı Destek
            </Button>
            
            <Button 
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-700 px-8 py-3 rounded-xl font-semibold transition-all duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              E-posta Gönder
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-[#00c896] font-bold text-lg">&lt; 1 saat</div>
              <div className="text-gray-400 text-sm">Canlı destek yanıt süresi</div>
            </div>
            <div className="text-center">
              <div className="text-[#00c896] font-bold text-lg">&lt; 24 saat</div>
              <div className="text-gray-400 text-sm">E-posta yanıt süresi</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}