/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { BenefitsSection } from './components/BenefitsSection.tsx';
import { AuthoritySection } from './components/AuthoritySection.tsx';
import { SocialProofSection } from './components/SocialProofSection.tsx';
import { SyllabusAndLocation } from './components/SyllabusAndLocation.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { LastCallSection } from './components/LastCallSection.tsx';
import { Footer } from './components/Footer.tsx';
import { RegistrationModal } from './components/RegistrationModal.tsx';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [lang, setLang] = useState<'es' | 'gl'>('es');

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F4F7FA] text-slate-800 flex flex-col antialiased selection:bg-[#3870AC] selection:text-white">
      {/* Navigation Header */}
      <Header
        onOpenBooking={handleOpenBooking}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Landing Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section (Strict: Left Title/Sub/CTA, Right Illustration, Below 3 Fast Benefits) */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          lang={lang}
        />

        {/* 2. Sección de Beneficios (Strict: 3-column grid with icon/title/desc, Below centered CTA) */}
        <BenefitsSection
          onOpenBooking={handleOpenBooking}
          lang={lang}
        />

        {/* 3. Sección de Autoridad (Strict: Solid color horizontal block with logos, metrics, authority quote) */}
        <AuthoritySection
          lang={lang}
        />

        {/* 4. Sección de Prueba Social (Strict: Two testimonials with circular photo, name, and opinion) */}
        <SocialProofSection
          lang={lang}
        />

        {/* Enrichment: Syllabus modules and Pazo de Vista Real location */}
        <SyllabusAndLocation
          onOpenBooking={handleOpenBooking}
          lang={lang}
        />

        {/* Enrichment: Frequently Asked Questions */}
        <FaqSection
          onOpenBooking={handleOpenBooking}
          lang={lang}
        />

        {/* 5. Sección Final - Last Call (Strict: Dark background, reinforced offer title, final CTA) */}
        <LastCallSection
          onOpenBooking={handleOpenBooking}
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        lang={lang}
      />

      {/* Interactive Registration and Seat Booking Modal */}
      <RegistrationModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
