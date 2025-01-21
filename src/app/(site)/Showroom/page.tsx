'use client';
import { Card, CardContent } from "@/components/ui/card"
import { Showroom } from "@/components/Showroom"

export default function ShowroomLocation() {


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Showroom />

     

      {/* Features */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12" style={{ color: '#B17F4A' }}>
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Expert Consultation', description: 'Our knowledgeable staff will guide you through our collection and help you make the best choice for your project.' },
              { title: 'Immersive Displays', description: 'Experience our tiles in realistic room settings to better visualize how they\'ll look in your space.' },
              { title: 'Exclusive Designs', description: 'Discover unique patterns and premium materials you won\'t find anywhere else.' },
            ].map((feature, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  )
}