'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

// Ana ürün listesi - 5 ürün
const initialProducts = [
  {
    id: 1,
    title: "Rulo Sac Boy Kesme Hattı",
    image: "/images/product-groups/rulo-sac-boy-kesme.jpg",
    href: "/urunler/rulo-sac-boy-kesme-hatti"
  },
  {
    id: 2,
    title: "Rulo Sac Dilme Hattı",
    image: "/images/product-groups/rulo-sac-dilme.jpg",
    href: "/urunler/rulo-sac-dilme-hatti"
  },
  {
    id: 3,
    title: "Rulo Sac Perfore Hattı",
    image: "/images/product-groups/rulo-sac-perfore.jpg",
    href: "/urunler/rulo-sac-perfore-hatti"
  },
  {
    id: 4,
    title: "İskele Kalas Üretim Hattı",
    image: "/images/product-groups/iskele-kalas.jpg",
    href: "/urunler/iskele-kalas-uretim-hatti"
  },
  {
    id: 5,
    title: "Asma Tavan Üretim Hattı",
    image: "/images/product-groups/asma-tavan.jpg",
    href: "/urunler/asma-tavan-uretim-hatti"
  }
]

interface OtherProductsSliderProps {
  compact?: boolean;
}

export default function OtherProductsSlider({ compact = false }: OtherProductsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [items, setItems] = useState([...initialProducts])
  
  // Ekran genişliğini kontrol et
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // İlk yüklemede kontrol et
    checkMobile()
    
    // Ekran boyutu değiştiğinde kontrol et
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

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
    return isMobile ? items.length - 1 : items.length - 2; // Desktop'ta 2 ürün gösterildiği için
  };

  const addMoreItems = () => {
    // Yeni itemlar ekle
    setItems(currentItems => [
      ...currentItems,
      ...initialProducts.map(product => ({
        ...product,
        id: product.id + currentItems.length
      }))
    ]);
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex => {
      const maxIndex = getMaxIndex();
      // Son 2 item'a yaklaştığımızda yeni itemlar ekle
      if (prevIndex >= maxIndex - 2) {
        addMoreItems();
      }
      return prevIndex + 1;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const totalSlides = items.length

  return (
    <section className={`${compact ? 'py-6' : 'py-16'} bg-gray-50`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`${compact ? 'mb-8' : 'mb-12'} text-center md:text-left`}>
          <h2 className="text-[38px] leading-[46px] font-medium text-[#258535]">
            Diğer Ürünler
          </h2>
        </div>

        {/* Products Slider - Mobile: tek ürün, Desktop: 2 ürün */}
        <div className="relative overflow-hidden -mx-3">
          {/* Mobile Slider - tek ürün */}
          <div className="block md:hidden">
            <div 
              className="flex will-change-transform"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.8s ease-in-out'
              }}
            >
              {items.map((product, index) => (
                <div key={product.id} className="w-full flex-shrink-0 px-3">
                  <div className="group relative">
                    <div className="relative aspect-[16/9] w-full mb-4 overflow-hidden rounded-lg border border-gray-200">
                      <Link href={product.href} className="block w-full h-full cursor-pointer">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover will-change-transform transition-transform duration-300 group-hover:scale-105"
                        />
                      </Link>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="group/title">
                        <Link href={product.href}>
                          <h3 className="text-lg text-[#606060] transition-colors duration-300 group-hover/title:text-[#258535] cursor-pointer">
                            {product.title}
                          </h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Slider - 2 ürün görünür, tek tek geçiş */}
          <div className="hidden md:block">
            <div 
              className="flex will-change-transform"
              style={{ 
                transform: `translateX(-${currentIndex * (100/2)}%)`,
                transition: 'transform 0.8s ease-in-out'
              }}
            >
              {items.map((product, index) => (
                <div key={product.id} className="w-1/2 flex-shrink-0 px-3">
                  <div className="group relative">
                    <div className="relative aspect-[16/9] w-full mb-4 overflow-hidden rounded-lg border border-gray-200">
                      <Link href={product.href} className="block w-full h-full cursor-pointer">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover will-change-transform transition-transform duration-300 group-hover:scale-105"
                        />
                      </Link>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="group/title">
                        <Link href={product.href}>
                          <h3 className="text-lg text-[#606060] transition-colors duration-300 group-hover/title:text-[#258535] cursor-pointer">
                            {product.title}
                          </h3>
                        </Link>
                      </div>
                      <div className="hidden md:block opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <Link href={product.href} className="group/btn relative inline-flex items-center px-4 py-2.5 border border-[#b0b0b0] text-[#666666] rounded-full overflow-hidden transition-colors duration-300 hover:border-[#258535] cursor-pointer">
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
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation - 5 ürün için */}
        <div className="flex justify-center mt-8 space-x-3">
          {/* Mobile Dots */}
          <div className="flex md:hidden space-x-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  (currentIndex % 5) === index
                    ? 'bg-[#258535] scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          {/* Desktop Dots - 4 pozisyon (5 ürün, 2'şer görünür) */}
          <div className="hidden md:flex space-x-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  (currentIndex % 4) === index
                    ? 'bg-[#258535] scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 