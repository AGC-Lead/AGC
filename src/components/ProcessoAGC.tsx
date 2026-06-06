import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, ChevronDown } from 'lucide-react';
import { AGC_PROCESS } from '../constants/data';

export default function ProcessoAGC() {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  
  const handleCTA = () => {
    const target = document.querySelector('#contato');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="processo" className="py-24 bg-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Mobile Accordion Header Card */}
        <div className="lg:hidden block mb-6">
          <button
            onClick={() => setIsMobileExpanded(!isMobileExpanded)}
            className="w-full bg-slate-50 hover:bg-slate-100/80 shadow-sm border border-slate-200/80 rounded-2xl p-5 flex items-center justify-between group active:scale-[0.99] transition-all"
          >
            <div className="text-left">
              <span className="font-mono text-[9px] tracking-widest text-[#B51E2E] uppercase font-bold">O QUE ENTREGAMOS</span>
              <h2 className="font-display font-black text-xl text-slate-900 mt-0.5">Do Mapeamento à Operação</h2>
            </div>
            <div className="bg-red-50 text-red-600 rounded-full p-2 group-hover:bg-red-100 transition-colors">
              <motion.div animate={{ rotate: isMobileExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </div>
          </button>
        </div>

        {/* Section Header & Phase Grid - Only visible on desktop or when expanded */}
        <div className={`${isMobileExpanded ? 'block' : 'hidden lg:block'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16 border-b border-slate-100 pb-12">
            
            <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
              <span className="font-mono text-xs text-slate-400 tracking-widest uppercase block font-semibold">O QUE ENTREGAMOS</span>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
                Do mapeamento à <br />
                <span className="text-red-650 text-red-600 block sm:inline">operação funcionando.</span>
              </h2>
            </div>

            <div className="lg:col-span-6">
              <p className="text-slate-500 font-sans text-sm sm:text-base leading-relaxed max-w-xl text-center lg:text-left">
                Cada projeto comercial começa mapeando de forma rigorosa a realidade atual do cliente. O escopo final e as estratégias editoriais e de tráfego são inteiramente definidos com base no que este levantamento analítico revelar.
              </p>
            </div>

          </div>

          {/* Phase Cards Grid matching image references */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch mb-16">
            {AGC_PROCESS.map((proc, index) => (
              <motion.div
                key={proc.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between transition-all hover:shadow-xl hover:bg-white"
              >
                <div>
                  {/* Numeric phase identifier */}
                  <div className="space-y-1 mb-6">
                    <span className="font-mono text-[10px] tracking-widest text-slate-400 font-bold uppercase block">
                      FASE 0{proc.phase}
                    </span>
                    <h3 className="font-display font-bold text-xl text-slate-900 leading-snug">
                      {proc.title}
                    </h3>
                  </div>

                  {/* Outcome check checklist with red diagonal arrow as shown in image reference */}
                  <ul className="space-y-3">
                    {proc.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <ArrowUpRight className="w-4 h-4 text-red-650 text-red-600 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-650 text-slate-705 text-slate-600 font-sans tracking-tight leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative dynamic phase track dot */}
                <div className="pt-6 border-t border-slate-100/50 mt-8 flex justify-between items-center text-[10px] font-mono text-slate-400">
                  <span>ESTÁGIO COMPLETO</span>
                  <span className="w-2 h-2 rounded-full bg-red-600" />
                </div>

              </motion.div>
            ))}
          </div>

          {/* Centralised Premium Rio Ave Green Button */}
          <div className="flex justify-center">
            <button
              onClick={handleCTA}
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-display font-semibold rounded-full tracking-wider shadow-lg shadow-emerald-900/10 transition-transform active:scale-95 uppercase text-sm"
            >
              Quero vender mais
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
