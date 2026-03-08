import React from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Database, Globe } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Status() {
  const { lang } = useLanguage();

  const copy = {
    en: {
      badge: '📊 System Status',
      titlePrefix: 'Service',
      titleEmphasis: 'Status',
      subtitle: 'Live status of Avenia services plus recent incident history.',
      overallTitle: 'Overall Status',
      allOperational: 'All Systems Operational',
      issuesDetected: 'Issues Detected',
      uptimeLabel: '30-day uptime',
      uptimeMonth: 'Uptime this month',
      avgResponse: 'Average response time',
      activeIncidents: 'Active incidents',
      lastUpdated: 'Last updated',
      serviceStatusTitle: 'Service Status',
      incidentTitle: 'Incident History',
      statusLabels: {
        operational: 'Operational',
        degraded: 'Degraded Performance',
        outage: 'Service Outage',
        unknown: 'Unknown'
      },
      severity: {
        minor: 'Minor',
        major: 'Major',
        maintenance: 'Maintenance',
        info: 'Info'
      },
      resolved: 'Resolved',
      impactDuration: 'Impact duration',
      labels: {
        status: 'Status',
        uptime: 'Uptime',
        response: 'Response time'
      },
      systemStatus: {
        overall: 'operational',
        lastUpdate: '2024-12-15 14:30:00',
        uptime: '99.97%'
      },
      services: [
        {
          name: 'API Services',
          status: 'operational',
          description: 'All API endpoints are operating normally.',
          icon: Server,
          uptime: '99.98%',
          responseTime: '125ms'
        },
        {
          name: 'Document Processing',
          status: 'operational',
          description: 'PDF/Word/PPT summarization services are available.',
          icon: Activity,
          uptime: '99.95%',
          responseTime: '2.3s'
        },
        {
          name: 'Visual Analysis',
          status: 'operational',
          description: 'AI vs real image/video detection is running smoothly.',
          icon: Activity,
          uptime: '99.99%',
          responseTime: '1.8s'
        },
        {
          name: 'TTS/STT Services',
          status: 'operational',
          description: 'Speech-to-text conversion services are active.',
          icon: Activity,
          uptime: '99.96%',
          responseTime: '3.1s'
        },
        {
          name: 'Database',
          status: 'operational',
          description: 'Database cluster remains healthy.',
          icon: Database,
          uptime: '99.99%',
          responseTime: '45ms'
        },
        {
          name: 'CDN & Static Assets',
          status: 'operational',
          description: 'Content delivery network performing at normal speed.',
          icon: Globe,
          uptime: '99.97%',
          responseTime: '89ms'
        }
      ],
      incidents: [
        {
          date: '2024-12-10',
          title: 'API Response Latency',
          status: 'resolved',
          severity: 'minor',
          description: 'Heavy traffic caused API responses to run twice as slow as usual. Load balancer optimizations resolved the issue.',
          duration: '45 minutes'
        },
        {
          date: '2024-12-03',
          title: 'TTS Service Outage',
          status: 'resolved',
          severity: 'major',
          description: 'A third-party TTS provider outage temporarily disabled speech synthesis.',
          duration: '2 hours 15 minutes'
        },
        {
          date: '2024-11-28',
          title: 'Scheduled Maintenance',
          status: 'resolved',
          severity: 'maintenance',
          description: 'Performed planned maintenance to optimize database performance.',
          duration: '1 hour'
        }
      ]
    },
    tr: {
      badge: '📊 Sistem Durumu',
      titlePrefix: 'Hizmet',
      titleEmphasis: 'Durumu',
      subtitle: 'Avenia servislerinin canlı durumu ve son olay geçmişi.',
      overallTitle: 'Genel Durum',
      allOperational: 'Tüm Sistemler Aktif',
      issuesDetected: 'Sorun Tespit Edildi',
      uptimeLabel: '30 günlük çalışma',
      uptimeMonth: 'Bu ay çalışma süresi',
      avgResponse: 'Ortalama yanıt süresi',
      activeIncidents: 'Aktif olay',
      lastUpdated: 'Son güncelleme',
      serviceStatusTitle: 'Servis Durumu',
      incidentTitle: 'Olay Geçmişi',
      statusLabels: {
        operational: 'Çalışıyor',
        degraded: 'Düşük Performans',
        outage: 'Kesinti',
        unknown: 'Bilinmiyor'
      },
      severity: {
        minor: 'Küçük',
        major: 'Büyük',
        maintenance: 'Bakım',
        info: 'Bilgi'
      },
      resolved: 'Çözüldü',
      impactDuration: 'Etkilenen süre',
      labels: {
        status: 'Durum',
        uptime: 'Çalışma',
        response: 'Yanıt süresi'
      },
      systemStatus: {
        overall: 'operational',
        lastUpdate: '2024-12-15 14:30:00',
        uptime: '99.97%'
      },
      services: [
        {
          name: 'API Servisleri',
          status: 'operational',
          description: 'Tüm API uç noktaları normal çalışıyor.',
          icon: Server,
          uptime: '99.98%',
          responseTime: '125ms'
        },
        {
          name: 'Belge İşleme',
          status: 'operational',
          description: 'PDF/Word/PPT özetleme servisleri aktif.',
          icon: Activity,
          uptime: '99.95%',
          responseTime: '2.3s'
        },
        {
          name: 'Görsel Analiz',
          status: 'operational',
          description: 'AI vs gerçek görsel/video tespiti sorunsuz çalışıyor.',
          icon: Activity,
          uptime: '99.99%',
          responseTime: '1.8s'
        },
        {
          name: 'TTS/STT Servisleri',
          status: 'operational',
          description: 'Ses‑metin dönüşüm servisleri aktif.',
          icon: Activity,
          uptime: '99.96%',
          responseTime: '3.1s'
        },
        {
          name: 'Veritabanı',
          status: 'operational',
          description: 'Veritabanı kümesi sağlıklı.',
          icon: Database,
          uptime: '99.99%',
          responseTime: '45ms'
        },
        {
          name: 'CDN ve Statik İçerik',
          status: 'operational',
          description: 'İçerik dağıtım ağı normal hızda çalışıyor.',
          icon: Globe,
          uptime: '99.97%',
          responseTime: '89ms'
        }
      ],
      incidents: [
        {
          date: '2024-12-10',
          title: 'API Yanıt Gecikmesi',
          status: 'resolved',
          severity: 'minor',
          description: 'Yoğun trafik API yanıtlarını yavaşlattı. Yük dengeleyici optimizasyonları sorunu çözdü.',
          duration: '45 dakika'
        },
        {
          date: '2024-12-03',
          title: 'TTS Servis Kesintisi',
          status: 'resolved',
          severity: 'major',
          description: 'Üçüncü taraf TTS sağlayıcısı kesintisi geçici olarak konuşma sentezini etkiledi.',
          duration: '2 saat 15 dakika'
        },
        {
          date: '2024-11-28',
          title: 'Planlı Bakım',
          status: 'resolved',
          severity: 'maintenance',
          description: 'Veritabanı performansını optimize etmek için bakım yapıldı.',
          duration: '1 saat'
        }
      ]
    }
  };

  const t = copy[lang] || copy.en;
  const systemStatus = t.systemStatus;
  const services = t.services;
  const incidents = t.incidents;

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
    return t.statusLabels[status] || t.statusLabels.unknown;
  };

  const getSeverityBadge = (severity) => {
    switch (severity) {
      case 'minor':
        return <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">{t.severity.minor}</Badge>;
      case 'major':
        return <Badge className="bg-red-500/20 text-red-500 border-red-500/30">{t.severity.major}</Badge>;
      case 'maintenance':
        return <Badge className="bg-blue-500/20 text-blue-500 border-blue-500/30">{t.severity.maintenance}</Badge>;
      default:
        return <Badge className="bg-gray-500/20 text-gray-500 border-gray-500/30">{t.severity.info}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00c896]/20 border border-[#00c896]/30 mb-8">
            <span className="text-[#00c896] text-sm font-medium">{t.badge}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.titlePrefix} <span className="text-[#00c896]">{t.titleEmphasis}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Overall Status */}
        <Card className="bg-gray-800/30 border-gray-700/50 p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {getStatusIcon(systemStatus.overall)}
                <h2 className="text-2xl font-bold text-white">{t.overallTitle}</h2>
              </div>
              <Badge className={`${systemStatus.overall === 'operational' ? 'bg-green-500/20 text-green-500 border-green-500/30' : 'bg-red-500/20 text-red-500 border-red-500/30'}`}>
                {systemStatus.overall === 'operational' ? t.allOperational : t.issuesDetected}
              </Badge>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-[#00c896]">{systemStatus.uptime}</div>
              <div className="text-gray-400 text-sm">{t.uptimeLabel}</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-[#00c896] font-bold text-xl">99.97%</div>
              <div className="text-gray-400 text-sm">{t.uptimeMonth}</div>
            </div>
            <div className="text-center">
              <div className="text-[#00c896] font-bold text-xl">145ms</div>
              <div className="text-gray-400 text-sm">{t.avgResponse}</div>
            </div>
            <div className="text-center">
              <div className="text-[#00c896] font-bold text-xl">0</div>
              <div className="text-gray-400 text-sm">{t.activeIncidents}</div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm">
              {t.lastUpdated}: {systemStatus.lastUpdate}
            </p>
          </div>
        </Card>

        {/* Services Status */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            {t.serviceStatusTitle.split(' ')[0]} <span className="text-[#00c896]">{t.serviceStatusTitle.split(' ').slice(1).join(' ')}</span>
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
                      <span className="text-gray-400 text-sm">{t.labels.status}:</span>
                      <span className={`text-sm font-medium ${getStatusColor(service.status)}`}>
                        {getStatusText(service.status)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">{t.labels.uptime}:</span>
                      <span className="text-white text-sm font-medium">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">{t.labels.response}:</span>
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
            {t.incidentTitle.split(' ')[0]} <span className="text-[#00c896]">{t.incidentTitle.split(' ').slice(1).join(' ')}</span>
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
                        {t.resolved}
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{incident.description}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                      <span>📅 {incident.date}</span>
                      <span>⏱️ {t.impactDuration}: {incident.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
