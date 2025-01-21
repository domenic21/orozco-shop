import { query } from "./strapi";


  
export interface ProductsResponse {
    data: Array<{
      id: number;
      documentId: string;
      title: string;
      scraping: {
        products: Array<{
          alt: string;
          image: string;
          title?: string;
        }>;
      };
    }>;
  }
  
  
const STRAPI_HOST = process.env.NEXT_PUBLIC_STRAPI_HOST;

export async function getProducts() {
    const fetchProducts = async () => {
        const response = await fetch(`${STRAPI_HOST}/api/products?`);
        const data = await response.json();
        return data;
    };
    return fetchProducts();
}

/*export async function getProductsByBrand(brandId: string): Promise<ProductsResponse> {
    try {
      const response = await fetch(`${STRAPI_HOST}/api/products?filters[product_brand][slug][$contains]=${brandId}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch products. Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) { 
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  ///api/products?filters[product_brand][slug][$contains]=${brandId}`*/

  export function getProductsByBrand({brandId}:{brandId:string}){
    return query(`/products?filters[product_brand][slug][$contains]=${brandId}`).then(res => {
      const data = res.json();
      return data;
    })

  }