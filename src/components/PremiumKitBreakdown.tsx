import React from 'react';
import { Heart, Plane, Home, Coins, Sparkles, ArrowRight } from 'lucide-react';
import { trackInitiateCheckout } from '../utils/checkout';

export const PremiumKitBreakdown: React.FC = () => {
  const sections = [
    {
      num: '01',
      title: 'PLANNER DA NOIVA',
      description: 'Tudo para organizar o casamento e chegar ao grande dia mais tranquila.',
      icon: Heart,
      extra: null,
    },
    {
      num: '02',
      title: 'PLANNER DA LUA DE MEL',
      description: 'Planeje viagem, orçamento, hospedagem, roteiro, mala, reservas e memórias.',
      icon: Plane,
      extra: null,
    },
    {
      num: '03',
      title: 'PLANNER DO ENXOVAL',
      description: 'Organize o que falta para a casa nova por ambientes.',
      icon: Home,
      extra: 'Quarto · Banheiro · Cozinha · Lavanderia',
    },
    {
      num: '04',
      title: 'ORÇAMENTO COMPLETO',
      description: 'Tenha uma visão mais organizada dos gastos e do planejamento financeiro do casamento.',
      icon: Coins,
      extra: null,
    },
  ];

  return (
    <section className="py-20 md:py-28 max-w-5xl mx-auto px-6">
      
      {/* Headline da Seção (Principal Destaque Visual) */}
      <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#242121] leading-[1.18] tracking-tight uppercase text-balance mb-4 font-medium">
          DO CHÁ À LUA DE MEL, ORGANIZE TODA A SUA NOVA FASE
        </h2>
        <p className="text-base sm:text-lg text-[#5F5855] leading-relaxed max-w-2xl mx-auto font-normal">
          O Kit Premium reúne tudo o que você precisa para organizar o casamento, a casa nova e a lua de mel em um só lugar.
        </p>
      </div>

      {/* CARD ÚNICO — KIT PREMIUM */}
      <div className="relative rounded-3xl bg-[#FAF6F0] border-2 border-[#CBB288] shadow-[0_16px_50px_rgba(166,124,68,0.1)] overflow-hidden">
        
        {/* Topo do Card */}
        <div className="p-8 sm:p-10 md:p-12 pb-6 md:pb-8 border-b border-[#EDE2CE]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#A67C3D]" />
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#9C7537]">
                  KIT PREMIUM
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#242121] font-medium tracking-tight">
                Kit Noiva: do Chá à Lua de Mel
              </h3>
            </div>

            {/* Etiqueta MAIS COMPLETO */}
            <div className="self-start sm:self-auto">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#5C431D] bg-[#EFE3CF] border border-[#DFCEB3] px-3.5 py-1.5 rounded-full shadow-sm">
                MAIS COMPLETO
              </span>
            </div>
          </div>
        </div>

        {/* Interior do Card: Composição dos 4 Conteúdos */}
        <div className="p-8 sm:p-10 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10">
            {sections.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col justify-between pb-6 md:pb-0 border-b md:border-b-0 border-[#EDE2CE]/80 last:border-b-0"
                >
                  <div>
                    {/* Header do divisor interno: 01, 02... e ícone */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold tracking-[0.2em] text-[#9C7537]">
                        {item.num} — {item.title}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white border border-[#E7DAC6] flex items-center justify-center text-[#A67C3D] shrink-0 shadow-xs">
                        <IconComponent className="w-4 h-4 stroke-[2]" />
                      </div>
                    </div>

                    {/* Descrição */}
                    <p className="text-sm text-[#5F5855] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Detalhe extra (específico para enxoval) */}
                  {item.extra && (
                    <div className="mt-4 pt-3 border-t border-[#EDE2CE]/70">
                      <span className="text-xs font-medium text-[#7D5E2D] tracking-wide">
                        {item.extra}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Destaque do Card (Parte Inferior do Card) */}
        <div className="bg-[#F3ECE1] border-t border-[#E5D7C0] p-8 sm:p-10 text-center">
          <div className="max-w-xl mx-auto space-y-3 mb-6">
            <h4 className="font-serif text-xl sm:text-2xl text-[#242121] font-medium tracking-tight uppercase">
              UM KIT COMPLETO PARA UMA NOVA FASE
            </h4>
            <p className="text-xs sm:text-sm font-medium text-[#7D5E2D] tracking-wide">
              Casamento + Casa Nova + Lua de Mel + Organização Financeira
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="https://pay.kiwify.com.br/jayJUhp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInitiateCheckout('premium')}
              className="w-full sm:w-auto px-10 py-4 text-xs font-bold uppercase tracking-widest text-white bg-[#A67C3D] hover:bg-[#936C32] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <span>QUERO O KIT PREMIUM</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>

      </div>

    </section>
  );
};
