import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useState([])
  const [cart, setCart] = useState([])
  const [showQuickView, setShowQuickView] = useState(null)
  const [sortBy, setSortBy] = useState('popular')
  const [filterBy, setFilterBy] = useState('all')

  const products = [
    {
      id: 1,
      name: "Classic Salted Thin Chips",
      price: 120,
      originalPrice: 150,
      emoji: "🥨",
      category: "classic",
      type: "thin",
      banana_type: "raw",
      rating: 4.8,
      reviews: 324,
      description: "Our signature thin and crispy banana chips made from premium raw bananas with perfect sea salt seasoning",
      weight: "200g",
      ingredients: "Raw Banana, Sea Salt, Coconut Oil",
      shelf_life: "6 months",
      bestseller: true,
      discount: 20,
      stock: 50,
      fasting_friendly: false,
      features: ["Thin & Crispy", "Raw Banana", "Sea Salt", "Coconut Oil Fried"]
    },
    {
      id: 2,
      name: "Peri-Peri Spice Blast",
      price: 140,
      originalPrice: 170,
      emoji: "🌶️",
      category: "spicy",
      type: "thick",
      banana_type: "raw",
      rating: 4.9,
      reviews: 289,
      description: "Fiery peri-peri seasoning on thick-cut banana chips for those who love intense flavors",
      weight: "200g",
      ingredients: "Raw Banana, Peri-Peri Spice Mix, Coconut Oil, Rock Salt",
      shelf_life: "6 months",
      bestseller: false,
      discount: 18,
      stock: 35,
      fasting_friendly: false,
      features: ["Thick Cut", "Peri-Peri Spice", "Raw Banana", "Intense Flavor"]
    },
    {
      id: 3,
      name: "Spicy Masala Traditional",
      price: 130,
      originalPrice: 160,
      emoji: "🔥",
      category: "spicy",
      type: "thin",
      banana_type: "raw",
      rating: 4.7,
      reviews: 256,
      description: "Traditional Indian masala blend with cumin, coriander, and red chili on crispy thin chips",
      weight: "200g",
      ingredients: "Raw Banana, Masala Spices, Turmeric, Chili Powder, Coconut Oil",
      shelf_life: "6 months",
      bestseller: true,
      discount: 19,
      stock: 45,
      fasting_friendly: false,
      features: ["Traditional Recipe", "Thin Cut", "Indian Spices", "Authentic Taste"]
    },
    {
      id: 4,
      name: "Sweet Jaggery Delight",
      price: 160,
      originalPrice: 200,
      emoji: "🍯",
      category: "sweet",
      type: "thick",
      banana_type: "ripe",
      rating: 4.6,
      reviews: 198,
      description: "Naturally sweetened with organic jaggery, made from perfectly ripe bananas",
      weight: "200g",
      ingredients: "Ripe Banana, Organic Jaggery, Coconut Oil",
      shelf_life: "4 months",
      bestseller: true,
      discount: 20,
      stock: 30,
      fasting_friendly: true,
      features: ["Ripe Banana", "Organic Jaggery", "Thick Cut", "Fasting Friendly"]
    },
    {
      id: 5,
      name: "Pure Sweet Ripe Chips",
      price: 150,
      originalPrice: 180,
      emoji: "🍌",
      category: "sweet",
      type: "thin",
      banana_type: "ripe",
      rating: 4.5,
      reviews: 167,
      description: "Naturally sweet thin chips made from perfectly ripe bananas without added sugar",
      weight: "200g",
      ingredients: "Ripe Banana, Coconut Oil",
      shelf_life: "4 months",
      bestseller: false,
      discount: 17,
      stock: 40,
      fasting_friendly: true,
      features: ["No Added Sugar", "Ripe Banana", "Thin Cut", "Natural Sweetness"]
    },
    {
      id: 6,
      name: "Baked Healthy Thin Chips",
      price: 180,
      originalPrice: 220,
      emoji: "🌿",
      category: "healthy",
      type: "baked",
      banana_type: "raw",
      rating: 4.7,
      reviews: 134,
      description: "Health-conscious baked banana chips with 50% less oil, perfect for fitness enthusiasts",
      weight: "150g",
      ingredients: "Raw Banana, Sea Salt, Minimal Coconut Oil",
      shelf_life: "8 months",
      bestseller: false,
      discount: 18,
      stock: 25,
      fasting_friendly: false,
      features: ["Baked Not Fried", "50% Less Oil", "Health Focused", "Extended Shelf Life"]
    },
    {
      id: 7,
      name: "Vacuum Fried Premium",
      price: 220,
      originalPrice: 280,
      emoji: "✨",
      category: "premium",
      type: "vacuum_fried",
      banana_type: "raw",
      rating: 4.9,
      reviews: 89,
      description: "Premium vacuum-fried chips that retain maximum nutrition and natural banana flavor",
      weight: "150g",
      ingredients: "Premium Raw Banana, Sea Salt, Cold-Pressed Coconut Oil",
      shelf_life: "8 months",
      bestseller: false,
      discount: 21,
      stock: 20,
      fasting_friendly: false,
      features: ["Vacuum Fried", "Nutrition Preserved", "Premium Quality", "Cold-Pressed Oil"]
    },
    {
      id: 8,
      name: "Fasting Special Mix",
      price: 170,
      originalPrice: 210,
      emoji: "🙏",
      category: "fasting",
      type: "thick",
      banana_type: "raw",
      rating: 4.8,
      reviews: 156,
      description: "Specially prepared for fasting with rock salt and sendha namak, no regular salt used",
      weight: "200g",
      ingredients: "Raw Banana, Rock Salt (Sendha Namak), Pure Coconut Oil",
      shelf_life: "6 months",
      bestseller: true,
      discount: 19,
      stock: 35,
      fasting_friendly: true,
      features: ["Fasting Approved", "Rock Salt Only", "Thick Cut", "Religious Compliance"]
    },
    {
      id: 9,
      name: "Combo Pack - Flavor Fusion",
      price: 350,
      originalPrice: 450,
      emoji: "🎁",
      category: "combo",
      type: "mixed",
      banana_type: "mixed",
      rating: 4.9,
      reviews: 245,
      description: "Perfect combo pack with 4 different flavors: Classic Salted, Spicy Masala, Sweet Jaggery, and Peri-Peri",
      weight: "800g (200g x 4)",
      ingredients: "Mixed Varieties",
      shelf_life: "6 months",
      bestseller: true,
      discount: 22,
      stock: 15,
      fasting_friendly: false,
      features: ["4 Flavors", "Value Pack", "Gift Ready", "Mix & Match"]
    },
    {
      id: 10,
      name: "Premium Gift Box",
      price: 500,
      originalPrice: 650,
      emoji: "🎀",
      category: "gift",
      type: "mixed",
      banana_type: "mixed",
      rating: 5.0,
      reviews: 78,
      description: "Luxury gift box with 6 premium varieties including vacuum-fried and jaggery specialties",
      weight: "1200g (200g x 6)",
      ingredients: "Premium Mixed Varieties",
      shelf_life: "8 months",
      bestseller: false,
      discount: 23,
      stock: 10,
      fasting_friendly: true,
      features: ["6 Varieties", "Luxury Packaging", "Premium Gift", "Festival Special"]
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products', count: products.length, icon: '🍌' },
    { id: 'classic', name: 'Classic', count: products.filter(p => p.category === 'classic').length, icon: '🥨' },
    { id: 'spicy', name: 'Spicy', count: products.filter(p => p.category === 'spicy').length, icon: '🌶️' },
    { id: 'sweet', name: 'Sweet', count: products.filter(p => p.category === 'sweet').length, icon: '🍯' },
    { id: 'healthy', name: 'Healthy', count: products.filter(p => p.category === 'healthy').length, icon: '🌿' },
    { id: 'premium', name: 'Premium', count: products.filter(p => p.category === 'premium').length, icon: '✨' },
    { id: 'fasting', name: 'Fasting', count: products.filter(p => p.category === 'fasting').length, icon: '🙏' },
    { id: 'combo', name: 'Combos', count: products.filter(p => p.category === 'combo').length, icon: '🎁' },
    { id: 'gift', name: 'Gifts', count: products.filter(p => p.category === 'gift').length, icon: '🎀' }
  ]

  const filters = [
    { id: 'all', name: 'All Types' },
    { id: 'thin', name: 'Thin Cut' },
    { id: 'thick', name: 'Thick Cut' },
    { id: 'baked', name: 'Baked' },
    { id: 'vacuum_fried', name: 'Vacuum Fried' },
    { id: 'fasting_friendly', name: 'Fasting Friendly' }
  ]

  const sortOptions = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'price_low', name: 'Price: Low to High' },
    { id: 'price_high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'newest', name: 'Newest First' }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterBy === 'all' || 
                         product.type === filterBy || 
                         (filterBy === 'fasting_friendly' && product.fasting_friendly)
    return matchesCategory && matchesSearch && matchesFilter
  }).sort((a, b) => {
    switch(sortBy) {
      case 'price_low':
        return a.price - b.price
      case 'price_high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'newest':
        return b.id - a.id
      default:
        return b.reviews - a.reviews
    }
  })

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const addToCart = (product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id)
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    
    alert(`${product.name} added to cart!`)
  }

  const QuickViewModal = ({ product, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Quick View</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-3xl font-bold transition-colors"
            >
              ×
            </button>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-9xl mb-6">{product.emoji}</div>
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6">
                <h4 className="font-bold text-lg mb-3">🇮🇳 Made in India</h4>
                <p className="text-sm text-gray-700">Crafted with love in Maharashtra</p>
                <p className="text-xs text-gray-600 mt-2">Supporting local farmers since 2020</p>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-3xl font-bold text-gray-800">{product.name}</h3>
                {product.bestseller && (
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    🔥 Bestseller
                  </span>
                )}
                {product.fasting_friendly && (
                  <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    🙏 Fasting
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? '⭐' : '☆'}>
                      {i < Math.floor(product.rating) ? '⭐' : '☆'}
                    </span>
                  ))}
                </div>
                <span className="text-lg font-medium text-gray-700">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">{product.description}</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <p className="text-sm"><strong>Weight:</strong> {product.weight}</p>
                  <p className="text-sm"><strong>Type:</strong> {product.banana_type} banana</p>
                  <p className="text-sm"><strong>Cut:</strong> {product.type}</p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm"><strong>Shelf Life:</strong> {product.shelf_life}</p>
                  <p className="text-sm"><strong>Stock:</strong> {product.stock} units</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">🌟 Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <span key={index} className="bg-gradient-to-r from-yellow-100 to-orange-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2"><strong>Ingredients:</strong></p>
                <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{product.ingredients}</p>
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold text-green-600">₹{product.price}</span>
                  <span className="text-2xl text-gray-400 line-through">₹{product.originalPrice}</span>
                  <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                    {product.discount}% OFF
                  </span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                >
                  🛒 Add to Cart
                </button>
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    favorites.includes(product.id)
                      ? 'border-red-500 bg-red-50 text-red-500 shadow-lg'
                      : 'border-gray-300 text-gray-600 hover:border-red-300 hover:bg-red-50'
                  }`}
                >
                  ❤️
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
        {/* Modern Hero Section */}
        <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-7xl mb-6">🍌</div>
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                Premium Banana Chips
              </h1>
              <p className="text-2xl text-white opacity-90 mb-8">
                From Classic Salted to Exotic Peri-Peri • Made in India with Love 🇮🇳
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-white">✨ Premium Quality</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-white">🌿 Natural Ingredients</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-white">🚚 Global Shipping</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-white">🙏 Fasting Friendly Options</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          {/* Advanced Filters and Search */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
            <div className="flex flex-col xl:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-lg">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">🔍</span>
                <input
                  type="text"
                  placeholder="Search for your favorite flavor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 text-lg"
                />
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-700 font-medium"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  ))}
                </select>

                {/* Filter */}
                <select
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-700 font-medium"
                >
                  {filters.map(filter => (
                    <option key={filter.id} value={filter.id}>{filter.name}</option>
                  ))}
                </select>

                {/* View Toggle */}
                <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-lg transition-all ${
                      viewMode === 'grid' ? 'bg-yellow-400 text-black shadow-lg' : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    📱
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-lg transition-all ${
                      viewMode === 'list' ? 'bg-yellow-400 text-black shadow-lg' : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    📋
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black shadow-xl'
                      : 'bg-white text-gray-700 hover:bg-yellow-50 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <div className="font-bold text-sm">{category.name}</div>
                  <div className="text-xs opacity-75">({category.count})</div>
                </button>
              ))}
            </div>
          </div>

          {/* Products Count */}
          <div className="mb-8">
            <p className="text-xl text-gray-600 text-center">
              Showing <span className="font-bold text-gray-800">{filteredProducts.length}</span> products
              {selectedCategory !== 'all' && (
                <span> in <span className="font-bold text-yellow-600">{categories.find(c => c.id === selectedCategory)?.name}</span></span>
              )}
            </p>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                  viewMode === 'list' ? 'flex items-center' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  <>
                    <div className="relative p-8 text-center">
                      {product.bestseller && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          🔥 Bestseller
                        </div>
                      )}
                      {product.fasting_friendly && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          🙏 Fasting
                        </div>
                      )}
                      
                      <div className="text-7xl mb-6">{product.emoji}</div>
                      
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-lg">
                              {i < Math.floor(product.rating) ? '⭐' : '☆'}
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.reviews})</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6 justify-center">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <span key={index} className="bg-gradient-to-r from-yellow-100 to-orange-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="text-3xl font-bold text-green-600">₹{product.price}</span>
                        <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                        <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded-full text-sm font-bold">
                          {product.discount}% OFF
                        </span>
                      </div>
                      
                      <div className="flex gap-3">
                        <button
                          onClick={() => addToCart(product)}
                          className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                        >
                          🛒 Add to Cart
                        </button>
                        <button
                          onClick={() => toggleFavorite(product.id)}
                          className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                            favorites.includes(product.id)
                              ? 'border-red-500 bg-red-50 text-red-500'
                              : 'border-gray-300 text-gray-600 hover:border-red-300'
                          }`}
                        >
                          ❤️
                        </button>
                        <button
                          onClick={() => setShowQuickView(product)}
                          className="p-3 rounded-xl border-2 border-gray-300 text-gray-600 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                        >
                          👁️
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex-shrink-0 p-6">
                      <div className="text-6xl">{product.emoji}</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-lg">
                                  {i < Math.floor(product.rating) ? '⭐' : '☆'}
                                </span>
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
                            <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                          </div>
                          <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                            {product.discount}% OFF
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.map((feature, index) => (
                          <span key={index} className="bg-gradient-to-r from-yellow-100 to-orange-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <button
                          onClick={() => addToCart(product)}
                          className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center gap-2"
                        >
                          🛒 Add to Cart
                        </button>
                        <button
                          onClick={() => toggleFavorite(product.id)}
                          className={`p-3 rounded-xl border-2 transition-all ${
                            favorites.includes(product.id)
                              ? 'border-red-500 bg-red-50 text-red-500'
                              : 'border-gray-300 text-gray-600 hover:border-red-300'
                          }`}
                        >
                          ❤️
                        </button>
                        <button
                          onClick={() => setShowQuickView(product)}
                          className="p-3 rounded-xl border-2 border-gray-300 text-gray-600 hover:border-blue-300 hover:bg-blue-50 transition-all"
                        >
                          👁️
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No products found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchTerm('')
                  setFilterBy('all')
                }}
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-3 px-8 rounded-xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-300"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Features Section */}
          <div className="mt-20 bg-white rounded-3xl shadow-2xl p-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Why Choose Chippyfy?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🌿",
                  title: "100% Natural",
                  description: "No artificial preservatives, colors, or flavors. Pure banana goodness."
                },
                {
                  icon: "🏆",
                  title: "Premium Quality",
                  description: "Carefully selected bananas and traditional cooking methods."
                },
                {
                  icon: "🚚",
                  title: "Global Shipping",
                  description: "Fresh delivery worldwide with secure packaging."
                },
                {
                  icon: "🛡️",
                  title: "Quality Assured",
                  description: "Every batch tested for taste, crunch, and freshness."
                }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-2xl hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 transition-all duration-300">
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Crunch? 🍌</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of happy customers worldwide who trust Chippyfy for their snacking needs. 
              From India to the world, we bring you authentic flavors!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSelectedCategory('combo')}
                className="bg-white text-black font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🎁 Shop Combo Packs
              </button>
              <button
                onClick={() => setSelectedCategory('gift')}
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                🎀 Gift Collections
              </button>
            </div>
          </div>
        </div>

        {/* Quick View Modal */}
        {showQuickView && (
          <QuickViewModal
            product={showQuickView}
            onClose={() => setShowQuickView(null)}
          />
        )}

        {/* Cart Badge */}
        {cart.length > 0 && (
          <div className="fixed bottom-6 right-6 z-40">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black p-4 rounded-2xl shadow-2xl flex items-center gap-3">
              <span className="text-2xl">🛒</span>
              <span className="font-bold">{cart.length} items in cart</span>
              <span className="bg-white bg-opacity-30 px-3 py-1 rounded-full text-sm font-bold">
                ₹{cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)}
              </span>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </>
  )
}
