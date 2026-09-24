import React from 'react';
import { KIWIFY_CHECKOUT_BASIC, KIWIFY_CHECKOUT_PREMIUM, trackInitiateCheckout } from '../utils/checkout';

export const OfferSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 max-w-5xl mx-auto px-6">
      
      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-16">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#242121] leading-tight text-balance">
          Comece a organizar hoje.
        </h2>
      </div>

      {/* Two Offer Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        {/* Kit Básico — Verde Sálvia */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFBF9] border border-[#D3E0D6] shadow-[0_4px_24px_rgba(59,91,68,0.04)] flex flex-col justify-between hover:border-[#AEC7B4] transition-all duration-200">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#3B5B44] mb-3 block">
              KIT BÁSICO
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#242121] font-medium mb-4">
              Planner da Noiva
            </h3>
            <div className="mb-6">
              <span className="font-serif text-4xl sm:text-5xl font-medium text-[#242121]">
                R$ 9,99
              </span>
            </div>
          </div>

          <a
            href={KIWIFY_CHECKOUT_BASIC}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackInitiateCheckout('basic')}
            className="w-full py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#3F6649] hover:bg-[#34543C] rounded-xl shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.99] cursor-pointer block text-center"
          >
            QUERO O BÁSICO
          </a>
        </div>

        {/* Kit Premium — Dourado Elegante */}
        <div className="relative p-8 sm:p-10 rounded-3xl bg-[#FAF6F0] border-2 border-[#CBB288] shadow-[0_10px_35px_rgba(166,124,68,0.1)] flex flex-col justify-between hover:border-[#BA9E6E] transition-all duration-200">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#9C7537]">
                KIT PREMIUM
              </span>
              <span className="text-[11px] font-semibold text-[#5C431D] bg-[#EFE3CF] border border-[#DFCEB3] px-3 py-1 rounded-full uppercase tracking-wider">
                KIT MAIS COMPLETO
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#242121] font-medium mb-4">
              Kit Noiva: do Chá à Lua de Mel
            </h3>
            <div className="mb-6">
              <span className="font-serif text-4xl sm:text-5xl font-medium text-[#242121]">
                R$ 19,99
              </span>
            </div>
          </div>

          <a
            href={KIWIFY_CHECKOUT_PREMIUM}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackInitiateCheckout('premium')}
            className="w-full py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#A67C3D] hover:bg-[#936C32] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] cursor-pointer block text-center"
          >
            QUERO O PREMIUM
          </a>
        </div>

      </div>

      {/* Assurance line below */}
      <div className="text-center">
        <p className="text-xs sm:text-sm text-[#7A736F] flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span>Acesso digital</span>
          <span aria-hidden="true">·</span>
          <span>Pagamento seguro</span>
          <span aria-hidden="true">·</span>
          <span>Receba após a confirmação</span>
        </p>
      </div>

    </section>
  );
};
