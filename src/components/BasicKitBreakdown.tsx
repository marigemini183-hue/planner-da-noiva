import React from 'react';
import { 
  CalendarCheck, 
  CircleDollarSign, 
  Heart, 
  Flower2, 
  Camera, 
  Plane, 
  Sparkles, 
  Music, 
  FileText, 
  Gift, 
  Check, 
  CheckCircle2 
} from 'lucide-react';

export const BasicKitBreakdown: React.FC = () => {
  const kitTopics = [
    {
      title: 'PLANEJAMENTO',
      description: 'Checklist, cronograma e organização das principais etapas do casamento.',
      icon: CalendarCheck,
    },
    {
      title: 'FINANCEIRO',
      description: 'Orçamento, gastos, fornecedores, contratos e pagamentos.',
      icon: CircleDollarSign,
    },
    {
      title: 'NOIVOS',
      description: 'Preparativos pessoais, checklist da noiva e organização do noivo.',
      icon: Heart,
    },
    {
      title: 'CERIMÔNIA & RECEPÇÃO',
      description: 'Organização dos principais momentos e detalhes do casamento.',
      icon: Flower2,
    },
    {
      title: 'GRANDE DIA',
      description: 'Fotos essenciais, músicas, momentos importantes e checklist final.',
      icon: Camera,
    },
    {
      title: 'LUA DE MEL & PRESENTES',
      description: 'Organização dos últimos detalhes, presentes e preparativos finais.',
      icon: Plane,
    },
  ];

  const bonuses = [
    {
      number: 'BÔNUS 01',
      title: 'CHECKLIST DA NOIVA',
      highlight: '“Para você não precisar confiar na memória.”',
      description:
        'Uma lista prática para acompanhar os principais cuidados e preparativos da noiva — do que já foi resolvido ao que ainda precisa da sua atenção.',
      benefit: 'Acompanhe seus preparativos e reduza esquecimentos',
      icon: Sparkles,
    },
    {
      number: 'BÔNUS 02',
      title: 'LISTA DE FOTOS ESSENCIAIS',
      highlight: '“Porque alguns momentos acontecem uma única vez.”',
      description:
        'Tenha uma lista dos registros que você não vai querer esquecer no grande dia — pessoas especiais, momentos importantes e fotos que merecem estar no seu álbum.',
      benefit: 'Garanta os registros mais importantes do casamento',
      icon: Camera,
    },
    {
      number: 'BÔNUS 03',
      title: 'LISTA DE MÚSICAS',
      highlight: '“Deixe cada momento com a sua cara.”',
      description:
        'Organize antecipadamente as músicas para a entrada, cerimônia, momentos especiais, primeira dança e festa.',
      benefit: 'Trilha sonora planejada com antecedência e calma',
      icon: Music,
    },
    {
      number: 'BÔNUS 04',
      title: 'LISTA DE DOCUMENTOS',
      highlight: '“Menos correria. Mais controle.”',
      description:
        'Tenha uma visão organizada dos documentos e providências que precisam ser resolvidos ao longo dos preparativos.',
      benefit: 'Mantenha documentos e providências importantes sob controle',
      icon: FileText,
    },
    {
      number: 'BÔNUS 05',
      title: 'LISTA DE PRESENTES',
      highlight: '“Organize os presentes recebidos sem depender da memória.”',
      description:
        'Registre quem presenteou, o que foi recebido e mantenha tudo organizado durante e depois do casamento.',
      benefit: 'Facilite o controle dos presentes e evite esquecimentos',
      icon: Gift,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF6F2] border-t border-[#EDE4DC]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Headline da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] text-[#242121] leading-tight text-balance mb-4 font-medium">
            Tudo o que você precisa para organizar o seu casamento em um só lugar.
          </h2>
          <p className="text-base sm:text-lg text-[#5F5855] leading-relaxed max-w-xl mx-auto font-normal">
            Do planejamento ao grande dia, tenha uma visão clara de cada etapa e saiba o que precisa ser feito.
          </p>
        </div>

        {/* CARD ÚNICO — KIT BÁSICO */}
        <div className="rounded-3xl bg-white border border-[#D6E2D8] shadow-[0_10px_35px_rgba(59,91,68,0.05)] overflow-hidden mb-16 md:mb-20">
          
          {/* Topo do Card */}
          <div className="p-8 sm:p-10 md:p-12 pb-6 md:pb-8 border-b border-[#E7EFE9] bg-[#FAFBF9]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
              <div className="inline-flex items-center gap-1.5">
                <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#3B5B44]">
                  💍 KIT BÁSICO
                </span>
              </div>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#242121] font-medium tracking-tight mb-2">
              Planner da Noiva
            </h3>

            <p className="text-sm sm:text-base text-[#5F5855] font-normal leading-relaxed">
              Organize os detalhes do casamento sem precisar guardar tudo na cabeça.
            </p>
          </div>

          {/* Dentro do Card — 6 Tópicos em Composição Interna Elegante */}
          <div className="p-8 sm:p-10 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 md:gap-y-10">
              {kitTopics.map((topic, index) => {
                const IconComponent = topic.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start gap-4 pb-6 md:pb-0 border-b md:border-b-0 border-[#EFECE8] last:border-b-0"
                  >
                    {/* Ícone Minimalista */}
                    <div className="w-9 h-9 rounded-full bg-[#F2F7F3] border border-[#D9E6DC] flex items-center justify-center text-[#3B5B44] shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4 stroke-[2]" />
                    </div>

                    {/* Texto */}
                    <div className="space-y-1">
                      <h4 className="text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#242121]">
                        {topic.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#5F5855] leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Fechamento do Card */}
          <div className="p-8 sm:p-10 border-t border-[#E7EFE9] bg-[#FAFBF9] text-center">
            <p className="text-sm sm:text-base text-[#242121] font-medium max-w-xl mx-auto mb-6 leading-relaxed">
              Tudo organizado em um só lugar para você acompanhar o que já foi feito, o que falta e o que merece sua atenção.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-[#3B5B44]">
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 stroke-[2.5]" />
                <span>Mais organização</span>
              </span>
              <span aria-hidden="true" className="text-[#C2D4C6] hidden sm:inline">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 stroke-[2.5]" />
                <span>Menos esquecimentos</span>
              </span>
              <span aria-hidden="true" className="text-[#C2D4C6] hidden sm:inline">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 stroke-[2.5]" />
                <span>Mais tranquilidade</span>
              </span>
            </div>
          </div>

        </div>

        {/* Seção Persuasiva de Bônus Exclusivos */}
        <div className="rounded-3xl bg-[#FAF6F0] border border-[#E7DCD0] shadow-[0_10px_35px_rgba(70,55,45,0.04)] p-8 sm:p-10 lg:p-12">
          
          {/* Headline da Seção de Bônus */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F3E8DC] border border-[#E2D2C2] text-[#8C6730] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Gift className="w-3.5 h-3.5 text-[#A67C3D]" />
              <span>5 BÔNUS EXCLUSIVOS</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2.35rem] text-[#242121] leading-tight font-medium mb-3">
              🎁 E AINDA LEVE 5 BÔNUS EXCLUSIVOS
            </h3>

            <p className="text-sm sm:text-base text-[#5F5855] leading-relaxed max-w-xl mx-auto font-normal mb-6">
              Além do Planner da Noiva, você recebe ferramentas extras para organizar os detalhes que fazem diferença antes, durante e depois do grande dia.
            </p>

            {/* Destaque de Valor: R$ 29,99 -> R$ 0,00 HOJE: GRÁTIS */}
            <div className="inline-flex flex-col items-center justify-center p-5 sm:px-8 sm:py-5 rounded-2xl bg-white border border-[#E5D7C9] shadow-sm max-w-xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2 mb-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#8A817D]">
                  Valor total dos bônus:
                </span>
                <span className="text-sm sm:text-base text-[#7A736F] line-through font-normal">
                  De: R$ 29,99
                </span>
                <span className="text-xs text-[#8C6730] font-bold">
                  →
                </span>
                <span className="text-base sm:text-lg font-bold text-[#242121]">
                  Por: R$ 0,00
                </span>
                <span className="px-3.5 py-1 rounded-lg bg-[#EBF5EE] text-[#245230] border border-[#C6E2CD] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs">
                  HOJE: <span className="text-[#1E6634] font-extrabold">GRÁTIS</span>
                </span>
              </div>

              <div className="pt-2.5 border-t border-[#F2EAE0] w-full text-center">
                <p className="text-xs sm:text-sm font-medium text-[#3F6649]">
                  Você recebe os 5 bônus completos sem pagar nada a mais.
                </p>
              </div>
            </div>
          </div>

          {/* Cards Individuais dos 5 Bônus */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
            {bonuses.map((bonus, index) => {
              const IconComponent = bonus.icon;
              const cardColClass = 
                index === 3 
                  ? 'lg:col-span-2 lg:col-start-2' 
                  : index === 4 
                  ? 'md:col-span-2 md:max-w-md md:mx-auto md:w-full lg:max-w-none lg:col-span-2' 
                  : 'lg:col-span-2';

              return (
                <div
                  key={index}
                  className={`p-7 rounded-2xl bg-white border border-[#EBE2D8] shadow-[0_4px_20px_rgba(45,41,40,0.025)] hover:border-[#CBB288] transition-all duration-200 flex flex-col justify-between text-left ${cardColClass}`}
                >
                  <div>
                    {/* Topo do card: Bônus número e ícone minimalista */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9C7537]">
                        {bonus.number}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-[#FAF5EE] border border-[#EDE2CE] flex items-center justify-center text-[#9C7537] shrink-0">
                        <IconComponent className="w-4 h-4 stroke-[2]" />
                      </div>
                    </div>

                    {/* Título do Bônus */}
                    <h4 className="font-serif text-lg sm:text-xl font-medium text-[#242121] leading-snug tracking-tight mb-2">
                      {bonus.title}
                    </h4>

                    {/* Frase de Destaque */}
                    <p className="text-xs sm:text-sm font-serif italic text-[#8B4A56] mb-3 leading-relaxed">
                      {bonus.highlight}
                    </p>

                    {/* Descrição persuasiva */}
                    <p className="text-xs sm:text-sm text-[#5F5855] leading-relaxed mb-6 font-normal">
                      {bonus.description}
                    </p>
                  </div>

                  {/* Benefício Visual na Base */}
                  <div className="pt-4 border-t border-[#F3ECE4] flex items-start gap-2 text-xs font-medium text-[#3F6649]">
                    <Check className="w-3.5 h-3.5 text-[#3F6649] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{bonus.benefit}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Destaque Final da Seção */}
          <div className="rounded-2xl bg-white border border-[#E5D8CC] p-7 sm:p-9 text-center max-w-3xl mx-auto shadow-sm">
            
            <h4 className="font-serif text-lg sm:text-xl text-[#242121] font-medium mb-2">
              5 ferramentas extras para deixar sua organização ainda mais completa.
            </h4>

            <p className="text-xs sm:text-sm text-[#5F5855] leading-relaxed mb-6 font-medium">
              Você leva tudo isso junto com o Planner da Noiva — sem pagar nada a mais.
            </p>

            {/* Destaque Visual da Equação de Valor */}
            <div className="pt-5 border-t border-[#EDE3D8]">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                <span className="px-3.5 py-1.5 rounded-lg bg-[#FAF5EE] border border-[#E8DCCF] text-[#8C6730]">
                  5 BÔNUS (R$ 29,99 → <span className="text-[#1E6634] font-bold">GRÁTIS</span>)
                </span>

                <span className="text-[#8C6730] font-bold text-base sm:text-lg">
                  +
                </span>

                <span className="px-3.5 py-1.5 rounded-lg bg-[#FAF5EE] border border-[#E8DCCF] text-[#242121]">
                  PLANNER DA NOIVA
                </span>

                <span className="text-[#8C6730] font-bold text-base sm:text-lg">
                  =
                </span>

                <span className="px-4 py-1.5 rounded-lg bg-[#EFE3CF] border border-[#DFCEB3] text-[#5C431D] font-bold shadow-xs">
                  MAIS ORGANIZAÇÃO E MENOS ESQUECIMENTOS
                </span>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-[#7A736F] mt-5">
              5 bônus exclusivos incluídos gratuitamente no seu Kit Básico.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
