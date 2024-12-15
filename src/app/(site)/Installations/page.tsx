'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent,  CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, PenToolIcon as Tool, Clock, Star, ChevronRight } from 'lucide-react'

const services = [
    { id: 1, name: 'Residential Installation', icon: '/floringexample.jpg' },
    { id: 2, name: 'Commercial Installation', icon: '/floringexample.jpg' },
    { id: 3, name: 'Custom Tile Design', icon: '/floringexample.jpg' },
    { id: 4, name: 'Tile Repair', icon: '/floringexample.jpg' },
]

const projects = [
    { id: 1, name: 'Modern Kitchen Backsplash', image: '/categories/kitchen-tiles.jpg', category: 'Kitchen' },
    { id: 2, name: 'Luxury Bathroom Renovation', image: '/categories/bathroom-tiles.jpg', category: 'Bathroom' },
    { id: 3, name: 'Commercial Lobby Flooring', image: '/categories/porcelain-tiles.jpg', category: 'Commercial' },
    { id: 4, name: 'Outdoor Patio Tiling', image: '/categories/outdoor-tiles.jpg', category: 'Outdoor' },
    { id: 5, name: 'Mosaic Shower Design', image: '/categories/mosaic-tiles.jpg', category: 'Bathroom' },
    { id: 6, name: 'Restaurant Floor Installation', image: '/tilestock.jpg', category: 'Commercial' },
]

export default function TileInstallationServices() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(project => project.category.toLowerCase() === activeTab)

  return (
    <div className="container mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold text-center mb-8">
      Expert Tile Installation Services
    </h1>

      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {services.map((service) => (
          <Card key={service.id} className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                <Image src={service.icon} alt={service.name} width={32} height={32} />
              </div>
              <CardTitle>{service.name}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div
        className="text-center mb-16"
   
      >
        <h2 className="text-3xl font-bold mb-4">Why Choose Our Installation Services?</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex items-center">
            <CheckCircle className="text-primary mr-2" />
            <span>Professional Expertise</span>
          </div>
          <div className="flex items-center">
            <Tool className="text-primary mr-2" />
            <span>Quality Materials</span>
          </div>
          <div className="flex items-center">
            <Clock className="text-primary mr-2" />
            <span>Timely Completion</span>
          </div>
          <div className="flex items-center">
            <Star className="text-primary mr-2" />
            <span>Customer Satisfaction</span>
          </div>
        </div>
      </div>

      <div
     
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Recent Projects</h2>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="justify-center flex">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="kitchen">Kitchen</TabsTrigger>
            <TabsTrigger value="bathroom">Bathroom</TabsTrigger>
            <TabsTrigger value="commercial">Commercial</TabsTrigger>
            <TabsTrigger value="outdoor">Outdoor</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}

            >
              <Card className="overflow-hidden group cursor-pointer w-[400] h-[400]"     >
                <CardContent className="p-0 relative">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    height={400}
                    layout="responsive"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <Button variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Project
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="bg-white">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div
        className="mt-16 text-center"
    
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="mb-8 text-lg">Contact us today for a free consultation and quote.</p>
        <Button size="lg" className="group">
          Get a Free Quote
          <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  )
}