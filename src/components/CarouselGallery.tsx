'use client'
import { useState } from 'react';
import AnimatedGallery from './AnimatedGallery'
import { useGetShowroomCarousel } from '@/api/get-showroom';
import { motion } from 'framer-motion';

interface CarouselProps {
    resultCarousel: string[] | null;
  }

export default function ShowroomLocation() {
  
      const result = useGetShowroomCarousel() as CarouselProps | null;
      
    
   const imagesCarousel = result?.resultCarousel?.map(image => `${process.env.NEXT_PUBLIC_STRAPI_HOST}${image}`) || [];

  return (
    
    <div className="bg-white">
      

      {/* Showroom Images Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 ">
          <motion.h2 
              className="relative  overflow-hidden text-4xl mb-8 text-center font-sans font-medium "
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              style={{
              // Start position
                color: '#8a817c'
                          }}
        >
            Our Showroom Gallery
          </motion.h2>
          <AnimatedGallery images={imagesCarousel}  />
        </div>
      </section>

    
    </div>
  )
}