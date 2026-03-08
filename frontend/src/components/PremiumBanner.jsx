import React from 'react';
import { Button } from './ui/button';
import { Crown, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n';

export const PremiumBanner = () => {
  const { lang } = useLanguage();
  const copy = {
    en: {
      title: 'Upgrade to Premium',
      description: 'Unlock unlimited usage, priority processing, and advanced AI models to maximize productivity.',
      features: ['Unlimited Usage', 'Priority Processing', 'Premium AI Models'],
      cta: 'Upgrade to Premium – $7/mo',
      note: '7-day free trial • Cancel anytime',
    },
    tr: {
      title: 'Premium’a Yükselt',
      description: 'Sınırsız kullanım, öncelikli işlem ve gelişmiş AI modelleriyle üretkenliğinizi artırın.',
      features: ['Sınırsız Kullanım', 'Öncelikli İşlem', 'Premium AI Modelleri'],
      cta: 'Premium’a Geç – $7/ay',
      note: '7 gün ücretsiz deneme • İstediğin zaman iptal',
    },
  };
  const t = copy[lang] || copy.en;

  return (
    <section className="py-16 bg-[#232323] relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#00c896]/20 rounded-full blur-3xl"></div>
        </div>

        {/* Banner Content */}
        <div className="relative z-10 bg-gradient-to-r from-gray-800/60 via-gray-800/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-700/50">
          <div className="text-center max-w-4xl mx-auto">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-[#00c896] rounded-2xl flex items-center justify-center">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-[#00c896] animate-pulse" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#00c896]">
                {t.title}
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.description}
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-[#00c896] font-bold text-lg">∞</div>
                <div className="text-gray-300 text-sm">{t.features[0]}</div>
              </div>
              <div className="text-center">
                <div className="text-[#00c896] font-bold text-lg">⚡</div>
                <div className="text-gray-300 text-sm">{t.features[1]}</div>
              </div>
              <div className="text-center">
                <div className="text-[#00c896] font-bold text-lg">🤖</div>
                <div className="text-gray-300 text-sm">{t.features[2]}</div>
              </div>
            </div>

            {/* CTA */}
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-[#00c896] hover:from-purple-600 hover:to-[#00b085] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105"
            >
              {t.cta}
            </Button>

            <p className="text-gray-400 text-sm mt-4">
              {t.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
