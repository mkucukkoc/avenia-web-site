import React from 'react';
import { Mail, Trash2 } from 'lucide-react';
import { Card } from '../components/ui/card';
import { useLanguage } from '../i18n';

export default function AccountDelete() {
  const { lang } = useLanguage();
  const copy = {
    en: {
      title: 'Account & Data Deletion',
      subtitle: 'This page explains how to request deletion of your Avenia account and personal data.',
      howTitle: 'How account deletion works',
      howBody: 'Open the Avenia app and follow Settings → Delete Account. Once you confirm, your request is processed as soon as possible and completed within 30 days.',
      howList: [
        'Account profile information is removed.',
        'Chat history and generated media tied to your account are deleted.',
        'Uploads and outputs stored in Firebase (including image_coin/video_coin) are removed.',
        'Some records may be retained if required by law.'
      ],
      dataTitle: 'What data will be deleted',
      dataList: [
        'Account profile information',
        'Chat messages and related metadata',
        'Generated images/videos and saved outputs',
        'Uploaded files linked to your account',
        'Device and notification tokens'
      ],
      retainNote: 'Billing records remain only within Google Play billing systems. Backups may be retained briefly for security or legal reasons and are purged automatically afterward.',
      helpTitle: 'Need help?',
      helpBody: 'If you have any questions about account or data deletion, contact us at',
      helpLink: 'support@aveniaichat.com'
    },
    tr: {
      title: 'Hesap ve Veri Silme',
      subtitle: 'Bu sayfa, Avenia hesabınızı ve kişisel verilerinizi nasıl sileceğinizi açıklar.',
      howTitle: 'Hesap silme nasıl çalışır?',
      howBody: 'Avenia uygulamasında Ayarlar → Hesabı Sil adımlarını takip edin. Onayladığınızda talebiniz en kısa sürede işlenir ve 30 gün içinde tamamlanır.',
      howList: [
        'Hesap profili bilgileri kaldırılır.',
        'Sohbet geçmişi ve hesabınıza bağlı üretilen medya silinir.',
        'Firebase üzerindeki yüklemeler ve çıktılar (image_coin/video_coin dahil) kaldırılır.',
        'Yasal zorunluluk varsa bazı kayıtlar saklanabilir.'
      ],
      dataTitle: 'Silinecek veriler',
      dataList: [
        'Hesap profili bilgileri',
        'Sohbet mesajları ve ilgili meta veriler',
        'Üretilen görsel/video ve kayıtlı çıktılar',
        'Hesabınıza bağlı yüklenen dosyalar',
        'Cihaz ve bildirim tokenları'
      ],
      retainNote: 'Faturalama kayıtları yalnızca Google Play sisteminde kalır. Güvenlik veya yasal gerekçelerle yedekler kısa süre tutulup otomatik temizlenebilir.',
      helpTitle: 'Yardıma mı ihtiyacınız var?',
      helpBody: 'Hesap veya veri silme ile ilgili sorularınız için bize yazın:',
      helpLink: 'support@aveniaichat.com'
    }
  };

  const t = copy[lang] || copy.en;

  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Trash2 className="w-8 h-8 text-[#00c896]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.title.split(' ')[0]} <span className="text-[#00c896]">{t.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">{t.howTitle}</h2>
            <p className="text-gray-300">
              {t.howBody}
            </p>
            <ul className="text-gray-300 space-y-2 mt-4">
              {t.howList.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">{t.dataTitle}</h2>
            <ul className="text-gray-300 space-y-2">
              {t.dataList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-400 text-sm mt-4">
              {t.retainNote}
            </p>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">{t.helpTitle}</h2>
            <p className="text-gray-300">
              {t.helpBody}{' '}
              <a href="mailto:support@aveniaichat.com" className="text-[#00c896] hover:underline">
                {t.helpLink}
              </a>.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
