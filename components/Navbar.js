import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl">🍌</span>
            <span className="text-2xl font-bold text-white">Chippyfy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-yellow-100 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-yellow-100 font-medium transition-colors">
              About
            </Link>
            <Link href="/products" className="text-white hover:text-yellow-100 font-medium transition-colors">
              Products
            </Link>
            <Link href="/contact" className="text-white hover:text-yellow-100 font-medium transition-colors">
              Contact
            </Link>
            <Link href="/cart" className="relative bg-white text-yellow-600 px-4 py-2 rounded-full font-semibold hover:bg-yellow-100 transition-colors">
              🛒 Cart
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-white hover:text-yellow-100 py-2 font-medium" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-yellow-100 py-2 font-medium" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="/products" className="text-white hover:text-yellow-100 py-2 font-medium" onClick={() => setIsOpen(false)}>
                Products
              </Link>
              <Link href="/contact" className="text-white hover:text-yellow-100 py-2 font-medium" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link href="/cart" className="bg-white text-yellow-600 px-4 py-2 rounded-full font-semibold hover:bg-yellow-100 transition-colors text-center" onClick={() => setIsOpen(false)}>
                🛒 Cart (0)
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
