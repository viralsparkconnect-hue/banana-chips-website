import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [cartCount, setCartCount] = useState(3)
  const [wishlistCount, setWishlistCount] = useState(2)
  const [selectedCurrency, setSelectedCurrency] = useState('INR')
  const [selectedLanguage, setSelectedLanguage] = useState('EN')

  const currencies = [
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' }
  ]

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'HI', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'MR', name: 'मराठी', flag: '🇮🇳' },
    { code: 'ES', name: 'Español', flag: '🇪🇸' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'DE', name: 'Deutsch', flag: '🇩🇪' }
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const NavLink = ({ href, children, hasDropdown = false }) => (
    <Link 
      href={href} 
      className={`font-medium transition-colors hover:scale-105 transform duration-200 ${
        isScrolled ? 'text-gray-700 hover:text-yellow-600' : 'text-white hover:text-yellow-100'
      } ${hasDropdown ? 'flex items-center gap-1' : ''}`}
    >
      {children}
      {hasDropdown && <span className="text-sm">▼</span>}
    </Link>
  )

  const DropdownItem = ({ icon, title, description }) => (
    <div className="px-6 py-3 hover:bg-yellow-50 transition-colors cursor-pointer">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <h4 className="font-semibold text-gray-800">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm py-2">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-2">
                <span className="text-lg">📞</span>
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">✉️</span>
                <span>hello@chippyfy.com</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="hidden sm:block">🚚 Free shipping on orders above ₹299</span>
              
              {/* Language Selector */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                  <span className="text-lg">🌍</span>
                  <span>{selectedLanguage}</span>
                </button>
                <div className="absolute top-full right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg py-2 min-w-[120px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang.code)}
                      className="w-full px-4 py-2 hover:bg-yellow-50 flex items-center gap-2 text-sm"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Currency Selector */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                  <span>{currencies.find(c => c.code === selectedCurrency)?.symbol}</span>
                  <span>{selectedCurrency}</span>
                </button>
                <div className="absolute top-full right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg py-2 min-w-[140px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {currencies.map((currency) => (
                    <button
                      key={currency.code}
                      onClick={() => setSelectedCurrency(currency.code)}
                      className="w-full px-4 py-2 hover:bg-yellow-50 flex items-center justify-between text-sm"
                    >
                      <span>{currency.code}</span>
                      <span>{currency.symbol}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-2xl backdrop-blur-md bg-opacity-95' 
          : 'bg-gradient-to-r from-yellow-400 to-orange-400'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <span className="text-4xl" style={{animation: 'bounce 3s ease-in-out infinite'}}>🍌</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className={`text-3xl font-bold transition-colors ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}>
                  Chippyfy
                </span>
                <div className={`text-xs font-medium ${
                  isScrolled ? 'text-gray-600' : 'text-white opacity-80'
                }`}>
                  From India to World 🌍
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              
              {/* Products Dropdown */}
              <div className="relative group">
                <NavLink href="/products" hasDropdown>
                  Products
                </NavLink>
                <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl py-4 min-w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="px-6 py-2 border-b border-gray-100">
                    <h3 className="font-bold text-gray-800 text-lg">Our Categories</h3>
                  </div>
                  <div className="py-2">
                    <DropdownItem icon="🥨" title="Classic Range" description="Traditional salted varieties" />
                    <DropdownItem icon="🌶️" title="Spicy Collection" description="Peri-peri, masala & more" />
                    <DropdownItem icon="🍯" title="Sweet Delights" description="Jaggery & honey flavors" />
                    <DropdownItem icon="🙏" title="Fasting Special" description="Religious compliance assured" />
                    <DropdownItem icon="🎁" title="Gift Combos" description="Perfect for celebrations" />
                  </div>
                  <div className="px-6 py-3 border-t border-gray-100">
                    <Link href="/products" className="text-yellow-600 font-semibold hover:text-yellow-700 text-sm">
                      View All Products →
                    </Link>
                  </div>
                </div>
              </div>

              <NavLink href="/contact">Contact</NavLink>
              
              {/* Global Shipping Badge */}
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                isScrolled 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-white bg-opacity-20 text-white'
              }`}>
                🌍 50+ Countries
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              
              {/* Search */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className={`p-2 rounded-full transition-all hover:scale-110 ${
                  isScrolled 
                    ? 'text-gray-600 hover:bg-gray-100' 
                    : 'text-white hover:bg-white hover:bg-opacity-20'
                }`}
              >
                <span className="text-xl">🔍</span>
              </button>

              {/* Wishlist */}
              <button className={`relative p-2 rounded-full transition-all hover:scale-110 ${
                isScrolled 
                  ? 'text-gray-600 hover:bg-gray-100' 
                  : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}>
                <span className="text-xl">❤️</span>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart */}
              <Link href="/cart" className={`relative p-2 rounded-full transition-all hover:scale-110 ${
                isScrolled 
                  ? 'text-gray-600 hover:bg-gray-100' 
                  : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}>
                <span className="text-xl">🛒</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-bounce">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* User Account */}
              <button className={`p-2 rounded-full transition-all hover:scale-110 ${
                isScrolled 
                  ? 'text-gray-600 hover:bg-gray-100' 
                  : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}>
                <span className="text-xl">👤</span>
              </button>

              {/* Order Now CTA */}
              <Link href="/products" className={`hidden sm:block font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg ${
                isScrolled
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:from-yellow-500 hover:to-orange-500'
                  : 'bg-white text-yellow-600 hover:bg-gray-100'
              }`}>
                Order Now
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-2 rounded-full transition-all ${
                  isScrolled 
                    ? 'text-gray-600 hover:bg-gray-100' 
                    : 'text-white hover:bg-white hover:bg-opacity-20'
                }`}
              >
                {isOpen ? <span className="text-2xl">✕</span> : <span className="text-2xl">☰</span>}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="border-t border-white border-opacity-20 py-4">
            <div className="container mx-auto px-6">
              <div className="relative max-w-2xl mx-auto">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">🔍</span>
                <input
                  type="text"
                  placeholder="Search for banana chips, flavors, combos..."
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border-0 focus:outline-none focus:ring-4 focus:ring-yellow-200 text-gray-800"
                />
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-white border-opacity-20">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                <Link href="/" className={`py-2 font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`} onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/about" className={`py-2 font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`} onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link href="/products" className={`py-2 font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`} onClick={() => setIsOpen(false)}>
                  Products
                </Link>
                <Link href="/contact" className={`py-2 font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`} onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
                <Link href="/cart" className={`relative py-2 font-medium flex items-center gap-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`} onClick={() => setIsOpen(false)}>
                  🛒 Cart ({cartCount})
                </Link>
                <Link href="/products" className={`font-bold py-3 px-6 rounded-full text-center transition-all ${
                  isScrolled
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black'
                    : 'bg-white text-yellow-600'
                }`} onClick={() => setIsOpen(false)}>
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  )
}
