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

  // ✅ full product list with emojis
  const products = [
    { id: 1, name: "Classic Salted Banana Chips", category: "classic", price: 120, originalPrice: 150, emoji: "🍌", description: "Crispy and lightly salted banana chips – the all-time favorite snack.", rating: 4.5, reviews: 240, type: "thin", fasting_friendly: false },
    { id: 2, name: "Spicy Masala Banana Chips", category: "spicy", price: 150, originalPrice: 180, emoji: "🌶️", description: "Fiery masala blend for spice lovers.", rating: 4.6, reviews: 190, type: "thick", fasting_friendly: false },
    { id: 3, name: "Sweet Banana Chips", category: "sweet", price: 140, originalPrice: 160, emoji: "🍯", description: "Caramelized sweetness with natural banana flavor.", rating: 4.4, reviews: 150, type: "thin", fasting_friendly: false },
    { id: 4, name: "Herbal Banana Chips", category: "healthy", price: 160, originalPrice: 190, emoji: "🌿", description: "Infused with herbs, a perfect guilt-free snack.", rating: 4.7, reviews: 120, type: "baked", fasting_friendly: false },
    { id: 5, name: "Premium Coconut Oil Banana Chips", category: "premium", price: 200, originalPrice: 250, emoji: "✨", description: "Made with premium bananas fried in cold-pressed coconut oil.", rating: 4.8, reviews: 210, type: "vacuum_fried", fasting_friendly: false },
    { id: 6, name: "Fasting Special Banana Chips", category: "fasting", price: 170, originalPrice: 200, emoji: "🙏", description: "Made with rock salt, perfect for fasting days.", rating: 4.6, reviews: 100, type: "thin", fasting_friendly: true },
    { id: 7, name: "Combo Pack (Classic + Masala)", category: "combo", price: 250, originalPrice: 300, emoji: "🎁", description: "A value pack with Classic and Masala chips together.", rating: 4.9, reviews: 180, type: "thick", fasting_friendly: false },
    { id: 8, name: "Gift Pack Banana Chips", category: "gift", price: 350, originalPrice: 400, emoji: "🎀", description: "Premium banana chips beautifully packed for gifting.", rating: 4.9, reviews: 90, type: "thick", fasting_friendly: false },
    { id: 9, name: "Tangy Tomato Banana Chips", category: "spicy", price: 160, originalPrice: 190, emoji: "🍅", description: "Unique tomato tanginess blended with crispy banana.", rating: 4.3, reviews: 75, type: "thin", fasting_friendly: false },
    { id: 10, name: "Chocolate Banana Chips", category: "sweet", price: 180, originalPrice: 220, emoji: "🍫", description: "Banana chips coated with rich chocolate layer.", rating: 4.5, reviews: 110, type: "baked", fasting_friendly: false },
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

  // ✅ Quick View Modal
  const QuickViewModal = ({ product, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Quick View</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-3xl font-bold">×</button>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="text-center"><div className="text-9xl mb-6">{product.emoji}</div></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h3>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-bold text-green-600">₹{product.price}</span>
                <span className="text-2xl text-gray-400 line-through">₹{product.originalPrice}</span>
              </div>
              <div className="flex gap-4">
                <button onClick={() => { addToCart(product); onClose() }} className="flex-1 bg-yellow-400 text-black font-bold py-4 px-8 rounded-2xl">
                  🛒 Add to Cart
                </button>
                <button onClick={() => toggleFavorite(product.id)} className={`p-4 rounded-2xl border-2 ${favorites.includes(product.id) ? 'border-red-500 bg-red-50 text-red-500' : 'border-gray-300 text-gray-600'}`}>❤️</button>
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

      {/* 🔍 Search & Filters */}
      <div className="p-6 max-w-6xl mx-auto">
        <input type="text" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-3 border rounded-2xl mb-6" />

        <div className="flex gap-3 flex-wrap mb-6">
          {categories.map(cat => (
            <button key={cat.id} onClick={() => setSelectedCategory(cat.id)} className={`px-4 py-2 rounded-full text-sm font-bold ${selectedCategory === cat.id ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-600'}`}>
              {cat.icon} {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="p-2 border rounded-2xl mb-6">
          {sortOptions.map(opt => <option key={opt.id} value={opt.id}>{opt.name}</option>)}
        </select>

        {/* 🟨 Product Grid */}
        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
              <div className="text-7xl mb-4">{product.emoji}</div>
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-500 mb-2">{product.description}</p>
              <div className="flex gap-3 items-center mb-4">
                <span className="text-lg font-bold text-green-600">₹{product.price}</span>
                <span className="text-gray-400 line-through">₹{product.originalPrice}</span>
              </div>
              <div className="flex gap-3">
                <button onClick={() => addToCart(product)} className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-xl">🛒 Add</button>
                <button onClick={() => setShowQuickView(product)} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl">👁 Quick View</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🛒 Floating Cart Badge */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40">
          <div className="bg-yellow-400 text-black p-4 rounded-2xl shadow-2xl flex items-center gap-3">
            <span className="text-2xl">🛒</span>
            <span className="font-bold">{cart.length} items</span>
            <span className="bg-white bg-opacity-30 px-3 py-1 rounded-full text-sm font-bold">
              ₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
            </span>
          </div>
        </div>
      )}

      {/* Quick View Modal */}
      {showQuickView && <QuickViewModal product={showQuickView} onClose={() => setShowQuickView(null)} />}

      <Footer />
    </>
  )
}
