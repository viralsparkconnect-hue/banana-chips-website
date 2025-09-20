// context/CartContext.js
import { createContext, useContext, useState, useMemo } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])          // 🛒 items in cart
  const [order, setOrder] = useState(null)      // 🎉 final order details
  const [coupon, setCoupon] = useState(null)    // 💸 applied coupon

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

  // 🔽 Decrease item quantity
  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0) // remove item if quantity hits 0
    )
  }

  // 🔄 Update item quantity directly
  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    )
  }

  // ➖ Remove item entirely
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }

  // 🗑 Clear cart
  const clearCart = () => setCart([])

  // 💸 Coupon logic
  const applyCoupon = (code) => {
    const coupons = {
      'FIRST10': { discount: 10, minOrder: 100 },
      'CHIPPYFY20': { discount: 20, minOrder: 200 },
      'BULK30': { discount: 30, minOrder: 500 },
    }

    const found = coupons[code.toUpperCase()]
    if (found && subtotal >= found.minOrder) {
      setCoupon(found)
      return true
    }
    return false
  }

  // 📊 Calculate totals
  const { subtotal, discountAmount, shipping, total } = useMemo(() => {
    const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0)
    const discountAmount = coupon ? (subtotal * coupon.discount) / 100 : 0
    const shipping = subtotal > 299 ? 0 : 50
    const total = subtotal - discountAmount + shipping
    return { subtotal, discountAmount, shipping, total }
  }, [cart, coupon])

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQuantity,   // 👈 new
        updateQuantity,
        removeFromCart,
        clearCart,
        coupon,
        applyCoupon,
        order,
        setOrder,
        subtotal,
        discountAmount,
        shipping,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// 🪄 Easy hook
export const useCart = () => useContext(CartContext)
