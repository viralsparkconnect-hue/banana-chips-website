// pages/cart.js
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useCart } from '@/context/CartContext'

export default function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart()
  const router = useRouter()

  // 👉 Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = Math.round(subtotal * 0.1) // example: 10% discount
  const shipping = subtotal > 500 ? 0 : 40
  const total = subtotal - discount + shipping

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">🛒 Your Cart is Empty</h2>
          <button
            onClick={() => router.push('/products')}
            className="bg-yellow-400 px-6 py-3 rounded-full font-bold"
          >
            Browse Products
          </button>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* 🛒 Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{item.emoji || '🍪'}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600">₹{item.price} each</p>
                  </div>
                </div>

                {/* Quantity controls */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg"
                  >
                    −
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-green-500 text-white px-3 py-1 rounded-lg"
                  >
                    +
                  </button>
                </div>

                {/* Item total */}
                <div className="text-right">
                  <p className="font-bold">₹{item.price * item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Clear Cart Button */}
            <button
              onClick={clearCart}
              className="mt-4 text-red-600 hover:underline"
            >
              Clear Cart
            </button>
          </div>

          {/* 💰 Order Summary */}
          <div className="bg-white rounded-xl shadow-lg p-6 h-fit sticky top-6">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>-₹{discount}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-yellow-600">₹{total}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => router.push('/payment')}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-full transition-colors"
            >
              Proceed to Checkout →
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
