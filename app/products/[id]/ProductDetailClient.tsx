'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  HeartIcon, 
  ShoppingBagIcon, 
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TruckIcon,
  ShieldCheckIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid, StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { useCart } from '../../contexts/CartContext'
import { useWishlist } from '../../contexts/WishlistContext'
import ProductCard from '../../components/ProductCard'

// Mock product data - in a real app, this would come from an API
const getProductById = (id: string) => {
  const products = [
    {
      id: 1,
      name: "Kawaii Pink Dress Set",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.8,
      reviews: 127,
      badge: "Best Seller",
      description: "Adorable pink dress set perfect for your Labubu doll. Features delicate lace details, tiny pearl buttons, and a matching hair bow. Made from premium cotton blend for durability and comfort.",
      images: [
        "/images/products/kawaii-pink-dress-1.jpg",
        "/images/products/kawaii-pink-dress-2.jpg",
        "/images/products/kawaii-pink-dress-3.jpg",
        "/images/products/kawaii-pink-dress-4.jpg"
      ],
      colors: ['#FFB6C1', '#FF69B4', '#FFC0CB'],
      sizes: ['XS', 'S', 'M'],
      features: [
        "Premium cotton blend fabric",
        "Hand-sewn details",
        "Matching accessories included",
        "Machine washable",
        "Perfect fit for Labubu dolls"
      ],
      specifications: {
        "Material": "Cotton blend (80% cotton, 20% polyester)",
        "Care Instructions": "Machine wash cold, air dry",
        "Includes": "Dress, hair bow, tiny shoes",
        "Compatibility": "Labubu dolls (17cm)",
        "Origin": "Designed in Japan"
      }
    },
    {
      id: 2,
      name: "Gothic Lolita Outfit",
      price: 32.99,
      originalPrice: 42.99,
      rating: 4.9,
      reviews: 89,
      badge: "Limited Edition",
      description: "Elegant gothic lolita ensemble with intricate black lace and deep purple accents. Perfect for collectors who love sophisticated doll fashion.",
      images: [
        "/images/products/gothic-lolita-1.jpg",
        "/images/products/gothic-lolita-2.jpg",
        "/images/products/gothic-lolita-3.jpg"
      ],
      colors: ['#2F1B69', '#000000', '#4B0082'],
      sizes: ['XS', 'S', 'M'],
      features: [
        "Intricate lace details",
        "Velvet ribbon accents",
        "Miniature corset design",
        "Gothic accessories",
        "Limited edition design"
      ],
      specifications: {
        "Material": "Velvet and lace blend",
        "Care Instructions": "Hand wash only",
        "Includes": "Dress, corset, mini hat, stockings",
        "Compatibility": "Labubu dolls (17cm)",
        "Origin": "Designed in France"
      }
    }
  ]
  
  return products.find(p => p.id === parseInt(id))
}

const relatedProducts = [
  {
    id: 3,
    name: "Fairy Tale Princess Gown",
    price: 28.99,
    originalPrice: 38.99,
    image: "/images/products/fairy-princess.jpg",
    rating: 4.7,
    reviews: 156,
    colors: ['#87CEEB', '#FFB6C1', '#DDA0DD']
  },
  {
    id: 4,
    name: "Casual Street Style Set",
    price: 19.99,
    image: "/images/products/street-style.jpg",
    rating: 4.6,
    reviews: 203,
    colors: ['#FF6347', '#32CD32', '#1E90FF']
  }
]

interface ProductDetailClientProps {
  productId: string
}

