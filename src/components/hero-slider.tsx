'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: '/images/slide1.jpg',
    title: 'KALİTE & İNOVASYON',
    subtitle: 'ANAHTAR TESLİM ÇÖZÜMLER',
    description: 'Sektörde Kalite Standartlarını Yenilikçi Çözümlerimizle Birleştiriyoruz.'
  },
  {
    id: 2,
    image: '/images/slide2.jpg',
    title: 'MODERN TEKNOLOJİ',
    subtitle: 'ÜRETİM HATLARI',
    description: 'En Son Teknoloji ile Donatılmış Üretim Hatları'
  },
  {
    id: 3,
    image: '/images/slide3.jpg',
    title: 'PROFESYONEL HİZMET',
    subtitle: 'UZMAN KADRO',
    description: 'Deneyimli Ekibimizle Kesintisiz Teknik Destek'
  }
]

type HeroSliderProps = {
  locale: string
}

export function HeroSlider({ locale }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    try {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
      return () => clearInterval(timer)
    } catch (error) {
      console.error('Timer error:', error)
      setHasError(true)
    }
  }, [isClient])

  // Error state
  if (hasError) {
    return (
      <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-red-500 text-xl mb-4">⚠️</div>
            <p className="text-gray-600">Slider yüklenirken hata oluştu</p>
            <button 
              onClick={() => setHasError(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Tekrar Dene
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Server-side rendering için boş alan
  if (!isClient) {
    return (
      <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
        {/* Boş alan - hiçbir şey gösterme */}
      </div>
    )
  }

  // Safe slide access
  const currentSlideData = slides[currentSlide] || slides[0]

  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 1,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={currentSlideData.image}
              alt={currentSlideData.title}
              fill
              priority={currentSlide === 0}
              loading={currentSlide === 0 ? 'eager' : 'lazy'}
              className="object-cover"
              sizes="100vw"
              onError={(e) => {
                console.error('Image load error:', e)
                setHasError(true)
              }}
            />
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-24">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 1,
                ease: "easeInOut"
              }}
            >
              <h2 className="text-[45px] leading-[54px] font-bold text-white mb-2">
                {currentSlideData.title}
              </h2>
              <h1 className="text-[45px] leading-[54px] font-normal text-white mb-6">
                {currentSlideData.subtitle}
              </h1>
              <p className="text-white text-[20px] leading-[30px] font-extralight mb-8 max-w-2xl">
                {currentSlideData.description}
              </p>
              <div className="flex items-center gap-8">
                <Link
                  href={`/${locale}/${locale === 'tr' ? 'hakkimizda' : 'about'}`}
                  className="group relative inline-flex items-center px-8 py-3 border border-white text-white rounded-full overflow-hidden transition-colors duration-300 hover:border-[#258535]"
                >
                  <span className="relative z-10 flex items-center text-base leading-6 font-light transition-colors duration-300 group-hover:text-white">
                    {locale === 'tr' ? 'Hakkımızda' : 'About Us'}
                    <svg 
                      className="ml-2 w-4 h-4" 
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
                  <div className="absolute inset-0 w-full transform scale-x-0 origin-left transition-transform duration-300 bg-[#258535] group-hover:scale-x-100" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modern Navigation Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-[2px] transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-8 bg-[#258535]' 
                  : 'w-4 bg-white/40 hover:bg-[#258535]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Button */}
      <div 
        className="absolute bottom-8 right-24 z-20 cursor-pointer group hidden md:flex items-center gap-0.5"
        onClick={() => {
          try {
            if (typeof window !== 'undefined') {
              window.scrollTo({
                top: window.innerHeight - 80,
                behavior: 'smooth'
              })
            }
          } catch (error) {
            console.error('Scroll error:', error)
          }
        }}
      >
        <span className="text-white/30 text-xs tracking-wider rotate-180" style={{ writingMode: 'vertical-rl' }}>
          {locale === 'tr' ? 'Kaydır' : 'Scroll'}
        </span>
        <div className="w-7 h-12 border-[0.5px] border-white/40 rounded-full relative flex items-center justify-center overflow-hidden transition-colors duration-300 group-hover:border-white/60">
          <div className="absolute inset-0 bg-white/10 backdrop-blur transition-all duration-300 opacity-0 group-hover:opacity-100" />
          <motion.div
            className="w-1 h-3 bg-[#258535] rounded-full relative z-10"
            animate={{
              y: [0, 12, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </div>
  )
} 