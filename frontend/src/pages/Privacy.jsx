import React from 'react';
import { Card } from '../components/ui/card';
import { Shield } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Privacy() {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: 'Privacy Policy',
      subtitle: 'Detailed information on how we collect, process, and protect your personal data.',
      updated: 'March 08, 2026',
      sections: [
        {
          title: '1. Introduction',
          paragraphs: [
            'At Avenia we take the security and privacy of your personal data seriously. This policy explains how we process your information while delivering our services.',
            'We operate in compliance with GDPR and KVKK regulations.'
          ],
        },
        {
          title: '2. Data We Collect',
          paragraphs: ['We collect the following categories of data to provide the service:'],
          list: [
            'Account information (email, name, login identifiers).',
            'Usage data (feature usage and interaction logs).',
            'Uploaded content (text, files, images, audio/video).',
            'Technical data (IP address, device, browser/app details).',
            'Payment information processed by third‑party billing providers.'
          ],
        },
        {
          title: '3. How We Use Data',
          paragraphs: ['We process your data for the following purposes:'],
          list: [
            'Delivering and improving AI services.',
            'Managing and securing your account.',
            'Providing customer support.',
            'Improving quality and resolving issues.',
            'Complying with legal obligations.'
          ],
        },
        {
          title: '4. AI Processing & Third‑Party Providers',
          paragraphs: [
            'Avenia may use third‑party AI providers to process your requests. For example, chat/document processing may use Google Gemini, and image/video generation may use fal.ai and/or Gemini.',
            'We only send the data required to deliver the requested output. These providers process data on our behalf according to their own policies.'
          ],
        },
        {
          title: '5. Data Storage & Retention',
          paragraphs: [
            'Files are stored in Firebase to deliver the service. Temporary processing files are deleted after processing where possible.',
            'Saved outputs remain available in your account until you delete them or delete your account.',
            'Account deletion requests are completed within 30 days unless legal retention is required.'
          ],
        },
        {
          title: '6. Data Sharing',
          paragraphs: ['We share your data only when:'],
          list: [
            'We must comply with legal obligations or lawful requests.',
            'Trusted service providers support our operations (such as cloud or billing providers).',
            'You provide explicit consent.'
          ],
          highlight: 'We never sell your data to third parties.'
        },
        {
          title: '7. Your Rights',
          paragraphs: ['Under GDPR and KVKK you have the right to:'],
          list: [
            'Access the personal data we hold about you.',
            'Request corrections to inaccurate data.',
            'Request deletion of your data.',
            'Request data portability.',
            'Object to data processing in certain circumstances.'
          ],
        },
        {
          title: '8. Cookies',
          paragraphs: [
            'We use cookies to improve the user experience on our platform. You can manage cookie preferences through your browser settings.',
            'Essential cookies are required for the platform to function properly.'
          ],
        },
        {
          title: '9. Changes',
          paragraphs: [
            'This privacy policy may be updated from time to time. We will notify you by email about significant changes.',
            'Updates take effect on the date they are posted here.'
          ],
        },
        {
          title: '10. Contact',
          paragraphs: [
            'For any privacy-related questions:',
            'Email: support@aveniaichat.com',
            'Address: Maslak District, Teknoloji Campus, Istanbul, Turkey'
          ],
        },
      ],
      footerNote: '🔒 Your privacy is our priority. Reach out anytime if you have questions.'
    },
    tr: {
      title: 'Gizlilik Politikası',
      subtitle: 'Kişisel verilerinizi nasıl topladığımızı, işlediğimizi ve koruduğumuzu açıklarız.',
      updated: '08 Mart 2026',
      sections: [
        {
          title: '1. Giriş',
          paragraphs: [
            'Avenia olarak kişisel verilerinizin güvenliğine ve gizliliğine önem veririz. Bu politika, hizmetlerimizi sunarken verilerinizi nasıl işlediğimizi açıklar.',
            'GDPR ve KVKK düzenlemelerine uyum sağlarız.'
          ],
        },
        {
          title: '2. Topladığımız Veriler',
          paragraphs: ['Hizmeti sunmak için şu veri kategorilerini toplarız:'],
          list: [
            'Hesap bilgileri (e-posta, isim, giriş tanımlayıcıları).',
            'Kullanım verileri (özellik kullanımı ve etkileşim kayıtları).',
            'Yüklenen içerik (metin, dosya, görsel, ses/video).',
            'Teknik veriler (IP adresi, cihaz, tarayıcı/uygulama bilgileri).',
            'Üçüncü taraf ödeme sağlayıcıları tarafından işlenen ödeme bilgileri.'
          ],
        },
        {
          title: '3. Verileri Nasıl Kullanırız',
          paragraphs: ['Verilerinizi şu amaçlarla işleriz:'],
          list: [
            'AI hizmetlerini sunmak ve geliştirmek.',
            'Hesabınızı yönetmek ve güvenliğini sağlamak.',
            'Müşteri desteği vermek.',
            'Kaliteyi artırmak ve sorunları çözmek.',
            'Yasal yükümlülüklere uymak.'
          ],
        },
        {
          title: '4. AI İşleme ve Üçüncü Taraf Sağlayıcılar',
          paragraphs: [
            'Avenia, taleplerinizi işlemek için üçüncü taraf AI sağlayıcıları kullanabilir. Örneğin sohbet/belge işleme Google Gemini, görsel/video üretimi fal.ai ve/veya Gemini tarafından yapılabilir.',
            'Yalnızca istenen çıktıyı üretmek için gerekli veriler gönderilir. Bu sağlayıcılar veriyi kendi politikalarına göre işler.'
          ],
        },
        {
          title: '5. Depolama ve Saklama',
          paragraphs: [
            'Dosyalar hizmeti sunmak için Firebase üzerinde saklanır. Geçici işlem dosyaları mümkün olduğunda işlem sonrası silinir.',
            'Kaydedilmiş çıktılar siz silene veya hesabınızı kapatana kadar hesabınızda tutulur.',
            'Hesap silme talepleri, yasal saklama zorunlulukları dışında 30 gün içinde tamamlanır.'
          ],
        },
        {
          title: '6. Veri Paylaşımı',
          paragraphs: ['Verilerinizi yalnızca şu durumlarda paylaşırız:'],
          list: [
            'Yasal yükümlülükler veya resmi talepler söz konusuysa.',
            'Hizmeti sunmak için güvenilir sağlayıcılarla (bulut/ödeme vb.).',
            'Açık rızanız varsa.'
          ],
          highlight: 'Verilerinizi üçüncü taraflara satmayız.'
        },
        {
          title: '7. Haklarınız',
          paragraphs: ['GDPR ve KVKK kapsamında şu haklara sahipsiniz:'],
          list: [
            'Kişisel verilerinize erişme.',
            'Hatalı verilerin düzeltilmesini isteme.',
            'Veri silme talep etme.',
            'Veri taşınabilirliği talep etme.',
            'Belirli durumlarda işlemeye itiraz etme.'
          ],
        },
        {
          title: '8. Çerezler',
          paragraphs: [
            'Platform deneyimini iyileştirmek için çerezler kullanırız. Çerez tercihlerini tarayıcınızdan yönetebilirsiniz.',
            'Temel çerezler platformun çalışması için gereklidir.'
          ],
        },
        {
          title: '9. Değişiklikler',
          paragraphs: [
            'Bu politika zaman zaman güncellenebilir. Önemli değişikliklerde e-posta ile bilgilendiririz.',
            'Güncellemeler burada yayımlandığı tarihte yürürlüğe girer.'
          ],
        },
        {
          title: '10. İletişim',
          paragraphs: [
            'Gizlilikle ilgili sorularınız için:',
            'E-posta: support@aveniaichat.com',
            'Adres: Maslak, Teknoloji Kampüsü, İstanbul, Türkiye'
          ],
        },
      ],
      footerNote: '🔒 Gizliliğiniz önceliğimizdir. Sorularınız için bize yazabilirsiniz.'
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
