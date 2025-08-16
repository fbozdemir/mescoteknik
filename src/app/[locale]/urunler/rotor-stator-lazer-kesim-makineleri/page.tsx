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
         style={{backgroundImage: 'url(/images/product-groups/Produktbild_effective_s-1.jpg)'}}>
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
              Rotor Stator Lazer Kesim Makineleri
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
                Rotor Stator Lazer Kesim Makineleri
              </span>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default function RotorStatorLazerKesimMakineleri() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      {/* Three Machines Section */}
      <section className="py-16 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                         {/* STIEFELMAYER effective S */}
             <div className="text-center">
               <h3 className="text-2xl md:text-3xl font-medium text-gray-800 mb-6">
                 STIEFELMAYER<br />effective S
               </h3>
              <div className="bg-white border-4 border-black p-4 rounded-lg shadow-lg">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/images/product-groups/Produktbild_effective_s-1.jpg"
                    alt="STIEFELMAYER effective S"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

                         {/* STIEFELMAYER effective L */}
             <div className="text-center">
               <h3 className="text-2xl md:text-3xl font-medium text-gray-800 mb-6">
                 STIEFELMAYER<br />effective L
               </h3>
              <div className="bg-white border-4 border-black p-4 rounded-lg shadow-lg">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/images/product-groups/Produktbild_effective_l.jpg"
                    alt="STIEFELMAYER effective L"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

                         {/* STIEFELMAYER LW2 Welding Machine */}
             <div className="text-center">
               <h3 className="text-2xl md:text-3xl font-medium text-gray-800 mb-6">
                 STIEFELMAYER LW2<br />Welding Machine
               </h3>
              <div className="bg-white border-4 border-black p-4 rounded-lg shadow-lg">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/images/product-groups/lw2_produkt.jpg"
                    alt="STIEFELMAYER LW2 Welding Machine"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      
      {/* Quote Form */}
      <QuoteForm 
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
        productName="Rotor ve Stator Lazer Kesim Makineleri"
      />
    </div>
  )
}