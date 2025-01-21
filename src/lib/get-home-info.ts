import { query } from "./strapi";



export async  function getHomeInfo() {
  return await query("home?populate=HeroImage").then( res => {
    const { title, description, HeroImage } = res.data;
    const image = HeroImage.url;

    
 
     return { title,description, image };
  });
}