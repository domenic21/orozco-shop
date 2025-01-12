const {  STRAPI_TOKEN } = process.env;
const { STRAPI_HOST} = process.env;



//if (!STRAPI_HOST || !STRAPI_TOKEN) {
   // throw new Error("Environment variables STRAPI_HOST or STRAPI_TOKEN are not set.");
 //}
  
export function query(url: string) {
  return fetch(`${STRAPI_HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}


