import { Navbar } from '@/components'

export default function Products() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8 pt-32 md:pt-36">
        <h1 className="text-3xl font-bold mb-6">Ürünler</h1>
        <div className="content-placeholder">
          {/* Product content will be designed later */}
        </div>
      </div>
    </main>
  )
} 