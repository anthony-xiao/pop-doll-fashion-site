'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
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
      name: "White Forest Fantasy Set",
      price: 45.99,
      originalPrice: 59.99,
      rating: 4.9,
      reviews: 234,
      badge: "Best Seller",
      description: "Enchanting white forest fantasy outfit featuring ethereal design elements and mystical accessories. Perfect for creating magical adventures with your Labubu doll.",
      images: [
        "/images/products/白森林-White-Forest/Labubu Front View.png",
        "/images/products/白森林-White-Forest/Labubu 45-Degree Angle.png",
        "/images/products/白森林-White-Forest/Labubu Back View.png",
        "/images/products/白森林-White-Forest/Labubu Lifestyle Setting.png",
        "/images/products/白森林-White-Forest/Children's Clothing Collection with Professional Background.png"
      ],
      colors: ['#FFFFFF', '#F0F8FF', '#E6E6FA'],
      sizes: ['One Size'],
      features: [
        "Premium fantasy fabric",
        "Hand-crafted details",
        "Mystical accessories included",
        "Gentle hand wash",
        "Perfect fit for Labubu dolls"
      ],
      specifications: {
        "Material": "Premium cotton blend with fantasy elements",
        "Care Instructions": "Hand wash cold, air dry",
        "Includes": "Fantasy outfit, mystical accessories",
        "Compatibility": "Labubu dolls (17cm)",
        "Origin": "Designed with love"
      }
    },
    {
      id: 2,
      name: "Archangel Divine Costume",
      price: 52.99,
      originalPrice: 69.99,
      rating: 4.8,
      reviews: 189,
      badge: "Limited Edition",
      description: "Divine archangel costume with celestial wings and heavenly accessories. A truly magnificent outfit for your special Labubu doll.",
      images: [
        "/images/products/大天使-Archangel/Character Front View.png",
        "/images/products/大天使-Archangel/Character 45-Degree Angle.png",
        "/images/products/大天使-Archangel/Character Back View.png",
        "/images/products/大天使-Archangel/Character Lifestyle Setting.png",
        "/images/products/大天使-Archangel/Bunny Accessories with Professional Background.png"
      ],
      colors: ['#FFD700', '#FFFFFF', '#87CEEB'],
      sizes: ['One Size'],
      features: [
        "Celestial wing design",
        "Golden halo accessory",
        "Divine fabric quality",
        "Hand-sewn details",
        "Limited edition piece"
      ],
      specifications: {
        "Material": "Celestial fabric blend",
        "Care Instructions": "Gentle hand wash only",
        "Includes": "Divine costume, wings, halo, accessories",
        "Compatibility": "Labubu dolls (17cm)",
        "Origin": "Heavenly inspired design"
      }
    },
    {
      id: 3,
      name: "Rabbit Officer Uniform",
      price: 38.99,
      originalPrice: 48.99,
      rating: 4.7,
      reviews: 156,
      badge: "Popular",
      description: "Official rabbit officer uniform with authentic details and professional accessories. Perfect for role-playing adventures.",
      images: [
        "/images/products/兔子警官-Rabbit-Officer/Character Front View.png",
        "/images/products/兔子警官-Rabbit-Officer/Character 45-Degree Angle.png",
        "/images/products/兔子警官-Rabbit-Officer/Character Back View.png",
        "/images/products/兔子警官-Rabbit-Officer/Character Lifestyle Setting.png",
        "/images/products/兔子警官-Rabbit-Officer/Doll with Professional Background.png"
      ],
      colors: ['#000080', '#C0C0C0', '#FFD700'],
      sizes: ['One Size'],
      features: [
        "Official uniform design",
        "Authentic badge details",
        "Professional accessories",
        "Durable construction",
        "Role-play ready"
      ],
      specifications: {
        "Material": "Professional uniform fabric",
        "Care Instructions": "Machine wash cold",
        "Includes": "Uniform, badge, hat, accessories",
        "Compatibility": "Labubu dolls (17cm)",
        "Origin": "Professional design"
      }
    },
    {
      id: 4,
      name: "Elegant Maid Outfit",
      price: 42.99,
      originalPrice: 54.99,
      rating: 4.8,
      reviews: 203,
      badge: "Trending",
      description: "Classic black and white maid outfit with traditional apron and headpiece. Elegant and timeless design for your Labubu doll.",
      images: [
        "/images/products/女仆装-Maid-Outfit/Character Front View.png",
        "/images/products/女仆装-Maid-Outfit/Character 45-Degree Angle.png",
        "/images/products/女仆装-Maid-Outfit/Character Back View.png",
        "/images/products/女仆装-Maid-Outfit/Character Lifestyle Setting.png",
        "/images/products/女仆装-Maid-Outfit/Black and White Dress with Professional Background.png"
      ],
      colors: ['#000000', '#FFFFFF', '#FF69B4'],
      sizes: ['One Size'],
      features: [
        "Classic maid design",
        "Traditional apron",
        "Matching headpiece",
        "Premium fabric",
        "Authentic details"
      ],
      specifications: {
        "Material": "Cotton blend with lace trim",
        "Care Instructions": "Hand wash recommended",
        "Includes": "Dress, apron, headpiece",
        "Compatibility": "Labubu dolls (17cm)",
        "Origin": "Classic inspired"
      }
    },
    {
      id: 5,
      name: "Little Swan Ballet Set",
      price: 39.99,
      originalPrice: 49.99,
      rating: 4.9,
      reviews: 178,
      badge: "New",
      description: "Graceful swan ballet costume with tutu and ballet accessories. Perfect for dance performances and elegant displays.",
      images: [
        "/images/products/小天鹅-Little-Swan/Character Front View.png",
        "/images/products/小天鹅-Little-Swan/Character 45-Degree Angle.png",
        "/images/products/小天鹅-Little-Swan/Character Back View.png",
        "/images/products/小天鹅-Little-Swan/Character Lifestyle Setting.png",
        "/images/products/小天鹅-Little-Swan/Plush Swan with Professional Background.png"
      ],
      colors: ['#FFFFFF', '#FFB6C1', '#E6E6FA'],
      sizes: ['One Size'],
      features: [
        "Ballet tutu design",
        "Swan-inspired details",
        "Dance accessories",
        "Graceful silhouette",
        "Performance ready"
      ],
      specifications: {
        "Material": "Tulle and satin blend",
        "Care Instructions": "Gentle hand wash",
        "Includes": "Ballet costume, tutu, accessories",
        "Compatibility": "Labubu dolls (17cm)",
        "Origin": "Ballet inspired"
      }
    },
    {
      id: 6,
      name: "Brown Donut Casual Set",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.6,
      reviews: 145,
      badge: "Sweet",
      description: "Adorable brown donut themed casual outfit with sweet accessories. Perfect for everyday adventures and cute photo sessions.",
      images: [
        "/images/products/棕色甜甜圈-Brown-Donut/Character Front View.png",
        "/images/products/棕色甜甜圈-Brown-Donut/Character 45-Degree Angle.png",
        "/images/products/棕色甜甜圈-Brown-Donut/Character Back View.png",
        "/images/products/棕色甜甜圈-Brown-Donut/Character Lifestyle Setting.png",
        "/images/products/棕色甜甜圈-Brown-Donut/Accessories Collection with Professional Background.png"
      ],
      colors: ['#8B4513', '#DEB887', '#F4A460'],
      sizes: ['One Size'],
      features: [
        "Donut themed design",
        "Sweet accessories",
        "Casual comfort",
        "Playful details",
        "Photo-ready"
      ],
      specifications: {
        "Material": "Soft cotton blend",
        "Care Instructions": "Machine wash cold",
        "Includes": "Casual outfit, donut accessories",
        "Compatibility": "Labubu dolls (17cm)",
        "Origin": "Sweet inspired"
      }
    },
    {
      id: 7,
      name: "White Happy Mouse Costume",
      price: 34.99,
      originalPrice: 44.99,
      rating: 4.7,
      reviews: 167,
      badge: "Cute",
      description: "Cheerful white mouse costume with adorable ears and tail. Brings joy and playfulness to your Labubu doll collection.",
      images: [
        "/images/products/白色开心鼠-White-Happy-Mouse/Character Front View.png",
        "/images/products/白色开心鼠-White-Happy-Mouse/Character 45-Degree Angle.png",
        "/images/products/白色开心鼠-White-Happy-Mouse/Character Back View.png",
        "/images/products/白色开心鼠-White-Happy-Mouse/Character Lifestyle Setting.png",
        "/images/products/白色开心鼠-White-Happy-Mouse/Doll Outfit with Professional Background.png"
      ],
      colors: ['#FFFFFF', '#FFB6C1', '#87CEEB'],
      sizes: ['One Size'],
      features: [
        "Mouse ears and tail",
        "Happy expression",
        "Soft plush material",
        "Adorable design",
        "Playful costume"
      ],
      specifications: {
        "Material": "Plush and cotton blend",
        "Care Instructions": "Hand wash recommended",
        "Includes": "Mouse costume, ears, tail",
        "Compatibility": "Labubu dolls (17cm)",
        "Origin": "Cute inspired"
      }
    },
    {
      id: 8,
      name: "Pink Little Colorful Set",
      price: 36.99,
      originalPrice: 46.99,
      rating: 4.8,
      reviews: 192,
      badge: "Vibrant",
      description: "Vibrant pink outfit with colorful accessories and matching headband. Perfect for adding a pop of color to your collection.",
      images: [
        "/images/products/粉色小炫彩-Pink-Little-Colorful/Character Front View.png",
        "/images/products/粉色小炫彩-Pink-Little-Colorful/Character 45-Degree Angle.png",
        "/images/products/粉色小炫彩-Pink-Little-Colorful/Character Back View.png",
        "/images/products/粉色小炫彩-Pink-Little-Colorful/Character Lifestyle Setting.png",
        "/images/products/粉色小炫彩-Pink-Little-Colorful/Headband and Clutch with Professional Background.png"
      ],
      colors: ['#FF69B4', '#FFB6C1', '#FF1493'],
      sizes: ['One Size'],
      features: [
        "Vibrant pink design",
        "Colorful accessories",
        "Matching headband",
        "Eye-catching style",
        "Fashion forward"
      ],
      specifications: {
        "Material": "Colorful fabric blend",
        "Care Instructions": "Machine wash cold",
        "Includes": "Pink outfit, headband, clutch",
        "Compatibility": "Labubu dolls (17cm)",
        "Origin": "Colorful inspired"
      }
    },
    {
      id: 9,
      name: "Blue Big Mouth Fish Costume",
      price: 33.99,
      originalPrice: 43.99,
      rating: 4.6,
      reviews: 134,
      badge: "Ocean",
      description: "Playful blue fish costume with big mouth design and ocean-themed accessories. Dive into underwater adventures!",
      images: [
        "/images/products/蓝色大嘴鱼-Blue-Big-Mouth-Fish/Character Front View.png",
        "/images/products/蓝色大嘴鱼-Blue-Big-Mouth-Fish/Character 45-Degree Angle.png",
        "/images/products/蓝色大嘴鱼-Blue-Big-Mouth-Fish/Character Back View.png",
        "/images/products/蓝色大嘴鱼-Blue-Big-Mouth-Fish/Character Lifestyle Setting.png",
        "/images/products/蓝色大嘴鱼-Blue-Big-Mouth-Fish/Children's Accessories with Professional Background.png"
      ],
      colors: ['#0000FF', '#87CEEB', '#4169E1'],
      sizes: ['One Size'],
      features: [
        "Big mouth fish design",
        "Ocean themed",
        "Playful costume",
        "Water-inspired colors",
        "Adventure ready"
      ],
      specifications: {
        "Material": "Water-resistant fabric",
        "Care Instructions": "Hand wash cold",
        "Includes": "Fish costume, ocean accessories",
        "Compatibility": "Labubu dolls (17cm)",
        "Origin": "Ocean inspired"
      }
    },
    {
      id: 10,
      name: "Gold V White Luxury Suit",
      price: 58.99,
      originalPrice: 74.99,
      rating: 4.9,
      reviews: 267,
      badge: "Luxury",
      description: "Elegant luxury suit with gold V details and premium white fabric. The epitome of sophistication for your Labubu doll.",
      images: [
        "/images/products/金V白色套装-Gold-V-White-Suit/Character Front View.png",
        "/images/products/金V白色套装-Gold-V-White-Suit/Character 45-Degree Angle.png",
        "/images/products/金V白色套装-Gold-V-White-Suit/Character Back View.png",
        "/images/products/金V白色套装-Gold-V-White-Suit/Character Lifestyle Setting.png",
        "/images/products/金V白色套装-Gold-V-White-Suit/Luxury Clothing Set Professional Background.png"
      ],
      colors: ['#FFFFFF', '#FFD700', '#F5F5DC'],
      sizes: ['One Size'],
      features: [
        "Luxury fabric quality",
        "Gold V detailing",
        "Premium construction",
        "Sophisticated design",
        "High-end finish"
      ],
      specifications: {
        "Material": "Premium luxury fabric",
        "Care Instructions": "Dry clean recommended",
        "Includes": "Luxury suit, gold accessories",
        "Compatibility": "Labubu dolls (17cm)",
        "Origin": "Luxury inspired"
      }
    },
    {
      id: 11,
      name: "Mario Adventure Costume",
      price: 41.99,
      originalPrice: 51.99,
      rating: 4.8,
      reviews: 198,
      badge: "Gaming",
      description: "Classic Mario-inspired adventure costume with iconic colors and gaming accessories. Ready for platform adventures!",
      images: [
        "/images/products/马里奥-Mario/Character Front View.png",
        "/images/products/马里奥-Mario/Character 45-Degree Angle.png",
        "/images/products/马里奥-Mario/Character Back View.png",
        "/images/products/马里奥-Mario/Character Lifestyle Setting.png",
        "/images/products/马里奥-Mario/Plush Accessories with Professional Background.png"
      ],
      colors: ['#FF0000', '#0000FF', '#FFFF00'],
      sizes: ['One Size'],
      features: [
        "Gaming inspired design",
        "Iconic color scheme",
        "Adventure ready",
        "Classic styling",
        "Nostalgic appeal"
      ],
      specifications: {
        "Material": "Durable gaming fabric",
        "Care Instructions": "Machine wash cold",
        "Includes": "Adventure costume, gaming accessories",
        "Compatibility": "Labubu dolls (17cm)",
        "Origin": "Gaming inspired"
      }
    },
    {
      id: 12,
      name: "Black Plaid Formal Suit",
      price: 47.99,
      originalPrice: 59.99,
      rating: 4.7,
      reviews: 156,
      badge: "Formal",
      description: "Sophisticated black plaid suit with formal accessories and elegant handbag. Perfect for special occasions and formal events.",
      images: [
        "/images/products/黑格套装-Black-Plaid-Suit/Character Front View.png",
        "/images/products/黑格套装-Black-Plaid-Suit/Character 45-Degree Angle.png",
        "/images/products/黑格套装-Black-Plaid-Suit/Character Back View.png",
        "/images/products/黑格套装-Black-Plaid-Suit/Character Lifestyle Setting.png",
        "/images/products/黑格套装-Black-Plaid-Suit/Plush Handbag with Professional Background.png"
      ],
      colors: ['#000000', '#808080', '#FFFFFF'],
      sizes: ['One Size'],
      features: [
        "Black plaid pattern",
        "Formal suit design",
        "Elegant handbag",
        "Professional look",
        "Special occasion ready"
      ],
      specifications: {
        "Material": "Formal plaid fabric",
        "Care Instructions": "Dry clean preferred",
        "Includes": "Plaid suit, handbag, formal accessories",
        "Compatibility": "Labubu dolls (17cm)",
        "Origin": "Formal inspired"
      }
    },
    {
      id: 13,
      name: "Black Little Colorful Set",
      price: 37.99,
      originalPrice: 47.99,
      rating: 4.8,
      reviews: 174,
      badge: "Chic",
      description: "Chic black outfit with colorful tweed accessories and modern styling. A perfect blend of classic and contemporary fashion.",
      images: [
        "/images/products/黑色小炫彩-Black-Little-Colorful/Character Front View.png",
        "/images/products/黑色小炫彩-Black-Little-Colorful/Character 45-Degree Angle.png",
        "/images/products/黑色小炫彩-Black-Little-Colorful/Character Back View.png",
        "/images/products/黑色小炫彩-Black-Little-Colorful/Character Lifestyle Setting.png",
        "/images/products/黑色小炫彩-Black-Little-Colorful/Tweed Accessories with Professional Background.png"
      ],
      colors: ['#000000', '#FF69B4', '#32CD32'],
      sizes: ['One Size'],
      features: [
        "Chic black design",
        "Colorful tweed accents",
        "Modern styling",
        "Contemporary fashion",
        "Versatile wear"
      ],
      specifications: {
        "Material": "Black fabric with tweed accents",
        "Care Instructions": "Hand wash recommended",
        "Includes": "Black outfit, tweed accessories",
        "Compatibility": "Labubu dolls (17cm)",
        "Origin": "Contemporary inspired"
      }
    },
    {
      id: 14,
      name: "C Brand Red Plaid Set",
      price: 44.99,
      originalPrice: 56.99,
      rating: 4.7,
      reviews: 143,
      badge: "Designer",
      description: "Designer C Brand red plaid set with premium quality and authentic styling. A must-have for fashion-forward collectors.",
      images: [
        "/images/products/C家红格子-C-Brand-Red-Plaid/Character Front View.png",
        "/images/products/C家红格子-C-Brand-Red-Plaid/Character 45-Degree Angle.png",
        "/images/products/C家红格子-C-Brand-Red-Plaid/Character Back View.png",
        "/images/products/C家红格子-C-Brand-Red-Plaid/Character Lifestyle Setting.png",
        "/images/products/C家红格子-C-Brand-Red-Plaid/Clothing Set with Professional Background.png"
      ],
      colors: ['#FF0000', '#FFFFFF', '#000000'],
      sizes: ['One Size'],
      features: [
        "Designer C Brand quality",
        "Red plaid pattern",
        "Premium materials",
        "Authentic styling",
        "Fashion forward"
      ],
      specifications: {
        "Material": "Designer plaid fabric",
        "Care Instructions": "Professional care recommended",
        "Includes": "Designer plaid set, brand accessories",
        "Compatibility": "Labubu dolls (17cm)",
        "Origin": "Designer collection"
      }
    },
    {
      id: 15,
      name: "C Brand Black Dress",
      price: 49.99,
      originalPrice: 64.99,
      rating: 4.9,
      reviews: 221,
      badge: "Elegant",
      description: "Sophisticated C Brand black dress with bow tie and elegant skirt design. The perfect choice for formal occasions.",
      images: [
        "/images/products/C家黑色连衣裙-C-Brand-Black-Dress/Character Front View.png",
        "/images/products/C家黑色连衣裙-C-Brand-Black-Dress/Character 45-Degree Angle.png",
        "/images/products/C家黑色连衣裙-C-Brand-Black-Dress/Character Back View.png",
        "/images/products/C家黑色连衣裙-C-Brand-Black-Dress/Character Lifestyle Setting.png",
        "/images/products/C家黑色连衣裙-C-Brand-Black-Dress/Bow Tie and Skirt Set with Professional Background.png"
      ],
      colors: ['#000000', '#FFFFFF', '#C0C0C0'],
      sizes: ['One Size'],
      features: [
        "Designer black dress",
        "Bow tie detail",
        "Elegant skirt design",
        "Premium quality",
        "Formal occasion ready"
      ],
      specifications: {
        "Material": "Designer dress fabric",
        "Care Instructions": "Professional care recommended",
        "Includes": "Black dress, bow tie, skirt accessories",
        "Compatibility": "Labubu dolls (17cm)",
        "Origin": "Designer collection"
      }
    },
    {
      id: 16,
      name: "D Brand Blue Dress",
      price: 46.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 187,
      badge: "Stylish",
      description: "Stylish D Brand blue dress with matching handbag and bow accessories. A complete ensemble for the fashion-conscious collector.",
      images: [
        "/images/products/D家蓝色连衣裙-D-Brand-Blue-Dress/Character Front View.png",
        "/images/products/D家蓝色连衣裙-D-Brand-Blue-Dress/Character 45-Degree Angle.png",
        "/images/products/D家蓝色连衣裙-D-Brand-Blue-Dress/Character Back View.png",
        "/images/products/D家蓝色连衣裙-D-Brand-Blue-Dress/Character Lifestyle Setting.png",
        "/images/products/D家蓝色连衣裙-D-Brand-Blue-Dress/Handbag with Bow Professional Background.png"
      ],
      colors: ['#0000FF', '#87CEEB', '#FFFFFF'],
      sizes: ['One Size'],
      features: [
        "Designer blue dress",
        "Matching handbag",
        "Bow accessories",
        "Complete ensemble",
        "Fashion forward"
      ],
      specifications: {
        "Material": "Designer blue fabric",
        "Care Instructions": "Professional care recommended",
        "Includes": "Blue dress, handbag, bow accessories",
        "Compatibility": "Labubu dolls (17cm)",
        "Origin": "Designer collection"
      }
    },
    {
      id: 17,
      name: "G Brand Coffee Dress",
      price: 51.99,
      originalPrice: 66.99,
      rating: 4.9,
      reviews: 198,
      badge: "Premium",
      description: "Premium G Brand coffee-colored dress with designer accessories and sophisticated styling. The ultimate in luxury doll fashion.",
      images: [
        "/images/products/G家咖色连衣裙-G-Brand-Coffee-Dress/Character Front View.png",
        "/images/products/G家咖色连衣裙-G-Brand-Coffee-Dress/Character 45-Degree Angle.png",
        "/images/products/G家咖色连衣裙-G-Brand-Coffee-Dress/Character Back View.png",
        "/images/products/G家咖色连衣裙-G-Brand-Coffee-Dress/Character Lifestyle Setting.png",
        "/images/products/G家咖色连衣裙-G-Brand-Coffee-Dress/Designer Accessories with Professional Background.png"
      ],
      colors: ['#8B4513', '#D2B48C', '#F5DEB3'],
      sizes: ['One Size'],
      features: [
        "Premium coffee color",
        "Designer accessories",
        "Sophisticated styling",
        "Luxury quality",
        "Ultimate fashion"
      ],
      specifications: {
        "Material": "Premium coffee-colored fabric",
        "Care Instructions": "Professional care only",
        "Includes": "Coffee dress, designer accessories",
        "Compatibility": "Labubu dolls (17cm)",
        "Origin": "Luxury designer collection"
      }
    }
  ]
  
  return products.find(p => p.id === parseInt(id))
}

const relatedProducts = [
  {
    id: 3,
    name: "Rabbit Officer Uniform",
    price: 38.99,
    originalPrice: 48.99,
    image: "/images/products/兔子警官-Rabbit-Officer/Character Front View.png",
    rating: 4.7,
    reviews: 156,
    badge: "Popular",
    colors: ['#000080', '#C0C0C0', '#FFD700']
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
    colors: ['#000000', '#FFFFFF', '#FF69B4']
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
    colors: ['#FFFFFF', '#FFB6C1', '#E6E6FA']
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
    colors: ['#8B4513', '#DEB887', '#F4A460']
  }
]

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
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