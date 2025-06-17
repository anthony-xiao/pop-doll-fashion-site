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
  StarIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
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

// Mock data for accessories
const accessories = [
  {
    id: 15,
    name: 'Designer Sunglasses Set',
    price: 12.99,
    originalPrice: 16.99,
    image: '/images/designer-sunglasses-set.webp',
    rating: 4.8,
    reviews: 234,
    badge: 'Best Seller',
    colors: ['#000000', '#8B4513', '#FF69B4'],
    category: 'eyewear',
    material: 'Plastic',
    size: 'One Size'
  },
  {
    id: 16,
    name: 'Luxury Watch Collection',
    price: 18.99,
    originalPrice: null,
    image: '/images/luxury-watch-collection.webp',
    rating: 4.9,
    reviews: 156,
    badge: 'Premium',
    colors: ['#FFD700', '#C0C0C0', '#CD7F32'],
    category: 'jewelry',
    material: 'Metal',
    size: 'Adjustable'
  },
  {
    id: 17,
    name: 'Cute Hair Accessories Pack',
    price: 8.99,
    originalPrice: 12.99,
    image: '/images/cute-hair-accessories.webp',
    rating: 4.7,
    reviews: 189,
    badge: 'Popular',
    colors: ['#FF69B4', '#87CEEB', '#98FB98'],
    category: 'hair',
    material: 'Fabric',
    size: 'Various'
  },
  {
    id: 18,
    name: 'Mini Backpack Collection',
    price: 15.99,
    originalPrice: null,
    image: '/images/mini-backpack-collection.webp',
    rating: 4.6,
    reviews: 267,
    badge: 'Trending',
    colors: ['#000000', '#FF1493', '#00CED1'],
    category: 'bags',
    material: 'Synthetic Leather',
    size: 'Small'
  },
  {
    id: 19,
    name: 'Statement Earrings Set',
    price: 9.99,
    originalPrice: null,
    image: '/images/statement-earrings-set.webp',
    rating: 5.0,
    reviews: 98,
    badge: 'New',
    colors: ['#FFD700', '#FF69B4', '#87CEEB'],
    category: 'jewelry',
    material: 'Alloy',
    size: 'One Size'
  },
  {
    id: 20,
    name: 'Stylish Hat Collection',
    price: 11.99,
    originalPrice: 14.99,
    image: '/images/stylish-hat-collection.webp',
    rating: 4.5,
    reviews: 145,
    badge: 'Sale',
    colors: ['#000000', '#8B4513', '#FF69B4'],
    category: 'hats',
    material: 'Cotton',
    size: 'One Size'
  },
  {
    id: 21,
    name: 'Tech Gadget Accessories',
    price: 13.99,
    originalPrice: null,
    image: '/images/tech-gadget-accessories.webp',
    rating: 4.8,
    reviews: 76,
    badge: 'Limited',
    colors: ['#000000', '#C0C0C0', '#FF4500'],
    category: 'tech',
    material: 'Plastic',
    size: 'Various'
  },
  {
    id: 22,
    name: 'Elegant Scarf Collection',
    price: 14.99,
    originalPrice: 19.99,
    image: '/images/elegant-scarf-collection.webp',
    rating: 4.7,
    reviews: 123,
    badge: 'Exclusive',
    colors: ['#FF69B4', '#87CEEB', '#DDA0DD'],
    category: 'scarves',
    material: 'Silk',
    size: 'One Size'
  }
]

const categories = [
  { id: 'all', name: 'All Accessories', icon: '🎀', count: accessories.length },
  { id: 'bags', name: 'Bags & Purses', icon: '👜', count: accessories.filter(a => a.category === 'bags').length },
  { id: 'jewelry', name: 'Jewelry', icon: '💎', count: accessories.filter(a => a.category === 'jewelry').length },
  { id: 'hair', name: 'Hair Accessories', icon: '🎀', count: accessories.filter(a => a.category === 'hair').length },
  { id: 'eyewear', name: 'Eyewear', icon: '🕶️', count: accessories.filter(a => a.category === 'eyewear').length },
  { id: 'hats', name: 'Hats & Caps', icon: '👒', count: accessories.filter(a => a.category === 'hats').length },
  { id: 'scarves', name: 'Scarves', icon: '🧣', count: accessories.filter(a => a.category === 'scarves').length },
  { id: 'tech', name: 'Tech Accessories', icon: '📱', count: accessories.filter(a => a.category === 'tech').length }
]

const filters = {
  priceRanges: [
    { label: 'Under $10', min: 0, max: 10 },
    { label: '$10 - $20', min: 10, max: 20 },
    { label: '$20 - $30', min: 20, max: 30 },
    { label: 'Over $30', min: 30, max: Infinity }
  ],
  materials: ['Plastic', 'Metal', 'Fabric', 'Synthetic Leather', 'Alloy', 'Cotton', 'Silk'],
  sizes: ['One Size', 'Small', 'Medium', 'Large', 'Adjustable', 'Various'],
  colors: [
    { name: 'Black', value: '#000000' },
    { name: 'White', value: '#FFFFFF' },
    { name: 'Pink', value: '#FF69B4' },
    { name: 'Blue', value: '#87CEEB' },
    { name: 'Gold', value: '#FFD700' },
    { name: 'Silver', value: '#C0C0C0' },
    { name: 'Red', value: '#FF0000' },
    { name: 'Green', value: '#98FB98' }
  ]
}

