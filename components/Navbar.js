import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { useWishlist } from '@/context/WishlistContext'

// Account Dropdown Component (integrated directly)
const AccountDropdown = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const { wishlistCount } = useWishlist()
  const { cart } = useCart()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.account-dropdown')) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Load user data
  useEffect(() => {
    const userData = localStorage.getItem('chippyfy-user')
    if (userData) {
      setUser(JSON.parse(userData))
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogin = () => {
    const mockUser = {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: null
    }
    localStorage.setItem('chippyfy-user', JSON.stringify(mockUser))
    setUser(mockUser)
    setIsLoggedIn(true)
    setIsOpen(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('chippyfy-user')
    setUser(null)
    setIsLoggedIn(false)
    setIsOpen(false)
  }

  return (
    <div className="relative account-dropdown">
      {/* Account Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative p-2 rounded-full transition-all hover:scale-110 ${
          isScrolled 
            ? 'text-gray-600 hover:bg-gray-100' 
            : 'text-white hover:bg-white hover:bg-opacity-20'
        }`}
      >
        {isLoggedIn && user ? (
          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {user.name?.charAt(0) || 'U'}
            </span>
          </div>
        ) : (
          <span className="text-xl">👤</span>
        )}
        
        {/* Notification Badge */}
        {(wishlistCount > 0 || cart.length > 0) && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
            {wishlistCount + cart.length}
          </span>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50">
          {isLoggedIn ? (
            <>
              {/* User Info */}
              <div className="px-4 py-3 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {user.name?.charAt(0) || 'U'}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="py-1">
                <Link
                  href="/profile"
                  className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xl mr-3">👤</span>
                  <span className="text-gray-700">My Profile</span>
                </Link>

                <Link
                  href="/orders"
                  className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xl mr-3">📦</span>
                  <span className="text-gray-700">My Orders</span>
                </Link>

                <Link
                  href="/wishlist"
                  className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xl mr-3">❤️</span>
                  <span className="text-gray-700">Wishlist</span>
                  {wishlistCount > 0 && (
                    <span className="ml-auto bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                      {wishlistCount}
                    </span>
                  )}
                </Link>

                <Link
                  href="/cart"
                  className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xl mr-3">🛒</span>
                  <span className="text-gray-700">Cart</span>
                  {cart.length > 0 && (
                    <span className="ml-auto bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                      {cart.length}
                    </span>
                  )}
                </Link>

                <Link
                  href="/settings"
                  className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xl mr-3">⚙️</span>
                  <span className="text-gray-700">Settings</span>
                </Link>
              </div>

              {/* Logout */}
              <div className="border-t border-gray-100 pt-1">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-3 hover:bg-gray-50 transition-colors text-red-600"
                >
                  <span className="text-xl mr-3">🚪</span>
                  <span>Logout</span>
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Login/Register Options */}
              <div className="px-4 py-3 text-center border-b border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">Welcome to Chippyfy!</h3>
                <p className="text-sm text-gray-500">Sign in to access your account</p>
              </div>

              <div className="py-2">
                <button
                  onClick={handleLogin}
                  className="flex items-center w-full px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl mr-3">🔑</span>
                  <span className="text-gray-700">Sign In</span>
                </button>

                <Link
                  href="/register"
                  className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xl mr-3">✨</span>
                  <span className="text-gray-700">Create Account</span>
                </Link>

                {/* Guest Options */}
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <Link
                    href="/wishlist"
                    className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-xl mr-3">❤️</span>
                    <span className="text-gray-700">View Wishlist</span>
                    {wishlistCount > 0 && (
                      <span className="ml-auto bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                        {wishlistCount}
                      </span>
                    )}
                  </Link>

                  <Link
                    href="/cart"
                    className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-xl mr-3">🛒</span>
                    <span className="text-gray-700">View Cart</span>
                    {cart.length > 0 && (
                      <span className="ml-auto bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                        {cart.length}
                      </span>
                    )}
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState('INR')
  const [selectedLanguage, setSelectedLanguage] = useState('EN')

  // Connect to Cart Context and Wishlist Context
  const { cart } = useCart()
  const { wishlistCount } = useWishlist()
  
  // Calculate cart count
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  // Translation dictionary
  const translations = {
    EN: {
      phone: '+91 9876543210',
      email: 'hello@chippyfy.com',
      freeShipping: '🚚 Free shipping on orders above ₹299',
      home: 'Home',
      about: 'About',
      products: 'Products',
      contact: 'Contact',
      countries: '🌍 50+ Countries',
      orderNow: 'Order Now',
      cart: 'Cart',
      wishlist: 'Wishlist',
      searchPlaceholder: 'Search for banana chips, flavors, combos...',
      tagline: 'From India to World 🌍',
      categories: 'Our Categories',
      classicRange: 'Classic Range',
      classicDesc: 'Traditional salted varieties',
      spicyCollection: 'Spicy Collection',
      spicyDesc: 'Peri-peri, masala & more',
      sweetDelights: 'Sweet Delights',
      sweetDesc: 'Jaggery & honey flavors',
      fastingSpecial: 'Fasting Special',
      fastingDesc: 'Religious compliance assured',
      giftCombos: 'Gift Combos',
      giftDesc: 'Perfect for celebrations',
      viewAllProducts: 'View All Products →'
    },
    HI: {
      phone: '+91 9876543210',
      email: 'hello@chippyfy.com',
      freeShipping: '🚚 ₹299 से अधिक के ऑर्डर पर मुफ्त शिपिंग',
      home: 'होम',
      about: 'हमारे बारे में',
      products: 'उत्पाद',
      contact: 'संपर्क',
      countries: '🌍 50+ देश',
      orderNow: 'अभी ऑर्डर करें',
      cart: 'कार्ट',
      wishlist: 'पसंदीदा',
      searchPlaceholder: 'केला चिप्स, फ्लेवर, कॉम्बो खोजें...',
      tagline: 'भारत से विश्व तक 🌍',
      categories: 'हमारी श्रेणियां',
      classicRange: 'क्लासिक रेंज',
      classicDesc: 'पारंपरिक नमकीन किस्में',
      spicyCollection: 'स्पाइसी कलेक्शन',
      spicyDesc: 'पेरी-पेरी, मसाला और अन्य',
      sweetDelights: 'मिठाई',
      sweetDesc: 'गुड़ और शहद के फ्लेवर',
      fastingSpecial: 'व्रत स्पेशल',
      fastingDesc: 'धार्मिक अनुपालन सुनिश्चित',
      giftCombos: 'गिफ्ट कॉम्बो',
      giftDesc: 'उत्सवों के लिए परफेक्ट',
      viewAllProducts: 'सभी उत्पाद देखें →'
    },
    MR: {
      phone: '+91 9876543210',
      email: 'hello@chippyfy.com',
      freeShipping: '🚚 ₹299 पेक्षा जास्त ऑर्डरवर मोफत शिपिंग',
      home: 'होम',
      about: 'आमच्याबद्दल',
      products: 'उत्पादने',
      contact: 'संपर्क',
      countries: '🌍 50+ देश',
      orderNow: 'आता ऑर्डर करा',
      cart: 'कार्ट',
      wishlist: 'आवडते',
      searchPlaceholder: 'केळी चिप्स, फ्लेवर, कॉम्बो शोधा...',
      tagline: 'भारतापासून जगापर्यंत 🌍',
      categories: 'आमच्या श्रेणी',
      classicRange: 'क्लासिक रेंज',
      classicDesc: 'पारंपारिक खारट प्रकार',
      spicyCollection: 'स्पायसी कलेक्शन',
      spicyDesc: 'पेरी-पेरी, मसाला आणि इतर',
      sweetDelights: 'गोड पदार्थ',
      sweetDesc: 'गूळ आणि मधाचे फ्लेवर',
      fastingSpecial: 'उपवास स्पेशल',
      fastingDesc: 'धार्मिक अनुपालन खात्रीशीर',
      giftCombos: 'गिफ्ट कॉम्बो',
      giftDesc: 'सणांसाठी योग्य',
      viewAllProducts: 'सर्व उत्पादने पहा →'
    },
    ES: {
      phone: '+91 9876543210',
      email: 'hello@chippyfy.com',
      freeShipping: '🚚 Envío gratis en pedidos superiores a ₹299',
      home: 'Inicio',
      about: 'Acerca de',
      products: 'Productos',
      contact: 'Contacto',
      countries: '🌍 50+ Países',
      orderNow: 'Pedir Ahora',
      cart: 'Carrito',
      wishlist: 'Favoritos',
      searchPlaceholder: 'Buscar chips de plátano, sabores, combos...',
      tagline: 'De India al Mundo 🌍',
      categories: 'Nuestras Categorías',
      classicRange: 'Gama Clásica',
      classicDesc: 'Variedades saladas tradicionales',
      spicyCollection: 'Colección Picante',
      spicyDesc: 'Peri-peri, masala y más',
      sweetDelights: 'Delicias Dulces',
      sweetDesc: 'Sabores de jaggery y miel',
      fastingSpecial: 'Especial Ayuno',
      fastingDesc: 'Cumplimiento religioso asegurado',
      giftCombos: 'Combos Regalo',
      giftDesc: 'Perfecto para celebraciones',
      viewAllProducts: 'Ver Todos los Productos →'
    },
    FR: {
      phone: '+91 9876543210',
      email: 'hello@chippyfy.com',
      freeShipping: '🚚 Livraison gratuite sur les commandes supérieures à ₹299',
      home: 'Accueil',
      about: 'À Propos',
      products: 'Produits',
      contact: 'Contact',
      countries: '🌍 50+ Pays',
      orderNow: 'Commander Maintenant',
      cart: 'Panier',
      wishlist: 'Favoris',
      searchPlaceholder: 'Rechercher des chips de banane, saveurs, combos...',
      tagline: 'De l\'Inde au Monde 🌍',
      categories: 'Nos Catégories',
      classicRange: 'Gamme Classique',
      classicDesc: 'Variétés salées traditionnelles',
      spicyCollection: 'Collection Épicée',
      spicyDesc: 'Peri-peri, masala et plus',
      sweetDelights: 'Délices Sucrés',
      sweetDesc: 'Saveurs de jaggery et miel',
      fastingSpecial: 'Spécial Jeûne',
      fastingDesc: 'Conformité religieuse assurée',
      giftCombos: 'Combos Cadeaux',
      giftDesc: 'Parfait pour les célébrations',
      viewAllProducts: 'Voir Tous les Produits →'
    },
    DE: {
      phone: '+91 9876543210',
      email: 'hello@chippyfy.com',
      freeShipping: '🚚 Kostenloser Versand bei Bestellungen über ₹299',
      home: 'Startseite',
      about: 'Über Uns',
      products: 'Produkte',
      contact: 'Kontakt',
      countries: '🌍 50+ Länder',
      orderNow: 'Jetzt Bestellen',
      cart: 'Warenkorb',
      wishlist: 'Wunschliste',
      searchPlaceholder: 'Bananenchips, Geschmacksrichtungen, Combos suchen...',
      tagline: 'Von Indien in die Welt 🌍',
      categories: 'Unsere Kategorien',
      classicRange: 'Klassische Linie',
      classicDesc: 'Traditionelle gesalzene Sorten',
      spicyCollection: 'Würzige Kollektion',
      spicyDesc: 'Peri-peri, Masala und mehr',
      sweetDelights: 'Süße Köstlichkeiten',
      sweetDesc: 'Jaggery und Honig Aromen',
      fastingSpecial: 'Fasten Spezial',
      fastingDesc: 'Religiöse Konformität gesichert',
      giftCombos: 'Geschenk Kombos',
      giftDesc: 'Perfekt für Feiern',
      viewAllProducts: 'Alle Produkte Anzeigen →'
    }
  }

  // Get current translation
  const t = translations[selectedLanguage] || translations.EN

  const currencies = [
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' }
  ]

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'HI', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'MR', name: 'मराठी', flag: '🇮🇳' },
    { code: 'ES', name: 'Español', flag: '🇪🇸' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'DE', name: 'Deutsch', flag: '🇩🇪' }
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Save language to localStorage whenever it changes
  useEffect(() => {
    const savedLanguage = localStorage.getItem('chippyfy_language')
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('chippyfy_language', selectedLanguage)
  }, [selectedLanguage])

  const NavLink = ({ href, children, hasDropdown = false }) => (
    <Link 
      href={href} 
      className={`font-medium transition-colors hover:scale-105 transform duration-200 ${
        isScrolled ? 'text-gray-700 hover:text-yellow-600' : 'text-white hover:text-yellow-100'
      } ${hasDropdown ? 'flex items-center gap-1' : ''}`}
    >
      {children}
      {hasDropdown && <span className="text-sm">▼</span>}
    </Link>
  )

  const DropdownItem = ({ icon, title, description }) => (
    <div className="px-6 py-3 hover:bg-yellow-50 transition-colors cursor-pointer">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <h4 className="font-semibold text-gray-800">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm py-2">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-2">
                <span className="text-lg">📞</span>
                <span>{t.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">✉️</span>
                <span>{t.email}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="hidden sm:block">{t.freeShipping}</span>
              
              {/* Language Selector */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                  <span className="text-lg">🌍</span>
                  <span>{selectedLanguage}</span>
                </button>
                <div className="absolute top-full right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg py-2 min-w-[120px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang.code)}
                      className={`w-full px-4 py-2 hover:bg-yellow-50 flex items-center gap-2 text-sm ${
                        selectedLanguage === lang.code ? 'bg-yellow-100 font-semibold' : ''
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Currency Selector */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                  <span>{currencies.find(c => c.code === selectedCurrency)?.symbol}</span>
                  <span>{selectedCurrency}</span>
                </button>
                <div className="absolute top-full right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg py-2 min-w-[140px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {currencies.map((currency) => (
                    <button
                      key={currency.code}
                      onClick={() => setSelectedCurrency(currency.code)}
                      className={`w-full px-4 py-2 hover:bg-yellow-50 flex items-center justify-between text-sm ${
                        selectedCurrency === currency.code ? 'bg-yellow-100 font-semibold' : ''
                      }`}
                    >
                      <span>{currency.code}</span>
                      <span>{currency.symbol}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-2xl backdrop-blur-md bg-opacity-95' 
          : 'bg-gradient-to-r from-yellow-400 to-orange-400'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <span className="text-4xl" style={{animation: 'bounce 3s ease-in-out infinite'}}>🍌</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className={`text-3xl font-bold transition-colors ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}>
                  Chippyfy
                </span>
                <div className={`text-xs font-medium ${
                  isScrolled ? 'text-gray-600' : 'text-white opacity-80'
                }`}>
                  {t.tagline}
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavLink href="/">{t.home}</NavLink>
              <NavLink href="/about">{t.about}</NavLink>
              
              {/* Products Dropdown */}
              <div className="relative group">
                <NavLink href="/products" hasDropdown>
                  {t.products}
                </NavLink>
                <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl py-4 min-w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="px-6 py-2 border-b border-gray-100">
                    <h3 className="font-bold text-gray-800 text-lg">{t.categories}</h3>
                  </div>
                  <div className="py-2">
                    <DropdownItem icon="🥨" title={t.classicRange} description={t.classicDesc} />
                    <DropdownItem icon="🌶️" title={t.spicyCollection} description={t.spicyDesc} />
                    <DropdownItem icon="🍯" title={t.sweetDelights} description={t.sweetDesc} />
                    <DropdownItem icon="🙏" title={t.fastingSpecial} description={t.fastingDesc} />
                    <DropdownItem icon="🎁" title={t.giftCombos} description={t.giftDesc} />
                  </div>
                  <div className="px-6 py-3 border-t border-gray-100">
                    <Link href="/products" className="text-yellow-600 font-semibold hover:text-yellow-700 text-sm">
                      {t.viewAllProducts}
                    </Link>
                  </div>
                </div>
              </div>

              <NavLink href="/contact">{t.contact}</NavLink>
              
              {/* Global Shipping Badge */}
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                isScrolled 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-white bg-opacity-20 text-white'
              }`}>
                {t.countries}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              
              {/* Search */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className={`p-2 rounded-full transition-all hover:scale-110 ${
                  isScrolled 
                    ? 'text-gray-600 hover:bg-gray-100' 
                    : 'text-white hover:bg-white hover:bg-opacity-20'
                }`}
              >
                <span className="text-xl">🔍</span>
              </button>

              {/* Wishlist */}
              <Link href="/wishlist" className={`relative p-2 rounded-full transition-all hover:scale-110 ${
                isScrolled 
                  ? 'text-gray-600 hover:bg-gray-100' 
                  : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}>
                <span className="text-xl">❤️</span>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart - Connected to Context */}
              <Link href="/cart" className={`relative p-2 rounded-full transition-all hover:scale-110 ${
                isScrolled 
                  ? 'text-gray-600 hover:bg-gray-100' 
                  : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}>
                <span className="text-xl">🛒</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-bounce">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* User Account - FIXED WITH WORKING DROPDOWN */}
              <AccountDropdown isScrolled={isScrolled} />

              {/* Order Now CTA */}
              <Link href="/products" className={`hidden sm:block font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg ${
                isScrolled
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:from-yellow-500 hover:to-orange-500'
                  : 'bg-white text-yellow-600 hover:bg-gray-100'
              }`}>
                {t.orderNow}
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-2 rounded-full transition-all ${
                  isScrolled 
                    ? 'text-gray-600 hover:bg-gray-100' 
                    : 'text-white hover:bg-white hover:bg-opacity-20'
                }`}
              >
                {isOpen ? <span className="text-2xl">✕</span> : <span className="text-2xl">☰</span>}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="border-t border-white border-opacity-20 py-4">
            <div className="container mx-auto px-6">
              <div className="relative max-w-2xl mx-auto">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">🔍</span>
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border-0 focus:outline-none focus:ring-4 focus:ring-yellow-200 text-gray-800"
                />
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-white border-opacity-20">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                <Link href="/" className={`py-2 font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`} onClick={() => setIsOpen(false)}>
                  {t.home}
                </Link>
                <Link href="/about" className={`py-2 font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`} onClick={() => setIsOpen(false)}>
                  {t.about}
                </Link>
                <Link href="/products" className={`py-2 font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`} onClick={() => setIsOpen(false)}>
                  {t.products}
                </Link>
                <Link href="/contact" className={`py-2 font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`} onClick={() => setIsOpen(false)}>
                  {t.contact}
                </Link>
                <Link href="/wishlist" className={`relative py-2 font-medium flex items-center gap-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`} onClick={() => setIsOpen(false)}>
                  ❤️ {t.wishlist} ({wishlistCount})
                </Link>
                <Link href="/cart" className={`relative py-2 font-medium flex items-center gap-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`} onClick={() => setIsOpen(false)}>
                  🛒 {t.cart} ({cartCount})
                </Link>
                <Link href="/products" className={`font-bold py-3 px-6 rounded-full text-center transition-all ${
                  isScrolled
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black'
                    : 'bg-white text-yellow-600'
                }`} onClick={() => setIsOpen(false)}>
                  {t.orderNow}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  )
}

            {/*
