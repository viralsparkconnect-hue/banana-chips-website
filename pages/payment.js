import { useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Payment() {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [formData, setFormData] = useState({
    // Shipping Details
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Card Details
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // UPI
    upiId: '',
    
    // Net Banking
    bank: ''
  })
  
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  // Sample order data
  const orderDetails = {
    items: [
      { name: "Classic Salted", quantity: 2, price: 50 },
      { name: "Spicy Masala", quantity: 1, price: 60 }
    ],
    subtotal: 160,
    discount: 16,
    shipping: 0,
    total: 144
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePayment = async (e) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    setIsProcessing(false)
    setOrderPlaced(true)
    
    // Redirect to success page after 2 seconds
    setTimeout(() => {
      router.push('/order-success')
    }, 2000)
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

  return (
    <>
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Secure Checkout</h1>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handlePayment} className="space-y-8">
              {/* Shipping Information */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">🚚 Delivery Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                  <input
                    type="text"
                    name="pincode"
                    placeholder="PIN Code *"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                  <textarea
                    name="address"
                    placeholder="Complete Address *"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    className="md:col-span-2 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City *"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State *"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">💳 Payment Method</h2>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
                    { id: 'upi', name: 'UPI Payment', icon: '📱' },
                    { id: 'netbanking', name: 'Net Banking', icon: '🏦' },
                    { id: 'cod', name: 'Cash on Delivery', icon: '💰' }
                  ].map(method => (
                    <label key={method.id} className="cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`border-2 rounded-lg p-4 text-center transition-all ${
                        paymentMethod === method.id 
                          ? 'border-yellow-400 bg-yellow-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <div className="text-2xl mb-2">{method.icon}</div>
                        <div className="font-medium">{method.name}</div>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Payment Details Forms */}
                {paymentMethod === 'card' && (
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">Card Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number *"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="md:col-span-2 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required={paymentMethod === 'card'}
                      />
                      <input
                        type="text"
                        name="cardName"
                        placeholder="Cardholder Name *"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required={paymentMethod === 'card'}
                      />
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY *"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required={paymentMethod === 'card'}
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV *"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required={paymentMethod === 'card'}
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'upi' && (
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">UPI Details</h3>
                    <input
                      type="text"
                      name="upiId"
                      placeholder="Enter UPI ID (e.g., name@paytm) *"
                      value={formData.upiId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required={paymentMethod === 'upi'}
                    />
                  </div>
                )}

                {paymentMethod === 'netbanking' && (
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">Select Bank</h3>
                    <select
                      name="bank"
                      value={formData.bank}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required={paymentMethod === 'netbanking'}
                    >
                      <option value="">Select Your Bank</option>
                      <option value="sbi">State Bank of India</option>
                      <option value="hdfc">HDFC Bank</option>
                      <option value="icici">ICICI Bank</option>
                      <option value="axis">Axis Bank</option>
                      <option value="kotak">Kotak Mahindra Bank</option>
                      <option value="pnb">Punjab National Bank</option>
                    </select>
                  </div>
                )}

                {paymentMethod === 'cod' && (
                  <div className="border-t pt-6">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">💰 Cash on Delivery</h3>
                      <p className="text-gray-600">
                        Pay when your order is delivered to your doorstep. 
                        Additional COD charges of ₹25 may apply.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 text-black font-bold py-4 rounded-full text-lg transition-colors flex items-center justify-center"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                    Processing...
                  </>
                ) : (
                  `Place Order - ₹${orderDetails.total}`
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-lg p-6 h-fit sticky top-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {orderDetails.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-semibold">₹{item.price * item.quantity}</p>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4 space-y-3">
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
              
              <div className="border-t pt-3 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-yellow-600">₹{orderDetails.total}</span>
              </div>
            </div>
            
            {/* Security Badge */}
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <span>🔒</span>
                <span>Secured by SSL encryption</span>
              </div>
              <div className="flex items-center justify-center space-x-4 mt-3">
                <span className="text-2xl">💳</span>
                <span className="text-2xl">📱</span>
                <span className="text-2xl">🏦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}
