'use client'

import { motion } from 'framer-motion'
import { MagnifyingGlassIcon, ScaleIcon, RulerIcon } from '@heroicons/react/24/outline'

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

const dollSizes = [
  {
    name: 'Barbie (11.5")',
    measurements: {
      bust: '5.25"',
      waist: '3.5"',
      hips: '5.5"',
      height: '11.5"'
    },
    description: 'Standard Barbie and similar fashion dolls'
  },
  {
    name: 'Ken (12")',
    measurements: {
      chest: '6"',
      waist: '4.5"',
      hips: '5.75"',
      height: '12"'
    },
    description: 'Ken and other male fashion dolls'
  },
  {
    name: 'Blythe (12")',
    measurements: {
      bust: '6"',
      waist: '4"',
      hips: '6.5"',
      height: '12"'
    },
    description: 'Blythe dolls and similar sized collectibles'
  },
  {
    name: 'Pullip (12")',
    measurements: {
      bust: '5.5"',
      waist: '3.75"',
      hips: '6"',
      height: '12"'
    },
    description: 'Pullip, Dal, and Taeyang dolls'
  },
  {
    name: 'Monster High (10.5")',
    measurements: {
      bust: '4.5"',
      waist: '3"',
      hips: '5"',
      height: '10.5"'
    },
    description: 'Monster High and Ever After High dolls'
  },
  {
    name: 'American Girl (18")',
    measurements: {
      bust: '11"',
      waist: '9.5"',
      hips: '11.5"',
      height: '18"'
    },
    description: 'American Girl and similar 18-inch dolls'
  }
]

const measurementTips = [
  {
    icon: RulerIcon,
    title: 'Use a Soft Measuring Tape',
    description: 'A flexible measuring tape will give you the most accurate measurements around curves.'
  },
  {
    icon: ScaleIcon,
    title: 'Measure at the Widest Points',
    description: 'For bust and hips, measure at the fullest part. For waist, measure at the narrowest point.'
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'Check Manufacturer Specs',
    description: 'Different manufacturers may have slight variations even within the same doll line.'
  }
]

const sizingNotes = [
  {
    title: 'Fit Guidelines',
    content: 'Our clothing is designed to fit snugly but comfortably. If you\'re between sizes, we recommend sizing up for a more relaxed fit.'
  },
  {
    title: 'Fabric Considerations',
    content: 'Stretchy fabrics like jersey and spandex blends will have more give, while woven fabrics like cotton and silk have less stretch.'
  },
  {
    title: 'Custom Sizing',
    content: 'For dolls not listed in our standard sizes, please contact us for custom sizing options. We\'re happy to help!'
  }
]

export default function SizeGuidePage() {
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
            Size Guide
          </motion.h1>
          <motion.p 
            className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Find the perfect fit for your doll with our comprehensive sizing guide
          </motion.p>
        </div>
      </motion.section>

      {/* Measurement Tips */}
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
              How to Measure Your Doll
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Follow these tips for accurate measurements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {measurementTips.map((tip, index) => {
              const IconComponent = tip.icon
              return (
                <motion.div
                  key={tip.title}
                  className="text-center"
                  variants={fadeInUp}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
                    <IconComponent className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
                    {tip.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    {tip.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Size Chart */}
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
              Doll Size Chart
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Standard measurements for popular doll types
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {dollSizes.map((size, index) => (
              <motion.div
                key={size.name}
                className="bg-white dark:bg-dark-700 rounded-xl p-8 shadow-lg"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  {size.name}
                </h3>
                <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-6">
                  {size.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(size.measurements).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-secondary-100 dark:border-dark-600">
                      <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300 capitalize">
                        {key}:
                      </span>
                      <span className="text-sm font-semibold text-secondary-900 dark:text-white">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Sizing Notes */}
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
              Important Sizing Notes
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Additional information to ensure the perfect fit
            </p>
          </motion.div>

          <div className="space-y-8">
            {sizingNotes.map((note, index) => (
              <motion.div
                key={note.title}
                className="bg-white dark:bg-dark-800 rounded-xl p-8 shadow-lg border border-secondary-100 dark:border-dark-700"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
                  {note.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                  {note.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="py-20 bg-secondary-50 dark:bg-dark-800"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">
            Need Help with Sizing?
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
            Can't find your doll size or need custom measurements? We're here to help!
          </p>
          <motion.a
            href="/contact"
            className="btn-primary inline-flex items-center px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us for Help
          </motion.a>
        </div>
      </motion.section>
    </div>
  )
}