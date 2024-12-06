import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import {Button} from "@/components/ui/button"

export default function Hero() {
    return ( 
        <main className="flex-grow">
        <section className="bg-gray-100 py-12 md:py-20 bg-cover bg-center" style={{ backgroundImage: "url('/tilestock.jpg?height=400&width=600')" }}>
          <div className="container mx-auto px-4">
            <div className="relative max-w-3xl mx-auto text-center " >
              <div className="bg-black bg-opacity-50 p-8 rounded-md">
                <h2 className="text-4xl font-bold text-white mb-4">Transform Your Space with Premium Tiles</h2>
                <p className="text-xl text-gray-200 mb-8">Discover our extensive collection of high-quality ceramic tiles for every style and budget.</p>
                <Button size="lg">Explore Collection</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Tiles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Marble Elegance", description: "Luxurious marble-effect tiles", image: "/marble.jpg?height=400&width=600" },
                { name: "Rustic Wood", description: "Authentic wood-look ceramic tiles", image: "/rusticwood.jpg?height=400&width=600" },
                { name: "Modern Geometric", description: "Bold patterns for contemporary spaces", image: "/modernGeometric.jpg?height=400&width=600" },
              ].map((tile, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{tile.name}</CardTitle>
                    <CardDescription>{tile.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={tile.image}
                      alt={tile.name}
                      width={600}
                      height={400}
                      className="rounded-md object-cover w-full h-48"
                    />
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Explore Our Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Floor Tiles",
                "Wall Tiles",
                "Outdoor Tiles",
                "Mosaic Tiles",
                "Kitchen Tiles",
                "Bathroom Tiles",
                "Porcelain Tiles",
                "Natural Stone",
              ].map((category, index) => {
                // Format category name to match file naming convention
                const formattedCategory = category.toLowerCase().replace(/\s+/g, "-");
                const imageSrc = `/categories/${formattedCategory}.jpg`;// Dynamically construct path
            
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-center">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={imageSrc}
                        alt={category}
                        width={300}
                        height={200}
                        className="rounded-md object-cover w-full h-32"
                      />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    );
}