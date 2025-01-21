
import { BrandsHome } from '@/components/BrandsHome'
import {Hero} from '@/components/Hero'
import InstallationHome from '@/components/InstallationHome'
import ShopCategories from '@/components/ShopCategories'
import Head from 'next/head'



export default function HomePage() {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <Head>
        <title>Manuel Orosco Home Supplies | Expert Home Remodeling & Installations</title>
        <meta name="Manuel Orosco Home Supplies | Expert Home Remodeling & Installations"
        content= "Discover top-quality home remodeling supplies and professional installation services at Manuel Orosco. Transform your home with our expert solutions."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
 
      <ShopCategories />
      <BrandsHome />

      <InstallationHome />
  
      

     
    </div>
  )
}
