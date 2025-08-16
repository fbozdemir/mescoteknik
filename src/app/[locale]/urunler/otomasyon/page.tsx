'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { QuoteForm } from '@/components'

// Metadata is handled in layout for client components

const HeroSection = () => (
  <div className="relative h-[250px] md:h-[425px] overflow-hidden mt-24">
    {/* Arka Plan Görseli - Sabit */}
    <div className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat" 
         style={{backgroundImage: 'url(/images/product-groups/otomasyon-hero-background.jpg)'}}>
      {/* Radial Gradient Overlay - Edge to Center Light */}
      <div className="absolute inset-0" 
           style={{
             background: 'radial-gradient(circle at center, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.75) 70%, rgba(0,0,0,0.95) 90%, rgba(0,0,0,1) 100%)'
           }}></div>
    </div>
    
    {/* İçerik - Sol ve Sağ Tarafa Ayrılmış */}
    <div className="relative z-10 h-full flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex justify-start md:justify-between items-center">
          {/* Mobil: Sadece Ürün İsmi (Sol Hizalı) - Desktop: Sol Taraf */}
          <div className="flex items-center">
            <h1 className="text-[27px] leading-[32px] md:text-[40px] md:leading-[48px] font-medium text-white">
              Otomasyon
            </h1>
          </div>
          
          {/* Sağ Taraf - Breadcrumb (Sadece Desktop'ta Görünür) */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center text-base leading-6 font-light text-white">
              <Link 
                href="/" 
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Anasayfa
              </Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <span className="text-gray-300">
                Otomasyon
              </span>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default function Otomasyon() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      {/* Product Overview Section */}
      <section className="py-12" style={{ backgroundColor: '#f6f6f6' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Sol Taraf - İçerik */}
            <div className="order-1 lg:order-1">
              <div className="max-w-xl">
                {/* Ana Başlık */}
                <h2 className="font-normal text-[26px] leading-[39px] text-[#258535] mb-8">
                  Otomasyon Sistemleri
                </h2>
                
                {/* Açıklama */}
                <div className="mb-8 space-y-4">
                  <p className="font-light text-[20px] leading-[30px]" style={{ color: 'rgb(105, 105, 105)' }}>
                    Konveyör bantlar, yükleme/boşaltma robotları, stator paketleme çözümleri ve transfer presi otomasyon hatları ile tam entegre üretim sistemleri. Kaynak, kelepçeleme makinalarından lineer robot besleyicilere kadar geniş otomasyon çözümleri sunuyoruz.
                  </p>
                </div>
                
                {/* Teklif İste Butonu */}
                <div className="mb-8">
                  <button 
                    onClick={() => setIsQuoteFormOpen(true)}
                    className="group relative inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-full overflow-hidden transition-all duration-300 hover:border-[#258535]"
                  >
                    <span className="relative z-10 flex items-center text-base leading-6 font-light transition-colors duration-300 group-hover:text-white">
                      Teklif İste
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
                  </button>
                </div>
              </div>
            </div>
            
            {/* Sağ Taraf - Ürün Fotoğrafı */}
            <div className="order-2 lg:order-2">
              <div className="relative max-w-sm md:max-w-md mx-auto">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src="/images/product-groups/otomasyon-urun-gorseli.jpg"
                    alt="Otomasyon Sistemleri"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
                
                {/* Arka plan dekoratif element */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gray-500/10 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* General Features & Technical Specifications */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border border-gray-200 rounded-lg p-12 bg-white">
          {/* General Features */}
          <div className="mb-8">
            <h2 className="text-[22px] leading-[30px] font-bold mb-6" style={{ color: 'rgb(105, 105, 105)' }}>Otomasyon sistemi çözümleri;</h2>
            <div className="space-y-3">
              <div className="text-[20px] leading-[30px] font-extralight text-gray-700">
                1- Konveyör Bant ve Otomatik İstifleme Sistemleri
              </div>
              <div className="text-[20px] leading-[30px] font-extralight text-gray-700">
                2- Yükleme/Boşaltma Robotları
              </div>
              <div className="text-[20px] leading-[30px] font-extralight text-gray-700">
                3- Stator Paketleme Çözümleri
              </div>
              <div className="pl-6 space-y-2">
                <div className="text-[18px] leading-[27px] font-extralight text-gray-600">
                  Kaynak Makinası
                </div>
                <div className="text-[18px] leading-[27px] font-extralight text-gray-600">
                  Kelepçeleme Makinası
                </div>
                <div className="text-[18px] leading-[27px] font-extralight text-gray-600">
                  Dik Enjeksiyon Presi
                </div>
              </div>
              <div className="text-[20px] leading-[30px] font-extralight text-gray-700">
                4- Transfer Presi Otomasyon Hatları
              </div>
              <div className="pl-6 space-y-2">
                <div className="text-[18px] leading-[27px] font-extralight text-gray-600">
                  Lineer Robot Besleyici (Kalıp içi ve Presler arası transfer sistemleri)
                </div>
                <div className="text-[18px] leading-[27px] font-extralight text-gray-600">
                  3 Boyutlu (Kalıp İçi ve Presler Arası) Transfer Sistemleri
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* YouTube Videos Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/mGGpqOLnmAs"
                  title="Otomasyon Sistemleri"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>      
      {/* Quote Form */}
      <QuoteForm 
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
        productName="Otomasyon"
      />
    </div>
  )
}