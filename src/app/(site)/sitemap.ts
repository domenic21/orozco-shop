import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/products-brands?fields=slug`); // Fetch product brands from Strapi API
  const jsonResponse = await response.json(); // Parse the JSON response, parsing means it will be converted to a JavaScript object, example: { data: [{ slug: 'brand1' }, { slug: 'brand2' }] }
  const data: { slug: string }[] = jsonResponse.data; // Extract the data array from the response, which contains brand objects with slugs

  // Map through the data to create sitemap entries
  const postEntries: MetadataRoute.Sitemap = data.map((brand) => ({
    url: `https://www.manueloroscohomesupplies.com/products/${brand.slug}`,
    lastModified: new Date(),
  }));
//products pages
const responseProducts = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/product-categories?fields=slug`); // Fetch products from Strapi API
const jsonResponseProducts = await responseProducts.json(); // Parse the JSON response, parsing means it will be converted to a JavaScript object, example: { data: [{ slug: 'product1' }, { slug: 'product2' }] }
const dataProducts: { slug: string }[] = jsonResponseProducts.data; // Extract the data array from the response, which contains product objects with slugs
// Map through the data to create sitemap entries
const postEntriesProducts: MetadataRoute.Sitemap = dataProducts.map((product) => ({
  url: `https://www.manueloroscohomesupplies.com/product-category/${product.slug}`,
    lastModified: new Date(),
    }));


  return [
    {
      url: "https://www.manueloroscohomesupplies.com/",
      lastModified: new Date(),
    },
    {
      url: "https://www.manueloroscohomesupplies.com/products/",
      lastModified: new Date(),
    },
    ...postEntries,
    {
      url: "https://www.manueloroscohomesupplies.com/installation",
      lastModified: new Date(),
    },
    ...postEntriesProducts,
    {
      url: "https://www.manueloroscohomesupplies.com/Showroom",
      lastModified: new Date(),
    },
    {
      url: "https://www.manueloroscohomesupplies.com/Contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.manueloroscohomesupplies.com/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://www.manueloroscohomesupplies.com/Construction",
      lastModified: new Date(),
    },
  ];
}