'use client'

import { useState, useMemo } from 'react'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  Squares2X2Icon,
  ListBulletIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  AdjustmentsHorizontalIcon,
  SparklesIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
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

// Mock products data - in a real app, this would come from an API
const allProducts = [
  {
    id: 1,
    name: "Kawaii Pink Dress Set",
    price: 24.99,
    originalPrice: 34.99,
    image: "/images/products/kawaii-pink-dress-1.jpg",
    rating: 4.8,
    reviews: 127,
    badge: "Best Seller",
    colors: ['#FFB6C1', '#FF69B4', '#FFC0CB'],
    category: "Dresses",
    tags: ["kawaii", "pink", "dress", "cute"]
  },
  {
    id: 2,
    name: "Gothic Lolita Outfit",
    price: 32.99,
    originalPrice: 42.99,
    image: "/images/products/gothic-lolita-1.jpg",
    rating: 4.9,
    reviews: 89,
    badge: "Limited Edition",
    colors: ['#2F1B69', '#000000', '#4B0082'],
    category: "Outfits",
    tags: ["gothic", "lolita", "elegant", "limited"]
  },
  {
    id: 3,
    name: "Fairy Tale Princess Gown",
    price: 28.99,
    originalPrice: 38.99,
    image: "/images/products/fairy-princess.jpg",
    rating: 4.7,
    reviews: 156,
    colors: ['#87CEEB', '#FFB6C1', '#DDA0DD'],
    category: "Dresses",
    tags: ["fairy", "princess", "gown", "magical"]
  },
  {
    id: 4,
    name: "Casual Street Style Set",
    price: 19.99,
    image: "/images/products/street-style.jpg",
    rating: 4.6,
    reviews: 203,
    colors: ['#FF6347', '#32CD32', '#1E90FF'],
    category: "Casual",
    tags: ["street", "casual", "modern", "trendy"]
  },
  {
    id: 5,
    name: "Vintage Tea Party Dress",
    price: 26.99,
    originalPrice: 35.99,
    image: "/images/products/vintage-tea-party.jpg",
    rating: 4.5,
    reviews: 92,
    colors: ['#F5DEB3', '#DDA0DD', '#98FB98'],
    category: "Dresses",
    tags: ["vintage", "tea party", "elegant", "classic"]
  },
  {
    id: 6,
    name: "Sporty Chic Ensemble",
    price: 22.99,
    image: "/images/products/sporty-chic.jpg",
    rating: 4.4,
    reviews: 178,
    badge: "New Arrival",
    colors: ['#FF1493', '#00CED1', '#FFD700'],
    category: "Sporty",
    tags: ["sporty", "chic", "athletic", "new"]
  },
  {
    id: 7,
    name: "Bohemian Summer Set",
    price: 29.99,
    image: "/images/products/bohemian-summer.jpg",
    rating: 4.6,
    reviews: 134,
    colors: ['#DEB887', '#F0E68C', '#CD853F'],
    category: "Bohemian",
    tags: ["bohemian", "summer", "flowy", "natural"]
  },
  {
    id: 8,
    name: "Elegant Evening Gown",
    price: 39.99,
    originalPrice: 49.99,
    image: "/images/products/evening-gown.jpg",
    rating: 4.8,
    reviews: 67,
    badge: "Premium",
    colors: ['#000000', '#8B0000', '#4B0082'],
    category: "Evening",
    tags: ["elegant", "evening", "formal", "premium"]
  }
]

const categories = ["All", "Dresses", "Outfits", "Casual", "Sporty", "Bohemian", "Evening"]
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" }
]

const filters = {
  priceRanges: [
    { label: 'Under $25', min: 0, max: 25 },
    { label: '$25 - $50', min: 25, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: 'Over $100', min: 100, max: Infinity }
  ],
  colors: [
    { name: 'Black', value: '#000000' },
    { name: 'White', value: '#FFFFFF' },
    { name: 'Pink', value: '#FF69B4' },
    { name: 'Blue', value: '#87CEEB' },
    { name: 'Red', value: '#FF0000' },
    { name: 'Gold', value: '#FFD700' }
  ]
}

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [priceRange, setPriceRange] = useState([0, 100])
  const [showFilters, setShowFilters] = useState(false)

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      
      return matchesSearch && matchesCategory && matchesPrice
    })

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0))
        break
      case 'newest':
        filtered.sort((a, b) => b.id - a.id)
        break
      default:
        // Featured - keep original order
        break
    }

    return filtered
  }, [searchQuery, selectedCategory, sortBy, priceRange])

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
            <div className="flex items-center justify-center gap-3 mb-6">
              <SparklesIcon className="h-8 w-8 text-primary-500" />
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                <span className="gradient-text">All Products</span>
              </h1>
              <SparklesIcon className="h-8 w-8 text-primary-500" />
            </div>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Discover our complete collection of premium fashion for your Labubu dolls. 
              From casual wear to elegant pieces, find the perfect outfit for every style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200"
              >
                View Collections
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <span className="text-secondary-500 dark:text-secondary-400">or browse all products below</span>
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
                placeholder="Search products..."
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
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
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
              {/* Categories Filter */}
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                          : 'text-secondary-600 dark:text-secondary-400 hover:bg-secondary-50 dark:hover:bg-dark-800'
                      }`}
                    >
                      {category}
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

            {/* Products Grid/List */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className={`grid gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1'
              }`}
            >
              {filteredAndSortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={fadeInUp}
                  className={`group bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${
                    viewMode === 'list' ? 'flex gap-6' : ''
                  }`}
                >
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-square'}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.isNew && (
                      <span className="absolute top-3 left-3 bg-primary-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                    {product.discount && (
                      <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                        -{product.discount}%
                      </span>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-full bg-white/90 backdrop-blur-sm text-secondary-900 py-2 rounded-lg font-medium hover:bg-white transition-colors">
                        Quick View
                      </button>
                    </div>
                  </div>
                  
                  <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {product.name}
                      </h3>
                      <button className="text-secondary-400 hover:text-red-500 transition-colors">
                        <HeartIcon className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm mb-3">
                      {product.category}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-secondary-900 dark:text-white">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-secondary-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-secondary-600 dark:text-secondary-400">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                    
                    {viewMode === 'list' && (
                      <div className="mt-4">
                        <p className="text-secondary-600 dark:text-secondary-400 text-sm mb-4">
                          {product.description || 'Stylish and comfortable outfit perfect for any occasion.'}
                        </p>
                        <button className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors">
                          Add to Cart
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-secondary-400 mb-4">
                  <SparklesIcon className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  No products found
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}