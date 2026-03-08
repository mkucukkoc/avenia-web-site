import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { MessageCircle, Mail, BookOpen, Video, Download, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Support() {
  const { lang } = useLanguage();

  const copy = {
    en: {
      badge: '🤝 Support',
      titlePrefix: 'Support',
      titleEmphasis: 'Hub',
      subtitle: "We're here to help. Browse our guides or reach out to us directly whenever you need assistance.",
      channels: [
        {
          title: 'Live Chat',
          description: '24/7 live support for Premium members.',
          icon: MessageCircle,
          action: 'Start a Chat',
          available: 'Available to Premium'
        },
        {
          title: 'Email Support',
          description: 'Email assistance for every user.',
          icon: Mail,
          action: 'Send an Email',
          available: 'Replies within 24 hours'
        },
        {
          title: 'Video Tutorials',
          description: 'Step-by-step walkthroughs for every feature.',
          icon: Video,
          action: 'Watch Videos',
          available: 'Free access'
        }
      ],
      guidesTitle: 'Quick Guides',
      guides: [
        {
          title: 'PDF Summarization Guide',
          description: 'Learn how to condense documents effectively.',
          icon: '📄',
          readTime: '3 min'
        },
        {
          title: 'Image & Video Analysis',
          description: 'Understand how AI vs real detection works.',
          icon: '🔍',
          readTime: '5 min'
        },
        {
          title: 'TTS/STT Best Practices',
          description: 'Tips and tricks for speech-to-text and text-to-speech.',
          icon: '🔊',
          readTime: '4 min'
        }
      ],
      resourcesTitle: 'Resources',
      resources: [
        { title: 'Documentation', description: 'API references and developer guides', icon: BookOpen },
        { title: 'Video Library', description: 'Tutorials and feature demos', icon: Video },
        { title: 'Downloads', description: 'Brand assets and media kit', icon: Download }
      ],
      contactTitle: 'Need more help?',
      contactBody: 'Contact us directly and we’ll help with your specific scenario.',
      contactButton: 'Contact Support'
    },
    tr: {
      badge: '🤝 Destek',
      titlePrefix: 'Destek',
      titleEmphasis: 'Merkezi',
      subtitle: 'Yardım için buradayız. Rehberlere göz atın veya doğrudan bizimle iletişime geçin.',
      channels: [
        {
          title: 'Canlı Sohbet',
          description: 'Premium üyeler için 7/24 canlı destek.',
          icon: MessageCircle,
          action: 'Sohbet Başlat',
          available: 'Premium için mevcut'
        },
        {
          title: 'E-posta Desteği',
          description: 'Tüm kullanıcılar için e-posta desteği.',
          icon: Mail,
          action: 'E-posta Gönder',
          available: '24 saat içinde yanıt'
        },
        {
          title: 'Video Eğitimler',
          description: 'Her özellik için adım adım anlatımlar.',
          icon: Video,
          action: 'Videoları İzle',
          available: 'Ücretsiz erişim'
        }
      ],
      guidesTitle: 'Hızlı Rehberler',
      guides: [
        {
          title: 'PDF Özetleme Rehberi',
          description: 'Belgeleri etkili şekilde özetlemeyi öğrenin.',
          icon: '📄',
          readTime: '3 dk'
        },
        {
          title: 'Görsel ve Video Analizi',
          description: 'AI vs gerçek tespitinin nasıl çalıştığını öğrenin.',
          icon: '🔍',
          readTime: '5 dk'
        },
        {
          title: 'TTS/STT İpuçları',
          description: 'Ses‑metin dönüşümü için pratik öneriler.',
          icon: '🔊',
          readTime: '4 dk'
        }
      ],
      resourcesTitle: 'Kaynaklar',
      resources: [
        { title: 'Dokümantasyon', description: 'API referansları ve geliştirici rehberi', icon: BookOpen },
        { title: 'Video Arşivi', description: 'Eğitimler ve özellik demoları', icon: Video },
        { title: 'İndirilebilirler', description: 'Marka varlıkları ve medya kiti', icon: Download }
      ],
      contactTitle: 'Daha fazla yardım mı lazım?',
      contactBody: 'Doğrudan bizimle iletişime geçin, özel durumunuzda yardımcı olalım.',
      contactButton: 'Destekle İletişim'
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
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.channels.map((channel, index) => {
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
                  asChild
                  className="w-full bg-[#00c896] hover:bg-[#00b085] text-white py-2 rounded-xl font-semibold transition-all duration-200"
                >
                  <a
                    href="mailto:support@aveniaichat.com"
                    className="flex items-center justify-center"
                  >
                    {channel.action}
                  </a>
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Quick Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {t.guidesTitle.split(' ')[0]} <span className="text-[#00c896]">{t.guidesTitle.split(' ').slice(1).join(' ')}</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.guides.map((guide, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700/50 p-6 hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-3xl">{guide.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{guide.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#00c896] text-xs font-medium">{guide.readTime} {lang === 'tr' ? 'okuma' : 'read'}</span>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {t.resourcesTitle}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.resources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <Card key={resource.title} className="bg-gray-800/30 border-gray-700/50 p-6 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-[#00c896]" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-400 text-sm">{resource.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Contact Support */}
        <Card className="bg-gradient-to-r from-gray-800/40 to-gray-800/60 border-gray-700/50 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            {t.contactTitle}
          </h3>
          <p className="text-gray-300 mb-6">
            {t.contactBody}
          </p>
          
          <Button 
            asChild
            className="bg-[#00c896] hover:bg-[#00b085] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200"
          >
            <a
              href="mailto:support@aveniaichat.com"
              className="flex items-center justify-center"
            >
              {t.contactButton}
            </a>
          </Button>
        </Card>
      </div>
    </div>
  );
}
