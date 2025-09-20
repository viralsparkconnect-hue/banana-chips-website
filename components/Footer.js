import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🍌</span>
              <span className="text-2xl font-bold text-yellow-400">Chippyfy</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              India's premium banana chips brand, delivering crispy, delicious, and healthy snacks 
              made from the finest handpicked bananas. Taste the difference with Chippyfy!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-400 hover:text-yellow-300 text-2xl">📘</a>
              <a href="#" className="text-yellow-400 hover:text-yellow-300 text-2xl">📷</a>
              <a href="#" className="text-yellow-400 hover:text-yellow-300 text-2xl">🐦</a>
              <a href="#" className="text-yellow-400 hover:text-yellow-300 text-2xl">📺</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="/shipping" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="/returns" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/support" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="/bulk-orders" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-yellow-400 text-xl mr-2">📍</span>
              <span className="text-gray-300">Nashik, Maharashtra, India</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-yellow-400 text-xl mr-2">📞</span>
              <span className="text-gray-300">+91 9876543210</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-yellow-400 text-xl mr-2">✉️</span>
              <span className="text-gray-300">hello@chippyfy.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Chippyfy. All rights reserved. | 
            <a href="/privacy" className="hover:text-yellow-400 ml-1">Privacy Policy</a> | 
            <a href="/terms" className="hover:text-yellow-400 ml-1">Terms & Conditions</a>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Made with ❤️ in India | Fresh • Crispy • Delicious
          </p>
        </div>
      </div>
    </footer>
  )
}
