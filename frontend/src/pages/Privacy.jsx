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
            Privacy <span className="text-[#00c896]">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Detailed information on how we collect, process, and protect your personal data.
          </p>
          <p className="text-gray-400 mt-4">
            Last updated: December 15, 2024
          </p>
        </div>

        {/* Privacy Content */}
        <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm p-8">
          <div className="prose prose-invert max-w-none">
            
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              1. Introduction
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              At Avenia we take the security and privacy of your personal data seriously. This policy explains how we process your information while delivering our services.
              We operate in compliance with GDPR and KVKK regulations.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              2. Data We Collect
            </h2>
            <div className="text-gray-300 mb-6 leading-relaxed">
              <p className="mb-4">We collect the following categories of data to provide the service:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li><strong>Account Information:</strong> Email address, name, and password.</li>
                <li><strong>Usage Data:</strong> Interaction logs and feature usage metrics.</li>
                <li><strong>Uploaded Content:</strong> Files and text submitted for analysis.</li>
                <li><strong>Technical Data:</strong> IP address, browser details, and device type.</li>
                <li><strong>Payment Information:</strong> Processed securely via third-party billing providers.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              3. How We Use Data
            </h2>
            <div className="text-gray-300 mb-6 leading-relaxed">
              <p className="mb-4">We process your data for the following purposes:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Delivering and improving AI services.</li>
                <li>Managing and securing your account.</li>
                <li>Providing customer support.</li>
                <li>Improving quality and resolving issues.</li>
                <li>Complying with legal obligations.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              4. Data Security
            </h2>
            <div className="text-gray-300 mb-6 leading-relaxed">
              <p className="mb-4">We protect your data using:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>256-bit SSL encryption for data transfers.</li>
                <li>Encrypted storage for sensitive records.</li>
                <li>Regular security assessments.</li>
                <li>Access controls and authentication safeguards.</li>
                <li>Backup and disaster recovery procedures.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              5. Data Retention
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Uploaded files are deleted within <strong>24 hours</strong> of processing completion. Account information is removed when you close your account or once statutory retention periods expire.
              Certain records may be retained longer when legally required.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              6. Data Sharing
            </h2>
            <div className="text-gray-300 mb-6 leading-relaxed">
              <p className="mb-4">We share your data only when:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>We must comply with legal obligations or lawful requests.</li>
                <li>Trusted service providers support our operations (such as payment processors or cloud services).</li>
                <li>You provide explicit consent.</li>
              </ul>
              <p className="mt-4 font-medium text-[#00c896]">
                We never sell your data to third parties.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              7. Your Rights
            </h2>
            <div className="text-gray-300 mb-6 leading-relaxed">
              <p className="mb-4">Under GDPR and KVKK you have the right to:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Access the personal data we hold about you.</li>
                <li>Request corrections to inaccurate data.</li>
                <li>Request deletion of your data (the “right to be forgotten”).</li>
                <li>Request data portability.</li>
                <li>Object to data processing in certain circumstances.</li>
                <li>Contest automated decision-making.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              8. Cookies
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We use cookies to improve the user experience on our platform. You can manage cookie preferences through your browser settings.
              Essential cookies are required for the platform to function properly.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              9. Changes
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              This privacy policy may be updated from time to time. We will notify you by email about significant changes.
              Updates take effect on the date they are posted here.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              10. Contact
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              For any privacy-related questions:
              <br />
              📧 Email: <a href="mailto:privacy@avenia.com" className="text-[#00c896] hover:underline">privacy@avenia.com</a>
              <br />
              📍 Address: Maslak District, Teknoloji Campus, Istanbul, Turkey
            </p>

            <div className="bg-[#00c896]/10 border border-[#00c896]/30 rounded-xl p-6 mt-8">
              <p className="text-[#00c896] font-medium">
                🔒 Your privacy is our priority. Reach out anytime if you have questions.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}