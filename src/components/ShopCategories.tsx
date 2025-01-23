'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getProductsCategory, ProductCategory } from '@/lib/get-product-brands'


 const ProductCategories: React.FC = () => {
    const [productCategories, setProductCategories] = useState<ProductCategory[]>([]);
    const [loading, setLoading] = useState(true);

      useEffect(() => {
        const fetchCategory = async () => {
          try {
            const category = await getProductsCategory();
            setProductCategories(category);
          } catch (error) {
            console.error('Error fetching product brands:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchCategory();
      }, []);
    
      if (loading) {
        return <div>Loading...</div>;
      }
  return (
    <section className="py-20 bg-white mt-14" id='shopCategories'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-4">
          Shop by Application
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Visit our showroom to explore our complete collection of premium tiles for every application. 
          Our experts are ready to help you find the perfect solution for your project.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 ">
          {productCategories.map((category , index)=> (
             <Link href={`/product-category/${category.slug}`} key={category.slug}>
            <Card 
              key={index} 
              className="bg-white border-gray-100 overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={category.image.url}
                    alt={`${category.product_brand} tiles`}
                    className="group-hover:scale-105 transition-transform duration-500 object-fill w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4  ">
                    <div className="bg-black/20 backdrop-blur-md rounded-md flex flex-col items-center justify-center p-2">
                    <h3 className="text-xl font-light text-white mb-2    ">
                      {category.product_category_products.toString()}
                    </h3>
                    <div className="text-white   text-sm uppercase">
                      {category.product_brand}
                      </div>
                      </div>
                  </div>
                </div>
              </CardContent>
          
            </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center ">
        <Link href={`/Showroom`}>
          <Button 
            variant="outline"
            size="lg"
            className="group "
          >
         
            <MapPin className="w-4 h-4 mr-2" />
           <p className="text-2xl"> Visit Our Showroom </p>
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductCategories;