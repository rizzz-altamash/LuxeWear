// app/components/Categories.js
'use client'
import { useState } from 'react'

const categories = [
  {
    id: 1,
    title: "TOPWEAR",
    subtitle: "Premium Collection",
    items: ["Shirts", "T-Shirts", "Polo", "Hoodies"],
    bgColor: "from-blue-400 to-blue-600",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%233b82f6'/%3E%3Cpath d='M50 60 L150 60 L150 140 L50 140 Z' fill='%23ffffff' opacity='0.9'/%3E%3Cpath d='M70 40 L130 40 L140 60 L60 60 Z' fill='%23ffffff' opacity='0.8'/%3E%3C/svg%3E"
  },
  {
    id: 2,
    title: "BOTTOMWEAR",
    subtitle: "Comfort & Style",
    items: ["Jeans", "Trousers", "Cargo", "Shorts"],
    bgColor: "from-purple-400 to-purple-600",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23a855f7'/%3E%3Cpath d='M70 50 L130 50 L135 180 L65 180 Z' fill='%23ffffff' opacity='0.9'/%3E%3Cpath d='M85 50 L115 50 L118 100 L82 100 Z' fill='%23ffffff' opacity='0.7'/%3E%3C/svg%3E"
  },
  {
    id: 3,
    title: "COMBOS",
    subtitle: "Best Value Deals",
    items: ["Mix & Match", "Seasonal", "Festive", "Casual"],
    bgColor: "from-green-400 to-green-600",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%2322c55e'/%3E%3Ccircle cx='100' cy='100' r='60' fill='%23ffffff' opacity='0.9'/%3E%3Cpath d='M80 80 L120 80 L120 120 L80 120 Z' fill='%2322c55e'/%3E%3C/svg%3E"
  },
  {
    id: 4,
    title: "ACCESSORIES",
    subtitle: "Complete Your Look",
    items: ["Belts", "Caps", "Watches", "Bags"],
    bgColor: "from-orange-400 to-orange-600",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23fb923c'/%3E%3Ccircle cx='100' cy='80' r='25' fill='%23ffffff' opacity='0.9'/%3E%3Crect x='75' y='120' width='50' height='40' fill='%23ffffff' opacity='0.8' rx='5'/%3E%3C/svg%3E"
  }
]

export default function Categories() {
  const [hoveredCategory, setHoveredCategory] = useState(null)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">SHOP BY CATEGORY</h2>
          <p className="text-gray-600 text-lg">Discover our premium collections</p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} transition-all duration-500 ${
                hoveredCategory === category.id ? 'scale-110' : 'scale-100'
              }`}></div>
              
              {/* Content */}
              <div className="relative p-8 h-80 flex flex-col justify-between text-black">
                {/* Top Section */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-wide">{category.title}</h3>
                  <p className="text-sm opacity-90">{category.subtitle}</p>
                </div>
                
                {/* Visual Element */}
                {/* <div className="flex justify-center my-6">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <div className="w-16 h-16 bg-white bg-opacity-30 rounded-xl"></div>
                  </div>
                </div> */}
                
                {/* Bottom Section */}
                <div className="space-y-3">
                  {/* Items List */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {category.items.map((item, index) => (
                      <span
                        key={index}
                        className="bg-white bg-opacity-20 rounded-full px-3 py-1 text-center backdrop-blur-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <button className="w-full bg-white text-gray-900 font-semibold py-3 rounded-xl hover:bg-opacity-90 transition-all duration-200 transform group-hover:scale-105">
                    Shop Now
                  </button>
                </div>
              </div>
              
              {/* Hover Effect Overlay */}
              {/* <div className={`absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 ${
                hoveredCategory === category.id ? 'opacity-100' : 'opacity-0'
              }`}></div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}