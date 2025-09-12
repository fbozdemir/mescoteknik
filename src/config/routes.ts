export const routes = {
  tr: {
    // Ana sayfalar
    home: '',
    corporate: 'hakkimizda',
    products: 'urunler',
    references: 'referanslar',
    contact: 'iletisim',
    
    // Kurumsal alt sayfalar
    about: 'hakkimizda',
    
    // Ürün kategorileri ve alt kategoriler
    // Laminasyon Grubu
    'lamination-stamping-lines': 'laminasyon-pres-hatlari',
    'high-speed-precision-lamination-press-lines': 'yuksek-hizli-hassas-laminasyon-pres-hatlari',
    'mid-speed-large-format-stamping-press-lines': 'genis-capli-rotor-stator-orta-hizli-laminasyon-pres-hatlari',
    'high-performance-lamination-stamping-tools': 'yuksek-performansli-laminasyon-kaliplari',
    
    // Ana ürünler
    'notching-press': 'gagalama-presi',
    'rotor-stator-assembly-solutions': 'rotor-stator-paketleme-cozumleri',
    'rotor-stator-laser-cutting': 'rotor-stator-lazer-kesim-makineleri',
    
    // Pres Besleme Sistemleri
    'press-feeding-systems': 'pres-besleme-sistemleri',
    
    // Pres Besleme Alt Kategorileri - Nested paths
    'pres-besleme-sistemleri': 'pres-besleme-sistemleri',
    'rulo-acilar': 'rulo-acilar',
    'dogrultmali-servo-surucu-sistemleri': 'dogrultmali-servo-surucu-sistemleri', 
    'surucu-cozumleri': 'surucu-cozumleri',
    
    // Decoiler kategorisi
    'decoilers': 'rulo-acilar',
    'mechanical-decoiler': 'mekanik-rulo-acici',
    'hydraulic-decoiler': 'hidrolik-rulo-acici',
    'double-head-decoiler': 'cift-kafali-rulo-acici',
    'servo-feeder-with-straightener': 'dogrultmali-servo-surucu',
    'mini-servo-feeder-with-straightener': 'mini-dogrultmali-servo-surucu',
    'servo-feeder-solutions': 'servo-surucu-sistemi',
    'mini-servo-feeder': 'mini-servo-surucu',
    'compact-press-feeding-systems': 'kompakt-pres-besleme-sistemleri',
    'compact-l-series': 'kompakt-l-serisi',
    'compact-m-series': 'kompakt-m-serisi',
    'compact-h-series': 'kompakt-h-serisi',
    'decoiler-straightener-feeder-system': 'rulo-sac-acma-dogrultma-surme-grubu',
    'zigzag-feeding-system': 'zigzag-surucu-sistemi',
    
    // Üretim Hatları
    'coil-cut-to-length-line': 'rulo-sac-boy-kesme-hatti',
    'coil-slitting-lines': 'rulo-sac-dilme-hatti',
    'perforated-metal-production-lines': 'rulo-sac-perfore-hatti',
    'scaffolding-production-line': 'iskele-kalas-uretim-hatti',
    'suspended-ceiling-production-line': 'asma-tavan-uretim-hatti',
    'hot-warm-cold-forging-press-lines': 'sicak-soguk-ilik-dovme-pres-hatlari',
    'high-tensile-stamping-press-lines': 'kalin-parcalar-icin-hizli-hassas-pres-hatlari',
    'cold-forming-press-lines': 'soguk-sekillendirme-pres-hatlari',
    'automation': 'otomasyon',
    'service': 'servis'
  },
  en: {
    // Ana sayfalar
    home: '',
    corporate: 'about',
    products: 'products',
    references: 'references',
    contact: 'contact',
    
    // Kurumsal alt sayfalar
    about: 'about',
    
    // Ürün kategorileri ve alt kategoriler
    // Laminasyon Grubu
    'lamination-stamping-lines': 'lamination-stamping-lines',
    'high-speed-precision-lamination-press-lines': 'high-speed-precision-lamination-press-lines',
    'mid-speed-large-format-stamping-press-lines': 'mid-speed-large-format-stamping-press-lines',
    'high-performance-lamination-stamping-tools': 'high-performance-lamination-stamping-tools',
    
    // Ana ürünler
    'notching-press': 'notching-press',
    'rotor-stator-assembly-solutions': 'rotor-stator-assembly-solutions',
    'rotor-stator-laser-cutting': 'rotor-stator-laser-cutting',
    
    // Pres Besleme Sistemleri
    'press-feeding-systems': 'press-feeding-systems',
    
    // Pres Besleme Alt Kategorileri - Nested paths (EN canonical forms)
    'pres-besleme-sistemleri': 'press-feeding-systems',
    'rulo-acilar': 'decoilers', 
    'dogrultmali-servo-surucu-sistemleri': 'servo-feeder-with-straightener',
    'surucu-cozumleri': 'press-servo-feeders',
    
    // Decoiler kategorisi
    'decoilers': 'decoilers',
    'mechanical-decoiler': 'mechanical-decoiler',
    'hydraulic-decoiler': 'hydraulic-decoiler',
    'double-head-decoiler': 'double-head-decoiler',
    'servo-feeder-with-straightener': 'servo-feeder-with-straightener',
    'mini-servo-feeder-with-straightener': 'mini-servo-feeder-with-straightener',
    'servo-feeder-solutions': 'servo-feeder-solutions',
    'mini-servo-feeder': 'mini-servo-feeder',
    'compact-press-feeding-systems': 'compact-press-feeding-systems',
    'compact-l-series': 'compact-l-series',
    'compact-m-series': 'compact-m-series',
    'compact-h-series': 'compact-h-series',
    'decoiler-straightener-feeder-system': 'decoiler-straightener-feeder-system',
    'zigzag-feeding-system': 'zigzag-feeding-system',
    
    // Üretim Hatları
    'coil-cut-to-length-line': 'coil-cut-to-length-line',
    'coil-slitting-lines': 'coil-slitting-lines',
    'perforated-metal-production-lines': 'perforated-metal-production-lines',
    'scaffolding-production-line': 'scaffolding-production-line',
    'suspended-ceiling-production-line': 'suspended-ceiling-production-line',
    'hot-warm-cold-forging-press-lines': 'hot-warm-cold-forging-press-lines',
    'high-tensile-stamping-press-lines': 'high-tensile-stamping-press-lines',
    'cold-forming-press-lines': 'cold-forming-press-lines',
    'automation': 'automation',
    'service': 'service'
  }
} as const;

