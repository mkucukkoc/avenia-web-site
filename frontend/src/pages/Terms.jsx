import React from 'react';
import { Card } from '../components/ui/card';
import { FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-[#00c896]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kullanım <span className="text-[#00c896]">Şartları</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Avenia hizmetlerini kullanırken geçerli olan şartlar ve koşullar
          </p>
          <p className="text-gray-400 mt-4">
            Son güncelleme: 15 Aralık 2024
          </p>
        </div>

        {/* Terms Content */}
        <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm p-8">
          <div className="prose prose-invert max-w-none">
            
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              1. Hizmet Kapsamı
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Avenia, yapay zeka destekli belge özetleme, görsel analizi, ses-metin dönüşümü ve 
              diğer AI hizmetlerini sunan bir platformdur. Bu hizmetleri kullanarak aşağıdaki 
              şartları kabul etmiş sayılırsınız.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              2. Kullanıcı Sorumlulukları
            </h2>
            <div className="text-gray-300 mb-6 leading-relaxed">
              <p className="mb-4">Kullanıcı olarak aşağıdaki sorumluluklara sahipsiniz:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Platformu yasal amaçlar için kullanmak</li>
                <li>Telif hakkı ihlali içeren içerikler yüklememek</li>
                <li>Zararlı yazılım veya spam içeriği paylaşmamak</li>
                <li>Diğer kullanıcıların haklarını ihlal etmemek</li>
                <li>Hesap bilgilerinizin güvenliğini sağlamak</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              3. Veri İşleme ve Gizlilik
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Yüklediğiniz dosyalar yalnızca size hizmet sunmak amacıyla işlenir. Verileriniz 
              işlem tamamlandıktan sonra silinir ve üçüncü taraflarla paylaşılmaz. Detaylı 
              bilgi için <a href="/privacy" className="text-[#00c896] hover:underline">Gizlilik Politikamızı</a> inceleyin.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              4. Hizmet Sınırlamaları
            </h2>
            <div className="text-gray-300 mb-6 leading-relaxed">
              <p className="mb-4">Hizmetlerimizde aşağıdaki sınırlamalar bulunmaktadır:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Ücretsiz hesaplarda günlük kullanım limitleri</li>
                <li>Dosya boyutu sınırlamaları (maksimum 100MB)</li>
                <li>Eş zamanlı işlem sayısı limitleri</li>
                <li>Belirli dosya formatları ile sınırlılık</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              5. Ödeme ve İptal
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium abonelik ücretleri aylık olarak tahsil edilir. Aboneliğinizi istediğiniz 
              zaman iptal edebilirsiniz. İptal durumunda, mevcut dönem sonuna kadar hizmetlerden 
              yararlanmaya devam edersiniz. İade talepleri ilk 7 gün içinde değerlendirilir.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              6. Fikri Mülkiyet
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Avenia platformu ve tüm içerikleri fikri mülkiyet haklarıyla korunmaktadır. 
              Kullanıcılar, yüklediği içeriklerin telif haklarına sahip olduğunu veya 
              kullanım iznine sahip olduğunu beyan eder.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              7. Hizmet Kesintileri
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Teknik bakım, güncelleme veya beklenmeyen durumlar nedeniyle hizmetlerimizde 
              geçici kesintiler yaşanabilir. Bu durumlardan kaynaklanan zararlardan 
              sorumlu değiliz.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              8. Değişiklikler
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Bu kullanım şartları zaman zaman güncellenebilir. Önemli değişiklikler e-posta 
              yoluyla bildirilir. Değişikliklerden sonra hizmeti kullanmaya devam etmeniz 
              yeni şartları kabul ettiğiniz anlamına gelir.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              9. İletişim
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Bu kullanım şartları hakkında sorularınız için 
              <a href="mailto:legal@avenia.com" className="text-[#00c896] hover:underline ml-1">
                legal@avenia.com
              </a> adresinden bizimle iletişime geçebilirsiniz.
            </p>

            <div className="bg-[#00c896]/10 border border-[#00c896]/30 rounded-xl p-6 mt-8">
              <p className="text-[#00c896] font-medium">
                📄 Bu şartları kabul ederek Avenia'nın güvenli ve adil kullanımına katkıda bulunuyorsunuz.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}