'use client'

import { useEffect, useRef, useState } from 'react'
import { useParams } from 'next/navigation'

export function ContactForm() {
  const params = useParams()
  const locale = params.locale as string

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: ''
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [isKvkkOpen, setIsKvkkOpen] = useState(false)
  const kvkkScrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (isKvkkOpen && kvkkScrollRef.current) {
      kvkkScrollRef.current.scrollTop = 0
    }
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
  }, [isKvkkOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      setFormData({
        name: '',
        surname: '',
        email: '',
        phone: '',
        message: ''
      })

      // Reset form status after 3 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
    } catch {
      setStatus('error')
      // Reset error status after 3 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const placeholders = {
    tr: {
      name: 'İsim *',
      surname: 'Soyisim *',
      email: 'E-Mail *',
      phone: 'Telefon Numarası',
      message: 'Mesajınızı buraya yazınız *',
      submit: 'Gönder',
      success: 'Mesajınız başarıyla gönderildi!',
      error: 'Bir hata oluştu. Lütfen tekrar deneyin.'
    },
    en: {
      name: 'Name *',
      surname: 'Surname *',
      email: 'E-Mail *',
      phone: 'Phone Number',
      message: 'Write your message here *',
      submit: 'Send',
      success: 'Your message has been sent successfully!',
      error: 'An error occurred. Please try again.'
    }
  }

  const texts = placeholders[locale as keyof typeof placeholders]

  return (
    <>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder={texts.name}
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-6 py-4 rounded-full bg-white border border-gray-200 focus:outline-none focus:border-[#258535] transition-colors text-[15px] leading-[24px] font-normal"
        />
        <input
          type="text"
          name="surname"
          placeholder={texts.surname}
          value={formData.surname}
          onChange={handleChange}
          required
          className="w-full px-6 py-4 rounded-full bg-white border border-gray-200 focus:outline-none focus:border-[#258535] transition-colors text-[15px] leading-[24px] font-normal"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="email"
          name="email"
          placeholder={texts.email}
          value={formData.email}
          onChange={handleChange}
          required
          suppressHydrationWarning={true}
          className="w-full px-6 py-4 rounded-full bg-white border border-gray-200 focus:outline-none focus:border-[#258535] transition-colors text-[15px] leading-[24px] font-normal"
        />
        <input
          type="tel"
          name="phone"
          placeholder={texts.phone}
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-6 py-4 rounded-full bg-white border border-gray-200 focus:outline-none focus:border-[#258535] transition-colors text-[15px] leading-[24px] font-normal"
        />
      </div>
      <div className="space-y-2">
        <textarea
          name="message"
          placeholder={texts.message}
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-6 py-4 rounded-3xl bg-white border border-gray-200 focus:outline-none focus:border-[#258535] transition-colors resize-none text-[15px] leading-[24px] font-normal"
        />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="kvkk"
              required
              className="mt-1 h-4 w-4 aspect-square shrink-0 appearance-none rounded-full border border-gray-300 checked:bg-[#258535] checked:border-[#258535] outline-none focus:ring-0 transition-colors"
            />
            <p className="text-[15px] leading-[24px] text-[#606060]">
              {locale === 'en' ? (
                <>
                  <button
                    type="button"
                    onClick={() => setIsKvkkOpen(true)}
                    className="font-medium text-[#606060] hover:text-[#258535] cursor-pointer transition-colors"
                  >
                    Protection of Personal Data
                  </button>
                  <label htmlFor="kvkk" className="ml-1 cursor-pointer"> I have read and accept it</label>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setIsKvkkOpen(true)}
                    className="font-medium text-[#606060] hover:text-[#258535] cursor-pointer transition-colors"
                  >
                    KVKK - Gizlilik Şartları'nı
                  </button>
                  <label htmlFor="kvkk" className="ml-1 cursor-pointer"> okudum ve kabul ediyorum.</label>
                </>
              )}
            </p>
          </div>
          {status === 'success' && (
            <p className="text-[#258535] text-[15px] leading-[24px] font-normal">{texts.success}</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-[15px] leading-[24px] font-normal">{texts.error}</p>
          )}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="relative bg-[#258535] text-white py-3 w-full md:w-auto md:px-32 rounded-full overflow-hidden group text-[15px] leading-[24px] font-normal disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10">
              {status === 'loading' ? '...' : texts.submit}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a6126] to-[#1a6126] transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0" />
          </button>
        </div>
      </div>
    </form>
    {/* KVKK Modal */}
    {isKvkkOpen && (
      <>
        <div className="fixed inset-0 bg-black/80 z-[10000]" onClick={() => setIsKvkkOpen(false)} />
        <div className="fixed inset-0 z-[10001] flex items-start justify-center p-2 md:p-6 overflow-y-auto overscroll-contain">
          <div ref={kvkkScrollRef} className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-4 md:p-8">
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
              {locale === 'en' ? (
                <>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">PERSONAL DATA PROTECTION</h2>
                    <h2 className="text-2xl md:text-3xl font-bold mt-2">WEBSITE COOKIE POLICY</h2>
                  </div>
                  <p>Your personal data is protected as a fundamental principle by Mesco Teknik, the data controller, for visitors of the website (www.mescoteknik.com). This Cookie Usage Policy (“Policy”) explains the types of cookies used and the conditions under which they are used for all website visitors and users.</p>
                  <p>Cookies are small text files stored on your device or network server via browsers by websites you visit.</p>
                  <p>They are generally used to offer you a personalized experience during your use of the visited website, to improve the services offered, and to enhance your experience. If you prefer not to use cookies, you can delete or block them from your browser settings. However, please note that this may affect your use of our website. Unless you change your cookie settings from your browser, we will assume that you accept the use of cookies on this site.</p>
                  <h4 className="text-lg md:text-xl font-semibold">1. WHAT TYPE OF DATA IS PROCESSED IN COOKIES?</h4>
                  <p>The data collected in cookies on websites depends on their type, and it includes information regarding your browsing and usage preferences on the device you visit the site from. This data includes pages you access, services and products you review, your preferred language option, and other preferences.</p>
                  <h4 className="text-lg md:text-xl font-semibold">2. WHAT ARE COOKIES AND WHAT ARE THEIR PURPOSES?</h4>
                  <p>Cookies are small text files stored on your device or network server via browsers by websites you visit. These small text files, which include your preferred language and other settings, help us to remember your preferences during your next visit to the site and to make improvements in our services to enhance your experience. Thus, you can have a better and more personalized usage experience during your next visit.</p>
                  <p>The main purposes of using cookies on our website are listed below:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>To improve the services offered to you by increasing the functionality and performance of the website,</li>
                    <li>To enhance the website and to offer new features through the website and to personalize the offered features according to your preferences,</li>
                    <li>To ensure the legal and commercial security of the website, you, and the Institution, and to prevent fraudulent transactions through the website,</li>
                    <li>To fulfill our legal and contractual obligations, including applicable laws and regulations.</li>
                  </ul>
                  <h4 className="text-lg md:text-xl font-semibold">3. TYPES OF COOKIES USED ON OUR WEBSITE</h4>
                  <p className="font-semibold">3.1. Session Cookies</p>
                  <p>Session cookies ensure the proper functioning of the website during your visit. They are used for purposes such as ensuring the security and continuity of our sites and your visit. Session cookies are temporary cookies and are deleted when you close your browser.</p>
                  <p className="font-semibold">3.2. Persistent Cookies</p>
                  <p>These types of cookies are used to remember your preferences and are stored on your device via browsers. Persistent cookies remain on your device even after you close your browser or restart your computer until you delete them from your browser settings.</p>
                  <p className="font-semibold">3.3. Mandatory/Technical Cookies</p>
                  <p>These are mandatory cookies for the proper functioning of the website you visit. They allow access to secure areas of the website, use its features, and navigate on it.</p>
                  <p className="font-semibold">3.4. Analytical Cookies</p>
                  <p>These cookies collect information about the way the website is used, the frequency and number of visits, and show how visitors move around the site. They help improve performance and determine trends. They do not contain data that can identify visitor identities.</p>
                  <p className="font-semibold">3.5. Functional Cookies</p>
                  <p>These cookies remember the choices the visitor makes within the site and provide convenience for the next visit.</p>
                  <p className="font-semibold">3.6. Targeting/Advertising Cookies</p>
                  <p>These cookies measure the effectiveness of the advertisements presented to visitors and calculate how many times the advertisements are displayed. They present advertisements tailored to visitors’ interests and prevent the same advertisement from being shown repeatedly in a short period.</p>
                  <h4 className="text-lg md:text-xl font-semibold">4. HOW TO MANAGE COOKIE PREFERENCES?</h4>
                  <p>You can change your preferences regarding the use of cookies or block/delete cookies by changing your browser settings. Many browsers provide options to control cookies, and it is also possible to delete previously saved cookies from your browser.</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Google Chrome | <a className="text-[#258535] underline" href="http://www.google.com/support/chrome/bin/answer.py?hl=en&answer=95647" target="_blank" rel="noopener noreferrer">http://www.google.com/support/chrome/bin/answer.py?hl=en&answer=95647</a></li>
                    <li>Internet Explorer | <a className="text-[#258535] underline" href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies</a></li>
                    <li>Mozilla Firefox | <a className="text-[#258535] underline" href="http://support.mozilla.com/en-US/kb/Cookies" target="_blank" rel="noopener noreferrer">http://support.mozilla.com/en-US/kb/Cookies</a></li>
                    <li>Opera | <a className="text-[#258535] underline" href="http://www.opera.com/browser/tutorials/security/privacy/" target="_blank" rel="noopener noreferrer">http://www.opera.com/browser/tutorials/security/privacy/</a></li>
                    <li>Safari | <a className="text-[#258535] underline" href="https://support.apple.com/kb/ph19214?" target="_blank" rel="noopener noreferrer">https://support.apple.com/kb/ph19214?</a></li>
                    <li>Microsoft Edge | <a className="text-[#258535] underline" href="https://support.microsoft.com/tr-tr/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/tr-tr/help/17442/windows-internet-explorer-delete-manage-cookies</a></li>
                  </ul>
                  <h4 className="text-lg md:text-xl font-semibold">5. EFFECTIVENESS OF THE WEBSITE PRIVACY POLICY</h4>
                  <p>The Website Privacy Policy is dated ........................................ If all or certain articles of the Policy are renewed, the effective date of the Policy will be updated. The Privacy Policy is published on the Institution’s website (www.mescoteknik.com) and made available to relevant persons upon request.</p>
                </>
              ) : (
                <>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">KİŞİSEL VERİLERİN KORUNMASI</h2>
                    <h2 className="text-2xl md:text-3xl font-bold mt-2">İNTERNET SİTESİ ÇEREZ POLİTİKASI</h2>
                  </div>
                  <p>Kişisel verileriniz; veri sorumlusu olarak Mesco Teknik tarafından işletilen (www.mescoteknik.com) internet sitesini ziyaret edenlerin gizliliğini korumak, Kurumumuzun önde gelen ilkelerindendir. Bu Çerez Kullanımı Politikası (“Politika”), tüm web sitesi ziyaretçilerimize ve kullanıcılarımıza hangi tür çerezlerin hangi koşullarda kullanıldığını açıklamaktadır.</p>
                  <p>Çerezler, bilgisayarınız ya da mobil cihazınız üzerinden ziyaret ettiğiniz internet siteleri tarafından cihazınıza veya ağ sunucusuna depolanan küçük metin dosyalarıdır.</p>
                  <p>Genellikle ziyaret ettiğiniz internet sitesini kullanmanız sırasında size kişiselleştirilmiş bir deneyim sunmak, sunulan hizmetleri geliştirmek ve deneyiminizi iyileştirmek için kullanılır ve bir internet sitesinde gezinirken kullanım kolaylığına katkıda bulunabilir. Çerez kullanılmasını tercih etmezseniz tarayıcınızın ayarlarından çerezleri silebilir ya da engelleyebilirsiniz. Ancak bunun internet sitemizi kullanımınızı etkileyebileceğini hatırlatmak isteriz. Tarayıcınızdan çerez ayarlarınızı değiştirmediğiniz sürece bu sitede çerez kullanımını kabul ettiğinizi varsayacağız.</p>
                  <h4 className="text-lg md:text-xl font-semibold">1. ÇEREZLERDE HANGİ TÜR VERİLER İŞLENİR?</h4>
                  <p>İnternet sitelerinde yer alan çerezlerde, türüne bağlı olarak, siteyi ziyaret ettiğiniz cihazdaki tarama ve kullanım tercihlerinize ilişkin veriler toplanmaktadır. Bu veriler, eriştiğiniz sayfalar, incelediğiniz hizmet ve ürünler, tercih ettiğiniz dil seçeneği ve diğer tercihlerinize dair bilgileri kapsamaktadır.</p>
                  <h4 className="text-lg md:text-xl font-semibold">2. ÇEREZ NEDİR ve KULLANIM AMAÇLARI NELERDİR?</h4>
                  <p>Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcılar aracılığıyla cihazınıza veya ağ sunucusuna depolanan küçük metin dosyalarıdır. Sitede tercih ettiğiniz dil ve diğer ayarları içeren bu küçük metin dosyaları, siteye bir sonraki ziyaretinizde tercihlerinizin hatırlanmasına ve sitedeki deneyiminizi iyileştirmek için hizmetlerimizde geliştirmeler yapmamıza yardımcı olur. Böylece bir sonraki ziyaretinizde daha iyi ve kişiselleştirilmiş bir kullanım deneyimi yaşayabilirsiniz.</p>
                  <p>İnternet Sitemizde çerez kullanılmasının başlıca amaçları şunlardır:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>İnternet sitesinin işlevselliğini ve performansını artırmak yoluyla sizlere sunulan hizmetleri geliştirmek,</li>
                    <li>İnternet sitesini iyileştirmek ve yeni özellikler sunmak ve bu özellikleri tercihlere göre kişiselleştirmek,</li>
                    <li>İnternet sitesinin, sizin ve Kurum’un hukuki ve ticari güvenliğinin teminini sağlamak, sahte işlemleri önlemek,</li>
                    <li>İlgili mevzuattan doğan yükümlülükleri yerine getirmek.</li>
                  </ul>
                  <h4 className="text-lg md:text-xl font-semibold">3. İNTERNET SİTEMİZDE KULLANILAN ÇEREZ TÜRLERİ</h4>
                  <p className="font-semibold">3.1. Oturum Çerezleri</p>
                  <p>Ziyaretiniz süresince internet sitesinin düzgün bir şekilde çalışmasını temin eder. Güvenlik, süreklilik ve oturum yönetimi amacıyla kullanılırlar. Tarayıcı kapatıldığında silinirler.</p>
                  <p className="font-semibold">3.2. Kalıcı Çerezler</p>
                  <p>Tercihlerinizi hatırlamak için kullanılır ve tarayıcınızda depolanır. Silinene kadar saklanır. Aynı cihazdan yeniden giriş yaptığınızda sizi tanır ve içerikleri buna göre sunar.</p>
                  <p className="font-semibold">3.3. Zorunlu/Teknik Çerezler</p>
                  <p>Sitenin düzgün çalışabilmesi için gereklidir. Güvenli bölümlere erişim, site özelliklerini kullanma gibi işlevleri sağlar.</p>
                  <p className="font-semibold">3.4. Analitik Çerezler</p>
                  <p>Sitenin kullanım şekli, ziyaret sıklığı gibi bilgileri toplar. Performans iyileştirme ve kullanım eğilimlerini belirlemede kullanılır.</p>
                  <p className="font-semibold">3.5. İşlevsel/Fonksiyonel Çerezler</p>
                  <p>Ziyaretçinin yaptığı seçimleri hatırlar. Kullanım kolaylığı sağlar.</p>
                  <p className="font-semibold">3.6. Hedefleme/Reklam Çerezleri</p>
                  <p>Reklamların etkinliğini ölçer ve ilgi alanına uygun reklamlar sunar. Aynı reklamın kısa sürede tekrar gösterilmesini engeller.</p>
                  <h4 className="text-lg md:text-xl font-semibold">4. ÇEREZ TERCİHLERİ NASIL YÖNETİLİR?</h4>
                  <p>Tarayıcınızın ayarlarından çerezleri kabul edebilir, reddedebilir veya silebilirsiniz. Tarayıcı bazlı yönetim linkleri:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Google Chrome | <a className="text-[#258535] underline" href="http://www.google.com/support/chrome/bin/answer.py?hl=en&answer=95647" target="_blank" rel="noopener noreferrer">http://www.google.com/support/chrome/bin/answer.py?hl=en&answer=95647</a></li>
                    <li>Internet Explorer | <a className="text-[#258535] underline" href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies</a></li>
                    <li>Mozilla Firefox | <a className="text-[#258535] underline" href="http://support.mozilla.com/en-US/kb/Cookies" target="_blank" rel="noopener noreferrer">http://support.mozilla.com/en-US/kb/Cookies</a></li>
                    <li>Opera | <a className="text-[#258535] underline" href="http://www.opera.com/browser/tutorials/security/privacy/" target="_blank" rel="noopener noreferrer">http://www.opera.com/browser/tutorials/security/privacy/</a></li>
                    <li>Safari | <a className="text-[#258535] underline" href="https://support.apple.com/kb/ph19214?" target="_blank" rel="noopener noreferrer">https://support.apple.com/kb/ph19214?</a></li>
                    <li>Microsoft Edge | <a className="text-[#258535] underline" href="https://support.microsoft.com/tr-tr/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/tr-tr/help/17442/windows-internet-explorer-delete-manage-cookies</a></li>
                  </ul>
                  <h4 className="text-lg md:text-xl font-semibold">5. İNTERNET SİTESİ GİZLİLİK POLİTİKASI’NIN YÜRÜRLÜĞÜ</h4>
                  <p>İnternet Sitesi Gizlilik Politikası ………………………………….. tarihindedir. Politikanın yenilenmesi halinde yürürlük tarihi güncellenecektir. Gizlilik Politikası Kurum’un internet sitesinde (www.mescoteknik.com) yayımlanır ve talep eden kişilere sunulur.</p>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    )}
    </>
  )
} 