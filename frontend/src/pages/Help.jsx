import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { MessageCircle, Mail, Search, HelpCircle } from 'lucide-react';
import { faqData } from '../data/mock';

export default function Help() {
  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-[#00c896]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Yardım <span className="text-[#00c896]">Merkezi</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Avenia hakkında merak ettiğiniz her şey. Sorularınızın yanıtlarını bulamadınız mı? Bizimle iletişime geçin.
          </p>
        </div>

        {/* Search Box */}
        <Card className="bg-gray-800/50 border-gray-700/50 p-6 mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Aradığınız konuyu yazın..."
              className="w-full pl-12 pr-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#00c896] focus:ring-2 focus:ring-[#00c896]/20 transition-all"
            />
          </div>
        </Card>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Sık Sorulan Sorular
          </h2>
          
          <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm">
            <Accordion type="single" collapsible className="p-6">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-700/50">
                  <AccordionTrigger className="text-white hover:text-[#00c896] text-left py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="bg-gradient-to-r from-gray-800/40 to-gray-800/60 border-gray-700/50 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Başka bir sorunuz mu var?
          </h3>
          <p className="text-gray-300 mb-6">
            Ekibimiz size yardımcı olmaktan mutluluk duyar. 24 saat içinde yanıtlıyoruz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#00c896] hover:bg-[#00b085] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#00c896]/25"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Canlı Destek
            </Button>
            <Button 
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              E-posta Gönder
            </Button>
          </div>
        </Card>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="bg-gray-800/30 border-gray-700/50 p-6 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 text-[#00c896]" />
            </div>
            <h4 className="text-white font-semibold mb-2">API Dokümantasyonu</h4>
            <p className="text-gray-400 text-sm">Geliştiriciler için teknik rehber</p>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50 p-6 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-[#00c896]" />
            </div>
            <h4 className="text-white font-semibold mb-2">Video Eğitimler</h4>
            <p className="text-gray-400 text-sm">Adım adım kullanım kılavuzları</p>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50 p-6 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-6 h-6 text-[#00c896]" />
            </div>
            <h4 className="text-white font-semibold mb-2">Topluluk</h4>
            <p className="text-gray-400 text-sm">Diğer kullanıcılarla deneyim paylaşın</p>
          </Card>
        </div>
      </div>
    </div>
  );
}