"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Winner = {
  place: string
  project: string
  members: string
  image: string
}

const winners = [
  {
    place: "1st Place",
    project: "Sign Speaks",
    members: "Dylan Cortegana, Veer Mangat, Siddhant Shah, & Rishi Rana",
    image: "/image/hackmcst-1stplace.png",
  },
  {
    place: "2nd Place",
    project: "Botero-Bot",
    members:
      "Dhruv Kothari, Rohan Kommareddy, Bhavyansh Shivakoti, Devan Patel, & Dhruva  Parthiban Kavithamani",
    image: "/image/hackmcst-secondplace.jpg",
  },
  {
    place: "3rd Place",
    project: "Sodifer",
    members: "Jadyn Monaco, Moosa Awais, Albert Zhang, Kyle Moy, Max Yung, Nick Klapal, & Maxon Baisley",
    image: "/image/hackmcst-3rdplace.png",
  },
  {
    place: "Sustainability - Winner",
    project: "Chef Go",
    members: "Alizeh Mero, Sheyla Kugic, Isabella Huang, & Andrea Manzanares",
    image: "/image/hackmcst-sustainability.png",
  },
  {
    place: "Healthcare - Winner",
    project: "Voice Pilot",
    members: "Shreyas Angadi, Vihas Veggalam, Alan Qu, & Ruthvik Venkatesan",
    image: "/image/hackmcst-healthcare.png",
  },
  {
    place: "Cybersecurity - Winner",
    project: "Catfishing",
    members: "Megha Srinivas, Vanya Gupta, Medha Vavilala, Srinika Pamarthy, & Avantika Pamarthy",
    image: "/image/hackmcst-cybersec.png",
  },
]

const SimpleCarousel = ({ slides }: { slides: Winner[] }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState("")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const slidesToShow = isMobile ? 1 : 3

  const totalPages = Math.ceil(slides.length / slidesToShow)

  const goToSlide = (index: number) => {
    setSlideDirection(index > activeIndex ? "next" : "prev")
    setActiveIndex(index)
  }

  const nextSlide = () => {
    setSlideDirection("next")
    setActiveIndex((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setSlideDirection("prev")
    setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getCurrentSlides = () => {
    const start = activeIndex * slidesToShow
    const end = Math.min(start + slidesToShow, slides.length)
    return slides.slice(start, end)
  }

  const visibleSlides = getCurrentSlides()

  return (
    <div className="w-full">
      <div className="relative overflow-hidden">
        <div
          className={`flex transition-all duration-300 ease-in-out ${
            slideDirection === "next" ? "animate-slide-left" : slideDirection === "prev" ? "animate-slide-right" : ""
          }`}
        >
          {visibleSlides.map((slide, index) => (
            <div
              key={`slide-${activeIndex}-${index}`}
              className="px-2"
              style={{
                width: `${100 / slidesToShow}%`,
                flex: `0 0 ${100 / slidesToShow}%`,
              }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative aspect-video">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.project}
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                    priority={index === 0}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-red-600 font-bold text-lg">{slide.place}</h3>
                  <h4 className="font-semibold text-gray-800">{slide.project}</h4>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">{slide.members}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-6 gap-4">
        <Button
          onClick={prevSlide}
          variant="outline"
          size="icon"
          className="bg-white border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700"
          aria-label="Previous slide"
          disabled={activeIndex === 0 && slideDirection !== "next"}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? "bg-red-600 w-4" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          variant="outline"
          size="icon"
          className="bg-white border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700"
          aria-label="Next slide"
          disabled={activeIndex === totalPages - 1 && slideDirection !== "prev"}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

export default function PreviousWinners() {
  return (
    <section id="previouswinners" className="py-16 text-black text-center">
      <div className="container mx-auto relative">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-200 bg-clip-text text-transparent">
            Previous Winners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">HackMCST IX</p>
          <div className="absolute left-1/2 -bottom-4 w-32 h-1 bg-gradient-to-r from-red-600/0 via-red-600 to-red-600/0 transform -translate-x-1/2" />
        </div>
        <div className="w-full max-w-4xl mx-auto">
          <SimpleCarousel slides={winners} />
        </div>
      </div>
    </section>
  )
}

