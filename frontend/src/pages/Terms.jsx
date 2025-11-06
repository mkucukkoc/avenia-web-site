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
            Terms of <span className="text-[#00c896]">Use</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The terms and conditions governing your use of Avenia services.
          </p>
          <p className="text-gray-400 mt-4">
            Last updated: December 15, 2024
          </p>
        </div>

        {/* Terms Content */}
        <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm p-8">
          <div className="prose prose-invert max-w-none">
            
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              1. Scope of Service
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Avenia is an AI-powered platform that provides document summarization, visual analysis, speech-to-text and text-to-speech, and additional AI-driven capabilities.
              By using these services you agree to the terms outlined in this document.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              2. User Responsibilities
            </h2>
            <div className="text-gray-300 mb-6 leading-relaxed">
              <p className="mb-4">As a user you agree to:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Use the platform only for lawful purposes.</li>
                <li>Avoid uploading content that infringes intellectual property rights.</li>
                <li>Refrain from distributing malware, spam, or harmful content.</li>
                <li>Respect the rights of other users.</li>
                <li>Keep your account credentials secure.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              3. Data Processing & Privacy
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Uploaded files are processed solely to deliver the requested service. Data is deleted after processing and never shared with third parties.
              For detailed information please review our <a href="/privacy" className="text-[#00c896] hover:underline">Privacy Policy</a>.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              4. Service Limitations
            </h2>
            <div className="text-gray-300 mb-6 leading-relaxed">
              <p className="mb-4">Our services include the following limitations:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Daily usage limits for free accounts.</li>
                <li>File size restrictions (up to 100 MB).</li>
                <li>Concurrent processing limits.</li>
                <li>Support for specific file formats only.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              5. Billing & Cancellation
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium subscriptions are billed monthly. You may cancel at any time and retain access until the end of the current billing period.
              Refund requests are evaluated within the first 7 days of purchase.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              6. Intellectual Property
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Avenia, its platform, and associated content are protected by intellectual property laws.
              Users represent that they own or have permission to use any content they upload.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              7. Service Interruptions
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Temporary outages may occur due to maintenance, upgrades, or unforeseen circumstances.
              Avenia is not liable for losses arising from such interruptions.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              8. Changes
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              These terms may be updated periodically. We will notify you via email of any material changes.
              Continued use of the service after changes take effect constitutes acceptance of the revised terms.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
              9. Contact
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              If you have questions about these terms, contact us at
              <a href="mailto:legal@avenia.com" className="text-[#00c896] hover:underline ml-1">
                legal@avenia.com
              </a>.
            </p>

            <div className="bg-[#00c896]/10 border border-[#00c896]/30 rounded-xl p-6 mt-8">
              <p className="text-[#00c896] font-medium">
                📄 By accepting these terms you help keep Avenia safe and fair for everyone.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}