import { getProductsByCategory } from '@/lib/get-products';
import { Card, CardContent, CardFooter } from "@/components/ui/card"
//import { Button } from "@/components/ui/button"
//import { Package } from 'lucide-react';
import React from 'react';
import { div, p } from 'motion/react-client';
interface ProductsResponse {
  data: {
    scraping_category: {
      products: Product[];
    };
  }[];
}




interface Product {
  id?: string;
  name?: string;
  description?: string;
  brand?: string;
  image_url?: string;
  image?: string;
  category?: string;
  title?: string;
  alt?: string;
  material?: string;
  dimensions?: string;
  product_brand?: string;

}



export default async function ProductPage(props:{params:Promise<{categoryId:string}>}) {
  const  params  = await props.params;
  const products: ProductsResponse = await getProductsByCategory(params.categoryId);
 
  if (!products || !products.data || products.data.length === 0 || !products.data[0].scraping_category || !products.data[0].scraping_category.products) {
    return <div>No products available</div>;
  }

  const productsArray: Product[] = products.data[0].scraping_category.products || [];
  const productsCounter = productsArray.length;

  return (
    <div className="container mx-auto px-4 py-8">
      <p className='text-right mb-4'>Showing:{productsCounter}</p>
      
    {/* Header with Filter and Sort 
    <div className="flex justify-between mb-8">
      <Button variant="outline" className="text-sm">
        FILTER
      </Button>
      <Button variant="outline" className="text-sm">
        SORT
      </Button>
    </div>
    */}

    {/* Product Grid */}
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6  bg-[#f5f5f5]">
      {productsArray.map((product) => (
       
        <Card key={ product.id } className="border-none shadow-none">
          <CardContent className="p-0 space-y-3">
            {/* Product Image Container */}
            <p>{product.product_brand}</p>
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <img
                src={product.image_url || product.image}
                alt={product.name || product.alt}
                className="object-fit w-full h-full"
              />
         
            </div>
            
            {/* Product Info */}
            <div className="space-y-1">
              <h2 className=" sm:font-normal lg:font-bold md:font-semibold bg-black text-white h-auto p-2">{product.name || product.title}</h2>
              {(product.material && product.dimensions) && (
                        <p className='text-left py-2 px-1 text-sm sm:text-base' style={{ color: '#8a817c' }}>
                          {product.material} - {product.dimensions}
                        </p>
                      )}
            </div>
          </CardContent>
          {/* Product Footer button card TODO */}
          <CardFooter className="p-0 pt-2">
            {/* <Button 
              variant="outline" 
              className="w-full border-gray-300 hover:bg-gray-100 hover:text-gray-900"
            >
             <Package className="mr-2 h-4 w-4" />
              ADD TO CART
            </Button>*/}
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
  );
}







