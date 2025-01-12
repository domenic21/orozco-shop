
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"



export default function Footer() {
    return (
        <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Manuel Orosco New Home Builder & Home Supplies</h4>
              <p className="text-gray-300">We are passionate about providing high-quality supplies and exceptional construction services to transform your living spaces.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                <Link 
            href="tel:732-713-3607"

            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          > 
                  <Phone className="w-5 h-5 mr-2" />
                  <span>732-713-3607</span> 
                  </Link>
       
          
            
                  
                </li>
                <li className="flex items-center">
                <Link 
            href="tel:732-713-7765"  className=" inline-flex"
            >
                  <Phone className="w-5 h-5 mr-2" />
                  <span>732-713-7765</span>
                  </Link>
         
            
                  
                </li>
                <li className="flex items-center">
                <Link href={"tel:732-259-4200"}  className=" inline-flex">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>732--259-4200</span>
                  </Link>
                  
                </li>
                <li className="flex items-center">
                <Link href={"mailto:sales@manuelhomesupplies.com"} className=" inline-flex" >
                  <Mail className="w-5 h-5 mr-2" />
                  <span>sales@manuelhomesupplies.com</span>
                 </Link>
                </li>
                <li className="flex items-center">
                <Link 
            href="https://maps.app.goo.gl/qGCFZBX6iH2Rym2r8" 
            target="_blank"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>760 Bound Brook Rd, Dunellen, NJ 08812</span>
                  </Link>
                </li>
              </ul>
            </div>
          {/* Business Hours Section */}
        <div>
          <h3 className="text-xl  mb-4 text-white" >
            BUSINESS HOURS
          </h3>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 mt-1 text-white" />
              <div className="space-y-2">
                <div>
                  <p className="text-white">Mon - Sat</p>
                  <p className="text-white">8:00am - 5:00pm</p>
                </div>
                <div>
                  <p className="text-white">Sunday</p>
                  <p className="text-white">Closed</p>
                </div>
             
              </div>
            </div>
        
            
     
            </div>
          </div>
          </div>
          </div>

      </footer>

    )}