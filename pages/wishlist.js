// pages/wishlist.js - Modern Beautiful Wishlist Interface
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useWishlist } from '@/context/WishlistContext'
import { useCart } from '@/context/CartContext'

export default function Wishlist() {
  const { wishlist, removeFromWishlist, clearWishlist, wishlistCount } = useWishlist()
  const { addToCart } = useCart()
  const [removingItem, setRemovingItem] = useState(null)
  const [showClearConfirm, setShowClearConfirm] = useState(false)

  const handleAddToCart = (item) => {
    addToCart(item)
    // Show success animation or toast here
  }

  const handleRemove = async (item) => {
    setRemovingItem(item.id)
    // Add slight delay for animation
    setTimeout(() => {
      removeFromWishlist(item.id)
      setRemovingItem(null)
    }, 300)
  }

  const handleClearAll = () => {
    clearWishlist()
    setShowClearConfirm(false)
  }

  if (wishlist.length === 0) {
    return (
      <>
        <Head>
          <title>My Wishlist - Chippyfy</title>
          <meta name="description" content="Your saved wishlist items" />
        </Head>

        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
          {/* Header */}
          <div className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
                  <p className="text-gray-500 mt-1">Your favorite items</p>
                </div>
              </div>
            </div>
          </div>

          {/* Empty State */}
          <div className="flex items-center justify-center py-20">
            <div className="text-center max-w-md mx-auto px-4">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Your wishlist is waiting
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Discover amazing products and save your favorites here. Start building your dream collection!
                </p>
                <a
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                  Start Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>My Wishlist ({wishlistCount}) - Chippyfy</title>
        <meta name="description" content="Your saved wishlist items" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
                <p className="text-gray-500 mt-1">
                  {wishlistCount} {wishlistCount === 1 ? 'item' : 'items'} saved for later
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setShowClearConfirm(true)}
                  className="px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium"
                >
                  Clear All
                </button>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full">
                  <span className="text-purple-800 font-semibold text-sm">
                    {wishlistCount} items
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wishlist Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className={`group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-purple-200 transition-all duration-300 ${
                  removingItem === item.id ? 'scale-95 opacity-50' : 'hover:scale-[1.02]'
                }`}
              >
                {/* Image Container */}
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                  {item.image ? (
                    <>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                          </svg>
                        </div>
                        <p className="text-sm text-gray-500">No image</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Remove Button - Top Right */}
                  <button
                    onClick={() => handleRemove(item)}
                    className="absolute top-3 right-3 w-8 h-8 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full shadow-lg flex items-center justify-center group/btn hover:scale-110 transition-all duration-200"
                    title="Remove from wishlist"
                  >
                    <svg className="w-4 h-4 text-gray-600 group-hover/btn:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>

                  {/* Added Date Badge */}
                  {item.addedAt && (
                    <div className="absolute bottom-3 left-3">
                      <div className="bg-black bg-opacity-50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">
                        Added {new Date(item.addedAt).toLocaleDateString()}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-700 transition-colors">
                    {item.name || 'Unnamed Product'}
                  </h3>
                  
                  {item.price && (
                    <div className="mb-4">
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        ${item.price}
                      </span>
                    </div>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2.5 rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-md"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clear All Confirmation Modal */}
        {showClearConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Clear your entire wishlist?
                </h3>
                <p className="text-gray-600 mb-6">
                  This will remove all {wishlistCount} items from your wishlist. This action cannot be undone.
                </p>
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowClearConfirm(false)}
                    className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleClearAll}
                    className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-medium"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
