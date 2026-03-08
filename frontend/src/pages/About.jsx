import React from 'react';
import { Card } from '../components/ui/card';
import { Target, Eye, Heart, Users } from 'lucide-react';
import { getContent } from '../data/mock';
import { useLanguage } from '../i18n';

export default function About() {
  const { lang } = useLanguage();
  const { teamMembers } = getContent(lang);

  const copy = {
    en: {
      badge: '🏢 Company',
      titlePrefix: 'About',
      titleEmphasis: 'Avenia',
      subtitle: 'We started with the mission of making AI technology accessible to everyone. Today we are building the leading AI assistant platform from Turkey for the world.',
      storyTitle: 'Our Story',
      story: [
        'Avenia was founded in 2024 in Turkey with the vision of bringing AI technology into everyday life. Our team is made up of experienced engineers and researchers who have spent years working at leading tech companies.',
        'From the very beginning our goal has been to deliver complex AI through simple, user-friendly experiences. We support a wide range of use cases—from document summarization and visual analysis to speech processing and content generation.',
        'Today we help thousands of people streamline their daily workflows and boost productivity. Looking ahead, our vision is to democratize AI so it can positively impact lives everywhere.'
      ],
      stats: [
        { value: '1000+', label: 'Active Users', icon: Users },
        { value: '50K+', label: 'Files Processed', icon: Target },
        { value: '4.9/5', label: 'Customer Satisfaction', icon: Heart }
      ],
      missionTitle: 'Our Mission',
      missionBody: 'Make AI technology accessible, understandable, and genuinely useful for everyone—so entire communities can benefit from higher productivity.',
      visionTitle: 'Our Vision',
      visionBody: 'Become the leading AI platform founded in Turkey and build pioneering solutions that set the standard globally.',
      valuesTitle: 'Our Values',
      valuesBody: 'We act with transparency, user focus, continuous learning, and ethical AI development as our core principles.',
      principlesTitle: 'Operating Principles',
      principles: [
        {
          title: '🔒 Privacy First',
          body: 'Protecting user data is non-negotiable. We process information under GDPR and KVKK standards from day one.'
        },
        {
          title: '⚡ Continuous Innovation',
          body: 'We track the latest developments in AI and ship new capabilities to our platform as soon as they prove real value.'
        },
        {
          title: '🌍 Native Language Expertise',
          body: 'We specialize in Turkish language processing to deliver solutions tailored to local needs while staying ready for global expansion.'
        },
        {
          title: '🤝 Community-Driven',
          body: 'We listen closely to user feedback and bring their suggestions into our product roadmap.'
        }
      ]
    },
    tr: {
      badge: '🏢 Şirket',
      titlePrefix: 'Hakkında',
      titleEmphasis: 'Avenia',
      subtitle: 'AI teknolojisini herkes için erişilebilir kılma hedefiyle yola çıktık. Bugün Türkiye’den dünyaya uzanan lider AI asistan platformunu inşa ediyoruz.',
      storyTitle: 'Hikayemiz',
      story: [
        'Avenia, 2024 yılında Türkiye’de AI teknolojisini günlük hayata taşımak vizyonuyla kuruldu. Ekibimiz, büyük teknoloji şirketlerinde yıllarca çalışmış deneyimli mühendis ve araştırmacılardan oluşur.',
        'İlk günden beri hedefimiz karmaşık AI gücünü basit ve kullanıcı dostu deneyimlerle sunmaktır. Belge özetleme, görsel analiz, konuşma işleme ve içerik üretimi gibi geniş bir kullanım alanını destekliyoruz.',
        'Bugün binlerce kişinin günlük iş akışlarını sadeleştirmesine ve üretkenliğini artırmasına yardımcı oluyoruz. Gelecekte AI’yı demokratikleştirerek hayatları olumlu yönde etkilemeyi amaçlıyoruz.'
      ],
      stats: [
        { value: '1000+', label: 'Aktif Kullanıcı', icon: Users },
        { value: '50K+', label: 'İşlenen Dosya', icon: Target },
        { value: '4.9/5', label: 'Müşteri Memnuniyeti', icon: Heart }
      ],
      missionTitle: 'Misyonumuz',
      missionBody: 'AI teknolojisini herkes için erişilebilir, anlaşılır ve gerçekten faydalı hale getirmek; toplulukların üretkenliğini artırmak.',
      visionTitle: 'Vizyonumuz',
      visionBody: 'Türkiye’de kurulan ve dünyada standart belirleyen lider AI platformu olmak.',
      valuesTitle: 'Değerlerimiz',
      valuesBody: 'Şeffaflık, kullanıcı odağı, sürekli öğrenme ve etik AI geliştirme temel prensiplerimizdir.',
      principlesTitle: 'Çalışma Prensipleri',
      principles: [
        {
          title: '🔒 Gizlilik Önceliği',
          body: 'Kullanıcı verilerini korumak tartışılmaz. Verileri GDPR ve KVKK standartlarında işleriz.'
        },
        {
          title: '⚡ Sürekli İnovasyon',
          body: 'AI’daki gelişmeleri yakından takip eder, gerçek değer sunan özellikleri hızla platforma taşırız.'
        },
        {
          title: '🌍 Yerel Dil Uzmanlığı',
          body: 'Türkçe dil işlemeye özel çözümler geliştirirken küresel büyümeye hazır kalırız.'
        },
        {
          title: '🤝 Topluluk Odaklılık',
          body: 'Kullanıcı geri bildirimlerini dinler ve yol haritamıza taşırız.'
        }
      ]
    }
  };

  const t = copy[lang] || copy.en;

  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00c896]/20 border border-[#00c896]/30 mb-8">
            <span className="text-[#00c896] text-sm font-medium">{t.badge}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.titlePrefix} <span className="text-[#00c896]">{t.titleEmphasis}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">{t.storyTitle}</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              {t.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            {t.stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <Card key={stat.label} className="bg-gray-800/30 border-gray-700/50 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-[#00c896]" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="bg-gray-800/30 border-gray-700/50 p-8 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-[#00c896]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.missionTitle}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t.missionBody}
            </p>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50 p-8 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-[#00c896]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.visionTitle}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t.visionBody}
            </p>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50 p-8 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-[#00c896]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.valuesTitle}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t.valuesBody}
            </p>
          </Card>
        </div>

        {/* Values in Detail */}
        <Card className="bg-gradient-to-r from-gray-800/40 to-gray-800/60 p-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            {t.principlesTitle.split(' ')[0]} <span className="text-[#00c896]">{t.principlesTitle.split(' ').slice(1).join(' ')}</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {t.principles.slice(0, 2).map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.body}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              {t.principles.slice(2).map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
