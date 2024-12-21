import { MapPin, Phone, Mail, Clock, Facebook, Instagram, InstagramIcon } from 'lucide-react'

export default function FooterContact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Get in Touch Section */}
        <div>
          <h3 className="text-2xl font-light mb-8" style={{ color: '#B17F4A' }}>
            GET IN TOUCH
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-1 text-gray-600" />
              <div>
                <p className="text-gray-800">812 Hamilton Street,</p>
                <p className="text-gray-800">Somerset, NJ 08873</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-600" />
              <a href="tel:1-800-268-3108" className="text-gray-800 hover:text-gray-600 transition-colors">
                1-800-268-3108
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-600" />
              <a href="mailto:home.built@yahoo.com" className="text-gray-800 hover:text-gray-600 transition-colors">
                home.built@yahoo.com
              </a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-light mb-6" style={{ color: '#B17F4A' }}>
              CONNECT WITH US
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        

        
        </div>
      </div>
  
  )
}