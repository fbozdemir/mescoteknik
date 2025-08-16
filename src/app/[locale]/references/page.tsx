'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Navbar } from '@/components/navbar'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Reference companies list - Real MESCO references
const referenceCompanies = [
  {
    id: 1,
    name: "VMF S.P.A.",
    logo: "/images/references/vmf-logo.png",
    website: "http://vmfspa.it/home.asp",
    description: "Rotor and stator solutions for electric motors"
  },
  {
    id: 2,
    name: "Aemot Electric Motor Company",
    logo: "/images/references/aemot-logo.png",
    website: "https://www.aemot.com.tr",
    description: "Electric motor technologies and solutions"
  },
  {
    id: 3,
    name: "BAGADIA CHAITRA Industries Private Limited",
    logo: "/images/references/bagadia-logo.png",
    website: "https://bcipl.net",
    description: "Industrial production and engineering solutions"
  },
  {
    id: 4,
    name: "Magcore Lamination",
    logo: "/images/references/magcore-logo.png",
    website: "https://www.magcore.in",
    description: "Lamination technologies and solutions"
  },
  {
    id: 5,
    name: "Pearl Engineering Company",
    logo: "/images/references/pearl-logo.png",
    website: "https://www.pearl-engineering.com",
    description: "Engineering and industrial solutions"
  },
  {
    id: 6,
    name: "Teknorot",
    logo: "/images/references/teknorot-logo.png",
    website: "https://www.teknorot.com",
    description: "Automotive and industrial parts"
  },
  {
    id: 7,
    name: "Hidria",
    logo: "/images/references/hidria-logo.png",
    website: "https://www.hidria.com",
    description: "Automotive and industrial technologies"
  },
  {
    id: 8,
    name: "Tempel",
    logo: "/images/references/tempel-logo.png",
    website: "https://www.tempel.com",
    description: "Lamination solutions for electric motors"
  },
  {
    id: 9,
    name: "Regal",
    logo: "/images/references/regal-logo.png",
    website: "https://www.regal-tr.com",
    description: "Electric motors and power transmission systems"
  },
  {
    id: 10,
    name: "r.bourgeois High Precision Stamping Dies",
    logo: "/images/references/rbourgeois-logo.png",
    website: "https://www.rbourgeois.com",
    description: "High precision stamping dies"
  },
  {
    id: 11,
    name: "Cummins",
    logo: "/images/references/cummins-logo.png",
    website: "https://www.cummins.com",
    description: "Power solutions and engine technologies"
  },
  {
    id: 12,
    name: "Boulder Electric Vehicle",
    logo: "/images/references/boulder-logo.png",
    website: "https://www.boulderev.com",
    description: "Electric vehicle technologies"
  },
  {
    id: 13,
    name: "Gamak",
    logo: "/images/references/gamak-logo.png",
    website: "http://www.gamak.com/",
    description: "Electric motors and industrial equipment"
  }
]




export default function References() {
  const params = useParams()
  const locale = params.locale as string

  return (
    <>
      <Navbar />
      <main className="pt-28 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-[1600px] mx-auto px-6 md:px-24">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our References
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We take pride in working with trusted brands worldwide. 
                With over 30 years of experience, we provide reliable solutions for the most challenging projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* References Grid Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1600px] mx-auto px-6 md:px-24">


            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {referenceCompanies.map((company, index) => (
                <motion.div
                  key={company.id}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-[#258535]/20 hover:-translate-y-2 h-72"
                  >
                    <div className="flex flex-col items-center text-center h-full">
                      {/* Logo Container */}
                      <div className="w-40 h-32 mb-4 flex items-center justify-center relative flex-shrink-0">
                        <div className="w-full h-full bg-white rounded-xl flex items-center justify-center group-hover:bg-white transition-colors duration-300 border border-gray-200">
                          <Image
                            src={company.logo}
                            alt={`${company.name} Logo`}
                            width={150}
                            height={125}
                            className="max-w-[150px] max-h-[125px] object-contain filter transition-all duration-300 group-hover:scale-110"
                            onError={(e) => {
                              // Fallback for missing logos
                              const target = e.target as HTMLImageElement;
                              if (target && target.parentElement) {
                                target.style.display = 'none';
                                target.parentElement.innerHTML = `
                                  <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#258535] to-[#1a6329] text-white rounded-xl font-bold text-lg">
                                    ${company.name.charAt(0)}
                                  </div>
                                `;
                              }
                            }}
                          />
                        </div>
                      </div>

                      {/* Company Info */}
                      <div className="flex-1 flex flex-col justify-between min-h-0">
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#258535] transition-colors duration-300 line-clamp-3 leading-tight">
                          {company.name}
                        </h3>
                        </div>
                        <div className="flex items-center justify-center text-[#258535] font-medium group-hover:text-[#1a6329] transition-colors duration-300 mt-auto">
                          <span className="text-sm">Visit Website</span>
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-24">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Join Our References
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Contact us to develop custom solutions for your project and establish a long-term business partnership. 
                Our experienced team is ready to provide the most suitable solution for you.
              </p>
              <div className="flex justify-center">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#258535] hover:bg-[#1a6329] text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Get in Touch
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
        </div>
        </section>
      </main>
    </>
  )
} 