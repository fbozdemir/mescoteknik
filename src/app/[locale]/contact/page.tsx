import { Navbar, ContactForm } from '@/components'

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        {/* Map Section */}
        <div className="w-full h-[400px] mb-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24098.869489772187!2d29.101075000000005!3d40.973626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac64eded8b08d%3A0x125a0f6b0f0e9338!2sMESCO!5e0!3m2!1str!2str!4v1737726955450!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-24 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form Section */}
            <div className="order-2 lg:order-1">
              <h2 className="text-[#258535] text-[39px] md:text-[40px] leading-[47px] md:leading-[48px] font-medium mb-6">Write to Us</h2>
              <p className="text-[#606060] text-[18px] md:text-[19px] leading-[28px] md:leading-[29px] font-light mb-8">Our expert team will respond to your request as soon as possible.</p>
              <ContactForm />
            </div>

            {/* Contact Information Section */}
            <div className="lg:pl-20 order-1 lg:order-2">
              <h2 className="text-[#258535] text-[39px] md:text-[40px] leading-[47px] md:leading-[48px] font-medium mb-6">Contact Us</h2>
              
              <div className="space-y-8">
                <div>
                  <div className="flex flex-col gap-4">
                    {/* Phone Numbers */}
                    <div className="flex items-center gap-3">
                      <div className="text-[#258535]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <a href="tel:+905332244537" className="block hover:text-[#258535] transition-colors text-[19px] md:text-[20px] leading-[29px] md:leading-[30px] font-normal text-[#606060]">+90 533 224 45 37</a>
                      </div>
                    </div>

                    {/* Email Addresses */}
                    <div className="flex items-center gap-3">
                      <div className="text-[#258535]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <a href="mailto:cem@mescoteknik.com" className="block hover:text-[#258535] transition-colors text-[19px] md:text-[20px] leading-[29px] md:leading-[30px] font-normal text-[#606060]">cem@mescoteknik.com</a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <div className="text-[#258535] mt-1">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[19px] md:text-[20px] leading-[29px] md:leading-[30px] font-normal text-[#606060]">
                          İçerenköy Mah. Topçu İbrahim Sk.<br />
                          And Plaza No: 8 / 10D Kapı: 5<br />
                          Ataşehir – Istanbul – TURKEY
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Map Link */}
                  <div className="mt-8 pl-8">
                    <a 
                      href="https://www.google.com/maps/place/MESCO/@40.973626,29.101075,15z/data=!4m6!3m5!1s0x14cac64eded8b08d:0x125a0f6b0f0e9338!8m2!3d40.973626!4d29.101075!16s%2Fg%2F11t0jxlxvr?entry=ttu" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 group"
                    >
                      <span className="text-[19px] md:text-[20px] leading-[29px] md:leading-[30px] font-normal text-[#606060] hover:text-[#258535] transition-colors">SEE ON MAP</span>
                      <div className="text-[#258535]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center gap-4 pl-8">
                  <a href="https://www.youtube.com/@mescoteknik4609" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#258535] transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                      <path fill="white" d="M9.545 15.168V8.832L15.818 12z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-[#258535] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-[#258535] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 