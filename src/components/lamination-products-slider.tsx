'use client'

import Link from 'next/link'
import Image from 'next/image'

interface ProductItem {
  id: number
  name: string
  slug: string
  image: string
  description: string
}

const laminationProducts: ProductItem[] = [
  {
    id: 1,
    name: 'Yüksek Hızlı Hassas Laminasyon Pres Hatları',
    slug: '/urunler/yuksek-hizli-hassas-laminasyon-pres-hatlari',
    image: '/images/product-groups/high-speed-lamination-press.jpg',
    description: 'Elektrik motor endüstrisi için yüksek hızlı ve hassas laminasyon çözümleri'
  },
  {
    id: 2,
    name: 'Geniş Çaplı Rotor Stator Orta Hızlı Laminasyon Pres Hatları',
    slug: '/urunler/genis-capli-rotor-stator-orta-hizli-laminasyon-pres-hatlari',
    image: '/images/product-groups/medium-speed-lamination-press.jpg',
    description: 'Orta hızlı geniş çaplı rotor ve stator üretimi için laminasyon sistemleri'
  },
  {
    id: 3,
    name: 'Yüksek Performanslı Laminasyon Kalıpları',
    slug: '/urunler/yuksek-performansli-laminasyon-kaliplari',
    image: '/images/product-groups/high-performance-lamination-dies.jpg',
    description: 'Hassas laminasyon işlemleri için yüksek performanslı kalıp çözümleri'
  }
]

export default function LaminationProductsSlider() {

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-[38px] leading-[46px] font-medium text-[#258535]">
            Diğer Ürünler
          </h2>
        </div>

        {/* Products Grid - Static 3 products */}
        <div className="relative overflow-hidden -mx-3">
          {/* Mobile Grid - tek sütun */}
          <div className="block md:hidden">
            <div className="flex flex-col gap-6">
              {laminationProducts.map((product) => (
                <div key={product.id} className="px-3">
                  <div className="group relative">
                    <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden rounded-lg border border-gray-200">
                      <Link href={product.slug} className="block w-full h-full cursor-pointer">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover will-change-transform transition-transform duration-300 group-hover:scale-105"
                        />
                      </Link>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="group/title">
                        <Link href={product.slug}>
                          <h3 className="text-lg text-[#606060] transition-colors duration-300 group-hover/title:text-[#258535] cursor-pointer">
                            {product.name}
                          </h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

                     {/* Desktop Grid - 3 ürün yan yana */}
           <div className="hidden md:block">
             <div className="flex">
               {laminationProducts.map((product) => (
                 <div key={product.id} className="w-1/3 flex-shrink-0 px-3">
                   <div className="group relative">
                     <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden rounded-lg border border-gray-200">
                       <Link href={product.slug} className="block w-full h-full cursor-pointer">
                         <Image
                           src={product.image}
                           alt={product.name}
                           fill
                           className="object-cover will-change-transform transition-transform duration-300 group-hover:scale-105"
                         />
                       </Link>
                     </div>
                     <div className="flex items-center justify-between gap-4">
                       <div className="group/title">
                         <Link href={product.slug}>
                           <h3 className="text-lg text-[#606060] transition-colors duration-300 group-hover/title:text-[#258535] cursor-pointer">
                             {product.name}
                           </h3>
                         </Link>
                       </div>
                       <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                         <Link href={product.slug} className="group/btn relative inline-flex items-center px-4 py-2.5 border border-[#b0b0b0] text-[#666666] rounded-full overflow-hidden transition-colors duration-300 hover:border-[#258535] cursor-pointer">
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
                           <div className="absolute inset-0 w-full transform scale-x-0 origin-left transition-transform duration-300 bg-[#258535] group-hover/btn:scale-x-100" />
                         </Link>
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  )
} 