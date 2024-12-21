'use client'

import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ServicesSection() {
  const services = {
    residential: {
      title: "RESIDENTIAL",
      items: [
        "Kitchen Tile Installation",
        "Bathroom Remodeling",
        "Floor Tile Installation",
        "Backsplash Installation",
        "Shower Tile Work",
        "Custom Tile Design",
        "Fireplace Surrounds",
        "Entryway Tiling",
        "Patio Tiling",
        "Pool Area Tiling"
      ]
    },
    general: {
      title: "GENERAL SERVICES",
      items: [
        "Tile Repair",
        "Grout Work",
        "Waterproofing",
        "Demolition",
        "Custom Patterns",
        "Sealing Services",
        "Maintenance Plans",
        "Restoration Work",
        "Consultation Services"
      ]
    },
    commercial: {
      title: "COMMERCIAL",
      items: [
        "Restaurant Flooring",
        "Office Building Tiles",
        "Retail Space Design",
        "Hotel Installations",
        "Mall Flooring",
        "Industrial Flooring",
        "Property Management"
      ]
    }
  }
  const additionalServices = {
    restoration: {
      title: "RESTORATION SERVICES",
      items: [
        "Water Damage Restoration",
        "Fire Damage Repair",
        "Natural Disaster Recovery",
        "Insurance Claim Assistance",
        "Emergency Services"
      ]
    },
    specialty: {
      title: "SPECIALTY INSTALLATIONS",
      items: [
        "Custom Mosaic Design",
        "Anti-Slip Treatment",
        "Decorative Borders and Inlays"
      ]
    },
    maintenance: {
      title: "MAINTENANCE & REPAIR",
      items: [
        "Tile Crack Repair",
        "Grout Restoration",
        "Sealing Services",
        "Color Matching",
        "Preventive Maintenance Plans"
      ]
    },
    consultation: {
      title: "DESIGN & CONSULTATION",
      items: [
        "Material Selection Guidance",
        "Color and Pattern Consultation",
        "Project Planning",
        "Budget Estimation"
      ]
    }
  }
  return (
    <div>
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium mb-2" style={{ color: '#B17F4A' }}>
            General Contractor & Interior Renovation Services
          </h3>
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            OUR SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {Object.values(services).map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-medium mb-6 text-gray-800">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center group">
                    <ChevronRight 
                      className="w-5 h-5 mr-2 text-gray-400 group-hover:text-[#B17F4A] transition-colors" 
                    />
                    <span className="text-gray-600 group-hover:text-gray-800 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
          ADDITIONAL SERVICES
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Beyond our core installation services, we offer comprehensive solutions 
          for restoration, specialty installations, and ongoing maintenance. Our expert 
          team is equipped to handle any challenge while maintaining the highest 
          standards of quality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {Object.values(additionalServices).map((category, index) => (
          <div key={index} className="group">
            <h3 
              className="text-xl font-light mb-6 pb-2 border-b-2" 
              style={{ color: '#B17F4A', borderColor: '#B17F4A' }}
            >
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center group/item">
                  <ChevronRight 
                    className="w-5 h-5 mr-2 text-gray-400 group-hover/item:text-[#B17F4A] transition-colors" 
                  />
                  <span className="text-gray-600 group-hover/item:text-gray-800 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-8">
          Need a service not listed here? Contact us to discuss your specific requirements.
        </p>
        <Link href="/Contact" >
        <button 
          className="inline-flex items-center px-6 py-3 border-2 border-[#B17F4A] text-[#B17F4A] hover:bg-[#B17F4A] hover:text-white transition-colors duration-300"
        >
          Request Custom Service
        </button>
        </Link>
      </div>
    </div>
  </section>
 </div>
  )
}