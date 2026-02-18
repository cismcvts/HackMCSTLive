"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"

type Winner = {
  place: string
  project: string
  members: string
  image: string
}

const winners = [
  {
    place: "1st Place",
    project: "VisualAid A.I.",
    members: "Mihir Malaviya",
    image: "/image/1stplace.png",
  },
  {
    place: "2nd Place",
    project: "Construction Safeguard Toolkit",
    members: "Yashraj Iyer, Wonyul Choi, Arjun Pandey, Savinu Perera",
    image: "/image/2ndplace.png",
  },
  {
    place: "3rd Place",
    project: "Culture-Aware A.I.",
    members: "Avantika Lakshman, Karishma Shah, Medha Vavilala, Vanya Gupta",
    image: "/image/3rdplace.png",
  },
  {
    place: "Game Development - Winner",
    project: "Planet Protector",
    members: "Prabhav Kanneganti	, Sirius Morgan, Daniel,	Ivan",
    image: "/image/gamedev.png",
  },
  {
    place: "Local Solution - Winner",
    project: "Sympalyze",
    members: "Adhyaay Karnwal, Ajay Boradia	, Jai Upadhyay",
    image: "/image/localsolutionwinner.png",
  },
  {
    place: "Middle School - Winner",
    project: "Volunteer-link,",
    members: "Nirvaan, Mattias, Ryan",
    image: "/image/middleschoolwinner.png",
  },
]

const SimpleCarousel = ({ slides }: { slides: Winner[] }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState("")
  const [isMobile, setIsMobile] = useState(false)
  const [maxHeight, setMaxHeight] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const slideContainerRef = useRef<HTMLDivElement>(null)
  const prevBtnRef = useRef<HTMLButtonElement>(null)
  const nextBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, slides.length)

    const timer = setTimeout(() => {
      let highest = 0
      cardRefs.current.forEach((ref) => {
        if (ref && ref.offsetHeight > highest) {
          highest = ref.offsetHeight
        }
      })

      if (highest > 0) {
        setMaxHeight(highest)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [slides, activeIndex, isMobile])

  const slidesToShow = isMobile ? 1 : 3

  const totalPages = Math.ceil(slides.length / slidesToShow)

  const animateSlide = (direction: "next" | "prev", newIndex: number) => {
    if (isAnimating || !slideContainerRef.current) return
    setIsAnimating(true)

    const container = slideContainerRef.current
    const distance = direction === "next" ? -100 : 100
    const btnRef = direction === "next" ? nextBtnRef : prevBtnRef
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        scale: 0.9,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          gsap.set(btnRef.current, {
            scale: 1,
            backgroundColor: "transparent",
          })
        },
      })
    }

    gsap.fromTo(
      container,
      { x: 0, opacity: 1 },
      {
        x: `${distance}%`,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          setActiveIndex(newIndex)
          setSlideDirection(direction)

          gsap.set(container, { x: -distance })

          gsap.to(container, {
            x: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => {
              setIsAnimating(false)
            },
          })
        },
      },
    )
  }

  const goToSlide = (index: number) => {
    if (isAnimating) return
    const direction = index > activeIndex ? "next" : "prev"
    animateSlide(direction, index)
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
        <div ref={slideContainerRef} className="flex">
          {visibleSlides.map((slide, index) => (
            <div
              key={`slide-${activeIndex}-${index}`}
              className="px-2"
              style={{
                width: `${100 / slidesToShow}%`,
                flex: `0 0 ${100 / slidesToShow}%`,
              }}
            >
              <div
                ref={(el: HTMLDivElement | null) => {
                  cardRefs.current[index] = el
                }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-shadow duration-300"
                style={{ minHeight: maxHeight > 0 ? `${maxHeight}px` : "auto" }}
              >
                <div className="relative aspect-video">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.project}
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                    style={{ aspectRatio: "16/9" }}
                    priority={index === 0}
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-red-600 font-bold text-lg">{slide.place}</h3>
                  <h4 className="font-semibold text-gray-800">{slide.project}</h4>
                  <div className="mt-2 overflow-y-auto flex-grow">
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {slide.members}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-6 gap-4">
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-red-600 w-4" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${index + 1}`}
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PreviousWinners() {
  return (
    <section id="previouswinners" className="py-16 text-black text-center">
      <div className="container mx-auto relative">
        <div className="text-center mb-16 relative">
        <h2 className="text-3xl md:text-4xl mb-4 text-red-600">
            Congratulations To The Winners of HackMcstX!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Thanks to all those who participated!</p>
          <div className="absolute left-1/2 -bottom-4 w-32 h-1 bg-gradient-to-r from-red-600/0 via-red-600 to-red-600/0 transform -translate-x-1/2" />
        </div>
        <div className="w-full max-w-4xl mx-auto">
          <SimpleCarousel slides={winners} />
        </div>
      </div>
    </section>
  )
}
