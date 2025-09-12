'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGroup {
  id: number;
  title: string;
  image: string;
  href: string;
}

const productGroups: ProductGroup[] = [
  {
    id: 1,
    title: 'Hidrolik Rulo Açıcı',
    image: '/images/product-groups/hidrolik-rulo.jpg',
    href: '/urunler/hidrolik-rulo-acici',
  },
  {
    id: 2,
    title: 'Mekanik Rulo Açıcı',
    image: '/images/product-groups/mechanical-decoiler.jpg',
    href: '/urunler/mekanik-rulo-acici',
  },
  {
    id: 3,
    title: 'Çift Kafalı Rulo Açıcı',
    image: '/images/product-groups/cift-kafali-rulo.jpg',
    href: '/urunler/cift-kafali-rulo-acici',
  },
  {
    id: 4,
    title: 'Servo Sürücü Sistemi',
    image: '/images/product-groups/servo-surucu.jpg',
    href: '/urunler/servo-surucu-sistemi',
  },
  {
    id: 5,
    title: 'Mini - Servo Sürücü',
    image: '/images/product-groups/mini-servo.jpg',
    href: '/urunler/mini-servo-surucu',
  },
  {
    id: 6,
    title: 'Doğrultmalı Servo Sürücü Sistemleri',
    image: '/images/product-groups/dogrultmali-servo.jpg',
    href: '/urunler/dogrultmali-servo-surucu',
  },
  {
    id: 7,
    title: 'Kompakt H – Serisi',
    image: '/images/product-groups/h-series-compact-press-feeding-system.jpg',
    href: '/urunler/kompakt-h-serisi',
  },
  {
    id: 8,
    title: 'Rulo Sac Açma - Doğrultma ve Sürme Grubu',
    image: '/images/product-groups/DECOILER-STRAIGHTENER-SERVO-FEEDER-1.jpg',
    href: '/urunler/rulo-sac-acma-dogrultma-surme-grubu',
  },
  {
    id: 9,
    title: 'Zigzag Sürücü Sistemi',
    image: '/images/product-groups/zigzag-surucu.jpg',
    href: '/urunler/zigzag-surucu-sistemi',
  },
];

