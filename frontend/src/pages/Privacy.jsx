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
            <pre className="whitespace-pre-wrap text-gray-300">
{`Avenia Uygulaması – Gizlilik Politikası
1. Giriş
Avenia, yapay zekâ destekli sohbet ve üretkenlik hizmetleri sunan bir mobil uygulamadır. Kullanıcılarımızın kişisel verilerinin gizliliği ve güvenliği bizim için önemlidir. Bu Gizlilik Politikası, uygulamamızı kullanırken hangi verileri topladığımızı, nasıl kullandığımızı ve koruduğumuzu açıklar. Uygulamayı kullanarak bu politikada belirtilen şartları kabul etmiş olursunuz.

2. Toplanan Veriler
Veri KategorisiÖrnekler ve Ayrıntılar
Hesap BilgileriKayıt/oturum açma sırasında ad, e‑posta, parola, Google hesabı kimliği
Cihaz ve Teknik BilgilerCihaz modeli, işletim sistemi, uygulama sürümü, benzersiz cihaz kimliği
Kullanım VerileriGörüntülenen ekranlar, tıklanan butonlar, dil tercihleri, hata günlükleri
İçerik ve DosyalarSohbet mesajları, yüklenen resim/doküman/video dosyaları, yapay zekâya gönderilen veriler
Abonelik ve Ödeme VerileriSatın alınan paketler, faturalandırma durumu (RevenueCat/RN Purchases aracılığıyla)
İletişim ve DestekGönderilen hata raporları, destek mesajları, kullanıcı geribildirimleri
Çerezler ve Benzeri TeknolojilerUygulama performansını ve deneyimini iyileştirmek için kullanılabilir; tarayıcı/cihaz ayarlarından yönetilebilir
3. Verilerin Kullanım Amaçları
Hesap oluşturma, kimlik doğrulama ve oturum yönetimi

Hizmetin sunulması, geliştirilmesi ve kişiselleştirilmesi

Yapay zekâ modeliyle (OpenAI API) etkileşim ve yanıt üretimi

Dosya yükleme, saklama ve paylaşma (Firebase Storage)

Abonelik işlemleri ve ödeme takibi

Güvenlik, hata tespiti, kötüye kullanımın önlenmesi

Yasal yükümlülüklerin yerine getirilmesi

Kullanıcının talebi üzerine destek sağlanması

4. Verilerin Paylaşımı
Kişisel veriler, aşağıdaki durumlar dışında üçüncü taraflarla paylaşılmaz:

Hizmet Sağlayıcılar

Firebase (kimlik doğrulama, veritabanı, dosya saklama)

OpenAI (sistem tarafından gönderilen metin/görsel içerik)

RevenueCat / Google Play / Apple App Store (abonelik yönetimi)

Analiz ve hata izleme servisleri (varsa)

Yasal Gereklilikler

Mahkeme kararı, emniyet makamlarının talebi gibi zorunlu durumlarda

Açık Rıza

Kullanıcının belirli bir paylaşım için açık rıza vermesi halinde

Paylaşım yapılan taraflar, verilerin gizliliğini korumakla yükümlüdür.

5. Verilerin Saklanması ve Silinmesi
Veriler, hizmetin sunulduğu süre boyunca veya yasal yükümlülükler gerektirdiği ölçüde saklanır.

Kullanıcı hesabı silindiğinde veya yasal süre dolduğunda kişisel veriler silinir, anonim hâle getirilir ya da depolama süresi sona erer.

Yüklenen dosya ve sohbet içerikleri kullanıcı tarafından manuel olarak kaldırılabilir; ayrıca aveniaapp@gmail.com üzerinden talep gönderilerek silme işlemi başlatılabilir.

6. Güvenlik
Veriler, şifreleme ve erişim kontrolü gibi teknik/organizasyonel tedbirlerle korunur.

Buna rağmen hiçbir sistem %100 güvenlik garantisi veremez; kullanıcılar da hesaplarını korumaktan sorumludur (güçlü parola, cihaz güvenliği vb.).

7. Kullanıcı Hakları
Kullanıcılar aşağıdaki haklara sahiptir:

Kişisel verilerine erişim talep etme

Yanlış veya eksik veriyi düzeltme

Yasal koşullar çerçevesinde verilerini silme veya işlenmesini kısıtlama

Rıza verdikleri işlemlerden rızalarını geri çekme

Veri taşınabilirliği talep etme (uygulanabildiği ölçüde)

Bu talepler için aveniaapp@gmail.com adresiyle iletişime geçebilirsiniz.

8. Çocukların Gizliliği
Avenia, 13 yaşın altındaki çocukları hedeflemez ve bilerek veri toplamaz. 13 yaşın altındaki bir çocuktan veri alındığı tespit edilirse hesap kapatılır ve veriler silinir.

9. Uluslararası Veri Aktarımları
Verileriniz, sunucularımız veya hizmet sağlayıcılarımız aracılığıyla farklı ülkelerde işlenebilir. Bu durumda, ilgili veri koruma yasalarına uygun önlemler alınır (ör. sözleşmesel güvenceler, standart sözleşme maddeleri).

10. Politika Değişiklikleri
Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişiklikler uygulama içinde bildirilir veya kayıtlı e‑posta adresinize gönderilir. Değişiklikleri takip etmek kullanıcıların sorumluluğundadır.

11. İletişim
Gizlilik Politikası ile ilgili sorularınız, talepleriniz veya şikâyetleriniz için:

E‑posta: aveniaapp@gmail.com

Avenia’yı tercih ettiğiniz için teşekkür ederiz. Uygulamayı kullanmaya devam ederek bu Gizlilik Politikasını kabul etmiş sayılırsınız.`}
            </pre>
          </div>
        </Card>
      </div>
    </div>
  );
}