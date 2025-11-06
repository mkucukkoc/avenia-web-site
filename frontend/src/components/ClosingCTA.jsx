import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Star } from 'lucide-react';

export const ClosingCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#232323] to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00c896]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Stars */}
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-[#00c896] fill-current mx-1" />
          ))}
        </div>

        {/* Main Content */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
          Unlock the Power of AI
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c896] to-[#00e0a8]">
            Discover It Now
          </span>
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Thousands of people already boost their productivity with Avenia. 
          Join the transformation today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            asChild
            size="lg"
            className="bg-[#00c896] hover:bg-[#00b085] text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-200 hover:shadow-2xl hover:shadow-[#00c896]/30 hover:scale-105 group"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.aveniaichat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Get Started Free
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00c896] mb-2">1000+</div>
            <div className="text-gray-400">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00c896] mb-2">4.9/5</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00c896] mb-2">50K+</div>
            <div className="text-gray-400">Tasks Completed</div>
          </div>
        </div>

        {/* Final Note */}
        <p className="text-gray-500 text-sm mt-12">
          No credit card required • Get started in 30 seconds
        </p>
      </div>
    </section>
  );
};