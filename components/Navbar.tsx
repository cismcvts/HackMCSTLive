"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Info", href: pathname === "/" ? "#info" : "/#info" },
    { name: "About", href: pathname === "/" ? "#about" : "/#about" },
    { name: "FAQ", href: pathname === "/" ? "#faq" : "/#faq" },
    { name: "Previous Winners", href: pathname === "/" ? "#previouswinners" : "/#previouswinners" },
    { name: "Documentary", href: pathname === "/" ? "#documentary" : "/#documentary" },
    { name: "Testimonials", href: pathname === "/" ? "#testimonials" : "/#testimonials" },
    { name: "Sponsors", href: pathname === "/" ? "#sponsors" : "/#sponsors" },
    { name: "Register", href: "https://mcvts.jumbula.com/HackathonX/HackathonX", isButton: true },
  ]

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-gradient-to-r bg-white" />

      <div className="absolute -top-20 left-1/4 w-32 h-32 bg-red-600/20 rounded-full blur-3xl" />
      <div className="absolute -top-20 right-1/4 w-32 h-32 bg-red-800/20 rounded-full blur-3xl" />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="./" className="relative h-10 w-10">
            <Image
              src="/mainlogored.png"
              alt="logo"
              fill
              sizes="(max-width: 768px) 40px, 50px"
              priority
              className="object-contain"
            />
          </Link>
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent"></span>
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) =>
              item.isButton ? (
                <Button
                  key={item.name}
                  variant="outline"
                  className="bg-red-600 border-red-500/50 text-white hover:bg-black hover:text-white transition-colors"
                  asChild
                >
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </Button>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px bg-gradient-to-r from-red-500/0 via-red-500/70 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ),
            )}
          </div>

          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-red-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-red-950/30 backdrop-blur-sm -z-10" />
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item) =>
            item.isButton ? (
              <Button
                key={item.name}
                variant="outline"
                className="w-full mt-4 bg-red-600/10 border-red-500/50 text-red-500 hover:bg-red-600/20 hover:text-red-400 transition-colors"
                asChild
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </Button>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-red-400 hover:bg-red-900/20 block px-3 py-2 text-base font-medium rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ),
          )}
        </div>
      </div>
    </nav>
  )
}

