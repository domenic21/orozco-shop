import { query } from "./strapi";

const STRAPI_HOST = process.env.NEXT_PUBLIC_STRAPI_HOST;

export async function getProductBrands() {
  const url = `product-categories?populate[image][fields][0]=url&fields[0]=name&fields[1]=slug&fields[2]=description&fields[3]=type&fields[4]=brand`;
  
  try {
    const res = await query(url);
    if (!res || !res.data) {
      throw new Error('Invalid response from API');
    }

    return res.data.map((brands: any) => {
      const { name, description, image: rawImage, slug, type, brand } = brands;
      const image = `${STRAPI_HOST}${rawImage.url}`;
      return { name, description, image, slug, type, brand };
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}