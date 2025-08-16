export const urlMappings = {
  // Ana kategoriler
  'pres-besleme-sistemleri': 'press-feeding-systems',
  'laminasyon-pres-hatlari': 'lamination-stamping-lines',
  'gagalama-presi': 'notching-press',
  'rotor-stator-lazer-kesim-makineleri': 'rotor-stator-laser-cutting',
  'rotor-stator-paketleme-cozumleri': 'rotor-stator-assembly-solutions',
  
  // Laminasyon Alt Kategorileri
  'yuksek-hizli-hassas-laminasyon-pres-hatlari': 'high-speed-precision-lamination-press-lines',
  'genis-capli-rotor-stator-orta-hizli-laminasyon-pres-hatlari': 'mid-speed-large-format-stamping-press-lines',
  'yuksek-performansli-laminasyon-kaliplari': 'high-performance-lamination-stamping-tools',
  
  // Pres Besleme Alt Kategorileri
  'rulo-acilar': 'decoilers',
  'mekanik-rulo-acici': 'mechanical-decoiler',
  'hidrolik-rulo-acici': 'hydraulic-decoiler',
  'cift-kafali-rulo-acici': 'double-head-decoiler',
  'dogrultmali-servo-surucu-sistemleri': 'servo-feeder-with-straightener',
  'surucu-cozumleri': 'press-servo-feeders',
  'servo-surucu-sistemi': 'servo-feeder-solutions',
  'mini-servo-surucu': 'mini-servo-feeder',
  'kompakt-pres-besleme-sistemleri': 'compact-press-feeding-systems',
  'rulo-sac-acma-dogrultma-surme-grubu': 'decoiler-straightener-feeder-system',
  'zigzag-surucu-sistemi': 'zigzag-feeding-system',
  
  // Üretim Hatları
  'rulo-sac-boy-kesme-hatti': 'coil-cut-to-length-line',
  'rulo-sac-dilme-hatti': 'coil-slitting-lines',
  'rulo-sac-perfore-hatti': 'perforated-metal-production-lines',
  'iskele-kalas-uretim-hatti': 'scaffolding-production-line',
  'asma-tavan-uretim-hatti': 'suspended-ceiling-production-line',
  'sicak-soguk-ilik-dovme-pres-hatlari': 'hot-warm-cold-forging-press-lines',
  'kalin-parcalar-icin-hizli-hassas-pres-hatlari': 'high-tensile-stamping-press-lines',
  'soguk-sekillendirme-pres-hatlari': 'cold-forming-press-lines',
  'otomasyon': 'automation',
  'servis': 'service'
} as const;

export type UrlKey = keyof typeof urlMappings;
export type UrlValue = typeof urlMappings[UrlKey];

// TR -> EN çevirisi
export function getEnglishUrl(turkishUrl: string): string {
  return urlMappings[turkishUrl as UrlKey] || turkishUrl;
}

// EN -> TR çevirisi
export function getTurkishUrl(englishUrl: string): string {
  const entries = Object.entries(urlMappings);
  const found = entries.find(([, value]) => value === englishUrl);
  return found ? found[0] : englishUrl;
} 