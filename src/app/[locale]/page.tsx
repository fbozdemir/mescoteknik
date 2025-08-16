'use client';

import { HeroSlider } from '@/components/hero-slider'
import { ProductGroupSlider } from '@/components/product-group-slider'
import { ProductionLinesSlider } from '@/components/production-lines-slider'
import { LaminationSlider } from '@/components/lamination-slider'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function Home() {
  const params = useParams();
  const locale = params?.locale as string || 'tr';

  return (
    <div className="pt-24"> {/* Navbar height offset */}
      {/* Hero Section */}
      <section className="relative">
        <HeroSlider />
      </section>

      {/* Lamination Section */}
      <section className="relative">
        <LaminationSlider />
      </section>

      {/* Production Lines Section */}
      <section className="relative">
        <ProductionLinesSlider />
      </section>

      {/* Product Groups Section */}
      <section className="relative">
        <ProductGroupSlider />
      </section>

      {/* About Section */}
      <section className="relative bg-[#f6f6f6] py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Sol Taraf - Fotoğraf (2/5) */}
            <div className="order-1 lg:order-1 lg:col-span-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                                       <Image
                         src="/images/product-groups/breadcrumb-product-detail-1.jpg"
                         alt="MESCO Endüstriyel Makine"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Sağ Taraf - İçerik (3/5) */}
            <div className="order-2 lg:order-2 lg:col-span-3">
              <div className="max-w-xl lg:max-w-none">
                {/* Başlık */}
                <h2 className="text-[40px] leading-[52px] font-medium text-[#FFB800] mb-8">
                  {locale === 'tr' ? 'Hakkımızda' : 'About Us'}
                </h2>
                
                {/* Açıklama */}
                <div className="mb-8">
                  <p className="text-[20px] leading-[32px] font-light text-[#696969]">
                    {locale === 'tr' 
                      ? 'Mesco Teknik olarak, 20 yıllık deneyimimiz ve yenilikçi teknolojilerimizle metal şekillendirmeden komple tesis çözümlerine kadar güvenilir ve yüksek katma değerli hizmetler sunuyoruz.'
                      : 'As Mesco Teknik, with our 20 years of experience and innovative technologies, we provide reliable and high value-added services from metal forming to complete facility solutions.'
                    }
                  </p>
                </div>
                
                {/* Buton */}
                <div>
                  <Link
                    href={`/${locale}/${locale === 'tr' ? 'hakkimizda' : 'about'}`}
                    className="group relative inline-flex items-center px-6 py-3 border border-[#e0e0e0] text-[#666666] rounded-full overflow-hidden transition-all duration-300 hover:border-[#258535] hover:shadow-lg"
                  >
                    <span className="relative z-10 flex items-center text-[15px] font-light transition-colors duration-300 group-hover:text-white">
                      {locale === 'tr' ? 'Hakkımızda' : 'About Us'}
                      <svg 
                        className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
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
                    <div className="absolute inset-0 transform scale-x-0 origin-left transition-transform duration-300 bg-[#258535] group-hover:scale-x-100 rounded-full" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 