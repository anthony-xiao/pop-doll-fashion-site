'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  Squares2X2Icon,
  ListBulletIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'
import ProductCard from '../components/ProductCard'

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
    <div className="min-h-screen bg-white dark:bg-dark-900 py-8">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Doll Fashion Collection
          </motion.h1>
          <motion.p 
            className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Discover our curated collection of adorable outfits for your beloved Labubu dolls
          </motion.p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-400" />
            <input
              type="text"
              placeholder="Search for outfits, styles, colors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-secondary-300 dark:border-dark-600 rounded-xl bg-white dark:bg-dark-700 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-secondary-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-primary-500 text-white'
                        : 'bg-secondary-100 dark:bg-dark-700 text-secondary-700 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-dark-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Advanced Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg text-secondary-700 dark:text-secondary-300 hover:border-primary-400 transition-colors"
              >
                <FunnelIcon className="h-4 w-4" />
                Filters
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex border border-secondary-300 dark:border-dark-600 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-primary-500 text-white'
                      : 'bg-white dark:bg-dark-700 text-secondary-600 dark:text-secondary-400 hover:bg-secondary-50 dark:hover:bg-dark-600'
                  }`}
                >
                  <Squares2X2Icon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-colors ${
                    viewMode === 'list'
                      ? 'bg-primary-500 text-white'
                      : 'bg-white dark:bg-dark-700 text-secondary-600 dark:text-secondary-400 hover:bg-secondary-50 dark:hover:bg-dark-600'
                  }`}
                >
                  <ListBulletIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 p-6 bg-secondary-50 dark:bg-dark-700 rounded-xl"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-secondary-900 dark:text-white mb-3">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="flex-1"
                    />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-secondary-600 dark:text-secondary-400">
            Showing {filteredAndSortedProducts.length} of {allProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <motion.div
            className={`grid gap-6 ${
              viewMode === 'grid'
                ? 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredAndSortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard 
                  product={product} 
                  className={viewMode === 'list' ? 'flex-row' : ''}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
              No products found
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
                setPriceRange([0, 100])
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More Button (for pagination) */}
        {filteredAndSortedProducts.length > 0 && filteredAndSortedProducts.length >= 8 && (
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Products
            </button>
          </div>
        )}
      </div>
    </div>
  )
}