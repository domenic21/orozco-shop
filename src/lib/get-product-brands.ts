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
  const url = `${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/products-brands?populate[image][fields][0]=url&populate[types][fields][0]=title&fields[0]=name&fields[1]=slug&fields[2]=description&fields[3]=product_brand`;
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN; // Ensure this environment variable is set

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products. Status: ${res.status}`);
    }

    const responseData = await res.json();
    const data = Array.isArray(responseData.data) ? responseData.data : []; // Ensure 'data' is an array

    return data.map((product_brands: ProductBrand) => {
      const { name, description, image, slug, types, product_brand } = product_brands;
     
      const typesStrings = types.map((type: { title: string }) => type.title); // Assuming 'title' is the string field in the 'types' relation
      return { name, description, image, slug, types: typesStrings, product_brand };
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}