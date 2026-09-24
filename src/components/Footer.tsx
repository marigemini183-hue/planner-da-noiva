import React from 'react';
import { LegalModalType } from './LegalModal';

interface FooterProps {
  onOpenLegal: (type: LegalModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="py-14 bg-[#F5EFEB] border-t border-[#E8DDD4]">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
        
        {/* Brand */}
        <h3 className="font-serif text-2xl text-[#242121] tracking-wider">
          Planner da Noiva
        </h3>

        {/* Quiet Tagline */}
        <p className="text-xs sm:text-sm text-[#6E6763]">
          Organização para tornar essa fase mais leve.
        </p>

        {/* Links */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#7A736F]">
          <button
            onClick={() => onOpenLegal('terms')}
            className="hover:text-[#242121] transition-colors cursor-pointer"
          >
            Termos de uso
          </button>
          <span aria-hidden="true" className="text-[#D0C4BB]">·</span>
          <button
            onClick={() => onOpenLegal('privacy')}
            className="hover:text-[#242121] transition-colors cursor-pointer"
          >
            Política de privacidade
          </button>
          <span aria-hidden="true" className="text-[#D0C4BB]">·</span>
          <button
            onClick={() => onOpenLegal('support')}
            className="hover:text-[#242121] transition-colors cursor-pointer"
          >
            Suporte
          </button>
        </div>

        <div className="pt-4 text-[11px] text-[#A09690]">
          © {new Date().getFullYear()} Planner da Noiva. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
};
