'use client'

import { motion, Variants } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
  CheckCircleIcon,
  SparklesIcon,
  GiftIcon,
  BellIcon,
  HeartIcon
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

// Benefits data
const benefits = [
  {
    icon: SparklesIcon,
    title: 'Exclusive Early Access',
    description: 'Be the first to shop new collections before they go public'
  },
  {
    icon: GiftIcon,
    title: 'Member-Only Discounts',
    description: 'Enjoy special pricing and exclusive offers just for members'
  },
  {
    icon: BellIcon,
    title: 'Restock Notifications',
    description: 'Get notified when your favorite sold-out items are back'
  },
  {
    icon: HeartIcon,
    title: 'Personalized Recommendations',
    description: 'Receive curated suggestions based on your style preferences'
  }
]

// Features data
const features = [
  'Free shipping on first order',
  'Birthday month special discount',
  'Access to limited edition releases',
  'Style inspiration and tutorials',
  'Community events and contests',
  'Priority customer support'
]

export default function SignupPage() {
  const [activeTab, setActiveTab] = useState<'signup' | 'newsletter'>('signup')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    newsletter: true,
    terms: false
  })
  
  const [newsletterData, setNewsletterData] = useState({
    email: '',
    interests: [] as string[]
  })

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setSignupData({
      ...signupData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleNewsletterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    
    if (name === 'interests') {
      const interests = checked 
        ? [...newsletterData.interests, value]
        : newsletterData.interests.filter(interest => interest !== value)
      
      setNewsletterData({
        ...newsletterData,
        interests
      })
    } else {
      setNewsletterData({
        ...newsletterData,
        [name]: value
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form
    if (activeTab === 'signup') {
      setSignupData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        newsletter: true,
        terms: false
      })
    } else {
      setNewsletterData({
        email: '',
        interests: []
      })
    }
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const interestOptions = [
    'New Arrivals',
    'Limited Editions',
    'Sale Alerts',
    'Style Tips',
    'Behind the Scenes',
    'Custom Designs'
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="absolute inset-0 bg-[url('/patterns/geometric.svg')] opacity-10"></div>
        
        <div className="container-max section-padding relative">
          <motion.div
            className="text-center py-12"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight mb-6">
              <span className="gradient-text">Join Pop Doll</span>
            </h1>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed max-w-3xl mx-auto">
              Become part of our fashion-forward community and unlock exclusive benefits
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <div className="bg-white dark:bg-dark-800 rounded-3xl p-8 shadow-xl border border-secondary-100 dark:border-dark-700">
                {/* Tab Navigation */}
                <div className="flex bg-secondary-100 dark:bg-dark-700 rounded-2xl p-2 mb-8">
                  <button
                    onClick={() => setActiveTab('signup')}
                    className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
                      activeTab === 'signup'
                        ? 'bg-white dark:bg-dark-800 text-primary-600 shadow-md'
                        : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-white'
                    }`}
                  >
                    Create Account
                  </button>
                  <button
                    onClick={() => setActiveTab('newsletter')}
                    className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
                      activeTab === 'newsletter'
                        ? 'bg-white dark:bg-dark-800 text-primary-600 shadow-md'
                        : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-white'
                    }`}
                  >
                    Newsletter Only
                  </button>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                      {activeTab === 'signup' ? 'Welcome to Pop Doll!' : 'You\'re Subscribed!'}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400">
                      {activeTab === 'signup' 
                        ? 'Your account has been created successfully. Check your email to verify your account.'
                        : 'Thank you for subscribing! You\'ll receive our latest updates and exclusive offers.'
                      }
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {activeTab === 'signup' ? (
                      // Account Creation Form
                      <>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-2">
                              First Name *
                            </label>
                            <div className="relative">
                              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
                              <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={signupData.firstName}
                                onChange={handleSignupChange}
                                required
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-secondary-200 dark:border-dark-600 bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                                placeholder="First name"
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-2">
                              Last Name *
                            </label>
                            <div className="relative">
                              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
                              <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={signupData.lastName}
                                onChange={handleSignupChange}
                                required
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-secondary-200 dark:border-dark-600 bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                                placeholder="Last name"
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={signupData.email}
                              onChange={handleSignupChange}
                              required
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-secondary-200 dark:border-dark-600 bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="password" className="block text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-2">
                            Password *
                          </label>
                          <div className="relative">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              id="password"
                              name="password"
                              value={signupData.password}
                              onChange={handleSignupChange}
                              required
                              className="w-full pl-4 pr-12 py-3 rounded-xl border border-secondary-200 dark:border-dark-600 bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                              placeholder="Create a strong password"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-300"
                            >
                              {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                            </button>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-2">
                            Confirm Password *
                          </label>
                          <div className="relative">
                            <input
                              type={showConfirmPassword ? 'text' : 'password'}
                              id="confirmPassword"
                              name="confirmPassword"
                              value={signupData.confirmPassword}
                              onChange={handleSignupChange}
                              required
                              className="w-full pl-4 pr-12 py-3 rounded-xl border border-secondary-200 dark:border-dark-600 bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                              placeholder="Confirm your password"
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-300"
                            >
                              {showConfirmPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                            </button>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <label className="flex items-start gap-3">
                            <input
                              type="checkbox"
                              name="newsletter"
                              checked={signupData.newsletter}
                              onChange={handleSignupChange}
                              className="mt-1 w-5 h-5 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                            />
                            <span className="text-sm text-secondary-600 dark:text-secondary-400">
                              Subscribe to our newsletter for exclusive offers and updates
                            </span>
                          </label>
                          
                          <label className="flex items-start gap-3">
                            <input
                              type="checkbox"
                              name="terms"
                              checked={signupData.terms}
                              onChange={handleSignupChange}
                              required
                              className="mt-1 w-5 h-5 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                            />
                            <span className="text-sm text-secondary-600 dark:text-secondary-400">
                              I agree to the{' '}
                              <Link href="/terms" className="text-primary-600 hover:text-primary-700 underline">
                                Terms of Service
                              </Link>{' '}
                              and{' '}
                              <Link href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
                                Privacy Policy
                              </Link>
                            </span>
                          </label>
                        </div>
                      </>
                    ) : (
                      // Newsletter Subscription Form
                      <>
                        <div>
                          <label htmlFor="newsletterEmail" className="block text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
                            <input
                              type="email"
                              id="newsletterEmail"
                              name="email"
                              value={newsletterData.email}
                              onChange={handleNewsletterChange}
                              required
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-secondary-200 dark:border-dark-600 bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-4">
                            What interests you? (Optional)
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {interestOptions.map((interest) => (
                              <label key={interest} className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  name="interests"
                                  value={interest}
                                  checked={newsletterData.interests.includes(interest)}
                                  onChange={handleNewsletterChange}
                                  className="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                                />
                                <span className="text-sm text-secondary-600 dark:text-secondary-400">
                                  {interest}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isSubmitting || (activeTab === 'signup' && !signupData.terms)}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          {activeTab === 'signup' ? 'Creating Account...' : 'Subscribing...'}
                        </div>
                      ) : (
                        activeTab === 'signup' ? 'Create Account' : 'Subscribe to Newsletter'
                      )}
                    </button>
                    
                    {activeTab === 'signup' && (
                      <p className="text-center text-sm text-secondary-600 dark:text-secondary-400">
                        Already have an account?{' '}
                        <Link href="/login" className="text-primary-600 hover:text-primary-700 font-semibold">
                          Sign in here
                        </Link>
                      </p>
                    )}
                  </form>
                )}
              </div>
            </motion.div>

            {/* Benefits Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInRight}
              className="space-y-8"
            >
              {/* Hero Image */}
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="/images/signup-hero.webp"
                  alt="Pop Doll Fashion Community"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Join 50,000+ Fashion Lovers</h3>
                  <p className="text-primary-100">Discover exclusive designs and connect with fellow collectors</p>
                </div>
              </div>

              {/* Benefits */}
              <motion.div
                className="space-y-6"
                variants={staggerContainer}
              >
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
                  Member Benefits
                </h3>
                
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon
                  return (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      className="flex items-start gap-4 p-6 bg-secondary-50 dark:bg-dark-800 rounded-2xl"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-secondary-600 dark:text-secondary-400">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Features List */}
              <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">What You'll Get</h3>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-primary-200 flex-shrink-0" />
                      <span className="text-primary-100">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}