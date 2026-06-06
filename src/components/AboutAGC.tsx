import { motion } from 'motion/react';
import { Video, BarChart3, MessageSquareText, GitMerge, GraduationCap, Share2 } from 'lucide-react';

export default function AboutAGC() {
  const pillars = [
    {
      icon: <Video className="w-6 h-6 text-red-500" />,
      title: 'Gravação de Conteúdo',
      desc: 'Produzimos e direcionamos vídeos curtos no formato ideal para prender a atenção do lead de forma cirúrgica.',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
      title: 'Tráfego Pago',
      desc: 'Investimento direcionado de forma inteligente para que cada centavo retorne em novos leads bem qualificados.',
    },
    {
      icon: <MessageSquareText className="w-6 h-6 text-emerald-500" />,
      title: 'Atendimento e Chat',
      desc: 'Configuração de fluxos ágeis que garantem contatos respondidos no ato e triagem inteligente para o time.',
    },
    {
      icon: <GitMerge className="w-6 h-6 text-purple-500" />,
      title: 'Funil de Vendas',
      desc: 'Mapeamento estratégico que conduz o possível comprador do feed da rede social direto para a assinatura de contrato.',
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-amber-500" />,
      title: 'Treinamento Comercial',
      desc: 'Metodologia exclusiva de conversão rápida por chat para reeducar sua equipe e aniquilar objeções de preço.',
    },
    {
      icon: <Share2 className="w-6 h-6 text-indigo-500" />,
      title: 'Gestão de Redes Sociais',
      desc: 'Presença constante e autoridade visual construída todos os dias, tornando sua marca uma fortaleza inabalável.',
    },
  ];

  return (
    <section id="o-que-e" className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic decorative backdrop line */}
      <div className="absolute top-1/2 left-0 right-0 h-40 bg-gradient-to-r from-red-500/5 via-blue-500/5 to-purple-500/5 blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Sticky Left Column with Thesis */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span className="font-mono text-xs tracking-widest text-slate-500 uppercase font-semibold">AGC CONTEXT</span>
            </div>
            
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight tracking-tight">
              Não somos apenas marketing.
            </h2>
            
            <div className="w-20 h-1 bg-red-600 rounded-full" />
            
            <p className="text-lg text-slate-600 font-sans leading-relaxed">
              Agências tradicionais entregam posts e curtidas. A AGC constrói uma <strong className="text-slate-900 font-medium">máquina de vendas 360°</strong> integrada.
            </p>
            
            <p className="text-slate-500 leading-relaxed text-sm">
              Conectamos cada ponto do seu processo — da captação do tráfego ao roteiro do vendedor que fecha a conta — garantindo que a escala do seu negócio seja baseada em números consolidados, não em palpites de branding.
            </p>
            
            <div className="pt-4">
              <a
                href="#servicos"
                className="inline-flex items-center space-x-2 text-sm font-display font-bold text-slate-950 hover:text-red-600 transition-colors group"
              >
                <span>VER SERVIÇOS MAIS DETALHADOS</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Connected Grid of Pillars on the right */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-100/80 transition-all shadow-sm hover:shadow-md hover:bg-white"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-5 border border-slate-100">
                  {pillar.icon}
                </div>
                
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                
                <p className="text-sm text-slate-500 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
