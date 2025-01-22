'use client';
import { useGetShowroomInfo } from "@/api/get-showroom";
import CarouselGallery from './CarouselGallery';
import { motion } from 'framer-motion';


interface ShowroomInfo {
  title: string;
  subtitle: string;
  image: {
    url: string;
  };
    address: {
        address: string;
    }[];
    MediaShowroomCarousel: {
        url: string;
    }[];
}

export const Showroom = () => {
  const result = useGetShowroomInfo().result as { data: ShowroomInfo } | null;

  
  if (!result) {
    return <div>Loading...</div>;
  }

  const { title, subtitle, image} = result.data;
  const Image = image.url;

 
//const Address = address.map((address) => `${address.address}`).join(', ');
  return (
    <div className="bg-white">
          {/* Hero Section */}
          <section className="relative h-[80vh] overflow-hidden">
   
            <video
                src={Image}
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 ">
                <div className="bg-slate-50 opacity-80 w-full md:w-[650px] rounded-lg p-8 sm:p-4">
                <motion.h1 
                className="text-2xl md:text-6xl font-light text-black  mb-4 sm:text-2xl sm:font-semibold sm:mb-1"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                >
                    {title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                className="text-base md:text-xl mb-8 max-w-2xl  text-gray-950">
                    {subtitle}
                </motion.p>
                </div>
           
              </div>
            </div>
        
          </section>
          
      <CarouselGallery /> 
   
          </div>
  );
};

