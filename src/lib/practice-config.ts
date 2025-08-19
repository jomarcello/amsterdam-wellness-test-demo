export interface PracticeTemplate {
  pageTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  backgroundGradient: string;
  cardStyling: string;
  buttonStyling: string;
  ctaText: string;
  services: string[];
  testimonial: {
    text: string;
    author: string;
  };
}

export interface PracticeConfig {
  id: string;
  name: string;
  doctor: string;
  location: string;
  agentId: string;
  type: 'wellness' | 'cosmetic' | 'spine' | 'dermatology';
  template: PracticeTemplate;
}

export const practiceConfig: PracticeConfig = {
  id: 'amsterdam-wellness-center',
  name: 'Amsterdam Wellness Center',
  doctor: 'Dr. Emma van der Berg',
  location: 'Amsterdam, Nederland',
  agentId: 'agent_amsterdam_wellness',
  type: 'wellness',
  template: {
    pageTitle: 'Amsterdam Wellness Center - Holistische Gezondheid',
    heroTitle: 'Welkom bij Amsterdam Wellness Center',
    heroSubtitle: 'Ontdek uw optimale welzijn met Dr. Emma van der Berg en ons toegewijde team van wellness specialisten.',
    backgroundGradient: 'bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100',
    cardStyling: 'bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300',
    buttonStyling: 'bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300',
    ctaText: 'Maak een Afspraak',
    services: [
      'Preventieve Gezondheidsscreening',
      'Voedingsadvies & Dieetbegeleiding',
      'Stressmanagement & Mindfulness',
      'Fysiotherapie & Bewegingstherapie',
      'Natuurlijke Supplementen',
      'Levensstijl Coaching'
    ],
    testimonial: {
      text: 'Het Amsterdam Wellness Center heeft mijn leven veranderd. Dr. van der Berg en haar team hebben me geholpen om weer energie te krijgen en me geweldig te voelen.',
      author: 'Sarah M., Amsterdam'
    }
  }
};

export function getCurrentPractice(): PracticeConfig {
  return practiceConfig;
}