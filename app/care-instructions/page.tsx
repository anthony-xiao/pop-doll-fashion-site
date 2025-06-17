'use client'

import { motion } from 'framer-motion'
import { 
  SparklesIcon, 
  SunIcon, 
  BeakerIcon, 
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  HandRaisedIcon
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

const careSteps = [
  {
    icon: HandRaisedIcon,
    title: 'Hand Wash Only',
    description: 'Gently hand wash in cool water with mild detergent. Never use a washing machine.',
    color: 'blue'
  },
  {
    icon: BeakerIcon,
    title: 'Use Mild Detergent',
    description: 'Use a gentle, color-safe detergent. Avoid bleach or harsh chemicals.',
    color: 'green'
  },
  {
    icon: SunIcon,
    title: 'Air Dry Only',
    description: 'Lay flat to dry away from direct sunlight. Never use a dryer or iron.',
    color: 'yellow'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Store Properly',
    description: 'Store in a cool, dry place. Use tissue paper to prevent wrinkles.',
    color: 'purple'
  }
]

const fabricCare = [
  {
    fabric: 'Cotton & Cotton Blends',
    instructions: [
      'Hand wash in cool water',
      'Use mild detergent',
      'Gently squeeze, do not wring',
      'Air dry flat',
      'Iron on low heat if needed (use pressing cloth)'
    ],
    tips: 'Cotton may shrink slightly. Pre-shrunk fabrics are recommended.'
  },
  {
    fabric: 'Silk & Satin',
    instructions: [
      'Hand wash in cold water only',
      'Use silk-specific detergent',
      'Never twist or wring',
      'Roll in towel to remove excess water',
      'Air dry away from direct light'
    ],
    tips: 'Silk is delicate and can water spot. Test cleaning in an inconspicuous area first.'
  },
  {
    fabric: 'Lace & Delicate Fabrics',
    instructions: [
      'Hand wash very gently in cool water',
      'Use extra mild detergent',
      'Support the fabric while washing',
      'Press between towels to dry',
      'Never hang to dry'
    ],
    tips: 'Lace can snag easily. Handle with extra care and avoid sharp objects.'
  },
  {
    fabric: 'Velvet & Plush',
    instructions: [
      'Spot clean when possible',
      'If washing needed, use cool water',
      'Gently brush while damp to restore texture',
      'Air dry completely',
      'Steam lightly to refresh'
    ],
    tips: 'Velvet can crush easily. Store hanging or lay flat with tissue paper.'
  },
  {
    fabric: 'Synthetic Fabrics',
    instructions: [
      'Hand wash in cool to warm water',
      'Use regular mild detergent',
      'Rinse thoroughly',
      'Air dry (usually dries quickly)',
      'Low heat iron if needed'
    ],
    tips: 'Synthetic fabrics are generally more durable but can pill with rough handling.'
  }
]

const storageAdvice = [
  {
    title: 'Short-term Storage',
    content: 'For daily storage, hang delicate items or fold with tissue paper. Keep in a clean, dry drawer or closet.'
  },
  {
    title: 'Long-term Storage',
    content: 'For long-term storage, clean items first, then wrap in acid-free tissue paper. Store in a breathable container away from light.'
  },
  {
    title: 'Preventing Damage',
    content: 'Avoid storing in plastic bags which can trap moisture. Keep away from pets and small children who might damage delicate items.'
  }
]

const troubleshooting = [
  {
    problem: 'Stains',
    solution: 'Treat stains immediately with cool water. For stubborn stains, use a gentle stain remover designed for delicate fabrics.'
  },
  {
    problem: 'Wrinkles',
    solution: 'Use a steamer on low heat or iron on the lowest setting with a pressing cloth. Never iron directly on delicate fabrics.'
  },
  {
    problem: 'Fading',
    solution: 'Always wash in cool water and store away from direct sunlight. Some fading is natural over time.'
  },
  {
    problem: 'Shrinkage',
    solution: 'Prevention is key - always use cool water. If shrinkage occurs, gently stretch while damp and air dry.'
  }
]

export default function CareInstructionsPage() {
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
            Care Instructions
          </motion.h1>
          <motion.p 
            className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Keep your doll's wardrobe looking beautiful with proper care and maintenance
          </motion.p>
        </div>
      </motion.section>

      {/* General Care Steps */}
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
              General Care Guidelines
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Follow these basic steps for all doll clothing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={step.title}
                  className="text-center"
                  variants={fadeInUp}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
                    <IconComponent className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Fabric-Specific Care */}
      <motion.section 
        className="py-20 bg-secondary-50 dark:bg-dark-800"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              Fabric-Specific Care
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Different fabrics require different care approaches
            </p>
          </motion.div>

          <div className="space-y-8">
            {fabricCare.map((fabric, index) => (
              <motion.div
                key={fabric.fabric}
                className="bg-white dark:bg-dark-700 rounded-xl p-8 shadow-lg"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-6">
                  {fabric.fabric}
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-medium text-secondary-800 dark:text-secondary-200 mb-4">
                      Care Instructions:
                    </h4>
                    <ul className="space-y-2">
                      {fabric.instructions.map((instruction, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-secondary-600 dark:text-secondary-300">{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-primary-800 dark:text-primary-200 mb-2 flex items-center">
                      <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
                      Pro Tip
                    </h4>
                    <p className="text-sm text-primary-700 dark:text-primary-300">
                      {fabric.tips}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Storage Advice */}
      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              Storage & Preservation
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Proper storage extends the life of your doll clothing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storageAdvice.map((advice, index) => (
              <motion.div
                key={advice.title}
                className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg border border-secondary-100 dark:border-dark-700"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
                  {advice.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed">
                  {advice.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Troubleshooting */}
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
              Troubleshooting Common Issues
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Solutions for common care challenges
            </p>
          </motion.div>

          <div className="space-y-6">
            {troubleshooting.map((item, index) => (
              <motion.div
                key={item.problem}
                className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg"
                variants={fadeInUp}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                      <ExclamationTriangleIcon className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                      {item.problem}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-300">
                      {item.solution}
                    </p>
                  </div>
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
            Need More Help?
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
            Have a specific care question? Our team is here to help preserve your doll's wardrobe.
          </p>
          <motion.a
            href="/contact"
            className="btn-primary inline-flex items-center px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Care Experts
          </motion.a>
        </div>
      </motion.section>
    </div>
  )
}