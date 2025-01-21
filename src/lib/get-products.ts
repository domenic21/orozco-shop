

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
) {
    const fetchProducts = async () => {
        try {
            const response = await fetch(`${STRAPI_HOST}/api/products?filters[product_brand][slug][$contains]=${brandId}`);
            const data = await response.json();
            if (!data || !data.data) {
                return [];
            } 
            
            return data;
        } catch (error) {
            console.error('Error fetching products by brand:', error);
            return [];
        }
    };
    return fetchProducts();
}

