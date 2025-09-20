// pages/order-success.js
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCart } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function OrderSuccess() {
  const router = useRouter()
  const { order, clearCart } = useCart()

  useEffect(() => {
    if (!order) {
      router.replace('/') // If no order, redirect to home
    } else {
      clearCart() // Empty cart after successful order
    }
  }, [order, clearCart, router])

  if (!order) return null

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-6 py-20 text-center relative overflow-hidden">
        {/* 🎉 Emoji Confetti Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              key={i}
              className="absolute text-2xl animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              🎉
            </span>
          ))}
        </div>

        <div className="relative z-10 max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-7xl mb-4">✅</div>
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Order Placed Successfully!
          </h2>
          <p className="text-gray-700 mb-6">
            Thank you for shopping with us. Your order details are below:
          </p>

          {/* Order Summary */}
          <div className="text-left space-y-3">
            <p><span className="font-semibold">Order ID:</span> {order.id}</p>
            <p><span className="font-semibold">Name:</span> {order.fullName}</p>
            <p><span className="font-semibold">Email:</span> {order.email}</p>
            <p><span className="font-semibold">Phone:</span> {order.phone}</p>
            <p><span className="font-semibold">Address:</span> {order.address}, {order.city}, {order.state} - {order.pincode}</p>
            <p><span className="font-semibold">Payment Method:</span> {order.paymentMethod}</p>
            <p className="font-bold text-yellow-600 text-lg">
              Total Paid: ₹{order.total}
            </p>
          </div>

          <button
            onClick={() => router.push('/products')}
            className="mt-8 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>

      <Footer />

      {/* 🌟 CSS Confetti Animation */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-fall {
          position: absolute;
          animation-name: fall;
          animation-iteration-count: infinite;
        }
      `}</style>
    </>
  )
}
