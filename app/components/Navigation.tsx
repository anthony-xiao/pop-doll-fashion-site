'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { useCart } from '../contexts/CartContext'
import { useWishlist } from '../contexts/WishlistContext'
import { 
  ShoppingBagIcon, 
  MagnifyingGlassIcon, 
  Bars3Icon, 
  XMarkIcon,
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
  HeartIcon,
  UserIcon
} from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import { CartSidebar } from './CartSidebar'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Collections', href: '/collections' },
  { name: 'New Arrivals', href: '/new-arrivals' },
  { name: 'Accessories', href: '/accessories' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const themeIcons = {
  light: SunIcon,
  dark: MoonIcon,
  system: ComputerDesktopIcon,
}

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const { state: cartState } = useCart()
  const { state: wishlistState } = useWishlist()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const cycleTheme = () => {
    const themes: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system']
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  const ThemeIcon = themeIcons[theme]

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-md shadow-lg border-b border-secondary-100 dark:border-dark-700' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container-max section-padding">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div 
                className="text-2xl lg:text-3xl font-display font-bold gradient-text"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Pop Doll Fashion
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-secondary-700 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors duration-200 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search */}
              <motion.button
                className="p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </motion.button>

              {/* Theme Toggle */}
              <motion.button
                onClick={cycleTheme}
                className="p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ThemeIcon className="h-5 w-5" />
              </motion.button>

              {/* Account */}
              <motion.button
                className="p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <UserIcon className="h-5 w-5" />
              </motion.button>

              {/* Wishlist */}
              <motion.button
                className="relative p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <HeartIcon className="h-5 w-5" />
                {wishlistState.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistState.itemCount}
                  </span>
                )}
              </motion.button>

              {/* Cart */}
              <motion.button
                onClick={() => setCartSidebarOpen(true)}
                className="relative p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ShoppingBagIcon className="h-5 w-5" />
                {cartState.itemCount > 0 && (
                  <motion.span 
                    className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    {cartState.itemCount}
                  </motion.span>
                )}
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <motion.button
                onClick={cycleTheme}
                className="p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ThemeIcon className="h-5 w-5" />
              </motion.button>
              
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white dark:bg-dark-900 shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-secondary-200 dark:border-dark-700">
                  <span className="text-lg font-semibold">Menu</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 py-6">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-6 py-3 text-lg font-medium text-secondary-700 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-secondary-50 dark:hover:bg-dark-800 transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Actions */}
                <div className="border-t border-secondary-200 dark:border-dark-700 p-6">
                  <div className="grid grid-cols-4 gap-4">
                    <button className="flex flex-col items-center space-y-1 p-3 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
                      <MagnifyingGlassIcon className="h-6 w-6" />
                      <span className="text-xs">Search</span>
                    </button>
                    <button className="flex flex-col items-center space-y-1 p-3 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
                      <UserIcon className="h-6 w-6" />
                      <span className="text-xs">Account</span>
                    </button>
                    <button className="relative flex flex-col items-center space-y-1 p-3 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
                      <HeartIcon className="h-6 w-6" />
                      <span className="text-xs">Wishlist</span>
                      {wishlistState.itemCount > 0 && (
                        <span className="absolute top-1 right-2 bg-primary-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                          {wishlistState.itemCount}
                        </span>
                      )}
                    </button>
                    <button 
                      onClick={() => setCartSidebarOpen(true)}
                      className="relative flex flex-col items-center space-y-1 p-3 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      <ShoppingBagIcon className="h-6 w-6" />
                      <span className="text-xs">Cart</span>
                      {cartState.itemCount > 0 && (
                        <span className="absolute top-1 right-2 bg-primary-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                          {cartState.itemCount}
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Cart Sidebar */}
      <CartSidebar 
        isOpen={cartSidebarOpen} 
        onClose={() => setCartSidebarOpen(false)} 
      />
    </>
  )
}