'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useGetShowroomCarousel } from '@/api/get-showroom';



interface CarouselProps {
  resultCarousel: string[] | null;
}

  
export  const CarouselShowroom = () => {
   
    
    const result = useGetShowroomCarousel() as CarouselProps | null;
    const [activeImage, setActiveImage] = useState(0);
  
 const imagesCarousel = result?.resultCarousel?.map(image => `${process.env.NEXT_PUBLIC_STRAPI_HOST}${image}`) || [];
 
    if (!result) {
      return <div>Loading...</div>;
    }
  
    

  const nextImage = () => {
    if (imagesCarousel.length > 0) {
      setActiveImage((prev) => (prev + 1) % imagesCarousel.length)
    }
  }

  const previousImage = () => {
    if (imagesCarousel.length > 0) {
      setActiveImage((prev) => (prev - 1 + imagesCarousel.length) % imagesCarousel.length)
    }
  }

 




  if (imagesCarousel.length === 0) {
    return (
      <div className="relative aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    )
  }
 


  return (
    <div 
      className="relative aspect-square"
     
    >
        
      <div className="relative h-full w-full overflow-hidden ">
        {imagesCarousel.map((image: string, index: number) => (
          <div
            key={index}
            className={`absolute h-full w-full transition-transform duration-500 ease-in-out  ${
              index === activeImage 
                ? 'translate-x-0' 
                : index < activeImage 
                  ? '-translate-x-full' 
                  : 'translate-x-full'
            }`}
          >
            <img
              src={image}
              alt={`Carousel Image ${index + 1}`}
              className="h-full w-full object-contain rounded-[130px]"
            />
            
          </div>
        ))}
      </div>

      {imagesCarousel.length > 1 && (
        <>
          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-2">
            {imagesCarousel.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  activeImage === index 
                    ? 'w-4 bg-white' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    
    </div>
  )
}