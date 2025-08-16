'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface QuoteFormProps {
  isOpen: boolean
  onClose: () => void
  productName?: string
}

export function QuoteForm({ isOpen, onClose, productName }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isKvkkOpen, setIsKvkkOpen] = useState(false)
  const kvkkScrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (isKvkkOpen && kvkkScrollRef.current) {
      kvkkScrollRef.current.scrollTop = 0
    }
    // Lock background scroll when KVKK modal is open
    const html = document.documentElement
    const body = document.body
    if (isKvkkOpen) {
      const prevHtmlOverflow = html.style.overflow
      const prevBodyOverflow = body.style.overflow
      const prevBodyPosition = body.style.position
      const prevBodyTop = body.style.top
      const prevBodyWidth = body.style.width
      const scrollY = window.scrollY
      html.style.overflow = 'hidden'
      body.style.overflow = 'hidden'
      body.style.position = 'fixed'
      body.style.top = `-${scrollY}px`
      body.style.width = '100%'
      return () => {
        html.style.overflow = prevHtmlOverflow
        body.style.overflow = prevBodyOverflow
        body.style.position = prevBodyPosition
        body.style.top = prevBodyTop
        body.style.width = prevBodyWidth
        window.scrollTo(0, scrollY)
      }
    }
    return
  }, [isKvkkOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: `Teklif Talebi: ${productName || 'Genel'}`,
          type: 'quote'
        }),
      })

      if (response.ok) {
        // Form başarıyla gönderildi
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: ''
        })
        onClose()
        alert('Teklif talebiniz başarıyla gönderildi. En kısa sürede size dönüş yapacağız.')
      } else {
        throw new Error('Form gönderimi başarısız')
      }
    } catch (error) {
      console.error('Form gönderimi hatası:', error)
      alert('Teklif talebi gönderilirken bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-[9998] transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Form Container */}
      <div className={`fixed top-0 right-0 h-full z-[9999] bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } w-full md:w-1/2`}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-8">
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="MESCO Logo"
              width={280}
              height={70}
              className="h-16 w-auto"
            />
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors -mr-2"
          >
            <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Content */}
        <div className="px-8 py-4 h-full overflow-y-auto">
          <div className="max-w-full md:max-w-xl">
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Fields - NO LABELS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-3xl focus:ring-0 focus:border-[#258535] outline-none transition-colors text-base"
                    placeholder="Adınız *"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-3xl focus:ring-0 focus:border-[#258535] outline-none transition-colors text-base"
                    placeholder="Soyadınız *"
                  />
                </div>
              </div>

              {/* Phone and Email - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                                            <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-3xl focus:ring-0 focus:border-[#258535] outline-none transition-colors text-base"
                            placeholder="Telefon Numarası"
                          />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-3xl focus:ring-0 focus:border-[#258535] outline-none transition-colors text-base"
                    placeholder="E-Posta *"
                  />
                </div>
              </div>

              {/* Message - NO LABEL */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-3xl focus:ring-0 focus:border-[#258535] outline-none transition-colors resize-none text-base"
                  placeholder="Mesajınızı buraya yazınız..."
                />
              </div>

              {/* KVKK and Submit Button - Side by Side */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="kvkk"
                    required
                    className="mt-1 h-4 w-4 appearance-none rounded-full border border-gray-300 checked:bg-[#258535] checked:border-[#258535] outline-none focus:ring-0 transition-colors"
                  />
                  <p className="text-sm text-gray-600">
                    <button
                      type="button"
                      onClick={() => setIsKvkkOpen(true)}
                      className="font-medium text-gray-700 hover:text-[#258535] cursor-pointer transition-colors"
                    >
                      KVKK - Gizlilik Şartları'nı
                    </button>
                    <label htmlFor="kvkk" className="ml-1 cursor-pointer"> okudum ve kabul ediyorum.</label>
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="self-end md:self-auto bg-[#258535] hover:bg-[#1e6b2a] text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-base whitespace-nowrap mt-4 md:mt-0"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      Gönder
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* KVKK Modal */}
      {isKvkkOpen && (
        <>
          <div className="fixed inset-0 bg-black/80 z-[10000]" onClick={() => setIsKvkkOpen(false)} />
          <div ref={kvkkScrollRef} className="fixed inset-0 z-[10001] flex items-start justify-center p-2 md:p-6 overflow-y-auto overscroll-contain">
            <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-4 md:p-8">
              <button
                type="button"
                onClick={() => setIsKvkkOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
                aria-label="Kapat"
              >
                <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">KİŞİSEL VERİLERİN KORUNMASI</h2>
                  <h2 className="text-2xl md:text-3xl font-bold mt-2">İNTERNET SİTESİ ÇEREZ POLİTİKASI</h2>
                </div>
                <p>
                  Kişisel verileriniz; veri sorumlusu olarak Mesco Teknik tarafından işletilen (www.mescoteknik.com) internet
                  sitesini ziyaret edenlerin gizliliğini korumak, Kurumumuzun önde gelen ilkelerindendir. Bu Çerez Kullanımı
                  Politikası (“Politika”), tüm web sitesi ziyaretçilerimize ve kullanıcılarımıza hangi tür çerezlerin hangi
                  koşullarda kullanıldığını açıklamaktadır.
                </p>
                <p>
                  Çerezler, bilgisayarınız ya da mobil cihazınız üzerinden ziyaret ettiğiniz internet siteleri tarafından
                  cihazınıza veya ağ sunucusuna depolanan küçük metin dosyalarıdır.
                </p>
                <p>
                  Genellikle ziyaret ettiğiniz internet sitesini kullanmanız sırasında size kişiselleştirilmiş bir deneyim sunmak,
                  sunulan hizmetleri geliştirmek ve deneyiminizi iyileştirmek için kullanılır ve bir internet sitesinde gezinirken
                  kullanım kolaylığına katkıda bulunabilir. Çerez kullanılmasını tercih etmezseniz tarayıcınızın ayarlarından
                  çerezleri silebilir ya da engelleyebilirsiniz. Ancak bunun internet sitemizi kullanımınızı etkileyebileceğini
                  hatırlatmak isteriz. Tarayıcınızdan çerez ayarlarınızı değiştirmediğiniz sürece bu sitede çerez kullanımını kabul
                  ettiğinizi varsayacağız.
                </p>
                <h4 className="text-lg md:text-xl font-semibold">1. ÇEREZLERDE HANGİ TÜR VERİLER İŞLENİR?</h4>
                <p>
                  İnternet sitelerinde yer alan çerezlerde, türüne bağlı olarak, siteyi ziyaret ettiğiniz cihazdaki tarama ve
                  kullanım tercihlerinize ilişkin veriler toplanmaktadır. Bu veriler, eriştiğiniz sayfalar, incelediğiniz hizmet ve
                  ürünler, tercih ettiğiniz dil seçeneği ve diğer tercihlerinize dair bilgileri kapsamaktadır.
                </p>
                <h4 className="text-lg md:text-xl font-semibold">2. ÇEREZ NEDİR ve KULLANIM AMAÇLARI NELERDİR?</h4>
                <p>
                  Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcılar aracılığıyla cihazınıza veya ağ sunucusuna
                  depolanan küçük metin dosyalarıdır. Sitede tercih ettiğiniz dil ve diğer ayarları içeren bu küçük metin dosyaları,
                  siteye bir sonraki ziyaretinizde tercihlerinizin hatırlanmasına ve sitedeki deneyiminizi iyileştirmek için
                  hizmetlerimizde geliştirmeler yapmamıza yardımcı olur. Böylece bir sonraki ziyaretinizde daha iyi ve
                  kişiselleştirilmiş bir kullanım deneyimi yaşayabilirsiniz.
                </p>
                <p>İnternet Sitemizde çerez kullanılmasının başlıca amaçları şunlardır:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>İnternet sitesinin işlevselliğini ve performansını artırmak yoluyla sizlere sunulan hizmetleri geliştirmek,</li>
                  <li>İnternet sitesini iyileştirmek ve yeni özellikler sunmak ve bu özellikleri tercihlere göre kişiselleştirmek,</li>
                  <li>İnternet sitesinin, sizin ve Kurum’un hukuki ve ticari güvenliğinin teminini sağlamak, sahte işlemleri önlemek,</li>
                  <li>İlgili mevzuattan doğan yükümlülükleri yerine getirmek.</li>
                </ul>
                <h4 className="text-lg md:text-xl font-semibold">3. İNTERNET SİTEMİZDE KULLANILAN ÇEREZ TÜRLERİ</h4>
                <p className="font-semibold">3.1. Oturum Çerezleri</p>
                <p>
                  Ziyaretiniz süresince internet sitesinin düzgün bir şekilde çalışmasını temin eder. Güvenlik, süreklilik ve
                  oturum yönetimi amacıyla kullanılırlar. Tarayıcı kapatıldığında silinirler.
                </p>
                <p className="font-semibold">3.2. Kalıcı Çerezler</p>
                <p>
                  Tercihlerinizi hatırlamak için kullanılır ve tarayıcınızda depolanır. Silinene kadar saklanır. Aynı cihazdan
                  yeniden giriş yaptığınızda sizi tanır ve içerikleri buna göre sunar.
                </p>
                <p className="font-semibold">3.3. Zorunlu/Teknik Çerezler</p>
                <p>
                  Sitenin düzgün çalışabilmesi için gereklidir. Güvenli bölümlere erişim, site özelliklerini kullanma gibi işlevleri
                  sağlar.
                </p>
                <p className="font-semibold">3.4. Analitik Çerezler</p>
                <p>
                  Sitenin kullanım şekli, ziyaret sıklığı gibi bilgileri toplar. Performans iyileştirme ve kullanım eğilimlerini
                  belirlemede kullanılır.
                </p>
                <p className="font-semibold">3.5. İşlevsel/Fonksiyonel Çerezler</p>
                <p>
                  Ziyaretçinin yaptığı seçimleri hatırlar. Kullanım kolaylığı sağlar.
                </p>
                <p className="font-semibold">3.6. Hedefleme/Reklam Çerezleri</p>
                <p>
                  Reklamların etkinliğini ölçer ve ilgi alanına uygun reklamlar sunar. Aynı reklamın kısa sürede tekrar
                  gösterilmesini engeller.
                </p>
                <h4 className="text-lg md:text-xl font-semibold">4. ÇEREZ TERCİHLERİ NASIL YÖNETİLİR?</h4>
                <p>
                  Tarayıcınızın ayarlarından çerezleri kabul edebilir, reddedebilir veya silebilirsiniz. Tarayıcı bazlı yönetim
                  linkleri:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Google Chrome | <a className="text-[#258535] underline" href="http://www.google.com/support/chrome/bin/answer.py?hl=en&answer=95647" target="_blank" rel="noopener noreferrer">http://www.google.com/support/chrome/bin/answer.py?hl=en&answer=95647</a></li>
                  <li>Internet Explorer | <a className="text-[#258535] underline" href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies</a></li>
                  <li>Mozilla Firefox | <a className="text-[#258535] underline" href="http://support.mozilla.com/en-US/kb/Cookies" target="_blank" rel="noopener noreferrer">http://support.mozilla.com/en-US/kb/Cookies</a></li>
                  <li>Opera | <a className="text-[#258535] underline" href="http://www.opera.com/browser/tutorials/security/privacy/" target="_blank" rel="noopener noreferrer">http://www.opera.com/browser/tutorials/security/privacy/</a></li>
                  <li>Safari | <a className="text-[#258535] underline" href="https://support.apple.com/kb/ph19214?" target="_blank" rel="noopener noreferrer">https://support.apple.com/kb/ph19214?</a></li>
                  <li>Microsoft Edge | <a className="text-[#258535] underline" href="https://support.microsoft.com/tr-tr/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/tr-tr/help/17442/windows-internet-explorer-delete-manage-cookies</a></li>
                </ul>
                <h4 className="text-lg md:text-xl font-semibold">5. İNTERNET SİTESİ GİZLİLİK POLİTİKASI’NIN YÜRÜRLÜĞÜ</h4>
                <p>
                  İnternet Sitesi Gizlilik Politikası ………………………………….. tarihindedir. Politikanın yenilenmesi halinde yürürlük tarihi
                  güncellenecektir. Gizlilik Politikası Kurum’un internet sitesinde (www.mescoteknik.com) yayımlanır ve talep eden
                  kişilere sunulur.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}