import React from 'react';
import { Check, Minus } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const rows = [
    { name: 'Planner da Noiva', basic: true, premium: true },
    { name: 'Planner da Lua de Mel', basic: false, premium: true },
    { name: 'Planner do Enxoval', basic: false, premium: true },
    { name: 'Orçamento completo', basic: false, premium: true },
    { name: 'Bônus', basic: true, premium: true },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF6F2] border-t border-[#EDE4DC]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        
        {/* Header */}
        <h2 className="font-serif text-3xl sm:text-4xl text-[#242121] leading-tight mb-12">
          Ainda está em dúvida?
        </h2>

        {/* Minimalist Comparison Table */}
        <div className="overflow-hidden rounded-3xl bg-white border border-[#E8DED5] shadow-[0_4px_24px_rgba(45,41,40,0.03)] mb-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#F0E6DE] bg-[#FDFBF9]">
                <th className="py-5 px-6 sm:px-8 text-xs sm:text-sm font-medium text-[#7A736F] uppercase tracking-wider">
                  Recurso
                </th>
                <th className="py-5 px-4 sm:px-6 text-center text-xs sm:text-sm font-semibold text-[#5A5350] uppercase tracking-wider">
                  KIT BÁSICO
                </th>
                <th className="py-5 px-4 sm:px-6 text-center text-xs sm:text-sm font-bold text-[#8B4A56] uppercase tracking-wider bg-[#F9F2ED]/60">
                  KIT PREMIUM
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F2EAE3]">
              {rows.map((row, index) => (
                <tr key={index} className="hover:bg-[#FAF8F5]/60 transition-colors">
                  <td className="py-4 px-6 sm:px-8 text-sm font-medium text-[#2D2928]">
                    {row.name}
                  </td>
                  
                  {/* Basic column */}
                  <td className="py-4 px-4 sm:px-6 text-center">
                    {row.basic ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F4EAE3] text-[#8B4A56]">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center text-[#B5ABA5]">
                        <Minus className="w-4 h-4 stroke-[2]" />
                      </span>
                    )}
                  </td>

                  {/* Premium column */}
                  <td className="py-4 px-4 sm:px-6 text-center bg-[#F9F2ED]/30">
                    {row.premium ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#8B4A56] text-white">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center text-[#B5ABA5]">
                        <Minus className="w-4 h-4 stroke-[2]" />
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Text Below */}
        <div className="space-y-1">
          <p className="font-serif text-xl sm:text-2xl text-[#242121]">
            O Básico resolve o essencial.
          </p>
          <p className="font-serif text-xl sm:text-2xl text-[#8B4A56] font-medium">
            O Premium organiza toda essa nova fase.
          </p>
        </div>

      </div>
    </section>
  );
};
