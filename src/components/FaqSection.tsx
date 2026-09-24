import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'O planner é físico ou digital?',
      a: 'O produto é 100% digital. Você recebe os arquivos imediatamente após a aprovação da compra para usar no celular, tablet ou computador.',
    },
    {
      q: 'Como recebo o produto após a compra?',
      a: 'O link de acesso é enviado diretamente para o seu e-mail logo após a confirmação do pagamento, com download instantâneo.',
    },
    {
      q: 'Posso usar pelo celular ou computador?',
      a: 'Sim. É totalmente compatível com smartphones, computadores e tablets (como iPad com GoodNotes, Notability ou visualizadores de PDF).',
    },
    {
      q: 'O Kit Premium inclui o Planner da Noiva?',
      a: 'Sim! O Kit Premium inclui a versão completa do Planner da Noiva mais os outros 3 planners (Lua de Mel, Enxoval e Orçamento).',
    },
    {
      q: 'Posso imprimir as páginas?',
      a: 'Com certeza. Os arquivos estão em altíssima resolução prontos para impressão em formato A4, caso prefira a versão em papel.',
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAF6F2] border-t border-[#EDE4DC]">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#7D7672] mb-2 block">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#242121] leading-tight">
            Perguntas frequentes
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-[#E8DDD4] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B4A56]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-[#2D2928] text-balance">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8B4A56] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 sm:px-8 pb-5 text-sm text-[#5F5855] leading-relaxed border-t border-[#F5EDE6] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
