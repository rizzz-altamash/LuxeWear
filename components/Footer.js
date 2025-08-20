// app/components/Footer.js

/* eslint-disable react/no-unescaped-entities */
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  CreditCard,
  Truck,
  Shield,
  RotateCcw
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      
      {/* Newsletter Section */}
      <div className="bg-yellow-400 text-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with LUXEWEAR</h3>
            <p className="text-lg mb-6">Get the latest fashion trends and exclusive offers</p>
            
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none ring-1 ring-gray-700 focus:ring-2 focus:ring-gray-900 text-gray-900"
              />
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold text-yellow-400">LUXEWEAR</h2>
              <p className="text-gray-300 leading-relaxed">
                Premium fashion for the modern lifestyle. We believe in creating high-quality, 
                comfortable, and stylish clothing that makes you look and feel your best.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-yellow-400" />
                  <span className="text-gray-300">123 Fashion Street, Mumbai, Maharashtra 400001</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-yellow-400" />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-yellow-400" />
                  <span className="text-gray-300">hello@luxewear.com</span>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-800 hover:bg-yellow-400 hover:text-black p-3 rounded-full transition-all duration-200">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-yellow-400 hover:text-black p-3 rounded-full transition-all duration-200">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-yellow-400 hover:text-black p-3 rounded-full transition-all duration-200">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-yellow-400 hover:text-black p-3 rounded-full transition-all duration-200">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Size Guide</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Care Instructions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Bulk Orders</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Press</a></li>
              </ul>
            </div>
            
            {/* Categories */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Categories</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">T-Shirts</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Shirts</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Jeans</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Hoodies</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Combos</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Accessories</a></li>
              </ul>
            </div>
            
            {/* Customer Service */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Customer Service</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Track Your Order</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Returns & Exchanges</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Shipping Info</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Help Center</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Truck className="text-yellow-400" size={24} />
              <div className="text-left">
                <p className="text-white font-semibold">Free Shipping</p>
                <p className="text-gray-300 text-sm">On all orders above ₹999</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <RotateCcw className="text-yellow-400" size={24} />
              <div className="text-left">
                <p className="text-white font-semibold">Easy Returns</p>
                <p className="text-gray-300 text-sm">30-day return policy</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Shield className="text-yellow-400" size={24} />
              <div className="text-left">
                <p className="text-white font-semibold">Secure Payments</p>
                <p className="text-gray-300 text-sm">100% secure transactions</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <CreditCard className="text-yellow-400" size={24} />
              <div className="text-left">
                <p className="text-white font-semibold">Easy EMI</p>
                <p className="text-gray-300 text-sm">No cost EMI available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} LUXEWEAR. All rights reserved.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}