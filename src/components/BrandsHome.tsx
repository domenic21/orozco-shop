
import { getProductBrands } from '@/lib/get-product-brands';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from './ui/card';





export const BrandsHome = async () => {

  const productBrands = await getProductBrands();
  
  
  return (
  
    <section className="py-20 bg-white">
      <div className="container md:mx-12 px-4 sm:mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-4" style={{ color: '#8a817c' }}>
          EXPLORE OUR BRANDS COLLECTIONS
        </h2>
        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-16 text-lg">
          Discover our exceptional brands, crafted to meet the demands of both residential and commercial spaces, offering elegance and durability.
        </p>
     
        <Carousel className="w-full max-w-lg sm:max-w-xs md:max-w-md lg:max-w-2xl xl:max-w-3xl mx-auto">
      <CarouselContent className="-ml-2 md:-ml-3">
        {productBrands.map((brands: any, index: number) => (
          <CarouselItem key={index} className="pl-2 md:pl-3 basis-full sm:basis-1/2 lg:basis-1/3">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <img
                    src={brands.image }
                    alt={`Product Brands Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className='uppercase text-center py-2 px-1 text-sm sm:text-base' style={{ color: '#8a817c' }}>
                  {brands.type}
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
      </div>
    </section>
   
    
  )
}


