import { useState } from 'react';
import { motion } from 'motion/react';
import { DollarSign, MessageCircle, Star, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import { AGC_PROOFS } from '../constants/data';

export default function ResultadosProva() {
  const [isPaused, setIsPaused] = useState(false);
  
  // Duplicate array list to build absolute seamless loop
  const duplicatedList1 = [...AGC_PROOFS, ...AGC_PROOFS];
  const duplicatedList2 = [...AGC_PROOFS.slice().reverse(), ...AGC_PROOFS.slice().reverse()];

  const pauseHandlers = {
    onMouseDown: () => setIsPaused(true),
    onMouseUp: () => setIsPaused(false),
    onMouseLeave: () => setIsPaused(false),
    onTouchStart: () => setIsPaused(true),
    onTouchEnd: () => setIsPaused(false),
    onTouchCancel: () => setIsPaused(false),
  };

  return (
    <section id="resultados" className="py-24 bg-slate-50 overflow-hidden relative">
      {/* Decorative premium header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 relative z-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 px-3 py-1 rounded-full text-emerald-800">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-spin" />
            <span className="font-mono text-[10px] tracking-widest uppercase font-bold">MÉTRICAS PARCIAIS CONSOLIDADAS</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight">
            Nossos Resultados Falam por Nós
          </h2>
          <p className="text-slate-500 font-sans text-sm sm:text-base max-w-2xl mx-auto">
            Não apostamos em palpites. Veja o fluxo real de faturamento, transações aprovadas e o retorno que nossos parceiros estão obtendo diariamente.
          </p>
        </div>
      </div>

      {/* Track 1: Moving left ticker */}
      <div 
        className="relative w-full flex overflow-x-hidden py-4 border-y border-slate-200/60 bg-white cursor-pointer active:cursor-grabbing select-none"
        {...pauseHandlers}
      >
        {/* Soft fading overlays for infinite depth styling */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div 
          className="flex space-x-6 shrink-0 animate-scroll-x whitespace-nowrap"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {duplicatedList1.map((proof, index) => (
            <div
              key={`t1-${proof.id}-${index}`}
              className="inline-block w-[320px] sm:w-[380px] bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between whitespace-normal shadow-sm hover:shadow-md transition-shadow shrink-0"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {proof.type === 'print' ? (
                    <span className="bg-blue-100 text-blue-800 text-[9px] font-mono tracking-wider font-bold uppercase px-2 py-0.5 rounded-md">
                      TRANS TRANSAÇÃO COMERCIAL
                    </span>
                  ) : proof.type === 'message' ? (
                    <span className="bg-emerald-100 text-emerald-800 text-[9px] font-mono tracking-wider font-bold uppercase px-2 py-0.5 rounded-md">
                      WHATSAPP OPERACIONAL
                    </span>
                  ) : (
                    <span className="bg-amber-100 text-amber-800 text-[9px] font-mono tracking-wider font-bold uppercase px-2 py-0.5 rounded-md">
                      DEPOIMENTO DE PARCEIRO
                    </span>
                  )}
                  
                  {proof.value && (
                    <span className="text-emerald-600 font-mono text-xs font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                      {proof.value}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-500 font-sans italic">
                  "{proof.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/50 mt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-slate-900">{proof.source}</h4>
                  <p className="text-[10px] text-slate-400 font-mono">{proof.subtitle}</p>
                </div>
                <div className="flex space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Track 2: Moving right ticker */}
      <div 
        className="relative w-full flex overflow-x-hidden py-4 mt-6 border-b border-slate-200/60 bg-white cursor-pointer active:cursor-grabbing select-none"
        {...pauseHandlers}
      >
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Opposite direction scroll by reversing track flex order or animation direction */}
        <div 
          className="flex space-x-6 shrink-0 animate-scroll-x-fast whitespace-nowrap" 
          style={{ 
            animationDirection: 'reverse',
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          {duplicatedList2.map((proof, index) => (
            <div
              key={`t2-${proof.id}-${index}`}
              className="inline-block w-[320px] sm:w-[380px] bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between whitespace-normal shadow-sm hover:shadow-md transition-shadow shrink-0"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {proof.type === 'print' ? (
                    <span className="bg-blue-105 bg-indigo-100 text-indigo-800 text-[9px] font-mono tracking-wider font-bold uppercase px-2 py-0.5 rounded-md">
                      PAGAMENTO COMPILADO
                    </span>
                  ) : proof.type === 'message' ? (
                    <span className="bg-emerald-100 text-emerald-800 text-[9px] font-mono tracking-wider font-bold uppercase px-2 py-0.5 rounded-md">
                      FEEDBACK INTERNO CRM
                    </span>
                  ) : (
                    <span className="bg-amber-105 bg-orange-150 bg-amber-100 text-amber-800 text-[9px] font-mono tracking-wider font-bold uppercase px-2 py-0.5 rounded-md">
                      DIRETORIA INSTITUCIONAL
                    </span>
                  )}
                  
                  {proof.value && (
                    <span className="text-emerald-600 font-mono text-xs font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                      {proof.value}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-500 font-sans italic">
                  "{proof.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/50 mt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-slate-900">{proof.source}</h4>
                  <p className="text-[10px] text-slate-400 font-mono">{proof.subtitle}</p>
                </div>
                <div className="flex space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Standout summary numbers banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 relative z-10 bg-white rounded-3xl p-8 border border-slate-250 border-slate-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="pt-4 md:pt-0">
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950">R$ 1M+</h3>
            <p className="text-xs text-slate-500 font-mono tracking-wider uppercase mt-1">EM VENDAS PROCESSADAS</p>
          </div>
          <div className="pt-4 md:pt-0">
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-emerald-650 text-emerald-600">8.4x</h3>
            <p className="text-xs text-slate-500 font-mono tracking-wider uppercase mt-1">ROAS MÉDIO INTEGRADO</p>
          </div>
          <div className="pt-4 md:pt-0">
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950">3k+</h3>
            <p className="text-xs text-slate-500 font-mono tracking-wider uppercase mt-1">LEADS GERADOS POR MÊS</p>
          </div>
          <div className="pt-4 md:pt-0">
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-red-650 text-red-600">100%</h3>
            <p className="text-xs text-slate-500 font-mono tracking-wider uppercase mt-1">FOCO EM ESCALA ONLINE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
