import React from 'react';
import { Card } from './ui/card';
import { FileText, Eye, Volume2, Video, MessageSquare } from 'lucide-react';
import { features } from '../data/mock';

const iconMap = {
  FileText,
  Eye,
  Volume2,
  Video,
  MessageSquare
};

export const Features = () => {
  return (
    <section className="py-24 bg-[#232323]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful <span className="text-[#00c896]">AI Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Avenia accelerates your workflow with the latest AI technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            
            return (
              <Card 
                key={feature.id}
                className="group bg-gray-800/50 border-gray-700/50 hover:border-[#00c896]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00c896]/10 hover:-translate-y-2 p-8 rounded-2xl backdrop-blur-sm"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#00c896]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00c896]/30 transition-colors">
                  <IconComponent className="w-7 h-7 text-[#00c896]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#00c896] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00c896] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">And there is more...</p>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#00c896]/10 border border-[#00c896]/30">
            <span className="text-[#00c896] font-medium">We keep shipping new features</span>
          </div>
        </div>
      </div>
    </section>
  );
};