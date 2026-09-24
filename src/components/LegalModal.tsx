import React from 'react';
import { X, ShieldCheck, Mail, HelpCircle, FileText } from 'lucide-react';

export type LegalModalType = 'terms' | 'privacy' | 'support' | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FAF8F5] border border-[#E8DDD4] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#EDE2D8]">
          <div className="flex items-center gap-2.5">
            {type === 'terms' && <FileText className="w-5 h-5 text-[#8B4A56]" />}
            {type === 'privacy' && <ShieldCheck className="w-5 h-5 text-[#8B4A56]" />}
            {type === 'support' && <HelpCircle className="w-5 h-5 text-[#8B4A56]" />}
            <h3 className="font-serif text-xl sm:text-2xl text-[#242121]">
              {type === 'terms' && 'Termos de Uso'}
              {type === 'privacy' && 'Política de Privacidade'}
              {type === 'support' && 'Suporte ao Cliente'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#7A736F] hover:text-[#242121] hover:bg-[#F2EAE3] transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 overflow-y-auto space-y-4 text-sm text-[#5F5855] leading-relaxed pr-1">
          {type === 'terms' && (
            <>
              <p>
                <strong>1. Licença de Uso:</strong> Ao adquirir o Planner da Noiva ou o Kit Premium, você adquire uma licença pessoal e intransferível de uso dos arquivos digitais.
              </p>
              <p>
                <strong>2. Direitos Autorais:</strong> Todos os materiais, layouts, checklists e designs são protegidos por direitos autorais. É vedada a revenda, compartilhamento não autorizado ou distribuição comercial.
              </p>
              <p>
                <strong>3. Garantia Incondicional:</strong> Oferecemos 7 dias de garantia incondicional conforme o Código de Defesa do Consumidor. Caso sinta que o material não atendeu suas expectativas, basta solicitar o reembolso integral.
              </p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <p>
                <strong>1. Coleta de Dados:</strong> Coletamos apenas as informações essenciais (nome e e-mail) necessárias para o envio seguro do produto digital e emissão do comprovante de compra.
              </p>
              <p>
                <strong>2. Segurança:</strong> Seus dados pessoais trafegam com criptografia SSL de ponta a ponta e nunca são compartilhados ou comercializados com terceiros.
              </p>
              <p>
                <strong>3. Seus Direitos (LGPD):</strong> Você pode solicitar a exclusão ou atualização de seus dados cadastrais a qualquer momento através do nosso canal de suporte.
              </p>
            </>
          )}

          {type === 'support' && (
            <>
              <p>
                Estamos aqui para garantir que sua experiência seja leve e tranquila em cada etapa.
              </p>
              <div className="p-4 rounded-2xl bg-white border border-[#EDE2D8] space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#8B4A56]" />
                  <span className="text-[#2D2928] font-medium">contato@plannerdanoiva.com.br</span>
                </div>
                <div className="text-xs text-[#7A736F]">
                  Horário de atendimento: Segunda a Sexta, das 09h às 18h (Tempo médio de resposta: menos de 2 horas).
                </div>
              </div>
              <p className="text-xs text-[#7A736F]">
                Dúvidas sobre download, compatibilidade no tablet/celular ou impressão? Nossa equipe responde com carinho.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#EDE2D8] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#2D2928] bg-white border border-[#D9CEC5] hover:bg-[#F2EAE3] rounded-xl transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