export default function AccessoriesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null)
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [wishlist, setWishlist] = useState<number[]>([])

  const filteredProducts = accessories.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
    if (selectedPriceRange) {
      const range = filters.priceRanges.find(r => r.label === selectedPriceRange)
      if (range && (product.price < range.min || product.price > range.max)) return false
    }
    if (selectedMaterials.length > 0 && !selectedMaterials.includes(product.material)) return false
    if (selectedSizes.length > 0 && !selectedSizes.includes(product.size)) return false
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
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'popular':
        return b.reviews - a.reviews
      case 'newest':
        return b.id - a.id
      default:
        return 0
    }
  })

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const toggleFilter = (filterArray: string[], setFilter: (value: string[]) => void, value: string) => {
    setFilter(
      filterArray.includes(value)
        ? filterArray.filter(item => item !== value)
        : [...filterArray, value]
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary-50 via-accent-50 to-primary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="absolute inset-0 bg-[url('/patterns/circles.svg')] opacity-10"></div>
        
        <div className="container-max section-padding relative">
          <motion.div
            className="text-center py-20"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
              <span className="gradient-text">Accessories</span>
            </h1>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed max-w-3xl mx-auto">
              Complete your Labubu's look with our stunning collection of accessories. 
              From elegant jewelry to stylish bags, find the perfect finishing touches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-white dark:bg-dark-900 border-b border-secondary-200 dark:border-dark-700">
        <div className="container-max section-padding">
          <motion.div 
            className="flex overflow-x-auto gap-4 py-6 scrollbar-hide"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                variants={scaleIn}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all ${
                  selectedCategory === category.id
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'border-secondary-200 dark:border-dark-600 bg-white dark:bg-dark-800 text-secondary-600 dark:text-secondary-400 hover:border-primary-300 hover:bg-primary-25 dark:hover:bg-dark-700'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="font-medium whitespace-nowrap">{category.name}</span>
                <span className="text-xs bg-secondary-100 dark:bg-dark-700 text-secondary-600 dark:text-secondary-400 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </motion.button>
            ))}
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
                placeholder="Search accessories..."
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
                <option value="popular">Most Popular</option>
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

              {/* Material Filter */}
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Material</h3>
                <div className="space-y-2">
                  {filters.materials.map((material) => (
                    <label key={material} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(material)}
                        onChange={() => toggleFilter(selectedMaterials, setSelectedMaterials, material)}
                        className="rounded border-secondary-300 dark:border-dark-600 text-primary-500 focus:ring-primary-500"
                      />
                      <span className="text-secondary-600 dark:text-secondary-400">{material}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Size</h3>
                <div className="space-y-2">
                  {filters.sizes.map((size) => (
                    <label key={size} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedSizes.includes(size)}
                        onChange={() => toggleFilter(selectedSizes, setSelectedSizes, size)}
                        className="rounded border-secondary-300 dark:border-dark-600 text-primary-500 focus:ring-primary-500"
                      />
                      <span className="text-secondary-600 dark:text-secondary-400">{size}</span>
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
                      onClick={() => toggleFilter(selectedColors, setSelectedColors, color.value)}
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
                  {categories.find(c => c.id === selectedCategory)?.name || 'Accessories'}
                </h2>
                <p className="text-secondary-600 dark:text-secondary-400 mt-1">
                  {sortedProducts.length} items found
                </p>
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
                    <motion.div
                      key={product.id}
                      variants={scaleIn}
                      className="group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-dark-800 transition-colors"
                        >
                          {wishlist.includes(product.id) ? (
                            <HeartSolidIcon className="h-5 w-5 text-red-500" />
                          ) : (
                            <HeartIcon className="h-5 w-5 text-secondary-600 dark:text-secondary-400" />
                          )}
                        </button>
                        {product.badge && (
                          <span className="absolute top-3 left-3 px-2 py-1 bg-accent-500 text-white text-xs font-medium rounded-full">
                            {product.badge}
                          </span>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(product.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-secondary-300 dark:text-secondary-600'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-secondary-600 dark:text-secondary-400">
                            ({product.reviews})
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xl font-bold text-primary-600">
                            ${product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-secondary-400 line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-between mb-4">
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
                          <span className="text-xs text-secondary-500 dark:text-secondary-400">
                            {product.material}
                          </span>
                        </div>
                        <Link
                          href={`/products/${product.id}`}
                          className="block w-full text-center btn-primary"
                        >
                          View Details
                        </Link>
                      </div>
                    </motion.div>
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
                        {product.badge && (
                          <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            {product.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                            {product.name}
                          </h3>
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            className="p-1 hover:bg-secondary-100 dark:hover:bg-dark-700 rounded-full transition-colors"
                          >
                            {wishlist.includes(product.id) ? (
                              <HeartSolidIcon className="h-5 w-5 text-red-500" />
                            ) : (
                              <HeartIcon className="h-5 w-5 text-secondary-600 dark:text-secondary-400" />
                            )}
                          </button>
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
                          <span className="text-sm text-secondary-500 dark:text-secondary-400">
                            {product.material} • {product.size}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <StarIcon
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < Math.floor(product.rating)
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-secondary-300 dark:text-secondary-600'
                                    }`}
                                  />
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
                  <p className="text-xl text-secondary-600 dark:text-secondary-400 mb-2">
                    No accessories found matching your criteria.
                  </p>
                  <p className="text-secondary-500 dark:text-secondary-500">
                    Try adjusting your filters or browse different categories.
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