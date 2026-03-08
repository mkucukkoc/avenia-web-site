import React from 'react';
import { Shield, Zap, Globe, Users } from 'lucide-react';
import { getContent } from '../data/mock';
import { useLanguage } from '../i18n';

const iconMap = {
  Shield,
  Zap,
  Globe,
  Users
};

export const TrustBadges = () => {
  const { lang } = useLanguage();
  const { trustBadges } = getContent(lang);
  const copy = {
    en: {
      titlePrefix: 'Why',
      titleEmphasis: 'Avenia?',
      status: 'System Online',
      compliance: ['SOC 2 Compliant', 'GDPR Compliant', '256-bit SSL Encryption'],
    },
    tr: {
      titlePrefix: 'Neden',
      titleEmphasis: 'Avenia?',
      status: 'Sistem Online',
      compliance: ['SOC 2 Uyumlu', 'KVKK/GDPR Uyumlu', '256-bit SSL Şifreleme'],
    },
  };
  const t = copy[lang] || copy.en;

  return (
    <section className="py-16 bg-[#232323]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t.titlePrefix} <span className="text-[#00c896]">{t.titleEmphasis}</span>
          </h2>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustBadges.map((badge, index) => {
            const IconComponent = iconMap[badge.icon];
            
            return (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-200"
              >
                <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00c896]/30 transition-colors">
                  <IconComponent className="w-8 h-8 text-[#00c896]" />
                </div>
                <p className="text-white font-medium group-hover:text-[#00c896] transition-colors">
                  {badge.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Trust Elements */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-8 border-t border-gray-700/50">
          <div className="flex items-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm">{t.status}</span>
          </div>
          {t.compliance.map((item) => (
            <div key={item} className="text-gray-400 text-sm">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
