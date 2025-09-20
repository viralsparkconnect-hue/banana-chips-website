// pages/order-success.js
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useCart } from '@/context/CartContext'
import Confetti from 'react-confetti'

export default function OrderSuccess() {
  const router = useRouter()
  const { order } = useCart()

  // If no order exists (direct visit), redirect to cart
  useEffect(() => {
    if (!order) {
      router.replace('/cart')
    }
  }, [order, router])

  if (!order) return null

  return (
    <>
      <Navbar />
      <Confetti numberOfPieces={300} recycle={false} />
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="text-7xl mb-6">🎉</div>
          <h1 className="text-3xl font-bold text-green-600 mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Thank you, <span className="font-semibold">{order.customer.fullName}</span>!  
            Your delicious snacks are on the way 🚚
          </p>

          {/* Order Summary */}
          <div className="border-t pt-6 text-left space-y-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} × {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="border-t pt-4 font-bold flex justify-between">
              <span>Total</span>
              <span className="text-yellow-600">₹{order.total}</span>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-600">Payment Method: <strong>{order.paymentMethod.toUpperCase()}</strong></p>
            <p className="text-gray-600">Delivery to: {order.customer.address}, {order.customer.city}, {order.customer.state} - {order.customer.pincode}</p>
          </div>

          <button
            onClick={() => router.push('/products')}
            className="mt-8 bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-full font-bold"
          >
            Continue Shopping
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}
