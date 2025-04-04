"use client"

import Hero from "@/components/hero"
import Navbar from "@/components/Navbar"
export default function Home() {

  return (
    <main className="relative min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="relative">
        <Hero />
      </div>
    </main>
  )
}

