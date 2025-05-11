"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useGetHomeCarousel } from "@/api/get-showroom";

interface HeroCarouselProps {
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  showProgress?: boolean;
}

export function HeroCarousel({
  autoPlayInterval = 5000,
  showArrows = true,
  showDots = true,
  showProgress = true,
}: HeroCarouselProps) {
  const { resultCarousel = [] } = useGetHomeCarousel() || {}; // Ensure resultCarousel defaults to an empty array
  const imagesCarrousel =
    resultCarousel?.map((image: { src: string }) => ({
      src: `${image}`,
      align: "center" as "center" | "left" | "right", // Default alignment
      title: "Default Title", // Default title
      subtitle: "Default Subtitle", // Default subtitle
      cta: "Learn More", // Default call-to-action
    })) || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = imagesCarrousel;

  // Handle slide navigation
  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      setProgress(0);
    },
    [currentIndex]
  );

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  // Auto-play functionality
  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let slideInterval: NodeJS.Timeout;

    if (isAutoPlaying) {
      // Update progress bar
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 100 / (autoPlayInterval / 100);
          return Math.min(newProgress, 100);
        });
      }, 100);

      // Change slide
      slideInterval = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [isAutoPlaying, nextSlide, autoPlayInterval]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // // Get alignment classes based on slide configuration
  // const getAlignmentClasses = (align: "left" | "center" | "right") => {
  //   switch (align) {
  //     case "left":
  //       return "text-left items-start";
  //     case "center":
  //       return "text-center items-center";
  //     case "right":
  //       return "text-right items-end";
  //     default:
  //       return "text-left items-start";
  //   }
  // };

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  // const textVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: (custom: number) => ({
  //     opacity: 1,
  //     y: 0,
  //     transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" },
  //   }),
  // };

  if (!resultCarousel) {
    return <div>Loading...</div>;
  }

  return (
 <div
  className="relative w-full h-[50vh] sm:h-[30vh] md:h-[70vh] lg:h-[80vh] xl:h-[80vh] overflow-hidden"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
      {/* Main carousel */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background image with zoom effect */}
      <motion.div
  className="absolute inset-0 w-full h-full"
  initial={{ scale: 1 }}
  animate={{ scale: 1.05 }}
  transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
>
  <img
    src={slides[currentIndex]?.src || "/placeholder.svg"}
    alt={`Slide ${currentIndex + 1}`}
    className="w-full h-full object-contain"
  />
</motion.div>
          {/* Gradient overlay */}
          <div
            className={cn("absolute inset-0 bg-gradient-to-r")}
          />
{/* 
          Content
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24">
            <div
              className={cn(
                "flex flex-col max-w-xl gap-4",
                getAlignmentClasses(slides[currentIndex].align)
              )}
            >
              <motion.h2
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              >
                {slides[currentIndex].title}
              </motion.h2>

              <motion.p
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-base sm:text-lg md:text-xl text-white/90 max-w-md"
              >
                {slides[currentIndex].subtitle}
              </motion.p>

              <motion.div
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                <Button
                  size="lg"
                  className="mt-4 bg-white text-black hover:bg-white/90 hover:text-black"
                >
                  {slides[currentIndex].cta}
                </Button>
              </motion.div> */}
            {/* </div>
          </div> */}
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      {showArrows && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 z-10"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 z-10"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Slide indicators */}
      {showDots && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                currentIndex === index
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/70"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress bar */}
      {showProgress && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-10">
          <motion.div
            className="h-full bg-white"
            style={{ width: `${progress}%` }}
            animate={{ width: isAutoPlaying ? "100%" : `${progress}%` }}
            transition={
              isAutoPlaying
                ? { duration: autoPlayInterval / 1000, ease: "linear" }
                : { duration: 0 }
            }
          />
        </div>
      )}
    </div>
  );
}