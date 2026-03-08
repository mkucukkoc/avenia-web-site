import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { getContent } from '../data/mock';
import { useLanguage } from '../i18n';

export default function Product() {
  const { lang } = useLanguage();
  const { productScreenshots } = getContent(lang);

  const copy = {
    en: {
      badge: '🌟 Product',
      titleLine1: 'AI-Powered',
      titleLine2: 'Content Creation',
      subtitle: 'Avenia is your AI-powered creation and assistant platform. Summarize documents, analyze visuals, and convert between speech and text effortlessly.',
      ctaPrimary: 'Try for Free',
      ctaSecondary: 'Watch Demo',
      benefitsTitlePrefix: 'Key',
      benefitsTitleEmphasis: 'Benefits',
      screensTitlePrefix: 'Product',
      screensTitleEmphasis: 'Screens',
      benefits: [
        {
          icon: '📄',
          title: 'Document Summaries',
          description: 'Summarize PDF, Word, and PowerPoint files in seconds.'
        },
        {
          icon: '🔍',
          title: 'AI vs Real Analysis',
          description: 'Detect AI-generated visuals with confidence.'
        },
        {
          icon: '🔊',
          title: 'TTS/STT',
          description: 'Convert speech and text with multilingual support.'
        },
        {
          icon: '🎥',
          title: 'Images & Video',
          description: 'Generate creative visuals and videos with AI.'
        }
      ]
    },
    tr: {
      badge: '🌟 Ürün',
      titleLine1: 'Yapay Zeka Destekli',
      titleLine2: 'İçerik Üretimi',
      subtitle: 'Avenia, AI destekli üretim ve asistan platformunuzdur. Belgeleri özetleyin, görselleri analiz edin, ses ve metin arasında kolayca dönüşüm yapın.',
      ctaPrimary: 'Ücretsiz Dene',
      ctaSecondary: 'Demoyu İzle',
      benefitsTitlePrefix: 'Öne Çıkan',
      benefitsTitleEmphasis: 'Faydalar',
      screensTitlePrefix: 'Ürün',
      screensTitleEmphasis: 'Ekranları',
      benefits: [
        {
          icon: '📄',
          title: 'Belge Özetleri',
          description: 'PDF, Word ve PowerPoint dosyalarını saniyeler içinde özetleyin.'
        },
        {
          icon: '🔍',
          title: 'AI vs Gerçek Analizi',
          description: 'AI üretilen görselleri güvenle tespit edin.'
        },
        {
          icon: '🔊',
          title: 'TTS/STT',
          description: 'Çok dilli destekle ses ve metin arasında dönüşüm yapın.'
        },
        {
          icon: '🎥',
          title: 'Görsel ve Video',
          description: 'AI ile yaratıcı görsel ve videolar üretin.'
        }
      ]
    }
  };

  const t = copy[lang] || copy.en;

  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00c896]/20 border border-[#00c896]/30 mb-8">
            <span className="text-[#00c896] text-sm font-medium">{t.badge}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              {t.titleLine1}
            </span>
            <br />
            <span className="text-[#00c896]">{t.titleLine2}</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              asChild
              size="lg"
              className="bg-[#00c896] hover:bg-[#00b085] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-[#00c896]/25 hover:scale-105 group"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.aveniaichat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                {t.ctaPrimary}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:border-[#00c896] group"
            >
              <Play className="mr-2 w-5 h-5" />
              {t.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {t.benefitsTitlePrefix} <span className="text-[#00c896]">{t.benefitsTitleEmphasis}</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.benefits.map((benefit) => (
              <Card key={benefit.title} className="bg-gray-800/30 border-gray-700/50 p-6 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {t.screensTitlePrefix} <span className="text-[#00c896]">{t.screensTitleEmphasis}</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {productScreenshots.map((screenshot, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700/50 overflow-hidden hover:border-[#00c896]/50 transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{screenshot.title}</h3>
                  <p className="text-gray-300">{screenshot.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
