'use client'

import { motion, Variants } from 'framer-motion'
import { 
  ShieldCheckIcon, 
  EyeSlashIcon, 
  LockClosedIcon,
  UserGroupIcon,
  CogIcon,
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

const privacyHighlights = [
  {
    icon: ShieldCheckIcon,
    title: 'Data Protection',
    description: 'Your personal information is protected with industry-standard security measures'
  },
  {
    icon: EyeSlashIcon,
    title: 'No Selling',
    description: 'We never sell your personal information to third parties'
  },
  {
    icon: LockClosedIcon,
    title: 'Secure Storage',
    description: 'All data is encrypted and stored securely in compliance with privacy laws'
  },
  {
    icon: UserGroupIcon,
    title: 'Your Control',
    description: 'You have full control over your data and can request deletion at any time'
  }
]

const privacySections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us, information we obtain automatically when you use our services, and information from third parties.

**Information You Provide:**
• Account information (name, email, password)
• Billing and shipping addresses
• Payment information (processed securely by our payment processors)
• Order history and preferences
• Customer service communications
• Reviews and feedback
• Newsletter subscriptions

**Information We Collect Automatically:**
• Device information (IP address, browser type, operating system)
• Usage data (pages visited, time spent, click patterns)
• Cookies and similar tracking technologies
• Location information (if you enable location services)
• Referral sources

**Information from Third Parties:**
• Social media platforms (if you connect your accounts)
• Payment processors
• Shipping carriers
• Marketing partners (with your consent)`
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect for various purposes to provide and improve our services.

**Primary Uses:**
• Process and fulfill your orders
• Communicate about your orders and account
• Provide customer support
• Send important updates about our services
• Process payments and prevent fraud

**Secondary Uses:**
• Personalize your shopping experience
• Send marketing communications (with your consent)
• Analyze usage patterns to improve our website
• Conduct research and analytics
• Comply with legal obligations
• Protect our rights and prevent misuse

**Marketing Communications:**
We may send you promotional emails about new products, special offers, and other updates. You can opt out at any time by clicking the unsubscribe link in our emails or contacting us directly.`
  },
  {
    title: '3. Information Sharing and Disclosure',
    content: `We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy.

**Service Providers:**
We share information with trusted third-party service providers who assist us in:
• Payment processing (Stripe, PayPal)
• Shipping and fulfillment
• Email marketing (with your consent)
• Website analytics
• Customer support
• Security and fraud prevention

**Legal Requirements:**
We may disclose your information when required by law or to:
• Comply with legal processes
• Protect our rights and property
• Ensure user safety
• Investigate fraud or security issues

**Business Transfers:**
In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any such change in ownership.`
  },
  {
    title: '4. Data Security',
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

**Security Measures:**
• SSL encryption for all data transmission
• Secure servers with restricted access
• Regular security audits and updates
• Employee training on data protection
• Multi-factor authentication for admin access
• Regular backups and disaster recovery plans

**Payment Security:**
• We do not store credit card information
• All payments are processed through PCI-compliant processors
• Tokenization for recurring payments
• Fraud detection and prevention systems

**Limitations:**
While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but will notify you of any significant breaches as required by law.`
  },
  {
    title: '5. Cookies and Tracking Technologies',
    content: `We use cookies and similar technologies to enhance your browsing experience and analyze website usage.

**Types of Cookies:**
• **Essential Cookies:** Required for basic website functionality
• **Performance Cookies:** Help us understand how visitors use our site
• **Functional Cookies:** Remember your preferences and settings
• **Marketing Cookies:** Used to deliver relevant advertisements

**Third-Party Cookies:**
• Google Analytics (website analytics)
• Facebook Pixel (advertising)
• Payment processor cookies
• Social media widgets

**Cookie Control:**
You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality. Most browsers allow you to:
• View and delete cookies
• Block cookies from specific sites
• Block third-party cookies
• Receive notifications when cookies are set`
  },
  {
    title: '6. Your Privacy Rights',
    content: `Depending on your location, you may have certain rights regarding your personal information.

**General Rights:**
• Access: Request a copy of your personal information
• Correction: Update or correct inaccurate information
• Deletion: Request deletion of your personal information
• Portability: Receive your data in a portable format
• Objection: Object to certain processing activities
• Restriction: Request limitation of processing

**California Residents (CCPA):**
• Right to know what personal information is collected
• Right to delete personal information
• Right to opt-out of sale (we don't sell personal information)
• Right to non-discrimination for exercising privacy rights

**European Residents (GDPR):**
• All rights listed above
• Right to withdraw consent
• Right to lodge a complaint with supervisory authorities
• Right to data portability

**Exercising Your Rights:**
To exercise any of these rights, please contact us using the information provided at the end of this policy. We will respond within the timeframes required by applicable law.`
  },
  {
    title: '7. Children\'s Privacy',
    content: `Our services are not intended for children under 13 years of age, and we do not knowingly collect personal information from children under 13.

**Age Verification:**
• Users must be at least 13 years old to create an account
• We may request age verification for certain features
• Parents can contact us to review or delete their child's information

**Parental Consent:**
If we learn that we have collected personal information from a child under 13 without parental consent, we will delete that information as quickly as possible.

**Teen Privacy:**
For users between 13-18, we encourage parental involvement in online activities and recommend that parents monitor their children's internet usage.`
  },
  {
    title: '8. International Data Transfers',
    content: `Your information may be transferred to and processed in countries other than your own, including the United States.

**Data Protection:**
• We ensure adequate protection for international transfers
• We use standard contractual clauses approved by relevant authorities
• We comply with applicable data protection laws
• We implement appropriate safeguards for cross-border transfers

**Legal Basis:**
We transfer data internationally based on:
• Your consent
• Necessity for contract performance
• Legitimate business interests
• Legal compliance requirements`
  },
  {
    title: '9. Data Retention',
    content: `We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy.

**Retention Periods:**
• Account information: Until account deletion or 3 years of inactivity
• Order information: 7 years for tax and legal compliance
• Marketing data: Until you unsubscribe or object
• Website analytics: 26 months (Google Analytics default)
• Customer service records: 3 years

**Deletion Process:**
When we no longer need your information, we securely delete or anonymize it. Some information may be retained in backup systems for a limited time for security purposes.`
  },
  {
    title: '10. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws.

**Notification of Changes:**
• We will post the updated policy on our website
• We will update the "Last Modified" date
• For significant changes, we may send email notifications
• Continued use of our services constitutes acceptance of changes

**Review Recommendations:**
We encourage you to review this policy periodically to stay informed about how we protect your information.`
  },
  {
    title: '11. Contact Information',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

**Privacy Officer:**
• Email: privacy@popdollfashion.com
• Phone: 1-800-DOLL-PRIVACY
• Mail: Pop Doll Fashion Privacy Department, 123 Fashion Ave, Los Angeles, CA 90210

**Data Protection Officer (EU):**
• Email: dpo@popdollfashion.com
• Response time: 30 days maximum

**General Contact:**
• Website: www.popdollfashion.com/contact
• Customer Service: support@popdollfashion.com
• Business hours: Monday-Friday, 9 AM - 6 PM PST

We are committed to resolving any privacy concerns promptly and transparently.`
  }
]

