'use client';

import { useRef } from 'react';
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    swipe: false,
    touchMove: false
  };

  const nextSlide = () => {
    slider1Ref.current?.slickNext();
    slider2Ref.current?.slickNext();
  };

  const prevSlide = () => {
    slider1Ref.current?.slickPrev();
    slider2Ref.current?.slickPrev();
  };

  return (
    <section className="relative bg-[#f6f6f6] pt-20 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 items-start">
            {/* Content Side */}
            <div className="relative order-1 lg:order-1">
              <h2 className="text-[32px] leading-[40px] font-medium text-[#258535] mb-6">
                Üretim Hatları
              </h2>
              
              <div className="content-wrapper">
                <Slider
                  {...settings}
                  ref={slider1Ref}
                  asNavFor={slider2Ref.current || undefined}
                >
                  {productionLines.map((product) => (
                    <div key={product.id} className="outline-none">
                      <div className="space-y-4 lg:space-y-8">
                        <div>
                          <a href={product.href} className="inline-block group/title">
                            <h2 className="text-[26px] leading-[31px] font-medium text-[#1A1A1A] mb-4 lg:mb-6 group-hover/title:text-[#FFB800] transition-colors duration-300">
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
                  {...settings}
                  ref={slider2Ref}
                  asNavFor={slider1Ref.current || undefined}
                >
                  {productionLines.map((product) => (
                    <div key={product.id} className="relative outline-none">
                      <div className="relative aspect-[16/9]">
                        <a href={product.href} className="block w-full h-full group/image">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                            priority
                          />
                        </a>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex justify-center md:justify-end mt-8">
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
    </section>
  );
}