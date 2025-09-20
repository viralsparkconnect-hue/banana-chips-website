import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [currency, setCurrency] = useState('USD')
  const [cartItems, setCartItems] = useState(0)
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const currencies = [
    { code: 'USD', symbol: '$', flag: '🇺🇸' },
    { code: 'EUR', symbol: '€', flag: '🇪🇺' },
    { code: 'GBP', symbol: '£', flag: '🇬🇧' },
    { code: 'INR', symbol: '₹', flag: '🇮🇳' },
    { code: 'CAD', symbol: 'C$', flag: '🇨🇦' },
    { code: 'AUD', symbol: 'A$', flag: '🇦🇺' },
    { code: 'JPY', symbol: '¥', flag: '🇯🇵' },
    { code: 'AED', symbol: 'د.إ', flag: '🇦🇪' }
  ]

  useEffect(() => {
    // Load cart items from localStorage or global state
    const stored = localStorage?.getItem('cartItems')
    if (stored) {
      setCartItems(parseInt(stored))
    }

    // Load saved currency
    const savedCurrency = localStorage?.getItem('currency') || 'USD'
    setCurrency(savedCurrency)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setShowSearch(false)
      setSearchQuery('')
    }
  }

  const currentCurrency = currencies.find(c => c.code === currency)

  return (
    <nav className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 shadow-xl sticky top-0 z-50">
      {/* Top Bar - Global Features */}
      <div className="border-b border-yellow-300/30">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6 text-white">
              <span className="hidden md:block">🌍 Free Worldwide Shipping on Orders $50+</span>
              <span className="md:hidden">🌍 Free Global Shipping $50+</span>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="hidden md:flex items-center text-white">
                <span className="mr-1">🌐</span>
                <select className="bg-transparent text-white text-sm border-none outline-none cursor-pointer">
                  <option value="en" className="text-gray-800">English</option>
                  <option value="es" className="text-gray-800">Español</option>
                  <option value="fr" className="text-gray-800">Français</option>
                  <option value="de" className="text-gray-800">Deutsch</option>
                  <option value="zh" className="text-gray-800">中文</option>
                </select>
              </div>

              {/* Currency Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                  className="flex items-center text-white hover:text-yellow-100 transition-colors"
                >
                  <span className="mr-1">{currentCurrency?.flag}</span>
                  <span className="font-medium">{currentCurrency?.code}</span>
                  <span className="ml-1">▼</span>
                </button>
                
                {showCurrencyDropdown && (
                  <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border min-w-48 z-50">
                    {currencies.map(curr => (
                      <button
                        key={curr.code}
                        onClick={() => {
                          setCurrency(curr.code)
                          localStorage?.setItem('currency', curr.code)
                          setShowCurrencyDropdown(false)
                        }}
                        className={`w-full px-4 py-3 text-left hover:bg-yellow-50 transition-colors flex items-center ${
                          currency === curr.code ? 'bg-yellow-100 font-semibold' : ''
                        }`}
                      >
                        <span className="mr-3">{curr.flag}</span>
                        <span className="mr-2">{curr.code}</span>
                        <span className="text-gray-500">{curr.symbol}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Customer Support */}
              <a 
                href="tel:+1-800-CHIPPY" 
                className="hidden lg:flex items-center text-white hover:text-yellow-100 transition-colors"
              >
                <span className="mr-1">📞</span>
                <span className="font-medium">24/7 Support</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="text-4xl group-hover:scale-110 transition-transform">🍌</div>
            <div>
              <span className="text-3xl font-bold text-white">Chippyfy</span>
              <div className="text-xs text-yellow-100">Premium Banana Chips</div>
            </div>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, flavors..."
                className="w-full px-4 py-3 rounded-full border-2 border-white/20 bg-white/90 backdrop-blur-sm focus:outline-none focus:border-white focus:bg-white shadow-lg"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-yellow-600"
              >
                🔍
              </button>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-yellow-100 font-medium transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-100 group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/about" className="text-white hover:text-yellow-100 font-medium transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-100 group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/products" className="text-white hover:text-yellow-100 font-medium transition-colors relative group">
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-100 group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/contact" className="text-white hover:text-yellow-100 font-medium transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-100 group-hover:w-full transition-all"></span>
            </Link>
            
            {/* Track Order */}
            <Link href="/track-order" className="text-white hover:text-yellow-100 font-medium transition-colors relative group">
              📦 Track Order
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-100 group-hover:w-full transition-all"></span>
            </Link>
            
            {/* Cart */}
            <Link href="/cart" className="relative bg-white text-yellow-600 px-6 py-3 rounded-full font-bold hover:bg-yellow-50 transition-all transform hover:scale-105 shadow-lg">
              🛒 Cart
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
                  {cartItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu & Search Buttons */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-white p-2"
            >
