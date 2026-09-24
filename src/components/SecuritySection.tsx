import React from 'react';
import { Lock, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const highlights = [
    {
      icon: Lock,
      title: 'PAGAMENTO SEGURO',
      description: 'Seus dados de pagamento são processados com segurança pela plataforma de checkout.',
    },
    {
      icon: Zap,
      title: 'ACESSO IMEDIATO',
      description: 'Após a confirmação do pagamento, você recebe as instruções para acessar seu produto.',
    },
    {
      icon: ShieldCheck,
      title: 'GARANTIA DE 7 DIAS',
      description: 'Você pode acessar o material e avaliar sua compra durante o prazo de garantia, conforme as condições da oferta.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F3] border-y border-[#EDE4DB]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header da Seção de Segurança */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5D7C9] text-[#8C6730] text-xs font-semibold uppercase tracking-[0.2em] mb-4 shadow-xs">
            <Lock className="w-3.5 h-3.5 text-[#9C7537]" />
            <span>SEGURANÇA E PRIVACIDADE</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#242121] font-medium tracking-tight mb-3">
            🔒 COMPRE COM SEGURANÇA E TRANQUILIDADE
          </h2>

          <p className="text-sm sm:text-base text-[#5F5855] leading-relaxed max-w-xl mx-auto font-normal">
            Seu pagamento é processado por uma plataforma de pagamento segura. Após a confirmação da compra, você recebe o acesso ao seu material.
          </p>
        </div>

        {/* 3 Destaques Discretos e Elegantes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="p-7 rounded-2xl bg-white border border-[#EAE0D5] shadow-[0_4px_20px_rgba(45,41,40,0.025)] flex flex-col justify-start text-left hover:border-[#CBB288] transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF5EE] border border-[#EDE2CE] flex items-center justify-center text-[#9C7537] mb-4 shrink-0">
                  <IconComponent className="w-4 h-4 stroke-[2]" />
                </div>

                <h3 className="font-serif text-base sm:text-lg font-medium text-[#242121] tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5F5855] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Faixa / Selo Final */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center flex-wrap gap-2 sm:gap-3 px-5 py-2.5 rounded-full bg-white border border-[#E5D7C9] text-xs sm:text-sm font-medium text-[#5C431D] shadow-xs">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3F6649]" />
              Compra segura
            </span>
            <span aria-hidden="true" className="text-[#CBB288]">·</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3F6649]" />
              Pagamento protegido
            </span>
            <span aria-hidden="true" className="text-[#CBB288]">·</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3F6649]" />
              Acesso digital
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
