'use client';

import { useRef, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface LaminationProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

const laminationProducts: LaminationProduct[] = [
  {
    id: 1,
    title: 'Yüksek Hızlı Hassas Laminasyon Pres Hatları',
    description: 'Yüksek hassasiyetli servo kontrol sistemi ile donatılmış, tam otomatik laminasyon pres hatları. Maksimum hassasiyet ve yüksek hızlı üretim kapasitesi.',
    image: '/images/product-groups/high-speed-lamination-press.jpg',
    href: '/urunler/yuksek-hizli-hassas-laminasyon-pres-hatlari',
  },
  {
    id: 2,
    title: 'Geniş Çaplı Rotor ve Statorlar için Orta Hızlı Laminasyon Pres Hatları',
    description: 'Büyük çaplı rotor ve stator üretimi için özel tasarlanmış orta hızlı laminasyon pres hatları. Hassas kesim ve optimum üretim hızı.',
    image: '/images/product-groups/medium-speed-lamination-press.jpg',
    href: '/urunler/genis-capli-rotor-stator-orta-hizli-laminasyon-pres-hatlari',
  },
  {
    id: 3,
    title: 'Yüksek Performanslı Laminasyon Kalıpları',
    description: 'Özel tasarlanmış yüksek performanslı laminasyon kalıpları ile maksimum verimlilik ve hassasiyet. Uzun ömürlü ve dayanıklı yapı.',
    image: '/images/product-groups/high-performance-lamination-dies.jpg',
    href: '/urunler/yuksek-performansli-laminasyon-kaliplari',
  },
  {
    id: 4,
    title: 'Gagalama Presi',
    description: 'Hassas gagalama işlemleri için özel tasarlanmış pres sistemi. Yüksek hassasiyet ve tekrarlanabilir sonuçlar.',
    image: '/images/product-groups/notching-press.jpg',
    href: '/urunler/gagalama-presi',
  },
  {
    id: 5,
    title: 'Rotor ve Stator Paketleme Çözümleri',
    description: 'Otomatik rotor ve stator paketleme sistemleri. Hassas istifleme ve güvenilir paketleme çözümleri.',
    image: '/images/product-groups/cleatingmachine1.jpg',
    href: '/urunler/rotor-stator-paketleme-cozumleri',
  },
  {
    id: 6,
    title: 'Rotor ve Stator Lazer Kesim Makineleri',
    description: 'Yüksek hassasiyetli lazer kesim teknolojisi ile rotor ve stator üretimi. Temiz kesim ve minimum malzeme kaybı.',
    image: '/images/product-groups/Produktbild_effective_l.jpg',
    href: '/urunler/rotor-stator-lazer-kesim-makineleri',
  },
];

export function LaminationSlider() {
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
    <section className="relative bg-white pt-20 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 items-start">
            {/* Content Side */}
            <div className="relative order-2 lg:order-1 order-1">
              <h2 className="text-[32px] leading-[40px] font-medium text-[#258535] mb-6">
                Laminasyon ve Rotor/Stator
              </h2>
              
              <div className="content-wrapper">
                <Slider
                  {...settings}
                  ref={slider1Ref}
                  asNavFor={slider2Ref.current || undefined}
                >
                  {laminationProducts.map((product) => (
                    <div key={product.id} className="outline-none">
                      <div className="space-y-4 lg:space-y-8">
                        <div>
                          <a href={product.href} className="inline-block group/title">
                            <h2 className="text-[26px] leading-[31px] font-medium text-[rgb(92,92,92)] mb-4 lg:mb-6 group-hover/title:text-black transition-colors duration-300">
                              {product.title}
                            </h2>
                          </a>
                          
                          <p className="text-lg text-[#666666] leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        <div>
                          <a href={product.href} className="group relative inline-flex items-center px-5 py-3 border border-[#258535] text-[#258535] rounded-full overflow-hidden transition-colors duration-300 hover:text-white">
                            <span className="relative z-10 flex items-center text-base leading-6 font-light">
                              İncele
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

            {/* Image Side */}
            <div className="relative order-1 lg:order-2 order-2">
              <div className="image-wrapper">
                <Slider
                  {...settings}
                  ref={slider2Ref}
                  asNavFor={slider1Ref.current || undefined}
                >
                  {laminationProducts.map((product) => (
                    <div key={product.id} className="relative outline-none">
                      <div className="relative aspect-[4/3]">
                        <a href={product.href} className="block w-full h-full group/image">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-contain transition-transform duration-500 group-hover/image:scale-105"
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

      <style jsx global>{`
        .content-slider .slick-dots {
          bottom: -40px;
          display: flex !important;
          justify-content: flex-start;
          align-items: center;
          gap: 0.25rem;
        }

        .slick-dots li {
          width: auto;
          height: auto;
          margin: 0;
        }

        .slick-dots li button {
          padding: 0;
        }

        .slick-dots li button:before {
          display: none;
        }

        .slick-dots li.slick-active div {
          background-color: #FFB800;
          width: 2.5rem;
        }

        .content-wrapper {
          margin-bottom: 24px;
        }

        @media (min-width: 1024px) {
          .content-wrapper {
            margin-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
} 