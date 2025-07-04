'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { Star, Heart, ShoppingBag, Share2, Truck, Shield, RotateCcw } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { Badge } from '../../../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs'
import { ProductCard } from '../../../components/ProductCard'
import { useCart } from '../../../contexts/CartContext'
import { useWishlist } from '../../../contexts/WishlistContext'

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

// Mock product data - in a real app, this would come from an API
const productData = {
  1: {
    id: 1,
    name: '樱花和服套装',
    price: 45.99,
    images: [
      '/images/products/sakura-kimono.jpg',
      '/images/products/sakura-kimono-2.jpg',
      '/images/products/sakura-kimono-3.jpg',
      '/images/products/sakura-kimono-4.jpg'
    ],
    rating: 4.9,
    reviews: 127,
    description: '精美的樱花主题和服，采用优质面料制作，细节精致，完美适合春季主题展示。这款和服套装包含传统的腰带、发饰和配件，让您的Labubu展现优雅的东方美学。',
    features: [
      '优质丝绸面料',
      '手工刺绣樱花图案',
      '传统和服剪裁',
      '包含腰带和发饰',
      '适合多种场合展示',
      '精美包装'
    ],
    specifications: {
      '材质': '丝绸混纺',
      '尺寸': '适合标准Labubu娃娃',
      '颜色': '樱花粉、象牙白',
      '包装': '精美礼盒装',
      '产地': '中国',
      '保养': '手洗，阴干'
    },
    category: '传统服饰',
    tags: ['和服', '樱花', '春季', '传统'],
    inStock: true,
    featured: true
  },
  2: {
    id: 2,
    name: '街头潮流套装',
    price: 39.99,
    images: [
      '/images/products/streetwear-set.jpg',
      '/images/products/streetwear-set-2.jpg',
      '/images/products/streetwear-set-3.jpg'
    ],
    rating: 4.8,
    reviews: 89,
    description: '现代街头风格套装，包含连帽衫和牛仔裤，展现年轻活力的都市风格。采用舒适面料制作，细节丰富，完美诠释当代潮流文化。',
    features: [
      '舒适棉质面料',
      '时尚连帽设计',
      '经典牛仔裤',
      '可调节帽绳',
      '多个口袋设计',
      '耐用拉链'
    ],
    specifications: {
      '材质': '纯棉',
      '尺寸': '适合标准Labubu娃娃',
      '颜色': '深蓝、黑色',
      '包装': '环保包装',
      '产地': '中国',
      '保养': '机洗，低温'
    },
    category: '休闲服饰',
    tags: ['街头', '潮流', '休闲', '现代'],
    inStock: true,
    featured: false
  }
}

const relatedProducts = [
  {
    id: 3,
    name: '优雅晚礼服',
    price: 52.99,
    images: ['/images/products/elegant-dress.jpg'],
    rating: 4.9,
    reviews: 156
  },
  {
    id: 4,
    name: '可爱学院风',
    price: 34.99,
    images: ['/images/products/school-uniform.jpg'],
    rating: 4.7,
    reviews: 203
  },
  {
    id: 5,
    name: '冬季保暖套装',
    price: 48.99,
    images: ['/images/products/winter-coat.jpg'],
    rating: 4.8,
    reviews: 92
  },
  {
    id: 6,
    name: '夏日清新装',
    price: 29.99,
    images: ['/images/products/summer-dress.jpg'],
    rating: 4.6,
    reviews: 178
  }
]

export default function ZhProductDetailPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  
  const product = productData[parseInt(params.id) as keyof typeof productData]
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">产品未找到</h1>
          <p className="text-gray-600 mb-8">抱歉，您查找的产品不存在。</p>
          <Button onClick={() => window.history.back()}>返回</Button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity
    })
  }

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0]
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Product Images */}
          <div className="space-y-4">
            <motion.div 
              className="aspect-square rounded-2xl overflow-hidden bg-gray-100"
              variants={fadeInUp}
            >
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-4 gap-4"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-pink-500' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedImage(index)}
                  variants={fadeInUp}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Product Info */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <div>
              <Badge className="mb-4">{product.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} 条评价)</span>
              </div>
              
              <p className="text-3xl font-bold text-gray-900 mb-6">
                ¥{product.price}
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-gray-700">数量:</label>
                <div className="flex items-center border rounded-lg">
                  <button 
                    className="px-3 py-2 hover:bg-gray-100"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button 
                    className="px-3 py-2 hover:bg-gray-100"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  加入购物车
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={handleWishlistToggle}
                >
                  <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? 'fill-current text-red-500' : ''}`} />
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">免费配送</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-600">品质保证</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-gray-600">30天退换</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Product Details Tabs */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="features">产品特色</TabsTrigger>
              <TabsTrigger value="specifications">规格参数</TabsTrigger>
              <TabsTrigger value="reviews">用户评价</TabsTrigger>
            </TabsList>
            
            <TabsContent value="features" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-pink-500 rounded-full" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">{key}:</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">暂无用户评价</p>
                <Button variant="outline">写评价</Button>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Related Products */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            相关推荐
          </h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {relatedProducts.map((relatedProduct) => (
              <motion.div key={relatedProduct.id} variants={fadeInUp}>
                <ProductCard product={relatedProduct} locale="zh" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}