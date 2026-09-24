import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EDE5DE]">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Zone: Clean, single wordmark */}
        <a 
          href="#" 
          className="font-serif text-xl sm:text-2xl font-medium tracking-[0.12em] text-[#2D2928] hover:text-[#8B4A56] transition-colors"
        >
          PLANNER DA NOIVA
        </a>

        {/* Right Zone: Quiet tag and discreet button */}
        <div className="flex items-center gap-6">
          <span className="hidden md:inline text-xs sm:text-sm font-normal text-[#6B6562] tracking-wide">
            Organize seu casamento com mais leveza.
          </span>
          <a
            href="#kits"
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#2D2928] bg-transparent hover:bg-[#F2EBE5] border border-[#D9CEC5] rounded-full transition-all duration-200 active:scale-95 whitespace-nowrap inline-block"
          >
            QUERO MEU PLANNER
          </a>
        </div>
      </div>
    </header>
  );
};
