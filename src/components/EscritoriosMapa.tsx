import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Printer, ExternalLink, ArrowRight } from 'lucide-react';
import { AGC_OFFICES } from '../constants/data';

export default function EscritoriosMapa() {
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);

  const activeOffice = AGC_OFFICES[selectedCityIndex];

  // Helper to open the coordinates in external Google Maps
  const handleOpenExternalMaps = () => {
    // Generate standard coordinates or query map link
    const query = encodeURIComponent(`${activeOffice.address}, ${activeOffice.building}, ${activeOffice.city}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <section id="escritorios" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title Centered as shown in Screenshot 1 */}
        <div className="text-center mb-6">
          <h2 className="font-display font-bold text-xs tracking-widest text-slate-800 uppercase">
            NOSSO ESCRITÓRIO
          </h2>
        </div>

        {/* Cities Selection Tabs centered with border layout as shown in Screenshot 1 */}
        {AGC_OFFICES.length > 1 && (
          <div className="border-t border-b border-slate-200/80 mb-12 py-2">
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-8 max-w-2xl mx-auto">
              {AGC_OFFICES.map((off, idx) => (
                <button
                  key={off.city}
                  onClick={() => setSelectedCityIndex(idx)}
                  className={`px-6 py-2.5 rounded text-xs tracking-wider uppercase font-sans font-medium transition-all duration-300 relative ${
                    idx === selectedCityIndex
                      ? 'bg-slate-100 text-slate-950 font-bold'
                      : 'text-slate-500 hover:text-slate-900 bg-transparent'
                  }`}
                >
                  {off.city}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Multi-City Interactive Map and Details Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden shadow-2xl border border-slate-100 items-stretch min-h-[480px]">
          
          {/* Lado Esquerdo Card: Dark Navy blue background block as shown in Screenshot 1 */}
          <div className="lg:col-span-4 bg-[#091523] text-white p-8 sm:p-12 flex flex-col justify-between relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOffice.city}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="font-display font-extrabold text-3xl tracking-tight mb-6">
                    {activeOffice.city}
                  </h3>
                  
                  {/* Address block fully corresponding to screenshot format */}
                  <div className="space-y-1 text-slate-300 font-sans text-sm sm:text-base leading-relaxed tracking-wide">
                    <p>{activeOffice.address}</p>
                    <p>{activeOffice.building}</p>
                    <p>{activeOffice.postalCode}</p>
                    <p>Brasil</p>
                  </div>
                </div>

                {/* Telephone and fax block */}
                <div className="space-y-2 text-slate-300 font-mono text-xs sm:text-sm pt-4 border-t border-white/5">
                  <div className="flex items-center space-x-2">
                    <span>Tlf:</span>
                    <a href={`tel:${activeOffice.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                      {activeOffice.phone}
                    </a>
                  </div>
                  
                  {activeOffice.fax && (
                    <div className="flex items-center space-x-2 text-slate-400">
                      <span>Fax:</span>
                      <span>{activeOffice.fax}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Open Google Maps external button with original elegant arrow */}
            <div className="mt-12 pt-6 border-t border-white/10">
              <button
                onClick={handleOpenExternalMaps}
                className="inline-flex items-center space-x-2 text-sm font-display font-semibold text-white/95 hover:text-red-400 group transition-all"
              >
                <span>Open in Google Maps</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-slate-300" />
              </button>
            </div>
          </div>

          {/* Lado Direito: Interactive Google Maps Iframe matching correct size of original */}
          <div className="lg:col-span-8 bg-slate-100 min-h-[350px] relative">
            <iframe
              title={`Localização escritório AGC ${activeOffice.city}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={activeOffice.mapsUrl}
              className="absolute inset-0 w-full h-full grayscale-[10%] contrast-[110%] opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
