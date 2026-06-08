import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { buildWhatsAppUrl } from '../constants/branding';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        id="float-wa-btn"
        href={buildWhatsAppUrl('Olá! Gostaria de um diagnóstico de vendas gratuito pela AGC.')}
        target="_blank"
        rel="noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 rounded-full text-white shadow-2xl transition-transform hover:scale-110 active:scale-90 group"
        title="Fale no WhatsApp"
      >
        {/* Soft elegant pulsing indicator ring behind */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" style={{ animationDuration: '2.5s' }} />
        
        <MessageSquare className="w-6 h-6 fill-white text-emerald-600 group-hover:scale-110 transition-transform" style={{ color: 'white' }} />

        {/* Small live notification badge to draw click interest */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[9px] font-bold text-white items-center justify-center font-mono">
            1
          </span>
        </span>
      </a>
    </div>
  );
}
