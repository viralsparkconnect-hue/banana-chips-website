// pages/payment.js
import { useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useCart } from '@/context/CartContext'

export default function Payment() {
  const router = useRouter()
  const { cart, clearCart, setOrder } = useCart()

  const [paymentMethod, setPaymentMethod] = useState('card')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    upiId: '',
    bank: ''
  })

  const [isProcessing, setIsProcessing] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  // 👉 Calculate totals dynamically from cart
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = Math.round(subtotal * 0.1) // example: 10% off
  const shipping = subtotal > 500 ? 0 : 40
  const total = subtotal - discount + shipping

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePayment = async (e) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment API
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Save order in context
    setOrder({
  id: Date.now(), // unique order ID
  items: cart,
  subtotal,
  discount,
  shipping,
  total,
  paymentMethod,
  ...formData, // spread customer fields directly into order
})

    clearCart() // empty cart after placing order
    setIsProcessing(false)
    setOrderPlaced(true)

    setTimeout(() => {
      router.push('/order-success')
    }, 1500)
  }

  if (orderPlaced) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-8xl mb-6">✅</div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">Order Placed Successfully!</h2>
            <p className="text-gray-600 mb-4">Thank you for your order. Redirecting...</p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400 mx-auto"></div>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">🛒 Your cart is empty</h2>
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
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Secure Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handlePayment} className="space-y-8">
              {/* 🚚 Delivery Info */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Delivery Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" name="fullName" placeholder="Full Name *"
                    value={formData.fullName} onChange={handleInputChange} required className="w-full px-4 py-3 border rounded-lg" />
                  <input type="email" name="email" placeholder="Email Address *"
                    value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border rounded-lg" />
                  <input type="tel" name="phone" placeholder="Phone Number *"
                    value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 border rounded-lg" />
                  <input type="text" name="pincode" placeholder="PIN Code *"
                    value={formData.pincode} onChange={handleInputChange} required className="w-full px-4 py-3 border rounded-lg" />
                  <textarea name="address" placeholder="Complete Address *" rows="3"
                    value={formData.address} onChange={handleInputChange} required className="md:col-span-2 w-full px-4 py-3 border rounded-lg" />
                  <input type="text" name="city" placeholder="City *"
                    value={formData.city} onChange={handleInputChange} required className="w-full px-4 py-3 border rounded-lg" />
                  <input type="text" name="state" placeholder="State *"
                    value={formData.state} onChange={handleInputChange} required className="w-full px-4 py-3 border rounded-lg" />
                </div>
              </div>

              {/* 💳 Payment Method */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Payment Method</h2>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
                    { id: 'upi', name: 'UPI Payment', icon: '📱' },
                    { id: 'netbanking', name: 'Net Banking', icon: '🏦' },
                    { id: 'cod', name: 'Cash on Delivery', icon: '💰' }
                  ].map(method => (
                    <label key={method.id} className="cursor-pointer">
                      <input type="radio" name="paymentMethod" value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="sr-only" />
                      <div className={`border-2 rounded-lg p-4 text-center transition-all ${paymentMethod === method.id ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 hover:border-gray-300'}`}>
                        <div className="text-2xl mb-2">{method.icon}</div>
                        <div className="font-medium">{method.name}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button type="submit" disabled={isProcessing}
                className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 text-black font-bold py-4 rounded-full text-lg flex items-center justify-center">
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                    Processing...
                  </>
                ) : (
                  `Place Order - ₹${total}`
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-lg p-6 h-fit sticky top-6">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-semibold">₹{item.price * item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal}</span></div>
              <div className="flex justify-between text-green-600"><span>Discount</span><span>-₹{discount}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span></div>
              <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>Total</span><span className="text-yellow-600">₹{total}</span></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