export default function PrivacyPage() {
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
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto mb-8"
            variants={fadeInUp}
          >
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </motion.p>
          <motion.p 
            className="text-sm text-secondary-500 dark:text-secondary-400"
            variants={fadeInUp}
          >
            Last updated: December 2024
          </motion.p>
        </div>
      </motion.section>

      {/* Privacy Highlights */}
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
              Our Privacy Commitments
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              We are committed to protecting your privacy and being transparent about our practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyHighlights.map((highlight, index) => {
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

      {/* Privacy Policy Content */}
      <motion.section 
        className="py-20 bg-secondary-50 dark:bg-dark-800"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {privacySections.map((section, index) => (
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
                    if (paragraph.includes('**') && paragraph.includes(':**')) {
                      // Handle bold headers with lists
                      const lines = paragraph.split('\n')
                      const header = lines[0].replace(/\*\*/g, '')
                      const bullets = lines.slice(1).filter(line => line.trim().startsWith('•'))
                      
                      return (
                        <div key={idx} className="mb-6">
                          <h4 className="text-lg font-semibold text-secondary-800 dark:text-secondary-200 mb-3">
                            {header}
                          </h4>
                          {bullets.length > 0 && (
                            <ul className="space-y-2">
                              {bullets.map((bullet, bulletIdx) => (
                                <li key={bulletIdx} className="flex items-start">
                                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  <span className="text-secondary-600 dark:text-secondary-300">
                                    {bullet.replace('• ', '').replace(/\*\*/g, '')}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )
                    } else if (paragraph.includes('•')) {
                      // Handle simple bullet lists
                      const lines = paragraph.split('\n')
                      const intro = lines.find(line => !line.trim().startsWith('•'))
                      const bullets = lines.filter(line => line.trim().startsWith('•'))
                      
                      return (
                        <div key={idx} className="mb-4">
                          {intro && <p className="text-secondary-600 dark:text-secondary-300 mb-3">{intro}</p>}
                          <ul className="space-y-2">
                            {bullets.map((bullet, bulletIdx) => (
                              <li key={bulletIdx} className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-secondary-600 dark:text-secondary-300">
                                  {bullet.replace('• ', '').replace(/\*\*/g, '')}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    } else {
                      // Handle regular paragraphs
                      return (
                        <p key={idx} className="text-secondary-600 dark:text-secondary-300 mb-4 leading-relaxed">
                          {paragraph.replace(/\*\*/g, '')}
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
            Questions About Your Privacy?
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
            If you have any questions about this Privacy Policy or how we handle your data, please contact our privacy team.
          </p>
          <motion.a
            href="/contact"
            className="btn-primary inline-flex items-center px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Privacy Team
          </motion.a>
        </div>
      </motion.section>
    </div>
  )
}