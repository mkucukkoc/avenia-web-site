import React from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Database, Globe } from 'lucide-react';

export default function Status() {
  const systemStatus = {
    overall: 'operational', // operational, degraded, outage
    lastUpdate: '2024-12-15 14:30:00',
    uptime: '99.97%'
  };

  const services = [
    {
      name: 'API Servisleri',
      status: 'operational',
      description: 'Tüm API endpointları normal çalışıyor',
      icon: Server,
      uptime: '99.98%',
      responseTime: '125ms'
    },
    {
      name: 'Belge İşleme',
      status: 'operational', 
      description: 'PDF/Word/PPT özetleme servisleri aktif',
      icon: Activity,
      uptime: '99.95%',
      responseTime: '2.3s'
    },
    {
      name: 'Görsel Analizi',
      status: 'operational',
      description: 'AI vs Real görsel/video analizi çalışıyor',
      icon: Activity,
      uptime: '99.99%',
      responseTime: '1.8s'
    },
    {
      name: 'TTS/STT Servisleri',
      status: 'operational',
      description: 'Ses-metin dönüşüm servisleri aktif',
      icon: Activity,
      uptime: '99.96%',
      responseTime: '3.1s'
    },
    {
      name: 'Veritabanı',
      status: 'operational',
      description: 'MongoDB cluster sağlıklı çalışıyor',
      icon: Database,
      uptime: '99.99%',
      responseTime: '45ms'
    },
    {
      name: 'CDN & Statik Dosyalar',
      status: 'operational',
      description: 'İçerik dağıtım ağı normal hızda',
      icon: Globe,
      uptime: '99.97%',
      responseTime: '89ms'
    }
  ];

  const incidents = [
    {
      date: '2024-12-10',
      title: 'API Yanıt Sürelerinde Gecikme',
      status: 'resolved',
      severity: 'minor',
      description: 'Yoğun trafikten dolayı API yanıt süreleri normalden 2x yavaştı. Load balancer optimizasyonu ile çözüldü.',
      duration: '45 dakika'
    },
    {
      date: '2024-12-03', 
      title: 'TTS Servisinde Kesinti',
      status: 'resolved',
      severity: 'major',
      description: 'Üçüncü taraf TTS sağlayıcısında yaşanan sorun nedeniyle ses sentezi çalışmadı.',
      duration: '2 saat 15 dakika'
    },
    {
      date: '2024-11-28',
      title: 'Planlı Bakım',
      status: 'resolved', 
      severity: 'maintenance',
      description: 'Veritabanı performans optimizasyonu için planlı bakım gerçekleştirildi.',
      duration: '1 saat'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational':
        return 'text-green-500';
      case 'degraded':
        return 'text-yellow-500';
      case 'outage':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'operational':
        return 'Normal Çalışıyor';
      case 'degraded':
        return 'Performans Düşük';
      case 'outage':
        return 'Hizmet Dışı';
      default:
        return 'Bilinmiyor';
    }
  };

  const getSeverityBadge = (severity) => {
    switch (severity) {
      case 'minor':
        return <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">Küçük</Badge>;
      case 'major':
        return <Badge className="bg-red-500/20 text-red-500 border-red-500/30">Büyük</Badge>;
      case 'maintenance':
        return <Badge className="bg-blue-500/20 text-blue-500 border-blue-500/30">Bakım</Badge>;
      default:
        return <Badge className="bg-gray-500/20 text-gray-500 border-gray-500/30">Bilgi</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00c896]/20 border border-[#00c896]/30 mb-8">
            <span className="text-[#00c896] text-sm font-medium">📊 Sistem Durumu</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sistem <span className="text-[#00c896]">Durumu</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Avenia servislerinin anlık durumu ve geçmiş kesinti bilgileri
          </p>
        </div>

        {/* Overall Status */}
        <Card className="bg-gray-800/30 border-gray-700/50 p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {getStatusIcon(systemStatus.overall)}
                <h2 className="text-2xl font-bold text-white">Genel Durum</h2>
              </div>
              <Badge className={`${systemStatus.overall === 'operational' ? 'bg-green-500/20 text-green-500 border-green-500/30' : 'bg-red-500/20 text-red-500 border-red-500/30'}`}>
                {systemStatus.overall === 'operational' ? 'Tüm Sistemler Normal' : 'Sistemde Sorun Var'}
              </Badge>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-[#00c896]">{systemStatus.uptime}</div>
              <div className="text-gray-400 text-sm">30 gün uptime</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-[#00c896] font-bold text-xl">99.97%</div>
              <div className="text-gray-400 text-sm">Bu Ay Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-[#00c896] font-bold text-xl">145ms</div>
              <div className="text-gray-400 text-sm">Ortalama Yanıt Süresi</div>
            </div>
            <div className="text-center">
              <div className="text-[#00c896] font-bold text-xl">0</div>
              <div className="text-gray-400 text-sm">Aktif Kesinti</div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm">
              Son güncelleme: {systemStatus.lastUpdate}
            </p>
          </div>
        </Card>

        {/* Services Status */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Servis <span className="text-[#00c896]">Durumları</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <Card key={index} className="bg-gray-800/30 border-gray-700/50 p-6 hover:border-[#00c896]/50 transition-all duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#00c896]/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-[#00c896]" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{service.name}</h3>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </div>
                    </div>
                    {getStatusIcon(service.status)}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Durum:</span>
                      <span className={`text-sm font-medium ${getStatusColor(service.status)}`}>
                        {getStatusText(service.status)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Uptime:</span>
                      <span className="text-white text-sm font-medium">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Yanıt Süresi:</span>
                      <span className="text-white text-sm font-medium">{service.responseTime}</span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Incident History */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">
            Geçmiş <span className="text-[#00c896]">Kesintiler</span>
          </h2>
          
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700/50 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-white font-semibold">{incident.title}</h3>
                      {getSeverityBadge(incident.severity)}
                      <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                        Çözüldü
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{incident.description}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                      <span>📅 {incident.date}</span>
                      <span>⏱️ Etkilenme süresi: {incident.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Subscribe to Updates */}
        <Card className="bg-gradient-to-r from-gray-800/40 to-gray-800/60 p-12 text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Durum <span className="text-[#00c896]">Güncellemeleri</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Sistem durumu değişikliklerinden haberdar olmak için abone olun
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#00c896]"
            />
            <button className="bg-[#00c896] hover:bg-[#00b085] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#00c896]/25">
              Abone Ol
            </button>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">
            Sadece önemli güncellemeler gönderilir. Spam yapmayız.
          </p>
        </Card>
      </div>
    </div>
  );
}