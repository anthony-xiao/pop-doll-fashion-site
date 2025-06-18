'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  HeartIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

const footerLinks = {
  shop: [
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Collections', href: '/collections' },
  ],
  support: [
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Care Instructions', href: '/care' },
    { name: 'Shipping Info', href: '/shipping' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/story' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/popdollfashion',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.017 0C8.396 0 7.929.013 6.71.072 5.493.131 4.73.333 4.058.63a5.888 5.888 0 00-2.126 1.384 5.888 5.888 0 00-1.384 2.126C.333 4.73.131 5.493.072 6.711.013 7.929 0 8.396 0 12.017c0 3.624.013 4.09.072 5.311.059 1.217.261 1.98.558 2.65a5.888 5.888 0 001.384 2.126 5.888 5.888 0 002.126 1.384c.67.297 1.433.499 2.65.558 1.22.059 1.687.072 5.311.072 3.624 0 4.09-.013 5.311-.072 1.217-.059 1.98-.261 2.65-.558a5.888 5.888 0 002.126-1.384 5.888 5.888 0 001.384-2.126c.297-.67.499-1.433.558-2.65.059-1.22.072-1.687.072-5.311 0-3.624-.013-4.09-.072-5.311-.059-1.217-.261-1.98-.558-2.65a5.888 5.888 0 00-1.384-2.126A5.888 5.888 0 0019.933.63c-.67-.297-1.433-.499-2.65-.558C16.063.013 15.596 0 12.017 0zM12.017 2.163c3.557 0 3.98.013 5.385.066 1.299.059 2.006.277 2.476.46.622.242 1.067.532 1.533.998.466.466.756.911.998 1.533.183.47.401 1.177.46 2.476.053 1.405.066 1.828.066 5.385 0 3.557-.013 3.98-.066 5.385-.059 1.299-.277 2.006-.46 2.476a4.13 4.13 0 01-.998 1.533 4.13 4.13 0 01-1.533.998c-.47.183-1.177.401-2.476.46-1.405.053-1.828.066-5.385.066-3.557 0-3.98-.013-5.385-.066-1.299-.059-2.006-.277-2.476-.46a4.13 4.13 0 01-1.533-.998 4.13 4.13 0 01-.998-1.533c-.183-.47-.401-1.177-.46-2.476-.053-1.405-.066-1.828-.066-5.385 0-3.557.013-3.98.066-5.385.059-1.299.277-2.006.46-2.476.242-.622.532-1.067.998-1.533a4.13 4.13 0 011.533-.998c.47-.183 1.177-.401 2.476-.46 1.405-.053 1.828-.066 5.385-.066z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M12.017 5.838a6.179 6.179 0 100 12.358 6.179 6.179 0 000-12.358zM12.017 15.833a3.654 3.654 0 110-7.308 3.654 3.654 0 010 7.308z"
          clipRule="evenodd"
        />
        <circle cx={18.406} cy={5.594} r={1.44} />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@popdollfashion',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/popdollfashion',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@popdollfashion',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="bg-secondary-50 dark:bg-dark-800 border-t border-secondary-200 dark:border-dark-700">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-display font-bold gradient-text">
                  Pop Doll Fashion
                </span>
              </Link>
              <p className="text-secondary-600 dark:text-secondary-400 mb-6 leading-relaxed">
                Discover premium designer clothing and accessories for Labubu dolls and collectible figures. 
                Bringing your dolls to life with style and personality.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-secondary-600 dark:text-secondary-400">
                  <EnvelopeIcon className="h-4 w-4" />
                  <span className="text-sm">hello@popdollfashion.com</span>
                </div>
                <div className="flex items-center space-x-3 text-secondary-600 dark:text-secondary-400">
                  <PhoneIcon className="h-4 w-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-secondary-600 dark:text-secondary-400">
                  <MapPinIcon className="h-4 w-4" />
                  <span className="text-sm">Los Angeles, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h3 className="text-sm font-semibold text-secondary-900 dark:text-white uppercase tracking-wider mb-4">
                Shop
              </h3>
              <ul className="space-y-3">
                {footerLinks.shop.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-sm font-semibold text-secondary-900 dark:text-white uppercase tracking-wider mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-secondary-900 dark:text-white uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold text-secondary-900 dark:text-white uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-secondary-200 dark:border-dark-700 py-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
              Stay in the Loop
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400 mb-4 text-sm">
              Get the latest updates on new collections and exclusive offers.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-secondary-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              />
              <motion.button
                type="submit"
                className="btn-primary px-6 py-2 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-200 dark:border-dark-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-secondary-600 dark:text-secondary-400">
              <span>© 2024 Pop Doll Fashion. Made with</span>
              <HeartIcon className="h-4 w-4 text-primary-500" />
              <span>for doll lovers worldwide.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-secondary-600 dark:text-secondary-400">
                Secure payments powered by Stripe
              </span>
              <div className="flex items-center space-x-2">
                {/* Payment method icons would go here */}
                <div className="w-8 h-5 bg-secondary-200 dark:bg-dark-600 rounded"></div>
                <div className="w-8 h-5 bg-secondary-200 dark:bg-dark-600 rounded"></div>
                <div className="w-8 h-5 bg-secondary-200 dark:bg-dark-600 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}