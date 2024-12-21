import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import FooterContact from "./FooterContact"


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
                  <Phone className="w-5 h-5 mr-2" />
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>email</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>760 Bound Brook Rd, Dunellen, NJ 08812</span>
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