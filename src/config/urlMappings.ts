// URL mappings between Turkish and English routes
export const urlMappings = {
  // Main pages
  'hakkimizda': 'about',
  'iletisim': 'contact',
  'kurumsal': 'corporate',
  'urunler': 'products',
  'referanslar': 'references',
  
  // Products - Main categories
  'otomasyon': 'automation',
  'servis': 'service',
  
  // Press feeding systems
  'pres-besleme-sistemleri': 'press-feeding-systems',
  'kompakt-pres-besleme-sistemleri': 'compact-press-feeding-systems',
  'rulo-sac-acma-dogrultma-surme-grubu': 'decoiler-straightener-feeder-system',
  'mini-servo-surucu': 'mini-servo-feeder',
  'mini-dogrultmali-servo-surucu': 'mini-servo-feeder-with-straightener',
  'dogrultmali-servo-surucu': 'servo-feeder-with-straightener',
  'servo-surucu-sistemi': 'servo-feeder-solutions',
  'zigzag-surucu-sistemi': 'zigzag-feeding-system',
  
  // Decoilers
  'rulo-acilar': 'decoilers',
  'cift-kafali-rulo-acici': 'double-head-decoiler',
  'hidrolik-rulo-acici': 'hydraulic-decoiler',
  'mekanik-rulo-acici': 'mechanical-decoiler',
  
  // Compact series
  'kompakt-h-serisi': 'compact-h-series',
  'kompakt-l-serisi': 'compact-l-series',
  'kompakt-m-serisi': 'compact-m-series',
  
  // Press lines
  'sicak-soguk-ilik-dovme-pres-hatlari': 'hot-warm-cold-forging-press-lines',
  'soguk-sekillendirme-pres-hatlari': 'cold-forming-press-lines',
  'kalin-parcalar-icin-hizli-hassas-pres-hatlari': 'high-tensile-stamping-press-lines',
  
  // Lamination lines
  'laminasyon-pres-hatlari': 'lamination-stamping-lines',
  'yuksek-hizli-hassas-laminasyon-pres-hatlari': 'high-speed-precision-lamination-press-lines',
  'genis-capli-rotor-stator-orta-hizli-laminasyon-pres-hatlari': 'mid-speed-large-format-stamping-press-lines',
  'yuksek-performansli-laminasyon-kaliplari': 'high-performance-lamination-stamping-tools',
  
  // Coil processing
  'rulo-sac-boy-kesme-hatti': 'coil-cut-to-length-line',
  'rulo-sac-dilme-hatti': 'coil-slitting-lines',
  'rulo-sac-perfore-hatti': 'perforated-metal-production-lines',
  
  // Production lines
  'asma-tavan-uretim-hatti': 'suspended-ceiling-production-line',
  'iskele-kalas-uretim-hatti': 'scaffolding-production-line',
  
  // Rotor stator solutions
  'rotor-stator-paketleme-cozumleri': 'rotor-stator-assembly-solutions',
  'rotor-stator-lazer-kesim-makineleri': 'rotor-stator-laser-cutting',
  
  // Other equipment
  'gagalama-presi': 'notching-press'
} as const;

// Helper functions
export function getEnglishUrl(turkishUrl: string): string | undefined {
  return urlMappings[turkishUrl as keyof typeof urlMappings];
}

export function getTurkishUrl(englishUrl: string): string | undefined {
  const entries = Object.entries(urlMappings);
  const found = entries.find(([, english]) => english === englishUrl);
  return found?.[0];
}

export function isTurkishUrl(url: string): boolean {
  return url in urlMappings;
}

export function isEnglishUrl(url: string): boolean {
  return Object.values(urlMappings).includes(url as any);
}

// Get all Turkish URLs
export function getTurkishUrls(): string[] {
  return Object.keys(urlMappings);
}

// Get all English URLs
export function getEnglishUrls(): string[] {
  return Object.values(urlMappings);
}
