

import Hero from '@/components/Hero'
import FeatureHome from '@/components/FeatureHome'
import BrandsHome from '@/components/BrandsHome'
import InstallationHome from '@/components/InstallationHome'
import ShopCategories from '@/components/ShopCategories'

export default function HomePage() {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Hero />
   

     <ShopCategories />
      <FeatureHome />
      <BrandsHome />

      <InstallationHome />
  
    </div>
  )
}
