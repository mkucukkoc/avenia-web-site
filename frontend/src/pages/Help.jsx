import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { MessageCircle, Mail, Search, HelpCircle } from 'lucide-react';
import { getContent } from '../data/mock';
import { useLanguage } from '../i18n';

export default function Help() {
  const { lang } = useLanguage();
  const { faqData } = getContent(lang);
  const copy = {
    en: {
      title: 'Help Center',
      subtitle: 'Everything you want to learn about Avenia. Can’t find the answer you’re looking for? Contact our team.',
      faqTitle: 'Frequently Asked Questions',
      accountTitle: 'Account & Data Deletion',
      accountBody: 'You can request deletion of your Avenia account and personal data from this page:',
      accountLink: 'Click here',
      contactTitle: 'Still have a question?',
      contactBody: 'Our team is happy to help. We respond within 24 hours.',
      liveSupport: 'Live Support',
      sendEmail: 'Send Email',
      quickLinksTitle: 'Quick Links',
      quickLinks: [
        { title: 'API Documentation', description: 'Technical guide for developers' },
        { title: 'Video Tutorials', description: 'Step-by-step how-to guides' },
        { title: 'Community', description: 'Share experiences with other users' },
      ],
    },
    tr: {
      title: 'Yardım Merkezi',
      subtitle: 'Avenia hakkında merak ettikleriniz burada. Yanıtı bulamadıysanız ekibimizle iletişime geçin.',
      faqTitle: 'Sık Sorulan Sorular',
      accountTitle: 'Hesap ve Veri Silme',
      accountBody: 'Avenia hesabınızı ve kişisel verilerinizi silme talebini bu sayfadan oluşturabilirsiniz:',
      accountLink: 'Buraya tıklayın',
      contactTitle: 'Hâlâ sorunuz mu var?',
      contactBody: 'Ekibimiz yardımcı olmaktan memnun. 24 saat içinde yanıtlarız.',
      liveSupport: 'Canlı Destek',
      sendEmail: 'E-posta Gönder',
      quickLinksTitle: 'Hızlı Bağlantılar',
      quickLinks: [
        { title: 'API Dokümantasyonu', description: 'Geliştiriciler için teknik rehber' },
        { title: 'Video Eğitimler', description: 'Adım adım kullanım rehberi' },
        { title: 'Topluluk', description: 'Diğer kullanıcılarla deneyim paylaşın' },
      ],
    },
  };
  const t = copy[lang] || copy.en;

  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-[#00c896]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.title.split(' ')[0]} <span className="text-[#00c896]">{t.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            {t.faqTitle}
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
        <Card className="bg-gray-800/30 border-gray-700/50 p-6 mb-12">
          <h3 className="text-xl font-semibold text-white mb-2">{t.accountTitle}</h3>
          <p className="text-gray-300 mb-4">
            {t.accountBody}
          </p>
          <a
            href="/account-delete"
            className="inline-flex items-center text-[#00c896] hover:underline font-semibold"
          >
            {t.accountLink}
          </a>
        </Card>

        {/* Contact Section */}
        <Card className="bg-gradient-to-r from-gray-800/40 to-gray-800/60 border-gray-700/50 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            {t.contactTitle}
          </h3>
          <p className="text-gray-300 mb-6">
            {t.contactBody}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#00c896] hover:bg-[#00b085] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#00c896]/25"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t.liveSupport}
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-200"
            >
              <a
                href="mailto:support@aveniaichat.com"
                className="flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t.sendEmail}
              </a>
            </Button>
          </div>
        </Card>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <h4 className="sr-only">{t.quickLinksTitle}</h4>
          <Card className="bg-gray-800/30 border-gray-700/50 p-6 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 text-[#00c896]" />
            </div>
            <h4 className="text-white font-semibold mb-2">{t.quickLinks[0].title}</h4>
            <p className="text-gray-400 text-sm">{t.quickLinks[0].description}</p>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50 p-6 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-[#00c896]" />
            </div>
            <h4 className="text-white font-semibold mb-2">{t.quickLinks[1].title}</h4>
            <p className="text-gray-400 text-sm">{t.quickLinks[1].description}</p>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50 p-6 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-6 h-6 text-[#00c896]" />
            </div>
            <h4 className="text-white font-semibold mb-2">{t.quickLinks[2].title}</h4>
            <p className="text-gray-400 text-sm">{t.quickLinks[2].description}</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
