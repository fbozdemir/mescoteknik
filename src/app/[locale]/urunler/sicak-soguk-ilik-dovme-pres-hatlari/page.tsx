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
         style={{backgroundImage: 'url(/images/product-groups/sicak-soguk-ilik-dovme-pres-hatlari.jpg)'}}>
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
              Sıcak, Soğuk ve Ilık Dövme Pres Hatları
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
                Sıcak, Soğuk ve Ilık Dövme Pres Hatları
              </span>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default function SicakSogukIlikDovmePresHatlari() {
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
                  Sıcak, Soğuk ve Ilık Dövme Pres Hatları
                </h2>
                
                {/* Açıklama */}
                <div className="mb-8 space-y-4">
                  <p className="font-light text-[20px] leading-[30px]" style={{ color: 'rgb(105, 105, 105)' }}>
                    Sıcak, soğuk ve ılık dövme işlemleri için 400 ve 2500 ton aralığında Knuckle Joint Presler.
                  </p>
                  <p className="font-light text-[20px] leading-[30px]" style={{ color: 'rgb(105, 105, 105)' }}>
                    Düşük deformasyon için ekstra rijit çerçeve.
                  </p>
                  <p className="font-light text-[20px] leading-[30px]" style={{ color: 'rgb(105, 105, 105)' }}>
                    Yüksek hızlı dövme için büyük Kavrama / Fren üniteleri.
                  </p>
                  <p className="font-light text-[20px] leading-[30px]" style={{ color: 'rgb(105, 105, 105)' }}>
                    Bar kesme makinaları, ısıl işlem fırınları, haddeleme üniteleri, transfer sistemleri ve robotik sistemlerle beraber tam otomasyon pres hatları.
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
                    src="/images/product-groups/sicak-soguk-ilik-dovme-pres-hatlari-detail.jpg"
                    alt="Sıcak, Soğuk ve Ilık Dövme Pres Hatları"
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
            <h2 className="text-[22px] leading-[30px] font-bold mb-6" style={{ color: 'rgb(105, 105, 105)' }}>FP Serisi Sıcak, Soğuk ve Ilık Dövme Presleri özellikleri;</h2>
            <div className="space-y-3">
              {[
                'Malzeme tüketimini en aza indirmek için özel tasarım.',
                'Güçlü başlatma kuvveti, yüksek üretim verimliliği.',
                'Kalıp ömürlerini uzatan tasarım.',
                'Ayarlanabilir strok.',
                'Soğuk, sıcak veya sıcak dövme işlemleri için ideal ve yüksek hassasiyetli dövme ürünleri için sağlam gövde tasarımı.',
                'Yüksek üretim verimliliği, kolay kullanım ve düşük enerji tüketimi.',
                'Gürültü kirliliğini azaltan şanzıman sistemi.',
                'Kalıbın kitlenmesini engellemek için özel tasarım.',
                'Ağır eksantrik yüke izin veren ve çeşitli dövme işlemlerinin hassas bir şekilde gerçekleşmesini sağlayan gövde tasarımı.',
                'Merkezi yağlama sistemi, işlenmiş parçalar arasındaki sürtünmeleri azaltır.',
                'Kullanıcı dostu ve güvenli tasarım.',
                'CNS özelliği ile artırılmış hassasiyet.'
              ].map((feature, index) => (
                <div key={index} className="text-[20px] leading-[30px] font-extralight text-gray-700">
                  {feature}
                </div>
              ))}
            </div>
            
            {/* Teknik Özellikler Butonu */}
            <div className="mt-8">
              <a
                href="/images/sicak-soguk-ilik-dovme-pres-hatlari-specs.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-full overflow-hidden transition-all duration-300 hover:border-[#258535]"
              >
                <span className="relative z-10 flex items-center text-base leading-6 font-light transition-colors duration-300 group-hover:text-white">
                  Teknik Özellikler
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 w-full transform scale-x-0 origin-left transition-transform duration-300 bg-[#258535] group-hover:scale-x-100" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/xmjKSJB0toE?start=1"
                title="Sıcak, Soğuk ve Ilık Dövme Pres Hatları Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* JKP Knuckle Joint Soğuk Dövme Presi Section */}
      <section className="py-12" style={{ backgroundColor: '#f6f6f6' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Sol Taraf - İçerik */}
            <div className="order-1 lg:order-1">
              <div className="max-w-xl">
                {/* Ana Başlık */}
                <h2 className="font-normal text-[26px] leading-[39px] mb-8" style={{ color: 'rgb(105, 105, 105)' }}>
                  JKP Knuckle Joint Soğuk Dövme Presi Özellikleri;
                </h2>
                
                {/* Açıklama */}
                <div className="mb-8 space-y-4">
                  <p className="font-light text-[20px] leading-[30px]" style={{ color: 'rgb(105, 105, 105)' }}>
                    Otomobil, motosiklet, bisiklet, tren, gemi vb. sanayilerinde kullanılan soğuk dövmeye uygun parçaların üretiminde kullanılan yüksek performanslı preslerdir.
                  </p>
                </div>
                
                {/* Teknik Özellikler Butonu */}
                <div className="mb-8">
                  <a
                    href="/images/jkp-knuckle-joint-soguk-dovme-presi-specs.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-full overflow-hidden transition-all duration-300 hover:border-[#258535]"
                  >
                    <span className="relative z-10 flex items-center text-base leading-6 font-light transition-colors duration-300 group-hover:text-white">
                      Teknik Özellikler
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 w-full transform scale-x-0 origin-left transition-transform duration-300 bg-[#258535] group-hover:scale-x-100" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Sağ Taraf - Ürün Fotoğrafı */}
            <div className="order-2 lg:order-2">
              <div className="relative max-w-sm md:max-w-md mx-auto">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src="/images/product-groups/jkp-knuckle-joint-soguk-dovme-presi.jpg"
                    alt="JKP Knuckle Joint Soğuk Dövme Presi"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
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

      {/* Second YouTube Video Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/F7BlKN5rls0"
                title="JKP Knuckle Joint Soğuk Dövme Presi Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Photo Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div>
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl">
              <div className="relative">
                <Image
                  src="/images/product-groups/dovme-pres-hatlari-horizontal.jpg"
                  alt="Dövme Pres Hatları - Üretim Hattı"
                  width={0}
                  height={0}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  className="w-full h-auto hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Gradient overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>      
      {/* Quote Form */}
      <QuoteForm 
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
        productName="Sıcak, Soğuk ve Ilık Dövme Pres Hatları"
      />
    </div>
  )
}