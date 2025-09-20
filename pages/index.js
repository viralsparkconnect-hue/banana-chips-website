import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroImages = [
    "🍌", "🥨", "🍯", "🌶️"
  ]

  const features = [
    {
      icon: "🌱",
      title: "Natural & Fresh",
      description: "Made from handpicked premium bananas"
    },
    {
      icon: "🔥",
      title: "Crispy Perfection",
      description: "Perfect crunch in every bite"
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Fresh chips delivered to your door"
    },
    {
      icon: "💝",
      title: "Premium Quality",
      description: "No artificial preservatives or colors"
    }
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      review: "Best banana chips I've ever tasted! The spicy masala flavor is incredible.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      review: "My kids love these chips. Healthy and delicious snacking option!",
      rating: 5
    },
    {
      name: "Amit Patel",
      location: "Pune",
      review: "Perfect for office snacking. Great packaging and taste!",
      rating: 5
    }
  ]

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 via-orange-300 to-yellow-500 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Welcome to
                <span className="block text-yellow-100">Chippyfy</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white mb-8 opacity-90">
                India's Premium Banana Chips - Crispy, Tasty & Made with Love! 🍌
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                <Link href="/products" className="inline-block bg-white hover:bg-gray-100 text-yellow-600 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                  Shop Now
                </Link>
                <Link href="/about" className="inline-block border-2 border-white hover:bg-white hover:text-yellow-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-9xl animate-bounce mb-4">
                {heroImages[currentSlide]}
              </div>
              <div className="flex justify-center space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Chippyfy?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to bringing you the finest banana chips with unmatched quality and taste
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow bg-yellow-50">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Preview */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Products</h2>
            <p className="text-xl text-gray-600">Taste the difference with our bestsellers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Classic Salted", price: "₹50", emoji: "🥨", bestseller: true },
              { name: "Spicy Masala", price: "₹60", emoji: "🌶️", bestseller: false },
              { name: "Sweet Honey", price: "₹70", emoji: "🍯", bestseller: true }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
                {product.bestseller && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Bestseller
                  </div>
                )}
                <div className="p-8 text-center">
                  <div className="text-6xl mb-4">{product.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-3xl font-bold text-yellow-600 mb-4">{product.price}</p>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full shadow-lg transition-all">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it!</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-yellow-50 p-6 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-400">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Experience the Crunch?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Order now and get your favorite banana chips delivered fresh to your doorstep!
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex justify-center">
            <Link href="/products" className="inline-block bg-white hover:bg-gray-100 text-yellow-600 font-bold py-4 px-8 rounded-full shadow-lg transition-all">
              Order Now
            </Link>
            <Link href="/contact" className="inline-block border-2 border-white hover:bg-white hover:text-yellow-600 text-white font-bold py-4 px-8 rounded-full transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
