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

  const products = [ 
    // 👇 keep your full 10 products array as you pasted 
    // (not removed here for brevity)
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

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesFilter =
        filterBy === 'all' ||
        product.type === filterBy ||
        (filterBy === 'fasting_friendly' && product.fasting_friendly)
      return matchesCategory && matchesSearch && matchesFilter
    })
    .sort((a, b) => {
      switch (sortBy) {
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

  // 🟢 Quick View Modal (unchanged, except using global addToCart)
  const QuickViewModal = ({ product, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Quick View</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-3xl font-bold">×</button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-9xl mb-6">{product.emoji}</div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h3>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-bold text-green-600">₹{product.price}</span>
                <span className="text-2xl text-gray-400 line-through">₹{product.originalPrice}</span>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => { addToCart(product); onClose() }}
                  className="flex-1 bg-yellow-400 text-black font-bold py-4 px-8 rounded-2xl"
                >
                  🛒 Add to Cart
                </button>
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`p-4 rounded-2xl border-2 ${favorites.includes(product.id)
                      ? 'border-red-500 bg-red-50 text-red-500'
                      : 'border-gray-300 text-gray-600'}`}
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

      {/* 👇 keep your full UI code for hero, filters, grid, etc.  
          Just replace "addToCart(product)" with the global one */}
      
      {/* Cart Badge using global cart */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40">
          <div className="bg-yellow-400 text-black p-4 rounded-2xl shadow-2xl flex items-center gap-3">
            <span className="text-2xl">🛒</span>
            <span className="font-bold">{cart.length} items in cart</span>
            <span className="bg-white bg-opacity-30 px-3 py-1 rounded-full text-sm font-bold">
              ₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
            </span>
          </div>
        </div>
      )}

      {/* Quick View Modal */}
      {showQuickView && (
        <QuickViewModal product={showQuickView} onClose={() => setShowQuickView(null)} />
      )}

      <Footer />
    </>
  )
}
