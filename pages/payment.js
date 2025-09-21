// pages/products.js
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useCart } from '@/context/CartContext'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useState([])
  const [showQuickView, setShowQuickView] = useState(null)
  const [sortBy, setSortBy] = useState('popular')
  const [filterBy, setFilterBy] = useState('all')

  // 🛒 use global cart
  const { cart, addToCart } = useCart()

  // ✅ Product list with local image paths (ready for your bulk upload)
  const products = [
    { 
      id: 1, 
      name: "Classic Salted Banana Chips", 
      category: "classic", 
      price: 120, 
      originalPrice: 150, 
      image: "/images/classic-salted.jpg", 
      description: "Crispy and lightly salted banana chips – the all-time favorite snack.", 
      rating: 4.5, 
      reviews: 240, 
      type: "thin", 
      fasting_friendly: false 
    },
    { 
      id: 2, 
      name: "Spicy Masala Banana Chips", 
      category: "spicy", 
      price: 150, 
      originalPrice: 180, 
      image: "/images/spicy-masala.jpg", 
      description: "Fiery masala blend for spice lovers.", 
      rating: 4.6, 
      reviews: 190, 
      type: "thick", 
      fasting_friendly: false 
    },
    { 
      id: 3, 
      name: "Sweet Banana Chips", 
      category: "sweet", 
      price: 140, 
      originalPrice: 160, 
      image: "/images/sweet-jaggery.jpg", 
      description: "Caramelized sweetness with natural banana flavor.", 
      rating: 4.4, 
      reviews: 150, 
      type: "thin", 
      fasting_friendly: false 
    },
    { 
      id: 4, 
      name: "Herbal Banana Chips", 
      category: "healthy", 
      price: 160, 
      originalPrice: 190, 
      image: "/images/herbal-chips.jpg", 
      description: "Infused with herbs, a perfect guilt-free snack.", 
      rating: 4.7, 
      reviews: 120, 
      type: "baked", 
      fasting_friendly: false 
    },
    { 
      id: 5, 
      name: "Premium Coconut Oil Banana Chips", 
      category: "premium", 
      price: 200, 
      originalPrice: 250, 
      image: "/images/premium-coconut.jpg", 
      description: "Made with premium bananas fried in cold-pressed coconut oil.", 
      rating: 4.8, 
      reviews: 210, 
      type: "vacuum_fried", 
      fasting_friendly: false 
    },
    { 
      id: 6, 
      name: "Fasting Special Banana Chips", 
      category: "fasting", 
      price: 170, 
      originalPrice: 200, 
      image: "/images/fasting-special.jpg", 
      description: "Made with rock salt, perfect for fasting days.", 
      rating: 4.6, 
      reviews: 100, 
      type: "thin", 
      fasting_friendly: true 
    },
    { 
      id: 7, 
      name: "Combo Pack (Classic + Masala)", 
      category: "combo", 
      price: 250, 
      originalPrice: 300, 
      image: "/images/combo-pack.jpg", 
      description: "A value pack with Classic and Masala chips together.", 
      rating: 4.9, 
      reviews: 180, 
      type: "thick", 
      fasting_friendly: false 
    },
    { 
      id: 8, 
      name: "Gift Pack Banana Chips", 
      category: "gift", 
      price: 350, 
      originalPrice: 400, 
      image: "/images/gift-pack.jpg", 
      description: "Premium banana chips beautifully packed for gifting.", 
      rating: 4.9, 
      reviews: 90, 
      type: "thick", 
      fasting_friendly: false 
    },
    { 
      id: 9, 
      name: "Tangy Tomato Banana Chips", 
      category: "spicy", 
      price: 160, 
      originalPrice: 190, 
      image: "/images/tangy-tomato.jpg", 
      description: "Unique tomato tanginess blended with crispy banana.", 
      rating: 4.3, 
      reviews: 75, 
      type: "thin", 
      fasting_friendly: false 
    },
    { 
      id: 10, 
      name: "Chocolate Banana Chips", 
      category: "sweet", 
      price: 180, 
      originalPrice: 220, 
      image: "/images/chocolate-chips.jpg", 
      description: "Banana chips coated with rich chocolate layer.", 
      rating: 4.5, 
      reviews: 110, 
      type: "baked", 
      fasting_friendly: false 
    },
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

  const sortOptions = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'price_low', name: 'Price: Low to High' },
    { id: 'price_high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'newest', name: 'Newest First' }
  ]

  // ✅ Optimized for vertical/portrait product images (1536x1024px)
  const ProductImage = ({ src, alt, className, fallbackEmoji = "🍌" }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageError, setImageError] = useState(false)

    return (
      <div className={`relative overflow-hidden ${className}`}>
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse rounded-2xl flex items-center justify-center">
            <span className="text-4xl opacity-50">📸</span>
          </div>
        )}
        
        <img 
          src={src} 
          alt={alt}
          className={`w-full h-full object-cover rounded-2xl transition-all duration-300 hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            display: imageError ? 'none' : 'block',
            aspectRatio: '2/3', // Perfect for 1024x1536 (width/height)
            objectPosition: 'center',
            objectFit: 'cover'
          }}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true)
            setImageLoaded(true)
          }}
          loading="lazy"
        />
        
        {imageError && (
          <div className="w-full h-full bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl flex items-center justify-center text-6xl shadow-lg border-2 border-gray-100">
            {fallbackEmoji}
          </div>
        )}
      </div>
    )
  }

  // ✅ filtering & sorting logic
  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price_low': return a.price - b.price
        case 'price_high': return b.price - a.price
        case 'rating': return b.rating - a.rating
        case 'newest': return b.id - a.id
        default: return b.reviews - a.reviews
      }
    })

  const toggleFavorite = (productId) => {
    setFavorites(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    )
  }

  // ✅ Enhanced Quick View Modal with better images
  const QuickViewModal = ({ product, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Quick View</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-3xl font-bold transition-colors">×</button>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="mb-6 bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-2xl shadow-lg">
                <ProductImage 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 mx-auto"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">{product.description}</p>
              
              {/* Rating and Reviews */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xl ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                      ⭐
                    </span>
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-bold text-green-600">₹{product.price}</span>
                <span className="text-2xl text-gray-400 line-through">₹{product.originalPrice}</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => { addToCart(product); onClose() }} 
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  🛒 Add to Cart
                </button>
                <button 
                  onClick={() => toggleFavorite(product.id)} 
                  className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                    favorites.includes(product.id) 
                      ? 'border-red-500 bg-red-50 text-red-500' 
                      : 'border-gray-300 text-gray-600 hover:border-red-300'
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

      {/* Page Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-black mb-4">Our Products</h1>
          <p className="text-xl text-black opacity-80">Discover authentic banana chips from India to the world</p>
        </div>
      </div>

      {/* 🔍 Search & Filters */}
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="w-full p-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-yellow-400 focus:outline-none transition-all"
          />
        </div>

        <div className="flex gap-3 flex-wrap mb-6">
          {categories.map(cat => (
            <button 
              key={cat.id} 
              onClick={() => setSelectedCategory(cat.id)} 
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                selectedCategory === cat.id 
                  ? 'bg-yellow-400 text-black shadow-lg transform scale-105' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {cat.icon} {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mb-8">
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)} 
            className="p-3 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:outline-none"
          >
            {sortOptions.map(opt => <option key={opt.id} value={opt.id}>{opt.name}</option>)}
          </select>
          
          <div className="flex gap-2">
            <button 
              onClick={() => setViewMode('grid')} 
              className={`p-3 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-600'}`}
            >
              ⊞ Grid
            </button>
            <button 
              onClick={() => setViewMode('list')} 
              className={`p-3 rounded-xl transition-all ${viewMode === 'list' ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-600'}`}
            >
              ☰ List
            </button>
          </div>
        </div>

        {/* 🟨 Grid optimized for vertical images */}
        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3' : 'grid-cols-1'} gap-8`}>
          {filteredProducts.map(product => (
            <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102 overflow-hidden border border-gray-100">
              <div className="relative p-4 text-center">
                {/* Bestseller Badge with better positioning */}
                {product.rating >= 4.5 && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg">
                    🔥 Bestseller
                  </div>
                )}
                
                {/* Favorite Button with better styling */}
                <button 
                  onClick={() => toggleFavorite(product.id)}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 z-10 ${
                    favorites.includes(product.id) ? 'text-red-500 bg-white shadow-md' : 'text-gray-400 hover:text-red-400 bg-white/80 hover:bg-white shadow-sm'
                  }`}
                >
                  ❤️
                </button>

                {/* Vertical product image display - showcasing designer's work */}
                <div className="mb-4 bg-gradient-to-br from-gray-50 to-gray-100 p-2 rounded-2xl shadow-sm">
                  <ProductImage 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 mx-auto"
                  />
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2 min-h-[2.5rem] flex items-center justify-center px-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2 min-h-[2rem] px-1">{product.description}</p>
                
                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                      ⭐
                    </span>
                  ))}
                  <span className="text-gray-600 text-xs ml-1">({product.reviews})</span>
                </div>
                
                {/* Price */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-xl font-bold text-green-600">₹{product.price}</span>
                  <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
                
                {/* Buttons optimized for vertical layout */}
                <div className="flex gap-2 px-1">
                  <button 
                    onClick={() => addToCart(product)} 
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold py-2.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                  >
                    🛒 Add to Cart
                  </button>
                  <button 
                    onClick={() => setShowQuickView(product)} 
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2.5 rounded-xl transition-all duration-300 text-sm"
                  >
                    👁
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-8xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* 🛒 Floating Cart Badge */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black p-4 rounded-2xl shadow-2xl flex items-center gap-3 hover:shadow-3xl transition-all duration-300 cursor-pointer">
            <span className="text-2xl">🛒</span>
            <div>
              <div className="font-bold">{cart.length} items</div>
              <div className="text-sm opacity-80">
                ₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick View Modal */}
      {showQuickView && <QuickViewModal product={showQuickView} onClose={() => setShowQuickView(null)} />}

      <Footer />
    </>
  )
}
