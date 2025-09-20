import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function OrderSuccess() {
  const [orderDetails] = useState({
    orderNumber: 'CHF' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    date: new Date().toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    items: [
      { name: "Classic Salted", quantity: 2, price: 50, emoji: "🥨" },
      { name: "Spicy Masala", quantity: 1, price: 60, emoji: "🌶️" }
    ],
    subtotal: 160,
    discount: 16,
    shipping: 0,
    total: 144,
    paymentMethod: "UPI",
    deliveryAddress: {
      name: "Customer Name",
      address: "123 Main Street, Nashik, Maharashtra - 422001",
      phone: "+91 9876543210"
    },
    estimatedDelivery: "2-3 business days"
  })

  const [confetti, setConfetti] = useState(true)

  useEffect(() => {
    // Hide confetti after animation
    const timer = setTimeout(() => setConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Navbar />
      
      {/* Confetti Effect */}
      {confetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 2 + 's',
                animationDuration: (2 + Math.random() * 2) + 's'
              }}
            >
              {['🎉', '🎊', '🍌', '✨'][Math.floor(Math.random() * 4)]}
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6 animate-bounce">✅</div>
          <h1 className="text-5xl font-bold text-green-600 mb-4">Order Placed Successfully!</h1>
          <p className="text-xl text-gray-600 mb-2">
            Thank you for choosing Chippyfy! Your delicious banana chips are on their way.
          </p>
          <div className="inline-flex items-center bg-yellow-100 px-6 py-3 rounded-full">
            <span className="text-lg font-semibold text-gray-800">
              Order #: <span className="text-yellow-600">{orderDetails.orderNumber}</span>
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Items */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">📦</span>
                Order Items
              </h2>
              
              <div className="space-y-4">
                {orderDetails.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{item.emoji}</div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800">₹{item.price * item.quantity}</p>
                      <p className="text-sm text-gray-600">₹{item.price} each</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">🚚</span>
                Delivery Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Delivery Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {orderDetails.deliveryAddress.name}<br/>
                    {orderDetails.deliveryAddress.address}<br/>
                    {orderDetails.deliveryAddress.phone}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Estimated Delivery</h3>
                  <p className="text-gray-600">{orderDetails.estimatedDelivery}</p>
                  
                  <h3 className="font-semibold text-gray-800 mb-2 mt-4">Payment Method</h3>
                  <p className="text-gray-600">{orderDetails.paymentMethod}</p>
                </div>
              </div>
            </div>

            {/* Order Timeline */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">📍</span>
                Order Timeline
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">Order Placed</p>
                    <p className="text-sm text-gray-600">{orderDetails.date}</p>
                  </div>
                  <div className="text-green-500 text-xl">✅</div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">Processing</p>
                    <p className="text-sm text-gray-600">Your order is being prepared</p>
                  </div>
                  <div className="text-yellow-400 text-xl">⏳</div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-400">Shipped</p>
                    <p className="text-sm text-gray-400">Will update once shipped</p>
                  </div>
                  <div className="text-gray-400 text-xl">📦</div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-400">Delivered</p>
                    <p className="text-sm text-gray-400">Expected delivery</p>
                  </div>
                  <div className="text-gray-400 text-xl">🎉</div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary & Actions */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{orderDetails.subtotal}</span>
                </div>
                
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-₹{orderDetails.discount}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600">FREE</span>
                </div>
                
                <div className="border-t pt-3 flex justify-between text-xl font-bold">
                  <span>Total Paid</span>
                  <span className="text-green-600">₹{orderDetails.total}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-full transition-colors">
                  📧 Email Order Details
                </button>
                
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-full transition-colors">
                  📱 Track Your Order
                </button>
                
                <Link href="/products" className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-full text-center transition-colors">
                  🛒 Continue Shopping
                </Link>
                
                <Link href="/" className="block w-full border-2 border-gray-300 text-gray-700 font-medium py-3 rounded-full text-center hover:bg-gray-50 transition-colors">
                  🏠 Back to Home
                </Link>
              </div>
            </div>

            {/* Customer Support */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Need Help? 🤝</h3>
              <p className="text-gray-600 text-sm mb-4">
                Have questions about your order? Our customer support team is here to help!
              </p>
              
              <div className="space-y-2 text-sm">
                <p className="flex items-center">
                  <span className="mr-2">📧</span>
                  <span>support@chippyfy.com</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  <span>+91 9876543210</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">🕒</span>
                  <span>Mon-Sat: 9 AM - 6 PM</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Thank You for Choosing Chippyfy! 🍌</h2>
          <p className="text-lg opacity-90 mb-6">
            We're excited to deliver the crunchiest, most delicious banana chips to your doorstep. 
            Your support means the world to us!
          </p>
          <p className="text-sm opacity-75">
            Follow us on social media for updates, new flavors, and special offers!
          </p>
        </div>
      </div>
      
      <Footer />
    </>
  )
}
