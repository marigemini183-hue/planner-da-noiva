/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Identification } from './components/Identification';
import { KitSelection } from './components/KitSelection';
import { BasicKitBreakdown } from './components/BasicKitBreakdown';
import { PremiumKitBreakdown } from './components/PremiumKitBreakdown';
import { HoneymoonSection } from './components/HoneymoonSection';
import { ComparisonSection } from './components/ComparisonSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfferSection } from './components/OfferSection';
import { SecuritySection } from './components/SecuritySection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { LegalModal, LegalModalType } from './components/LegalModal';
import { trackPixelEvent } from './utils/pixel';

export default function App() {
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);

  // Track ViewContent when the kits/products section enters viewport for the first time
  useEffect(() => {
    let tracked = false;
    const kitsElement = document.getElementById('kits');
    if (!kitsElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting && !tracked) {
          tracked = true;
          trackPixelEvent('ViewContent', {
            content_name: 'Kits Planner da Noiva',
            content_category: 'Digital Products',
            value: 9.99,
            currency: 'BRL',
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(kitsElement);
    return () => observer.disconnect();
  }, []);

  const handleOpenLegal = (type: LegalModalType) => {
    setLegalModal(type);
  };

  const handleCloseLegal = () => {
    setLegalModal(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D2928] selection:bg-[#F2E0D8] selection:text-[#5B2E35]">
      {/* 1. Header */}
      <Header />

      {/* 2. Hero (Desejo) */}
      <Hero />

      {/* 3. Seção 2 — Identificação (Problema & Solução) */}
      <Identification />

      {/* 4. Seção 3 — Dois Kits (Kits) */}
      <KitSelection />

      {/* 5. Seção 4 — O Que Vem no Kit Básico (Conteúdo Básico) */}
      <BasicKitBreakdown />

      {/* 6. Seção 5 — Kit Premium (Conteúdo Premium) */}
      <PremiumKitBreakdown />

      {/* 7. Seção 6 — Lua de Mel (Conteúdo Lua de Mel) */}
      <HoneymoonSection />

      {/* 9. Seção 8 — Comparação (Tabela comparativa) */}
      <ComparisonSection />

      {/* Nova Seção — Depoimentos */}
      <TestimonialsSection />

      {/* 10. Seção 9 — Oferta */}
      <OfferSection />

      {/* Seção de Segurança & Confiança */}
      <SecuritySection />

      {/* 11. Seção 10 — FAQ */}
      <FaqSection />

      {/* 12. CTA Final (Compra) */}
      <FinalCtaSection />

      {/* 13. Rodapé */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Legal & Support Modal */}
      {legalModal && (
        <LegalModal
          type={legalModal}
          onClose={handleCloseLegal}
        />
      )}
    </div>
  );
}
