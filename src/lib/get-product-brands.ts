import { query } from "./strapi";



export interface ProductBrand {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  types: { title: string }[];
  description: string | null;
  product_brand: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export async function getProductBrands() {
  const url = `products-brands?populate[image][fields][0]=url&populate[types][fields][0]=title&fields[0]=name&fields[1]=slug&fields[2]=description&fields[3]=product_brand`;
  
  try {
    const res = await query(url);
    if (!res || !res.data) {
      throw new Error('Invalid response from API');
    }

    return res.data.map((product_brands: ProductBrand) => {
      const { name, description, image: rawImage, slug, types, product_brand } = product_brands;
      const image = rawImage.url;
      const typesStrings = types.map((type) => type.title); // Assuming 'title' is the string field in the 'types' relation
      return { name, description, image, slug, types: typesStrings, product_brand };
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}