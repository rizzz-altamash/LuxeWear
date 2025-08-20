// app/components/NewArrivals.js
'use client'
import { useState } from 'react'
import { Heart, ShoppingBag, Star } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "Premium Cotton Shirt",
    price: "₹999",
    originalPrice: "₹1499",
    discount: "33% OFF",
    rating: 4.5,
    reviews: 142,
    colors: ["#ffffff", "#87ceeb", "#ffb6c1", "#98fb98"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    isFavorite: false,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f8f9fa'/%3E%3Cpath d='M50 80 L250 80 L250 320 L50 320 Z' fill='%236c757d' opacity='0.8'/%3E%3Cpath d='M80 50 L220 50 L230 80 L70 80 Z' fill='%236c757d' opacity='0.6'/%3E%3Ctext x='150' y='200' text-anchor='middle' fill='white' font-size='24' font-family='Arial'>SHIRT%3C/text%3E%3C/svg%3E"
  },
  {
    id: 2,
    name: "Casual Polo T-Shirt",
    price: "₹699",
    originalPrice: "₹999",
    discount: "30% OFF",
    rating: 4.3,
    reviews: 89,
    colors: ["#000000", "#ffffff", "#ff6b6b", "#4ecdc4"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    isFavorite: true,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f8f9fa'/%3E%3Cpath d='M60 90 L240 90 L240 320 L60 320 Z' fill='%23007bff' opacity='0.8'/%3E%3Cpath d='M90 60 L210 60 L220 90 L80 90 Z' fill='%23007bff' opacity='0.6'/%3E%3Ctext x='150' y='200' text-anchor='middle' fill='white' font-size='20' font-family='Arial'>POLO%3C/text%3E%3C/svg%3E"
  },
  {
    id: 3,
    name: "Slim Fit Jeans",
    price: "₹1299",
    originalPrice: "₹1899",
    discount: "32% OFF",
    rating: 4.7,
    reviews: 203,
    colors: ["#1a1a1a", "#4169e1", "#36454f"],
    sizes: ["28", "30", "32", "34", "36"],
    isNew: false,
    isFavorite: false,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f8f9fa'/%3E%3Cpath d='M80 60 L220 60 L225 380 L75 380 Z' fill='%23343a40' opacity='0.8'/%3E%3Cpath d='M100 60 L200 60 L202 150 L98 150 Z' fill='%23343a40' opacity='0.6'/%3E%3Ctext x='150' y='220' text-anchor='middle' fill='white' font-size='22' font-family='Arial'>JEANS%3C/text%3E%3C/svg%3E"
  },
  {
    id: 4,
    name: "Comfortable Hoodie",
    price: "₹1599",
    originalPrice: "₹2299",
    discount: "30% OFF",
    rating: 4.6,
    reviews: 156,
    colors: ["#808080", "#000000", "#8b0000", "#000080"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    isFavorite: true,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f8f9fa'/%3E%3Cpath d='M40 100 L260 100 L260 340 L40 340 Z' fill='%236f42c1' opacity='0.8'/%3E%3Cpath d='M70 70 L230 70 L240 100 L60 100 Z' fill='%236f42c1' opacity='0.6'/%3E%3Ccircle cx='150' cy='90' r='15' fill='%236f42c1' opacity='0.7'/%3E%3Ctext x='150' y='220' text-anchor='middle' fill='white' font-size='18' font-family='Arial'>HOODIE%3C/text%3E%3C/svg%3E"
  }
]

export default function NewArrivals() {
  const [favorites, setFavorites] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = product.isFavorite
      return acc
    }, {})
  )

  const toggleFavorite = (productId) => {
    setFavorites(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }))
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={12}
        className={index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">NEW ARRIVALS</h2>
          <p className="text-gray-600 text-lg">Fresh styles just dropped</p>
        </div>
        
        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {product.discount}
                  </span>
                </div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`p-2 rounded-full shadow-lg transition-all duration-200 ${
                      favorites[product.id]
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart size={16} className={favorites[product.id] ? 'fill-current' : ''} />
                  </button>
                  
                  <button className="bg-white text-gray-700 hover:bg-yellow-400 hover:text-black p-2 rounded-full shadow-lg transition-all duration-200">
                    <ShoppingBag size={16} />
                  </button>
                </div>
                
                {/* Quick Add to Cart - appears on hover */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg transition-all duration-200">
                    Quick Add
                  </button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-6 space-y-4">
                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-200">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>
                
                {/* Price */}
                <div className="flex items-center space-x-3">
                  <span className="text-xl font-bold text-gray-900">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                </div>
                
                {/* Colors */}
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">Colors:</span>
                  <div className="flex space-x-1">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-gray-200 hover:scale-110 transition-transform duration-200 cursor-pointer"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Sizes */}
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">Sizes:</span>
                  <div className="flex space-x-1">
                    {product.sizes.slice(0, 4).map((size, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 hover:bg-yellow-400 hover:text-black px-2 py-1 rounded cursor-pointer transition-all duration-200"
                      >
                        {size}
                      </span>
                    ))}
                    {product.sizes.length > 4 && (
                      <span className="text-xs text-gray-500">+{product.sizes.length - 4}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 hover:bg-yellow-400 hover:text-black text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}