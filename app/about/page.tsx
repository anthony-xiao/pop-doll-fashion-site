'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  HeartIcon,
  SparklesIcon,
  GlobeAltIcon,
  UserGroupIcon,
  TrophyIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  StarIcon
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

// Team data
const team = [
  {
    name: 'Sarah Chen',
    role: 'Founder & Creative Director',
    image: '/images/team/sarah-chen.webp',
    bio: 'Fashion designer with 10+ years experience in miniature fashion. Passionate about bringing high-end style to collectible dolls.',
    social: {
      instagram: '@sarahchen_design',
      linkedin: 'sarah-chen-fashion'
    }
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Design',
    image: '/images/team/marcus-rodriguez.webp',
    bio: 'Former luxury brand designer who specializes in creating intricate details for miniature garments.',
    social: {
      instagram: '@marcus_minidesign',
      behance: 'marcusrodriguez'
    }
  },
  {
    name: 'Yuki Tanaka',
    role: 'Quality Assurance Lead',
    image: '/images/team/yuki-tanaka.webp',
    bio: 'Ensures every piece meets our high standards for craftsmanship and durability.',
    social: {
      instagram: '@yuki_qa',
      linkedin: 'yuki-tanaka-qa'
    }
  },
  {
    name: 'Emma Thompson',
    role: 'Community Manager',
    image: '/images/team/emma-thompson.webp',
    bio: 'Connects with our amazing community of collectors and fashion enthusiasts worldwide.',
    social: {
      instagram: '@emma_popdoll',
      twitter: '@emma_community'
    }
  }
]

// Values data
const values = [
  {
    icon: HeartIcon,
    title: 'Passion for Craft',
    description: 'Every piece is designed with love and attention to detail, reflecting our passion for miniature fashion.'
  },
  {
    icon: SparklesIcon,
    title: 'Innovation',
    description: 'We constantly push boundaries in miniature fashion, creating unique designs that inspire collectors.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Quality First',
    description: 'Premium materials and meticulous craftsmanship ensure our products stand the test of time.'
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Community',
    description: 'Building connections between collectors worldwide through our shared love of fashion and art.'
  }
]

// Stats data
const stats = [
  { number: '50K+', label: 'Happy Customers', icon: UserGroupIcon },
  { number: '500+', label: 'Unique Designs', icon: SparklesIcon },
  { number: '25+', label: 'Countries Served', icon: GlobeAltIcon },
  { number: '4.9', label: 'Average Rating', icon: StarIcon }
]

// Timeline data
const timeline = [
  {
    year: '2020',
    title: 'The Beginning',
    description: 'Started as a passion project creating custom outfits for personal Labubu collection.',
    icon: RocketLaunchIcon
  },
  {
    year: '2021',
    title: 'First Collection',
    description: 'Launched our first official collection with 20 unique designs, selling out within hours.',
    icon: SparklesIcon
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'Expanded internationally, reaching collectors in over 15 countries worldwide.',
    icon: GlobeAltIcon
  },
  {
    year: '2023',
    title: 'Award Recognition',
    description: 'Won "Best Miniature Fashion Brand" at the International Collectibles Awards.',
    icon: TrophyIcon
  },
  {
    year: '2024',
    title: 'Innovation Hub',
    description: 'Opened our design studio and launched the most comprehensive collection to date.',
    icon: HeartIcon
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="absolute inset-0 bg-[url('/patterns/waves.svg')] opacity-10"></div>
        
        <div className="container-max section-padding relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center py-20">
            <motion.div
              initial="initial"
              animate="animate"
              variants={slideInLeft}
            >
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
                Bringing <span className="gradient-text">Designer</span> & Personalization to Everyone
              </h1>
              <p className="text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed mb-8">
                We believe exceptional design and personal touch shouldn't be exclusive. 
                From collectibles to custom creations, we make designer quality accessible to all.
              </p>
              <div className="flex items-center gap-6">
                <Link href="/collections" className="btn-primary">
                  Explore Our Work
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Start Personalizing
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial="initial"
              animate="animate"
              variants={slideInRight}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="/images/about-hero.webp"
                  alt="Pop Doll Fashion Studio"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <HeartIcon className="h-8 w-8 text-red-500" />
                  <div>
                    <p className="font-bold text-secondary-900 dark:text-white">Made with Love</p>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">Since 2024</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50/30 to-accent-50/30 dark:from-primary-900/10 dark:to-accent-900/10"></div>
        
        <div className="container-max section-padding relative">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-6">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-4xl mx-auto leading-relaxed">
              To democratize exceptional design and make personalized, high-quality creations accessible to everyone, 
              bringing designer-level craftsmanship to collectibles and custom pieces alike.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={slideInLeft} className="space-y-8">
              <div className="bg-gradient-to-br from-white to-primary-50/50 dark:from-dark-800 dark:to-primary-900/20 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <HeartIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                      Design for Everyone
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                      We believe great design shouldn't be limited by budget or scale. Whether it's a custom piece for your collection or a personalized creation, we bring the same level of artistry and attention to detail.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-accent-50/50 dark:from-dark-800 dark:to-accent-900/20 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <SparklesIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                      Personalization at Scale
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                      Through innovative processes and dedicated craftsmanship, we make it possible to offer truly personalized experiences. Every creation is tailored to reflect individual style and preferences.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/images/vision-collage.webp"
                  alt="Pop Doll Fashion Vision"
                  width={500}
                  height={625}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm rounded-2xl p-6">
                    <p className="text-secondary-900 dark:text-white font-medium text-lg leading-relaxed">
                      "Great design and personal touch should be accessible to everyone, not just the privileged few."
                    </p>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mt-2">
                      - Pop Doll Team
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-secondary-50 dark:bg-dark-800">
        <div className="container-max section-padding">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-6">
              Our <span className="gradient-text">Story</span>
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              Born from a belief that exceptional design and personalization should be accessible to everyone
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8 mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-dark-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HeartIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                The Vision
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                It all began with a simple belief: "Why should exceptional design and personalization be exclusive to luxury markets?" We set out to democratize access to designer-quality creations for everyone.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-dark-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <SparklesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                The Innovation
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                We developed innovative processes that bring designer-level craftsmanship to accessible price points. Every piece reflects our commitment to quality, whether it's a collectible item or a custom creation.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-dark-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UserGroupIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                The Community
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                What started as a mission to make design accessible has grown into a community of people who value quality, personalization, and the joy of owning something truly unique and well-crafted.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 rounded-3xl p-12 text-white text-center relative overflow-hidden"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Today & Tomorrow
              </h3>
              <p className="text-xl text-primary-100 leading-relaxed max-w-4xl mx-auto">
                We're just getting started. Every day brings new opportunities to make exceptional design more accessible, new ways to personalize experiences, and innovative approaches to democratize quality craftsmanship. 
                Our mission remains clear: to bring designer-level quality and personalization to everyone, everywhere.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container-max section-padding">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 rounded-3xl mb-6 group-hover:shadow-lg transition-shadow">
                    <IconComponent className="h-10 w-10 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/geometric.svg')] opacity-10"></div>
        
        <div className="container-max section-padding relative">
          <motion.div
            className="text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Join Our Design Revolution
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Be part of a community that believes exceptional design and personalization should be accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/collections" 
                className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Explore Our Work
              </Link>
              <Link 
                href="/custom" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Start Personalizing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}