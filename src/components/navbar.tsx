'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useParams, usePathname } from 'next/navigation'
import { getLocalizedPath, RouteKey, routes } from '@/config/routes'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { menuItems } from '@/config/menu'
import { getEnglishUrl, getTurkishUrl } from '@/config/urlMappings'
import { motion, AnimatePresence } from 'framer-motion'

// Custom hook for body overflow management
const useBodyOverflow = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden scroll'
      document.body.style.height = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.height = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.height = ''
    }
  }, [isOpen])
}

export function Navbar() {
  const t = useTranslations('Navigation')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false)
  const [isMobileProductsMenuOpen, setIsMobileProductsMenuOpen] = useState(false)
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null)
  const [activeMobileNestedSubmenu, setActiveMobileNestedSubmenu] = useState<string | null>(null)
  const productsMenuRef = useRef<HTMLDivElement>(null)
  const params = useParams()
  const pathname = usePathname()
  const locale = params.locale as string
  const { isVisible } = useScrollDirection()
  const [isAtTop, setIsAtTop] = useState(true)

  const [navState, setNavState] = useState({
    isMobileMenuOpen: false,
    isProductsMenuOpen: false,
    isScrollingUp: true,
    isMobileProductsMenuOpen: false
  })

  const { 
    isMobileMenuOpen: stateIsMobileMenuOpen, 
    isProductsMenuOpen: stateIsProductsMenuOpen, 
    isScrollingUp: stateIsScrollingUp,
    isMobileProductsMenuOpen: stateIsMobileProductsMenuOpen 
  } = navState

  // Use custom hook for body overflow
  useBodyOverflow(stateIsMobileMenuOpen)

  // Memoized click outside handler
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (productsMenuRef.current && !productsMenuRef.current.contains(event.target as Node)) {
      setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))
    }
  }, [])

  // Optimized click outside effect
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [handleClickOutside])

  // Optimized scroll position effect
  useEffect(() => {
    if (!stateIsScrollingUp) {
      setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))
    }
  }, [stateIsScrollingUp])

  // Memoized event handlers
  const handleProductsMouseEnter = useCallback(() => {
    if (stateIsScrollingUp) {
      setNavState(prev => ({ ...prev, isProductsMenuOpen: true }))
    }
  }, [stateIsScrollingUp])

  const handleProductsMouseLeave = useCallback(() => {
    setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setNavState(prev => ({ ...prev, isMobileMenuOpen: !prev.isMobileMenuOpen }))
  }, [])

  // Get the current route key from pathname
  const getCurrentRouteKey = (): RouteKey => {
    const path = pathname.split('/')[2] || ''
    const currentLocale = locale as keyof typeof routes
    const routeEntries = Object.entries(routes[currentLocale])
    const matchingRoute = routeEntries.find(([, value]) => value === path)
    return (matchingRoute?.[0] as RouteKey) || 'home'
  }

  // Get localized path for language switching
  const getLocalizedFullPath = (targetLocale: string) => {
    const pathParts = pathname.split('/')
    const currentKey = getCurrentRouteKey()
    
    // Handle product pages
    if (pathParts[2] === 'urunler' || pathParts[2] === 'products') {
      const productPath = pathParts.slice(3)
      const targetBase = targetLocale === 'tr' ? 'urunler' : 'products'
      
      // URL parçalarını çevir
      const translatedParts = productPath.map(part => {
        if (targetLocale === 'tr') {
          return getTurkishUrl(part)
        } else {
          return getEnglishUrl(part)
        }
      })
      
      return `/${targetLocale}/${targetBase}${translatedParts.length > 0 ? '/' + translatedParts.join('/') : ''}`
    }
    
    // Handle other pages
    const localizedPath = getLocalizedPath(targetLocale, currentKey)
    return `/${targetLocale}${localizedPath ? '/' + localizedPath : ''}`
  }

  // Add scroll position check
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 10)
    }

    handleScroll() // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className={`fixed top-0 left-0 w-[100%] z-[999] bg-white transform transition-all duration-500 ease-out
        ${!isVisible && !navState.isMobileMenuOpen ? '-translate-y-full shadow-none' : 'translate-y-0'}
        ${isAtTop ? '' : 'shadow-[0_1px_6px_rgba(0,0,0,0.05)]'}`}
    >
      <header className="bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-24 [@media(min-width:834px)_and_(max-width:1199px)]:px-12">
          <div className="flex items-center justify-between h-24 lg:h-28 [@media(min-width:834px)_and_(max-width:1199px)]:h-32">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center [@media(min-width:834px)_and_(max-width:1199px)]:w-48">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={240}
                height={64}
                className="h-14 sm:h-16 lg:h-16 w-auto [@media(min-width:834px)_and_(max-width:1199px)]:h-14"
                priority
              />
            </Link>

            {/* Navigation Links and Language Selector */}
            <div className="flex items-center h-full">
              {/* Navigation Links */}
              <nav className="hidden lg:flex [@media(min-width:834px)_and_(max-width:1199px)]:flex items-center space-x-8 xl:space-x-12 mr-8 xl:mr-12 [@media(min-width:834px)_and_(max-width:1199px)]:mr-8 h-full">
                <Link
                  href={`/${locale}`}
                  className="text-gray-700 hover:text-[#258535] transition-colors font-normal text-base h-full flex items-center whitespace-nowrap"
                >
                  {t('home')}
                </Link>
                <Link
                  href={`/${locale}/${getLocalizedPath(locale, 'corporate')}`}
                  className="text-gray-700 hover:text-[#258535] transition-colors font-normal text-base h-full flex items-center"
                >
                  {t('corporate')}
                </Link>
                <div 
                  className="relative h-full flex items-center group" 
                  ref={productsMenuRef}
                >
                  <div
                    className="text-gray-700 hover:text-[#258535] transition-colors font-normal text-base flex items-center gap-1 h-full cursor-pointer"
                    onMouseEnter={handleProductsMouseEnter}
                    onMouseLeave={handleProductsMouseLeave}
                    role="button"
                    aria-expanded={stateIsProductsMenuOpen}
                    aria-controls="products-dropdown"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setNavState(prev => ({ ...prev, isProductsMenuOpen: !prev.isProductsMenuOpen }));
                      }
                    }}
                  >
                    {t('products')}
                    <svg
                      className={`w-4 h-4 transition-transform ${stateIsProductsMenuOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {/* Products Dropdown Menu */}
                  <AnimatePresence>
                    {stateIsProductsMenuOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed left-0 right-0 top-[112px] mx-auto w-[90vw] max-w-[1200px] bg-white rounded-b-lg shadow-xl py-6 z-[1000]"
                        onMouseEnter={handleProductsMouseEnter}
                        onMouseLeave={handleProductsMouseLeave}
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">
                          {/* Laminasyon ve Rotor/Stator Grubu */}
                          <div>
                            <div className="font-medium text-gray-900 mb-4">
                              {locale === 'tr' ? 'Laminasyon ve Rotor/Stator' : 'Lamination and Rotor/Stator'}
                            </div>
                            <div className="space-y-2">
                              <div className="group">
                                <div className="text-gray-700 font-medium mb-2">{menuItems[locale as keyof typeof menuItems].products.items[0].title}</div>
                                {menuItems[locale as keyof typeof menuItems].products.items[0].subItems?.map((item, idx) => (
                                  <Link 
                                    key={idx} 
                                    href={item.href || '#'} 
                                    className="block text-gray-600 hover:text-[#258535] py-1 text-sm"
                                    onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                                  >
                                    {item.title}
                                  </Link>
                                ))}
                              </div>
                              <Link 
                                href={menuItems[locale as keyof typeof menuItems].products.items[1].href || '#'} 
                                className="block text-gray-600 hover:text-[#258535] py-1"
                                onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                              >
                                {menuItems[locale as keyof typeof menuItems].products.items[1].title}
                              </Link>
                              <Link 
                                href={menuItems[locale as keyof typeof menuItems].products.items[2].href || '#'} 
                                className="block text-gray-600 hover:text-[#258535] py-1"
                                onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                              >
                                {menuItems[locale as keyof typeof menuItems].products.items[2].title}
                              </Link>
                              <Link 
                                href={menuItems[locale as keyof typeof menuItems].products.items[3].href || '#'} 
                                className="block text-gray-600 hover:text-[#258535] py-1"
                                onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                              >
                                {menuItems[locale as keyof typeof menuItems].products.items[3].title}
                              </Link>
                            </div>
                          </div>

                          {/* Pres Besleme Sistemleri */}
                          <div>
                            <div className="font-medium text-gray-900 mb-4">
                              {locale === 'tr' ? 'Pres Besleme Sistemleri' : 'Press Feeding Systems'}
                            </div>
                            <div className="space-y-2">
                              <div className="group">
                                <div className="text-gray-700 font-medium mb-2">
                                  {locale === 'tr' ? 'Rulo Açıcılar' : 'Decoilers'}
                                </div>
                                {menuItems[locale as keyof typeof menuItems].products.items[4].subItems?.[0].subItems?.map((item, idx) => (
                                  <Link 
                                    key={idx} 
                                    href={item.href || '#'} 
                                    className="block text-gray-600 hover:text-[#258535] py-1 text-sm"
                                    onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                                  >
                                    {item.title}
                                  </Link>
                                ))}
                              </div>
                              <div className="group">
                                <div className="text-gray-700 font-medium mb-2">
                                  {locale === 'tr' ? 'Doğrultmalı Servo Sürücü Sistemleri' : 'Servo Feeder with Straightener'}
                                </div>
                                {menuItems[locale as keyof typeof menuItems].products.items[4].subItems?.[1].subItems?.map((item, idx) => (
                                  <Link 
                                    key={idx} 
                                    href={item.href || '#'} 
                                    className="block text-gray-600 hover:text-[#258535] py-1 text-sm"
                                    onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                                  >
                                    {item.title}
                                  </Link>
                                ))}
                              </div>
                              <div className="group">
                                <div className="text-gray-700 font-medium mb-2">
                                  {locale === 'tr' ? 'Sürücü Çözümleri' : 'Press Servo Feeders'}
                                </div>
                                {menuItems[locale as keyof typeof menuItems].products.items[4].subItems?.[2].subItems?.map((item, idx) => (
                                  <Link 
                                    key={idx} 
                                    href={item.href || '#'} 
                                    className="block text-gray-600 hover:text-[#258535] py-1 text-sm"
                                    onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                                  >
                                    {item.title}
                                  </Link>
                                ))}
                              </div>
                              <div className="group">
                                <div className="text-gray-700 font-medium mb-2">
                                  {locale === 'tr' ? 'Kompakt Pres Besleme Sistemleri' : 'Compact Press Feeding Systems'}
                                </div>
                                {menuItems[locale as keyof typeof menuItems].products.items[4].subItems?.[3].subItems?.map((item, idx) => (
                              <Link 
                                    key={idx} 
                                    href={item.href || '#'} 
                                    className="block text-gray-600 hover:text-[#258535] py-1 text-sm"
                                onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                              >
                                    {item.title}
                              </Link>
                                ))}
                              </div>
                              <Link 
                                href={menuItems[locale as keyof typeof menuItems].products.items[4].subItems?.[4].href || '#'} 
                                className="block text-gray-600 hover:text-[#258535] py-1"
                                onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                              >
                                {locale === 'tr' ? 'Rulo Sac Açma – Doğrultma ve Sürme Grubu' : 'Decoilers – Straightener & Feeder System'}
                              </Link>
                              <Link 
                                href={menuItems[locale as keyof typeof menuItems].products.items[4].subItems?.[5].href || '#'} 
                                className="block text-gray-600 hover:text-[#258535] py-1"
                                onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                              >
                                {locale === 'tr' ? 'Zigzag Sürücü Sistemi' : 'Zigzag Feeding System'}
                              </Link>
                            </div>
                          </div>

                          {/* Üretim Hatları */}
                          <div>
                            <div className="font-medium text-gray-900 mb-4">
                              {locale === 'tr' ? 'Üretim Hatları' : 'Production Lines'}
                            </div>
                            <div className="space-y-2">
                              <Link 
                                href={menuItems[locale as keyof typeof menuItems].products.items[5].href || '#'} 
                                className="block text-gray-600 hover:text-[#258535] py-1"
                                onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                              >
                                {menuItems[locale as keyof typeof menuItems].products.items[5].title}
                              </Link>
                              <Link 
                                href={menuItems[locale as keyof typeof menuItems].products.items[6].href || '#'} 
                                className="block text-gray-600 hover:text-[#258535] py-1"
                                onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                              >
                                {menuItems[locale as keyof typeof menuItems].products.items[6].title}
                              </Link>
                              <Link 
                                href={menuItems[locale as keyof typeof menuItems].products.items[7].href || '#'} 
                                className="block text-gray-600 hover:text-[#258535] py-1"
                                onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                              >
                                {menuItems[locale as keyof typeof menuItems].products.items[7].title}
                              </Link>
                              <Link 
                                href={menuItems[locale as keyof typeof menuItems].products.items[8].href || '#'} 
                                className="block text-gray-600 hover:text-[#258535] py-1"
                                onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                              >
                                {menuItems[locale as keyof typeof menuItems].products.items[8].title}
                              </Link>
                              <Link 
                                href={menuItems[locale as keyof typeof menuItems].products.items[9].href || '#'} 
                                className="block text-gray-600 hover:text-[#258535] py-1"
                                onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                              >
                                {menuItems[locale as keyof typeof menuItems].products.items[9].title}
                              </Link>
                              <Link 
                                href={menuItems[locale as keyof typeof menuItems].products.items[10].href || '#'} 
                                className="block text-gray-600 hover:text-[#258535] py-1"
                                onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                              >
                                {menuItems[locale as keyof typeof menuItems].products.items[10].title}
                              </Link>
                              <Link 
                                href={menuItems[locale as keyof typeof menuItems].products.items[11].href || '#'} 
                                className="block text-gray-600 hover:text-[#258535] py-1"
                                onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                              >
                                {menuItems[locale as keyof typeof menuItems].products.items[11].title}
                              </Link>
                              <Link 
                                href={menuItems[locale as keyof typeof menuItems].products.items[12].href || '#'} 
                                className="block text-gray-600 hover:text-[#258535] py-1"
                                onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                              >
                                {menuItems[locale as keyof typeof menuItems].products.items[12].title}
                              </Link>
                              <Link 
                                href={menuItems[locale as keyof typeof menuItems].products.items[13].href || '#'} 
                                className="block text-gray-600 hover:text-[#258535] py-1"
                                onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                              >
                                {menuItems[locale as keyof typeof menuItems].products.items[13].title}
                              </Link>
                              <Link 
                                href={menuItems[locale as keyof typeof menuItems].products.items[14].href || '#'} 
                                className="block text-gray-600 hover:text-[#258535] py-1"
                                onClick={() => setNavState(prev => ({ ...prev, isProductsMenuOpen: false }))}
                              >
                                {menuItems[locale as keyof typeof menuItems].products.items[14].title}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link
                  href={`/${locale}/${getLocalizedPath(locale, 'references')}`}
                  className="text-gray-700 hover:text-[#258535] transition-colors font-normal text-base h-full flex items-center"
                >
                  {t('references')}
                </Link>
                <Link
                  href={`/${locale}/${getLocalizedPath(locale, 'contact')}`}
                  className="text-gray-700 hover:text-[#258535] transition-colors font-normal text-base h-full flex items-center"
                >
                  {t('contact')}
                </Link>
              </nav>

              {/* Language Selector - Desktop */}
              <div className="relative hidden lg:block [@media(min-width:834px)_and_(max-width:1199px)]:block">
                <button className="flex items-center space-x-1 px-3 py-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-gray-300 w-[88px] group">
                  <span className="text-sm font-medium text-gray-700">
                    {locale === 'tr' ? (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 640 480">
                          <g fillRule="evenodd">
                            <path fill="#e30a17" d="M0 0h640v480H0z"/>
                            <path fill="#fff" d="M407 247.5c0 66.2-54.6 119.9-122 119.9s-122-53.7-122-120 54.6-119.8 122-119.8 122 53.7 122 119.9z"/>
                            <path fill="#e30a17" d="M413 247.5c0 53-43.6 95.9-97.5 95.9s-97.6-43-97.6-96 43.7-95.8 97.6-95.8 97.6 42.9 97.6 95.9z"/>
                            <path fill="#fff" d="m430.7 191.5-1 44.3-41.3 11.2 40.8 14.5-1 40.7 26.5-31.8 40.2 14-23.2-34.1 28.3-33.9-43.5 12-25.8-37z"/>
                          </g>
                        </svg>
                        TR
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 640 480">
                          <path fill="#012169" d="M0 0h640v480H0z"/>
                          <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"/>
                          <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
                          <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
                          <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
                        </svg>
                        EN
                      </span>
                    )}
                  </span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  
                  <div className="absolute right-0 mt-2 w-[88px] origin-top-right rounded-full bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-200 top-full">
                    <div className="py-1">
                      {locale === 'tr' ? (
                        <Link
                          href={getLocalizedFullPath('en')}
                          className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#258535] transition-colors duration-200 rounded-full"
                        >
                          <svg className="w-4 h-4 mr-2" viewBox="0 0 640 480">
                            <path fill="#012169" d="M0 0h640v480H0z"/>
                            <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"/>
                            <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
                            <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
                            <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
                          </svg>
                          EN
                        </Link>
                      ) : (
                        <Link
                          href={getLocalizedFullPath('tr')}
                          className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#258535] transition-colors duration-200 rounded-full"
                        >
                          <svg className="w-4 h-4 mr-2" viewBox="0 0 640 480">
                            <g fillRule="evenodd">
                              <path fill="#e30a17" d="M0 0h640v480H0z"/>
                              <path fill="#fff" d="M407 247.5c0 66.2-54.6 119.9-122 119.9s-122-53.7-122-120 54.6-119.8 122-119.8 122 53.7 122 119.9z"/>
                              <path fill="#e30a17" d="M413 247.5c0 53-43.6 95.9-97.5 95.9s-97.6-43-97.6-96 43.7-95.8 97.6-95.8 97.6 42.9 97.6 95.9z"/>
                              <path fill="#fff" d="m430.7 191.5-1 44.3-41.3 11.2 40.8 14.5-1 40.7 26.5-31.8 40.2 14-23.2-34.1 28.3-33.9-43.5 12-25.8-37z"/>
                            </g>
                          </svg>
                          TR
                        </Link>
                      )}
                    </div>
                  </div>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden [@media(min-width:834px)_and_(max-width:1199px)]:hidden">
                <button 
                  className="relative w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center transition-opacity duration-300 [@media(min-width:834px)_and_(max-width:1199px)]:w-20 [@media(min-width:834px)_and_(max-width:1199px)]:h-20 [@media(min-width:834px)_and_(max-width:1199px)]:-mr-6"
                  onClick={toggleMobileMenu}
                  aria-expanded={stateIsMobileMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label={stateIsMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                  <div className="relative w-7 h-5 [@media(min-width:834px)_and_(max-width:1199px)]:w-10 [@media(min-width:834px)_and_(max-width:1199px)]:h-8">
                    <span
                      className={`absolute left-0 w-full h-[2.5px] bg-gray-700 transform transition-all duration-500 ease-in-out
                        ${stateIsMobileMenuOpen 
                          ? 'top-[8px] rotate-[135deg]' 
                          : 'top-0 rotate-0'}`}
                    />
                    <span
                      className={`absolute left-0 w-full h-[2.5px] bg-gray-700 transform transition-all duration-200 ease-in-out
                        ${stateIsMobileMenuOpen 
                          ? 'opacity-0 scale-95' 
                          : 'opacity-100 scale-100'}`}
                      style={{ top: '50%', transform: 'translateY(-50%)' }}
                    />
                    <span
                      className={`absolute left-0 w-full h-[2.5px] bg-gray-700 transform transition-all duration-500 ease-in-out
                        ${stateIsMobileMenuOpen 
                          ? 'top-[8px] rotate-45' 
                          : 'top-[16px] rotate-0'}`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {stateIsMobileMenuOpen && (
          <motion.div 
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ 
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="lg:hidden [@media(min-width:834px)_and_(max-width:1199px)]:hidden w-[100%] overflow-hidden bg-white"
          >
            <div className="max-h-[calc(100vh-6rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
              <nav className="px-4 sm:px-6 pt-2 pb-3 [@media(min-width:834px)_and_(max-width:1199px)]:px-12 [@media(min-width:834px)_and_(max-width:1199px)]:pt-24">
                <div className="[@media(min-width:834px)_and_(max-width:1199px)]:max-w-[800px] [@media(min-width:834px)_and_(max-width:1199px)]:mx-auto space-y-2">
                  <Link
                    href={`/${locale}`}
                    className="block w-full py-2 text-gray-700 hover:text-[#258535] transition-colors font-normal text-base [@media(min-width:834px)_and_(max-width:1199px)]:text-2xl [@media(min-width:834px)_and_(max-width:1199px)]:py-4 [@media(min-width:834px)_and_(max-width:1199px)]:tracking-normal"
                    onClick={() => setNavState(prev => ({ ...prev, isMobileMenuOpen: false }))}
                  >
                    <span className="[@media(min-width:834px)_and_(max-width:1199px)]:inline-block">{t('home')}</span>
                  </Link>
                  <Link
                    href={`/${locale}/${getLocalizedPath(locale, 'corporate')}`}
                    className="block w-full py-2 text-gray-700 hover:text-[#258535] transition-colors font-normal text-base [@media(min-width:834px)_and_(max-width:1199px)]:text-2xl [@media(min-width:834px)_and_(max-width:1199px)]:py-4 [@media(min-width:834px)_and_(max-width:1199px)]:tracking-normal"
                    onClick={() => setNavState(prev => ({ ...prev, isMobileMenuOpen: false }))}
                  >
                    <span className="[@media(min-width:834px)_and_(max-width:1199px)]:inline-block">{t('corporate')}</span>
                  </Link>
                  <div className="block w-full">
                    <button
                      onClick={() => setNavState(prev => ({ ...prev, isMobileProductsMenuOpen: !prev.isMobileProductsMenuOpen }))}
                      className="w-full py-2 flex items-center justify-between text-gray-700 hover:text-[#258535] transition-colors font-normal text-base [@media(min-width:834px)_and_(max-width:1199px)]:text-2xl [@media(min-width:834px)_and_(max-width:1199px)]:py-4 [@media(min-width:834px)_and_(max-width:1199px)]:tracking-normal"
                    >
                      <span className="[@media(min-width:834px)_and_(max-width:1199px)]:inline-block">{t('products')}</span>
                      <svg
                        className={`w-5 h-5 [@media(min-width:834px)_and_(max-width:1199px)]:w-8 [@media(min-width:834px)_and_(max-width:1199px)]:h-8 transition-transform ${stateIsMobileProductsMenuOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence mode="wait">
                    {stateIsMobileProductsMenuOpen && (
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ 
                          duration: 0.5,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 bg-gray-50 rounded-lg">
                          {menuItems[locale as keyof typeof menuItems].products.items.map((item, index) => (
                            <div key={index} className="border-b border-gray-100 last:border-0">
                              <div
                                className="flex items-center justify-between p-4 text-gray-700 hover:text-[#258535] transition-colors font-normal text-base cursor-pointer"
                                onClick={() => {
                                  if (item.subItems && item.subItems.length > 0) {
                                    setActiveMobileSubmenu(activeMobileSubmenu === index.toString() ? null : index.toString())
                                  } else {
                                    window.location.href = item.href || '#'
                                    setNavState(prev => ({ ...prev, isMobileMenuOpen: false, isProductsMenuOpen: false }))
                                  }
                                }}
                              >
                                <span>{item.title}</span>
                                {item.subItems && item.subItems.length > 0 && (
                                  <svg
                                    className={`w-5 h-5 transition-transform ${activeMobileSubmenu === index.toString() ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                )}
                              </div>
                              {item.subItems && item.subItems.length > 0 && (
                                <AnimatePresence mode="wait">
                                  {activeMobileSubmenu === index.toString() && (
                                    <motion.div 
                                      key={index}
                                      initial={{ height: 0 }}
                                      animate={{ height: "auto" }}
                                      exit={{ height: 0 }}
                                      transition={{ 
                                        duration: 0.5,
                                        ease: [0.4, 0, 0.2, 1]
                                      }}
                                      className="overflow-hidden"
                                    >
                                      <div className="bg-white rounded-lg mx-4 mb-4">
                                        {item.subItems?.map((subItem, subIndex) => (
                                          <div key={subIndex} className="border-b border-gray-100 last:border-0">
                                            {subItem.subItems && subItem.subItems.length > 0 ? (
                                              <>
                                                <div
                                                  className="flex items-center justify-between p-3 text-gray-700 hover:text-[#258535] transition-colors font-normal text-sm cursor-pointer"
                                                  onClick={() => {
                                                    const nestedMenuId = `${index}-${subIndex}`
                                                    setActiveMobileNestedSubmenu(activeMobileNestedSubmenu === nestedMenuId ? null : nestedMenuId)
                                                  }}
                                                >
                                                  <span>{subItem.title}</span>
                                                  <svg
                                                    className={`w-4 h-4 transition-transform ${activeMobileNestedSubmenu === `${index}-${subIndex}` ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                  >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                  </svg>
                                                </div>
                                                <AnimatePresence mode="wait">
                                                  {activeMobileNestedSubmenu === `${index}-${subIndex}` && (
                                                    <motion.div 
                                                      initial={{ height: 0 }}
                                                      animate={{ height: "auto" }}
                                                      exit={{ height: 0 }}
                                                      transition={{ 
                                                        duration: 0.5,
                                                        ease: [0.4, 0, 0.2, 1]
                                                      }}
                                                      className="overflow-hidden"
                                                    >
                                                      <div className="bg-white rounded-lg mx-4 mb-4">
                                                        {subItem.subItems.map((nestedItem, nestedIndex) => (
                                                          <Link
                                                            key={nestedIndex}
                                                            href={nestedItem.href || '#'}
                                                            className="block p-3 text-gray-700 hover:text-[#258535] transition-colors font-normal text-sm"
                                                            onClick={() => {
                                                              setNavState(prev => ({ ...prev, isMobileMenuOpen: false, isProductsMenuOpen: false }))
                                                            }}
                                                          >
                                                            {nestedItem.title}
                                                          </Link>
                                                        ))}
                                                      </div>
                                                    </motion.div>
                                                  )}
                                                </AnimatePresence>
                                              </>
                                            ) : (
                                              <Link
                                                href={subItem.href || '#'}
                                                className="block p-3 text-gray-700 hover:text-[#258535] transition-colors font-normal text-sm"
                                                onClick={() => {
                                                  setNavState(prev => ({ ...prev, isMobileMenuOpen: false, isProductsMenuOpen: false }))
                                                }}
                                              >
                                                {subItem.title}
                                              </Link>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    </AnimatePresence>
                  </div>
                  <Link
                    href={`/${locale}/${getLocalizedPath(locale, 'references')}`}
                    className="block w-full py-2 text-gray-700 hover:text-[#258535] transition-colors font-normal text-base [@media(min-width:834px)_and_(max-width:1199px)]:text-2xl [@media(min-width:834px)_and_(max-width:1199px)]:py-4 [@media(min-width:834px)_and_(max-width:1199px)]:tracking-normal"
                    onClick={() => setNavState(prev => ({ ...prev, isMobileMenuOpen: false }))}
                  >
                    <span className="[@media(min-width:834px)_and_(max-width:1199px)]:inline-block">{t('references')}</span>
                  </Link>
                  <Link
                    href={`/${locale}/${getLocalizedPath(locale, 'contact')}`}
                    className="block w-full py-2 text-gray-700 hover:text-[#258535] transition-colors font-normal text-base [@media(min-width:834px)_and_(max-width:1199px)]:text-2xl [@media(min-width:834px)_and_(max-width:1199px)]:py-4 [@media(min-width:834px)_and_(max-width:1199px)]:tracking-normal"
                    onClick={() => setNavState(prev => ({ ...prev, isMobileMenuOpen: false }))}
                  >
                    <span className="[@media(min-width:834px)_and_(max-width:1199px)]:inline-block">{t('contact')}</span>
                  </Link>
                </div>
              </nav>

              {/* Mobile Language Selector */}
              <div className="mt-6 sm:mt-8 flex justify-center pb-4 sm:pb-6">
                {locale === 'tr' ? (
                  <Link
                    href={getLocalizedFullPath('en')}
                    className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-[#258535] transition-colors duration-200 rounded-full bg-gray-50 w-[88px]"
                    onClick={() => setNavState(prev => ({ ...prev, isMobileMenuOpen: false }))}
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 640 480">
                      <path fill="#012169" d="M0 0h640v480H0z"/>
                      <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"/>
                      <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
                      <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
                      <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
                    </svg>
                    EN
                  </Link>
                ) : (
                  <Link
                    href={getLocalizedFullPath('tr')}
                    className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-[#258535] transition-colors duration-200 rounded-full bg-gray-50 w-[88px]"
                    onClick={() => setNavState(prev => ({ ...prev, isMobileMenuOpen: false }))}
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 640 480">
                      <g fillRule="evenodd">
                        <path fill="#e30a17" d="M0 0h640v480H0z"/>
                        <path fill="#fff" d="M407 247.5c0 66.2-54.6 119.9-122 119.9s-122-53.7-122-120 54.6-119.8 122-119.8 122 53.7 122 119.9z"/>
                        <path fill="#e30a17" d="M413 247.5c0 53-43.6 95.9-97.5 95.9s-97.6-43-97.6-96 43.7-95.8 97.6-95.8 97.6 42.9 97.6 95.9z"/>
                        <path fill="#fff" d="m430.7 191.5-1 44.3-41.3 11.2 40.8 14.5-1 40.7 26.5-31.8 40.2 14-23.2-34.1 28.3-33.9-43.5 12-25.8-37z"/>
                      </g>
                    </svg>
                    TR
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}