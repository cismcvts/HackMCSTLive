"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  { id: 1, image: "/image/carousel-a.jpg", alt: "Slide 1" },
  { id: 2, image: "/image/carousel-b.jpg", alt: "Slide 2" },
  { id: 3, image: "/image/carousel-c.jpg", alt: "Slide 3" },
  { id: 4, image: "/image/carousel-d.jpg", alt: "Slide 4" },
  { id: 5, image: "/image/carousel-e.jpg", alt: "Slide 5" },
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <img
            key={slide.id}
            src={slide.image || "/placeholder.svg"}
            alt={slide.alt}
            className="w-full h-auto object-cover"
          />
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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

