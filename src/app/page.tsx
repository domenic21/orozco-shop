
import BrandsHome from '@/components/BrandsHome'
import FeatureHome from '@/components/FeatureHome'
import {Hero} from '@/components/Hero'
import InstallationHome from '@/components/InstallationHome'
import ShopCategories from '@/components/ShopCategories'



export default function HomePage() {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <Hero />
 
      <ShopCategories />
      <FeatureHome />
      <BrandsHome />

      <InstallationHome />
      

     
    </div>
  )
}
