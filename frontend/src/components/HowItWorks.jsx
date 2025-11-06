import React from 'react';
import { Upload, MessageCircle, CheckCircle } from 'lucide-react';
import { howItWorks } from '../data/mock';

const iconMap = {
  Upload,
  MessageCircle,
  CheckCircle
};

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-gray-900/50">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It <span className="text-[#00c896]">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Start harnessing AI in just three simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {howItWorks.map((step, index) => {
            const IconComponent = iconMap[step.icon];
            
            return (
              <div key={step.step} className="text-center group">
                {/* Step Number & Icon */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-[#00c896] rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center border-2 border-[#00c896]">
                    <span className="text-[#00c896] font-bold text-sm">{step.step}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00c896] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>

                {/* Connection Line (except last item) */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#00c896] to-transparent transform translate-x-1/2"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#00c896]/10 border border-[#00c896]/30">
            <span className="text-[#00c896] font-medium">⚡ Average processing time: 2-5 seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};