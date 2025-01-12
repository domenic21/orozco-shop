'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Expand} from 'lucide-react'
import clsx from "clsx";

interface AnimatedGalleryProps {
  images?: string[]
}

export default function AnimatedGallery({ images = [] }: AnimatedGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);

  useEffect(() => { // Check if the user is on a desktop or laptop as the Dialog component is not supported on mobile
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsDesktopOrLaptop(mediaQuery.matches); // Set the initial state

    const handleMediaChange = (event: MediaQueryListEvent) => { // Update the state when the user changes the screen size
      setIsDesktopOrLaptop(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange); // Listen for changes in the media query
    return () => mediaQuery.removeEventListener('change', handleMediaChange);// Clean up the event listener
  }, []); // Empty array ensures that the effect is only run on mount and unmount


  if (images.length === 0) {
    return (
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500">No images available</p>
      </div>
    )
  }
 
  return (
    <div className="container  ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img 
              src={image} 
              alt={`Showroom Image ${index + 1}`} 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
              <Dialog >
                <DialogTrigger asChild >
                  {isDesktopOrLaptop && (
                    <Button 
                      variant="ghost" 
                      size='lg'
                      className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
                      onClick={() => setSelectedImage(image)}
                    >
                      <Expand className="h-8 w-8" />
                    </Button>
                  )}
                </DialogTrigger>
                {isDesktopOrLaptop && (
                <DialogContent 
                className={clsx(  " h-[80svh] w-full p-0",isDesktopOrLaptop? " h-[80svh] w-full p-0" :"h-0 w-0 p-0")}>
                  <div className="relative h-full w-full">
                    <img 
                      src={selectedImage || image} 
                      alt="Enlarged showroom image" 
                      className="h-full w-full object-center "
                    />
                    <DialogTitle>
                        Showroom at Manuel Orosco Store
                    </DialogTitle>
               
                     
               
                  </div>
                </DialogContent>
                  )}
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}