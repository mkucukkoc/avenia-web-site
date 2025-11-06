import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { productScreenshots } from '../data/mock';

export default function Product() {
  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00c896]/20 border border-[#00c896]/30 mb-8">
            <span className="text-[#00c896] text-sm font-medium">🌟 Product</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              AI-Powered
            </span>
            <br />
            <span className="text-[#00c896]">Content Creation</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Avenia is your AI-powered creation and assistant platform.
            Summarize documents, analyze visuals, and convert between speech and text effortlessly.
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
                Try for Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:border-[#00c896] group"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key <span className="text-[#00c896]">Benefits</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-800/30 border-gray-700/50 p-6 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Document Summaries</h3>
              <p className="text-gray-400 text-sm">Summarize PDF, Word, and PowerPoint files in seconds.</p>
            </Card>

            <Card className="bg-gray-800/30 border-gray-700/50 p-6 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-white font-semibold mb-2">AI vs Real Analysis</h3>
              <p className="text-gray-400 text-sm">Detect AI-generated visuals with confidence.</p>
            </Card>

            <Card className="bg-gray-800/30 border-gray-700/50 p-6 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔊</span>
              </div>
              <h3 className="text-white font-semibold mb-2">TTS/STT</h3>
              <p className="text-gray-400 text-sm">Convert speech and text with multilingual support.</p>
            </Card>

            <Card className="bg-gray-800/30 border-gray-700/50 p-6 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎥</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Images & Video</h3>
              <p className="text-gray-400 text-sm">Generate creative visuals and videos with AI.</p>
            </Card>
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Product <span className="text-[#00c896]">Screens</span>
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

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-800/40 to-gray-800/60 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start <span className="text-[#00c896]">Now</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Create your free account and explore the power of AI.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-[#00c896] hover:bg-[#00b085] text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-200 hover:shadow-2xl hover:shadow-[#00c896]/30 hover:scale-105"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.aveniaichat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Create a Free Account
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}