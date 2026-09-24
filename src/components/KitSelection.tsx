import React from 'react';
import { Check } from 'lucide-react';
import { KIWIFY_CHECKOUT_BASIC, KIWIFY_CHECKOUT_PREMIUM, trackInitiateCheckout } from '../utils/checkout';

export const KitSelection: React.FC = () => {
  return (
    <section id="kits" className="py-20 md:py-28 max-w-6xl mx-auto px-6">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#242121] leading-tight text-balance">
          Escolha o kit ideal para o seu momento.
        </h2>
      </div>

      {/* Two Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        
        {/* Card 1: KIT BÁSICO — Verde Sofisticado / Sálvia */}
        <div className="flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#FAFBF9] border border-[#D3E0D6] shadow-[0_4px_24px_rgba(59,91,68,0.04)] transition-all duration-200 hover:border-[#AEC7B4]">
          <div>
            {/* Tag */}
            <div className="mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#3B5B44]">
                KIT BÁSICO
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="font-serif text-2xl sm:text-3xl text-[#242121] font-medium mb-3">
              Planner da Noiva
            </h3>
            <p className="text-sm text-[#5F5855] leading-relaxed mb-8">
              O essencial para organizar o casamento do planejamento ao grande dia.
            </p>

            <div className="w-full h-px bg-[#E5ECE7] mb-8" />

            {/* Benefits */}
            <ul className="space-y-3.5 mb-8">
              {[
                'Checklist mês a mês',
                'Organização financeira',
                'Controle de fornecedores',
                'Checklist da noiva e do noivo',
                'Cerimônia e recepção',
                'Cronograma do grande dia',
                'Fotos e músicas',
                'Lua de mel e presentes',
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-[#3E3835]">
                  <Check className="w-4 h-4 text-[#3B5B44] shrink-0 mt-0.5 stroke-[2.2]" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Extra Bônus line */}
            <div className="pt-2 pb-6 border-t border-[#E5ECE7]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#3B5B44]">
                + 5 bônus
              </span>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="pt-4 border-t border-[#E5ECE7]">
            <div className="mb-6">
              <span className="text-xs text-[#7A736F] uppercase tracking-wider block mb-1">
                Acesso completo por
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-4xl sm:text-5xl font-medium text-[#242121] tracking-tight">
                  R$ 9,99
                </span>
                <span className="text-xs text-[#7A736F]">pagamento único</span>
              </div>
            </div>

            <a
              href={KIWIFY_CHECKOUT_BASIC}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInitiateCheckout('basic')}
              className="w-full py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#3F6649] hover:bg-[#34543C] rounded-xl shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.99] cursor-pointer block text-center"
            >
              QUERO O KIT BÁSICO
            </a>
          </div>
        </div>

        {/* Card 2: KIT PREMIUM — Dourado Elegante & Sofisticado */}
        <div className="relative flex flex-col justify-between p-8 sm:p-10 lg:p-11 rounded-3xl bg-[#FAF6F0] border-2 border-[#CBB288] shadow-[0_12px_40px_rgba(166,124,68,0.12)] transition-all duration-200 hover:border-[#BA9E6E] md:scale-[1.03]">
          
          <div>
            {/* Tag / Badge */}
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#9C7537]">
                KIT PREMIUM
              </span>
              <span className="text-[11px] font-semibold text-[#5C431D] bg-[#EFE3CF] border border-[#DFCEB3] px-3 py-1 rounded-full uppercase tracking-wider">
                KIT MAIS COMPLETO
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="font-serif text-2xl sm:text-3xl text-[#242121] font-medium mb-3">
              Kit Noiva: do Chá à Lua de Mel
            </h3>
            <p className="text-sm text-[#5F5855] leading-relaxed mb-8">
              Uma coleção completa para organizar o casamento, a casa nova e a lua de mel em um só lugar.
            </p>

            <div className="w-full h-px bg-[#EDE2CE] mb-8" />

            {/* Benefits */}
            <ul className="space-y-4 mb-8">
              {[
                'Planner da Noiva',
                'Planner da Lua de Mel',
                'Planner do Enxoval',
                'Planner completo de Orçamento',
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-sm font-medium text-[#242121]">
                  <Check className="w-4 h-4 text-[#A67C3D] shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Destaque 4 PLANNERS */}
            <div className="pt-2 pb-6 border-t border-[#EDE2CE]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9C7537]">
                4 PLANNERS EM UM ÚNICO KIT
              </span>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="pt-4 border-t border-[#EDE2CE]">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-[#8A817D] line-through">
                  R$ 39,90
                </span>
                <span className="text-[11px] font-medium text-[#9C7537] bg-[#F3E9D7] px-2 py-0.5 rounded-md uppercase tracking-wide">
                  Economize 50%
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-4xl sm:text-5xl font-medium text-[#242121] tracking-tight">
                  R$ 19,99
                </span>
                <span className="text-xs text-[#7A736F]">pagamento único</span>
              </div>
            </div>

            {/* Prominent Button */}
            <a
              href={KIWIFY_CHECKOUT_PREMIUM}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInitiateCheckout('premium')}
              className="w-full py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#A67C3D] hover:bg-[#936C32] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] cursor-pointer block text-center"
            >
              QUERO O KIT PREMIUM
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
