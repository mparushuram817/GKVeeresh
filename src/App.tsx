/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutRajamma } from './components/AboutRajamma';
import { AboutDrVeeresh } from './components/AboutDrVeeresh';
import { VillageCommitments } from './components/VillageCommitments';
import { ServiceWork } from './components/ServiceWork';
import { SampleBallot } from './components/SampleBallot';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { teluguContent, englishContent } from './data/campaignData';

export default function App() {
  const [lang, setLang] = useState<'te' | 'en'>('te');
  const content = lang === 'te' ? teluguContent : englishContent;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-16 sm:pb-0">
      {/* Sticky Header with Language Toggle & Call Button */}
      <Header content={content} lang={lang} setLang={setLang} />

      {/* Main Campaign Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero content={content} lang={lang} />

        {/* 2. About Candidate (Burunadoddi Rajamma) */}
        <AboutRajamma content={content} lang={lang} />

        {/* 3. About Dr. Veeresh (Campaign Leader & Public Servant) */}
        <AboutDrVeeresh content={content} lang={lang} />

        {/* 4. Village Commitments (Kairuppala, Puppala Doddi, Chennampalli) */}
        <VillageCommitments content={content} lang={lang} />

        {/* 5. Service Work Timeline & Records */}
        <ServiceWork content={content} lang={lang} />

        {/* 6. How to Vote: Sample Ballot Paper Replica with Inline SVG Ceiling Fan */}
        <SampleBallot content={content} lang={lang} />

        {/* 7. Contact & Direct Message Form */}
        <ContactSection content={content} lang={lang} />
      </main>

      {/* 8. Mandatory Footer */}
      <Footer content={content} lang={lang} />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileBottomBar content={content} lang={lang} setLang={setLang} />
    </div>
  );
}
