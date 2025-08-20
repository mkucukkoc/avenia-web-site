import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { PremiumBanner } from '../components/PremiumBanner';
import { TrustBadges } from '../components/TrustBadges';
import { ClosingCTA } from '../components/ClosingCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#232323]">
      <Hero />
      <Features />
      <HowItWorks />
      <PremiumBanner />
      <TrustBadges />
      <ClosingCTA />
    </div>
  );
}