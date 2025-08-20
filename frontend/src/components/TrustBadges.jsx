import React from 'react';
import { Shield, Zap, Globe, Users } from 'lucide-react';
import { trustBadges } from '../data/mock';

const iconMap = {
  Shield,
  Zap,
  Globe,
  Users
};

export const TrustBadges = () => {
  return (
    <section className="py-16 bg-[#232323]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Neden <span className="text-[#00c896]">Avenia?</span>
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
            <span className="text-sm">Sistem Aktif</span>
          </div>
          <div className="text-gray-400 text-sm">
            SOC 2 Uyumlu
          </div>
          <div className="text-gray-400 text-sm">
            GDPR Uyumlu
          </div>
          <div className="text-gray-400 text-sm">
            256-bit SSL Şifreleme
          </div>
        </div>
      </div>
    </section>
  );
};