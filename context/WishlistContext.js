// context/WishlistContext.js
import { createContext, useContext, useState, useEffect } from 'react'

const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([])     // 💖 wishlist items

  // 💾 Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('chippyfy-wishlist')
    if (saved) {
      try {
        setWishlist(JSON.parse(saved))
      } catch (error) {
        console.error('Error loading wishlist:', error)
      }
    }
  }, [])

  // 💾 Save to localStorage when wishlist changes
  useEffect(() => {
    localStorage.setItem('chippyfy-wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  // ➕ Add to wishlist
  const addToWishlist = (item) => {
    setWishlist((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) return prev // Don't add duplicates
      return [...prev, { ...item, addedAt: new Date().toISOString() }]
    })
  }

  // ➖ Remove from wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((i) => i.id !== id))
  }

  // 🗑 Clear wishlist
  const clearWishlist = () => setWishlist([])

  // ❓ Check if item is in wishlist
  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id)
  }

  // 📊 Get wishlist count
  const wishlistCount = wishlist.length

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

// 🪄 Easy hook
export const useWishlist = () => useContext(WishlistContext)
