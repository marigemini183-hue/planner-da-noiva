import React from 'react';

export const Identification: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F6EFEA]/45 border-y border-[#EDE3DA]/70">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#242121] leading-tight text-balance mb-6">
          Organizar um casamento não precisa ser complicado.
        </h2>

        <p className="text-base sm:text-lg text-[#5F5855] leading-relaxed max-w-2xl mx-auto mb-14 font-normal">
          São muitos detalhes para lembrar: orçamento, fornecedores, convidados, cerimônia, recepção, documentos, lua de mel e muito mais. O planner foi criado para reunir tudo isso de forma simples e prática.
        </p>

        {/* 3 Highlights as requested */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-2">
          
          <div className="p-8 rounded-2xl bg-white border border-[#EDE4DC] shadow-[0_4px_20px_rgba(45,41,40,0.03)] text-center transition-transform duration-200 hover:-translate-y-0.5">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B4A56] mb-3 block">
              01
            </span>
            <p className="font-serif text-2xl text-[#242121] font-medium leading-snug">
              Mais organização.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#EDE4DC] shadow-[0_4px_20px_rgba(45,41,40,0.03)] text-center transition-transform duration-200 hover:-translate-y-0.5">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B4A56] mb-3 block">
              02
            </span>
            <p className="font-serif text-2xl text-[#242121] font-medium leading-snug">
              Menos esquecimentos.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#EDE4DC] shadow-[0_4px_20px_rgba(45,41,40,0.03)] text-center transition-transform duration-200 hover:-translate-y-0.5">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B4A56] mb-3 block">
              03
            </span>
            <p className="font-serif text-2xl text-[#242121] font-medium leading-snug">
              Mais tranquilidade para aproveitar essa fase.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
