import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProductsHome() {
  return (
    <div>
      {/* Product Categories */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-gray-800">
            PRODUCT CATEGORIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Luxury Marble",
                image: "/categories/bathroom-tiles.jpg?height=600&width=600",
              },
              {
                name: "Premium Porcelain",
                image: "/categories/porcelain-tiles.jpg?height=600&width=600",
              },
              {
                name: "Designer Collections",
                image: "/categories/mosaic-tiles.jpg?height=600&width=600",
              },
            ].map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-light text-gray-800">
                    {category.name}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>


      </section>
      
    </div>
  );
}
