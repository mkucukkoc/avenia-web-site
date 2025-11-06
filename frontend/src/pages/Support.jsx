import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { MessageCircle, Mail, BookOpen, Video, Download, ExternalLink } from 'lucide-react';

export default function Support() {
  const guides = [
    {
      title: "PDF Summarization Guide",
      description: "Learn how to condense documents effectively.",
      icon: "📄",
      readTime: "3 min"
    },
    {
      title: "Image & Video Analysis",
      description: "Understand how AI vs real detection works.",
      icon: "🔍", 
      readTime: "5 min"
    },
    {
      title: "TTS/STT Best Practices",
      description: "Tips and tricks for speech-to-text and text-to-speech.",
      icon: "🔊",
      readTime: "4 min"
    }
  ];

  const supportChannels = [
    {
      title: "Live Chat",
      description: "24/7 live support for Premium members.",
      icon: MessageCircle,
      action: "Start a Chat",
      available: "Available to Premium"
    },
    {
      title: "Email Support",
      description: "Email assistance for every user.",
      icon: Mail,
      action: "Send an Email",
      available: "Replies within 24 hours"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step walkthroughs for every feature.",
      icon: Video,
      action: "Watch Videos",
      available: "Free access"
    }
  ];

  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00c896]/20 border border-[#00c896]/30 mb-8">
            <span className="text-[#00c896] text-sm font-medium">🤝 Support</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Support <span className="text-[#00c896]">Hub</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're here to help. Browse our guides or reach out to us directly whenever you need assistance.
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportChannels.map((channel, index) => {
            const IconComponent = channel.icon;
            
            return (
              <Card key={index} className="bg-gray-800/30 border-gray-700/50 p-8 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-[#00c896]" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <p className="text-[#00c896] text-sm font-medium mb-6">{channel.available}</p>
                
                <Button 
                  className="w-full bg-[#00c896] hover:bg-[#00b085] text-white py-2 rounded-xl font-semibold transition-all duration-200"
                >
                  {channel.action}
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Quick Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Quick <span className="text-[#00c896]">Guides</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700/50 p-6 hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-3xl">{guide.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{guide.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#00c896] text-xs font-medium">{guide.readTime} read</span>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked <span className="text-[#00c896]">Questions</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800/30 border-gray-700/50 p-6">
              <h3 className="text-white font-semibold mb-3">Is my data secure?</h3>
              <p className="text-gray-300 text-sm">
                Yes. Your data is encrypted in secure Firebase storage and removed once processing finishes.
                We operate under GDPR and KVKK compliance.
              </p>
            </Card>
            
            <Card className="bg-gray-800/30 border-gray-700/50 p-6">
              <h3 className="text-white font-semibold mb-3">What’s the difference between Free and Premium?</h3>
              <p className="text-gray-300 text-sm">
                The free plan comes with daily limits. Premium unlocks unlimited usage, priority processing,
                and 24/7 live support.
              </p>
            </Card>
            
            <Card className="bg-gray-800/30 border-gray-700/50 p-6">
              <h3 className="text-white font-semibold mb-3">Which file types are supported?</h3>
              <p className="text-gray-300 text-sm">
                We support PDF, Word, PowerPoint, Excel, TXT files along with JPEG, PNG, GIF, MP4, and AVI formats.
              </p>
            </Card>
            
            <Card className="bg-gray-800/30 border-gray-700/50 p-6">
              <h3 className="text-white font-semibold mb-3">How do I use the API?</h3>
              <p className="text-gray-300 text-sm">
                Premium members can generate an API key and integrate our RESTful endpoints into their own products.
              </p>
            </Card>
          </div>
        </div>

        {/* Contact Support */}
        <Card className="bg-gradient-to-r from-gray-800/40 to-gray-800/60 p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Didn't find what you need?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us directly and we’ll help with your specific scenario.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#00c896] hover:bg-[#00b085] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#00c896]/25"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Live Support
            </Button>
            
            <Button 
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-700 px-8 py-3 rounded-xl font-semibold transition-all duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-[#00c896] font-bold text-lg">&lt; 1 saat</div>
              <div className="text-gray-400 text-sm">Average live chat response time</div>
            </div>
            <div className="text-center">
              <div className="text-[#00c896] font-bold text-lg">&lt; 24 saat</div>
              <div className="text-gray-400 text-sm">Average email response time</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}