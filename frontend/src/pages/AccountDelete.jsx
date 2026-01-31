import React from 'react';
import { Mail, Trash2 } from 'lucide-react';
import { Card } from '../components/ui/card';

export default function AccountDelete() {
  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#00c896]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Trash2 className="w-8 h-8 text-[#00c896]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Account &amp; <span className="text-[#00c896]">Data Deletion</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            This page explains how to request deletion of your Avenia account and personal data.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">How account deletion works</h2>
          <p className="text-gray-300">
            Open the Avenia app and follow Settings → Delete Account (or submit the web form). Once you press the
            &quot;Delete Account&quot; button, your request is received and fully processed within 30 days.
          </p>
          <ul className="text-gray-300 space-y-2 mt-4">
            <li>- Account information (name, email) is removed immediately.</li>
            <li>- Chat/analysis history and subscription records are permanently erased within 30 days unless legal retention is required.</li>
            <li>- In-app purchase records remain only within the Google Play billing system.</li>
          </ul>
          <p className="text-gray-300 mt-4">
            For any questions, reach us at{' '}
            <a href="mailto:support@aveniaichat.com" className="text-[#00c896] hover:underline">
              support@aveniaichat.com
            </a>.
          </p>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">What data will be deleted</h2>
            <ul className="text-gray-300 space-y-2">
              <li>Account profile information</li>
              <li>Chat messages and related metadata</li>
              <li>Uploaded files linked to your account</li>
              <li>Associated usage records tied to your account</li>
            </ul>
            <p className="text-gray-400 text-sm mt-4">
              Backups may be retained for a limited period for security or legal reasons and are automatically purged afterward.
            </p>
          </Card>

          <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Need help?</h2>
            <p className="text-gray-300">
              If you have any questions about account or data deletion, contact us at{' '}
              <a href="mailto:support@aveniaichat.com" className="text-[#00c896] hover:underline">
                support@aveniaichat.com
              </a>.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
