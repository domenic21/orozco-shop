import Link from "next/link";


export default function Header () {
  return (
    <div className="">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">TileShop</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href={'/Home'} className="text-gray-600 hover:text-gray-800">Home</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Products</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Gallery</a></li>
              <li><Link href={'/Installations'} className="text-gray-600 hover:text-gray-800">Services</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>

          </nav>
        </div>
      </header></div>
  )
}

