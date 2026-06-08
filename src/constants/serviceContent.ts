export type VideoCategoryKey = 'realestate' | 'car' | 'const' | 'motos' | 'school' | 'medica';

// Imagens do bloco "Servico 1 - Gravacao de Conteudo".
// Para trocar, altere o campo image da categoria desejada.
export const SERVICE_VIDEO_CATEGORY_DATA: Record<
  VideoCategoryKey,
  {
    title: string;
    stats: string;
    desc: string;
    image: string;
  }
> = {
  realestate: {
    title: 'Imobiliaria',
    stats: 'Visualizacoes: 24.5k - Leads: 18',
    desc: 'Tour dinamico em apartamento decorado focado nos atributos do imovel.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=400',
  },
  car: {
    title: 'Concessionaria',
    stats: 'Visualizacoes: 41.2k - Leads: 32',
    desc: 'Exposicao de aerodinamica, som do motor e atrativos do financiamento.',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=400',
  },
  const: {
    title: 'Construtora',
    stats: 'Visualizacoes: 19.8k - Leads: 14',
    desc: 'Perspectivas 3D intercaladas com andamento fisico real da fundacao.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400',
  },
  motos: {
    title: 'Loja de Motos',
    stats: 'Visualizacoes: 52.0k - Leads: 45',
    desc: 'Camera em primeira pessoa acelerando o modelo premium com preco em tela.',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=400',
  },
  school: {
    title: 'Autoescola',
    stats: 'Visualizacoes: 33.4k - Leads: 29',
    desc: 'Tutorial rapido eliminando o receio da baliza e promovendo carteira agil.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=400',
  },
  medica: {
    title: 'Medica',
    stats: 'Visualizacoes: 28.7k - Agendamentos: 21',
    desc: 'Rotina profissional, bastidores e autoridade clinica apresentados com linguagem humanizada.',
    image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400',
  },
};
