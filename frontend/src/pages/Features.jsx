import React from 'react';
import { Card } from '../components/ui/card';
import { FileText, Eye, Globe, MessageSquare, Shield, Zap } from 'lucide-react';
import { getContent } from '../data/mock';
import { useLanguage } from '../i18n';

const iconMap = {
  FileText,
  Eye,
  Globe,
  MessageSquare,
  Shield,
  Zap
};

export default function Features() {
  const { lang } = useLanguage();
  const { detailedFeatures } = getContent(lang);

  const copy = {
    en: {
      badge: '⚡ Features',
      titlePrefix: 'Detailed',
      titleEmphasis: 'Feature List',
      subtitle: 'Explore every AI-powered capability Avenia offers. Each feature is designed to accelerate your workflow.',
      securityTitle: 'Security & Infrastructure',
      performanceTitle: 'Performance & Limits',
      securityItems: [
        'Secure Firebase Storage: Your data is stored in an encrypted environment.',
        '256-bit SSL Encryption: Every data transfer stays protected.',
        'GDPR & KVKK Compliance: Privacy is treated as a first-class priority.',
        '99.9% Uptime: Guaranteed continuity of service.'
      ],
      performanceItems: [
        'Lightning-Fast Processing: Average response times of 2–5 seconds.',
        'File Size: 10 MB on Free, 100 MB on Premium.',
        'Language Support: TTS/STT in 50+ languages.',
        'Format Support: PDF, Word, PPT, JPG, PNG, MP4.'
      ]
    },
    tr: {
      badge: '⚡ Özellikler',
      titlePrefix: 'Detaylı',
      titleEmphasis: 'Özellik Listesi',
      subtitle: 'Avenia’nın sunduğu tüm AI özelliklerini keşfedin. Her özellik iş akışınızı hızlandırmak için tasarlandı.',
      securityTitle: 'Güvenlik ve Altyapı',
      performanceTitle: 'Performans ve Limitler',
      securityItems: [
        'Güvenli Firebase Depolama: Verileriniz şifreli ortamda tutulur.',
        '256-bit SSL Şifreleme: Tüm veri transferleri korunur.',
        'GDPR & KVKK Uyumu: Gizlilik önceliklidir.',
        '99.9% Çalışma Süresi: Hizmet sürekliliği.'
      ],
      performanceItems: [
        'Hızlı İşleme: Ortalama yanıt süresi 2–5 saniye.',
        'Dosya Boyutu: Ücretsiz 10 MB, Premium 100 MB.',
        'Dil Desteği: TTS/STT 50+ dil.',
        'Format Desteği: PDF, Word, PPT, JPG, PNG, MP4.'
      ]
    }
  };

  const t = copy[lang] || copy.en;

  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00c896]/20 border border-[#00c896]/30 mb-8">
            <span className="text-[#00c896] text-sm font-medium">{t.badge}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.titlePrefix} <span className="text-[#00c896]">{t.titleEmphasis}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
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
              {t.securityTitle}
            </h3>
            <ul className="space-y-4 text-gray-300">
              {t.securityItems.map((item) => (
                <li key={item} className="flex items-start">
                  <div className="w-2 h-2 bg-[#00c896] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Zap className="w-6 h-6 text-[#00c896] mr-3" />
              {t.performanceTitle}
            </h3>
            <ul className="space-y-4 text-gray-300">
              {t.performanceItems.map((item) => (
                <li key={item} className="flex items-start">
                  <div className="w-2 h-2 bg-[#00c896] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
