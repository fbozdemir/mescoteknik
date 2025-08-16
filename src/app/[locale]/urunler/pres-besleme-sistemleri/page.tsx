import { Navbar, Footer } from '@/components'

export default function PresBeslemeSistemleri() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Pres Besleme Sistemleri</h1>
        <div className="content-placeholder">
          {/* Product content will be designed later */}
        </div>
      </div>
      <Footer />
    </main>
  )
}
