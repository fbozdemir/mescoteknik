'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 }
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const values = [
  {
    icon: "🎯",
    title: "Kalite Odaklılık",
    description: "Her projemizde en yüksek kalite standartlarını benimsiyor ve müşteri memnuniyetini ön planda tutuyoruz."
  },
  {
    icon: "💡",
    title: "İnovasyon",
    description: "Sürekli araştırma ve geliştirme faaliyetleri ile sektörde yenilikçi çözümler üretiyoruz."
  },
  {
    icon: "🤝",
    title: "Güvenilirlik",
    description: "20 yılı aşkın tecrübemiz ile müşterilerimize güvenilir ve sürdürülebilir çözümler sunuyoruz."
  },
  {
    icon: "🚀",
    title: "Teknoloji",
    description: "En son teknolojileri takip ederek, projelerimizde modern ve verimli çözümler kullanıyoruz."
  }
]

// Counter Animation Component
interface AnimatedCounterProps {
  end: number
  suffix?: string
  duration?: number
}

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const startValue = 0
    const endValue = end

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(easeOutCubic * (endValue - startValue) + startValue)
      
      setCount(currentCount)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return (
    <span ref={countRef}>
      {count}{suffix}
    </span>
  )
}

const statisticsData = [
  { value: 20, suffix: "+", label: "Yıllık Deneyim" },
  { value: 500, suffix: "+", label: "Tamamlanan Proje" },
  { value: 50, suffix: "+", label: "Ülkeye İhracat" },
  { value: 100, suffix: "%", label: "Müşteri Memnuniyeti" }
]

export default function About() {
  const params = useParams()
  const locale = params.locale as string

  return (
    <main className="pt-24 min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="py-12" style={{ backgroundColor: '#f6f6f6' }}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Sol Taraf - İçerik */}
            <div className="order-1 lg:order-1">
              <div className="max-w-xl">
                {/* Ana Başlık */}
                <motion.h1
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInLeft}
                  transition={{ duration: 0.6 }}
                  className="font-normal text-[26px] leading-[39px] text-[#258535] mb-8"
                >
                  Hakkımızda
                </motion.h1>
                
                {/* Açıklama */}
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInLeft}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8 space-y-6"
                >
                  <p className="font-light text-[20px] leading-[30px]" style={{ color: 'rgb(105, 105, 105)' }}>
                    "Mesco Teknik Makina Sanayi ve Ticaret Ltd. Şti.", metal şekillendirme sektöründeki 20 yıla yakın tecrübesi ve dinamik kadrosu ile en son teknolojileri takip ederek yurtiçi ve yurtdışındaki birçok sektörün mühendislik, makine, kalıp ve komple tesis gibi ihtiyaçlarına yönelik çözümler sunmak amacıyla hizmet vermektedir.
                  </p>
                </motion.div>
              </div>
            </div>
            
            {/* Sağ Taraf - Bilgi Kartları */}
            <div className="order-2 lg:order-2">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInRight}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                {statisticsData.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-3xl font-bold text-[#258535] mb-2">
                      <AnimatedCounter 
                        end={stat.value} 
                        suffix={stat.suffix}
                        duration={2000 + (index * 200)} 
                      />
                    </div>
                    <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-24">
          <div className="mb-12 border border-gray-200 rounded-2xl p-12 bg-white shadow-sm">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="font-light text-[20px] leading-[30px] mb-6" style={{ color: 'rgb(105, 105, 105)' }}>
                Firmamız, projelerin fizibilite, tasarım, üretim, kalite kontrol, devreye alma ve satış sonrası gibi tüm evrelerinde gelişmekte olan teknolojileri de takip ederek en titiz çalışmayı gerçekleştirmekte ve müşterileri için güvenilir, işlevsel ve ekonomik çözümler üretmeyi hedeflemektedir.
              </p>
              <p className="font-light text-[20px] leading-[30px] mb-8" style={{ color: 'rgb(105, 105, 105)' }}>
                Deneyimli kadromuzun; dikkatli ve titiz yaklaşımıyla sektöre sunduğu başlıca hizmetler aşağıdaki ana başlıklar altında toplanabilir.
              </p>
              
              <div className="space-y-3">
                {[
                  'Mühendislik ve Proje Yönetim Hizmetleri',
                  'Özel amaçlı makine, kalıp ve ekipman tasarımı ve tedariki',
                  'Komple anahtar teslimi üretim tesisi tasarımı, imalatı ve kurulumu',
                  'Operatör eğitimleri',
                  'Satış sonrası ve bakım-onarım hizmetleri',
                  'Temsilcilik hizmetleri'
                ].map((service, index) => (
                  <div key={index} className="flex items-start">
                    <span className="mr-3 mt-2 text-[#258535]">•</span>
                    <span className="font-light text-[18px] leading-[27px]" style={{ color: 'rgb(105, 105, 105)' }}>
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12" style={{ backgroundColor: '#f6f6f6' }}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-24">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-normal text-[26px] leading-[39px] text-[#258535] mb-6">
              Değerlerimiz
            </h2>
            <p className="font-light text-[20px] leading-[30px] max-w-3xl mx-auto" style={{ color: 'rgb(105, 105, 105)' }}>
              MESCO olarak, çalışmalarımızı yönlendiren temel değerlerimiz 
              başarımızın anahtarıdır.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="font-light text-[16px] leading-[24px]" style={{ color: 'rgb(105, 105, 105)' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-24">
          <div className="bg-[#001227] rounded-2xl p-12 text-center text-white">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-normal text-[26px] leading-[39px] mb-6">
                Projeleriniz İçin Bizimle İletişime Geçin
              </h2>
              <p className="font-light text-[20px] leading-[30px] text-gray-300 mb-8 max-w-3xl mx-auto">
                20 yıla yakın deneyimimiz ve uzman kadromuz ile projenizi hayata geçirmeye hazırız.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/${locale}/iletisim`}
                  className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full overflow-hidden transition-all duration-300 hover:bg-white hover:text-gray-900"
                >
                  <span className="relative z-10 flex items-center text-lg font-medium">
                    İletişime Geçin
                    <svg 
                      className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
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
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}