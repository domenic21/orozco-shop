
import React from "react";
import { getProducts } from "@/lib/get-products";
import Link from "next/link";

interface Product {
  name: string;
  description: string;
  brand: string;
  image_url: string;
  category: string;
}



export const ProductsHome = async () => {
  const products = await getProducts();
 // console.log(products);
  if (!products || !products.data || !products.data[0].scraping || !products.data[0].scraping.products) {
    return <div>No products available</div>;
  }
  const productArray: Product[] = products.data[0].scraping.products;
  return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {productArray.map((product, index) => (
         <Link href={`/products/${product.brand}`} key={index}  className=" cursor-pointer relative bg-white shadow-lg rounded-lg overflow-hidden">
    
          <div className="aspect-auto">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-[100px] h-[100px] object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-sm text-gray-600">{product.brand}</p>
            <p className="text-sm text-gray-600">{product.category}</p>
          </div>
        
        </Link>
      ))}
    </div>
  );
};