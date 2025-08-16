import { ProductGroupSlider } from '@/components/product-group-slider';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto">
        <section className="px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">MESCO Metal Sanayi Çözümleri</h1>
          <p className="text-lg mb-6">
            Metal sanayi için özel çözümler sunuyoruz. Rulo sac boy kesme hatları, 
            pres besleme sistemleri ve laminasyon pres hatları konusunda uzmanız.
          </p>
        </section>
        
        <ProductGroupSlider />
      </main>
    </div>
  );
}
