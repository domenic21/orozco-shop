'use client'

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from 'lucide-react'
import Link from 'next/link'

const applications = [
  {
    title: "Floor",
    description: "Durable and stylish flooring solutions for every room",
    image: "/floor-tiles.jpg?height=400&width=400&text=Floor+Tiles"
  },
  {
    title: "Wall",
    description: "Beautiful wall tiles for any interior space",
    image: "/wall-tiles.jpg?height=400&width=400&text=Wall+Tiles"
  },
  {
    title: "Backsplash",
    description: "Kitchen and bathroom backsplash options",
    image: "/bathroom-tiles.jpg?height=400&width=400&text=Backsplash+Tiles"
  },
  {
    title: "Shower",
    description: "Waterproof solutions for shower and wet areas",
    image: "/shower-tiles.jpg?height=400&width=400&text=Shower+Tiles"
  },
  {
    title: "Fireplace",
    description: "Heat-resistant tiles for fireplace surrounds",
    image: "/fireplace-tiles.jpg?height=400&width=400&text=Fireplace+Tiles"
  },
  {
    title: "Outdoor",
    description: "Weather-resistant tiles for outdoor spaces",
    image: "/categories/outdoor-tiles.jpg?height=400&width=400&text=Outdoor+Tiles"
  }
]

export default function TileApplications() {
  return (
    <section className="py-20 bg-white mt-14">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-4">
          Shop by Application
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Visit our showroom to explore our complete collection of premium tiles for every application. 
          Our experts are ready to help you find the perfect solution for your project.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {applications.map((app, index) => (
            <Card 
              key={index} 
              className="bg-white border-gray-100 overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={app.image}
                    alt={`${app.title} tiles`}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <h3 className="text-xl font-light text-white mb-2">
                      {app.title}
                    </h3>
                    <p className="text-sm text-white/90 hidden group-hover:block transition-all duration-300">
                      {app.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
        <Link href={`/Showroom`}>
          <Button 
            variant="outline"
            size="lg"
            className="group"
          >
         
            <MapPin className="w-4 h-4 mr-2" />
            Visit Our Showroom
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}