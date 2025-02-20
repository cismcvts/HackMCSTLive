"use client"

import type React from "react"
import { useState } from "react"
import { Search, User, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

const NavItem = ({ children }: { children: React.ReactNode }) => (
  <motion.li
    className="relative mx-2 cursor-pointer font-medium text-gray-700 transition-colors hover:text-blue-600"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="relative">
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
    </span>
  </motion.li>
)

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className="relative flex items-center justify-between bg-black px-6 py-4 shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        {/* <div className="mr-4 h-10 w-10 rounded-full bg-gradient-to-br from-white via-red-400 to-black shadow-inner" /> */}
        <span className="text-xl font-bold text-white"></span>
      </div>

      {/*
      <ul className="flex items-center space-x-1">
        <NavItem>Test</NavItem>
        <NavItem>Products</NavItem>
        <NavItem>Services</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </ul> */}

      {/* ETC acc and */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-full bg-white py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-400 to-purple-500" />
    </nav>
  )
}

