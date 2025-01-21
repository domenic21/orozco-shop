import { getProductsByBrand } from '@/lib/get-products';
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import React from 'react';
import { Package } from 'lucide-react';

interface ProductsResponse {
  data: {
    scraping: {
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
}

export default async function ProductPage({ params }: { params: { brandId: string } }) {
  const { brandId } = params as { brandId: string };
  
  const products: ProductsResponse = await getProductsByBrand({ brandId });
 
  if (!products || !products.data || products.data.length === 0 || !products.data[0].scraping || !products.data[0].scraping.products) {
    return <div>No products available</div>;
  }
  console.log('====================================');
  console.log(products);
  console.log('====================================');

  const productsArray: Product[] = products.data[0].scraping.products || [];
  
  return (
    <div className="container mx-auto px-4 py-8">
    {/* Header with Filter and Sort */}
    <div className="flex justify-between mb-8">
      <Button variant="outline" className="text-sm">
        FILTER
      </Button>
      <Button variant="outline" className="text-sm">
        SORT
      </Button>
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {productsArray.map((product) => (
        <Card key={product.alt} className="border-none shadow-none">
          <CardContent className="p-0 space-y-3">
            {/* Product Image Container */}
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <img
                src={product.image_url || product.image}
                alt={product.name || product.alt}
                className="object-fit w-full h-full"
              />
         
            </div>
            
            {/* Product Info */}
            <div className="space-y-1">
              <h2 className="font-medium text-base">{product.name || product.title}</h2>
          
            </div>
          </CardContent>
          
          <CardFooter className="p-0 pt-2">
            <Button 
              variant="outline" 
              className="w-full border-gray-300 hover:bg-gray-100 hover:text-gray-900"
            >
              <Package className="mr-2 h-4 w-4" />
              ADD TO CART
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
  );
}