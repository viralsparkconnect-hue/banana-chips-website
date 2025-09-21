import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useCart } from '@/context/CartContext'

export default function Home() {
  const { addToCart } = useCart()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  const heroSlides = [
    {
      emoji: "🍌",
      title: "Premium Banana Chips",
      subtitle: "From India to the World",
      description: "Authentic flavors, global quality standards"
    },
    {
      emoji: "🌶️",
      title: "Spicy Peri-Peri",
      subtitle: "International Fusion",
      description: "Bold flavors that unite taste buds worldwide"
    },
    {
      emoji: "🍯",
      title: "Sweet Jaggery",
      subtitle: "Traditional & Pure",
      description: "Ancient recipes, modern packaging"
    },
    {
      emoji: "🙏",
      title: "Fasting Friendly",
      subtitle: "Spiritual Snacking",
      description: "Respecting traditions, serving globally"
    }
  ]

  const features = [
    {
      icon: "🌍",
      title: "Global Standards",
      description: "International quality certifications and food safety standards"
    },
    {
      icon: "🌿",
      title: "100% Natural",
      description: "No artificial preservatives, colors, or flavors. Pure ingredients only"
    },
    {
      icon: "🚚",
      title: "Worldwide Shipping",
      description: "Fresh delivery to 50+ countries with temperature-controlled packaging"
    },
    {
      icon: "🏆",
      title: "Award Winning",
      description: "Best Snack Brand 2024 by International Food & Beverage Association"
    }
  ]

  // Enhanced products data with all properties
  const products = [
    {
      id: 1,
      name: "Classic Salted Banana Chips",
      category: "classic",
      price: 120,
      originalPrice: 150,
      weight: 250,
      pricePerKg: 480,
      image: "/images/classic-salted.jpg",
      description: "Crispy and lightly salted banana chips – the all-time favorite snack.",
      rating: 4.5,
      reviews: 240,
      type: "thin",
      fasting_friendly: false,
      bestseller: true,
      discount: "20% OFF"
    },
    {
      id: 5,
      name: "Premium Coconut Oil Banana Chips",
      category: "premium", 
      price: 200,
      originalPrice: 250,
      weight: 250,
      pricePerKg: 800,
      image: "/images/premium-coconut.jpg",
      description: "Made with premium bananas fried in cold-pressed coconut oil.",
      rating: 4.8,
      reviews: 210,
      type: "vacuum_fried",
      fasting_friendly: false,
      bestseller: true,
      discount: "20% OFF"
    },
    {
      id: 2,
      name: "Spicy Masala Banana Chips",
      category: "spicy",
      price: 150,
      originalPrice: 180,
      weight: 250,
      pricePerKg: 600,
      image: "/images/spicy-masala.jpg",
      description: "Fiery masala blend for spice lovers.",
      rating: 4.6,
      reviews: 190,
      type: "thick",
      fasting_friendly: false,
      bestseller: true,
      discount: "17% OFF"
    },
    {
      id: 3,
      name: "Sweet Banana Chips",
      category: "sweet",
      price: 140,
      originalPrice: 160,
      weight: 250,
      pricePerKg: 560,
      image: "/images/sweet-jaggery.jpg",
      description: "Caramelized sweetness with natural banana flavor.",
      rating: 4.4,
      reviews: 150,
      type: "thin",
      fasting_friendly: false,
      bestseller: false,
      discount: "13% OFF"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      review: "Finally found authentic Indian banana chips in the US! The peri-peri flavor is absolutely incredible. My whole family is addicted!",
      rating: 5,
      avatar: "🇺🇸",
      verified: true
    },
    {
      name: "Raj Patel",
      location: "London, UK",
      review: "Takes me back to my childhood in Gujarat. Same authentic taste, but now available here in London. Excellent quality and packaging.",
      rating: 5,
      avatar: "🇬🇧",
      verified: true
    },
    {
      name: "Emma Chen",
      location: "Sydney, Australia",
      review: "Discovered these at an Indian grocery store. Now I order directly online. The jaggery flavor is my favorite - so unique and delicious!",
      rating: 5,
      avatar: "🇦🇺",
      verified: true
    },
    {
      name: "Mohammed Al-Rashid",
      location: "Dubai, UAE",
      review: "Perfect snack for Ramadan. The fasting-friendly varieties are authentic and delicious. Fast delivery to Dubai!",
      rating: 5,
      avatar: "🇦🇪",
      verified: true
    },
    {
      name: "Lisa Schmidt",
      location: "Berlin, Germany",
      review: "Love the natural ingredients and no preservatives. My kids prefer these over regular chips. Healthy snacking made easy!",
      rating: 5,
      avatar: "🇩🇪",
      verified: true
    }
  ]

  const stats = [
    { value: "50,000+", label: "Global Customers" },
    { value: "50+", label: "Countries Served" },
    { value: "1M+", label: "Packets Delivered" },
    { value: "4.9/5", label: "Customer Rating" }
  ]

  const countries = [
    "🇺🇸 USA", "🇬🇧 UK", "🇨🇦 Canada", "🇦🇺 Australia", 
    "🇩🇪 Germany", "🇫🇷 France", "🇦🇪 UAE", "🇸🇬 Singapore"
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute text-6xl opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float 6s ease-in-out infinite`,
                animationDelay: `${i * 2}s`,
              }}
            >
              🍌
            </div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
            
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                  🌍 Shipping to 50+ Countries
                </span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                <span className="block">Chippyfy</span>
                <span className="block text-3xl lg:text-4xl font-medium opacity-90">
                  {heroSlides[currentSlide].title}
                </span>
              </h1>
              
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl text-white font-semibold mb-4">
                  {heroSlides[currentSlide].subtitle}
                </h2>
                <p className="text-xl text-white opacity-90 max-w-lg">
                  {heroSlides[currentSlide].description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link href="/products" className="group bg-white text-black font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  🛒 Shop Now
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link href="/about" className="group border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                  ▶️ Watch Story
                </Link>
              </div>

              {/* Countries served */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-white text-sm">
                {countries.map((country, index) => (
                  <span key={index} className="bg-white bg-opacity-20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {country}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Content - Interactive Slide */}
            <div className="text-center relative">
              <div className="relative">
                <div className="text-9xl mb-8" style={{animation: 'bounce 3s ease-in-out infinite'}}>
                  {heroSlides[currentSlide].emoji}
                </div>
                
                {/* Slide Indicators */}
                <div className="flex justify-center space-x-3 mb-8">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'bg-white shadow-lg' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-white p-3 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-all"
                >
                  ←
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-white p-3 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-all"
                >
                  →
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-white">
                  <div className="text-2xl mb-2">🛡️</div>
                  <p className="text-sm font-medium">ISO Certified</p>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-white">
                  <div className="text-2xl mb-2">🏆</div>
                  <p className="text-sm font-medium">Award Winning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
              🌟 Why Choose Chippyfy
            </span>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Bridging Continents with Taste
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From the heart of Maharashtra, India to kitchens worldwide. We bring you authentic Indian flavors 
              crafted with international quality standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative z-10">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Products Preview */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              🍌 Bestsellers Worldwide
            </span>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Flavors that Unite the World
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From traditional Indian masalas to international fusion flavors, discover taste sensations 
              that have won hearts across 50+ countries.
            </p>
          </div>
          
          {/* Enhanced Product Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102 overflow-hidden border border-gray-100"
              >
                <div className="p-4">
                  {/* Badges and Image Container */}
                  <div className="relative mb-4">
                    {/* Bestseller Badge */}
                    {product.bestseller && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg">
                        🔥 Bestseller
                      </div>
                    )}
                    
                    {/* Enhanced Product Image */}
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <div className="relative w-full h-64">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full rounded-xl transition-all duration-300 hover:scale-105 object-cover"
                          onError={(e) => {
                            // Enhanced fallback
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Enhanced Fallback placeholder */}
                        <div 
                          className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl flex items-center justify-center text-6xl shadow-lg border-2 border-gray-100"
                          style={{ display: 'none' }}
                        >
                          🍌
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2 min-h-[2.5rem] flex items-center justify-center px-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2 min-h-[2rem] px-1">
                    {product.description}
                  </p>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                        ⭐
                      </span>
                    ))}
                    <span className="text-gray-600 text-xs ml-1">({product.reviews})</span>
                  </div>
                  
                  {/* Enhanced Price Section */}
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-xl font-bold text-green-600">₹{product.price}</span>
                    <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                      {product.discount}
                    </span>
                  </div>
                  
                  {/* Weight and per-kg pricing */}
                  <div className="flex items-center justify-center gap-3 mb-4 text-sm text-gray-600">
                    <span className="bg-gray-100 px-2 py-1 rounded-full">
                      📦 {product.weight}g
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="font-medium">
                      ₹{product.pricePerKg}/kg
                    </span>
                  </div>

                  {/* Enhanced Action Button */}
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold py-2.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Products Button */}
          <div className="text-center">
            <Link
              href="/products"
              className="group bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto w-fit"
            >
              View All Products
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              🌍 Global Reviews
            </span>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Loved Across Continents
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our global family says about Chippyfy!
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
                
                <blockquote className="text-xl text-gray-700 mb-6 italic max-w-2xl mx-auto">
                  "{testimonials[currentTestimonial].review}"
                </blockquote>
                
                <div className="flex items-center justify-center gap-3">
                  <div>
                    <p className="font-bold text-gray-800 text-lg">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                  {testimonials[currentTestimonial].verified && (
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      ✓ Verified
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg text-gray-600 p-3 rounded-full hover:bg-gray-50 transition-all"
            >
              ←
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg text-gray-600 p-3 rounded-full hover:bg-gray-50 transition-all"
            >
              →
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === index ? 'bg-yellow-400' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="transform hover:scale-110 transition-all duration-300"
              >
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <p className="text-xl opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story - India to World */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                🇮🇳 Our Journey
              </span>
              <h2 className="text-5xl font-bold text-gray-800 mb-6">
                From Nashik to the World
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  What started as a dream in Maharashtra has now become a global phenomenon. 
                  <strong className="text-gray-800"> Amol and Pratik Patil</strong>, our visionary founders, 
                  began with a simple mission: to share authentic Indian banana chip flavors with the world.
                </p>
                <p>
                  Today, Chippyfy bridges cultures and continents, bringing the warmth of Indian hospitality 
                  and the crunch of perfect banana chips to families in over 50 countries. Every packet carries 
                  our commitment to quality, tradition, and the universal language of delicious food.
                </p>
                <p>
                  From supporting local farmers in India to delighting customers in New York, London, and Sydney - 
                  we're not just selling snacks, we're building a global community united by great taste.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/about" className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-3 px-6 rounded-2xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105">
                  Read Our Story
                </Link>
                <Link href="/about" className="border-2 border-gray-300 text-gray-700 font-bold py-3 px-6 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                  Meet Our Founders
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="text-8xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Award Winning Journey</h3>
                  <p className="text-gray-600">Recognized globally for quality and innovation</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md">
                    <div className="text-2xl">🌟</div>
                    <div>
                      <p className="font-semibold">Best Snack Brand 2024</p>
                      <p className="text-sm text-gray-600">International F&B Association</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md">
                    <div className="text-2xl">🌍</div>
                    <div>
                      <p className="font-semibold">Global Export Excellence</p>
                      <p className="text-sm text-gray-600">Government of India, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md">
                    <div className="text-2xl">💚</div>
                    <div>
                      <p className="font-semibold">Sustainable Business Award</p>
                      <p className="text-sm text-gray-600">Maharashtra Chamber, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center text-white">
            <div className="text-8xl mb-8" style={{animation: 'bounce 3s ease-in-out infinite'}}>🌍</div>
            <h2 className="text-5xl font-bold mb-6">
              Join Our Global Family
            </h2>
            <p className="text-2xl opacity-90 mb-12 max-w-3xl mx-auto">
              Experience authentic Indian flavors, delivered fresh to your doorstep. 
              From Maharashtra's heart to your kitchen - taste the difference!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link href="/products" className="group bg-white text-black font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                🛒 Order Now - Global Delivery
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link href="/contact" className="group border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                📧 Subscribe for Updates
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-6xl mb-4">🚚</div>
                <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
                <p className="opacity-90">On orders above $50 worldwide</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-6xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
                <p className="opacity-90">100% satisfaction or money back</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-2">Global Support</h3>
                <p className="opacity-90">Customer service in multiple languages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-black mb-4">Stay Connected</h2>
            <p className="text-xl text-black opacity-80 mb-8 max-w-2xl mx-auto">
              Get exclusive offers, new flavor announcements, and shipping updates delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-2xl border-0 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 text-lg"
              />
              <button className="bg-black text-white font-bold py-4 px-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            
            <p className="text-sm text-black opacity-60 mt-4">
              Join 25,000+ subscribers worldwide. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </>
  )
}
