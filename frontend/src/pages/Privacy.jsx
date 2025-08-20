import React from 'react';
import { Card } from '../components/ui/card';
import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-[#00c896]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Gizlilik <span className="text-[#00c896]">Politikası</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında detaylı bilgiler
          </p>
          <p className="text-gray-400 mt-4">
            Son güncelleme: 15 Aralık 2024
          </p>
        </div>

        {/* Privacy Content */}
        <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm p-8">
          <div className="prose prose-invert max-w-none">
            
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              1. Giriş
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Avenia olarak, kişisel verilerinizin güvenliği ve gizliliği bizim için son derece 
              önemlidir. Bu politika, hizmetlerimizi kullanırken verilerinizin nasıl işlendiğini 
              açıklamaktadır. KVKK ve GDPR uyumlu olarak çalışmaktayız.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              2. Toplanan Veriler
            </h2>
            <div className="text-gray-300 mb-6 leading-relaxed">
              <p className="mb-4">Hizmetlerimizi sunarken aşağıdaki veri türlerini topluyoruz:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li><strong>Hesap Bilgileri:</strong> E-posta adresi, ad-soyad, şifre</li>
                <li><strong>Kullanım Verileri:</strong> Platform etkileşimleri, özellik kullanımı</li>
                <li><strong>Yüklenen İçerik:</strong> Analiz için yüklediğiniz dosyalar ve metinler</li>
                <li><strong>Teknik Veriler:</strong> IP adresi, tarayıcı bilgileri, cihaz türü</li>
                <li><strong>Ödeme Bilgileri:</strong> Kredi kartı bilgileri (üçüncü taraf işlemci aracılığıyla)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              3. Veri İşleme Amaçları
            </h2>
            <div className="text-gray-300 mb-6 leading-relaxed">
              <p className="mb-4">Verilerinizi aşağıdaki amaçlarla işliyoruz:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>AI hizmetlerini sunmak ve geliştirmek</li>
                <li>Hesabınızı yönetmek ve güvenliğini sağlamak</li>
                <li>Müşteri desteği sağlamak</li>
                <li>Hizmet kalitesini artırmak ve hatalar düzeltmek</li>
                <li>Yasal yükümlülükleri yerine getirmek</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              4. Veri Güvenliği
            </h2>
            <div className="text-gray-300 mb-6 leading-relaxed">
              <p className="mb-4">Verilerinizin güvenliği için aldığımız önlemler:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>256-bit SSL şifreleme ile veri aktarımı</li>
                <li>Veriler şifreli olarak saklanır</li>
                <li>Düzenli güvenlik denetimleri</li>
                <li>Erişim kontrolü ve kimlik doğrulama</li>
                <li>Veri yedekleme ve kurtarma sistemleri</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              5. Veri Saklama
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Yüklediğiniz dosyalar işlem tamamlandıktan sonra <strong>24 saat içinde</strong> 
              silinir. Hesap bilgileriniz hesabınızı kapattığınızda veya yasal saklama süresi 
              tamamlandığında silinir. Yasal yükümlülükler gereği bazı veriler daha uzun süre 
              saklanabilir.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              6. Veri Paylaşımı
            </h2>
            <div className="text-gray-300 mb-6 leading-relaxed">
              <p className="mb-4">Verilerinizi yalnızca aşağıdaki durumlarda paylaşırız:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Yasal zorunluluklar (mahkeme kararı, yasal süreç)</li>
                <li>Güvenilir hizmet sağlayıcıları (ödeme işlemcisi, cloud servisi)</li>
                <li>Açık onayınız ile</li>
              </ul>
              <p className="mt-4 font-medium text-[#00c896]">
                Verileriniz hiçbir zaman ticari amaçla üçüncü taraflarla paylaşılmaz.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              7. Haklarınız
            </h2>
            <div className="text-gray-300 mb-6 leading-relaxed">
              <p className="mb-4">KVKK ve GDPR kapsamında aşağıdaki haklarınız bulunmaktadır:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Verilerinize erişim hakkı</li>
                <li>Veri düzeltme hakkı</li>
                <li>Veri silme hakkı ("unutulma hakkı")</li>
                <li>Veri taşınabilirlik hakkı</li>
                <li>İşlemeye itiraz etme hakkı</li>
                <li>Otomatik karar verme süreçlerine itiraz</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              8. Çerezler
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Platformumuzda kullanıcı deneyimini iyileştirmek için çerezler kullanıyoruz. 
              Çerez tercihlerinizi tarayıcı ayarlarından yönetebilirsiniz. Zorunlu çerezler 
              platformun çalışması için gereklidir.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              9. Değişiklikler
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Bu gizlilik politikası güncellenebilir. Önemli değişiklikler e-posta ile 
              bildirilir. Politika değişiklikleri bu sayfada yayınlandığı tarihte yürürlüğe girer.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              10. İletişim
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Gizlilik ile ilgili sorularınız için:
              <br />
              📧 E-posta: <a href="mailto:privacy@avenia.com" className="text-[#00c896] hover:underline">privacy@avenia.com</a>
              <br />
              📍 Adres: Maslak Mahallesi, Teknoloji Sitesi, İstanbul, Türkiye
            </p>

            <div className="bg-[#00c896]/10 border border-[#00c896]/30 rounded-xl p-6 mt-8">
              <p className="text-[#00c896] font-medium">
                🔒 Gizliliğiniz bizim önceliğimizdir. Sorularınız için her zaman bizimle iletişime geçebilirsiniz.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}