"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card"
//import { Button } from "@/components/ui/button"
//import { Package } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowUp } from 'lucide-react';

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
    type?: string;

}
interface ProductListProps {
    products: Product[];
  }



export default  function ProductCategoryRender({ products }: ProductListProps) {

    const [selectedType, setSelectedType] = useState<string | null>(null); // State to store the selected product type
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null); // State to store the selected product brand
    const [showScroll, setShowScroll] = useState(false);
    
    useEffect(() => { //SCROLL ARROW
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowScroll(true);
        } else {
          setShowScroll(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    if (products.length === 0) {
      return <div>No products available</div>;
    }
  
    const uniqueTypes = Array.from(new Set(products.map(product => product.type ))); // Get unique product types from the products array
   //Set is a new object type in ES6 that allows you to store unique values of any type, whether primitive values or object references.
  const filteredProducts = products.filter((product) => {
    const typeMatch = selectedType ? product.type === selectedType : true;
    const brandMatch = selectedBrand ? product.brand === selectedBrand : true;
    return typeMatch && brandMatch;
  });

  const titleType = selectedType ? `Exclusive Collection Of ${selectedType}` : 'All Products Selected ';
const counter = filteredProducts.length > 0 ? ` (${filteredProducts.length} results)` : ' (0 results)';
const titleCounter = `${titleType}${selectedBrand ? ` - ${selectedBrand}` : ''}${counter}`;

  const uniqueBrand = Array.from(new Set(products.map(product => product.brand)));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between mb-4">
        <div className="space-x-2 mb-5">
          <Button variant="outline" className="text-sm" onClick={() => { setSelectedType(null); setSelectedBrand(null); }}>
            All
          </Button>
          {uniqueTypes.map((type) => (
            <Button key={type} variant="outline" className="text-sm" onClick={() => type && setSelectedType(type)}>
              {type}
            </Button>
          ))}
          <div className="border-l border-gray-300 h-6 mx-2 mt-4 mb-4 ml-2 mr-2" />
          <span>Brands:</span>
          {uniqueBrand.map((brand) => (
            <Button key={brand} variant="outline" className="text-sm" onClick={() => brand && setSelectedBrand(brand)}>
              {brand}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">{titleCounter}</h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#f5f5f5]">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card key={product.id} className="border-none shadow-none">
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
                  <h2 className="sm:font-normal lg:font-bold md:font-semibold bg-black text-white h-auto p-2">
                    {product.name || product.title}
                  </h2>
                  {product.material && product.dimensions && (
                    <p className="text-left py-2 px-1 text-sm sm:text-base" style={{ color: "#8a817c" }}>
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
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-8">
            Please select a product
          </div>
        )}
      </div>
      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}






