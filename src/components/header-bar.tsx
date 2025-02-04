import Link from 'next/link'
import { MapPin, Phone,  Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function HeaderBar() {
  return (
    <div className="bg-black text-white py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-end gap-4 md:gap-6">
          <Link 
            href="https://maps.app.goo.gl/qGCFZBX6iH2Rym2r8" 
            target="_blank"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <MapPin className="w-4 h-4" />
            <span className="hidden md:inline">760 Bound Brook Rd, Dunellen, NJ 08812</span>
          </Link>

          <Link 
            href="tel:732-713-3607"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>732-713-3607</span>
          </Link>

          <Link 
           href="https://wa.me/17327133607"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              target="_blank"
                rel="noopener noreferrer"
          >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Chat with us</span>
          </Link>
         

          <div className="flex items-center gap-3 border-l border-gray-700 pl-4">
            <Link 
              href="https://www.facebook.com/profile.php?id=61572174564469"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Facebook"
              target='_blank'
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link 
              href="https://www.instagram.com/manuelhomesupplies/"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Instagram"
              target='_blank'
            >
              <Instagram className="w-4 h-4" />
            </Link>
            
                    
          </div>
        </div>
      </div>
    </div>
  )
}