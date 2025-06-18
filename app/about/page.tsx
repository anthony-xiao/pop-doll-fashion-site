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
                <span className="gradient-text">About Pop Doll</span>
              </h1>
              <p className="text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed mb-8">
                We're passionate creators dedicated to bringing high-fashion to the world of collectible dolls. 
                Every piece tells a story, every design sparks joy.
              </p>
              <div className="flex items-center gap-6">
                <Link href="/collections" className="btn-primary">
                  Explore Collections
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get in Touch
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
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">Since 2020</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container-max section-padding">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    {stat.label}
                  </p>
                </motion.div>
              )
            })}
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
              Our Story
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              From a small passion project to a global community of fashion enthusiasts
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
            
            <motion.div
              className="space-y-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {timeline.map((item, index) => {
                const IconComponent = item.icon
                const isEven = index % 2 === 0
                
                return (
                  <motion.div
                    key={index}
                    variants={isEven ? slideInLeft : slideInRight}
                    className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                      <div className={`bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <span className="text-2xl font-bold text-primary-600">{item.year}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative z-10 w-6 h-6 bg-white dark:bg-dark-900 border-4 border-primary-500 rounded-full flex-shrink-0"></div>
                    
                    <div className="flex-1"></div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
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

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              The passionate individuals behind every beautiful design
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white dark:bg-dark-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex gap-3">
                    {Object.entries(member.social).map(([platform, handle]) => (
                      <a
                        key={platform}
                        href={`#`}
                        className="text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        title={`${platform}: ${handle}`}
                      >
                        <span className="text-xs bg-secondary-100 dark:bg-dark-700 px-2 py-1 rounded-full">
                          {platform}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
              Join Our Fashion Journey
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Be part of a community that celebrates creativity, craftsmanship, and the joy of collecting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/collections" 
                className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Shop Now
              </Link>
              <Link 
                href="/signup" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Join Newsletter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}