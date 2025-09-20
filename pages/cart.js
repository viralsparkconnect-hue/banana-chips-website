import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Cart() {
  const [cart, setCart] = useState([])
  const [couponCode, setCouponCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [showCheckout, setShowCheckout] = useState(false)
  const router = useRouter()

  // Sample cart items (in real app, this would come from global state/context)
  useEffect(() => {
    // Initialize with some sample items for demo
    setCart([
      { id: 1, name: "Classic Salted", price: 50, quantity: 2, emoji: "🥨", weight: "100g" },
      { id: 2, name: "Spicy Masala", price: 60, quantity: 1, emoji: "🌶️", weight: "100g" },
    ])
  }, [])

  const coupons = {
    'FIRST10': { discount: 10, minOrder: 100 },
    'CHIPPYFY20': { discount: 20, minOrder: 200 },
    'BULK30': { discount: 30, minOrder: 500 }
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCart(cart.filter(item => item.id !== id))
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const applyCoupon = () => {
    const coupon = coupons[couponCode.toUpperCase()]
    if (coupon && subtotal >= coupon.minOrder) {
      setDiscount(coupon.discount)
    } else {
      alert('Invalid coupon code or minimum order not met')
    }
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const discountAmount = (subtotal * discount) / 100
  const shipping = subtotal > 299 ? 0 : 50
  const total = subtotal - discountAmount + shipping

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
                    <p className="text-gray-600">{item.weight} pack</p>
                    <p className="text-lg font-semibold text-yellow-600">₹{item.price}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-bold text-gray-800">₹{item.price * item.quantity}</p>
                    <button
                      onClick={() => removeItem(item.id)}
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
              
              {/* Available Coupons */}
              <div className="mt-3 text-xs text-gray-600">
                <p>Available coupons:</p>
                <p>• FIRST10 - 10% off on ₹100+</p>
                <p>• CHIPPYFY20 - 20% off on ₹200+</p>
                <p>• BULK30 - 30% off on ₹500+</p>
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
              
              {subtotal < 299 && (
                <p className="text-xs text-gray-500">Add ₹{299 - subtotal} more for free shipping</p>
              )}
              
              <div className="border-t pt-3 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-yellow-600">₹{total}</span>
              </div>
            </div>
            
            <button
              onClick={() => setShowCheckout(true)}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-full mt-6 transition-colors text-lg"
            >
              Proceed to Checkout
            </button>
            
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">🔒 Secure checkout with 256-bit SSL</p>
            </div>
          </div>
        </div>

        {/* Checkout Modal */}
        {showCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Choose Payment Method</h3>
              
              <div className="space-y-4">
                <Link 
                  href="/payment"
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-full text-center transition-colors"
                >
                  💳 Credit/Debit Card
                </Link>
                
                <Link 
                  href="/payment"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full text-center transition-colors"
                >
                  📱 UPI Payment
                </Link>
                
                <Link 
                  href="/payment"
                  className="block w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-6 rounded-full text-center transition-colors"
                >
                  🏦 Net Banking
                </Link>
                
                <Link 
                  href="/payment"
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-full text-center transition-colors"
                >
                  💰 Cash on Delivery
                </Link>
              </div>
              
              <button
                onClick={() => setShowCheckout(false)}
                className="w-full mt-6 border-2 border-gray-300 text-gray-700 font-medium py-3 rounded-full hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </>
  )
}
