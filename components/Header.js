// app/components/Header.js
'use client'
import { useState } from 'react'
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Free Shipping Sitewide on Every Order, Don't Miss Out!!
      </div>
      
      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">LUXEWEAR</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center">
                  TOPWEAR
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Shirts</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">T-Shirts</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Polo T-Shirts</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hoodies</a>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center">
                  BOTTOMWEAR
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Jeans</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Trousers</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cargo</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Shorts</a>
                  </div>
                </div>
              </div>
              
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">COMBOS</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">NEW ARRIVALS</a>
            </nav>
            
            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button className="text-gray-700 hover:text-gray-900 p-2">
                <Search size={20} />
              </button>
              
              {/* Cart */}
              <button className="text-gray-700 hover:text-gray-900 p-2 relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  0
                </span>
              </button>
              
              {/* User Account */}
              <div className="hidden md:flex items-center space-x-2">
                <User size={16} />
                <span className="text-sm text-gray-700">LOG IN / SIGNUP</span>
              </div>
              
              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-700 hover:text-gray-900 p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">TOPWEAR</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">BOTTOMWEAR</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">COMBOS</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">NEW ARRIVALS</a>
              <div className="border-t pt-3 mt-3">
                <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">LOG IN / SIGNUP</a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}