import React, { useState } from 'react';
import { Compass } from 'lucide-react';

export const HoneymoonSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const highlights = [
    'Passagens',
    'Hospedagem',
    'Roteiro',
    'Orçamento',
    'Mala',
    'Documentos',
    'Memórias',
  ];

  return (
    <section className="py-20 md:py-28 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        {/* Left Column: Mockup */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden bg-white p-2.5 sm:p-3 shadow-[0_20px_50px_rgba(45,41,40,0.06)] border border-[#EDE2D8]">
            {!imageError ? (
              <img
                src="/src/assets/images/honeymoon_planner_mockup_1790269348520.jpg"
                alt="Mockup do Planner de Lua de Mel exibido em tablet com páginas de roteiro e hospedagem"
                className="w-full h-auto object-cover rounded-2xl aspect-[4/3]"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#FBF6F2] to-[#F1E5DC] flex flex-col items-center justify-center p-8 text-center border border-[#E8DAD0]">
                <Compass className="w-10 h-10 text-[#8B4A56] mb-3 stroke-[1.5]" />
                <h3 className="font-serif text-2xl text-[#242121]">Planner da Lua de Mel</h3>
                <p className="text-xs text-[#6B6562] mt-1">Planejamento de viagem sem estresse</p>
              </div>
            )}
            
            <div className="absolute bottom-6 left-6 sm:bottom-7 sm:left-7 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-[#EDE2D8] shadow-sm">
              <span className="text-xs font-medium text-[#2D2928] tracking-tight">
                Incluso no Kit Premium
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Copy & Highlights */}
        <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-left">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8B4A56]">
              PÓS-CASAMENTO
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#242121] leading-tight text-balance">
            E depois do “sim”? Hora de aproveitar.
          </h2>

          <p className="text-base sm:text-lg text-[#5F5855] leading-relaxed font-normal">
            Planeje sua lua de mel sem esquecer os detalhes importantes.
          </p>

          {/* Clean 7 items summary */}
          <div className="pt-4">
            <div className="flex flex-wrap gap-2.5">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-xl bg-white border border-[#EBE1D8] text-xs sm:text-sm font-medium text-[#3E3835] shadow-[0_1px_4px_rgba(45,41,40,0.02)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