export default function ProductDetailClient({ productId }: ProductDetailClientProps) {
  const product = getProductById(productId)
  
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  
  const { addItem } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()
  
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors?.[0] || '')
      setSelectedSize(product.sizes?.[0] || '')
    }
  }, [product])
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
            Product Not Found
          </h1>
          <Link href="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }
  
  const isWishlisted = isInWishlist(product.id)
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color: selectedColor,
      size: selectedSize,
      quantity
    })
  }
  
  const handleToggleWishlist = () => {
    toggleWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images[0],
      rating: product.rating,
      reviews: product.reviews,
      badge: product.badge,
      colors: product.colors
    })
  }
  
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 header-offset pb-8">
      <div className="container-max">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-secondary-600 dark:text-secondary-400 mb-8">
          <Link href="/" className="hover:text-primary-500 transition-colors">Home</Link>
          <ChevronRightIcon className="h-4 w-4" />
          <Link href="/products" className="hover:text-primary-500 transition-colors">Products</Link>
          <ChevronRightIcon className="h-4 w-4" />
          <span className="text-secondary-900 dark:text-white">{product.name}</span>
        </nav>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div 
              className="relative aspect-[3/4] bg-secondary-50 dark:bg-dark-700 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              
              {/* Image Navigation */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : product.images.length - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-dark-700 transition-colors"
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(selectedImage < product.images.length - 1 ? selectedImage + 1 : 0)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-dark-700 transition-colors"
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </>
              )}
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.badge && (
                  <span className="bg-primary-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
                {discount > 0 && (
                  <span className="bg-accent-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    -{discount}%
                  </span>
                )}
              </div>
            </motion.div>
            
            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-24 bg-secondary-50 dark:bg-dark-700 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                      selectedImage === index
                        ? 'border-primary-500 scale-105'
                        : 'border-transparent hover:border-primary-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div className="space-y-6">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIconSolid
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating!)
                        ? 'text-accent-400'
                        : 'text-secondary-300 dark:text-secondary-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-secondary-600 dark:text-secondary-400">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            
            {/* Product Name */}
            <h1 className="text-3xl font-bold text-secondary-900 dark:text-white">
              {product.name}
            </h1>
            
            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-secondary-500 dark:text-secondary-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            
            {/* Description */}
            <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed">
              {product.description}
            </p>
            
            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-secondary-900 dark:text-white">Color</h3>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-4 transition-all ${
                        selectedColor === color
                          ? 'border-primary-500 scale-110'
                          : 'border-secondary-300 dark:border-secondary-600 hover:border-primary-400'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-secondary-900 dark:text-white">Size</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg font-medium transition-all ${
                        selectedSize === size
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                          : 'border-secondary-300 dark:border-secondary-600 text-secondary-700 dark:text-secondary-300 hover:border-primary-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="font-semibold text-secondary-900 dark:text-white">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-secondary-300 dark:border-secondary-600 rounded-lg hover:border-primary-400 transition-colors"
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                </button>
                <span className="text-lg font-semibold text-secondary-900 dark:text-white min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-secondary-300 dark:border-secondary-600 rounded-lg hover:border-primary-400 transition-colors"
                >
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 btn-primary flex items-center justify-center gap-2"
              >
                <ShoppingBagIcon className="h-5 w-5" />
                Add to Cart
              </button>
              <button
                onClick={handleToggleWishlist}
                className={`p-3 border-2 rounded-xl transition-all ${
                  isWishlisted
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-500'
                    : 'border-secondary-300 dark:border-secondary-600 text-secondary-600 dark:text-secondary-400 hover:border-primary-400'
                }`}
              >
                {isWishlisted ? (
                  <HeartIconSolid className="h-6 w-6" />
                ) : (
                  <HeartIcon className="h-6 w-6" />
                )}
              </button>
            </div>
            
            {/* Features */}
            <div className="space-y-4 pt-6 border-t border-secondary-200 dark:border-dark-600">
              <h3 className="font-semibold text-secondary-900 dark:text-white">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-secondary-700 dark:text-secondary-300">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Shipping Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-secondary-200 dark:border-dark-600">
              <div className="flex items-center gap-3 text-sm">
                <TruckIcon className="h-5 w-5 text-primary-500" />
                <div>
                  <div className="font-medium text-secondary-900 dark:text-white">Free Shipping</div>
                  <div className="text-secondary-600 dark:text-secondary-400">Orders over $50</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <ArrowPathIcon className="h-5 w-5 text-primary-500" />
                <div>
                  <div className="font-medium text-secondary-900 dark:text-white">Easy Returns</div>
                  <div className="text-secondary-600 dark:text-secondary-400">30-day policy</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <ShieldCheckIcon className="h-5 w-5 text-primary-500" />
                <div>
                  <div className="font-medium text-secondary-900 dark:text-white">Secure Payment</div>
                  <div className="text-secondary-600 dark:text-secondary-400">SSL encrypted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-secondary-200 dark:border-dark-600">
            <nav className="flex space-x-8">
              <button className="py-4 px-1 border-b-2 border-primary-500 text-primary-600 dark:text-primary-400 font-medium">
                Specifications
              </button>
            </nav>
          </div>
          
          <div className="py-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Product Specifications</h3>
                <dl className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex">
                      <dt className="font-medium text-secondary-900 dark:text-white w-1/3">{key}:</dt>
                      <dd className="text-secondary-700 dark:text-secondary-300 w-2/3">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-8">You Might Also Like</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}