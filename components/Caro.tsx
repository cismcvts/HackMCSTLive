"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  { id: 1, image: "/image/carousel-a.jpg", alt: "Slide 1" },
  { id: 2, image: "/image/carousel-b.jpg", alt: "Slide 2" },
  { id: 3, image: "/image/carousel-c.jpg", alt: "Slide 3" },
  { id: 4, image: "/image/carousel-d.jpg", alt: "Slide 4" },
  { id: 5, image: "/image/carousel-e.jpg", alt: "Slide 5" },
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Memoize handlers to prevent recreation on each render
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  // Set up autoplay with proper cleanup and dependencies
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide]) // Add nextSlide as dependency to avoid stale closures

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        aria-live="polite"
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0" aria-hidden={currentSlide !== slides.indexOf(slide)}>
            <div className="relative w-full aspect-video">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.alt}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={slides.indexOf(slide) === 0} // Load first image with priority
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
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

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index}
          />
        ))}
      </div>
    </div>
  )
}