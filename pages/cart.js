import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useCart } from '@/context/CartContext'

export default function Cart() {
  const { cart, removeFromCart, addToCart } = useCart()
  const [couponCode, setCouponCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [showCheckout, setShowCheckout] = useState(false)
  const router = useRouter()

  const coupons = {
    'FIRST10': { discount: 10, minOrder: 100 },
    'CHIPPYFY20': { discount: 20, minOrder: 200 },
    'BULK30': { discount: 30, minOrder: 500 }
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const discountAmount = (subtotal * discount) / 100
  const shipping = subtotal > 299 ? 0 : 50
  const total = subtotal - discountAmount + shipping

  const applyCoupon = () => {
    const coupon = coupons[couponCode.toUpperCase()]
    if (coupon && subtotal >= coupon.minOrder) {
      setDiscount(coupon.discount)
    } else {
      alert('Invalid coupon code or minimum order not met')
    }
  }

  const updateQuantity = (item, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(item.id)
    } else {
      addToCart({ ...item, quantity: newQuantity - item.quantity }) // adjust quantity
    }
  }

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-8xl mb-6">🛒</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any delicious chips yet!</p>
            <Link 
              href="/products" 
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Your Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cart.map(item => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4">
                  <div className="text-4xl">{item.emoji}</div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">{item.weight || "100g"} pack</p>
                    <p className="text-lg font-semibold text-yellow-600">₹{item.price}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-bold text-gray-800">₹{item.price * item.quantity}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Link 
                href="/products" 
                className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-lg p-6 h-fit sticky top-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
            
            {/* Coupon Code */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Coupon Code</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                  className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  onClick={applyCoupon}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded-lg"
                >
                  Apply
                </button>
              </div>
            </div>
            
            <div className="space-y-3 border-t pt-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">₹{subtotal}</span>
              </div>
              
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount ({discount}%)</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className={`font-semibold ${shipping === 0 ? 'text-green-600' : ''}`}>
                  {shipping === 0 ? 'FREE' : `₹${shipping}`}
                </span>
              </div>
              
              <div className="border-t pt-3 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-yellow-600">₹{total}</span>
              </div>
            </div>
            
            <button
              onClick={() => router.push('/payment')}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-full mt-6 transition-colors text-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}
