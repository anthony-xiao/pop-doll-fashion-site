'use client'

import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  FunnelIcon,
  Squares2X2Icon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import ProductCard from '../components/ProductCard'

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

// Labubu collections data - organized by actual product categories
const collections = [
  {
    id: 'fantasy',
    name: 'Fantasy Collection',
    description: 'Magical outfits for enchanted adventures and mystical journeys',
    image: '/images/products/白森林-White-Forest/Labubu Front View.png',
    productCount: 3,
    featured: true,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'designer',
    name: 'Designer Collection',
    description: 'Premium luxury fashion pieces from top brands',
    image: '/images/products/金V白色套装-Gold-V-White-Suit/Character Front View.png',
    productCount: 5,
    featured: true,
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    id: 'costume',
    name: 'Costume Collection',
    description: 'Fun character and themed costumes for special occasions',
    image: '/images/products/大天使-Archangel/Character Front View.png',
    productCount: 5,
    featured: true,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'formal',
    name: 'Formal Collection',
    description: 'Elegant formal wear for sophisticated occasions',
    image: '/images/products/金V白色套装-Gold-V-White-Suit/Character Front View.png',
    productCount: 2,
    featured: true,
    gradient: 'from-gray-700 to-gray-900'
  },
  {
    id: 'casual',
    name: 'Casual Collection',
    description: 'Comfortable everyday outfits for relaxed styling',
    image: '/images/products/棕色甜甜圈-Brown-Donut/Character Front View.png',
    productCount: 3,
    featured: true,
    gradient: 'from-green-500 to-teal-500'
  }
]

