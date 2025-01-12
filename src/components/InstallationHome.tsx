'use client'

import {  PenToolIcon  as  HouseIcon, Building, Hammer, Wrench} from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card,  CardHeader, CardTitle } from "@/components/ui/card"




const services = [
  { id: 1, name: 'Residential Installation', icon: <HouseIcon className='text-white' /> },
  { id: 2, name: 'Commercial Installation', icon: <Building className='text-white' /> },
  { id: 3, name: 'Custom Tile Design', icon: <Hammer  className='text-white' /> },
  { id: 4, name: 'Tile Repair', icon: <Wrench className='text-white' /> },
]

export default function TileInstallationServices() {
return (

<section className="py-20 bg-gray-100">
<div className="container mx-auto px-4 text-center">
  <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">
    TRANSFORM YOUR SPACE
  </h2>
  <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
    Connect with our design experts to bring your vision to life. 
    Schedule a consultation to explore our premium collections of tiles, cabinets, and all interior renovations.
  </p>
  <p className="text-4xl  text-center mb-8">
      Expert Tile Installation Services
    </p>
  <div 
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
  >
   
    {services.map((service) => (
      <Card key={service.id} className="text-center hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
            {service.icon}
          </div>
          <CardTitle>{service.name}</CardTitle>
        </CardHeader>
      </Card>
    ))}
    </div>
  <Button 
    size="lg"
    variant="outline" 
    className="text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
  >
    <Link href="/Contact">
    Contact Us
    </Link>
  </Button>
</div>
</section>

)
  }