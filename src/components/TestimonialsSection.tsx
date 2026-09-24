import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  initial: string;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Mariana',
      role: 'Noiva',
      quote:
        '“Eu estava completamente perdida com tantas coisas para resolver. O planner me ajudou a colocar tudo em ordem e visualizar o que ainda faltava. Ficou muito mais fácil acompanhar os preparativos.”',
      initial: 'M',
    },
    {
      id: 2,
      name: 'Camila',
      role: 'Noiva',
      quote:
        '“Amei a parte do orçamento! Consegui organizar os gastos e fornecedores de uma forma que eu não estava conseguindo fazer sozinha. Ficou muito mais fácil saber onde meu dinheiro estava indo.”',
      initial: 'C',
    },
    {
      id: 3,
      name: 'Juliana',
      role: 'Noiva',
      quote:
        '“O que mais gostei foi ter tudo no mesmo lugar. Checklist, casamento, enxoval e até a lua de mel. Para quem está começando os preparativos, facilita muito.”',
      initial: 'J',
    },
    {
      id: 4,
      name: 'Beatriz',
      role: 'Noiva',
      quote:
        '“Eu sou muito esquecida e estava com várias listas espalhadas pelo celular. Depois que comecei a usar o planner, ficou muito mais fácil acompanhar cada etapa e não esquecer os detalhes.”',
      initial: 'B',
    },
    {
      id: 5,
      name: 'Larissa',
      role: 'Noiva',
      quote:
        '“O planner do enxoval foi uma das partes que mais gostei. Separar tudo por ambiente me ajudou a entender o que eu já tinha e o que ainda precisava comprar.”',
      initial: 'L',
    },
  ];

  // Desktop slider starts at index 0..2 (showing 3 cards)
  const [desktopIndex, setDesktopIndex] = useState(0);
  // Mobile slider goes 0..4 (showing 1 card)
  const [mobileIndex, setMobileIndex] = useState(0);

  const maxDesktopIndex = testimonials.length - 3; // 5 - 3 = 2

  return (
    <section className="py-20 md:py-28 bg-[#FAF6F2]/75 border-t border-[#EDE4DC]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8B4A56] block mb-2">
            O QUE AS NOIVAS ESTÃO DIZENDO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#242121] leading-tight text-balance mb-4">
            Quem está organizando essa fase também ama praticidade.
          </h2>
          <p className="text-base sm:text-lg text-[#5F5855] leading-relaxed">
            Veja o que nossas clientes acharam da experiência de organizar tudo em um só lugar.
          </p>
        </div>

        {/* Desktop Carousel (Displays 3 cards simultaneously with smooth sliding window) */}
        <div className="hidden md:block mb-12">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-6 lg:gap-8"
              style={{
                transform: `translateX(-${desktopIndex * (100 / 3 + 1.2)}%)`,
              }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="w-[calc(33.333%-1.35rem)] shrink-0 p-8 rounded-3xl bg-white border border-[#EBE1D8] shadow-[0_4px_20px_rgba(45,41,40,0.02)] flex flex-col justify-between hover:border-[#8B4A56]/30 transition-all duration-200"
                >
                  <div>
                    {/* 5 Stars */}
                    <div className="flex items-center gap-1 mb-5" aria-label="Avaliação 5 estrelas">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]"
                        />
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-sm text-[#5F5855] leading-relaxed italic mb-6">
                      {item.quote}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3.5 pt-5 border-t border-[#F2EAE3]">
                    <div className="w-10 h-10 rounded-full bg-[#F4EAE3] border border-[#E7D9CF] flex items-center justify-center shrink-0 font-serif font-semibold text-[#8B4A56] text-sm">
                      {item.initial}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#2D2928] tracking-tight">
                        {item.name}
                      </h4>
                      <span className="text-xs text-[#7A736F] font-normal">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation Arrows & Dots */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setDesktopIndex((prev) => Math.max(0, prev - 1))}
              disabled={desktopIndex === 0}
              aria-label="Depoimentos anteriores"
              className="p-2.5 rounded-full border border-[#D9CEC5] bg-white text-[#5F5855] hover:bg-[#FAF8F5] transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {[...Array(maxDesktopIndex + 1)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setDesktopIndex(i)}
                  aria-label={`Página ${i + 1} de depoimentos`}
                  className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    desktopIndex === i ? 'w-6 bg-[#8B4A56]' : 'w-2 bg-[#D9CEC5]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setDesktopIndex((prev) => Math.min(maxDesktopIndex, prev + 1))}
              disabled={desktopIndex === maxDesktopIndex}
              aria-label="Próximos depoimentos"
              className="p-2.5 rounded-full border border-[#D9CEC5] bg-white text-[#5F5855] hover:bg-[#FAF8F5] transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile View: 1 card per slide with arrows and indicators */}
        <div className="md:hidden mb-10">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
              >
                {testimonials.map((item) => (
                  <div key={item.id} className="w-full shrink-0 px-1">
                    <div className="p-7 rounded-3xl bg-white border border-[#EBE1D8] shadow-[0_4px_20px_rgba(45,41,40,0.02)] flex flex-col justify-between min-h-[220px]">
                      <div>
                        {/* 5 Stars */}
                        <div className="flex items-center gap-1 mb-4" aria-label="Avaliação 5 estrelas">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]"
                            />
                          ))}
                        </div>

                        {/* Quote */}
                        <p className="text-sm text-[#5F5855] leading-relaxed italic mb-5">
                          {item.quote}
                        </p>
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-3 pt-4 border-t border-[#F2EAE3]">
                        <div className="w-9 h-9 rounded-full bg-[#F4EAE3] border border-[#E7D9CF] flex items-center justify-center shrink-0 font-serif font-semibold text-[#8B4A56] text-sm">
                          {item.initial}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-[#2D2928] tracking-tight">
                            {item.name}
                          </h4>
                          <span className="text-xs text-[#7A736F]">
                            {item.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Carousel Indicators & Next/Prev Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => setMobileIndex((prev) => Math.max(0, prev - 1))}
                disabled={mobileIndex === 0}
                aria-label="Depoimento anterior"
                className="p-2 rounded-full border border-[#D9CEC5] bg-white text-[#5F5855] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setMobileIndex(i)}
                    aria-label={`Ir para depoimento ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                      mobileIndex === i ? 'w-6 bg-[#8B4A56]' : 'w-1.5 bg-[#D9CEC5]'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setMobileIndex((prev) => Math.min(testimonials.length - 1, prev + 1))}
                disabled={mobileIndex === testimonials.length - 1}
                aria-label="Próximo depoimento"
                className="p-2 rounded-full border border-[#D9CEC5] bg-white text-[#5F5855] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Small phrase below testimonials */}
        <div className="text-center pt-2">
          <p className="font-serif text-lg sm:text-xl text-[#242121] font-normal leading-relaxed text-balance">
            Mais organização para aproveitar o que realmente importa: <span className="font-medium text-[#8B4A56]">o seu grande dia.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