export type RouteKey = keyof typeof routes.en;

// Temel sayfa çevirisi için (eski API compatibility)
export function getLocalizedPath(locale: string, key: RouteKey): string {
  return routes[locale as keyof typeof routes][key];
}

// Herhangi bir route segment'i çevirmek için
export function translateRouteKey(sourceLocale: string, targetLocale: string, segment: string): string {
  const sourceRoutes = routes[sourceLocale as keyof typeof routes];
  const targetRoutes = routes[targetLocale as keyof typeof routes];
  
  if (!sourceRoutes || !targetRoutes) return segment;
  
  // Source locale'de bu segment'in hangi key'e karşılık geldiğini bul
  let canonicalKey: string | undefined;
  
  // Önce VALUE olarak ara (çünkü segment genelde bir VALUE'dur)
  const sourceEntries = Object.entries(sourceRoutes);
  const found = sourceEntries.find(([, value]) => value === segment);
  
  if (found) {
    canonicalKey = found[0];
  } else {
    // Eğer bulunamazsa, belki KEY'dir
    if (sourceRoutes[segment as RouteKey]) {
      canonicalKey = segment;
    }
  }
  
  // Canonical key bulunamazsa segment'i olduğu gibi döndür
  if (!canonicalKey) return segment;
  
  // Target locale'deki karşılığını döndür
  return targetRoutes[canonicalKey as RouteKey] || segment;
}

// URL path'ini tamamen çevir
export function translateUrlPath(sourceLocale: string, targetLocale: string, path: string): string {
  if (!path || path === '/') return '';
  
  // Path'i segment'lere ayır
  const segments = path.split('/').filter(segment => segment && segment !== sourceLocale && segment !== targetLocale);
  
  // Her segment'i çevir
  const translatedSegments = segments.map(segment => 
    translateRouteKey(sourceLocale, targetLocale, segment)
  );
  
  return translatedSegments.length > 0 ? translatedSegments.join('/') : '';
} 