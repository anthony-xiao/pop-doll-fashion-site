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
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

// Labubu Doll Clothes Collection
const allProducts = [
  {
    id: 1,
    name: "White Forest Fantasy Set",
    price: 45.99,
    originalPrice: 59.99,
    image: "/images/products/白森林-White-Forest/Labubu Front View.png",
    rating: 4.9,
    reviews: 234,
    badge: "Best Seller",
    colors: ['#FFFFFF', '#F0F8FF', '#E6E6FA'],
    category: "Fantasy",
    tags: ["white", "forest", "fantasy", "elegant"]
  },
  {
    id: 2,
    name: "Archangel Divine Costume",
    price: 52.99,
    originalPrice: 69.99,
    image: "/images/products/大天使-Archangel/Character Front View.png",
    rating: 4.8,
    reviews: 189,
    badge: "Limited Edition",
    colors: ['#FFD700', '#FFFFFF', '#87CEEB'],
    category: "Fantasy",
    tags: ["archangel", "divine", "celestial", "wings"]
  },
  {
    id: 3,
    name: "Rabbit Officer Uniform",
    price: 38.99,
    originalPrice: 48.99,
    image: "/images/products/兔子警官-Rabbit-Officer/Character Front View.png",
    rating: 4.7,
    reviews: 156,
    badge: "Popular",
    colors: ['#000080', '#C0C0C0', '#FFD700'],
    category: "Costume",
    tags: ["rabbit", "officer", "uniform", "professional"]
  },
  {
    id: 4,
    name: "Elegant Maid Outfit",
    price: 42.99,
    originalPrice: 54.99,
    image: "/images/products/女仆装-Maid-Outfit/Character Front View.png",
    rating: 4.8,
    reviews: 203,
    badge: "Trending",
    colors: ['#000000', '#FFFFFF', '#FF69B4'],
    category: "Costume",
    tags: ["maid", "elegant", "classic", "traditional"]
  },
  {
    id: 5,
    name: "Little Swan Ballet Set",
    price: 39.99,
    originalPrice: 49.99,
    image: "/images/products/小天鹅-Little-Swan/Character Front View.png",
    rating: 4.9,
    reviews: 178,
    badge: "New",
    colors: ['#FFFFFF', '#FFB6C1', '#E6E6FA'],
    category: "Fantasy",
    tags: ["swan", "ballet", "graceful", "dance"]
  },
  {
    id: 6,
    name: "Brown Donut Casual Set",
    price: 29.99,
    originalPrice: 39.99,
    image: "/images/products/棕色甜甜圈-Brown-Donut/Character Front View.png",
    rating: 4.6,
    reviews: 145,
    badge: "Sweet",
    colors: ['#8B4513', '#DEB887', '#F4A460'],
    category: "Casual",
    tags: ["donut", "sweet", "casual", "playful"]
  },
  {
    id: 7,
    name: "White Happy Mouse Costume",
    price: 34.99,
    originalPrice: 44.99,
    image: "/images/products/白色开心鼠-White-Happy-Mouse/Character Front View.png",
    rating: 4.7,
    reviews: 167,
    badge: "Cute",
    colors: ['#FFFFFF', '#FFB6C1', '#87CEEB'],
    category: "Costume",
    tags: ["mouse", "white", "happy", "cute"]
  },
  {
    id: 8,
    name: "Pink Little Colorful Set",
    price: 36.99,
    originalPrice: 46.99,
    image: "/images/products/粉色小炫彩-Pink-Little-Colorful/Character Front View.png",
    rating: 4.8,
    reviews: 192,
    badge: "Vibrant",
    colors: ['#FF69B4', '#FFB6C1', '#FF1493'],
    category: "Casual",
    tags: ["pink", "colorful", "vibrant", "trendy"]
  },
  {
    id: 9,
    name: "Blue Big Mouth Fish Costume",
    price: 33.99,
    originalPrice: 43.99,
    image: "/images/products/蓝色大嘴鱼-Blue-Big-Mouth-Fish/Character Front View.png",
    rating: 4.6,
    reviews: 134,
    badge: "Ocean",
    colors: ['#0000FF', '#87CEEB', '#4169E1'],
    category: "Costume",
    tags: ["fish", "ocean", "blue", "playful"]
  },
  {
    id: 10,
    name: "Gold V White Luxury Suit",
    price: 58.99,
    originalPrice: 74.99,
    image: "/images/products/金V白色套装-Gold-V-White-Suit/Character Front View.png",
    rating: 4.9,
    reviews: 267,
    badge: "Luxury",
    colors: ['#FFFFFF', '#FFD700', '#F5F5DC'],
    category: "Formal",
    tags: ["luxury", "gold", "white", "elegant"]
  },
  {
    id: 11,
    name: "Mario Adventure Costume",
    price: 41.99,
    originalPrice: 51.99,
    image: "/images/products/马里奥-Mario/Character Front View.png",
    rating: 4.8,
    reviews: 198,
    badge: "Gaming",
    colors: ['#FF0000', '#0000FF', '#FFFF00'],
    category: "Costume",
    tags: ["mario", "gaming", "adventure", "classic"]
  },
  {
    id: 12,
    name: "Black Plaid Formal Suit",
    price: 42.99,
    originalPrice: 52.99,
    image: "/images/products/黑格套装-Black-Plaid-Suit/Character Front View.png",
    rating: 4.9,
    reviews: 92,
    badge: "Premium",
    colors: ['#000000', '#808080', '#FFFFFF'],
    category: "Formal",
    tags: ["formal", "plaid", "professional", "elegant"]
  },
  {
    id: 13,
    name: "Black Little Colorful Set",
    price: 37.99,
    originalPrice: 47.99,
    image: "/images/products/黑色小炫彩-Black-Little-Colorful/Character Front View.png",
    rating: 4.8,
    reviews: 174,
    badge: "Chic",
    colors: ['#000000', '#FF69B4', '#32CD32'],
    category: "Casual",
    tags: ["chic", "colorful", "modern", "trendy"]
  },
  {
    id: 14,
    name: "C Brand Red Plaid Set",
    price: 44.99,
    originalPrice: 56.99,
    image: "/images/products/C家红格子-C-Brand-Red-Plaid/Character Front View.png",
    rating: 4.7,
    reviews: 143,
    badge: "Designer",
    colors: ['#FF0000', '#FFFFFF', '#000000'],
    category: "Designer",
    tags: ["designer", "plaid", "red", "premium"]
  },
  {
    id: 15,
    name: "C Brand Black Dress",
    price: 49.99,
    originalPrice: 64.99,
    image: "/images/products/C家黑色连衣裙-C-Brand-Black-Dress/Character Front View.png",
    rating: 4.9,
    reviews: 221,
    badge: "Elegant",
    colors: ['#000000', '#2F2F2F', '#4A4A4A'],
    category: "Designer",
    tags: ["designer", "black", "dress", "elegant"]
  },
  {
    id: 16,
    name: "D Brand Blue Dress",
    price: 34.99,
    originalPrice: 44.99,
    image: "/images/products/D家蓝色连衣裙-D-Brand-Blue-Dress/Character Front View.png",
    rating: 4.7,
    reviews: 134,
    badge: "Designer",
    colors: ['#0000FF', '#4169E1', '#87CEEB'],
    category: "Designer",
    tags: ["designer", "blue", "dress", "elegant"]
  },
  {
    id: 17,
    name: "G Brand Coffee Dress",
    price: 33.99,
    originalPrice: 43.99,
    image: "/images/products/G家咖色连衣裙-G-Brand-Coffee-Dress/Character Front View.png",
    rating: 4.6,
    reviews: 98,
    badge: "Designer",
    colors: ['#8B4513', '#A0522D', '#D2691E'],
    category: "Designer",
    tags: ["designer", "coffee", "dress", "sophisticated"]
  }
]

