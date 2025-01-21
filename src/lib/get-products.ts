

  
  interface ProductsResponse {
    data: {
      scraping: {
        products: {
          alt: string;
          image: string;
          title?: string;
        }[];
      };
    }[];
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

export async function getProductsByBrand(
    { brandId }: { brandId: string }
  ): Promise<ProductsResponse> {
    try {
      const response = await fetch(`${STRAPI_HOST}/api/products?filters[product_brand][slug][$contains]=${brandId}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch products. Status: ${response.status}`);
      }
      
      const data: ProductsResponse = await response.json();
  
      if (!data || !data.data) {
        console.warn('No products found for the given brand:', brandId);
        return { data: [] }; // Consistent structure with `data` key
      }
  
      return data;
    } catch (error) {
      console.error('Error fetching products by brand:', error);
      return { data: [] }; // Consistent structure for error cases
    }
  }
  
