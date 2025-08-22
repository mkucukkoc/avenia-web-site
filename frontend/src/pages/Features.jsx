import React from 'react';
import { Card } from '../components/ui/card';
import { FileText, Eye, Globe, MessageSquare, Shield, Zap } from 'lucide-react';
import { detailedFeatures } from '../data/mock';

const iconMap = {
  FileText,
  Eye,
  Globe,
  MessageSquare,
  Shield,
  Zap
};

export default function Features() {
  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00c896]/20 border border-[#00c896]/30 mb-8">
            <span className="text-[#00c896] text-sm font-medium">⚡ Özellikler</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Detaylı <span className="text-[#00c896]">Özellik Listesi</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Avenia'nın sunduğu tüm yapay zeka destekli özelliklerini keşfedin. 
            Her özellik, iş akışınızı hızlandırmak için tasarlandı.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {detailedFeatures.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            
            return (
              <Card 
                key={index}
                className="group bg-gray-800/50 border-gray-700/50 hover:border-[#00c896]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00c896]/10 hover:-translate-y-2 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden"
              >
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00c896]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="relative z-10 w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00c896]/30 transition-colors">
                  <IconComponent className="w-8 h-8 text-[#00c896]" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#00c896] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00c896] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
              </Card>
            );
          })}
        </div>

        {/* Technical Specs */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="bg-gray-800/30 border-gray-700/50 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 text-[#00c896] mr-3" />
              Güvenlik & Altyapı
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#00c896] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>Firebase Güvenli Depolama:</strong> Verileriniz şifreli olarak saklanır</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#00c896] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>256-bit SSL Şifreleme:</strong> Tüm veri aktarımları korunur</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#00c896] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>GDPR & KVKK Uyumlu:</strong> Gizliliğiniz bizim önceliğimiz</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#00c896] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>99.9% Uptime:</strong> Kesintisiz hizmet garantisi</span>
              </li>
            </ul>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Zap className="w-6 h-6 text-[#00c896] mr-3" />
              Performans & Limits
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#00c896] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>Hızlı İşlem:</strong> Ortalama 2-5 saniye yanıt süresi</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#00c896] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>Dosya Boyutu:</strong> Ücretsizde 10MB, Premium'da 100MB</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#00c896] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>Dil Desteği:</strong> 50+ dilde TTS/STT</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#00c896] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>Format Desteği:</strong> PDF, Word, PPT, JPG, PNG, MP4</span>
              </li>
            </ul>
          </Card>
        </div>

     
      </div>
    </div>
  );
}