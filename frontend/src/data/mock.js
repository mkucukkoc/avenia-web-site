// Mock data for Avenia landing page

export const features = [
  {
    id: 1,
    icon: "FileText",
    title: "PDF / Word / PowerPoint Özetleme",
    description: "Uzun belgeleri saniyeler içinde özetleyin, kritik bilgileri kaybetmeden hızlıca anlayın.",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    id: 2,
    icon: "Eye",
    title: "AI vs Gerçek Fotoğraf / Video Analizi",
    description: "Yüklediğiniz görsel veya videonun yapay zekâ ile üretilip üretilmediğini doğrulayın.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    id: 3,
    icon: "Volume2",
    title: "Ses ↔ Metin Dönüşümü (TTS & STT)",
    description: "Konuşmalarınızı metne dökün veya metinlerinizi çok dilli, doğal seslerle okutun.",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    id: 4,
    icon: "Video",
    title: "Görsel & Video Üretimi",
    description: "Entegre AI servisleri ile sosyal medya için yaratıcı görseller ve videolar oluşturun.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    id: 5,
    icon: "MessageSquare",
    title: "Akıllı Sohbet & Görevler",
    description: "Uzun bağlamlı sohbet edin, makale veya şarkı yazdırın, görev kartlarıyla üretkenliğinizi artırın.",
    gradient: "from-orange-500 to-amber-500"
  }
];

export const howItWorks = [
  {
    step: 1,
    title: "Yükle",
    description: "Dosyanızı sürükle-bırak ile yükleyin veya doğrudan metin girin.",
    icon: "Upload"
  },
  {
    step: 2,
    title: "Sor",
    description: "Ne yapmak istediğinizi belirtin - özetleme, analiz, dönüştürme...",  
    icon: "MessageCircle"
  },
  {
    step: 3,
    title: "Sonuç",
    description: "Saniyeler içinde istediğiniz çıktıyı alın ve projenizde kullanın.",
    icon: "CheckCircle"
  }
];

export const trustBadges = [
  {
    icon: "Shield",
    text: "Verileriniz Güvende"
  },
  {
    icon: "Zap",
    text: "Saniyeler İçinde"
  },
  {
    icon: "Globe",
    text: "Türkçe Destekli"
  },
  {
    icon: "Users",
    text: "1000+ Kullanıcı"
  }
];

export const faqData = [
  {
    question: "Avenia nedir?",
    answer: "Avenia, yapay zeka destekli çok amaçlı bir asistan platformudur. Belgelerinizi özetler, görselleri analiz eder, ses-metin dönüşümü yapar ve daha birçok AI görevini tek platformda sunar."
  },
  {
    question: "Verilerim güvende mi?",
    answer: "Evet, verilerinizin güvenliği bizim önceliğimizdir. Tüm veriler şifrelenir ve işlem tamamlandıktan sonra sunucularımızdan silinir. Verileriniz hiçbir şekilde üçüncü taraflarla paylaşılmaz."
  },
  {
    question: "Ücretsiz vs Premium arasındaki fark nedir?",
    answer: "Ücretsiz sürümde günlük kullanım limitleri vardır. Premium ile sınırsız kullanım, öncelikli işlem, gelişmiş AI modelleri ve özel destek hizmetine erişim sağlarsınız."
  },
  {
    question: "Hangi dosya türlerini destekliyorsunuz?",
    answer: "PDF, Word, PowerPoint, Excel, TXT dosyaları ile JPEG, PNG, GIF, MP4, AVI gibi görsel ve video formatlarını destekliyoruz. Sürekli yeni formatlar ekliyoruz."
  },
  {
    question: "API entegrasyonu mevcut mu?",
    answer: "Evet, geliştiriciler için RESTful API sunuyoruz. Kendi uygulamalarınıza Avenia'nın AI yeteneklerini entegre edebilirsiniz."
  },
  {
    question: "Mobil uygulama var mı?",
    answer: "Şu anda web tabanlı hizmet veriyoruz ancak mobil uygulamalarımız yakında App Store ve Google Play'de yayınlanacak."
  },
  {
    question: "İptal ve iade politikası nedir?",
    answer: "Premium aboneliğinizi istediğiniz zaman iptal edebilirsiniz. İlk 7 gün içinde memnun kalmazsanız, tam iade garantisi sunuyoruz."
  },
  {
    question: "Teknik destek nasıl alırım?",
    answer: "Premium üyelerimize 7/24 canlı destek, ücretsiz kullanıcılarımıza e-posta desteği sunuyoruz. Ayrıca detaylı dokümantasyon ve video eğitimlerimiz mevcuttur."
  }
];

export const navLinks = [
  { href: "/help", label: "Yardım" },
  { href: "/terms", label: "Şartlar" },
  { href: "/privacy", label: "Gizlilik" }
];

export const footerLinks = {
  product: [
    { label: "Özellikler", href: "#features" },
    { label: "Fiyatlandırma", href: "#pricing" },
    { label: "API Dokümantasyonu", href: "/docs" }
  ],
  company: [
    { label: "Hakkımızda", href: "/about" },
    { label: "İletişim", href: "/contact" },
    { label: "Kariyer", href: "/careers" }
  ],
  legal: [
    { label: "Kullanım Şartları", href: "/terms" },
    { label: "Gizlilik Politikası", href: "/privacy" },
    { label: "Çerez Politikası", href: "/cookies" }
  ],
  support: [
    { label: "Yardım Merkezi", href: "/help" },
    { label: "İletişim", href: "/contact" },
    { label: "Durum", href: "/status" }
  ]
};