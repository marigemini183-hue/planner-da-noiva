import React from 'react';
import { KIWIFY_CHECKOUT_BASIC, KIWIFY_CHECKOUT_PREMIUM, trackInitiateCheckout } from '../utils/checkout';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 max-w-4xl mx-auto px-6 text-center">
      
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#242121] leading-tight text-balance mb-5">
        Seu casamento tem muitos detalhes. Sua organização não precisa ter.
      </h2>

      <p className="text-base sm:text-lg text-[#5F5855] leading-relaxed max-w-xl mx-auto mb-10 font-normal">
        Escolha seu kit e comece a planejar essa fase com mais tranquilidade.
      </p>

      {/* Two Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
        <a
          href={KIWIFY_CHECKOUT_BASIC}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackInitiateCheckout('basic')}
          className="w-full sm:w-auto px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#3F6649] hover:bg-[#34543C] rounded-xl transition-all duration-200 active:scale-[0.99] whitespace-nowrap cursor-pointer shadow-sm text-center block"
        >
          KIT BÁSICO — R$ 9,99
        </a>

        <a
          href={KIWIFY_CHECKOUT_PREMIUM}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackInitiateCheckout('premium')}
          className="w-full sm:w-auto px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#A67C3D] hover:bg-[#936C32] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] whitespace-nowrap cursor-pointer text-center block"
        >
          KIT PREMIUM — R$ 19,99
        </a>
      </div>

    </section>
  );
};
