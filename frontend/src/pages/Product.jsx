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
            <span className="text-[#00c896] text-sm font-medium">🌟 Ürün</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Yapay Zeka Destekli
            </span>
            <br />
            <span className="text-[#00c896]">İçerik Üretimi</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Avenia, yapay zekâ destekli içerik üretimi ve asistan uygulaması. 
            Belgelerinizi özetleyin, görselleri analiz edin, ses-metin dönüşümü yapın.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg"
              className="bg-[#00c896] hover:bg-[#00b085] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-[#00c896]/25 hover:scale-105 group"
            >
              Ücretsiz Dene
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:border-[#00c896] group"
            >
              <Play className="mr-2 w-5 h-5" />
              Demo İzle
            </Button>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Öne Çıkan <span className="text-[#00c896]">Faydalar</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-800/30 border-gray-700/50 p-6 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Belge Özetleme</h3>
              <p className="text-gray-400 text-sm">PDF, Word, PowerPoint dosyalarınızı hızlıca özetleyin</p>
            </Card>

            <Card className="bg-gray-800/30 border-gray-700/50 p-6 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-white font-semibold mb-2">AI vs Real Analiz</h3>
              <p className="text-gray-400 text-sm">Yapay zeka ile üretilen içerikleri tespit edin</p>
            </Card>

            <Card className="bg-gray-800/30 border-gray-700/50 p-6 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔊</span>
              </div>
              <h3 className="text-white font-semibold mb-2">TTS/STT</h3>
              <p className="text-gray-400 text-sm">Ses-metin dönüşümü çok dilli destekle</p>
            </Card>

            <Card className="bg-gray-800/30 border-gray-700/50 p-6 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎥</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Görsel & Video</h3>
              <p className="text-gray-400 text-sm">AI ile yaratıcı içerik üretimi</p>
            </Card>
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Ekran <span className="text-[#00c896]">Görüntüleri</span>
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
            Hemen <span className="text-[#00c896]">Başlayın</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ücretsiz hesabınızı oluşturun ve AI gücünü keşfedin
          </p>
          <Button 
            size="lg"
            className="bg-[#00c896] hover:bg-[#00b085] text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-200 hover:shadow-2xl hover:shadow-[#00c896]/30 hover:scale-105"
          >
            Ücretsiz Hesap Oluştur
          </Button>
        </div>
      </div>
    </div>
  );
}