"use client"

'use client'


import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import ClassicProductsSlider from '@/components/classic-products-slider'
import Image from 'next/image'
import { useState } from 'react'
import { QuoteForm } from '@/components'

// Metadata is handled in layout for client components

const HeroSection = () => (
  <div className="relative h-[250px] md:h-[425px] overflow-hidden mt-24">
    {/* Arka Plan Görseli - Sabit */}
    <div className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat" 
         style={{backgroundImage: 'url(/images/product-groups/hidrolik-rulo.jpg)'}}>
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
              Hidrolik Rulo Açıcı
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
                Hidrolik Rulo Açıcı
              </span>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default function HidrolikRuloAcici() {
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
                {/* Üst Başlık */}
                <p className="font-thin text-[16px] leading-[24px] mb-4" style={{ color: 'rgb(105, 105, 105)' }}>
                  Rulo Açıcılar
                </p>
                
                {/* Ana Başlık */}
                <h2 className="font-normal text-[26px] leading-[39px] text-[#258535] mb-8">
                  Hidrolik Rulo Açıcı
                </h2>
                
                {/* Açıklama */}
                <div className="mb-8 space-y-4">
                  <p className="font-light text-[20px] leading-[30px]" style={{ color: 'rgb(105, 105, 105)' }}>
                    Özel Tasarım ve Üretimimiz olan Hidrolik Rulo 
                    Sac Açma Makinesi; Rulo Sacın Hidrolik Mandrel 
                    Sistemi ve Hidrolik Yükleme Arabası ile En 
                    Güvenilir ve Hızlı şekilde Rulo Yükleme, 
                    Takma / Kavrama ve Çıkarma İşlevini Sağlamaktadır.
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
                    src="/images/product-groups/hidrolik-rulo.jpg"
                    alt="Hidrolik Rulo Açıcı"
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
          {/* General Features */}
          <div className="mb-8">
            <h2 className="text-[22px] leading-[30px] font-bold mb-6" style={{ color: 'rgb(105, 105, 105)' }}>GENEL ÖZELLİKLER:</h2>
            <div className="space-y-3">
              {[
                'Hidrolik Yükleme Arabası',
                'Hidrolik Sistem Rulo İç Sıkma/Boşaltma',
                'Motor Redüktör Grubu',
                'Fren Sistemi',
                'Üst Baskı Kolu (Hidrolik & Pnömatik)',
                'Alt Baskı Kolu (Hidrolik / Pnömatik)',
                'Mesafe Algılama Ayarı / Lazer Sensör',
                'Çalışma Hız Kontrolü /Hat Entegrasyonu'
              ].map((feature, index) => (
                <div key={index} className="text-[20px] leading-[30px] font-extralight text-gray-700">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-slate-700">
                <th className="border border-gray-300 px-4 py-4 text-white text-base font-bold h-[60px]">
                  <div className="flex items-center justify-center h-full">
                    Model
                  </div>
                </th>
                <th className="border border-gray-300 px-4 py-4 text-white text-base font-bold h-[60px]">
                  <div className="flex items-center justify-center h-full text-center">
                    Malzeme<br />Genişliği (mm)
                  </div>
                </th>
                <th colSpan={2} className="border border-gray-300 px-4 py-4 text-white text-base font-bold h-[60px]">
                  <div className="flex items-center justify-center h-full">
                    Rulo İç Çap (Ø)
                  </div>
                </th>
                <th className="border border-gray-300 px-4 py-4 text-white text-base font-bold h-[60px]">
                  <div className="flex items-center justify-center h-full">
                    Rulo Dış Çap
                  </div>
                </th>
                <th className="border border-gray-300 px-4 py-4 text-white text-base font-bold h-[60px]">
                  <div className="flex items-center justify-center h-full text-center">
                    Rulo Ağırlığı<br />Kapasite
                  </div>
                </th>
                <th className="border border-gray-300 px-4 py-4 text-white text-base font-bold h-[60px]">
                  <div className="flex items-center justify-center h-full text-center">
                    Rulo İç Çap<br />Sıkma
                  </div>
                </th>
                <th className="border border-gray-300 px-4 py-4 text-white text-base font-bold h-[60px]">
                  <div className="flex items-center justify-center h-full">
                    Motor
                  </div>
                </th>
                <th className="border border-gray-300 px-4 py-4 text-white text-base font-bold h-[60px]">
                  <div className="flex items-center justify-center h-full text-center">
                    Üst Baskı<br />Sistemi
                  </div>
                </th>
              </tr>
              <tr className="bg-slate-700">
                <th className="border border-gray-300 px-4 py-2"></th>
                <th className="border border-gray-300 px-4 py-2"></th>
                <th className="border border-gray-300 px-4 py-2 text-white text-base font-bold h-[40px]">
                  <div className="flex items-center justify-center h-full">
                    Min.
                  </div>
                </th>
                <th className="border border-gray-300 px-4 py-2 text-white text-base font-bold h-[40px]">
                  <div className="flex items-center justify-center h-full">
                    Max.
                  </div>
                </th>
                <th className="border border-gray-300 px-4 py-2"></th>
                <th className="border border-gray-300 px-4 py-2"></th>
                <th className="border border-gray-300 px-4 py-2"></th>
                <th className="border border-gray-300 px-4 py-2"></th>
                <th className="border border-gray-300 px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {[
                ['RM4000HM/400', '70 - 400', '480', '560', 'Ø 1400 / 1600', '4.000 Kg', 'Hidrolik Sistem', '+', 'Standart'],
                ['RM4000HM/600', '70 - 600', '480', '560', 'Ø 1400 / 1600', '4.000 Kg', 'Hidrolik Sistem', '+', 'Standart'],
                ['RM6000HM/400', '70 - 600', '480', '560', 'Ø 1400 / 1600', '6.000 Kg', 'Hidrolik Sistem', '+', 'Standart'],
                ['RM6000HM/600', '70 - 800', '480', '560', 'Ø 1400 / 1600', '6.000 Kg', 'Hidrolik Sistem', '+', 'Standart'],
                ['RM6000HM/1000', '70 - 1000', '480', '560', 'Ø 1400 / 1600', '6.000 Kg', 'Hidrolik Sistem', '+', 'Standart'],
                ['RM10000HM/800', '70 - 800', '480', '560', 'Ø 1400 / 1600', '10.000 Kg', 'Hidrolik Sistem', '+', 'Standart'],
                ['RM10000HM/800', '70 - 800', '480', '560', 'Ø 1400 / 1600', '10.000 Kg', 'Hidrolik Sistem', '+', 'Standart'],
                ['RM10000HM/1000', '100 - 1000', '480', '560', 'Ø 1400 / 1600', '10.000 Kg', 'Hidrolik Sistem', '+', 'Standart'],
                ['RM10000HM/1300', '100 - 1300', '480', '560', 'Ø 1400 / 1600', '10.000 Kg', 'Hidrolik Sistem', '+', 'Standart'],
                ['RM10000HM/1500', '120 - 1500', '480', '560', 'Ø 1400 / 1600', '10.000 Kg', 'Hidrolik Sistem', '+', 'Standart'],
                ['RM15000HM/1000', '100 - 1000', '480', '560', 'Ø 1400 / 1600', '15.000 Kg', 'Hidrolik Sistem', '+', 'Standart'],
                ['RM15000HM/1300', '120 - 1300', '480', '560', 'Ø 1400 / 1600', '15.000 Kg', 'Hidrolik Sistem', '+', 'Standart'],
                ['RM15000HM/1600', '120 - 1600', '480', '560', 'Ø 1400 / 1600', '15.000 Kg', 'Hidrolik Sistem', '+', 'Standart']
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={`border border-gray-300 px-4 py-3 text-base font-light text-gray-800 ${
                        i === 0 ? 'text-left' : 'text-center'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>

      {/* Diğer Ürünler Slider */}
      <ClassicProductsSlider />      
      {/* Quote Form */}
      <QuoteForm 
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
        productName="Hidrolik Rulo Açıcı"
      />
    </div>
  )
}