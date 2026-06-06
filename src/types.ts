export interface Segment {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  fallbackImageUrl: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessPhase {
  phase: number;
  title: string;
  description: string;
  details: string[];
}

export interface Office {
  city: string;
  address: string;
  building: string;
  postalCode: string;
  phone: string;
  fax?: string;
  mapsUrl: string;
  longitude: number;
  latitude: number;
}

export interface ProofSocial {
  id: string;
  type: 'print' | 'testimonial' | 'message';
  title: string;
  source: string;
  value?: string;
  subtitle?: string;
  quote?: string;
  avatarUrl?: string;
}
