'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  HeartIcon, 
  ShoppingBagIcon, 
  StarIcon,
  EyeIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import { useCart } from '../contexts/CartContext'
import { useWishlist } from '../contexts/WishlistContext'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  rating?: number
  reviews?: number
  badge?: string
  colors?: string[]
  sizes?: string[]
  purchaseCount: number
  wishlistCount: number
}

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '')
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()
  
  const isWishlisted = isInWishlist(product.id)
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: selectedColor
    })
  }

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      rating: product.rating,
      reviews: product.reviews,
      badge: product.badge,
      colors: product.colors
    })
  }

  return (
    <motion.div
      className={`group relative bg-white dark:bg-dark-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/products/${product.id}`}>
        {/* Product Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary-50 dark:bg-dark-600">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.badge && (
              <span className="bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {product.badge}
              </span>
            )}
            {discount > 0 && (
              <span className="bg-accent-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                -{discount}%
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <motion.button
            onClick={handleToggleWishlist}
            className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-dark-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isWishlisted ? (
              <HeartIconSolid className="h-5 w-5 text-primary-500" />
            ) : (
              <HeartIcon className="h-5 w-5 text-secondary-600 dark:text-secondary-300" />
            )}
          </motion.button>

          {/* Quick Actions Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/20 flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button
              onClick={handleAddToCart}
              className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full shadow-lg transition-colors"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: isHovered ? 1 : 0, 
                rotate: isHovered ? 0 : -180 
              }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingBagIcon className="h-5 w-5" />
            </motion.button>
            
            <motion.button
              className="bg-white/90 dark:bg-dark-700/90 text-secondary-700 dark:text-secondary-300 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-dark-600 transition-colors"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ 
                scale: isHovered ? 1 : 0, 
                rotate: isHovered ? 0 : 180 
              }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <EyeIcon className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating!)
                        ? 'text-accent-400 fill-current'
                        : 'text-secondary-300 dark:text-secondary-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-secondary-600 dark:text-secondary-400 ml-1">
                ({product.reviews})
              </span>
            </div>
          )}

          {/* Product Name */}
          <h3 className="font-semibold text-secondary-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {product.name}
          </h3>

          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm text-secondary-600 dark:text-secondary-400">Colors:</span>
              <div className="flex gap-1">
                {product.colors.slice(0, 4).map((color, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setSelectedColor(color)
                    }}
                    className={`w-5 h-5 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? 'border-primary-500 scale-110'
                        : 'border-secondary-300 dark:border-secondary-600 hover:border-primary-400'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
                {product.colors.length > 4 && (
                  <span className="text-xs text-secondary-500 dark:text-secondary-400 ml-1">
                    +{product.colors.length - 4}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-secondary-900 dark:text-white">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-secondary-500 dark:text-secondary-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-between text-xs text-secondary-600 dark:text-secondary-400 mt-2 pt-2 border-t border-secondary-200 dark:border-dark-600">
            <div className="flex items-center gap-1">
              <ShoppingBagIcon className="h-3 w-3" />
              <span>{product.purchaseCount} bought (7d)</span>
            </div>
            <div className="flex items-center gap-1">
              <HeartIcon className="h-3 w-3" />
              <span>{product.wishlistCount} wishlisted (7d)</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard