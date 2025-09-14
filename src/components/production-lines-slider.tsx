'use client';

import { useMemo, useRef, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ProductionLine {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

const productionLines: ProductionLine[] = [
  {
    id: 1,
    title: 'Rulo Sac Boy Kesme Hattı',
    description: 'Projeye Özel Tasarım, Anahtar Teslim Çözümler...',
    image: '/images/product-groups/rulo-sac-boy-kesme.jpg',
    href: '/urunler/rulo-sac-boy-kesme-hatti'
  },
  {
    id: 2,
    title: 'Rulo Sac Dilme Hattı',
    description: 'Projeye Özel Tasarım, Anahtar Teslim Çözümler...',
    image: '/images/product-groups/rulo-sac-dilme.jpg',
    href: '/urunler/rulo-sac-dilme-hatti'
  },
  {
    id: 3,
    title: 'Rulo Sac Perfore Hattı',
    description: 'Projeye Özel Tasarım, Anahtar Teslim Çözümler...',
    image: '/images/product-groups/rulo-sac-perfore.jpg',
    href: '/urunler/rulo-sac-perfore-hatti'
  },
  {
    id: 4,
    title: 'İskele Kalas Üretim Hattı',
    description: 'Projeye Özel Tasarım, Anahtar Teslim Çözümler...',
    image: '/images/product-groups/iskele-kalas.jpg',
    href: '/urunler/iskele-kalas-uretim-hatti'
  },
  {
    id: 5,
    title: 'Asma Tavan Üretim Hattı',
    description: 'Projeye Özel Tasarım, Anahtar Teslim Çözümler...',
    image: '/images/product-groups/asma-tavan.jpg',
    href: '/urunler/asma-tavan-uretim-hatti'
  }
];

export function ProductionLinesSlider() {
  const slider1Ref = useRef<Slider>(null);
  const slider2Ref = useRef<Slider>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Metin tarafı: linear slayt (infinite: false)
  const settingsText = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    fade: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    swipe: false,
    touchMove: false,
    beforeChange: (_old: number, next: number) => setCurrentIndex(next)
  } as const;

  // Görsel tarafı: linear slayt (infinite: false) + fade
  const settingsImage = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    swipe: false,
    touchMove: false
  } as const;

  const { dashArray, dashOffset } = useMemo(() => {
    const total = productionLines.length;
    const progress = ((currentIndex % total) + 1) / total;
    const radius = 46; // 100x100 viewBox içinde
    const circumference = 2 * Math.PI * radius;
    return { dashArray: circumference, dashOffset: circumference * (1 - progress) };
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex < productionLines.length - 1) {
      slider1Ref.current?.slickNext();
      slider2Ref.current?.slickNext();
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      slider1Ref.current?.slickPrev();
      slider2Ref.current?.slickPrev();
    }
  };

  // Navigasyon butonlarının aktif/pasif durumları
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === productionLines.length - 1;

  return (
    <section id="pls-slider" className="relative bg-[#f6f6f6] pt-20 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 items-center">
            {/* Content Side */}
            <div className="relative order-1 lg:order-1">
              <h2 className="text-[40px] leading-[50px] font-medium text-[#258535] mb-6">
                Üretim Hatları
              </h2>
              
              <div className="content-wrapper">
                <Slider
                  {...settingsText}
                  ref={slider1Ref}
                  asNavFor={slider2Ref.current || undefined}
                >
                  {productionLines.map((product) => (
                    <div key={product.id} className="outline-none">
                      <div className="space-y-4 lg:space-y-8">
                        <div>
                          <a href={product.href} className="inline-block group/title">
                            <h2 className="text-[30px] leading-[38px] font-medium text-[rgb(92,92,92)] mb-4 lg:mb-6 group-hover/title:text-black transition-colors duration-300">
                              {product.title}
                            </h2>
                          </a>
                          
                          <p className="text-lg text-[#666666] leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        <div>
                          <a href={product.href} className="group relative inline-flex items-center px-5 py-3 border border-[#b0b0b0] text-[#666666] rounded-full overflow-hidden transition-colors duration-300 hover:border-[#258535] hover:text-white">
                            <span className="relative z-10 flex items-center text-base leading-6 font-light">
                              Detaylı İncele
                              <svg 
                                className="ml-2 w-4 h-4" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={1.5} 
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </span>
                            <div className="absolute inset-0 w-full transform scale-x-0 origin-left transition-transform duration-500 bg-[#258535] group-hover:scale-x-100" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            {/* Images Side */}
            <div className="relative order-2 lg:order-2">
              <div className="image-wrapper">
                <Slider
                  {...settingsImage}
                  ref={slider2Ref}
                  asNavFor={slider1Ref.current || undefined}
                >
                  {productionLines.map((product) => (
                    <div key={product.id} className="relative outline-none">
                      <div className="relative aspect-[16/9] flex items-center justify-center">
                        <div className="relative w-[min(98vw,880px)] lg:w-[min(98%,880px)] aspect-square">
                          {/* Dış halka (gri temel) ve ilerleme halkası (yeşil) */}
                          <svg className="absolute inset-0" viewBox="0 0 100 100" aria-hidden="true">
                            <circle cx="50" cy="50" r="46" fill="none" stroke="#ececec" strokeWidth="0.5" />
                            <circle
                              cx="50"
                              cy="50"
                              r="46"
                              fill="none"
                              stroke="#258535"
                              strokeWidth="0.8"
                              strokeLinecap="round"
                              strokeDasharray={dashArray}
                              strokeDashoffset={dashOffset}
                              style={{ transition: 'stroke-dashoffset 0.8s ease', transform: 'rotate(-20deg)', transformOrigin: '50% 50%' }}
                            />
                          </svg>

                          {/* Dairesel görsel - ölçek tabanlı geçiş animasyonu (sadece görsel alanı) */}
                          <a href={product.href} className="absolute inset-[6%] rounded-full overflow-hidden block group/image image-slide shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white">
                            <Image
                              src={product.image}
                              alt={product.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                              priority={product.id === 1}
                              sizes="(max-width: 1024px) 80vw, 600px"
                            />
                          </a>

                          {/* İç navigasyon butonları */}
                          <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
                            <div className="inline-flex h-10 lg:h-12 rounded-full border border-[#dcdcdc] bg-white/90 backdrop-blur px-1.5 lg:px-2 overflow-hidden shadow-sm">
                              <button
                                onClick={prevSlide}
                                disabled={isFirstSlide}
                                className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center relative group ${
                                  isFirstSlide 
                                    ? 'text-[#cccccc] cursor-not-allowed' 
                                    : 'text-[#666666]'
                                }`}
                                aria-label="Previous"
                              >
                                <div className={`absolute inset-2 rounded-full transition-colors duration-200 ${
                                  isFirstSlide ? 'bg-transparent' : 'bg-transparent group-hover:bg-[#258535]'
                                }`}></div>
                                <ChevronLeft className={`w-4 h-4 lg:w-5 lg:h-5 stroke-[1.2] relative z-10 transition-colors duration-200 ${
                                  isFirstSlide ? 'text-[#cccccc]' : 'text-[#666666] group-hover:text-white'
                                }`} />
                              </button>
                              <button
                                onClick={nextSlide}
                                disabled={isLastSlide}
                                className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center relative group ${
                                  isLastSlide 
                                    ? 'text-[#cccccc] cursor-not-allowed' 
                                    : 'text-[#666666]'
                                }`}
                                aria-label="Next"
                              >
                                <div className={`absolute inset-2 rounded-full transition-colors duration-200 ${
                                  isLastSlide ? 'bg-transparent' : 'bg-transparent group-hover:bg-[#258535]'
                                }`}></div>
                                <ChevronRight className={`w-4 h-4 lg:w-5 lg:h-5 stroke-[1.2] relative z-10 transition-colors duration-200 ${
                                  isLastSlide ? 'text-[#cccccc]' : 'text-[#666666] group-hover:text-white'
                                }`} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* Görsel slayt alanı için ölçek animasyonu (sol metin alanı etkilenmez) */}
      <style jsx global>{`
        #pls-slider .slick-slide .image-slide {
          transform: scale(0);
          opacity: 0;
          transition: transform 700ms ease-in-out, opacity 700ms ease-in-out;
          will-change: transform, opacity;
          transform-origin: 50% 50%;
        }
        #pls-slider .slick-current .image-slide {
          transform: scale(1);
          opacity: 1;
        }
      `}</style>
    </section>
  );
}