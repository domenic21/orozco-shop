import { query } from "./strapi";

const STRAPI_HOST = process.env.NEXT_PUBLIC_STRAPI_HOST;

export async function getProducts() {
    const fetchProducts = async () => {
        const response = await fetch(`${STRAPI_HOST}/api/products`);
        const data = await response.json();
        return data;
    };
    return fetchProducts();
}