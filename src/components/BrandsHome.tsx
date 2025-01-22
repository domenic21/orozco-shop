'use client';
import React, { useEffect, useState } from 'react';
import { getProductBrands, ProductBrand } from '@/lib/get-product-brands';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from './ui/card';
import Link from 'next/link';

// Carousel for Brands in Home Page
const BrandsHome: React.FC = () => {
  const [productBrands, setProductBrands] = useState<ProductBrand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const brands = await getProductBrands();
        setProductBrands(brands);
      } catch (error) {
        console.error('Error fetching product brands:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-20 bg-white flex justify-center items-center">
      <div className="container md:mx-12 px-4 sm:mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-4" style={{ color: '#8a817c' }}>
          EXPLORE OUR BRANDS COLLECTIONS
        </h2>
        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-16 text-lg">
          Discover our exceptional brands, crafted to meet the demands of both residential and commercial spaces, offering elegance and durability.
        </p>
        <Carousel>
          <CarouselContent className="-ml-2 md:-ml-1 ">
            {productBrands.map((brand, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-3 basis-full sm:basis-1/2 lg:basis-1/3">
                <Link href={`/products/${brand.slug}`}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-square relative">
                        <img
                          src={brand.image.url}
                          alt={brand.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className='uppercase text-center py-2 px-1 text-sm sm:text-base' style={{ color: '#8a817c' }}>
                        {brand.types.join(' & ')}
                      </p>
                 
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default BrandsHome;