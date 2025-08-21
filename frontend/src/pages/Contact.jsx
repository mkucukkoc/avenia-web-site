import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin, Send, Twitter, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log('Form submitted:', formData);
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00c896]/20 border border-[#00c896]/30 mb-8">
            <span className="text-[#00c896] text-sm font-medium">📞 İletişim</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bizimle <span className="text-[#00c896]">İletişime</span> Geçin
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sorularınız, önerileriniz veya iş birliği teklifleriniz için bize ulaşın. 
            En kısa sürede size geri dönüş yaparız.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-800/30 border-gray-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Bize Yazın</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Ad Soyad
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-[#00c896] focus:ring-[#00c896]/20"
                  placeholder="Adınızı ve soyadınızı girin"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  E-posta Adresi
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-[#00c896] focus:ring-[#00c896]/20"
                  placeholder="email@ornek.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Mesajınız
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-[#00c896] focus:ring-[#00c896]/20 resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              {/* hCaptcha placeholder */}
              <div className="bg-gray-700/30 border border-gray-600 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 border-2 border-[#00c896] rounded"></div>
                  <span className="text-gray-300">Robot olmadığınızı doğrulayın</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">hCaptcha entegrasyonu yakında aktif olacak</p>
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#00c896] hover:bg-[#00b085] text-white py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#00c896]/25"
              >
                <Send className="w-5 h-5 mr-2" />
                Mesaj Gönder
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="bg-gray-800/30 border-gray-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">İletişim Bilgileri</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#00c896]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">E-posta</h3>
                    <p className="text-gray-300">info@avenia.com</p>
                    <p className="text-gray-300">destek@avenia.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#00c896]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Telefon</h3>
                    <p className="text-gray-300">+90 212 XXX XX XX</p>
                    <p className="text-gray-400 text-sm">Pazartesi - Cuma: 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#00c896]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Adres</h3>
                    <p className="text-gray-300">
                      Maslak Mahallesi<br />
                      Teknoloji Sitesi<br />
                      İstanbul, Türkiye
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="bg-gray-800/30 border-gray-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Sosyal Medya</h2>
              
              <p className="text-gray-300 mb-6">
                Güncellemeler ve duyurular için bizi takip edin
              </p>

              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#00c896] hover:bg-[#00c896]/20 transition-all duration-200"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#00c896] hover:bg-[#00c896]/20 transition-all duration-200"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#00c896] hover:bg-[#00c896]/20 transition-all duration-200"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </Card>

            {/* Business Hours */}
            <Card className="bg-gray-800/30 border-gray-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Çalışma Saatleri</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Pazartesi - Cuma</span>
                  <span className="text-white font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Cumartesi</span>
                  <span className="text-white font-medium">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Pazar</span>
                  <span className="text-gray-500">Kapalı</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-[#00c896]/10 border border-[#00c896]/30 rounded-xl">
                <p className="text-[#00c896] font-medium text-sm">
                  💬 Premium üyeler için 7/24 canlı destek mevcuttur
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}