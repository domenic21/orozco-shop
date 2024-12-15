'use client'
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {ArrowRight} from "lucide-react"
import {motion} from "framer-motion"


export default function Hero() {
    return ( 
        <main className="flex-grow">
           {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)]"

      >
       <motion.div
      className="relative w-full h-screen overflow-hidden"
      initial={{ backgroundPosition: "50% 50%" }}
      animate={{
        backgroundPosition: [
          "50% 50%", // Start
          "60% 40%", // Slight shift
          "40% 60%", // Opposite shift
          "50% 50%", // Return to start
        ],
        scale: [1, 1.05, 1, 1], // Zoom effect
      }}
      transition={{
        duration: 15, // Total duration for one animation cycle
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        position: "relative", // Needed for layout
        backgroundPosition: "50% 50%", // Start position
        backgroundSize: "cover", // Ensures image covers the container
      }}
    >
      <Image
        src="/tilestock.jpg?height=1080&width=1920"
        alt="Luxury tile installation"
        layout="fill"
        objectFit="cover"
        className="opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/30" />
        <div className="relative h-full container mx-auto px-4 py-20 flex flex-col justify-center">
          <motion.h1 className="text-4xl md:text-5xl font-light tracking-wider mb-6 text-gray-800"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          
          >
          BUILDING YOUR DREAM HOME
          </motion.h1>
          <motion.p className="text-2xl md:text-3xl font-light mb-2 text-gray-700"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}>
          QUALITY CONSTRUCTION & PREMIUM SUPPLIES
          </motion.p>
          <p className="text-2xl md:text-3xl font-light mb-8 text-gray-700">
            
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-fit text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors group"
          >
            Explore Collection
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
    </motion.div>
  
      
        
      </section>
      </main>
    );
}