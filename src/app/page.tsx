
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Hero from '@/components/Hero'
import ProductsHome from '@/components/ProductsHome'
import FeatureHome from '@/components/FeatureHome'

export default function HomePage() {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Hero />
   

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className='mt-16'>
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-800 ">
                PERFECTLY INTEGRATED
                <br />
                INTO YOUR HOME
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Transform your space with our curated collection of premium tiles, 
                designed to elevate every room with unmatched elegance and sophistication.
              </p>
              <Button 
                variant="outline" 
                className="text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
              >
                Discover More
              </Button>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/floringexample.jpg?height=800&width=800"
                alt="Elegant tile design"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-lg pt-10"
              />
            </div>
          </div>
        </div>
      </section>

     <ProductsHome />
     <FeatureHome />
      

      {/* Contact Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">
            TRANSFORM YOUR SPACE
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Connect with our design experts to bring your vision to life. 
            Schedule a consultation to explore our premium tile collections.
          </p>
          <Button 
            size="lg"
            variant="outline" 
            className="text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  )
}
