import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
 function FeatureHome() {
  return (
    <div>
        {/* Featured Project */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video md:aspect-square">
              <Image
                src="/marble.jpg?height=800&width=800"
                alt="Featured tile project"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">
                CRAFTED WITH
                <br />
                PRECISION
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Each tile in our collection is carefully selected to meet the highest 
                standards of quality and design, ensuring your space reflects 
                uncompromising excellence.
              </p>
              <Button 
                variant="outline" 
                className="text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeatureHome