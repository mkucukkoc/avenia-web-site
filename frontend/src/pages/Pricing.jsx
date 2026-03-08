import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Check, X } from 'lucide-react';
import { getContent } from '../data/mock';
import { useLanguage } from '../i18n';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const { lang } = useLanguage();
  const { pricingPlans } = getContent(lang);

  const copy = {
    en: {
      badge: '💰 Pricing',
      titlePrefix: 'Choose the',
      titleEmphasis: 'Plan',
      titleSuffix: 'That Fits You',
      subtitle: 'Flexible pricing that adapts to your needs',
      monthly: 'Monthly',
      yearly: 'Yearly',
      yearlyBadge: '2 Months Free',
      mostPopular: 'Most Popular',
      included: 'Included features:',
      limitations: 'Limitations:',
      toggleNote: null,
    },
    tr: {
      badge: '💰 Fiyatlandırma',
      titlePrefix: 'Size Uygun',
      titleEmphasis: 'Planı',
      titleSuffix: 'Seçin',
      subtitle: 'İhtiyaçlarınıza uyum sağlayan esnek fiyatlar',
      monthly: 'Aylık',
      yearly: 'Yıllık',
      yearlyBadge: '2 Ay Ücretsiz',
      mostPopular: 'En Popüler',
      included: 'Dahil olan özellikler:',
      limitations: 'Sınırlamalar:',
      toggleNote: null,
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
            {t.titlePrefix} <span className="text-[#00c896]">{t.titleEmphasis}</span> {t.titleSuffix}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            {t.subtitle}
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg font-medium transition-colors ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
              {t.monthly}
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-all duration-200 ${
                isYearly ? 'bg-[#00c896]' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute w-5 h-5 bg-white rounded-full top-1 transition-transform duration-200 ${
                  isYearly ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium transition-colors ${isYearly ? 'text-white' : 'text-gray-400'}`}>
              {t.yearly}
            </span>
            {isYearly && (
              <Badge className="bg-[#00c896]/20 text-[#00c896] border-[#00c896]/30">
                {t.yearlyBadge}
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-gray-800/50 border-gray-700/50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'ring-2 ring-[#00c896] shadow-xl shadow-[#00c896]/10' 
                  : 'hover:border-[#00c896]/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#00c896] text-white px-4 py-1">
                    {t.mostPopular}
                  </Badge>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">
                    {isYearly && plan.yearlyPrice ? plan.yearlyPrice : plan.price}
                  </span>
                  <span className="text-gray-400 text-lg ml-2">
                    {isYearly && plan.yearlyPeriod ? plan.yearlyPeriod : plan.period}
                  </span>
                </div>

                <Button 
                  asChild={plan.name.toLowerCase().includes('premium')}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-[#00c896] hover:bg-[#00b085] text-white hover:shadow-lg hover:shadow-[#00c896]/25'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  {plan.name.toLowerCase().includes('premium') ? (
                    <a
                      href="https://play.google.com/store/apps/details?id=com.aveniaichat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      {plan.buttonText}
                    </a>
                  ) : (
                    plan.buttonText
                  )}
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-6">
                <h4 className="text-white font-semibold mb-3">{t.included}</h4>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-[#00c896] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {plan.limitations.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-white font-semibold mb-2">{t.limitations}</h4>
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-start">
                      <X className="w-4 h-4 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{limitation}</span>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
