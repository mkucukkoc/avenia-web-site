import React from 'react';
import { Card } from '../components/ui/card';
import { FileText } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Terms() {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: 'Avenia Terms of Use',
      subtitle: 'Explains the terms of use for the Avenia app.',
      updated: 'March 08, 2026',
      sections: [
        {
          title: '1. Scope of Service',
          paragraphs: [
            'Avenia is an AI-powered platform that provides chat, image/video generation, document summarization, and speech workflows.',
            'By using the Avenia app you agree to these terms of use. These terms apply to all users of the app.',
            'If these terms are suitable for you, please use the app. If not, please do not use it.',
          ],
        },
        {
          title: '2. User Responsibilities',
          paragraphs: ['As a user you agree to follow the rules below:'],
          list: [
            'Use the platform only for lawful purposes.',
            'Do not upload content that infringes copyright or intellectual property rights.',
            'Do not distribute harmful content, spam, or abuse.',
            'Respect the rights of other users.',
            'Keep your account credentials secure.',
          ],
        },
        {
          title: '3. AI Use and Third-Party Providers',
          paragraphs: [
            'Avenia may use third-party AI services to provide some features.',
            'Example services: Google Gemini (chat and document processing), fal.ai (image and video generation).',
            'These services may process uploaded content and, when necessary, content may be shared with these providers.',
            'Responsibility for the use of third-party services and the results of content processing on those services belongs to the user.',
            'AI outputs may not always be accurate or complete. You should not rely solely on AI outputs for critical decisions.',
          ],
        },
        {
          title: '4. Data Processing and Privacy',
          paragraphs: [
            'Content uploaded by the user may be processed to provide the requested service.',
            'Data may be used for the following purposes:',
          ],
          list: ['AI processing', 'content creation', 'service improvement'],
          link: {
            text: 'Privacy Policy',
            href: '/privacy',
          },
        },
        {
          title: '5. Subscriptions and Payments',
          paragraphs: [
            'Some features in the Avenia app may be paid.',
            'Examples: Premium subscriptions, coin or credit packages.',
            'Payments are made through Google Play Store and Apple App Store.',
            'Subscriptions may renew automatically. Cancellations and refunds are subject to the policies of the relevant app store.',
          ],
        },
        {
          title: '6. Intellectual Property',
          paragraphs: [
            'The Avenia app, its design, software, and content are protected by intellectual property laws.',
            'Users represent that they have the necessary rights to the content they upload.',
          ],
        },
        {
          title: '7. Service Limitations',
          paragraphs: ['Avenia may limit the service in the following cases:'],
          list: ['usage limits', 'file size limits', 'technical maintenance', 'system updates'],
        },
        {
          title: '8. Changes',
          paragraphs: [
            'Avenia terms of use may be updated from time to time.',
            'Continuing to use the app after updates means you accept the new terms.',
          ],
        },
        {
          title: '9. International Use',
          paragraphs: [
            'Avenia can be used worldwide. Users are responsible for complying with the legal regulations of their own country.',
          ],
        },
        {
          title: '10. Contact',
          paragraphs: [
            'For questions about these terms, you can contact us at:',
            'support@aveniaichat.com',
          ],
        },
        {
          title: 'Developer and Contact',
          paragraphs: ['Developer: Mustafa Kucukkoc', 'Contact: support@aveniaichat.com'],
        },
      ],
      footerNote: 'By accepting these terms you help keep Avenia safe and fair for everyone.',
    },
    tr: {
      title: 'Avenia Kullanım Şartları',
      subtitle: 'Avenia kullanım şartlarını açıklar.',
      updated: '08 Mart 2026',
      sections: [
        {
          title: '1. Hizmet Kapsamı',
          paragraphs: [
            'Avenia; sohbet, görsel/video üretimi, belge özeti ve konuşma iş akışları sunan yapay zeka destekli bir platformdur.',
            'Avenia uygulamasını kullanarak bu kullanım şartlarını kabul etmiş olursunuz. Bu şartlar, uygulamanın tüm kullanıcıları için geçerlidir.',
            'Bu şartlar sizin için uygunsa lütfen kullanın. Uygun değilse lütfen kullanmayın.',
          ],
        },
        {
          title: '2. Kullanıcı Sorumlulukları',
          paragraphs: ['Kullanıcı olarak aşağıdaki kurallara uymayı kabul edersiniz:'],
          list: [
            'Platformu yalnızca yasal amaçlarla kullanmak.',
            'Telif hakkı veya fikri mülkiyet ihlali içeren içerik yüklememek.',
            'Zararlı içerik, spam veya kötüye kullanım yapmamak.',
            'Diğer kullanıcıların haklarına saygı göstermek.',
            'Hesap bilgilerinizi güvenli tutmak.',
          ],
        },
        {
          title: '3. AI Kullanımı ve Üçüncü Taraf Sağlayıcılar',
          paragraphs: [
            'Avenia, bazı özellikleri sağlamak için üçüncü taraf yapay zeka servisleri kullanabilir.',
            'Örnek servisler: Google Gemini (sohbet ve belge işleme), fal.ai (görsel ve video üretimi).',
            'Bu servisler yüklenen içerikleri işleyebilir ve gerekli görüldüğünde bu sağlayıcılarla paylaşılabilir.',
            'Üçüncü taraf servislerin kullanımı ve bu servislerdeki içerik işleme sonuçlarına ilişkin sorumluluk kullanıcıya aittir.',
            'AI çıktıları her zaman doğru veya eksiksiz olmayabilir. Kritik kararlar için yalnızca AI çıktısına güvenilmemelidir.',
          ],
        },
        {
          title: '4. Veri İşleme ve Gizlilik',
          paragraphs: [
            'Kullanıcı tarafından yüklenen içerikler, talep edilen hizmeti sağlamak amacıyla işlenebilir.',
            'Veriler aşağıdaki amaçlarla kullanılabilir:',
          ],
          list: ['AI işleme', 'İçerik oluşturma', 'Hizmet iyileştirme'],
          link: {
            text: 'Gizlilik Politikası',
            href: '/privacy',
          },
        },
        {
          title: '5. Abonelikler ve Ödemeler',
          paragraphs: [
            'Avenia uygulamasında bazı özellikler ücretli olabilir.',
            'Örnek: Premium abonelikler, coin veya kredi paketleri.',
            'Ödemeler Google Play Store ve Apple App Store üzerinden yapılır.',
            'Abonelikler otomatik olarak yenilenebilir. İptal ve iade işlemleri ilgili uygulama mağazasının politikalarına tabidir.',
          ],
        },
        {
          title: '6. Fikri Mülkiyet',
          paragraphs: [
            'Avenia uygulaması, tasarımı, yazılımı ve içerikleri fikri mülkiyet yasaları ile korunmaktadır.',
            'Kullanıcılar, uygulamaya yükledikleri içerik üzerinde gerekli haklara sahip olduklarını beyan ederler.',
          ],
        },
        {
          title: '7. Hizmet Sınırlamaları',
          paragraphs: ['Avenia aşağıdaki durumlarda hizmeti sınırlayabilir:'],
          list: ['Kullanım limitleri', 'Dosya boyutu sınırları', 'Teknik bakım', 'Sistem güncellemeleri'],
        },
        {
          title: '8. Değişiklikler',
          paragraphs: [
            'Avenia kullanım şartları zaman zaman güncellenebilir.',
            'Şartlar güncellendikten sonra uygulamayı kullanmaya devam etmeniz, yeni şartları kabul ettiğiniz anlamına gelir.',
          ],
        },
        {
          title: '9. Uluslararası Kullanım',
          paragraphs: [
            'Avenia dünya genelinde kullanılabilir. Kullanıcılar uygulamayı kullanırken kendi ülkelerindeki yasal düzenlemelere uymaktan sorumludur.',
          ],
        },
        {
          title: '10. İletişim',
          paragraphs: [
            'Bu şartlar hakkında sorularınız için aşağıdaki adres üzerinden bizimle iletişime geçebilirsiniz:',
            'support@aveniaichat.com',
          ],
        },
        {
          title: 'Geliştirici ve İletişim',
          paragraphs: ['Geliştirici: Mustafa Kucukkoc', 'İletişim: support@aveniaichat.com'],
        },
      ],
      footerNote: 'Bu şartları kabul ederek Avenia’yı güvenli ve adil tutmamıza yardımcı olursunuz.',
    },
  };

  const t = content[lang] || content.en;

  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-[#00c896]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.title.split(' ')[0]} <span className="text-[#00c896]">{t.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <p className="text-gray-400 mt-4">
            {lang === 'tr' ? 'Son güncelleme' : 'Last updated'}: {t.updated}
          </p>
        </div>

        {/* Terms Content */}
        <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm p-8">
          <div className="prose prose-invert max-w-none">
            {t.sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
                  {section.title}
                </h2>
                {section.paragraphs?.map((paragraph, index) => (
                  <p key={`${section.title}-p-${index}`} className="text-gray-300 mb-6 leading-relaxed">
                    {paragraph.includes('support@') ? (
                      <>
                        {paragraph.split('support@aveniaichat.com')[0]}
                        <a href="mailto:support@aveniaichat.com" className="text-[#00c896] hover:underline">support@aveniaichat.com</a>
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
                {section.list ? (
                  <ul className="list-disc pl-8 space-y-2 text-gray-300 mb-6">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {section.link ? (
                  <p className="text-gray-300 mb-6">
                    <a href={section.link.href} className="text-[#00c896] hover:underline">
                      {section.link.text}
                    </a>
                  </p>
                ) : null}
              </div>
            ))}

            <div className="bg-[#00c896]/10 border border-[#00c896]/30 rounded-xl p-6 mt-8">
              <p className="text-[#00c896] font-medium">
                {t.footerNote}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
