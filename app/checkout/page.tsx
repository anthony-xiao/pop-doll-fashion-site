'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  CreditCardIcon,
  TruckIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  LockClosedIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'

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

// Mock order data
const mockOrderItems = [
  {
    id: 1,
    name: 'Elegant Evening Gown',
    price: 89.99,
    image: '/api/placeholder/300/400',
    size: 'Medium',
    color: 'Royal Blue',
    quantity: 1,
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
    dollType: 'American Girl'
  }
]

const shippingMethods = [
  {
    id: 'standard',
    name: 'Standard Shipping',
    description: '5-7 business days',
    price: 9.99,
    estimated: 'Arrives by Dec 15'
  },
  {
    id: 'express',
    name: 'Express Shipping',
    description: '2-3 business days',
    price: 19.99,
    estimated: 'Arrives by Dec 10'
  },
  {
    id: 'overnight',
    name: 'Overnight Shipping',
    description: 'Next business day',
    price: 39.99,
    estimated: 'Arrives by Dec 8'
  }
]

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [shippingMethod, setShippingMethod] = useState('standard')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [isProcessing, setIsProcessing] = useState(false)
  
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States'
  })

  const [billingInfo, setBillingInfo] = useState({
    sameAsShipping: true,
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States'
  })

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  })

  const subtotal = mockOrderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const selectedShipping = shippingMethods.find(method => method.id === shippingMethod)
  const shipping = selectedShipping?.price || 0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setShippingInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setBillingInfo(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }))
  }

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      // Redirect to success page or show success message
      alert('Order placed successfully!')
    }, 3000)
  }

  const steps = [
    { id: 1, name: 'Shipping', completed: currentStep > 1 },
    { id: 2, name: 'Payment', completed: currentStep > 2 },
    { id: 3, name: 'Review', completed: false }
  ]

  return (
    <div className="min-h-screen bg-secondary-50 dark:bg-dark-900">
      {/* Header */}
      <motion.section 
        className="py-8 bg-white dark:bg-dark-800 border-b border-secondary-200 dark:border-dark-700"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/cart"
                className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Back to Cart
              </Link>
              <div className="h-6 w-px bg-secondary-300 dark:bg-dark-600"></div>
              <h1 className="text-2xl font-bold text-secondary-900 dark:text-white">
                Checkout
              </h1>
            </div>
            <div className="flex items-center space-x-2 text-sm text-secondary-600 dark:text-secondary-300">
              <LockClosedIcon className="h-4 w-4" />
              <span>Secure Checkout</span>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="mt-8">
            <div className="flex items-center justify-center space-x-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.completed 
                        ? 'bg-green-500 text-white' 
                        : currentStep === step.id 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-secondary-200 dark:bg-dark-600 text-secondary-600 dark:text-secondary-300'
                    }`}>
                      {step.completed ? (
                        <CheckCircleIcon className="h-5 w-5" />
                      ) : (
                        <span className="text-sm font-medium">{step.id}</span>
                      )}
                    </div>
                    <span className={`text-sm font-medium ${
                      currentStep === step.id 
                        ? 'text-primary-600 dark:text-primary-400' 
                        : 'text-secondary-600 dark:text-secondary-300'
                    }`}>
                      {step.name}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-px ml-4 ${
                      step.completed 
                        ? 'bg-green-500' 
                        : 'bg-secondary-200 dark:bg-dark-600'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
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
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                {/* Shipping Information */}
                {currentStep === 1 && (
                  <motion.div 
                    className="bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-secondary-200 dark:border-dark-700 p-8"
                    variants={fadeInUp}
                  >
                    <h2 className="text-xl font-semibold text-secondary-900 dark:text-white mb-6">
                      Shipping Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={shippingInfo.firstName}
                          onChange={handleShippingChange}
                          required
                          className="w-full px-3 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={shippingInfo.lastName}
                          onChange={handleShippingChange}
                          required
                          className="w-full px-3 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={shippingInfo.email}
                          onChange={handleShippingChange}
                          required
                          className="w-full px-3 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={shippingInfo.phone}
                          onChange={handleShippingChange}
                          className="w-full px-3 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                          Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={shippingInfo.address}
                          onChange={handleShippingChange}
                          required
                          className="w-full px-3 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                          Apartment, suite, etc.
                        </label>
                        <input
                          type="text"
                          name="apartment"
                          value={shippingInfo.apartment}
                          onChange={handleShippingChange}
                          className="w-full px-3 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={shippingInfo.city}
                          onChange={handleShippingChange}
                          required
                          className="w-full px-3 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={shippingInfo.state}
                          onChange={handleShippingChange}
                          required
                          className="w-full px-3 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          value={shippingInfo.zipCode}
                          onChange={handleShippingChange}
                          required
                          className="w-full px-3 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Shipping Methods */}
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
                        Shipping Method
                      </h3>
                      <div className="space-y-3">
                        {shippingMethods.map((method) => (
                          <label 
                            key={method.id}
                            className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                              shippingMethod === method.id
                                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                                : 'border-secondary-300 dark:border-dark-600 hover:border-primary-300 dark:hover:border-primary-700'
                            }`}
                          >
                            <div className="flex items-center">
                              <input
                                type="radio"
                                name="shippingMethod"
                                value={method.id}
                                checked={shippingMethod === method.id}
                                onChange={(e) => setShippingMethod(e.target.value)}
                                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 dark:border-dark-600"
                              />
                              <div className="ml-3">
                                <div className="flex items-center space-x-2">
                                  <span className="font-medium text-secondary-900 dark:text-white">
                                    {method.name}
                                  </span>
                                  <span className="text-sm text-secondary-600 dark:text-secondary-300">
                                    ({method.description})
                                  </span>
                                </div>
                                <p className="text-sm text-secondary-600 dark:text-secondary-300">
                                  {method.estimated}
                                </p>
                              </div>
                            </div>
                            <span className="font-semibold text-secondary-900 dark:text-white">
                              ${method.price.toFixed(2)}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="btn-primary"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Payment Information */}
                {currentStep === 2 && (
                  <motion.div 
                    className="bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-secondary-200 dark:border-dark-700 p-8"
                    variants={fadeInUp}
                  >
                    <h2 className="text-xl font-semibold text-secondary-900 dark:text-white mb-6">
                      Payment Information
                    </h2>

                    {/* Payment Methods */}
                    <div className="mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                          paymentMethod === 'card'
                            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                            : 'border-secondary-300 dark:border-dark-600 hover:border-primary-300 dark:hover:border-primary-700'
                        }`}>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="card"
                            checked={paymentMethod === 'card'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 dark:border-dark-600"
                          />
                          <CreditCardIcon className="h-5 w-5 ml-3 mr-2 text-secondary-600 dark:text-secondary-300" />
                          <span className="font-medium text-secondary-900 dark:text-white">
                            Credit Card
                          </span>
                        </label>
                        <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                          paymentMethod === 'paypal'
                            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                            : 'border-secondary-300 dark:border-dark-600 hover:border-primary-300 dark:hover:border-primary-700'
                        }`}>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="paypal"
                            checked={paymentMethod === 'paypal'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 dark:border-dark-600"
                          />
                          <div className="ml-3 mr-2 w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">P</span>
                          </div>
                          <span className="font-medium text-secondary-900 dark:text-white">
                            PayPal
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Credit Card Form */}
                    {paymentMethod === 'card' && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                            Card Number *
                          </label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={paymentInfo.cardNumber}
                            onChange={handlePaymentChange}
                            placeholder="1234 5678 9012 3456"
                            required
                            className="w-full px-3 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                              Expiry Date *
                            </label>
                            <input
                              type="text"
                              name="expiryDate"
                              value={paymentInfo.expiryDate}
                              onChange={handlePaymentChange}
                              placeholder="MM/YY"
                              required
                              className="w-full px-3 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                              CVV *
                            </label>
                            <input
                              type="text"
                              name="cvv"
                              value={paymentInfo.cvv}
                              onChange={handlePaymentChange}
                              placeholder="123"
                              required
                              className="w-full px-3 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                            Name on Card *
                          </label>
                          <input
                            type="text"
                            name="nameOnCard"
                            value={paymentInfo.nameOnCard}
                            onChange={handlePaymentChange}
                            required
                            className="w-full px-3 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    )}

                    {/* Billing Address */}
                    <div className="mt-8">
                      <div className="flex items-center mb-4">
                        <input
                          type="checkbox"
                          name="sameAsShipping"
                          checked={billingInfo.sameAsShipping}
                          onChange={handleBillingChange}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 dark:border-dark-600 rounded"
                        />
                        <label className="ml-2 text-sm text-secondary-700 dark:text-secondary-300">
                          Billing address is the same as shipping address
                        </label>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="btn-secondary"
                      >
                        Back to Shipping
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="btn-primary"
                      >
                        Review Order
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Order Review */}
                {currentStep === 3 && (
                  <motion.div 
                    className="bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-secondary-200 dark:border-dark-700 p-8"
                    variants={fadeInUp}
                  >
                    <h2 className="text-xl font-semibold text-secondary-900 dark:text-white mb-6">
                      Review Your Order
                    </h2>

                    {/* Order Items */}
                    <div className="space-y-4 mb-8">
                      {mockOrderItems.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 p-4 bg-secondary-50 dark:bg-dark-700 rounded-lg">
                          <div className="w-16 h-20 bg-secondary-200 dark:bg-dark-600 rounded-lg overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={64}
                              height={80}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-secondary-900 dark:text-white">
                              {item.name}
                            </h3>
                            <p className="text-sm text-secondary-600 dark:text-secondary-300">
                              {item.size} • {item.color} • {item.dollType}
                            </p>
                            <p className="text-sm text-secondary-600 dark:text-secondary-300">
                              Qty: {item.quantity}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-secondary-900 dark:text-white">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="btn-secondary"
                      >
                        Back to Payment
                      </button>
                      <button
                        type="submit"
                        disabled={isProcessing}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isProcessing ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Processing...
                          </div>
                        ) : (
                          'Place Order'
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
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

                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  {mockOrderItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <div className="w-12 h-15 bg-secondary-100 dark:bg-dark-700 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={48}
                          height={60}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-secondary-900 dark:text-white">
                          {item.name}
                        </h3>
                        <p className="text-xs text-secondary-600 dark:text-secondary-300">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <div className="text-sm font-semibold text-secondary-900 dark:text-white">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6 border-t border-secondary-200 dark:border-dark-600 pt-6">
                  <div className="flex justify-between text-secondary-600 dark:text-secondary-300">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-secondary-600 dark:text-secondary-300">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
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

                {/* Security Features */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-secondary-600 dark:text-secondary-300">
                    <ShieldCheckIcon className="h-4 w-4 text-green-500" />
                    <span>SSL Encrypted</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-secondary-600 dark:text-secondary-300">
                    <TruckIcon className="h-4 w-4 text-primary-500" />
                    <span>Free shipping on orders over $75</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}