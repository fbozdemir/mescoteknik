"use client"

'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import OtherProductsSlider from '@/components/other-products-slider'
import { QuoteForm } from '@/components'

// Metadata is handled in layout for client components

const HeroSection = () => (
  <div className="relative h-[250px] md:h-[425px] overflow-hidden mt-24">
    {/* Arka Plan Görseli - Sabit */}
    <div className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat" 
         style={{backgroundImage: 'url(/images/product-groups/rulo-sac-perfore.jpg)'}}>
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
              Rulo Sac Perfore Hattı
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
                Rulo Sac Perfore Hattı
              </span>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default function RuloSacPerforeHatti() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      {/* Product Overview Section */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#f6f6f6' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Sol Taraf - İçerik */}
            <div className="order-1 lg:order-1">
              <div className="max-w-xl">
                {/* Ana Başlık */}
                <h2 className="font-normal text-[26px] leading-[39px] text-[#258535] mb-8">
                  Rulo Sac Perfore Hattı
                </h2>
                
                {/* Açıklama */}
                <div className="mb-8 space-y-4">
                  <p className="font-light text-[20px] leading-[30px]" style={{ color: 'rgb(105, 105, 105)' }}>
                    Perforasyon Projelerimiz, birçok Malzeme Çeşidi ve Perfore Desenlerine göre  Tasarlanabilmektedir.
                  </p>
                  <p className="font-light text-[20px] leading-[30px]" style={{ color: 'rgb(105, 105, 105)' }}>
                    Perfore Üretim Hatları Tasarımlarımızda; Farklı Kullanım amacına Hizmet eden Perfore Edilmiş Rulo ve Plakalar, Kullanılacak olan İşe  göre Leveler, Dilme, Kesme ve birçok Harici üniteler eklenebilme İmkanı da Sunabilmekteyiz.
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
              <div className="relative">
                <div className="aspect-[9/6] relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src="/images/product-groups/rulo-sac-perfore.jpg"
                    alt="Rulo Sac Perfore Hattı"
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 border border-gray-200 rounded-lg p-12 bg-white">
          {/* Product Description */}
          <div className="mb-8">
            <p className="font-light text-[20px] leading-[30px] mb-4" style={{ color: 'rgb(105, 105, 105)' }}>
              Müşterilerimiz için farklı rulo tipleri ve levha ölçüleri ile Perfore Üretim Hatları üretebilmekteyiz.
            </p>
            <p className="font-light text-[20px] leading-[30px] mb-4" style={{ color: 'rgb(105, 105, 105)' }}>
              Perforasyon hatlarında; <span className="font-bold">Alüminyum</span>, DKP, HRP, <span className="font-bold">Sarı Malzeme</span>, Siyah Sac, <span className="font-bold">Paslanmaz Çelik</span>, Çelik, Nikel, <span className="font-bold">Pirinç</span>, <span className="font-bold">Bakır</span> veya Bakır Alaşımlarından oluşan malzemelere <span className="font-bold">Perforasyon</span> işlemi uygulanabilmektedir.
            </p>
            <p className="font-light text-[20px] leading-[30px] mb-4" style={{ color: 'rgb(105, 105, 105)' }}>
              Perfore Üretim Hatlarındaki çalışma aralığı kalınlığı: 0.4 – 3 mm ve genişliği 1600 mm 'dir.
            </p>
            <p className="font-light text-[20px] leading-[30px] mb-4" style={{ color: 'rgb(105, 105, 105)' }}>
              Perfore Sac Üretim Hatlarımız, müşteri istekleri doğrultusunda geniş bir desen çeşitliliğinde üretim yapabilir; yuvarlak, altıgen, üçgen, sıralı oval, delikli, kare, şaşırtmalı slotlar ve daha birçok benzer tasarımlar.
            </p>
            <p className="font-light text-[20px] leading-[30px] mb-8" style={{ color: 'rgb(105, 105, 105)' }}>
              <span className="font-bold">Rulo Sac Perforasyon Hatlarımız ( Delik Delme Üretim Hattı) aşağıdaki ünitelerin bileşiminden oluşmaktadır;</span>
            </p>
          </div>
          
          {/* General Features */}
          <div className="mb-8">
            <div className="space-y-3">
              {[
                'Otomatik Rulo Sac Açma Sistemi',
                'Hassas Perfore Sistemi',
                'Doğrultma Merdane Grubu',
                'Servo Kontrollü Perfore',
                'Otomatik Delik Açma',
                'Hızlı Perfore Teknolojisi',
                'Kalite Kontrol Sistemi',
                'Otomatik Sarma Sistemi',
                'Pnömatik Perfore Sistemi',
                'Encoder Pozisyon Kontrolü',
                'Güvenlik Sistemi',
                'Otomasyon Entegrasyonu'
              ].map((feature, index) => (
                <div key={index} className="text-[20px] leading-[30px] font-extralight text-gray-700">
                  {feature}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Diğer Ürünler Slider */}
      <OtherProductsSlider compact={true} />
      
      {/* Quote Form */}
      <QuoteForm 
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
        productName="Rulo Sac Perfore Hattı"
      />
    </div>
  )
}