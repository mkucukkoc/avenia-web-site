import React from 'react';
import { Card } from '../components/ui/card';
import { Target, Eye, Heart, Users } from 'lucide-react';
import { teamMembers } from '../data/mock';

export default function About() {
  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00c896]/20 border border-[#00c896]/30 mb-8">
            <span className="text-[#00c896] text-sm font-medium">🏢 Company</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-[#00c896]">Avenia</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We started with the mission of making AI technology accessible to everyone.
            Today we are building the leading AI assistant platform from Turkey for the world.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Avenia was founded in 2024 in Turkey with the vision of bringing AI technology into everyday life.
                Our team is made up of experienced engineers and researchers who have spent years working at leading tech companies.
              </p>
              <p>
                From the very beginning our goal has been to deliver complex AI through simple, user-friendly experiences.
                We support a wide range of use cases—from document summarization and visual analysis to speech processing and content generation.
              </p>
              <p>
                Today we help thousands of people streamline their daily workflows and boost productivity.
                Looking ahead, our vision is to democratize AI so it can positively impact lives everywhere.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-gray-800/30 border-gray-700/50 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-[#00c896]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">1000+</div>
                  <div className="text-gray-400">Active Users</div>
                </div>
              </div>
            </Card>
            
            <Card className="bg-gray-800/30 border-gray-700/50 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-[#00c896]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-gray-400">Files Processed</div>
                </div>
              </div>
            </Card>
            
            <Card className="bg-gray-800/30 border-gray-700/50 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#00c896]/20 rounded-xl flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-[#00c896]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4.9/5</div>
                  <div className="text-gray-400">Customer Satisfaction</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="bg-gray-800/30 border-gray-700/50 p-8 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-[#00c896]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              Make AI technology accessible, understandable, and genuinely useful for everyone—so entire communities can benefit from higher productivity.
            </p>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50 p-8 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-[#00c896]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              Become the leading AI platform founded in Turkey and build pioneering solutions that set the standard globally.
            </p>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50 p-8 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-[#00c896]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
            <p className="text-gray-300 leading-relaxed">
              We act with transparency, user focus, continuous learning, and ethical AI development as our core principles.
            </p>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our <span className="text-[#00c896]">Founding Team</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700/50 p-8 text-center hover:border-[#00c896]/50 transition-all duration-200 hover:-translate-y-2">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#00c896] font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Values in Detail */}
        <Card className="bg-gradient-to-r from-gray-800/40 to-gray-800/60 p-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Operating <span className="text-[#00c896]">Principles</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">🔒 Privacy First</h3>
                <p className="text-gray-300">
                  Protecting user data is non-negotiable. We process information under GDPR and KVKK standards from day one.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">⚡ Continuous Innovation</h3>
                <p className="text-gray-300">
                  We track the latest developments in AI and ship new capabilities to our platform as soon as they prove real value.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">🌍 Native Language Expertise</h3>
                <p className="text-gray-300">
                  We specialize in Turkish language processing to deliver solutions tailored to local needs while staying ready for global expansion.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">🤝 Community-Driven</h3>
                <p className="text-gray-300">
                  We listen closely to user feedback and bring their suggestions into our product roadmap.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}