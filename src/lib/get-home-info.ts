import { query } from "./strapi";

const  STRAPI_HOST  = process.env.NEXT_PUBLIC_STRAPI_HOST;

export async  function getHomeInfo() {
  return await query("home?populate=HeroImage").then( res => {
    const { title, description, HeroImage } = res.data;
    const image = `${STRAPI_HOST}${HeroImage.url}`;

    
 
     return { title,description, image };
  });
}