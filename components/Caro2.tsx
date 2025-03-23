"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Slide {
  place: string
  project: string
  members: string
  image: string
}

interface CarouselProps {
  slides?: Slide[]
}

export default function Carousel({ slides = [] }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Define these functions with useCallback to prevent recreation on each render
  const nextSlide = useCallback(() => {
    if (slides.length === 0) return
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    if (slides.length === 0) return
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  // Set up the interval for auto-sliding
  useEffect(() => {
    if (slides.length === 0) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide, slides.length]) // Only depend on nextSlide and slides.length

  // Early return for empty slides
  if (slides.length === 0) {
    return <div className="text-center text-white">No winners to display.</div>
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden shadow-lg">
      {/* Image Carousel */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="relative w-full aspect-video">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.project}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">{slide.place}</h3>
              <h4 className="text-lg">{slide.project}</h4>
              <p className="text-sm">{slide.members}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 h-full bg-black/20 text-white px-2 hover:bg-black/40 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 h-full bg-black/20 text-white px-2 hover:bg-black/40 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

