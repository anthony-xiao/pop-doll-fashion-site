'use client'

import { motion, Variants } from 'framer-motion'
import { useState } from 'react'
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  HeartIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

// Animation variants
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

const slideInLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const slideInRight: Variants = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

// Contact methods data
const contactMethods = [
  {
    icon: EnvelopeIcon,
    title: 'Email Us',
    description: 'Send us a message and we\'ll respond within 24 hours',
    contact: 'hello@popdollfashion.com',
    action: 'mailto:hello@popdollfashion.com',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: PhoneIcon,
    title: 'Call Us',
    description: 'Speak directly with our customer service team',
    contact: '+1 (555) 123-4567',
    action: 'tel:+15551234567',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Live Chat',
    description: 'Chat with us in real-time for instant support',
    contact: 'Available 9 AM - 6 PM PST',
    action: '#',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: MapPinIcon,
    title: 'Visit Us',
    description: 'Come see our designs at our flagship store',
    contact: '123 Fashion Ave, San Francisco, CA',
    action: '#',
    color: 'from-pink-500 to-pink-600'
  }
]

// FAQ data
const faqs = [
  {
    question: 'What dolls are your outfits compatible with?',
    answer: 'Our outfits are primarily designed for Labubu dolls, but many pieces also fit other similar-sized collectible dolls. We provide detailed measurements for each item.'
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 5-7 business days within the US, and 10-14 business days internationally. Express shipping options are available at checkout.'
  },
  {
    question: 'Do you offer custom designs?',
    answer: 'Yes! We offer custom design services for special occasions. Please contact us with your ideas and we\'ll provide a quote and timeline.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for unused items in original packaging. Custom items are final sale unless there\'s a manufacturing defect.'
  },
  {
    question: 'How do I care for the outfits?',
    answer: 'Most items can be gently hand-washed with mild soap and air-dried. Detailed care instructions are included with each purchase.'
  },
  {
    question: 'Do you restock sold-out items?',
    answer: 'Some popular items are restocked, while others are limited editions. Join our newsletter to be notified of restocks and new releases.'
  }
]

// Office hours data
const officeHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM PST' },
  { day: 'Saturday', hours: '10:00 AM - 4:00 PM PST' },
  { day: 'Sunday', hours: 'Closed' }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    orderNumber: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '', orderNumber: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
        
        <div className="container-max section-padding relative">
          <motion.div
            className="text-center py-20"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
              <span className="gradient-text">Get in Touch</span>
            </h1>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed max-w-3xl mx-auto">
              Have questions about our products? Need help with an order? We're here to help! 
              Reach out to us through any of the methods below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container-max section-padding">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <motion.a
                  key={index}
                  href={method.action}
                  variants={scaleIn}
                  className="group block bg-white dark:bg-dark-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100 dark:border-dark-700 hover:border-primary-200 dark:hover:border-primary-700"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                    {method.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold">
                    {method.contact}
                  </p>
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-secondary-50 dark:bg-dark-800">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <div className="bg-white dark:bg-dark-900 rounded-3xl p-8 shadow-lg">
                <h2 className="text-3xl font-display font-bold text-secondary-900 dark:text-white mb-6">
                  Send us a Message
                </h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-secondary-200 dark:border-dark-600 bg-white dark:bg-dark-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-secondary-200 dark:border-dark-600 bg-white dark:bg-dark-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-secondary-200 dark:border-dark-600 bg-white dark:bg-dark-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="order">Order Support</option>
                          <option value="custom">Custom Design Request</option>
                          <option value="wholesale">Wholesale Inquiry</option>
                          <option value="return">Return/Exchange</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="orderNumber" className="block text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-2">
                          Order Number
                        </label>
                        <input
                          type="text"
                          id="orderNumber"
                          name="orderNumber"
                          value={formData.orderNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-secondary-200 dark:border-dark-600 bg-white dark:bg-dark-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="Optional"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-secondary-200 dark:border-dark-600 bg-white dark:bg-dark-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInRight}
              className="space-y-8"
            >
              {/* Office Hours */}
              <div className="bg-white dark:bg-dark-900 rounded-3xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <ClockIcon className="h-8 w-8 text-primary-600" />
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-secondary-100 dark:border-dark-700 last:border-b-0">
                      <span className="text-secondary-700 dark:text-secondary-300 font-medium">
                        {schedule.day}
                      </span>
                      <span className="text-secondary-600 dark:text-secondary-400">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="bg-white dark:bg-dark-900 rounded-3xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <MapPinIcon className="h-8 w-8 text-primary-600" />
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
                    Visit Our Store
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-secondary-900 dark:text-white font-semibold mb-2">
                      Pop Doll Fashion Flagship
                    </p>
                    <p className="text-secondary-600 dark:text-secondary-400">
                      123 Fashion Avenue<br />
                      San Francisco, CA 94102<br />
                      United States
                    </p>
                  </div>
                  <div className="aspect-video bg-secondary-100 dark:bg-dark-700 rounded-xl flex items-center justify-center">
                    <p className="text-secondary-500 dark:text-secondary-400">
                      Interactive Map Coming Soon
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <HeartIcon className="h-8 w-8" />
                  <h3 className="text-2xl font-bold">
                    Need Quick Help?
                  </h3>
                </div>
                <div className="space-y-3">
                  <a href="#faq" className="block text-primary-100 hover:text-white transition-colors">
                    → Check our FAQ section below
                  </a>
                  <a href="/shipping" className="block text-primary-100 hover:text-white transition-colors">
                    → Shipping & Returns Policy
                  </a>
                  <a href="/size-guide" className="block text-primary-100 hover:text-white transition-colors">
                    → Size Guide & Measurements
                  </a>
                  <a href="/care-instructions" className="block text-primary-100 hover:text-white transition-colors">
                    → Care Instructions
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white dark:bg-dark-900">
        <div className="container-max section-padding">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <QuestionMarkCircleIcon className="h-10 w-10 text-primary-600" />
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              Find answers to common questions about our products and services
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto space-y-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-secondary-50 dark:bg-dark-800 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-secondary-100 dark:hover:bg-dark-700 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6"
                  >
                    <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}