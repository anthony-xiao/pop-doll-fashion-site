'use client'

import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { 
  EnvelopeIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

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

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Simulate success
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-dark-900 flex items-center justify-center">
        <motion.div 
          className="max-w-md w-full mx-4"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-8 border border-secondary-100 dark:border-dark-700 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            
            <h1 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
              Check Your Email
            </h1>
            
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              We've sent a password reset link to <strong>{email}</strong>. 
              Please check your email and follow the instructions to reset your password.
            </p>
            
            <div className="space-y-4">
              <p className="text-sm text-secondary-500 dark:text-secondary-400">
                Didn't receive the email? Check your spam folder or try again.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setIsSubmitted(false)
                    setEmail('')
                  }}
                  className="btn-secondary flex-1"
                >
                  Try Again
                </button>
                <Link 
                  href="/login"
                  className="btn-primary flex-1 text-center"
                >
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 header-offset py-20">
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
            Forgot Your Password?
          </motion.h1>
          <motion.p 
            className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            No worries! Enter your email address and we'll send you a link to reset your password.
          </motion.p>
        </div>
      </motion.section>

      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-8 border border-secondary-100 dark:border-dark-700"
            variants={fadeInUp}
          >
            {/* Back to Login Link */}
            <div className="mb-6">
              <Link 
                href="/login"
                className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200"
              >
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Back to Login
              </Link>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                Reset Password
              </h2>
              <p className="text-secondary-600 dark:text-secondary-300">
                Enter your email address and we'll send you a reset link
              </p>
            </div>

            {error && (
              <motion.div 
                className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start space-x-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <ExclamationTriangleIcon className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    {error}
                  </p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-secondary-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading || !email.trim()}
                className="w-full btn-primary py-3 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending Reset Link...
                  </div>
                ) : (
                  'Send Reset Link'
                )}
              </motion.button>
            </form>

            {/* Additional Help */}
            <div className="mt-8 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-secondary-300 dark:border-dark-600" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-dark-800 text-secondary-500 dark:text-secondary-400">
                    Need more help?
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <p className="text-sm text-secondary-600 dark:text-secondary-300">
                  If you're still having trouble accessing your account, please contact our support team.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                >
                  Contact Support →
                </Link>
              </div>
            </div>

            {/* Remember Password */}
            <div className="mt-8 text-center">
              <p className="text-sm text-secondary-600 dark:text-secondary-300">
                Remember your password?{' '}
                <Link 
                  href="/login" 
                  className="font-medium text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </motion.div>

          {/* Security Notice */}
          <motion.div 
            className="mt-8 bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 border border-primary-200 dark:border-primary-800"
            variants={fadeInUp}
          >
            <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-3">
              Security Notice
            </h3>
            <div className="space-y-2 text-sm text-primary-700 dark:text-primary-300">
              <p>
                • Reset links expire after 24 hours for security
              </p>
              <p>
                • We'll never ask for your password via email
              </p>
              <p>
                • If you didn't request this reset, you can safely ignore this
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}