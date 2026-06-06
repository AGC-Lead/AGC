import { Segment, ProcessPhase, Office, ProofSocial } from '../types';

export const AGC_SEGMENTS: Segment[] = [
  {
    id: 'imobiliaria',
    title: 'Imobiliária',
    description: 'Apresentações cinemáticas de imóveis de luxo e captação qualificada que aceleram a velocidade de vendas.',
    videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054273b16f906799acaf28e2c01922c&profile_id=165&oauth2_token_id=57447761',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'construtora',
    title: 'Construtora',
    description: 'Posicionamento institucional e lançamentos de alto padrão que esgotam o estoque no final de semana.',
    videoUrl: 'https://player.vimeo.com/external/494165688.sd.mp4?s=d0a273b4e4e97666249e0839c4e2095cc1a89bb6&profile_id=165&oauth2_token_id=57447761',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'concessionaria',
    title: 'Concessionária',
    description: 'Atração massiva de leads querendo avaliar veículos e campanhas de ofertas ultra segmentadas.',
    videoUrl: 'https://player.vimeo.com/external/403842186.sd.mp4?s=124040a4cd91891bca7f5c5b4d70a969ea5ef35b&profile_id=165&oauth2_token_id=57447761',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'loja-moto',
    title: 'Loja de Moto',
    description: 'Vídeos imersivos de test-drive e funis focados no financiamento rápido direto pelo direct/WhatsApp.',
    videoUrl: 'https://player.vimeo.com/external/511942045.sd.mp4?s=aefc080db95e69e34ffdcfb5ba284687d6928bad&profile_id=165&oauth2_token_id=57447761',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'autoescola',
    title: 'Autoescola',
    description: 'Conteúdos focados no sonho da habilitação, contornando objeções e gerando novos alunos todos os dias.',
    videoUrl: 'https://player.vimeo.com/external/435674703.sd.mp4?s=6cb7264a9eecdb3163bcafda017c66d2f3b90ec2&profile_id=165&oauth2_token_id=57447761',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&q=80&w=1000'
  }
];

export const AGC_PROCESS: ProcessPhase[] = [
  {
    phase: 1,
    title: 'Mapeamento Comercial',
    description: 'Análise aprofundada de métricas, gargalos e público ideal.',
    details: [
      'Análise de métricas e funil atual',
      'Conversas com o time de vendas',
      'Levantamento de motivos de perda',
      'Identificação dos maiores gargalos'
    ]
  },
  {
    phase: 2,
    title: 'Estratégia & Conteúdo',
    description: 'Planejamento editorial e produção sob demanda do mais alto nível.',
    details: [
      'Novo processo comercial desenhado',
      'Playbook e roteiros de venda premium',
      'Definição de linhas editoriais magnéticas',
      'Direcionamento de gravação especializado'
    ]
  },
  {
    phase: 3,
    title: 'Tráfego & Captação',
    description: 'Campanhas de conversão focadas em lead qualificado imediato.',
    details: [
      'Configuração avançada de campanhas meta e google',
      'Dashboard de inside sales em tempo real',
      'Cadências de follow-up ativas',
      'Estruturação de criativos de alta conversão'
    ]
  },
  {
    phase: 4,
    title: 'Treinamento Comercial',
    description: 'Capacitação do time para fechar contatos de WhatsApp em minutos.',
    details: [
      'Trilha do vendedor + trilha do gestor',
      'Roleplay e treinamento prático de conversão',
      'Sales Enablement dedicado para escala',
      'Scripts validados de quebra de objeções'
    ]
  },
  {
    phase: 5,
    title: 'Escala & Otimização',
    description: 'Estruturação contínua e análise integrada para expandir os limites de faturamento.',
    details: [
      'Acompanhamento ongoing de resultados reais',
      'Análise preditiva de vendas mensais',
      'Expansão de canais de captação',
      'Ajustes de copy baseados em fechamentos'
    ]
  }
];

export const AGC_OFFICES: Office[] = [
  {
    city: 'Recife',
    address: 'Av. Governador Agamenon Magalhães, 4779',
    building: 'Ilha do Leite, 15º andar',
    postalCode: '50070-160 Recife, PE',
    phone: '+55 (81) 3412-2100',
    mapsUrl: 'https://maps.google.com/maps?q=Av.%20Governador%20Agamenon%20Magalh%C3%A3es,%204779,%20Ilha%20do%20Leite,%20Recife&t=&z=15&ie=UTF8&iwloc=&output=embed',
    latitude: -8.0641,
    longitude: -34.8967
  }
];

export const AGC_PROOFS: ProofSocial[] = [
  {
    id: 'p1',
    type: 'print',
    title: 'Lead qualificado no WhatsApp',
    source: 'CRM Integrado',
    value: 'ROAS: 14.2x',
    subtitle: 'Nicho Imobiliário de Luxo',
    quote: 'Liguei em 2 minutos após o lead cair na planilha e fechamos uma visita na cobertura hoje à tarde. Isso é outra liga!'
  },
  {
    id: 'p2',
    type: 'testimonial',
    title: 'Faturamento Mensal Recorde',
    source: 'Construtora Carvalho',
    value: '+R$ 4.2M',
    subtitle: 'Lançamento Residencial',
    quote: 'Em menos de 60 dias integrando os minivídeos estratégicos ao funil de tráfego direto, esgotamos a carteira do primeiro bloco.'
  },
  {
    id: 'p3',
    type: 'message',
    title: 'Feedback de Equipe de Vendas',
    source: 'Concessionária Automotiva',
    value: 'Lead a R$ 4,20',
    subtitle: 'Taxa de conversão subiu 22%',
    quote: 'Os leads chegam sabendo exatamente os detalhes do veículo. Praticamente só fazemos a simulação e recolhemos o contrato.'
  },
  {
    id: 'p4',
    type: 'print',
    title: 'Retorno sobre investimento',
    source: 'Loja de Motociclismo',
    value: 'ROAS: 8.9x',
    subtitle: 'Campanha de Financiamento',
    quote: 'Incrível ver que de R$ 5.000,00 investidos voltaram quase de R$ 45 mil em comissões directas no canal oficial.'
  },
  {
    id: 'p5',
    type: 'testimonial',
    title: 'Aumento expressivo em alunos',
    source: 'Diretoria de Autoescola S.',
    value: '180 matriculados/mês',
    subtitle: 'Performance 360°',
    quote: 'O treinamento do time comercial para WhatsApp feito pela AGC transformou nosso atendimento. Conversão subiu de de 8% para 24%!'
  }
];
