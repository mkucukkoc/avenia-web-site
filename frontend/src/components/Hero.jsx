import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../i18n';

export const Hero = () => {
  const { lang } = useLanguage();
  const copy = {
    en: {
      badge: '🚀 AI-Powered Platform',
      titleLine1: 'Your AI Assistant',
      subtitle: 'Summarize documents, analyze visuals, and convert between speech and text.',
      subtitleLine2: 'One platform for every AI workflow.',
      ctaPrimary: 'Start for Free',
      ctaSecondary: 'Watch Demo',
      stats: [
        { value: '1000+', label: 'Active Users' },
        { value: '50K+', label: 'Files Processed' },
        { value: '99.9%', label: 'Uptime' },
      ],
    },
    tr: {
      badge: '🚀 Yapay Zeka Destekli Platform',
      titleLine1: 'AI Asistanınız',
      subtitle: 'Belgeleri özetleyin, görselleri analiz edin, ses ve metin arasında dönüşüm yapın.',
      subtitleLine2: 'Tüm AI iş akışları için tek platform.',
      ctaPrimary: 'Ücretsiz Başla',
      ctaSecondary: 'Demoyu İzle',
      stats: [
        { value: '1000+', label: 'Aktif Kullanıcı' },
        { value: '50K+', label: 'İşlenen Dosya' },
        { value: '99.9%', label: 'Çalışma Süresi' },
      ],
    },
  };
  const t = copy[lang] || copy.en;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#232323] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00c896]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00c896]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00c896]/20 border border-[#00c896]/30 mb-8">
            <span className="text-[#00c896] text-sm font-medium">{t.badge}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              {t.titleLine1}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c896] to-[#00e0a8]">
              Avenia
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
            <br className="hidden md:block" />
            {t.subtitleLine2}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-white/10">
            {t.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-[#00c896]">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
