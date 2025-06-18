'use client'

import { motion, Variants } from 'framer-motion'
import { DocumentTextIcon, ScaleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

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

const termsHighlights = [
  {
    icon: DocumentTextIcon,
    title: 'Clear Terms',
    description: 'Transparent and easy-to-understand terms of service'
  },
  {
    icon: ScaleIcon,
    title: 'Fair Policies',
    description: 'Balanced policies that protect both customers and our business'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Your Rights',
    description: 'Clear explanation of your rights and our responsibilities'
  }
]

const termsSection = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing and using the Pop Doll Fashion website ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.

These Terms of Service ("Terms") govern your use of our website located at popdollfashion.com (the "Service") operated by Pop Doll Fashion ("us", "we", or "our").

Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.`
  },
  {
    title: '2. Use License',
    content: `Permission is granted to temporarily download one copy of the materials on Pop Doll Fashion's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

• Modify or copy the materials
• Use the materials for any commercial purpose or for any public display (commercial or non-commercial)
• Attempt to decompile or reverse engineer any software contained on the website
• Remove any copyright or other proprietary notations from the materials

This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.`
  },
  {
    title: '3. Product Information and Pricing',
    content: `We strive to provide accurate product descriptions, images, and pricing information. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.

• Prices are subject to change without notice
• Product availability is subject to change
• We reserve the right to limit quantities
• Colors may vary due to monitor settings
• Product dimensions are approximate

If a product offered by us is not as described, your sole remedy is to return it in unused condition for a refund according to our return policy.`
  },
  {
    title: '4. Orders and Payment',
    content: `By placing an order, you represent that you are at least 18 years old or have parental consent. All orders are subject to acceptance and availability.

• We reserve the right to refuse or cancel any order
• Payment must be received before shipment
• We accept major credit cards and PayPal
• All prices are in USD unless otherwise stated
• You are responsible for any applicable taxes

We use industry-standard encryption to protect your payment information during transmission.`
  },
  {
    title: '5. Shipping and Delivery',
    content: `We will make every effort to ship your order promptly. Shipping times are estimates and not guaranteed.

• Risk of loss passes to you upon delivery to the carrier
• We are not responsible for delays caused by shipping carriers
• International customers are responsible for customs duties and taxes
• Delivery confirmation may be required for high-value orders

Please refer to our Shipping Policy for detailed information about shipping options and costs.`
  },
  {
    title: '6. Returns and Refunds',
    content: `We want you to be completely satisfied with your purchase. Items may be returned within 30 days of delivery for a full refund, subject to our return policy.

• Items must be in original condition with tags attached
• Custom or personalized items cannot be returned
• Return shipping costs are the responsibility of the customer
• Refunds will be processed within 5-7 business days
• Original shipping costs are non-refundable

Please contact our customer service team to initiate a return.`
  },
  {
    title: '7. User Accounts',
    content: `When you create an account with us, you must provide information that is accurate, complete, and current at all times.

• You are responsible for safeguarding your password
• You are responsible for all activities under your account
• You must notify us immediately of any unauthorized use
• We reserve the right to terminate accounts that violate these terms
• You may not use another person's account without permission

We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion.`
  },
  {
    title: '8. Intellectual Property',
    content: `The Service and its original content, features, and functionality are and will remain the exclusive property of Pop Doll Fashion and its licensors.

• All content is protected by copyright, trademark, and other laws
• You may not reproduce, distribute, or create derivative works
• Product images and descriptions are proprietary
• Our logo and brand name are registered trademarks
• User-generated content may be used by us for promotional purposes

You retain ownership of any content you submit, but grant us a license to use it.`
  },
  {
    title: '9. Privacy Policy',
    content: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service.

• We collect information you provide and usage data
• We use information to process orders and improve our service
• We do not sell personal information to third parties
• We use cookies to enhance your experience
• You can opt out of marketing communications

By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.`
  },
  {
    title: '10. Limitation of Liability',
    content: `In no event shall Pop Doll Fashion, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.

• Our liability is limited to the amount you paid for the product
• We are not liable for any loss of profits or data
• Some jurisdictions do not allow limitation of liability
• This limitation applies to all claims, regardless of legal theory
• We are not responsible for third-party actions or content

You agree to indemnify and hold us harmless from any claims arising from your use of the Service.`
  },
  {
    title: '11. Governing Law',
    content: `These Terms shall be interpreted and governed by the laws of the State of California, United States, without regard to its conflict of law provisions.

• Any disputes will be resolved in California courts
• You consent to the jurisdiction of California courts
• If any provision is invalid, the remainder remains in effect
• These Terms constitute the entire agreement between us
• Waiver of any term must be in writing

These Terms may be updated from time to time. Continued use constitutes acceptance of changes.`
  },
  {
    title: '12. Contact Information',
    content: `If you have any questions about these Terms of Service, please contact us:

• Email: legal@popdollfashion.com
• Phone: 1-800-DOLL-FASHION
• Mail: Pop Doll Fashion Legal Department, 123 Fashion Ave, Los Angeles, CA 90210
• Website: www.popdollfashion.com/contact

We will respond to all inquiries within 2 business days. For urgent matters, please call our customer service line.`
  }
]

export default function TermsPage() {
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
            Terms of Service
          </motion.h1>
          <motion.p 
            className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto mb-8"
            variants={fadeInUp}
          >
            Please read these terms carefully before using our service
          </motion.p>
          <motion.p 
            className="text-sm text-secondary-500 dark:text-secondary-400"
            variants={fadeInUp}
          >
            Last updated: December 2024
          </motion.p>
        </div>
      </motion.section>

      {/* Terms Highlights */}
      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {termsHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  className="text-center"
                  variants={fadeInUp}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
                    <IconComponent className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    {highlight.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Terms Content */}
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
              Terms and Conditions
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              By using our website, you agree to these terms
            </p>
          </motion.div>

          <div className="space-y-12">
            {termsSection.map((section, index) => (
              <motion.div
                key={section.title}
                className="bg-white dark:bg-dark-700 rounded-xl p-8 shadow-lg"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-6">
                  {section.title}
                </h3>
                <div className="prose prose-secondary dark:prose-invert max-w-none">
                  {section.content.split('\n\n').map((paragraph, idx) => {
                    if (paragraph.includes('•')) {
                      const lines = paragraph.split('\n')
                      const intro = lines[0]
                      const bullets = lines.slice(1).filter(line => line.trim().startsWith('•'))
                      
                      return (
                        <div key={idx} className="mb-4">
                          {intro && <p className="text-secondary-600 dark:text-secondary-300 mb-3">{intro}</p>}
                          <ul className="space-y-2">
                            {bullets.map((bullet, bulletIdx) => (
                              <li key={bulletIdx} className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-secondary-600 dark:text-secondary-300">
                                  {bullet.replace('• ', '')}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    } else {
                      return (
                        <p key={idx} className="text-secondary-600 dark:text-secondary-300 mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      )
                    }
                  })}
                </div>
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
            Questions About Our Terms?
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
            If you have any questions about these Terms of Service, please don't hesitate to contact us.
          </p>
          <motion.a
            href="/contact"
            className="btn-primary inline-flex items-center px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Legal Team
          </motion.a>
        </div>
      </motion.section>
    </div>
  )
}