# Avenia - AI Asistan Platformu

Avenia, yapay zeka destekli çok amaçlı asistan platformudur. Belgelerinizi özetler, görselleri analiz eder, ses-metin dönüşümü yapar ve daha birçok AI görevini tek platformda sunar.

## 🚀 Özellikler

- **PDF/Word/PowerPoint Özetleme**: Uzun belgeleri saniyeler içinde özetleyin
- **AI vs Gerçek Fotoğraf/Video Analizi**: Yapay zeka ile üretilen içerikleri tespit edin
- **Ses ↔ Metin Dönüşümü**: TTS & STT teknolojileri ile ses ve metin arasında dönüşüm
- **Görsel & Video Üretimi**: AI servisleri ile yaratıcı içerikler oluşturun
- **Akıllı Sohbet & Görevler**: Uzun bağlamlı sohbet ve üretkenlik araçları

## 🛠️ Teknoloji Stack'i

### Frontend
- **React 19** - Modern UI kütüphanesi
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern component library
- **Lucide React** - İkon kütüphanesi
- **React Router** - Sayfa yönlendirme

### Backend
- **FastAPI** - Modern Python web framework
- **MongoDB** - NoSQL veritabanı
- **Motor** - Async MongoDB driver

### Tasarım
- **Koyu tema (#232323)** - Göz dostu karanlık tasarım
- **Turkuaz vurgu (#00c896)** - Modern ve canlı accent rengi
- **12px yumuşak köşeler** - Modern tasarım dili
- **Inter font ailesi** - Okunabilir tipografi

## 📦 Kurulum

### Gereksinimler
- Node.js 18+ 
- Python 3.8+
- MongoDB 4.4+
- Yarn package manager

### Frontend Kurulumu

```bash
cd frontend
yarn install
yarn start
```

### Backend Kurulumu

```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

### Environment Variables

Frontend için `.env` dosyası oluşturun:
```bash
cp .env.example .env
```

Backend için `.env` dosyası oluşturun:
```bash
# MongoDB bağlantısı
MONGO_URL=mongodb://localhost:27017
DB_NAME=avenia

# Diğer ayarlar
SECRET_KEY=your-secret-key-here
```

## 🏗️ Proje Yapısı

```
avenia/
├── frontend/                 # React uygulaması
│   ├── public/              # Statik dosyalar
│   │   ├── sitemap.xml     # SEO için sitemap
│   │   └── robots.txt      # Crawler ayarları
│   ├── src/
│   │   ├── components/     # React bileşenleri
│   │   │   ├── ui/        # Shadcn/ui bileşenleri
│   │   │   ├── Navbar.jsx # Navigasyon bileşeni
│   │   │   ├── Hero.jsx   # Ana başlık bölümü
│   │   │   └── ...        # Diğer bileşenler
│   │   ├── pages/         # Sayfa bileşenleri
│   │   │   ├── Home.jsx   # Ana sayfa
│   │   │   ├── Help.jsx   # Yardım sayfası
│   │   │   ├── Terms.jsx  # Kullanım şartları
│   │   │   └── Privacy.jsx # Gizlilik politikası
│   │   ├── data/          # Mock veriler
│   │   │   └── mock.js    # Uygulama verileri
│   │   └── App.js         # Ana uygulama bileşeni
├── backend/                 # FastAPI uygulaması
│   ├── server.py           # Ana sunucu dosyası
│   └── requirements.txt    # Python bağımlılıkları
└── README.md               # Bu dosya
```

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Ana arka plan**: `#232323` - Koyu, modern
- **İkincil arka plan**: `#2a2a2a` - Kartlar için
- **Ana vurgu**: `#00c896` - Turkuaz yeşil
- **Metin**: `#ffffff` (ana), `#e5e5e5` (ikincil)

### Bileşen Kılavuzu
- **Butonlar**: 12px border-radius, hover efektleri
- **Kartlar**: 16px border-radius, subtle gölgeler
- **Input alanları**: 12px border-radius, focus states
- **Animasyonlar**: 200-300ms geçiş süreleri

## 📱 Responsive Tasarım

- **Mobile First**: 480px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

## 🔍 SEO ve Erişilebilirlik

- Semantic HTML yapısı
- Alt text'ler görsel içerikler için
- Uygun başlık hiyerarşisi (h1, h2, h3)
- Meta tag'ler her sayfa için
- Sitemap.xml ve robots.txt
- ARIA labels kritik etkileşimler için

## 🚀 Deployment

### Vercel (Önerilen)
```bash
# Frontend deployment
vercel --prod

# Environment variables ekleyin:
# REACT_APP_BACKEND_URL=https://your-backend-url.com
# REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX (opsiyonel)
```

### Manuel Deployment
```bash
# Frontend build
cd frontend
yarn build

# Backend için production ayarları
cd backend
# production environment variables ayarlayın
# uvicorn server:app --host 0.0.0.0 --port 8001
```