export function ProductGroupSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [items, setItems] = useState([...productGroups]);
  
  // Ekran genişliğini kontrol et
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // İlk yüklemede kontrol et
    checkMobile();
    
    // Ekran boyutu değiştiğinde kontrol et
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Otomatik geçiş için useEffect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Sayfa görünmez olduğunda interval'i temizle
        clearInterval(interval);
      } else {
        // Sayfa tekrar görünür olduğunda interval'i başlat
        interval = setInterval(() => {
          nextSlide();
        }, 10000);
      }
    };

    // Visibility change event listener'ı ekle
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // İlk interval'i başlat
    interval = setInterval(() => {
      nextSlide();
    }, 10000);

    // Cleanup
    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [currentIndex]);

  const getMaxIndex = () => {
    return isMobile ? items.length - 1 : items.length - 3;
  };

  const addMoreItems = () => {
    // Yeni itemlar ekle
    setItems(currentItems => [
      ...currentItems,
      ...productGroups.map(group => ({
        ...group,
        id: group.id + currentItems.length
      }))
    ]);
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex => {
      const maxIndex = getMaxIndex();
      // Son 3 item'a yaklaştığımızda yeni itemlar ekle
      if (prevIndex >= maxIndex - 3) {
        addMoreItems();
      }
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => Math.max(0, prevIndex - 1));
  };

  return (
    <div className="relative w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[36px] leading-[48px] font-medium text-[#258535] mb-12">
          Pres Besleme Sistemleri
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex will-change-transform"
              style={{
                transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.333)}%)`,
                transition: 'transform 0.8s ease-in-out',
              }}
            >
              {items.map((group) => (
                <div
                  key={group.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="group relative">
                    <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden rounded-lg border border-gray-200">
                      <a href={group.href} className="block w-full h-full cursor-pointer">
                        <Image
                          src={group.image}
                          alt={group.title}
                          fill
                          className="object-cover will-change-transform transition-transform duration-300 group-hover:scale-105"
                        />
                      </a>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="group/title">
                        <a href={group.href}>
                          <h3 className="text-lg text-[#606060] transition-colors duration-300 group-hover/title:text-[#258535] cursor-pointer">
                            {group.title}
                          </h3>
                        </a>
                      </div>
                      <div className="hidden md:block opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <a href={group.href} className="group/btn relative inline-flex items-center px-4 py-2.5 border border-[#b0b0b0] text-[#666666] rounded-full overflow-hidden transition-colors duration-300 hover:border-[#258535] cursor-pointer">
                          <span className="relative z-10 flex items-center text-[15px] leading-5 font-light transition-colors duration-300 group-hover/btn:text-white">
                            İncele
                            <svg 
                              className="ml-1.5 w-3.5 h-3.5" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </span>
                          <div className="absolute inset-0 w-full transform scale-x-0 origin-left transition-transform duration-500 bg-[#258535] group-hover/btn:scale-x-100" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-end mt-6">
            <div className="inline-flex h-11 rounded-full border border-[#b0b0b0] overflow-hidden">
              <button
                onClick={prevSlide}
                className="w-11 h-11 flex items-center justify-center bg-white text-[#666666] hover:text-[#444444] transition-colors duration-200"
              >
                <ChevronLeft className="w-7 h-7 stroke-[1.2]" />
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 flex items-center justify-center bg-white text-[#666666] hover:text-[#444444] transition-colors duration-200"
              >
                <ChevronRight className="w-7 h-7 stroke-[1.2]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LegacyProductionLinesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Ekran genişliğini kontrol et
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // İlk yüklemede kontrol et
    checkMobile();
    
    // Ekran boyutu değiştiğinde kontrol et
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Otomatik geçiş için useEffect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Sayfa görünmez olduğunda interval'i temizle
        clearInterval(interval);
      } else {
        // Sayfa tekrar görünür olduğunda interval'i başlat
        interval = setInterval(() => {
          nextSlide();
        }, 5000);
      }
    };

    // Visibility change event listener'ı ekle
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // İlk interval'i başlat
    interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Cleanup
    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [currentIndex]);

  const productionLines = [
    {
      id: 1,
      title: 'Rulo Sac Boy Kesme Hattı',
      description: 'Projeye Özel Tasarım, Anahtar Teslim Çözümler...',
      image: '/images/product-groups/rulo-sac-boy-kesme.jpg'
    },
    {
      id: 2,
      title: 'Rulo Sac Dilme Hattı',
      description: 'Projeye Özel Tasarım, Anahtar Teslim Çözümler...',
      image: '/images/product-groups/rulo-sac-dilme.jpg'
    },
    {
      id: 3,
      title: 'Rulo Sac Perfore Hattı',
      description: 'Projeye Özel Tasarım, Anahtar Teslim Çözümler...',
      image: '/images/product-groups/rulo-sac-perfore.jpg'
    },
    {
      id: 4,
      title: 'İskele Kalas Üretim Hattı',
      description: 'Projeye Özel Tasarım, Anahtar Teslim Çözümler...',
      image: '/images/product-groups/iskele-kalas.jpg'
    },
    {
      id: 5,
      title: 'Asma Tavan Üretim Hattı',
      description: 'Projeye Özel Tasarım, Anahtar Teslim Çözümler...',
      image: '/images/product-groups/asma-tavan.jpg'
    },
    {
      id: 6,
      title: 'Sıcak, Soğuk ve Ilık Dövme Pres Hatları',
      description: 'Projeye Özel Tasarım, Anahtar Teslim Çözümler...',
      image: '/images/product-groups/sicak-soguk-ilik-dovme.jpg'
    },
    {
      id: 7,
      title: 'Kalın Parçalar İçin Hızlı ve Hassas Pres Hatları',
      description: 'Projeye Özel Tasarım, Anahtar Teslim Çözümler...',
      image: '/images/product-groups/kalin-parcalar.jpg'
    },
    {
      id: 8,
      title: 'Soğuk Şekillendirme Pres Hatları',
      description: 'Projeye Özel Tasarım, Anahtar Teslim Çözümler...',
      image: '/images/product-groups/soguk-sekillendirme.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % productionLines.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + productionLines.length) % productionLines.length);
  };

  return (
    <div className="relative w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[36px] leading-[48px] font-medium text-[#FFB800] mb-12">
          Üretim Hatları
        </h2>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sol Taraf - Metin ve Butonlar */}
            <div className="flex flex-col justify-center">
              <h3 className="text-[32px] text-[#606060] font-medium mb-4">
                {productionLines[currentIndex].title}
              </h3>
              <p className="text-[#606060] text-lg mb-8">
                {productionLines[currentIndex].description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center px-6 py-3 rounded-full border border-[#b0b0b0] text-[#666666] hover:border-[#258535] hover:text-[#258535] transition-colors duration-300">
                  <span className="text-[15px]">Detaylı İncele</span>
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#" className="inline-flex items-center px-6 py-3 rounded-full bg-[#FFB800] text-white hover:bg-[#e5a600] transition-colors duration-300">
                  <span className="text-[15px]">Kataloğu Görüntüle</span>
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Sağ Taraf - Görsel */}
            <div className="relative aspect-[16/9] rounded-[40px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 z-10" />
              <Image
                src={productionLines[currentIndex].image}
                alt={productionLines[currentIndex].title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Navigasyon Butonları */}
          <div className="absolute bottom-0 right-0 flex gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-[#b0b0b0] flex items-center justify-center text-[#666666] hover:text-[#444444] transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 stroke-[1.2]" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-[#b0b0b0] flex items-center justify-center text-[#666666] hover:text-[#444444] transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 stroke-[1.2]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 