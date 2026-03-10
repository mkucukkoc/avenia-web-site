import React from 'react';
import { Card } from '../components/ui/card';
import { Shield } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Privacy() {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: 'Avenia Privacy Policy',
      subtitle: 'Explains how personal data is collected, used, and processed when using the Avenia app.',
      updated: 'March 08, 2026',
      sections: [
        {
          title: '1. Introduction',
          paragraphs: [
            'At Avenia, we take our users\' privacy seriously. This Privacy Policy explains how personal data is collected, used, and processed when using the Avenia app.',
            'Avenia is a service available worldwide and aims to comply with applicable data protection regulations. Examples include:',
            'By using the app, you accept this Privacy Policy.'
          ],
          list: ['GDPR (European Union)', 'KVKK (Turkey)'],
        },
        {
          title: '2. Data We Collect',
          paragraphs: ['The following categories of data may be collected to provide the service:'],
          list: [
            'Account Information: email address, username, login authentication information.',
            'Usage Data: in-app interactions, features used, usage statistics.',
            'Uploaded Content: text, documents, images, audio or video files.',
            'Technical Data: IP address, device information, operating system, app version.',
            'Payment Information: Payments are processed by app stores (Google Play, Apple App Store). Avenia does not store payment card details.'
          ],
        },
        {
          title: '3. How We Use Data',
          paragraphs: ['Collected data may be used for the following purposes:'],
          list: [
            'providing AI services',
            'creating or analyzing content',
            'managing user accounts',
            'ensuring security',
            'improving service performance',
            'resolving technical issues',
            'complying with legal obligations'
          ],
        },
        {
          title: '4. AI Processing and Third-Party Providers',
          paragraphs: [
            'Avenia may use third-party service providers to offer some features.',
            'Content submitted by the user may be processed by these services.',
            'These service providers may process data in accordance with their own privacy policies.',
            'Avenia is not directly responsible for the data processing activities of third-party services.'
          ],
          list: ['Google Gemini', 'fal.ai', 'cloud infrastructure providers', 'data storage services'],
        },
        {
          title: '5. Storage and Retention',
          paragraphs: [
            'Data may be stored on the following infrastructure:',
            'Data is retained for as long as necessary to operate the service.',
            'Temporary processing data is deleted where possible after processing is completed.',
            'Account deletion requests are processed within 30 days, except where legal retention obligations apply.'
          ],
          list: ['Firebase', 'cloud storage services'],
        },
        {
          title: '6. Data Sharing',
          paragraphs: ['Data may be shared in the following cases:'],
          list: [
            'with technology providers required to deliver the service',
            'when legally required',
            'upon requests from official authorities',
            'when the user gives explicit consent'
          ],
          highlight: 'Avenia does not sell user data for commercial purposes.',
        },
        {
          title: '7. User Content and Responsibility',
          paragraphs: [
            'Users are responsible for the content they upload or create in the app.',
            'The user represents that they have the necessary rights or permissions for the content they upload.',
            'Avenia is not obligated to verify the accuracy or legal status of user-provided content.'
          ],
        },
        {
          title: '8. International Data Transfer',
          paragraphs: [
            'Avenia is a service accessible worldwide.',
            'Therefore, data may be processed or stored in the following countries:',
            'By using the app, you consent to your data being transferred to these countries.'
          ],
          list: ['European Union', 'United States', 'other countries with data centers'],
        },
        {
          title: '9. Cookies',
          paragraphs: [
            'Avenia web services and related platforms may use cookies.',
            'Cookies may be used for the following purposes:'
          ],
          list: [
            'improving user experience',
            'providing technical functions',
            'performing performance analytics'
          ],
        },
        {
          title: '10. Your Rights',
          paragraphs: [
            'Depending on your country, you may have the following rights:',
            'You can contact us to exercise your rights.'
          ],
          list: [
            'access your data',
            'correct inaccurate data',
            'request deletion of data',
            'request data portability',
            'object to data processing'
          ],
        },
        {
          title: '11. Changes',
          paragraphs: [
            'This Privacy Policy may be updated from time to time.',
            'The updated version takes effect on the date it is published.'
          ],
        },
        {
          title: '12. Contact',
          paragraphs: [
            'For privacy-related questions:',
            'support@aveniaichat.com'
          ],
        },
        {
          title: 'Developer and Contact',
          paragraphs: ['Developer: Mustafa Kucukkoc', 'Contact: support@aveniaichat.com'],
        },
      ],
      footerNote: 'At Avenia, we take our users\' privacy seriously.'
    },
    tr: {
      title: 'Avenia Gizlilik Politikası',
      subtitle: 'Avenia uygulamasını kullanırken kişisel verilerin nasıl toplandığını, kullanıldığını ve işlendiğini açıklar.',
      updated: '08 Mart 2026',
      sections: [
        {
          title: '1. Giriş',
          paragraphs: [
            'Avenia olarak kullanıcılarımızın gizliliğini ciddiye alıyoruz. Bu Gizlilik Politikası, Avenia uygulamasını kullanırken kişisel verilerin nasıl toplandığını, kullanıldığını ve işlendiğini açıklar.',
            'Avenia dünya genelinde kullanılabilen bir hizmettir ve ilgili veri koruma düzenlemelerine uymayı hedefler. Buna örnek olarak:',
            'Uygulamayı kullanarak bu Gizlilik Politikasını kabul etmiş olursunuz.'
          ],
          list: ['GDPR (Avrupa Birliği)', 'KVKK (Türkiye)'],
        },
        {
          title: '2. Topladığımız Veriler',
          paragraphs: ['Hizmeti sağlamak amacıyla aşağıdaki veri kategorileri toplanabilir:'],
          list: [
            'Hesap Bilgileri: e-posta adresi, kullanıcı adı, giriş kimlik doğrulama bilgileri.',
            'Kullanım Verileri: uygulama içi etkileşimler, kullanılan özellikler, kullanım istatistikleri.',
            'Yüklenen İçerikler: metin, belgeler, görseller, ses veya video dosyaları.',
            'Teknik Veriler: IP adresi, cihaz bilgileri, işletim sistemi, uygulama versiyonu.',
            'Ödeme Bilgileri: Ödemeler uygulama mağazaları tarafından işlenir (Google Play, Apple App Store). Avenia ödeme kartı bilgilerini saklamaz.'
          ],
        },
        {
          title: '3. Verileri Nasıl Kullanırız',
          paragraphs: ['Toplanan veriler aşağıdaki amaçlarla kullanılabilir:'],
          list: [
            'AI hizmetlerini sağlamak',
            'içerik üretmek veya analiz etmek',
            'kullanıcı hesaplarını yönetmek',
            'güvenliği sağlamak',
            'hizmet performansını geliştirmek',
            'teknik sorunları çözmek',
            'yasal yükümlülüklere uymak'
          ],
        },
        {
          title: '4. AI İşleme ve Üçüncü Taraf Sağlayıcılar',
          paragraphs: [
            'Avenia bazı özellikleri sunmak için üçüncü taraf servis sağlayıcıları kullanabilir.',
            'Kullanıcı tarafından gönderilen içerikler bu servisler tarafından işlenebilir.',
            'Bu servis sağlayıcılar verileri kendi gizlilik politikaları doğrultusunda işleyebilir.',
            'Avenia, üçüncü taraf servislerin veri işleme faaliyetlerinden doğrudan sorumlu değildir.'
          ],
          list: ['Google Gemini', 'fal.ai', 'bulut altyapı sağlayıcıları', 'veri depolama hizmetleri'],
        },
        {
          title: '5. Depolama ve Saklama',
          paragraphs: [
            'Veriler aşağıdaki altyapılar üzerinde saklanabilir:',
            'Veriler hizmetin çalışması için gerekli süre boyunca tutulur.',
            'Geçici işlem verileri mümkün olduğunda işlem tamamlandıktan sonra silinir.',
            'Hesap silme talepleri, yasal saklama yükümlülükleri hariç olmak üzere 30 gün içinde işlenir.'
          ],
          list: ['Firebase', 'bulut depolama servisleri'],
        },
        {
          title: '6. Veri Paylaşımı',
          paragraphs: ['Veriler aşağıdaki durumlarda paylaşılabilir:'],
          list: [
            'hizmeti sağlamak için gerekli teknoloji sağlayıcıları ile',
            'yasal zorunluluk durumunda',
            'resmi kurum talepleri halinde',
            'kullanıcı açık rıza verdiğinde'
          ],
          highlight: 'Avenia kullanıcı verilerini ticari amaçlarla satmaz.',
        },
        {
          title: '7. Kullanıcı İçeriği ve Sorumluluk',
          paragraphs: [
            'Kullanıcılar uygulamaya yükledikleri veya oluşturdukları içeriklerden kendileri sorumludur.',
            'Kullanıcı, yüklediği içerik üzerinde gerekli haklara sahip olduğunu veya gerekli izinleri aldığını beyan eder.',
            'Avenia, kullanıcı tarafından sağlanan içeriklerin doğruluğunu veya yasal durumunu doğrulamakla yükümlü değildir.'
          ],
        },
        {
          title: '8. Uluslararası Veri Transferi',
          paragraphs: [
            'Avenia dünya genelinde erişilebilen bir hizmettir.',
            'Bu nedenle veriler aşağıdaki ülkelerde işlenebilir veya saklanabilir:',
            'Uygulamayı kullanarak verilerinizin bu ülkelere aktarılabileceğini kabul etmiş olursunuz.'
          ],
          list: ['Avrupa Birliği', 'Amerika Birleşik Devletleri', 'diğer veri merkezleri bulunan ülkeler'],
        },
        {
          title: '9. Çerezler',
          paragraphs: [
            'Avenia web hizmetleri ve bağlantılı platformlar çerezler kullanabilir.',
            'Çerezler aşağıdaki amaçlarla kullanılabilir:'
          ],
          list: [
            'kullanıcı deneyimini geliştirmek',
            'teknik işlevleri sağlamak',
            'performans analizi yapmak'
          ],
        },
        {
          title: '10. Haklarınız',
          paragraphs: [
            'Bulunduğunuz ülkeye bağlı olarak aşağıdaki haklara sahip olabilirsiniz:',
            'Hak talepleri için bizimle iletişime geçebilirsiniz.'
          ],
          list: [
            'verilerinize erişme',
            'yanlış verileri düzeltme',
            'verilerin silinmesini isteme',
            'veri taşınabilirliği talep etme',
            'veri işlenmesine itiraz etme'
          ],
        },
        {
          title: '11. Değişiklikler',
          paragraphs: [
            'Bu Gizlilik Politikası zaman zaman güncellenebilir.',
            'Güncellenmiş versiyon yayınlandığı tarihte yürürlüğe girer.'
          ],
        },
        {
          title: '12. İletişim',
          paragraphs: [
            'Gizlilikle ilgili sorularınız için:',
            'support@aveniaichat.com'
          ],
        },
        {
          title: 'Geliştirici ve İletişim',
          paragraphs: ['Geliştirici: Mustafa Kucukkoc', 'İletişim: support@aveniaichat.com'],
        },
      ],
      footerNote: 'Avenia olarak kullanıcılarımızın gizliliğini ciddiye alıyoruz.'
    }
  };

  const t = content[lang] || content.en;

  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-[#00c896]" />
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

        {/* Privacy Content */}
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
                {section.highlight ? (
                  <p className="mt-4 font-medium text-[#00c896]">
                    {section.highlight}
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
