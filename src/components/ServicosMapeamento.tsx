import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Video, BarChart2, MessageSquare, TrendingUp, Cpu, Smartphone, DollarSign, Calendar, Compass, ShieldCheck, ChevronDown } from 'lucide-react';

export default function ServicosMapeamento() {
  const [activeVideoCategory, setActiveVideoCategory] = useState<'realestate' | 'car' | 'const' | 'motos' | 'school'>('realestate');
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  const cronogramaData = [
    { day: 'DOM', action: 'Feedback', color: 'text-blue-600' },
    { day: 'SEG', action: 'Reel Venda', color: 'text-emerald-600' },
    { day: 'TER', action: 'Carrossel', color: 'text-indigo-600' },
    { day: 'QUA', action: 'Reel Vir.', color: 'text-[#B51E2E]' },
    { day: 'QUI', action: 'Story At.', color: 'text-amber-500' },
    { day: 'SEX', action: 'Reel Inst.', color: 'text-pink-600' },
    { day: 'SÁB', action: 'Story Of.', color: 'text-teal-600' },
  ];
  const duplicatedCronograma = [...cronogramaData, ...cronogramaData, ...cronogramaData];

  const videoCategoryData = {
    realestate: {
      title: 'Imobiliária',
      stats: 'Visualizações: 24.5k • Leads: 18',
      desc: 'Tour dinâmico em apartamento decorado focado nos atributos do imóvel.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=400'
    },
    car: {
      title: 'Concessionária',
      stats: 'Visualizações: 41.2k • Leads: 32',
      desc: 'Exposição de aerodinâmica, som do motor e atrativos do financiamento.',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=400'
    },
    const: {
      title: 'Construtora',
      stats: 'Visualizações: 19.8k • Leads: 14',
      desc: 'Perspectivas 3D intercaladas com andamento físico real da fundação.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400'
    },
    motos: {
      title: 'Loja de Motos',
      stats: 'Visualizações: 52.0k • Leads: 45',
      desc: 'Câmera em primeira pessoa acelerando o modelo premium com preço em tela.',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=400'
    },
    school: {
      title: 'Autoescola',
      stats: 'Visualizações: 33.4k • Leads: 29',
      desc: 'Tutorial rápido eliminando o receio da baliza e promovendo carteira ágil.',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=400'
    }
  };

  return (
    <section id="servicos" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Mobile Accordion Header Card */}
        <div className="lg:hidden block mb-6">
          <button
            onClick={() => setIsMobileExpanded(!isMobileExpanded)}
            className="w-full bg-white shadow-sm border border-slate-200/80 rounded-2xl p-5 flex items-center justify-between group active:scale-[0.99] transition-all"
          >
            <div className="text-left">
              <span className="font-mono text-[9px] tracking-widest text-[#B51E2E] uppercase font-bold">SEÇÃO</span>
              <h2 className="font-display font-black text-xl text-slate-900 mt-0.5">Nossos Serviços Estratégicos</h2>
            </div>
            <div className="bg-red-50 text-red-600 rounded-full p-2 group-hover:bg-red-100 transition-colors">
              <motion.div animate={{ rotate: isMobileExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </div>
          </button>
        </div>

        {/* Title Context - Desktop view always, Mobile when expanded */}
        <div className="hidden lg:block text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-red-100/80 px-3 py-1 rounded-full text-red-600">
            <TrendingUp className="w-4 h-4" />
            <span className="font-mono text-[10px] tracking-wider uppercase font-semibold">ESTRUTURA MAUÁ - MODELO INTEGRADO</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight">
            Nossos Serviços Estratégicos
          </h2>
          <p className="text-slate-600">
            Conectamos produção de conteúdo cinematográfico com inteligência de dados de tráfego, criando uma operation que fatura no automático.
          </p>
        </div>

        {/* Dynamic Service Cards Layout */}
        <div className={`${isMobileExpanded ? 'block' : 'hidden lg:block'} space-y-16`}>
          
          {/* SERVICE 1: Gravação de Conteúdo (Vertical video content theme) */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center mx-auto lg:mx-0">
                  <Video className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900">
                  Serviço 1 — Gravação de Conteúdo
                </h3>
                <p className="text-slate-600 font-sans text-sm sm:text-base">
                  Criamos conteúdos profissionais com alta definição estética, desenhados para que você posicione sua empresa com autoridade e converta visualizações em vendas reais.
                </p>
 
                {/* Subcategory selectors in column */}
                <div className="space-y-3 pt-4 text-center lg:text-left">
                  <span className="text-xs font-mono tracking-widest text-slate-400 block uppercase font-bold text-center lg:text-left">MINI VÍDEOS REAIS E DIRECIONADOS</span>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {Object.entries(videoCategoryData).map(([key, value]) => (
                      <button
                        key={key}
                        onClick={() => setActiveVideoCategory(key as any)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                          activeVideoCategory === key
                            ? 'bg-red-600 text-white shadow-md'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        {value.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Smartphone mock preview right */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[340px] bg-slate-950 rounded-[40px] p-3 border-4 border-slate-800 shadow-2xl h-[520px]">
                  {/* Dynamic absolute inner screen simulating reel with overlay */}
                  <div className="relative h-full w-full rounded-[32px] overflow-hidden bg-slate-900">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeVideoCategory}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0"
                      >
                        <img
                          src={videoCategoryData[activeVideoCategory].image}
                          alt="Video frame mockup"
                          className="w-full h-full object-cover brightness-75"
                        />
                        
                        {/* Interactive UI components */}
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white space-y-2">
                          <span className="bg-red-500/90 text-[9px] font-mono tracking-widest px-2 py-0.5 rounded-md uppercase font-semibold">PREVIEW FORMATO REEL</span>
                          <h4 className="font-display font-bold text-lg">AGC × {videoCategoryData[activeVideoCategory].title}</h4>
                          <p className="text-xs text-slate-300 leading-snug">{videoCategoryData[activeVideoCategory].desc}</p>
                          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/10">
                            <span>{videoCategoryData[activeVideoCategory].stats}</span>
                            <span className="text-emerald-400">ALTA CONVERSÃO</span>
                          </div>
                        </div>

                        {/* Top indicator camera bar */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black w-24 h-5 rounded-full flex items-center justify-center space-x-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-850" />
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-900" />
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* SERVICE 2: Tráfego Pago (Split layout) */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* Left Side: Service 2 Description */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center mx-auto lg:mx-0 mb-6">
                    <BarChart2 className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 mb-4">
                    Serviço 2 — Tráfego Pago
                  </h3>
                  <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed mb-6">
                    Por aqui você sabe exatamente quanto investe para vender. Desenvolvemos estratégias robustas de anúncios no Facebook Ads, Instagram Ads e Google Ads, escalando o seu faturamento de forma previsível e otimizando cada centavo investido.
                  </p>

                  <div className="space-y-4 pt-2 text-left">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
                      <div>
                        <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">GESTÃO E OTIMIZAÇÃO CONSTANTE</h4>
                        <p className="text-xs sm:text-sm text-slate-600 font-sans">Acompanhamento diário para reduzir o custo por lead (CPL) e aumentar as conversões qualificadas.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
                      <div>
                        <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">ROAS E PERFORMANCE MÁXIMA</h4>
                        <p className="text-xs sm:text-sm text-slate-600 font-sans">Foco absoluto no retorno sobre investimento, atraindo leads de alto potencial prontos para fechar negócio.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 text-center lg:text-left">
                  <a href="#contato" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-wider inline-flex items-center space-x-2 transition-transform hover:scale-[1.02]">
                    <span>FALAMOS NO WHATSAPP</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Right Side: Real chats, messages & feedbacks */}
              <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-red-500 tracking-widest uppercase font-bold block mb-4 text-center lg:text-left">LADO SUCESSO DO CLIENTE</span>
                  <p className="text-xl font-display font-bold text-slate-900 mb-6 text-center lg:text-left"> Prints de Clientes & Depoimentos Reais</p>
                  
                  {/* Chat message bubbles stack */}
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100/50 flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-xs text-white font-bold shrink-0">C</div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-800">Construtora - Dir. Comercial</span>
                          <span className="text-[9px] text-slate-400 font-mono">15:42</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">"Amigos, passando para avisar que batemos a meta de vendas do mês faltando uma semana! Os leads de tráfego direto estão fechando muito rápido."</p>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100/50 flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs text-slate-700 font-bold shrink-0">V</div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-800">Vendedor Imobiliário SP</span>
                          <span className="text-[9px] text-slate-400 font-mono">Ontem</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">"Aquele lead do decorado que caiu na terça assinou o contrato da cobertura hoje de manhã. ROAS absurdo nessa campanha!"</p>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100/50 flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-xs text-white font-bold shrink-0">M</div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-800">Moto Racing Bahia</span>
                          <span className="text-[9px] text-slate-400 font-mono">2 dias atrás</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">"Sem brincadeira, o WhatsApp não para de apitar. Tivemos que chamar outro atendente para dar conta de simular financiamento."</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-slate-200 mt-6 text-sm text-slate-500 italic text-center lg:text-left">
                  Mensagens de WhatsApp extraídas diretamente de grupos ativos de acompanhamento operacional.
                </div>
              </div>

            </div>
          </div>

          {/* SERVICE 3 & 4 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* SERVICE 3: Ferramentas e Configurações de Operação */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                  <Cpu className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">Serviço 3 — Ferramentas e Serviços</h3>
                <p className="text-slate-600 text-sm mb-6 font-sans">
                  Estruturamos toda sua operação comercial com tecnologia, garantindo rastreabilidade e produtividade total.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 p-1 rounded-full text-emerald-600 mt-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Chat de Atendimento</h4>
                      <p className="text-xs text-slate-500">Filas dedicadas, respostas rápidas automáticas e painel multiagentes.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 p-1 rounded-full text-emerald-600 mt-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Funil de Venda Sincronizado</h4>
                      <p className="text-xs text-slate-500">Mapeamento visual do CRM para garantir que nenhum contato esfrie de um dia para o outro.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 p-1 rounded-full text-emerald-600 mt-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Treinamento Comercial</h4>
                      <p className="text-xs text-slate-500">Trilha de conversão rápida e contorno tático de preço.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-slate-[100] mt-8 font-mono text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
                Sua máquina de vendas, sem gargalos.
              </div>
            </div>

            {/* SERVICE 4: Gestão de Redes Sociais */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center mb-6">
                  <Calendar className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">Serviço 4 — Gestão de Redes Sociais</h3>
                <p className="text-slate-600 text-sm mb-6 font-sans">
                  Sua única preocupação deve ser atender o cliente de forma impecável. Nós cuidamos de todo o ecossistema digital e do posicionamento da sua marca.
                </p>

                {/* Simulated Grid Calendar Calendar Planner */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-3 overflow-hidden relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 block uppercase font-bold">CRONOGRAMA EDITORIAL SEMANAL</span>
                    <span className="text-[9px] font-mono text-indigo-600 block animate-pulse">loop contínuo • Dom a Sáb</span>
                  </div>
                  
                  {/* Infinite marquee ticker wrapper */}
                  <div className="relative w-full overflow-hidden py-2 select-none">
                    {/* Soft gradients for ambient premium feel */}
                    <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
                    
                    <div className="flex space-x-3 shrink-0 animate-scroll-cronograma whitespace-nowrap hover:[animation-play-state:paused] cursor-grab">
                      {duplicatedCronograma.map((item, index) => (
                        <div
                          key={`c2-${index}`}
                          className="w-[125px] bg-white p-3 rounded-xl border border-slate-200/60 shadow-sm shrink-0 text-center flex flex-col justify-between"
                        >
                          <span className="text-[9px] font-mono font-bold text-slate-400 tracking-wider block uppercase">{item.day}</span>
                          <span className={`text-xs font-extrabold ${item.color} block mt-1 min-h-[16px]`}>{item.action}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 font-sans mt-2">
                    Planejamento completo de Domingo a Sábado rodando em looping horizontal contínuo para atrair leads frios.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-[100] mt-8 font-mono text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
                Sua empresa ativa e crescendo.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