// Complete product catalog organized by collections
const allProducts = [
  // Fantasy Collection
  {
    id: 1,
    name: 'White Forest Fantasy Set',
    price: 45.99,
    originalPrice: 59.99,
    image: '/images/products/白森林-White-Forest/Labubu Front View.png',
    rating: 4.9,
    reviews: 234,
    badge: 'Best Seller',
    colors: ['#FFFFFF', '#F0F8FF', '#E6E6FA'],
    collection: 'fantasy',
    category: 'Fantasy'
  },
  {
    id: 2,
    name: 'Archangel Divine Costume',
    price: 52.99,
    originalPrice: 69.99,
    image: '/images/products/大天使-Archangel/Character Front View.png',
    rating: 4.8,
    reviews: 189,
    badge: 'Limited Edition',
    colors: ['#FFD700', '#FFFFFF', '#87CEEB'],
    collection: 'fantasy',
    category: 'Fantasy'
  },
  {
    id: 5,
    name: 'Little Swan Ballet Set',
    price: 39.99,
    originalPrice: 49.99,
    image: '/images/products/小天鹅-Little-Swan/Character Front View.png',
    rating: 4.9,
    reviews: 178,
    badge: 'New',
    colors: ['#FFFFFF', '#FFB6C1', '#E6E6FA'],
    collection: 'fantasy',
    category: 'Fantasy'
  },
  // Designer Collection
  {
    id: 10,
    name: 'Gold V White Luxury Suit',
    price: 58.99,
    originalPrice: 74.99,
    image: '/images/products/金V白色套装-Gold-V-White-Suit/Character Front View.png',
    rating: 4.9,
    reviews: 267,
    badge: 'Luxury',
    colors: ['#FFFFFF', '#FFD700', '#F5F5DC'],
    collection: 'designer',
    category: 'Designer'
  },
  {
    id: 14,
    name: 'C Brand Red Plaid Set',
    price: 44.99,
    originalPrice: 56.99,
    image: '/images/products/C家红格子-C-Brand-Red-Plaid/Character Front View.png',
    rating: 4.7,
    reviews: 143,
    badge: 'Designer',
    colors: ['#FF0000', '#FFFFFF', '#000000'],
    collection: 'designer',
    category: 'Designer'
  },
  {
    id: 15,
    name: 'C Brand Black Dress',
    price: 49.99,
    originalPrice: 64.99,
    image: '/images/products/C家黑色连衣裙-C-Brand-Black-Dress/Character Front View.png',
    rating: 4.9,
    reviews: 221,
    badge: 'Elegant',
    colors: ['#000000', '#2F2F2F', '#4A4A4A'],
    collection: 'designer',
    category: 'Designer'
  },
  {
    id: 16,
    name: 'D Brand Blue Dress',
    price: 34.99,
    originalPrice: 44.99,
    image: '/images/products/D家蓝色连衣裙-D-Brand-Blue-Dress/Character Front View.png',
    rating: 4.7,
    reviews: 134,
    badge: 'Designer',
    colors: ['#0000FF', '#4169E1', '#87CEEB'],
    collection: 'designer',
    category: 'Designer'
  },
  {
    id: 17,
    name: 'G Brand Coffee Dress',
    price: 33.99,
    originalPrice: 43.99,
    image: '/images/products/G家咖色连衣裙-G-Brand-Coffee-Dress/Character Front View.png',
    rating: 4.6,
    reviews: 98,
    badge: 'Designer',
    colors: ['#8B4513', '#A0522D', '#D2691E'],
    collection: 'designer',
    category: 'Designer'
  },
  // Costume Collection
  {
    id: 3,
    name: 'Rabbit Officer Uniform',
    price: 38.99,
    originalPrice: 48.99,
    image: '/images/products/兔子警官-Rabbit-Officer/Character Front View.png',
    rating: 4.7,
    reviews: 156,
    badge: 'Popular',
    colors: ['#000080', '#C0C0C0', '#FFD700'],
    collection: 'costume',
    category: 'Costume'
  },
  {
    id: 4,
    name: 'Elegant Maid Outfit',
    price: 42.99,
    originalPrice: 54.99,
    image: '/images/products/女仆装-Maid-Outfit/Character Front View.png',
    rating: 4.8,
    reviews: 203,
    badge: 'Trending',
    colors: ['#000000', '#FFFFFF', '#FF69B4'],
    collection: 'costume',
    category: 'Costume'
  },
  {
    id: 7,
    name: 'White Happy Mouse Costume',
    price: 34.99,
    originalPrice: 44.99,
    image: '/images/products/白色开心鼠-White-Happy-Mouse/Character Front View.png',
    rating: 4.7,
    reviews: 167,
    badge: 'Cute',
    colors: ['#FFFFFF', '#FFB6C1', '#87CEEB'],
    collection: 'costume',
    category: 'Costume'
  },
  {
    id: 9,
    name: 'Blue Big Mouth Fish Costume',
    price: 33.99,
    originalPrice: 43.99,
    image: '/images/products/蓝色大嘴鱼-Blue-Big-Mouth-Fish/Character Front View.png',
    rating: 4.6,
    reviews: 134,
    badge: 'Ocean',
    colors: ['#0000FF', '#87CEEB', '#4169E1'],
    collection: 'costume',
    category: 'Costume'
  },
  {
    id: 11,
    name: 'Mario Adventure Costume',
    price: 41.99,
    originalPrice: 51.99,
    image: '/images/products/马里奥-Mario/Character Front View.png',
    rating: 4.8,
    reviews: 198,
    badge: 'Gaming',
    colors: ['#FF0000', '#0000FF', '#FFFF00'],
    collection: 'costume',
    category: 'Costume'
  },
  // Formal Collection
  {
    id: 12,
    name: 'Black Plaid Formal Suit',
    price: 42.99,
    originalPrice: 52.99,
    image: '/images/products/黑格套装-Black-Plaid-Suit/Character Front View.png',
    rating: 4.9,
    reviews: 92,
    badge: 'Premium',
    colors: ['#000000', '#808080', '#FFFFFF'],
    collection: 'formal',
    category: 'Formal'
  },
  // Casual Collection
  {
    id: 6,
    name: 'Brown Donut Casual Set',
    price: 29.99,
    originalPrice: 39.99,
    image: '/images/products/棕色甜甜圈-Brown-Donut/Character Front View.png',
    rating: 4.6,
    reviews: 145,
    badge: 'Sweet',
    colors: ['#8B4513', '#DEB887', '#F4A460'],
    collection: 'casual',
    category: 'Casual'
  },
  {
    id: 8,
    name: 'Pink Little Colorful Set',
    price: 36.99,
    originalPrice: 46.99,
    image: '/images/products/粉色小炫彩-Pink-Little-Colorful/Character Front View.png',
    rating: 4.8,
    reviews: 192,
    badge: 'Vibrant',
    colors: ['#FF69B4', '#FFB6C1', '#FF1493'],
    collection: 'casual',
    category: 'Casual'
  },
  {
    id: 13,
    name: 'Black Little Colorful Set',
    price: 37.99,
    originalPrice: 47.99,
    image: '/images/products/黑色小炫彩-Black-Little-Colorful/Character Front View.png',
    rating: 4.8,
    reviews: 174,
    badge: 'Chic',
    colors: ['#000000', '#FF69B4', '#32CD32'],
    collection: 'casual',
    category: 'Casual'
  }
]

const featuredProducts = allProducts.filter(product => 
  ['Best Seller', 'Limited Edition', 'New', 'Luxury'].includes(product.badge || '')
).slice(0, 8)


