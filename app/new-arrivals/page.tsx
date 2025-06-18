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
  SparklesIcon,
  ClockIcon
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

// Mock data for new arrivals
const newArrivals = [
  {
    id: 7,
    name: 'Cyber Punk Outfit',
    price: 44.99,
    originalPrice: null,
    image: '/images/cyber-punk-outfit.webp',
    rating: 4.9,
    reviews: 23,
    badge: 'Just Dropped',
    colors: ['#000000', '#00FFFF', '#FF00FF'],
    collection: 'street-style',
    dateAdded: '2024-01-15',
    isNew: true
  },
  {
    id: 8,
    name: 'Minimalist Chic Set',
    price: 32.99,
    originalPrice: null,
    image: '/images/minimalist-chic-set.webp',
    rating: 4.8,
    reviews: 45,
    badge: 'New',
    colors: ['#FFFFFF', '#F5F5F5', '#E0E0E0'],
    collection: 'luxury',
    dateAdded: '2024-01-12',
    isNew: true
  },
  {
    id: 9,
    name: 'Retro Gaming Tee',
    price: 19.99,
    originalPrice: 24.99,
    image: '/images/retro-gaming-tee.webp',
    rating: 4.7,
    reviews: 67,
    badge: 'Limited Edition',
    colors: ['#000000', '#FF0000', '#00FF00'],
    collection: 'street-style',
    dateAdded: '2024-01-10',
    isNew: true
  },
  {
    id: 10,
    name: 'Bohemian Dreams Dress',
    price: 38.99,
    originalPrice: null,
    image: '/images/bohemian-dreams-dress.webp',
    rating: 5.0,
    reviews: 34,
    badge: 'Exclusive',
    colors: ['#8B4513', '#DEB887', '#F4A460'],
    collection: 'summer-collection',
    dateAdded: '2024-01-08',
    isNew: true
  },
  {
    id: 11,
    name: 'Tech Wear Jacket',
    price: 59.99,
    originalPrice: null,
    image: '/images/tech-wear-jacket.webp',
    rating: 4.9,
    reviews: 18,
    badge: 'Premium',
    colors: ['#000000', '#808080', '#C0C0C0'],
    collection: 'street-style',
    dateAdded: '2024-01-05',
    isNew: true
  },
  {
    id: 12,
    name: 'Vintage Denim Set',
    price: 42.99,
    originalPrice: 52.99,
    image: '/images/vintage-denim-set.webp',
    rating: 4.6,
    reviews: 89,
    badge: 'Trending',
    colors: ['#4169E1', '#6495ED', '#87CEEB'],
    collection: 'street-style',
    dateAdded: '2024-01-03',
    isNew: true
  },
  {
    id: 13,
    name: 'Kawaii Princess Outfit',
    price: 35.99,
    originalPrice: null,
    image: '/images/kawaii-princess-outfit.webp',
    rating: 4.8,
    reviews: 156,
    badge: 'Fan Favorite',
    colors: ['#FFB6C1', '#FF69B4', '#FFC0CB'],
    collection: 'luxury',
    dateAdded: '2024-01-01',
    isNew: true
  },
  {
    id: 14,
    name: 'Urban Explorer Kit',
    price: 48.99,
    originalPrice: null,
    image: '/images/urban-explorer-kit.webp',
    rating: 4.7,
    reviews: 72,
    badge: 'Adventure Ready',
    colors: ['#556B2F', '#8FBC8F', '#228B22'],
    collection: 'street-style',
    dateAdded: '2023-12-28',
    isNew: true
  }
]

const filters = {
  priceRanges: [
    { label: 'Under $25', min: 0, max: 25 },
    { label: '$25 - $50', min: 25, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: 'Over $100', min: 100, max: Infinity }
  ],
  collections: [
    { id: 'street-style', name: 'Street Style' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'summer-collection', name: 'Summer Collection' },
    { id: 'business-casual', name: 'Business Casual' }
  ],
  colors: [
    { name: 'Black', value: '#000000' },
    { name: 'White', value: '#FFFFFF' },
    { name: 'Pink', value: '#FF69B4' },
    { name: 'Blue', value: '#87CEEB' },
    { name: 'Red', value: '#FF0000' },
    { name: 'Green', value: '#00FF00' },
    { name: 'Cyan', value: '#00FFFF' },
    { name: 'Magenta', value: '#FF00FF' }
  ]
}

