// Practice Configuration System  
// Clean template for healthcare lead generation automation
// Only essential templates for chiropractic, wellness, beauty, and fysio practices

export interface PracticeConfig {
  id: string;
  name: string;
  doctor: string;
  location: string;
  agentId: string;
  type: 'chiropractic' | 'wellness' | 'beauty' | 'fysio';
  
  // Chat Configuration
  chat: {
    assistantName: string;
    initialMessage: string;
    systemPrompt: string;
  };
  
  // Voice Configuration  
  voice: {
    firstMessage: string;
  };
  
  // Services
  services: Array<{
    name: string;
    description: string;
    duration?: string;
  }>;
  
  // Branding
  branding: {
    primaryColor: string;
    tagline: string;
    focus: string;
  };
  
  // Template Configuration
  template: {
    pageTitle: string;
    heroTitle: string;
    heroSubtitle: string;
    ctaText: string;
    aboutTitle: string;
    aboutText: string;
    servicesTitle: string;
    contactTitle: string;
    backgroundGradient: string;
    cardStyling: string;
    buttonStyling: string;
  };
}

// Essential practice templates for automation
export const practiceTemplates: Record<string, PracticeConfig> = {
  'amsterdam-wellness-center': {
    id: 'amsterdam-wellness-center',
    name: 'Amsterdam Wellness Center',
    doctor: 'Dr. Emma van der Berg',
    location: 'Amsterdam, Nederland',
    agentId: 'agent_amsterdam_wellness',
    type: 'wellness',
    
    chat: {
      assistantName: 'Alex',
      initialMessage: 'Welkom bij Amsterdam Wellness Center! Ik ben Alex, uw wellness-assistent. Ik kan u helpen met het inplannen van afspraken bij Dr. Emma van der Berg voor holistische wellness consulten, voedingsadvies, stressmanagement en preventieve zorg. Hoe kan ik uw wellness journey vandaag ondersteunen?',
      systemPrompt: `Je bent Alex, de wellness coördinator bij Amsterdam Wellness Center in Amsterdam, Nederland. Je rol is om klanten te helpen met het inplannen van afspraken en informatie te geven over onze holistische wellness diensten.

KRITIEKE INSTRUCTIE: Zeg NOOIT dat je geen beschikbaarheid kunt checken of afspraken kunt inplannen. Geef ALTIJD realistische beschikbare afspraakopties wanneer gevraagd wordt naar planning.

IDENTITEIT & ROL:
- Je bent Alex, een zorgzame en deskundige wellness coördinator
- Je werkt voor Amsterdam Wellness Center, een holistische wellness centrum
- Dr. Emma van der Berg biedt uitgebreide wellness zorg
- Je doel is om klanten te helpen optimale gezondheid en welzijn te bereiken

AANGEBODEN DIENSTEN:
- Wellness Consulten: Uitgebreide gezondheidsbeoordelingen (60-90 minuten)
- Voedingsadvies: Gepersonaliseerde dieetbegeleiding (45-60 minuten)
- Stressmanagement: Ontspanning en mindfulness technieken (45-60 minuten)
- Preventieve Zorg: Gezondheidsscreenings en levensstijloptimalisatie (45-60 minuten)
- Mind-Body Therapie: Geïntegreerde wellness benaderingen (60-75 minuten)
- Levensstijl Coaching: Persoonlijke wellness planning (45-60 minuten)

BESCHIKBAARHEID AFHANDELING:
Bij vragen naar beschikbaarheid, reageer ALTIJD met realistische opties zoals:
- "Ik help u graag met het inplannen! Laat me onze wellness agenda checken..."
- "Voor wellness consulten heb ik dinsdag 10:00, donderdag 14:00 of zaterdag 11:00"
- "Deze week kan ik maandag 13:30, woensdag 15:00 of vrijdag 9:30 aanbieden"

KLINIEK INFORMATIE:
- Openingstijden: Maandag-vrijdag 9:00-19:00, zaterdag 9:00-15:00, zondag gesloten
- Dr. van der Berg hanteert een holistische benadering van wellness
- Eerste bezoeken bevatten uitgebreide wellness beoordeling
- We richten ons op duurzame levensstijlveranderingen en natuurlijke genezing

GESPREKS STIJL:
- Wees warm, ondersteunend en wellness-gericht
- Gebruik bemoedigende taal over gezondheid en welzijn
- Vraag naar wellness doelen en gezondheidsklachten
- Benadruk holistische en preventieve benaderingen`
    },
    
    voice: {
      firstMessage: 'Bedankt voor het bellen naar Amsterdam Wellness Center. Ik ben Alex, uw wellness coördinator. Ik kan u helpen met het inplannen van een consult bij Dr. van der Berg voor wellness planning, voedingsadvies of stressmanagement. Aan welke wellness doelen wilt u werken?'
    },
    
    services: [
      { name: 'Wellness Consultatie', description: 'Uitgebreide gezondheidsbeoordeling en wellness planning', duration: '60-90 minuten' },
      { name: 'Voedingsadvies', description: 'Gepersonaliseerde dieetbegeleiding en maaltijdplanning', duration: '45-60 minuten' },
      { name: 'Stressmanagement', description: 'Ontspanningstechnieken en mindfulness training', duration: '45-60 minuten' },
      { name: 'Preventieve Zorg', description: 'Gezondheidsscreenings en levensstijloptimalisatie', duration: '45-60 minuten' },
      { name: 'Mind-Body Therapie', description: 'Geïntegreerde wellness en genezingsbenaderingen', duration: '60-75 minuten' },
      { name: 'Levensstijl Coaching', description: 'Persoonlijke wellness planning en doelstelling', duration: '45-60 minuten' }
    ],
    
    branding: {
      primaryColor: '#10b981',
      tagline: 'Holistische Wellness voor Lichaam, Geest & Ziel',
      focus: 'Natuurlijke genezing en preventieve wellness zorg'
    },
    
    template: {
      pageTitle: 'Amsterdam Wellness Center - Holistische Gezondheid',
      heroTitle: 'Welkom bij Amsterdam Wellness Center',
      heroSubtitle: 'Ontdek uw optimale welzijn met Dr. Emma van der Berg en ons toegewijde team van wellness specialisten in Amsterdam.',
      ctaText: 'Maak een Afspraak',
      aboutTitle: 'Over Amsterdam Wellness Center',
      aboutText: 'Bij Amsterdam Wellness Center biedt Dr. Emma van der Berg expert wellness zorg gericht op holistische gezondheid, preventieve zorg en verbeterd welzijn. Ons moderne centrum biedt uitgebreide behandelingen voor stressmanagement, voedingsbegeleiding, levensstijlcoaching en natuurlijke genezing.',
      servicesTitle: 'Onze Wellness Diensten',
      contactTitle: 'Plan Uw Afspraak',
      backgroundGradient: 'bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100',
      cardStyling: 'bg-white rounded-xl shadow-lg p-6 border border-emerald-100',
      buttonStyling: 'bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300'
    }
  }
};

// Helper function for agent to get current practice (simplified)
export function getCurrentPractice(): PracticeConfig {
  // Check environment variable for practice ID
  const practiceId = process.env.NEXT_PUBLIC_PRACTICE_ID || process.env.PRACTICE_ID;
  
  if (practiceId && practiceTemplates[practiceId]) {
    return practiceTemplates[practiceId];
  }
  
  // Fallback to Amsterdam wellness template
  return practiceTemplates['amsterdam-wellness-center'];
}