/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import AboutAGC from './components/AboutAGC';
import AreasCarrossel from './components/AreasCarrossel';
import ServicosMapeamento from './components/ServicosMapeamento';
import ProcessoAGC from './components/ProcessoAGC';
import ResultadosProva from './components/ResultadosProva';
import EscritoriosMapa from './components/EscritoriosMapa';
import ContatoFinal from './components/ContatoFinal';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-red-500 selection:text-white antialiased">
      {/* 1. Header Navigation Menu */}
      <Header />

      <main>
        {/* 2. Banner Principal (Cinematic Rio Ave Effect Intro Sequence) */}
        <HeroBanner />

        {/* 3. Institutional Section (Não somos apenas marketing) */}
        <AboutAGC />

        {/* 4. Areas of Action (Automatic Autoplay loop video carousel) */}
        <AreasCarrossel />

        {/* 5. Services Section (Mapeamento-Style modern split dashboard layout) */}
        <ServicosMapeamento />

        {/* 6. Process Section (Do mapeamento à operação funcionando) */}
        <ProcessoAGC />

        {/* 7. Results Section (Infinite dual-direction marquees of conversion metrics and feedbacks) */}
        <ResultadosProva />

        {/* 8. offices Map section (Interactive selectable municipal office tabs matching original coordinates) */}
        <EscritoriosMapa />

        {/* 9. Contact form & conversion stage */}
        <ContatoFinal />
      </main>

      {/* 10. WhatsApp floating button widget */}
      <WhatsAppFloat />
    </div>
  );
}