const filters = {
  priceRanges: [
    { label: 'Under $25', min: 0, max: 25 },
    { label: '$25 - $50', min: 25, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: 'Over $100', min: 100, max: Infinity }
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  colors: [
    { name: 'Black', value: '#000000' },
    { name: 'White', value: '#FFFFFF' },
    { name: 'Pink', value: '#FF69B4' },
    { name: 'Blue', value: '#87CEEB' },
    { name: 'Red', value: '#FF0000' },
    { name: 'Gold', value: '#FFD700' }
  ]
}

export default function CollectionsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = allProducts.filter(product => {
    if (selectedCollection && product.collection !== selectedCollection) return false
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'newest':
        return b.id - a.id
      default:
        return 0
    }
  })

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
              <span className="gradient-text">Collections</span>
            </h1>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Discover our curated collections of premium fashion for your Labubu dolls. 
              From street style to luxury pieces, find the perfect outfit for every occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200"
              >
                View All Products
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <span className="text-secondary-500 dark:text-secondary-400">or browse by collection below</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="bg-white dark:bg-dark-900 border-b border-secondary-200 dark:border-dark-700 sticky top-20 z-40">
        <div className="container-max section-padding">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between py-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
              <input
                type="text"
                placeholder="Search collections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              {/* View Mode */}
              <div className="flex items-center border border-secondary-300 dark:border-dark-600 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-primary-500 text-white' : 'bg-white dark:bg-dark-800 text-secondary-600 dark:text-secondary-400'}`}
                >
                  <Squares2X2Icon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-primary-500 text-white' : 'bg-white dark:bg-dark-800 text-secondary-600 dark:text-secondary-400'}`}
                >
                  <ListBulletIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-secondary-900 dark:text-white hover:bg-secondary-50 dark:hover:bg-dark-700 transition-colors"
              >
                <FunnelIcon className="h-5 w-5" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-max section-padding">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className={`w-80 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-40 space-y-8">
              {/* Collections Filter */}
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Collections</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCollection(null)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCollection === null
                        ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                        : 'text-secondary-600 dark:text-secondary-400 hover:bg-secondary-50 dark:hover:bg-dark-800'
                    }`}
                  >
                    All Collections
                  </button>
                  {collections.map((collection) => (
                    <button
                      key={collection.id}
                      onClick={() => setSelectedCollection(collection.id)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCollection === collection.id
                          ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                          : 'text-secondary-600 dark:text-secondary-400 hover:bg-secondary-50 dark:hover:bg-dark-800'
                      }`}
                    >
                      {collection.name} ({collection.productCount})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Price Range</h3>
                <div className="space-y-2">
                  {filters.priceRanges.map((range, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-secondary-300 dark:border-dark-600 text-primary-500 focus:ring-primary-500"
                      />
                      <span className="text-secondary-600 dark:text-secondary-400">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {filters.colors.map((color, index) => (
                    <button
                      key={index}
                      className="w-8 h-8 rounded-full border-2 border-secondary-300 dark:border-dark-600 hover:scale-110 transition-transform"
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            {/* Collection Grid */}
            {!selectedCollection && (
              <motion.section
                className="mb-16"
                initial="initial"
                animate="animate"
                variants={staggerContainer}
              >
                <motion.h2 
                  variants={fadeInUp}
                  className="text-3xl font-display font-bold text-secondary-900 dark:text-white mb-8"
                >
                  Featured Collections
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {collections.filter(c => c.featured).map((collection) => (
                    <motion.div
                      key={collection.id}
                      variants={scaleIn}
                      className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${
                        selectedCollection === collection.id
                          ? 'ring-4 ring-primary-500 shadow-2xl scale-105'
                          : 'hover:shadow-xl hover:scale-102'
                      }`}
                      onClick={() => setSelectedCollection(
                        selectedCollection === collection.id ? null : collection.id
                      )}
                    >
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={collection.image}
                          alt={collection.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${collection.gradient} opacity-80`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                            {collection.name}
                          </h3>
                          <p className="text-white/90 text-sm mb-3 drop-shadow">
                            {collection.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-white/80 text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                              {collection.productCount} products
                            </span>
                            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full group-hover:bg-white/30 transition-colors">
                              <ArrowRightIcon className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Products Grid/List */}
            <motion.section
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <div className="flex items-center justify-between mb-8">
                <motion.h2 
                  variants={fadeInUp}
                  className="text-3xl font-display font-bold text-secondary-900 dark:text-white"
                >
                  {selectedCollection 
                    ? collections.find(c => c.id === selectedCollection)?.name || 'Products'
                    : 'All Products'
                  }
                </motion.h2>
                <motion.p 
                  variants={fadeInUp}
                  className="text-secondary-600 dark:text-secondary-400"
                >
                  {sortedProducts.length} products
                </motion.p>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {sortedProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      variants={fadeInUp}
                      className="flex gap-6 bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg"
                    >
                      <div className="w-32 h-32 flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-2xl font-bold text-primary-600">
                            ${product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-lg text-secondary-400 line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                          {product.badge && (
                            <span className="px-2 py-1 bg-accent-500 text-white text-xs font-medium rounded-full">
                              {product.badge}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={`text-sm ${
                                    i < Math.floor(product.rating)
                                      ? 'text-yellow-400'
                                      : 'text-secondary-300 dark:text-secondary-600'
                                  }`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                            <span className="text-sm text-secondary-600 dark:text-secondary-400">
                              ({product.reviews})
                            </span>
                          </div>
                          <Link
                            href={`/products/${product.id}`}
                            className="btn-primary"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {sortedProducts.length === 0 && (
                <motion.div 
                  variants={fadeInUp}
                  className="text-center py-16"
                >
                  <p className="text-xl text-secondary-600 dark:text-secondary-400">
                    No products found matching your criteria.
                  </p>
                </motion.div>
              )}
            </motion.section>
          </main>
        </div>
      </div>
    </div>
  )
}