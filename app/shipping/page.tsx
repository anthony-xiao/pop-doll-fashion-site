'use client'

import { motion, Variants } from 'framer-motion'
import { TruckIcon, ClockIcon, GlobeAltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const shippingOptions = [
  {
    name: 'Standard Shipping',
    price: 'Free',
    time: '5-7 business days',
    description: 'Free shipping on orders over $75',
    icon: TruckIcon
  },
  {
    name: 'Express Shipping',
    price: '$9.99',
    time: '2-3 business days',
    description: 'Faster delivery for urgent orders',
    icon: ClockIcon
  },
  {
    name: 'Overnight Shipping',
    price: '$24.99',
    time: '1 business day',
    description: 'Next day delivery available',
    icon: ShieldCheckIcon
  },
  {
    name: 'International Shipping',
    price: 'Varies',
    time: '7-14 business days',
    description: 'Worldwide delivery available',
    icon: GlobeAltIcon
  }
]

const shippingPolicies = [
  {
    title: 'Processing Time',
    content: 'Orders are processed within 1-2 business days. Orders placed on weekends or holidays will be processed the next business day.'
  },
  {
    title: 'Shipping Restrictions',
    content: 'We currently ship to all 50 US states and over 100 countries worldwide. Some restrictions may apply to certain items.'
  },
  {
    title: 'Order Tracking',
    content: 'Once your order ships, you\'ll receive a tracking number via email. You can track your package on our website or the carrier\'s website.'
  },
  {
    title: 'Delivery Issues',
    content: 'If your package is lost or damaged during shipping, please contact us within 48 hours of the expected delivery date.'
  }
]

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-800 dark:to-dark-700"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6"
            variants={fadeInUp}
          >
            Shipping Information
          </motion.h1>
          <motion.p 
            className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Fast, reliable shipping to get your doll fashion delivered safely to your door
          </motion.p>
        </div>
      </motion.section>

      {/* Shipping Options */}
      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              Shipping Options
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Choose the shipping method that works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shippingOptions.map((option, index) => {
              const IconComponent = option.icon
              return (
                <motion.div
                  key={option.name}
                  className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100 dark:border-dark-700"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
                      <IconComponent className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                      {option.name}
                    </h3>
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                      {option.price}
                    </div>
                    <div className="text-sm text-secondary-600 dark:text-secondary-400 mb-4">
                      {option.time}
                    </div>
                    <p className="text-sm text-secondary-600 dark:text-secondary-300">
                      {option.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Shipping Policies */}
      <motion.section 
        className="py-20 bg-secondary-50 dark:bg-dark-800"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              Shipping Policies
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Important information about our shipping process
            </p>
          </motion.div>

          <div className="space-y-8">
            {shippingPolicies.map((policy, index) => (
              <motion.div
                key={policy.title}
                className="bg-white dark:bg-dark-700 rounded-xl p-8 shadow-lg"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
                  {policy.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                  {policy.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">
            Questions About Shipping?
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
            Our customer service team is here to help with any shipping questions or concerns.
          </p>
          <motion.a
            href="/contact"
            className="btn-primary inline-flex items-center px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.a>
        </div>
      </motion.section>
    </div>
  )
}