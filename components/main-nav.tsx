"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Menu, Search, X } from "lucide-react"
import Image from 'next/image';
const mainNavItems = [
  {
    title: "Academics",
    href: "#",
    subItems: [
      { title: "Schools", href: "#" },
      { title: "Departments", href: "#" },
      { title: "Programs", href: "#" },
    ],
  },
  {
    title: "Campus",
    href: "#",
    subItems: [
      {
        title: "Libraries",
        href: "#",
        subItems: [
          { title: "Arnold Arboretum Horticultural Library", href: "#" },
          { title: "Baker Library and Special Collections", href: "#" },
          { title: "Biblioteca Berenson", href: "#" },
          { title: "Botany Libraries", href: "#" },
          { title: "Cabot Science Library", href: "#" },
        ],
      },
      {
        title: "Museums",
        href: "#",
        subItems: [
          { title: "Harvard Art Museums", href: "#" },
          { title: "Museum of Natural History", href: "#" },
          { title: "Peabody Museum", href: "#" },
        ],
      },
      { title: "Athletics", href: "#" },
    ],
  },
  { title: "In Focus", href: "#" },
  { title: "Visit", href: "#" },
  { title: "About", href: "#" },
]

export function MainNav() {
  const [activeItem, setActiveItem] = React.useState<string | null>(null)
  const [activeSubItem, setActiveSubItem] = React.useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <div className="relative">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://www.harvard.edu/wp-content/themes/core/assets/Image/theme/branding/harvard-logo.svg"
              alt="Harvard Logo"
              className="h-8"
            />
          </Link>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 hover:bg-gray-100 rounded-full md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r">
        <nav className="h-full">
          <ul className="py-2">
            {mainNavItems.map((item) => (
              <li key={item.title}>
                <button
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center justify-between ${
                    activeItem === item.title ? "bg-gray-100" : ""
                  }`}
                  onClick={() => {
                    setActiveItem(activeItem === item.title ? null : item.title)
                    setActiveSubItem(null)
                  }}
                >
                  {item.title}
                  {item.subItems && (
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${activeItem === item.title ? "rotate-90" : ""}`}
                    />
                  )}
                </button>
                <AnimatePresence>
                  {activeItem === item.title && item.subItems && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden bg-gray-50"
                    >
                      {item.subItems.map((subItem) => (
                        <li key={subItem.title}>
                          <button
                            className={`w-full px-6 py-2 text-left hover:bg-gray-100 flex items-center justify-between ${
                              activeSubItem === subItem.title ? "bg-gray-100" : ""
                            }`}
                            onClick={() => setActiveSubItem(activeSubItem === subItem.title ? null : subItem.title)}
                          >
                            {subItem.title}
                            {subItem.subItems && (
                              <ChevronRight
                                className={`w-4 h-4 transition-transform ${
                                  activeSubItem === subItem.title ? "rotate-90" : ""
                                }`}
                              />
                            )}
                          </button>
                          <AnimatePresence>
                            {activeSubItem === subItem.title && subItem.subItems && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden bg-gray-100"
                              >
                                {subItem.subItems.map((nestedItem) => (
                                  <li key={nestedItem.title}>
                                    <Link href={nestedItem.href} className="block px-8 py-2 text-sm hover:bg-gray-200">
                                      {nestedItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Content Area */}
      <main className="ml-64 pt-16 min-h-screen bg-white">
        <div className="p-8">
          <AnimatePresence mode="wait">
            {activeSubItem && (
              <motion.div
                key={activeSubItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <h1 className="text-4xl font-serif mb-4">{activeSubItem}</h1>
                <p className="text-gray-600">Content for {activeSubItem} will be displayed here.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <nav className="h-full pt-16">
              <ul className="py-2">
                {mainNavItems.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className="block px-4 py-2 hover:bg-gray-100">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

