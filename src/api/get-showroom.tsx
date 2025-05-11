
import { useEffect , useState } from "react";
const STRAPI_HOST = process.env.NEXT_PUBLIC_STRAPI_HOST;
export function useGetShowroomInfo() {
 const url = `${STRAPI_HOST}/api/showroom?fields[0]=title&fields[1]=subtitle&populate=address&populate=image`;
    const [result, setresult] = useState(null);
    useEffect(()=>{
        (async () => {
            try {
                const res = await fetch(url)
                const data = await res.json()
                console.log(data)
                setresult(data)
            

            }
            catch(error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, [url]);
    return {result};
}
export function useGetShowroomCarousel() {
    const url = `${STRAPI_HOST}/api/showroom?&populate[MediaShowroomCarousel][fields][0]=formats`;
       const [resultCarousel, setresultCarousel] = useState(null);
       useEffect(()=>{
           (async () => {
               try {
                   const res = await fetch(url)
                   const data = await res.json()
                   
                   const smallImageUrls = data.data.MediaShowroomCarousel.map((item: { formats: { small: { url: string } } }) => item.formats.small.url);
                   setresultCarousel(smallImageUrls)
                   console.log(resultCarousel)
   
               }
               catch(error) {
                   console.error('Error fetching data:', error);
               }
           })();
       }, [url]);
       return {resultCarousel};
   }

export function useGetHomeCarousel() {
    const url = `${STRAPI_HOST}/api/hero-carrousel?&populate[carrousel][fields][0]=formats`;
    const [resultCarousel, setresultCarousel] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();

                const optimizedImageUrls = data.data.carrousel?.map((item: { formats: { small: { url: string }, medium: { url: string }, large: { url: string } } }) => {
                    // Choose the best image size based on container height
                    if (window.innerWidth >= 1024) {
                        return item.formats.large.url; // lg:h-[80vh]
                    } else if (window.innerWidth >= 768) {
                        return item.formats.medium.url; // md:h-[70vh]
                    } else if (window.innerWidth >= 640) {
                        return item.formats.small.url; // sm:h-[60vh]
                    } else {
                        return item.formats.small.url; // h-[50vh]
                    }
                }) || [];

                setresultCarousel(optimizedImageUrls);
                console.log(resultCarousel + optimizedImageUrls);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, [url]);
    return { resultCarousel };
}