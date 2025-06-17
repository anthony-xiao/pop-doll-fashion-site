'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  TrashIcon, 
  PlusIcon, 
  MinusIcon,
  HeartIcon,
  ShoppingBagIcon,
  TruckIcon,
  ShieldCheckIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Mock cart data
const mockCartItems = [
  {
    id: 1,
    name: 'Elegant Evening Gown',
    price: 89.99,
    originalPrice: 109.99,
    image: '/api/placeholder/300/400',
    size: 'Medium',
    color: 'Royal Blue',
    quantity: 1,
    inStock: true,
    dollType: 'Barbie'
  },
  {
    id: 2,
    name: 'Casual Summer Dress',
    price: 45.99,
    image: '/api/placeholder/300/400',
    size: 'Small',
    color: 'Floral Print',
    quantity: 2,
    inStock: true,
    dollType: 'American Girl'
  },
  {
    id: 3,
    name: 'Winter Coat Set',
    price: 67.99,
    image: '/api/placeholder/300/400',
    size: 'Large',
    color: 'Navy Blue',
    quantity: 1,
    inStock: false,
    dollType: 'Barbie'
  }
]

const benefits = [
  {
    icon: TruckIcon,
    title: 'Free Shipping',
    description: 'On orders over $75'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure Checkout',
    description: '256-bit SSL encryption'
  },
  {
    icon: HeartIcon,
    title: 'Easy Returns',
    description: '30-day return policy'
  }
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(mockCartItems)
  const [wishlistItems, setWishlistItems] = useState<number[]>([2])
  const [promoCode, setPromoCode] = useState('')
  const [isPromoApplied, setIsPromoApplied] = useState(false)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id)
      return
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const toggleWishlist = (id: number) => {
    setWishlistItems(items => 
      items.includes(id) 
        ? items.filter(item => item !== id)
        : [...items, id]
    )
  }

  const moveToWishlist = (id: number) => {
    toggleWishlist(id)
    removeItem(id)
  }

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'save10') {
      setIsPromoApplied(true)
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const discount = isPromoApplied ? subtotal * 0.1 : 0
  const shipping = subtotal > 75 ? 0 : 9.99
  const tax = (subtotal - discount) * 0.08
  const total = subtotal - discount + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-dark-900">
        <motion.section 
          className="py-20"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <ShoppingBagIcon className="h-24 w-24 text-secondary-300 dark:text-secondary-600 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link 
                href="/collections"
                className="btn-primary btn-lg"
              >
                Start Shopping
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      {/* Header */}
      <motion.section 
        className="py-12 bg-secondary-50 dark:bg-dark-800"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">
                Shopping Cart
              </h1>
              <p className="text-secondary-600 dark:text-secondary-300">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
            <Link 
              href="/collections"
              className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <motion.div 
                className="space-y-6"
                variants={fadeInUp}
              >
                {cartItems.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-secondary-200 dark:border-dark-700 p-6"
                  >
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <div className="relative w-32 h-40 bg-secondary-100 dark:bg-dark-700 rounded-lg overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                          {!item.inStock && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                              <span className="text-white text-sm font-medium">Out of Stock</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                              {item.name}
                            </h3>
                            <div className="space-y-1 text-sm text-secondary-600 dark:text-secondary-300">
                              <p>Size: {item.size}</p>
                              <p>Color: {item.color}</p>
                              <p>Doll Type: {item.dollType}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-2">
                              {item.originalPrice && (
                                <span className="text-sm text-secondary-400 dark:text-secondary-500 line-through">
                                  ${item.originalPrice}
                                </span>
                              )}
                              <span className="text-lg font-semibold text-secondary-900 dark:text-white">
                                ${item.price}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Quantity and Actions */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            {/* Quantity Controls */}
                            <div className="flex items-center border border-secondary-300 dark:border-dark-600 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-2 hover:bg-secondary-50 dark:hover:bg-dark-700 transition-colors duration-200"
                                disabled={!item.inStock}
                              >
                                <MinusIcon className="h-4 w-4 text-secondary-600 dark:text-secondary-300" />
                              </button>
                              <span className="px-4 py-2 text-secondary-900 dark:text-white font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-2 hover:bg-secondary-50 dark:hover:bg-dark-700 transition-colors duration-200"
                                disabled={!item.inStock}
                              >
                                <PlusIcon className="h-4 w-4 text-secondary-600 dark:text-secondary-300" />
                              </button>
                            </div>

                            {/* Action Buttons */}
                            <button
                              onClick={() => moveToWishlist(item.id)}
                              className="flex items-center space-x-1 text-sm text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                            >
                              {wishlistItems.includes(item.id) ? (
                                <HeartSolidIcon className="h-4 w-4 text-red-500" />
                              ) : (
                                <HeartIcon className="h-4 w-4" />
                              )}
                              <span>Save for Later</span>
                            </button>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="flex items-center space-x-1 text-sm text-secondary-600 dark:text-secondary-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                            >
                              <TrashIcon className="h-4 w-4" />
                              <span>Remove</span>
                            </button>
                          </div>

                          <div className="text-right">
                            <p className="text-lg font-semibold text-secondary-900 dark:text-white">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>

                        {!item.inStock && (
                          <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                            <p className="text-sm text-red-700 dark:text-red-300">
                              This item is currently out of stock. You can save it for later or remove it from your cart.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div 
                className="bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-secondary-200 dark:border-dark-700 p-6 sticky top-6"
                variants={fadeInUp}
              >
                <h2 className="text-xl font-semibold text-secondary-900 dark:text-white mb-6">
                  Order Summary
                </h2>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    Promo Code
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    >
                      Apply
                    </button>
                  </div>
                  {isPromoApplied && (
                    <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                      Promo code applied! 10% discount
                    </p>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-secondary-600 dark:text-secondary-300">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600 dark:text-green-400">
                      <span>Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-secondary-600 dark:text-secondary-300">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-secondary-600 dark:text-secondary-300">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-secondary-200 dark:border-dark-600 pt-3">
                    <div className="flex justify-between text-lg font-semibold text-secondary-900 dark:text-white">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link 
                  href="/checkout"
                  className="w-full btn-primary btn-lg mb-4 text-center block"
                >
                  Proceed to Checkout
                </Link>

                {/* Benefits */}
                <div className="space-y-3">
                  {benefits.map((benefit) => {
                    const IconComponent = benefit.icon
                    return (
                      <div key={benefit.title} className="flex items-center space-x-3">
                        <IconComponent className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                        <div>
                          <p className="text-sm font-medium text-secondary-900 dark:text-white">
                            {benefit.title}
                          </p>
                          <p className="text-xs text-secondary-600 dark:text-secondary-300">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}