export default function NewArrivalsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null)
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null)
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  const filteredProducts = newArrivals.filter(product => {
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
    if (selectedCollection && product.collection !== selectedCollection) return false
    if (selectedPriceRange) {
      const range = filters.priceRanges.find(r => r.label === selectedPriceRange)
      if (range && (product.price < range.min || product.price > range.max)) return false
    }
    if (selectedColors.length > 0) {
      const hasMatchingColor = selectedColors.some(color => 
        product.colors.some(productColor => productColor.toLowerCase() === color.toLowerCase())
      )
      if (!hasMatchingColor) return false
    }
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'popular':
        return b.reviews - a.reviews
      default:
        return 0
    }
  })

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent-50 via-primary-50 to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
        
        <div className="container-max section-padding relative">
          <motion.div
            className="text-center py-20"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <SparklesIcon className="h-8 w-8 text-accent-500" />
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                <span className="gradient-text">New Arrivals</span>
              </h1>
              <SparklesIcon className="h-8 w-8 text-accent-500" />
            </div>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Fresh styles just dropped! Discover the latest fashion trends for your Labubu dolls. 
              Be the first to style your collection with our newest pieces.
            </p>
            <div className="flex items-center justify-center gap-2 text-accent-600 dark:text-accent-400">
              <ClockIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Updated daily with new arrivals</span>
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
                placeholder="Search new arrivals..."
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
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
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
                {(selectedPriceRange || selectedCollection || selectedColors.length > 0) && (
                  <span className="bg-accent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {[selectedPriceRange, selectedCollection, ...selectedColors].filter(Boolean).length}
                  </span>
                )}
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
              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-accent-50 to-primary-50 dark:from-dark-800 dark:to-dark-700 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">This Week</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-600 dark:text-secondary-400">New Items</span>
                    <span className="font-bold text-accent-600 dark:text-accent-400">{newArrivals.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-600 dark:text-secondary-400">Collections</span>
                    <span className="font-bold text-accent-600 dark:text-accent-400">4</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-600 dark:text-secondary-400">Avg Rating</span>
                    <span className="font-bold text-accent-600 dark:text-accent-400">4.8★</span>
                  </div>
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Price Range</h3>
                <div className="space-y-2">
                  {filters.priceRanges.map((range) => (
                    <label key={range.label} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={selectedPriceRange === range.label}
                        onChange={() => setSelectedPriceRange(
                          selectedPriceRange === range.label ? null : range.label
                        )}
                        className="text-primary-500 focus:ring-primary-500"
                      />
                      <span className="text-secondary-600 dark:text-secondary-400">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Collection Filter */}
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Collections</h3>
                <div className="space-y-2">
                  {filters.collections.map((collection) => (
                    <label key={collection.id} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="collection"
                        checked={selectedCollection === collection.id}
                        onChange={() => setSelectedCollection(
                          selectedCollection === collection.id ? null : collection.id
                        )}
                        className="text-primary-500 focus:ring-primary-500"
                      />
                      <span className="text-secondary-600 dark:text-secondary-400">{collection.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {filters.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => toggleColor(color.value)}
                      className={`w-8 h-8 rounded-full border-2 hover:scale-110 transition-all ${
                        selectedColors.includes(color.value)
                          ? 'border-primary-500 ring-2 ring-primary-200 dark:ring-primary-800'
                          : 'border-secondary-300 dark:border-dark-600'
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedPriceRange || selectedCollection || selectedColors.length > 0) && (
                <button
                  onClick={() => {
                    setSelectedPriceRange(null)
                    setSelectedCollection(null)
                    setSelectedColors([])
                  }}
                  className="w-full px-4 py-2 text-sm text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-white border border-secondary-300 dark:border-dark-600 rounded-lg hover:bg-secondary-50 dark:hover:bg-dark-800 transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            {/* Results Header */}
            <motion.div 
              className="flex items-center justify-between mb-8"
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-secondary-900 dark:text-white">
                  Latest Drops
                </h2>
                <p className="text-secondary-600 dark:text-secondary-400 mt-1">
                  {sortedProducts.length} new items found
                </p>
              </div>
              
              {/* New Badge */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-500 to-primary-500 text-white rounded-full">
                <SparklesIcon className="h-4 w-4" />
                <span className="text-sm font-medium">Fresh Arrivals</span>
              </div>
            </motion.div>

            {/* Products Grid/List */}
            <motion.section
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              {viewMode === 'grid' ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                      className="flex gap-6 bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="w-32 h-32 flex-shrink-0 relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        {product.isNew && (
                          <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                            {product.name}
                          </h3>
                          <span className="text-xs text-secondary-500 dark:text-secondary-400">
                            Added {new Date(product.dateAdded).toLocaleDateString()}
                          </span>
                        </div>
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
                          <div className="flex items-center gap-4">
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
                            <div className="flex gap-1">
                              {product.colors.slice(0, 3).map((color, index) => (
                                <div
                                  key={index}
                                  className="w-4 h-4 rounded-full border border-secondary-300 dark:border-dark-600"
                                  style={{ backgroundColor: color }}
                                />
                              ))}
                              {product.colors.length > 3 && (
                                <span className="text-xs text-secondary-500 dark:text-secondary-400 ml-1">
                                  +{product.colors.length - 3}
                                </span>
                              )}
                            </div>
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
                  <SparklesIcon className="h-16 w-16 text-secondary-300 dark:text-secondary-600 mx-auto mb-4" />
                  <p className="text-xl text-secondary-600 dark:text-secondary-400 mb-2">
                    No new arrivals match your filters.
                  </p>
                  <p className="text-secondary-500 dark:text-secondary-500">
                    Try adjusting your search criteria or check back soon for new drops!
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