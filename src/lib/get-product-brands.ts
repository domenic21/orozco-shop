import { query } from "./strapi";

const STRAPI_HOST = process.env.NEXT_PUBLIC_STRAPI_HOST;

export async function getProductBrands() {
  const url = `products-brands?populate[image][fields][0]=url&populate[types][fields][0]=title&fields[0]=name&fields[1]=slug&fields[2]=description&fields[3]=product_brand`;
  
  try {
    const res = await query(url);
    if (!res || !res.data) {
      throw new Error('Invalid response from API');
    }

    return res.data.map((product_brands: any) => {
      const { name, description, image: rawImage, slug, types, product_brand } = product_brands;
      const image = `${STRAPI_HOST}${rawImage.url}`;
      const typesStrings = types.map((type: any) => type.title); // Assuming 'title' is the string field in the 'types' relation
     
      return { name, description, image, slug, types: typesStrings, product_brand };
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}
