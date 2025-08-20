// app/components/HeroSection.js
// export default function HeroSection() {
//   return (
//     <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
//       {/* Decorative Elements */}
//       <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
//         <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M20 20 Q 50 0, 80 20 Q 100 50, 80 80 Q 50 100, 20 80 Q 0 50, 20 20' fill='%23059669'/%3E%3C/svg%3E" alt="" />
//       </div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10 transform rotate-45">
//         <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M20 20 Q 50 0, 80 20 Q 100 50, 80 80 Q 50 100, 20 80 Q 0 50, 20 20' fill='%23059669'/%3E%3C/svg%3E" alt="" />
//       </div>
      
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
          
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <p className="text-emerald-600 font-medium tracking-wide">Build A Combo That's So You</p>
//               <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                 LUXEWEAR
//                 <span className="block text-4xl lg:text-5xl mt-2">COMBOS</span>
//               </h1>
//               <p className="text-xl text-gray-600 font-medium">Any Color, Any Size.</p>
//             </div>
            
//             <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
//               Customize Now
//             </button>
//           </div>
          
//           {/* Right Content - Product Showcase */}
//           <div className="relative">
//             <div className="grid grid-cols-2 gap-6">
//               {/* Clothing Rack */}
//               <div className="col-span-2 flex justify-center mb-6">
//                 <div className="relative">
//                   {/* Wooden Stand */}
//                   <div className="w-32 h-40 bg-gradient-to-b from-yellow-700 to-yellow-800 rounded-lg"></div>
                  
//                   {/* Hanging Clothes */}
//                   <div className="absolute -top-4 left-4 w-24 h-32 bg-pink-200 rounded-lg shadow-lg transform -rotate-6"></div>
//                   <div className="absolute -top-2 right-4 w-20 h-28 bg-red-400 rounded-lg shadow-lg transform rotate-12"></div>
//                 </div>
//               </div>
              
//               {/* Product Images */}
//               <div className="space-y-4">
//                 <div className="w-full h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-lg"></div>
//                 <div className="w-full h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-lg"></div>
//               </div>
              
//               <div className="space-y-4 mt-8">
//                 <div className="w-full h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-lg"></div>
//                 <div className="w-full h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl shadow-lg"></div>
//               </div>
//             </div>
            
//             {/* Decorative Plant */}
//             <div className="absolute -bottom-4 right-8 w-16 h-24 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-full"></div>
//             <div className="absolute -bottom-2 right-10 w-12 h-8 bg-yellow-700 rounded-full"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample images for your clothing store - replace with your actual images
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
      title: "Summer Collection 2024",
      subtitle: "Fresh styles for the season"
    },
    {
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=600&fit=crop",
      title: "Premium Fabrics",
      subtitle: "Comfort meets style"
    },
    {
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&h=600&fit=crop",
      title: "Designer Outfits",
      subtitle: "Curated just for you"
    },
    {
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=600&fit=crop",
      title: "Luxury Collection",
      subtitle: "Elevate your wardrobe"
    }
  ];

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-96 md:h-[50vh] overflow-hidden">
      {/* Slideshow Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay for better text readability */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-black px-6 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
                    LUXEWEAR
                  </h1>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light">
                    {slide.subtitle}
                  </p>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 bg-opacity-20 hover:bg-opacity-30 text-black p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 bg-opacity-20 hover:bg-opacity-30 text-black p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-yellow-400 scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
        <div
          className="h-full bg-yellow-400 transition-all duration-100 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
}