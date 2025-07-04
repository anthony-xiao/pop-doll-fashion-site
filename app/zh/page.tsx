'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Heart, ShoppingBag } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const featuredProducts = [
  {
    id: 1,
    name: '樱花和服套装',
    price: 45.99,
    image: '/images/products/sakura-kimono.jpg',
    rating: 4.9,
    reviews: 127,
    badge: '热销'
  },
  {
    id: 2,
    name: '街头潮流套装',
    price: 39.99,
    image: '/images/products/streetwear-set.jpg',
    rating: 4.8,
    reviews: 89,
    badge: '新品'
  },
  {
    id: 3,
    name: '优雅晚礼服',
    price: 52.99,
    image: '/images/products/elegant-dress.jpg',
    rating: 4.9,
    reviews: 156,
    badge: '限量版'
  },
  {
    id: 4,
    name: '可爱学院风',
    price: 34.99,
    image: '/images/products/school-uniform.jpg',
    rating: 4.7,
    reviews: 203,
    badge: '推荐'
  }
]

const collections = [
  {
    name: '季节系列',
    description: '为每个季节精心设计的时尚服装',
    image: '/images/collections/seasonal.jpg'
  },
  {
    name: '节日特别款',
    description: '庆祝特殊时刻的独特设计',
    image: '/images/collections/holiday.jpg'
  },
  {
    name: '日常休闲',
    description: '舒适实用的日常穿搭选择',
    image: '/images/collections/casual.jpg'
  }
]

export default function ZhHomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div className="absolute inset-0 bg-black/20" />
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            为您的
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"> Labubu </span>
            打造时尚
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            发现为Labubu和收藏娃娃精心设计的优质服装。独特设计，精致工艺，让您的娃娃展现个性魅力。
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3">
              <ShoppingBag className="mr-2 h-5 w-5" />
              立即购买
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-pink-500 px-8 py-3">
              浏览系列
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-60"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-60"
          animate={{ 
            y: [0, 20, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-white">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              精选产品
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我们最受欢迎的设计师服装，为您的收藏娃娃带来独特魅力
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {featuredProducts.map((product) => (
              <motion.div 
                key={product.id}
                className="group cursor-pointer"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-pink-500 text-white">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="rounded-full p-2">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-gray-900 group-hover:text-pink-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900">
                    ¥{product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Collections */}
      <section className="py-20 px-4 bg-gray-50">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              精选系列
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              探索我们精心策划的服装系列，每一件都体现独特的设计理念
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {collections.map((collection, index) => (
              <motion.div 
                key={index}
                className="group cursor-pointer"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                      <p className="text-sm opacity-90">{collection.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 to-purple-600">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备好为您的Labubu打造独特风格了吗？
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            加入我们的社区，获取最新设计和独家优惠。让您的收藏娃娃成为时尚焦点。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3">
              开始购物
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-3">
              了解更多
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}