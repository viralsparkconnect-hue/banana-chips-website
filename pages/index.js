import { useState, useEffect, useMemo } from 'react'

// Mock components - replace with actual imports
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-3xl animate-bounce-slow">🍌</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Chippyfy
            </div>
            <div className="hidden sm:block bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">
              Global
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className="relative group">
              <a href="/products" className="text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium flex items-center gap-1">
                Products
                <span className="text-xs">▼</span>
              </a>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-4 space-y-2">
                  <a href="/products/classic" className="block px-3 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 rounded-lg transition-colors duration-200">
                    🥨 Classic Collection
                  </a>
                  <a href="/products/spicy" className="block px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors duration-200">
                    🌶️ Spicy Range
                  </a>
                  <a href="/products/sweet" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors duration-200">
                    🍯 Sweet Varieties
                  </a>
                  <a href="/products/premium" className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors duration-200">
                    👑 Premium Selection
                  </a>
                </div>
              </div>
            </div>
            <a href="/about" className="text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium relative group">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/shipping" className="text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium relative group">
              Global Shipping
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/contact" className="text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="hidden md:block p-2 text-gray-600 hover:text-yellow-600 transition-colors duration-300 hover:bg-yellow-50 rounded-lg">
              🔍
            </button>

            {/* Cart */}
            <button className="relative p-2 text-gray-600 hover:text-yellow-600 transition-all duration-300 hover:bg-yellow-50 rounded-lg group">
              <span className="text-xl group-hover:animate-wiggle">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Account */}
            <button className="hidden sm:flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300 hover:bg-yellow-50 rounded-lg">
              <span>👤</span>
              <span className="font-medium">Account</span>
            </button>

            {/* CTA Button */}
            <button className="hidden md:block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-bold">
              Order Now
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-yellow-600 transition-colors duration-300"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-current mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-current mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-6 space-y-4">
            <a href="/" className="block text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium py-2">
              🏠 Home
            </a>
            <div className="space-y-2">
              <p className="text-gray-500 text-sm font-medium">Products</p>
              <a href="/products/classic" className="block text-gray-600 hover:text-yellow-600 transition-colors duration-300 py-1 pl-4">
                🥨 Classic Collection
              </a>
              <a href="/products/spicy" className="block text-gray-600 hover:text-yellow-600 transition-colors duration-300 py-1 pl-4">
                🌶️ Spicy Range
              </a>
              <a href="/products/sweet" className="block text-gray-600 hover:text-yellow-600 transition-colors duration-300 py-1 pl-4">
                🍯 Sweet Varieties
              </a>
            </div>
            <a href="/about" className="block text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium py-2">
              ℹ️ About Us
            </a>
            <a href="/shipping" className="block text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium py-2">
              🌍 Global Shipping
            </a>
            <a href="/contact" className="block text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium py-2">
              📞 Contact
            </a>
            <div className="pt-4 border-t border-gray-200">
              <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 font-bold shadow-lg">
                🛒 Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-bold text-yellow-500 mb-4">🍌 Chippyfy</div>
          <p className="text-gray-400">Premium banana chips from India to the world.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <div className="space-y-2">
            <a href="/products" className="block hover:text-yellow-500 transition-colors">Products</a>
            <a href="/about" className="block hover:text-yellow-500 transition-colors">About Us</a>
            <a href="/contact" className="block hover:text-yellow-500 transition-colors">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Support</h4>
          <div className="space-y-2">
            <a href="/shipping" className="block hover:text-yellow-500 transition-colors">Shipping Info</a>
            <a href="/returns" className="block hover:text-yellow-500 transition-colors">Returns</a>
            <a href="/faq" className="block hover:text-yellow-500 transition-colors">FAQ</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Connect</h4>
          <p className="text-gray-400 mb-4">Follow us for updates</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-500 transition-colors">📘</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">📷</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">🐦</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Chippyfy. All rights reserved. Made with ❤️ in Maharashtra, India</p>
      </div>
    </div>
  </footer>
)

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [email, setEmail] = useState('')
  
  // Cart State Management
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [showAddedToast, setShowAddedToast] = useState(false)

  // Cart functionality
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
    
    // Show success toast
    setShowAddedToast(true)
    setTimeout(() => setShowAddedToast(false), 3000)
  }

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId)
      return
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const heroSlides = useMemo(() => [
    {
      image: "/images/classic-salted.jpg",
      productName: "Classic Salted",
      title: "Premium Banana Chips",
      subtitle: "From India to the World",
      description: "Authentic flavors, global quality standards",
      price: "₹120",
      originalPrice: "₹150"
    },
    {
      image: "/images/spicy-masala.jpg",
      productName: "Spicy Peri-Peri",
      title: "International Fusion",
      subtitle: "Bold & Spicy",
      description: "Bold flavors that unite taste buds worldwide",
      price: "₹150",
      originalPrice: "₹180"
    },
    {
      image: "/images/sweet-jaggery.jpg",
      productName: "Sweet Jaggery",
      title: "Traditional & Pure",
      subtitle: "Ancient Recipe",
      description: "Ancient recipes, modern packaging",
      price: "₹140",
      originalPrice: "₹160"
    },
    {
      image: "/images/premium-coconut.jpg",
      productName: "Coconut Oil Special",
      title: "Premium Quality",
      subtitle: "Health Conscious",
      description: "Cold-pressed coconut oil for the health-conscious",
      price: "₹200",
      originalPrice: "₹250"
    }
  ], [])

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

  const products = [
    {
      id: 1,
      name: "Classic Salted Banana Chips",
      category: "classic",
      price: 120,
      originalPrice: 150,
      weight: 250,
      image: "/images/classic-salted.jpg",
      description: "Crispy and lightly salted banana chips – the all-time favorite snack.",
      rating: 4.5,
      reviews: 240,
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
      image: "/images/premium-coconut.jpg",
      description: "Made with premium bananas fried in cold-pressed coconut oil.",
      rating: 4.8,
      reviews: 210,
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
      image: "/images/spicy-masala.jpg",
      description: "Fiery masala blend for spice lovers.",
      rating: 4.6,
      reviews: 190,
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
      image: "/images/sweet-jaggery.jpg",
      description: "Caramelized sweetness with natural banana flavor.",
      rating: 4.4,
      reviews: 150,
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

  // Auto-slide functionality with cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Scroll-based animations
  useEffect(() => {
    const observeElements = () => {
      const elements = document.querySelectorAll('[data-animate]')
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({
                ...prev,
                [entry.target.dataset.animate]: true
              }))
            }
          })
        },
        { threshold: 0.1 }
      )

      elements.forEach((el) => observer.observe(el))
      return () => observer.disconnect()
    }

    observeElements()
  }, [])

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      console.log('Newsletter signup:', email)
      setEmail('')
      // You would implement actual newsletter logic here
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        cartItems={cartItems}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        getTotalItems={getTotalItems}
        getTotalPrice={getTotalPrice}
      />

      {/* Success Toast */}
      <div className={`fixed top-20 right-6 z-50 transition-all duration-300 transform ${
        showAddedToast ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className="bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3">
          <span className="text-xl">✅</span>
          <span className="font-medium">Added to cart!</span>
        </div>
      </div>
      
      {/* Hero Section with improved performance */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 overflow-hidden pt-20">
        {/* Optimized background animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="absolute text-4xl sm:text-6xl opacity-30 animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${10 + i * 12}%`,
                animationDelay: `${i * 2}s`,
              }}
            >
              🍌
            </div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
            
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                🌍 Shipping to 50+ Countries
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  <span className="block">Chippyfy</span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium opacity-90">
                    {heroSlides[currentSlide].title}
                  </span>
                </h1>
                
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold">
                  {heroSlides[currentSlide].subtitle}
                </h2>
                <p className="text-lg sm:text-xl text-white/90 max-w-lg mx-auto lg:mx-0">
                  {heroSlides[currentSlide].description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-white text-black font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  🛒 Shop Now
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
                <button className="group border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                  ▶️ Watch Story
                </button>
              </div>

              {/* Countries served */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-white text-sm">
                {countries.map((country, index) => (
                  <span key={index} className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {country}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Content - Animated Product Showcase */}
            <div className="text-center relative">
              <div className="relative max-w-lg mx-auto">
                {/* Product Image Container with Animations */}
                <div className="relative mb-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform transition-all duration-700 hover:scale-105 animate-product-float">
                    {/* Product Image with Slide Animation */}
                    <div className="relative w-full h-80 mb-6 overflow-hidden rounded-2xl">
                      <div 
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                      >
                        {heroSlides.map((slide, index) => (
                          <div key={index} className="w-full flex-shrink-0 relative">
                            <img 
                              src={slide.image}
                              alt={slide.productName}
                              className="w-full h-80 object-cover shadow-lg transition-all duration-500 transform hover:scale-110"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            {/* Animated Fallback Product Display */}
                            <div 
                              className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-100 flex flex-col items-center justify-center shadow-lg border-2 border-white/50 animate-pulse"
                              style={{ display: 'none' }}
                            >
                              <div className="text-6xl mb-4 animate-bounce">🍌</div>
                              <p className="text-gray-700 font-semibold text-lg animate-fade-in">{slide.productName}</p>
                            </div>
                            
                            {/* Animated Overlay Effects */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        ))}
                      </div>

                      {/* Floating Animation Elements */}
                      <div className="absolute top-4 right-4 animate-ping">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      </div>
                      <div className="absolute bottom-4 left-4 animate-pulse">
                        <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          Fresh
                        </div>
                      </div>
                    </div>

                    {/* Animated Product Info Overlay */}
                    <div className="text-white transform transition-all duration-500 animate-slide-up">
                      <h3 className="text-2xl font-bold mb-2 animate-text-glow">{heroSlides[currentSlide].productName}</h3>
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-2xl font-bold animate-price-pulse">{heroSlides[currentSlide].price}</span>
                        <span className="text-lg line-through opacity-70 animate-fade-out">{heroSlides[currentSlide].originalPrice}</span>
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold animate-bounce-horizontal">
                          Save {Math.round((1 - parseInt(heroSlides[currentSlide].price.slice(1)) / parseInt(heroSlides[currentSlide].originalPrice.slice(1))) * 100)}%
                        </span>
                      </div>
                      <button 
                        onClick={() => addToCart(heroSlides[currentSlide])}
                        className="bg-white text-black font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg animate-button-glow group"
                      >
                        <span className="group-hover:animate-wiggle inline-block">🛒</span> Add to Cart
                      </button>
                    </div>
                  </div>

                  {/* Animated Product Navigation Arrows */}
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-125 animate-slide-in-left z-10"
                  >
                    <span className="animate-arrow-left">←</span>
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-125 animate-slide-in-right z-10"
                  >
                    <span className="animate-arrow-right">→</span>
                  </button>
                </div>
                
                {/* Animated Product Indicators */}
                <div className="flex justify-center space-x-3 mb-8">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`relative group transition-all duration-500 animate-indicator-bounce ${
                        currentSlide === index ? 'scale-125 animate-active-indicator' : 'hover:scale-110'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                        currentSlide === index ? 'border-white shadow-2xl animate-glow-ring' : 'border-white/50'
                      }`}>
                        <img 
                          src={slide.image}
                          alt={slide.productName}
                          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div 
                          className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-orange-200 flex items-center justify-center text-xl animate-pulse"
                          style={{ display: 'none' }}
                        >
                          <span className="animate-spin-slow">🍌</span>
                        </div>
                      </div>
                      {/* Animated Tooltip */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 animate-tooltip-appear">
                        {slide.productName}
                      </div>
                      {/* Active Indicator Dot */}
                      {currentSlide === index && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                      )}
                    </button>
                  ))}
                </div>

                              {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                    <div className="text-2xl mb-2">🛡️</div>
                    <p className="text-sm font-medium">ISO Certified</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                    <div className="text-2xl mb-2">🏆</div>
                    <p className="text-sm font-medium">Award Winning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" data-animate="features">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
              🌟 Why Choose Chippyfy
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Bridging Continents with Taste
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From the heart of Maharashtra, India to kitchens worldwide. We bring you authentic Indian flavors 
              crafted with international quality standards.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                  isVisible.features ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative z-10">
                  <div className="text-4xl sm:text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50" data-animate="products">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              🍌 Bestsellers Worldwide
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Flavors that Unite the World
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From traditional Indian masalas to international fusion flavors, discover taste sensations 
              that have won hearts across 50+ countries.
            </p>
          </div>
          
          {/* Product Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102 overflow-hidden border border-gray-100 ${
                  isVisible.products ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-4">
                  {/* Product Image with Fallback */}
                  <div className="relative mb-4">
                    {product.bestseller && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg">
                        🔥 Bestseller
                      </div>
                    )}
                    
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <div className="relative w-full h-48 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl flex items-center justify-center text-6xl shadow-lg border-2 border-gray-100">
                        🍌
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 text-center">
                    {product.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                        ⭐
                      </span>
                    ))}
                    <span className="text-gray-600 text-xs ml-1">({product.reviews})</span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-xl font-bold text-green-600">₹{product.price}</span>
                    <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                      {product.discount}
                    </span>
                  </div>
                  
                  {/* Weight */}
                  <div className="text-center mb-4 text-sm text-gray-600">
                    <span className="bg-gray-100 px-2 py-1 rounded-full">
                      📦 {product.weight}g
                    </span>
                  </div>

                  {/* Add to Cart Button */}
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
            <button className="group bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
              View All Products
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Global Testimonials */}
      <section className="py-20 bg-white" data-animate="testimonials">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              🌍 Global Reviews
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
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
                  {Array.from({ length: testimonials[currentTestimonial].rating }, (_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
                
                <blockquote className="text-lg sm:text-xl text-gray-700 mb-6 italic max-w-2xl mx-auto">
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-yellow-400 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400" data-animate="stats">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`transform hover:scale-110 transition-all duration-300 ${
                  isVisible.stats ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-3xl sm:text-5xl font-bold mb-2">{stat.value}</div>
                <p className="text-lg sm:text-xl opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white" data-animate="story">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                🇮🇳 Our Journey
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
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
                <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-3 px-6 rounded-2xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105">
                  Read Our Story
                </button>
                <button className="border-2 border-gray-300 text-gray-700 font-bold py-3 px-6 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                  Meet Our Founders
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl sm:text-8xl mb-4">🏆</div>
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
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 relative overflow-hidden" data-animate="cta">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center text-white">
            <div className="text-6xl sm:text-8xl mb-8">🌍</div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Join Our Global Family
            </h2>
            <p className="text-xl sm:text-2xl opacity-90 mb-12 max-w-3xl mx-auto">
              Experience authentic Indian flavors, delivered fresh to your doorstep. 
              From Maharashtra's heart to your kitchen - taste the difference!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="group bg-white text-black font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                🛒 Order Now - Global Delivery
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
              <button className="group border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                📧 Subscribe for Updates
              </button>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl sm:text-6xl mb-4">🚚</div>
                <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
                <p className="opacity-90">On orders above $50 worldwide</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl sm:text-6xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
                <p className="opacity-90">100% satisfaction or money back</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl sm:text-6xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-2">Global Support</h3>
                <p className="opacity-90">Customer service in multiple languages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-100" data-animate="newsletter">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Stay Connected</h2>
            <p className="text-lg sm:text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Get exclusive offers, new flavor announcements, and shipping updates delivered to your inbox
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-2xl border-0 focus:outline-none focus:ring-4 focus:ring-white/50 text-lg"
              />
              <button 
                type="submit"
                className="bg-black text-white font-bold py-4 px-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
            
            <p className="text-sm text-black/60 mt-4">
              Join 25,000+ subscribers worldwide. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% { 
            transform: translateY(0); 
          }
          50% { 
            transform: translateY(-10px); 
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes product-float {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
          }
          50% { 
            transform: translateY(-10px) scale(1.02); 
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes text-glow {
          0%, 100% { 
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); 
          }
          50% { 
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.8); 
          }
        }

        @keyframes price-pulse {
          0%, 100% { 
            transform: scale(1); 
          }
          50% { 
            transform: scale(1.1); 
          }
        }

        @keyframes bounce-horizontal {
          0%, 100% { 
            transform: translateX(0); 
          }
          25% { 
            transform: translateX(-2px); 
          }
          75% { 
            transform: translateX(2px); 
          }
        }

        @keyframes button-glow {
          0%, 100% { 
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); 
          }
          50% { 
            box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3); 
          }
        }

        @keyframes wiggle {
          0%, 100% { 
            transform: rotate(0deg); 
          }
          25% { 
            transform: rotate(-5deg); 
          }
          75% { 
            transform: rotate(5deg); 
          }
        }

        @keyframes arrow-left {
          0%, 100% { 
            transform: translateX(0); 
          }
          50% { 
            transform: translateX(-3px); 
          }
        }

        @keyframes arrow-right {
          0%, 100% { 
            transform: translateX(0); 
          }
          50% { 
            transform: translateX(3px); 
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes indicator-bounce {
          0%, 100% { 
            transform: translateY(0); 
          }
          50% { 
            transform: translateY(-5px); 
          }
        }

        @keyframes active-indicator {
          0%, 100% { 
            transform: scale(1.25) rotate(0deg); 
          }
          50% { 
            transform: scale(1.3) rotate(5deg); 
          }
        }

        @keyframes glow-ring {
          0%, 100% { 
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5); 
          }
          50% { 
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.8); 
          }
        }

        @keyframes tooltip-appear {
          from {
            opacity: 0;
            transform: translateY(5px) translateX(-50%);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fade-out {
          0% { 
            opacity: 0.7; 
          }
          50% { 
            opacity: 0.3; 
          }
          100% { 
            opacity: 0.7; 
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-product-float {
          animation: product-float 4s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }

        .animate-price-pulse {
          animation: price-pulse 1.5s ease-in-out infinite;
        }

        .animate-bounce-horizontal {
          animation: bounce-horizontal 1s ease-in-out infinite;
        }

        .animate-button-glow {
          animation: button-glow 2s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }

        .animate-arrow-left {
          animation: arrow-left 1s ease-in-out infinite;
        }

        .animate-arrow-right {
          animation: arrow-right 1s ease-in-out infinite;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out;
        }

        .animate-indicator-bounce {
          animation: indicator-bounce 2s ease-in-out infinite;
        }

        .animate-active-indicator {
          animation: active-indicator 2s ease-in-out infinite;
        }

        .animate-glow-ring {
          animation: glow-ring 2s ease-in-out infinite;
        }

        .animate-tooltip-appear {
          animation: tooltip-appear 0.3s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in-up 1s ease-out;
        }

        .animate-fade-out {
          animation: fade-out 2s ease-in-out infinite;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #fbbf24, #f59e0b);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #f59e0b, #d97706);
        }

        /* Focus states for accessibility */
        button:focus,
        input:focus {
          outline: 2px solid #fbbf24;
          outline-offset: 2px;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-bounce-slow,
          .animate-fade-in-up {
            animation: none;
          }
          
          * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  )
}
