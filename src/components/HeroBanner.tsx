import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, MessageSquare } from 'lucide-react';

export default function HeroBanner() {
  const [stage, setStage] = useState<'split' | 'expanded' | 'content'>('split');

  useEffect(() => {
    // Step 1: Split cards shown for 3.0 seconds (as requested by user)
    const timer1 = setTimeout(() => {
      setStage('expanded');
    }, 3000);

    // Step 2: Transition content in after the 3.0 second expansion animation stabilizes (time total: 6 seconds)
    const timer2 = setTimeout(() => {
      setStage('content');
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleCTA = () => {
    const target = document.querySelector('#processo');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const textLines = "A única agência 360° focada em performance de vendas.";
  const subtextDescription = "Transformamos conteúdo, tráfego e atendimento em vendas reais estruturadas.";

  return (
    <section id="banner" className="relative h-screen w-full overflow-hidden bg-[#070c18]">
      
      {/* Abstract premium universe visual decorations (stars or points of connections to bridge visual style) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-white/40 rounded-full" />
        <div className="absolute top-1/3 left-3/4 w-1.5 h-1.5 bg-red-500/30 rounded-full" />
        <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-white/30 rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-indigo-500/20 rounded-full" />
      </div>

      {/* STAGE 1 & STAGE 2: Photo Cards layout */}
      <AnimatePresence>
        {stage !== 'content' && (
          <div className="absolute inset-0 z-25 flex flex-col justify-center items-center px-4">
            
            {/* Split Photo-Cards Side-by-Side Wrapper - fades out when we transition into Stage 2 */}
            <div className="relative max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              
              {/* Left Photo Card: "IR ALÉM PARA" */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: stage === 'split' ? 1 : 0,
                  x: stage === 'split' ? 0 : -150,
                  y: stage === 'split' ? 0 : 50,
                  scale: stage === 'split' ? 1 : 0.8
                }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center shrink-0 w-[230px] sm:w-[280px] md:w-[320px]"
              >
                <div className="font-display font-bold text-center text-xs sm:text-sm md:text-[15px] tracking-[0.25em] text-white/90 uppercase mb-4">
                  IR ALÉM PARA
                </div>
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                    alt="AGC Equipe Planejamento"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 z-10" />
                </div>
              </motion.div>

              {/* Central Symmetrical Arc Vector Connection */}
              {stage === 'split' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.65, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 1 }}
                  className="absolute hidden md:block z-30 pointer-events-none"
                >
                  <svg className="w-40 h-20 text-white/50" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 80C50 20 150 20 190 80" stroke="currentColor" strokeWidth="3" strokeDasharray="3 5" strokeLinecap="round"/>
                  </svg>
                </motion.div>
              )}

              {/* Right Photo Card: "CRIAR PONTES" */}
              {/* Important: It will animate and grow to fullscreen dynamically on Stage 2 (expanded) over 3 seconds */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: stage === 'split' ? 1 : 0, // Text label and card framing fades, but the image expands below
                  x: stage === 'split' ? 0 : 150,
                  y: stage === 'split' ? 0 : 50,
                  scale: stage === 'split' ? 1 : 0.8
                }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center shrink-0 w-[230px] sm:w-[280px] md:w-[320px]"
              >
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-slate-850">
                  <img
                    src="https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?auto=format&fit=crop&q=80&w=800"
                    alt="AGC Conteúdo e Gravações"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 z-10" />
                </div>
                <div className="font-display font-bold text-center text-xs sm:text-sm md:text-[15px] tracking-[0.25em] text-white/90 uppercase mt-4">
                  CRIAR PONTES
                </div>
              </motion.div>

            </div>

            {/* Symmetrical Centralizing Circular Logo Header */}
            {stage === 'split' && (
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="absolute z-40 w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-white/20 bg-brand-dark/70 backdrop-blur-md shadow-2xl flex items-center justify-center text-center"
              >
                <div>
                  <h1 className="font-display font-black text-xl tracking-widest text-white leading-none">
                    AGC
                  </h1>
                  <span className="font-mono text-[8px] tracking-[0.15em] text-red-500 uppercase block mt-1">PERFORMANCE</span>
                </div>
              </motion.div>
            )}

          </div>
        )}
      </AnimatePresence>

      {/* SMOOTH CINEMATIC BACKGROUND ZOOM IMAGES */}
      {/* The cinematic image of the right card takes over the banner smoothly over 3 seconds */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: stage === 'split' ? 0 : 1
        }}
        transition={{ duration: stage === 'split' ? 0 : 1.5 }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?auto=format&fit=crop&q=80&w=1600"
          alt="AGC Full Background Scaled"
          className="absolute object-cover w-full h-full object-center"
          animate={{
            scale: stage === 'expanded' ? 1 : 1.10
          }}
          transition={{ duration: 3.0, ease: 'easeOut' }} // 3-second extremely smooth cinematic scale zoomout as requested
        />
        
        {/* Deep dark fade overlay to guarantee that all text is crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060a13] via-[#070c18]/80 to-[#070c18]/45 z-10" />
      </motion.div>

      {/* STAGE 3: Premium Reveal of AGC Copy */}
      <div className="absolute inset-0 z-30 flex items-center justify-center px-4">
        {stage === 'content' && (
          <div className="max-w-4xl text-center flex flex-col items-center">
            
            {/* Upper Action Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="bg-red-650 text-white font-mono text-[10px] sm:text-xs tracking-widest uppercase px-3 py-1.5 rounded-full inline-block font-semibold">
                AGÊNCIA PERFORMANCE 360°
              </span>
            </motion.div>

            {/* Core Giant Title AGC */}
            <motion.h2
              initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display font-black text-6xl sm:text-8xl tracking-tighter text-white mb-4"
            >
              AGC
            </motion.h2>

            {/* Core Value Proposition Statement */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl sm:text-3xl font-display font-medium text-slate-100 tracking-tight leading-tight max-w-2xl px-2"
            >
              {textLines}
            </motion.p>

            {/* Ambient Supporting Secondary Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-sm sm:text-base text-slate-300 font-sans tracking-wide mt-3 max-w-xl"
            >
              {subtextDescription}
            </motion.p>

            {/* Action Buttons with explicit pre-configured WhatsApp messaging */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center"
            >
              <button
                id="hero-cta-more"
                onClick={handleCTA}
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-display font-bold rounded-xl tracking-wider hover:bg-slate-100 transition-all shadow-xl hover:shadow-white/5 active:scale-95 flex items-center justify-center space-x-2 border border-white"
              >
                <span>QUERO VENDAS PREVISÍVEIS</span>
                <ChevronRight className="w-5 h-5 text-red-600" />
              </button>

              <a
                id="hero-cta-wa"
                href="https://wa.me/5571999999999?text=Ol%C3%A1%21%20Eu%20estava%20olhando%20o%20site%20da%20AGC%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20de%20vendas%20para%20a%20minha%20empresa%20hoje.%20Podemos%20conversar%3F"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#0a0e1a]/80 backdrop-blur-md text-white border border-white/20 font-display font-bold rounded-xl tracking-wider hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>COMBINAR DIAGNÓSTICO</span>
              </a>
            </motion.div>

          </div>
        )}
      </div>

      {/* Symmetrical subtle scrolling arrow indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-5 h-8 border border-white/15 rounded-full flex justify-center p-1"
        >
          <div className="w-1 bg-red-500 rounded-full h-2" />
        </motion.div>
      </div>

    </section>
  );
}
