
export interface Product {
  alt: string;
  image: string;
  title?: string;
}

export interface Scraping {
  products: Product[];
}

export interface ProductBrandData {
  id: number;
  documentId: string;
  title: string;
  scraping: Scraping;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface ProductsResponse {
  data: ProductBrandData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
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

export async function getProductsByBrand(brandId: string) {
    const fetchProducts = async () => {
        const response = await fetch(`${STRAPI_HOST}/api/products?filters[product_brand][slug][$contains]=${brandId}`);
        const data = await response.json();
        return data;
    };
    return fetchProducts();
}



 /* export async function getProductsByBrand(brandId: string): Promise<ProductsResponse> {
    try {
      const response = await query(`/products?filters[product_brand][slug][$contains]=${brandId}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch products. Status: ${response.status}`);
      }
  
      const data: ProductsResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }*/