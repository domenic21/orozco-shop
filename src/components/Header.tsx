'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Input } from "@/components/ui/input"
import { Menu } from 'lucide-react'


export default function Header () {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="">
        {/* Header with Search and Navigation */}
        <header className="bg-white shadow-sm sticky top-0 z-50 ">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-light tracking-wider text-gray-800">
            <Image
                src="/logoLetters.png"
                alt="Company Logo"
                width={500}
                height={500}
            />
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              {/*<Input 
                type="search" 
                placeholder="Search..." 
                className="w-64"
                
                
              />*/}
              <nav>
                <ul className="flex space-x-6">
                    {[
                    //{ name: 'Locations', path: '/locations' },
                    //{ name: 'Gallery', path: '/gallery' },
                    { name: 'Installations', path: '/Installations' },
                    { name: 'Contact Us', path: '/Contact' }
                    ].map((item) => (
                    <li key={item.name}>
                      <Link href={item.path} className="text-gray-600 hover:text-gray-800 transition-colors">
                      {item.name}
                      </Link>
                    </li>
                    ))}
                
                </ul>
              </nav>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4">
            <div className="container mx-auto px-4">
              <Input 
                type="search" 
                placeholder="Search..." 
                className="w-full mb-4"
              
              />
              <nav>
              <ul className=" space-y-4">
                    {[
                   // { name: 'Products', path: '/products' }, 
                    //{ name: 'Locations', path: '/locations' },
                    //{ name: 'Gallery', path: '/gallery' },
                    { name: 'Installations', path: '/Installations' },
                    { name: 'Contact Us', path: '/Contact' }
                    ].map((item) => (
                    <li key={item.name}>
                      <Link href={item.path} className="text-gray-600 hover:text-gray-800 transition-colors">
                      {item.name}
                      </Link>
                    </li>
                    ))}
                
                </ul>
              </nav>
            </div>
          </div>
        )}
      </header>
     </div>
  )
}

