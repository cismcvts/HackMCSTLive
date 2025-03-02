"use client"

import Hero from "@/components/hero"
import Navbar from "@/components/Navbar"
import CyberBackground from "../components/Spline"
import LoadingScreen from "@/components/loading"
import { useEffect, useState } from "react"

export default function Home() {

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  
  return (
    <main className="relative min-h-screen">
      <LoadingScreen />
      <CyberBackground />
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="relative">
        <Hero />
      </div>
    </main>
  )
}

