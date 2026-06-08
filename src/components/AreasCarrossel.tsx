import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AGC_SEGMENTS } from '../constants/data';

export default function AreasCarrossel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);
  const autoref = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setVideoFailed(false);
    const activeSegment = AGC_SEGMENTS[activeIndex];
    autoref.current = setTimeout(() => {
      handleNext();
    }, activeSegment.durationMs);

    return () => {
      if (autoref.current) clearTimeout(autoref.current);
    };
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === AGC_SEGMENTS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? AGC_SEGMENTS.length - 1 : prev - 1));
  };

  const handleSelect = (idx: number) => {
    setActiveIndex(idx);
  };

  const activeSegment = AGC_SEGMENTS[activeIndex];

  return (
    <section id="areas" className="py-24 bg-brand-dark text-white overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-slate-400 uppercase font-semibold">SEGMENTOS ATENDIDOS</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight leading-none text-white">
              Áreas de Atuação
            </h2>
            <p className="text-slate-400 font-sans text-sm mt-3 max-w-xl">
              Nossa operação está validada nos setores mais concorridos do mercado, adaptando nossa infraestrutura para o seu funil de vendas específico.
            </p>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all active:scale-90"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all active:scale-90"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Large Main Feature Stage with Video */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left panel: Info about active sector */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white/5 rounded-3xl p-8 sm:p-10 border border-white/10 backdrop-blur-sm">
            <div className="space-y-6">
              <span className="font-mono text-slate-505 text-sm tracking-widest text-red-400 font-bold block uppercase">
                {activeSegment.code} - CASO PRATICO {activeIndex + 1} / {AGC_SEGMENTS.length}
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSegment.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <h3 className="font-display font-bold text-3xl sm:text-4xl text-white">
                    {activeSegment.title}
                  </h3>
                  <p className="text-slate-300 font-sans text-base leading-relaxed">
                    {activeSegment.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex space-x-2">
                {AGC_SEGMENTS.map((seg, i) => (
                  <button
                    key={seg.id}
                    onClick={() => handleSelect(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex ? 'w-8 bg-red-500' : 'w-2 bg-white/20'
                    }`}
                    aria-label={`Ir para segmento ${seg.title}`}
                  />
                ))}
              </div>

              <a
                href="#contato"
                className="bg-red-650 hover:bg-red-600 bg-red-600 text-white px-5 py-3 rounded-xl text-xs font-semibold tracking-wider hover:opacity-90 transition-transform active:scale-95 text-center uppercase"
              >
                VENDER NESSE SETOR
              </a>
            </div>
          </div>

          {/* Right panel: High Quality HTML5 Video Container */}
          <div
            className="lg:col-span-7 relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[440px] mx-auto aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 group bg-slate-950 self-center shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSegment.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/65 via-transparent to-brand-dark/10 z-10 pointer-events-none" />

                {videoFailed ? (
                  <img
                    src={activeSegment.fallbackImageUrl}
                    alt={activeSegment.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    key={`${activeSegment.id}-video`}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    playsInline
                    controls={false}
                    disablePictureInPicture
                    preload="auto"
                    onLoadedMetadata={(event) => {
                      const video = event.currentTarget;
                      video.muted = false;
                      video.volume = 1;
                    }}
                    onCanPlay={(event) => {
                      event.currentTarget.play().catch(() => undefined);
                    }}
                    onError={() => {
                      setVideoFailed(true);
                    }}
                  >
                    <source src={activeSegment.videoUrl} type={activeSegment.videoType} />
                    Your browser does not support the video tag.
                  </video>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Small scannable quick selection selector menu */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {AGC_SEGMENTS.map((seg, idx) => (
            <button
              key={`${seg.id}-btn`}
              onClick={() => handleSelect(idx)}
              className={`p-4 rounded-xl text-left border transition-all ${
                idx === activeIndex
                  ? 'bg-red-650 bg-red-600 border-red-500 shadow-lg shadow-red-950/20 text-white'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/30 hover:bg-white/10'
              }`}
            >
              <span className="font-mono text-[10px] block text-white/50 mb-1">{seg.code}</span>
              <span className="font-display font-medium text-sm block tracking-tight">{seg.title}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