const categories = ["All", "Fantasy", "Formal", "Casual", "Costume", "Designer"]
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
              Discover our exclusive collection of premium Labubu doll clothes. 
              From fantasy costumes to designer outfits, dress your Labubu in style with our carefully crafted pieces.
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
                  variants={scaleIn}
                >
                  <Link href={`/products/${product.id}`} className="block">
                    <div className={`group bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer ${
                      viewMode === 'list' ? 'flex gap-6' : ''
                    }`}>
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-square'}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <span className={`absolute top-3 left-3 text-white text-xs font-medium px-2 py-1 rounded-full ${
                        product.badge === 'New Arrival' ? 'bg-green-500' :
                        product.badge === 'Best Seller' ? 'bg-primary-500' :
                        product.badge === 'Limited Edition' ? 'bg-purple-500' :
                        product.badge === 'Premium' ? 'bg-gold-500' :
                        'bg-secondary-500'
                      }`}>
                        {product.badge}
                      </span>
                    )}
                    {product.originalPrice && (
                      <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
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
                          {`${product.name} - A stylish ${product.category.toLowerCase()} perfect for any occasion. Features ${product.tags && product.tags.length > 0 ? product.tags.slice(0, 2).join(' and ') : 'modern'} design elements.`}
                        </p>
                        <button className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors">
                          Add to Cart
                        </button>
                      </div>
                    )}
                  </div>
                    </div>
                  </Link>
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