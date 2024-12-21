import Image from 'next/image'
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const products = [
  {
    name: "Q™ PREMIUM NATURAL QUARTZ",
    subtitle: "COUNTERTOPS",
    image: "/Brands/quartz.jpg?height=600&width=600&text=Quartz+Countertop",
   
  },
  {
    name: "EVERLIFE® WATERPROOF",
    subtitle: "FLOORING",
    image: "/Brands/everlife.jpg?height=400&width=600&text=Waterproof+Flooring",

  },
  {
    name: "ARTERRA PREMIUM® PORCELAIN",
    subtitle: "PAVERS",
    image: "/Brands/arterra.jpg?height=400&width=600&text=Porcelain+Pavers",
   
  },
  {
    name: "STILE® PORCELAIN SLABS",
    subtitle: "",
    image: "/Brands/stile.jpg?height=400&width=600&text=Porcelain+Slabs",
  
  }
]

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-4" style={{ color: '#8a817c' }}>
          EXPLORE OUR BRANDS COLLECTIONS
        </h2>
        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-16 text-lg">
          Discover our exceptional brands, crafted to meet the demands of both residential and commercial spaces, offering elegance and durability.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="bg-white border-gray-100 shadow-md overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
              
                <div className="text-center">
                  <h3 
                    className="text-lg font-medium mb-1" 
                    style={{ color: '#8a817c' }}
                  >
                    {product.name}
                  </h3>
                  {product.subtitle && (
                    <p className="text-gray-600">{product.subtitle}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


