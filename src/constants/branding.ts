export const BRAND_NAME = 'AGC';
export const WHATSAPP_NUMBER = '558193034159';
export const INSTAGRAM_URL = 'https://www.instagram.com/agcprime360?igsh=MTdkZzA5bzI4eHZqeA==';

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// Banner inicial: troque estas URLs pelas suas duas imagens principais.
export const HERO_LEFT_IMAGE_URL =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800';

export const HERO_RIGHT_IMAGE_URL =
  'https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?auto=format&fit=crop&q=80&w=800';

export const HERO_BACKGROUND_IMAGE_URL =
  'https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?auto=format&fit=crop&q=80&w=1600';

// Logo do menu: coloque a imagem em public/brand/logo.png e mude para './brand/logo.png'.
// Enquanto estiver vazio, o menu mostra o texto AGC.
export const BRAND_LOGO_URL = '';
