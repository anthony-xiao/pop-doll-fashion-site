'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRightIcon,
  SparklesIcon,
  HeartIcon,
  StarIcon,
  TruckIcon,
  ShieldCheckIcon,
  GiftIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import ProductCard from './components/ProductCard'

// Animation variants
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

// Mock data - replace with real data later
const featuredProducts = [
  {
    id: 1,
    name: 'Designer Hoodie Set',
    price: 29.99,
    originalPrice: 39.99,
    image: '/images/designer-hoodie-set-new.webp',
    rating: 4.8,
    reviews: 124,
    badge: 'Best Seller',
    colors: ['#000000', '#FF69B4', '#87CEEB']
  },
  {
    id: 2,
    name: 'Luxury Handbag Collection',
    price: 24.99,
    originalPrice: null,
    image: '/images/luxury-handbag-collection-fresh.webp',
    rating: 4.9,
    reviews: 89,
    badge: 'New',
    colors: ['#8B4513', '#000000', '#FF1493']
  },
  {
    id: 3,
    name: 'Streetwear Outfit',
    price: 34.99,
    originalPrice: 44.99,
    image: '/images/trendy-streetwear.webp',
    rating: 4.7,
    reviews: 156,
    badge: 'Limited',
    colors: ['#000000', '#FFFFFF', '#FF4500']
  },
  {
    id: 4,
    name: 'Elegant Business Casual',
    price: 39.99,
    originalPrice: null,
    image: '/images/business-casual-outfit.webp',
    rating: 5.0,
    reviews: 67,
    badge: 'Premium',
    colors: ['#FFB6C1', '#000000', '#GOLD']
  }
]

const collections = [
  {
    name: 'Street Style',
    description: 'Urban fashion for your Labubu',
    image: '/images/trendy-streetwear.webp',
    href: '/collections/street-style'
  },
  {
    name: 'Luxury Line',
    description: 'Premium designer pieces',
    image: '/images/luxury-handbag-collection-fresh.webp',
    href: '/collections/luxury'
  },
  {
    name: 'Business Casual',
    description: 'Professional style collections',
    image: '/images/business-casual-outfit.webp',
    href: '/collections/business-casual'
  }
]

const features = [
  {
    icon: TruckIcon,
    title: 'Free Shipping',
    description: 'On orders over $50'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Quality Guarantee',
    description: 'Premium materials only'
  },
  {
    icon: GiftIcon,
    title: 'Gift Wrapping',
    description: 'Beautiful packaging included'
  }
]

const testimonials = [
  {
    name: 'Sarah Chen',
    avatar: '/images/hero-labubu.webp',
    rating: 5,
    text: 'The quality is amazing! My Labubu looks so stylish in these outfits. Highly recommend!'
  },
  {
    name: 'Emma Rodriguez',
    avatar: '/images/designer-hoodie-set-new.webp',
    rating: 5,
    text: 'Fast shipping and beautiful packaging. The attention to detail is incredible.'
  },
  {
    name: 'Yuki Tanaka',
    avatar: '/images/business-casual-outfit.webp',
    rating: 5,
    text: 'Perfect fit for my collection! The designs are unique and well-made.'
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
        
        <div className="container-max section-padding relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-20">
            {/* Hero Content */}
            <motion.div
              className="space-y-8"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium">
                  <SparklesIcon className="h-4 w-4" />
                  <span>New Collection Available</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                  <span className="gradient-text">Designer Fashion</span>
                  <br />
                  <span className="text-secondary-900 dark:text-white">for Your</span>
                  <br />
                  <span className="text-primary-600 dark:text-primary-400">Labubu Dolls</span>
                </h1>
                
                <p className="text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed max-w-lg">
                  Discover premium clothing and accessories designed specifically for Labubu and designer dolls. 
                  Bring your collection to life with style.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="/collections" className="btn-primary btn-lg group">
                  Shop Collections
                  <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/about" className="btn-secondary btn-lg">
                  Learn More
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-900 dark:text-white">10K+</div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-900 dark:text-white">500+</div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">Unique Designs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-900 dark:text-white">4.9★</div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">Customer Rating</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-500 rounded-3xl rotate-6 opacity-20"></div>
                <div className="relative bg-white dark:bg-dark-800 rounded-3xl p-8 shadow-2xl">
                  <Image
                    src="/images/hero-labubu.webp"
                    alt="Labubu in designer outfit"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-2xl"
                    priority
                  />
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-accent-500 text-white p-3 rounded-full shadow-lg"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <HeartIcon className="h-6 w-6" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-primary-500 text-white p-3 rounded-full shadow-lg"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                >
                  <SparklesIcon className="h-6 w-6" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="container-max">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-secondary-50 dark:bg-dark-800">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-4">
              Featured <span className="gradient-text">Products</span>
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Discover our most popular designs, loved by doll collectors worldwide
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link href="/products" className="btn-secondary btn-lg">
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-4">
              Shop by <span className="gradient-text">Collection</span>
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Curated collections for every style and occasion
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
              >
                <Image
                  src={collection.image}
                  alt={collection.name}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{collection.name}</h3>
                  <p className="text-white/90 mb-4">{collection.description}</p>
                  <Link
                    href={collection.href}
                    className="inline-flex items-center text-white font-medium group-hover:text-primary-300 transition-colors"
                  >
                    Explore Collection
                    <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary-50 dark:bg-dark-800">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-4">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Join thousands of satisfied doll collectors worldwide
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-dark-700 p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIconSolid key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-secondary-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-secondary-500 dark:text-secondary-400">
                      Verified Customer
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container-max text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Style Your Collection?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join our community of doll enthusiasts and discover the perfect outfits for your Labubu dolls. 
              Get 15% off your first order when you sign up!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/collections" className="btn-white btn-lg">
                Start Shopping
              </Link>
              <Link href="/signup" className="btn-outline-white btn-lg">
                Join Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}