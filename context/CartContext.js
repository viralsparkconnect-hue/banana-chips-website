// context/CartContext.js
import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])          // 🛒 items in cart
  const [order, setOrder] = useState(null)      // 🎉 final order details

  // ➕ Add item to cart
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  // ➖ Remove item from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }

  // 🗑 Clear cart
  const clearCart = () => setCart([])

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        order,
        setOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// 🪄 Easy hook to use anywhere
export const useCart = () => useContext(CartContext)
