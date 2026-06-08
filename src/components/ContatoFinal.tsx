import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Instagram, Send, CheckCircle2, Landmark, Trophy, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { INSTAGRAM_URL, buildWhatsAppUrl } from '../constants/branding';

export default function ContatoFinal() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    whatsapp: '',
    segmento: 'imobiliaria',
    mensagem: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.whatsapp) {
      alert('Por favor, preencha seu nome e Whatsapp.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Map segments readable
    const segmentsMap: Record<string, string> = {
      imobiliaria: 'Imobiliária',
      construtora: 'Construtora',
      concessionaria: 'Concessionária',
      'loja-moto': 'Loja de Moto',
      autoescola: 'Autoescola',
      medica: 'Médica',
      outro: 'Outro segmento'
    };
    const readableSegment = segmentsMap[formData.segmento] || formData.segmento;

    // Compose formatted WhatsApp text message
    let messageText = `Olá, AGC! Gostaria de agendar o Diagnóstico da minha empresa.

*Nome:* ${formData.nome}`;

    if (formData.empresa && formData.empresa.trim() !== '') {
      messageText += `\n*Empresa/Marca:* ${formData.empresa}`;
    }

    messageText += `\n*WhatsApp:* ${formData.whatsapp}\n*Segmento:* ${readableSegment}`;

    if (formData.mensagem && formData.mensagem.trim() !== '') {
      messageText += `\n*OBSERVAÇÃO:* ${formData.mensagem}`;
    }

    const whatsappLink = buildWhatsAppUrl(messageText);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        nome: '',
        empresa: '',
        whatsapp: '',
        segmento: 'imobiliaria',
        mensagem: ''
      });

      // Redirect the user directly to WhatsApp API
      window.open(whatsappLink, '_blank');
    }, 1200);
  };

  return (
    <section id="contato" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: CTA Headers */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="font-mono text-[10px] tracking-widest text-slate-350 uppercase font-semibold">AGENDE UM DIAGNÓSTICO</span>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-5xl text-white leading-tight">
                Sua empresa está pronta para vender mais?
              </h2>
              <p className="text-xl font-display font-medium text-red-500">
                Fale agora com a AGC.
              </p>
            </div>

            <p className="text-slate-400 font-sans leading-relaxed text-sm sm:text-base">
              Nossa equipe comercial fará uma análise de tráfego, funil e posicionamento das suas redes de forma 100% gratuita para identificar se sua estrutura está pronta para a escala.
            </p>

            {/* Quick social click indicators */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                id="contato-wa-direct"
                href={buildWhatsAppUrl('Olá! Eu estava olhando o site da AGC e gostaria de impulsionar as minhas vendas.')}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2.5 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-display font-bold text-xs tracking-wider transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>CHAMAR NO WHATSAPP</span>
              </a>

              <a
                id="contato-ig-direct"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2.5 px-6 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-xl font-display font-bold text-xs tracking-wider transition-all"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
                <span>IR PARA INSTAGRAM</span>
              </a>
            </div>

            {/* Simulated credibility indicators */}
            <div className="pt-8 border-t border-white/5 flex gap-6 items-center">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-red-500" />
                <span className="text-xs text-slate-400 font-mono">Conexão 100% Segura</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span className="text-xs text-slate-400 font-mono">Top Performance 360°</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form Card with glass effect */}
          <div className="lg:col-span-7 bg-[#111827]/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-550 bg-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl text-white">Solicitação Recebida!</h3>
                  <p className="text-slate-400 font-sans text-sm max-w-md mx-auto">
                    Nossa equipe comercial entrará em contato direto pelo WhatsApp disponibilizado em até 15 minutos para agendar seu diagnóstico gratuito.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-red-500 hover:text-red-400 font-mono uppercase tracking-wider font-bold"
                  >
                    Enviar outro formulário
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-xl text-white border-b border-white/5 pb-4">
                  Preencha para agendar um diagnóstico
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="nome" className="text-xs font-mono text-slate-400 block uppercase font-bold">SEU NOME</label>
                    <input
                      id="nome"
                      type="text"
                      required
                      placeholder="Ex: João da Silva"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="empresa" className="text-xs font-mono text-slate-400 block uppercase font-bold">EMPRESA / MARCA</label>
                    <input
                      id="empresa"
                      type="text"
                      placeholder="Ex: Construtora Alfa"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="whatsapp" className="text-xs font-mono text-slate-400 block uppercase font-bold">TELEFONE (WHATSAPP)</label>
                    <input
                      id="whatsapp"
                      type="tel"
                      required
                      placeholder="Ex: (71) 99999-9999"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="segmento" className="text-xs font-mono text-slate-400 block uppercase font-bold">SEU SEGMENTO PRINCIPAL</label>
                    <select
                      id="segmento"
                      value={formData.segmento}
                      onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
                      className="w-full bg-slate-900 focus:bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-red-500 focus:outline-none transition-colors text-white"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="imobiliaria" className="bg-slate-900 text-white">Imobiliária</option>
                      <option value="construtora" className="bg-slate-900 text-white">Construtora</option>
                      <option value="concessionaria" className="bg-slate-900 text-white">Concessionária</option>
                      <option value="loja-moto" className="bg-slate-900 text-white">Loja de Moto</option>
                      <option value="autoescola" className="bg-slate-900 text-white">Autoescola</option>
                      <option value="medica" className="bg-slate-900 text-white">Médica</option>
                      <option value="outro" className="bg-slate-900 text-white">Outro segmento</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="mensagem" className="text-xs font-mono text-slate-400 block uppercase font-bold">OBSERVAÇÃO</label>
                  <textarea
                    id="mensagem"
                    rows={3}
                    placeholder="Conte-nos brevemente se você já investe em tráfego ou qual sua maior dor comercial hoje..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-red-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  id="contato-submit"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-650 bg-red-600 hover:bg-red-500 text-white font-display font-extrabold text-xs tracking-widest py-4 rounded-xl flex items-center justify-center space-x-2 uppercase transition-all shadow-xl shadow-red-900/10 active:scale-98 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'ENVIANDO...' : 'SOLICITAR DIAGNÓSTICO'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Brand visual Footer inside contact section */}
        <div className="pt-24 mt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs text-center md:text-left">
          <div className="space-y-1">
            <h4 className="font-display font-extrabold text-lg text-white">AGC</h4>
            <p>© 2026 AGC - KRHUB. Todos os direitos reservados.</p>
          </div>
          <div className="flex gap-4">
            <a href="#o-que-e" className="hover:text-white transition-colors">Quem somos</a>
            <span>•</span>
            <a href="#areas" className="hover:text-white transition-colors">Áreas</a>
            <span>•</span>
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <span>•</span>
            <a href="#escritorios" className="hover:text-white transition-colors">Escritório</a>
          </div>
        </div>

      </div>
    </section>
  );
}
