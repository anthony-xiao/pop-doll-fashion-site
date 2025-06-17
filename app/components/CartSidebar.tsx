'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../contexts/CartContext'

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { state, updateQuantity, removeItem } = useCart()

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
    } else {
      updateQuantity(id, newQuantity)
    }
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col bg-white dark:bg-dark-800 shadow-xl">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-secondary-200 dark:border-dark-600">
                      <div className="flex items-center gap-3">
                        <ShoppingBagIcon className="h-6 w-6 text-primary-500" />
                        <Dialog.Title className="text-lg font-semibold text-secondary-900 dark:text-white">
                          Shopping Cart ({state.itemCount})
                        </Dialog.Title>
                      </div>
                      <button
                        type="button"
                        className="p-2 text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-300 transition-colors"
                        onClick={onClose}
                      >
                        <XMarkIcon className="h-6 w-6" />
                      </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto px-6 py-4">
                      {state.items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                          <ShoppingBagIcon className="h-16 w-16 text-secondary-300 dark:text-secondary-600 mb-4" />
                          <h3 className="text-lg font-medium text-secondary-900 dark:text-white mb-2">
                            Your cart is empty
                          </h3>
                          <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                            Add some adorable outfits for your dolls!
                          </p>
                          <button
                            onClick={onClose}
                            className="btn-primary"
                          >
                            Continue Shopping
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <AnimatePresence>
                            {state.items.map((item) => (
                              <motion.div
                                key={`${item.id}-${item.size}-${item.color}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="flex items-center gap-4 p-4 bg-secondary-50 dark:bg-dark-700 rounded-xl"
                              >
                                {/* Product Image */}
                                <div className="relative w-16 h-20 bg-white dark:bg-dark-600 rounded-lg overflow-hidden flex-shrink-0">
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                    sizes="64px"
                                  />
                                </div>

                                {/* Product Details */}
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-medium text-secondary-900 dark:text-white truncate">
                                    {item.name}
                                  </h4>
                                  <div className="flex items-center gap-2 mt-1">
                                    {item.color && (
                                      <div className="flex items-center gap-1">
                                        <div
                                          className="w-3 h-3 rounded-full border border-secondary-300 dark:border-secondary-600"
                                          style={{ backgroundColor: item.color }}
                                        />
                                      </div>
                                    )}
                                    {item.size && (
                                      <span className="text-xs text-secondary-600 dark:text-secondary-400">
                                        Size: {item.size}
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex items-center justify-between mt-2">
                                    <span className="text-sm font-semibold text-secondary-900 dark:text-white">
                                      ${item.price.toFixed(2)}
                                    </span>
                                    
                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-2">
                                      <button
                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                        className="p-1 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                                      >
                                        <MinusIcon className="h-4 w-4" />
                                      </button>
                                      <span className="text-sm font-medium text-secondary-900 dark:text-white min-w-[2rem] text-center">
                                        {item.quantity}
                                      </span>
                                      <button
                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                        className="p-1 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                                      >
                                        <PlusIcon className="h-4 w-4" />
                                      </button>
                                      <button
                                        onClick={() => removeItem(item.id)}
                                        className="p-1 text-red-500 hover:text-red-600 transition-colors ml-2"
                                      >
                                        <TrashIcon className="h-4 w-4" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    {state.items.length > 0 && (
                      <div className="border-t border-secondary-200 dark:border-dark-600 px-6 py-4">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-lg font-semibold text-secondary-900 dark:text-white">
                            Total:
                          </span>
                          <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                            ${state.total.toFixed(2)}
                          </span>
                        </div>
                        
                        <div className="space-y-3">
                          <Link
                            href="/cart"
                            onClick={onClose}
                            className="block w-full btn-secondary text-center"
                          >
                            View Cart
                          </Link>
                          <Link
                            href="/checkout"
                            onClick={onClose}
                            className="block w-full btn-primary text-center"
                          >
                            Checkout
                          </Link>
                        </div>
                        
                        <p className="text-xs text-secondary-600 dark:text-secondary-400 text-center mt-3">
                          Free shipping on orders over $50
                        </p>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default CartSidebar