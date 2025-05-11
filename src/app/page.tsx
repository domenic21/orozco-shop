
import  BrandsHome  from '@/components/BrandsHome'
import { HeroCarousel } from '@/components/HeroCarrousel'
import InstallationHome from '@/components/InstallationHome'
import ShopCategories from '@/components/ShopCategories'
import Head from 'next/head'

export const metadata = {
  title: "Manuel Orosco Home Supplies | Expert Home Remodeling & Installations",
  description: "Discover top-quality home remodeling supplies and professional installation services at Manuel Orosco. Transform your home with our expert solutions.",
  openGraph: {
    title: "Manuel Orosco Home Supplies | Expert Home Remodeling & Installations",
    description: "Discover top-quality home remodeling supplies and professional installation services at Manuel Orosco Home Supplies. Located in Dunellen, NJ. Transform your home with our expert solutions.",
    url: "https://www.manuelorosco.com/",
    siteName: "Manuel Orosco Home Supplies",
    images: [
      {
        url: "https://strapi-backend-manuel.s3.us-east-2.amazonaws.com/large_4_20250110_183603_0003_227d23f724.png",
        width: 1200,
        height: 630,
        alt: "Manuel Orosco Home Supplies Logo",
      },
    ],
  },
}

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
      {/* <Hero /> */}
      <HeroCarousel />
      <ShopCategories />
      <BrandsHome />

      <InstallationHome />
  
      

     
    </div>
  )
}
