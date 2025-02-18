

import { getProductsByCategory } from '@/lib/get-products';
import ProductCategoryRender from '@/components/ProductsCategoryRender';

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
  type?: string;
}
type Params = Promise<{ categoryId: string }>;

export default async function ProductPage  ({params,}:{params:Params}){
  const {categoryId} = await params;
  let products: Product[] = []; // Default to empty array if no products are found for the category ID or if there is an error fetching products
  try {
    const productsResponse: ProductsResponse = await getProductsByCategory(categoryId); // Fetch products by category ID
    if (productsResponse && productsResponse.data && productsResponse.data.length > 0) {
      products = productsResponse.data[0].scraping_category.products; // Set products to the products array if products are found
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }

 // return <ProductCategoryRender products={products} />; // Render the ProductCategoryRender component with the products array
 return(
  <div className="container mx-auto px-4 py-8">
  <ProductCategoryRender products={products} /> 
</div>
 )
};

