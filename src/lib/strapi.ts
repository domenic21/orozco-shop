

 


//if (!STRAPI_HOST || !STRAPI_TOKEN) {
   // throw new Error("Environment variables STRAPI_HOST or STRAPI_TOKEN are not set.");
 //}
  
export function query(url: string) {
  return fetch(`${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
  })
  .then(res => res.json())
  .then(data => {
   
    return data;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}


