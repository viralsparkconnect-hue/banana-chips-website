import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Our Address',
      details: ['Chippyfy Headquarters', 'Nashik, Maharashtra', 'India - 422001']
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['+91 9876543210', '+91 8765432109', 'Mon-Sat: 9 AM - 6 PM']
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['hello@chippyfy.com', 'support@chippyfy.com', 'orders@chippyfy.com']
    },
    {
      icon: '🌐',
      title: 'Social Media',
      details: ['@ChippyfyOfficial', 'Follow us for updates', 'Share your reviews!']
    }
  ]

  const faqs = [
    {
      question: 'What are your delivery timings?',
      answer: 'We deliver within 2-3 business days across major cities. Express delivery available in select areas.'
    },
    {
      question: 'Do you offer bulk orders?',
      answer: 'Yes! We offer special pricing for bulk orders above ₹2000. Contact us for custom quotes.'
    },
    {
      question: 'Are your products preservative-free?',
      answer: 'Absolutely! All our banana chips are made with natural ingredients and no artificial preservatives.'
    },
    {
      question: 'Can I return products if not satisfied?',
      answer: 'Yes, we have a 7-day return policy. Contact us within 7 days of delivery for hassle-free returns.'
    }
  ]

  if (isSubmitted) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-8xl mb-6">✅</div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">Message Sent!</h2>
            <p className="text-gray-600 mb-4">Thank you for reaching out. We'll get back to you within 24 hours.</p>
            <div className="animate-pulse text-yellow-600">Redirecting...</div>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-400 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-xl text-white opacity-90">
            Have questions? We'd love to hear from you. Send us a message!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    required
                  >
                    <option value="general">General Inquiry</option>
                    <option value="orders">Order Related</option>
                    <option value="bulk">Bulk Orders</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="complaint">Complaint</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 text-black font-bold py-4 rounded-full transition-colors text-lg flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="mr-2">📧</span>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {
