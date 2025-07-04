'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ProductCard } from '../../components/ProductCard'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import { Badge } from '../../components/ui/badge'
import { Search, Filter, Grid, List } from 'lucide-react'

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

const products = [
  {
    id: 1,
    name: '樱花和服套装',
    price: 45.99,
    images: ['/images/products/sakura-kimono.jpg', '/images/products/sakura-kimono-2.jpg'],
    rating: 4.9,
    reviews: 127,
    description: '精美的樱花主题和服，采用优质面料制作，细节精致，完美适合春季主题展示。',
    category: '传统服饰',
    tags: ['和服', '樱花', '春季', '传统'],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: '街头潮流套装',
    price: 39.99,
    images: ['/images/products/streetwear-set.jpg', '/images/products/streetwear-set-2.jpg'],
    rating: 4.8,
    reviews: 89,
    description: '现代街头风格套装，包含连帽衫和牛仔裤，展现年轻活力的都市风格。',
    category: '休闲服饰',
    tags: ['街头', '潮流', '休闲', '现代'],
    inStock: true,
    featured: false
  },
  {
    id: 3,
    name: '优雅晚礼服',
    price: 52.99,
    images: ['/images/products/elegant-dress.jpg', '/images/products/elegant-dress-2.jpg'],
    rating: 4.9,
    reviews: 156,
    description: '华丽的晚礼服设计，适合特殊场合，精致的刺绣和优雅的剪裁。',
    category: '正式服饰',
    tags: ['晚礼服', '优雅', '正式', '特殊场合'],
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: '可爱学院风',
    price: 34.99,
    images: ['/images/products/school-uniform.jpg', '/images/products/school-uniform-2.jpg'],
    rating: 4.7,
    reviews: 203,
    description: '经典学院风制服，包含上衣、裙子和配件，展现青春活力。',
    category: '学院风',
    tags: ['学院', '制服', '青春', '经典'],
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: '冬季保暖套装',
    price: 48.99,
    images: ['/images/products/winter-coat.jpg', '/images/products/winter-coat-2.jpg'],
    rating: 4.8,
    reviews: 92,
    description: '温暖舒适的冬季外套，配有毛绒内衬，完美适合寒冷季节。',
    category: '季节服饰',
    tags: ['冬季', '保暖', '外套', '毛绒'],
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: '夏日清新装',
    price: 29.99,
    images: ['/images/products/summer-dress.jpg', '/images/products/summer-dress-2.jpg'],
    rating: 4.6,
    reviews: 178,
    description: '轻盈透气的夏季连衣裙，清新的色彩和舒适的面料。',
    category: '季节服饰',
    tags: ['夏季', '清新', '连衣裙', '透气'],
    inStock: true,
    featured: false
  },
  {
    id: 7,
    name: '节日庆典装',
    price: 58.99,
    images: ['/images/products/festival-outfit.jpg', '/images/products/festival-outfit-2.jpg'],
    rating: 4.9,
    reviews: 134,
    description: '华丽的节日庆典服装，金色装饰和精美细节，适合特殊庆祝活动。',
    category: '节日服饰',
    tags: ['节日', '庆典', '华丽', '金色'],
    inStock: false,
    featured: true
  },
  {
    id: 8,
    name: '运动休闲套装',
    price: 36.99,
    images: ['/images/products/sportswear.jpg', '/images/products/sportswear-2.jpg'],
    rating: 4.5,
    reviews: 167,
    description: '舒适的运动休闲套装，适合日常活动和轻松场合。',
    category: '运动服饰',
    tags: ['运动', '休闲', '舒适', '日常'],
    inStock: true,
    featured: false
  }
]

const categories = ['全部', '传统服饰', '休闲服饰', '正式服饰', '学院风', '季节服饰', '节日服饰', '运动服饰']

export default function ZhProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === '全部' || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'newest':
          return b.id - a.id
        case 'featured':
        default:
          return b.featured ? 1 : -1
      }
    })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              所有产品
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              探索我们完整的Labubu服装系列，从传统到现代，从休闲到正式，为您的收藏娃娃找到完美的服装。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <motion.div 
            className="flex flex-col lg:flex-row gap-4 items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="搜索产品..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="选择分类" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="排序方式" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">推荐</SelectItem>
                  <SelectItem value="newest">最新</SelectItem>
                  <SelectItem value="price-low">价格：低到高</SelectItem>
                  <SelectItem value="price-high">价格：高到低</SelectItem>
                  <SelectItem value="rating">评分最高</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="flex items-center justify-between mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gray-600">
              显示 {filteredProducts.length} 个产品
            </p>
            {selectedCategory !== '全部' && (
              <Badge variant="secondary" className="ml-2">
                {selectedCategory}
              </Badge>
            )}
          </motion.div>

          {filteredProducts.length === 0 ? (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-500 text-lg mb-4">未找到匹配的产品</p>
              <Button onClick={() => { setSearchTerm(''); setSelectedCategory('全部') }}>
                清除筛选条件
              </Button>
            </motion.div>
          ) : (
            <motion.div 
              className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {filteredProducts.map((product) => (
                <motion.div key={product.id} variants={fadeInUp}>
                  <ProductCard 
                    product={product} 
                    viewMode={viewMode}
                    locale="zh"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}