import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Contact() {
  const { lang } = useLanguage();
  const copy = {
    en: {
      badge: '📞 Contact',
      titlePrefix: 'Get',
      titleEmphasis: 'in Touch',
      titleSuffix: 'with Us',
      subtitle: 'Reach out with questions, suggestions, or partnership ideas. We will reply as soon as possible.',
      formTitle: 'Write to Us',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      messageLabel: 'Your Message',
      namePlaceholder: 'Enter your full name',
      emailPlaceholder: 'name@example.com',
      messagePlaceholder: 'Write your message here...',
      errors: {
        name: 'Full Name is required.',
        email: 'Email Address is required.',
        message: 'Your Message is required.'
      },
      send: 'Send Message',
      infoTitle: 'Contact Information',
      infoSubtitle: 'We usually reply within 24 hours.',
      emailText: 'support@aveniaichat.com',
      addressLabel: 'Address',
      addressText: 'Maslak District, Teknoloji Campus, Istanbul, Turkey',
    },
    tr: {
      badge: '📞 İletişim',
      titlePrefix: 'Bizimle',
      titleEmphasis: 'İletişime',
      titleSuffix: 'Geçin',
      subtitle: 'Sorular, öneriler veya iş birlikleri için bize ulaşın. En kısa sürede yanıtlarız.',
      formTitle: 'Bize Yazın',
      nameLabel: 'Ad Soyad',
      emailLabel: 'E-posta Adresi',
      messageLabel: 'Mesajınız',
      namePlaceholder: 'Ad soyadınızı girin',
      emailPlaceholder: 'ornek@eposta.com',
      messagePlaceholder: 'Mesajınızı buraya yazın...',
      errors: {
        name: 'Ad Soyad zorunludur.',
        email: 'E-posta adresi zorunludur.',
        message: 'Mesaj zorunludur.'
      },
      send: 'Mesaj Gönder',
      infoTitle: 'İletişim Bilgileri',
      infoSubtitle: 'Genelde 24 saat içinde dönüş yaparız.',
      emailText: 'support@aveniaichat.com',
      addressLabel: 'Adres',
      addressText: 'Maslak, Teknoloji Kampüsü, İstanbul, Türkiye',
    }
  };

  const t = copy[lang] || copy.en;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name.trim() ? '' : t.errors.name,
      email: formData.email.trim() ? '' : t.errors.email,
      message: formData.message.trim() ? '' : t.errors.message
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== '');
    if (hasErrors) {
      return;
    }

    const subject = `Contact request from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:support@aveniaichat.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

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
            <span className="text-[#00c896] text-sm font-medium">{t.badge}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.titlePrefix} <span className="text-[#00c896]">{t.titleEmphasis}</span> {t.titleSuffix}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-800/30 border-gray-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">{t.formTitle}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  {t.nameLabel}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-[#00c896] focus:ring-[#00c896]/20"
                  placeholder={t.namePlaceholder}
                />
                {errors.name && (
                  <p className="text-sm text-red-400 mt-2">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  {t.emailLabel}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-[#00c896] focus:ring-[#00c896]/20"
                  placeholder={t.emailPlaceholder}
                />
                {errors.email && (
                  <p className="text-sm text-red-400 mt-2">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  {t.messageLabel}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-[#00c896] focus:ring-[#00c896]/20 resize-none"
                  placeholder={t.messagePlaceholder}
                />
                {errors.message && (
                  <p className="text-sm text-red-400 mt-2">{errors.message}</p>
                )}
              </div>

              <Button className="w-full bg-[#00c896] hover:bg-[#00b085] text-white py-3 rounded-xl font-semibold">
                <Send className="w-5 h-5 mr-2" />
                {t.send}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-gray-800/30 border-gray-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-2">{t.infoTitle}</h2>
              <p className="text-gray-400 mb-6">{t.infoSubtitle}</p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-[#00c896] mt-1 mr-3" />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-gray-300">{t.emailText}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#00c896] mt-1 mr-3" />
                  <div>
                    <div className="text-white font-medium">{t.addressLabel}</div>
                    <div className="text-gray-300">{t.addressText}</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
