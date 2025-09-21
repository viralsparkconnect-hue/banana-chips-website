// components/Header.js - Updated Header with Working Account
import { useState } from 'react'
import AccountDropdown from './AccountDropdown'
import { useWishlist } from '@/context/WishlistContext'
import { useCart } from '@/context/CartContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { wishlistCount } = useWishlist()
  const { cart } = useCart()

  return (
    <header className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 shadow-lg">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                +91 9876543210
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                hello@chippyfy.com
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-yellow-400">🎉 Free shipping on orders above ₹299</span>
              <div className="flex items-center">
                <span className="mr-2">🌍 EN</span>
                <span>₹ INR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="text-3xl font-bold text-white">
                ⚡ Chippyfy
              </div>
              <div className="ml-2 text-sm text-white opacity-90">
                From India to World
              </div>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-yellow-200 font-medium transition-colors">
              Home
            </a>
            <a href="/about" className="text-white hover:text-yellow-200 font-medium transition-colors">
              About
            </a>
            <div className="relative group">
              <button className="flex items-center text-white hover:text-yellow-200 font-medium transition-colors">
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {/* Products dropdown can be added here */}
            </div>
            <a href="/contact" className="text-white hover:text-yellow-200 font-medium transition-colors">
              Contact
            </a>
            <div className="flex items-center bg-white bg-opacity-20 rounded-full px-3 py-1 text-white text-sm">
              🌍 50+ Countries
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="text-white hover:text-yellow-200 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>

            {/* Wishlist Icon */}
            <a 
              href="/wishlist"
              className="relative text-white hover:text-yellow-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </a>

            {/* Cart Icon */}
            <a 
              href="/cart"
              className="relative text-white hover:text-yellow-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L6 5H4m3 8a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z"/>
              </svg>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </a>

            {/* Account Dropdown - THIS IS THE FIX! */}
            <AccountDropdown />

            {/* Order Now Button */}
            <button className="bg-white text-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-md">
              Order Now
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-10 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-2">
            <a href="/" className="block text-white hover:text-yellow-200 py-2">Home</a>
            <a href="/about" className="block text-white hover:text-yellow-200 py-2">About</a>
            <a href="/products" className="block text-white hover:text-yellow-200 py-2">Products</a>
            <a href="/contact" className="block text-white hover:text-yellow-200 py-2">Contact</a>
            <a href="/wishlist" className="block text-white hover:text-yellow-200 py-2">
              Wishlist {wishlistCount > 0 && `(${wishlistCount})`}
            </a>
            <a href="/cart" className="block text-white hover:text-yellow-200 py-2">
              Cart {cart.length > 0 && `(${cart.length})`}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
