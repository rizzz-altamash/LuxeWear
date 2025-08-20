// app/components/ComboDeals.js
'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const comboDeals = [
  {
    id: 1,
    title: "PLAIN T-SHIRTS 2.0",
    description: "PICK ANY 4 AT ₹1099",
    originalPrice: "₹2399",
    colors: "AVAILABLE IN 25+ COLORS",
    bgColor: "from-pink-100 to-pink-200",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23fce7f3'/%3E%3Crect x='40' y='60' width='120' height='80' fill='%23ec4899' rx='10'/%3E%3C/svg%3E"
  },
  {
    id: 2,
    title: "POLO T-SHIRTS",
    description: "PICK ANY 3 AT ₹1399",
    originalPrice: "₹1799",
    colors: "AVAILABLE IN 15+ COLORS",
    bgColor: "from-yellow-100 to-yellow-200",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3e8ff'/%3E%3Crect x='40' y='60' width='120' height='80' fill='%23a855f7' rx='10'/%3E%3C/svg%3E"
  },
  {
    id: 3,
    title: "PLAIN SHIRTS",
    description: "PICK ANY 3 AT ₹1998",
    originalPrice: "₹2997",
    colors: "AVAILABLE IN 20+ COLORS",
    bgColor: "from-blue-100 to-blue-200",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23dbeafe'/%3E%3Crect x='40' y='60' width='120' height='80' fill='%233b82f6' rx='10'/%3E%3C/svg%3E"
  },
  {
    id: 4,
    title: "LOOSE JEANS",
    description: "PICK ANY 2 AT ₹1599",
    originalPrice: "₹2499",
    colors: "AVAILABLE IN 8+ COLORS",
    bgColor: "from-red-100 to-red-200",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Crect x='40' y='60' width='120' height='80' fill='%236b7280' rx='10'/%3E%3C/svg%3E"
  },
  {
    id: 5,
    title: "HOODIES",
    description: "PICK ANY 2 AT ₹1899",
    originalPrice: "₹2899",
    colors: "AVAILABLE IN 12+ COLORS",
    bgColor: "from-purple-100 to-purple-200",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23dcfce7'/%3E%3Crect x='40' y='60' width='120' height='80' fill='%2322c55e' rx='10'/%3E%3C/svg%3E"
  }
]

export default function ComboDeals() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleItems = 4

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + visibleItems >= comboDeals.length ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(comboDeals.length - visibleItems, 0) : prevIndex - 1
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">SUPER SAVING COMBOS</h2>
          <p className="text-gray-600">Loved by 4+ millions</p>
        </div>
        
        {/* Combo Cards Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-yellow-400 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft size={24} className="text-black" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-yellow-400 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight size={24} className="text-black" />
          </button>
          
          {/* Cards Grid */}
          <div className="overflow-hidden mx-10 pt-3 pb-10">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {comboDeals.map((combo) => (
                <div
                  key={combo.id}
                  className="flex-shrink-0 w-1/4 px-3"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                    
                    {/* Image Section */}
                    <div className={`bg-gradient-to-br ${combo.bgColor} p-8 h-64 flex items-center justify-center relative`}>
                      <div className="w-full h-full bg-white rounded-xl shadow-inner flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                          <div className="grid grid-cols-3 gap-1">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className="w-6 h-6 bg-gray-200 rounded"></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative Leaf */}
                      <div className="absolute top-4 right-4 w-8 h-12 bg-green-400 rounded-full transform rotate-45"></div>
                      <div className="absolute top-6 right-6 w-4 h-8 bg-green-300 rounded-full transform rotate-45"></div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{combo.title}</h3>
                      
                      <div className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg mb-3 text-sm">
                        {combo.description}
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-4">{combo.colors}</p>
                      
                      <div className="flex justify-center items-center space-x-2 text-sm">
                        <span className="text-gray-500 line-through">{combo.originalPrice}</span>
                        <span className="text-green-600 font-semibold">(50% off)</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Text */}
        <div className="text-center mt-8">
          <p className="text-gray-600">NO COST | 3 EASY EMIs – Activate at Checkout</p>
        </div>
      </div>
    </section>
  )
}