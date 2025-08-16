interface MenuItem {
  title: string;
  href: string;
  subItems?: MenuItem[];
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface MenuItems {
  [key: string]: {
    products: MenuSection;
  };
}

export const menuItems: MenuItems = {
  tr: {
    products: {
      title: 'Ürünler',
      items: [
        { 
          title: 'Laminasyon Pres Hatları', 
          href: '/urunler/laminasyon-pres-hatlari',
          subItems: [
            { title: 'Yüksek Hızlı Hassas Laminasyon Pres Hatları', href: '/urunler/yuksek-hizli-hassas-laminasyon-pres-hatlari' },
            { title: 'Geniş Çaplı Rotor ve Statorlar için Orta Hızlı Laminasyon Pres Hatları', href: '/urunler/genis-capli-rotor-stator-orta-hizli-laminasyon-pres-hatlari' },
            { title: 'Yüksek Performanslı Laminasyon Kalıpları', href: '/urunler/yuksek-performansli-laminasyon-kaliplari' }
          ]
        },
        { title: 'Gagalama Presi', href: '/urunler/gagalama-presi' },
        { title: 'Rotor ve Stator Paketleme Çözümleri', href: '/urunler/rotor-stator-paketleme-cozumleri' },
        { title: 'Rotor ve Stator Lazer Kesim Makineleri', href: '/urunler/rotor-stator-lazer-kesim-makineleri' },
        { 
          title: 'Pres Besleme Sistemleri', 
          href: '/urunler/pres-besleme-sistemleri',
          subItems: [
            { 
              title: 'Rulo Açıcılar', 
              href: '/urunler/pres-besleme-sistemleri/rulo-acilar',
              subItems: [
                { title: 'Hidrolik Rulo Açıcı', href: '/urunler/hidrolik-rulo-acici' },
                { title: 'Mekanik Rulo Açıcı', href: '/urunler/mekanik-rulo-acici' },
                { title: 'Çift Kafalı Rulo Açıcı', href: '/urunler/cift-kafali-rulo-acici' }
              ]
            },
            { 
              title: 'Doğrultmalı Servo Sürücü Sistemleri', 
              href: '/urunler/pres-besleme-sistemleri/dogrultmali-servo-surucu-sistemleri',
              subItems: [
                { title: 'Mini – Doğrultmalı Servo Sürücü', href: '/urunler/mini-dogrultmali-servo-surucu' },
                { title: 'Doğrultmalı Servo Sürücü', href: '/urunler/dogrultmali-servo-surucu' }
              ]
            },
            { 
              title: 'Sürücü Çözümleri', 
              href: '/urunler/pres-besleme-sistemleri/surucu-cozumleri',
              subItems: [
                { title: 'Servo Sürücü Sistemi', href: '/urunler/servo-surucu-sistemi' },
                { title: 'Mini – Servo Sürücü', href: '/urunler/mini-servo-surucu' }
              ]
            },
            { 
              title: 'Kompakt Pres Besleme Sistemleri', 
              href: '/urunler/kompakt-pres-besleme-sistemleri',
              subItems: [
                { title: 'Kompakt L - Serisi', href: '/urunler/kompakt-l-serisi' },
                { title: 'Kompakt M - Serisi', href: '/urunler/kompakt-m-serisi' },
                { title: 'Kompakt H - Serisi', href: '/urunler/kompakt-h-serisi' }
              ]
            },
            { title: 'Rulo Sac Açma – Doğrultma ve Sürme Grubu', href: '/urunler/rulo-sac-acma-dogrultma-surme-grubu' },
            { title: 'Zigzag Sürücü Sistemi', href: '/urunler/zigzag-surucu-sistemi' }
          ]
        },
        { title: 'Rulo Sac Boy Kesme Hattı', href: '/urunler/rulo-sac-boy-kesme-hatti' },
        { title: 'Rulo Sac Dilme Hattı', href: '/urunler/rulo-sac-dilme-hatti' },
        { title: 'Rulo Sac Perfore Hattı', href: '/urunler/rulo-sac-perfore-hatti' },
        { title: 'İskele Kalas Üretim Hattı', href: '/urunler/iskele-kalas-uretim-hatti' },
        { title: 'Asma Tavan Üretim Hattı', href: '/urunler/asma-tavan-uretim-hatti' },
        { title: 'Sıcak, Soğuk ve Ilık Dövme Pres Hatları', href: '/urunler/sicak-soguk-ilik-dovme-pres-hatlari' },
        { title: 'Kalın Parçalar İçin Hızlı ve Hassas Pres Hatları', href: '/urunler/kalin-parcalar-icin-hizli-hassas-pres-hatlari' },
        { title: 'Soğuk Şekillendirme Pres Hatları', href: '/urunler/soguk-sekillendirme-pres-hatlari' },
        { title: 'Otomasyon', href: '/urunler/otomasyon' },
        { title: 'Servis', href: '/urunler/servis' }
      ]
    }
  },
  en: {
    products: {
      title: 'Products',
      items: [
        { 
          title: 'Lamination Stamping Lines', 
          href: '/products/lamination-stamping-lines',
          subItems: [
            { title: 'High Speed Precision Lamination Press Lines', href: '/products/high-speed-precision-lamination-press-lines' },
            { title: 'Mid Speed Large Format Stamping Press Lines', href: '/products/mid-speed-large-format-stamping-press-lines' },
            { title: 'High Performance Lamination Stamping Tools/Dies', href: '/products/high-performance-lamination-stamping-tools' }
          ]
        },
        { title: 'Notching Press', href: '/products/notching-press' },
        { title: 'Rotor and Stator Assembly Solutions', href: '/products/rotor-stator-assembly-solutions' },
        { title: 'Rotor and Stator Laser Cutting', href: '/products/rotor-stator-laser-cutting' },
        { 
          title: 'Press Feeding Systems', 
          href: '/products/press-feeding-systems',
          subItems: [
            { 
              title: 'Decoilers', 
              href: '/products/press-feeding-systems/decoilers',
              subItems: [
                { title: 'Hydraulic Decoiler', href: '/products/hydraulic-decoiler' },
                { title: 'Mechanical Decoiler', href: '/products/mechanical-decoiler' },
                { title: 'Double Head Decoiler', href: '/products/double-head-decoiler' }
              ]
            },
            { 
              title: 'Servo Feeder with Straightener', 
              href: '/products/servo-feeder-with-straightener',
              subItems: [
                { title: 'Mini – Servo Feeder with Straightener', href: '/products/mini-servo-feeder-with-straightener' },
                { title: 'Servo Feeder with Straightener', href: '/products/servo-feeder-with-straightener' }
              ]
            },
            { 
              title: 'Press Servo Feeders', 
              href: '/products/press-feeding-systems/press-servo-feeders',
              subItems: [
                { title: 'Servo Feeder Solutions', href: '/products/servo-feeder-solutions' },
                { title: 'Mini – Servo Feeder', href: '/products/mini-servo-feeder' }
              ]
            },
            { 
              title: 'Compact Press Feeding Systems', 
              href: '/products/compact-press-feeding-systems',
              subItems: [
                { title: 'L - Series', href: '/products/compact-l-series' },
                { title: 'M - Series', href: '/products/compact-m-series' },
                { title: 'H - Series', href: '/products/compact-h-series' }
              ]
            },
            { title: 'Decoiler – Straightener & Feeder System', href: '/products/decoiler-straightener-feeder-system' },
            { title: 'Zigzag Feeding System', href: '/products/zigzag-feeding-system' }
          ]
        },
        { title: 'Coil Cut To Length Line', href: '/products/coil-cut-to-length-line' },
        { title: 'Coil Slitting Lines', href: '/products/coil-slitting-lines' },
        { title: 'Perforated Metal Production Lines', href: '/products/perforated-metal-production-lines' },
        { title: 'Suspended Ceiling Production Line', href: '/products/suspended-ceiling-production-line' },
        { title: 'Scaffolding Production Line', href: '/products/scaffolding-production-line' },
        { title: 'Hot, Warm and Cold Forging Press Lines', href: '/products/hot-warm-cold-forging-press-lines' },
        { title: 'High Tensile Stamping Press Lines for High Volume Parts', href: '/products/high-tensile-stamping-press-lines' },
        { title: 'Cold Forming Press Lines', href: '/products/cold-forming-press-lines' },
        { title: 'Automation', href: '/products/automation' },
        { title: 'Service', href: '/products/service' }
      ]
    }
  }
} 