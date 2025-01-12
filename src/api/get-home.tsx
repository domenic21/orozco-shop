
import { useEffect , useState } from "react";
const STRAPI_HOST = process.env.NEXT_PUBLIC_STRAPI_HOST;
export function useGetHomeInfo() {
 const url = `${STRAPI_HOST}/api/home?populate=HeroImage`;
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