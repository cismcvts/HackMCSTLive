"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Testimonial {
  quote: string
  author: string
  location: string
}

export default function Info4() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "I remember seeing so many kids working on so many creative and unique projects. It was amazing to see others who enjoyed computer science and to see what others could come up with was just amazing. That experience made me realize how cool computer science could be and what I could do with it.",
      author: "Afnan",
      location: "Parsippany",
    },
    {
      quote:
        "My Hackathon experience was nothing short of amazing! My favorite parts were the collaboration between me and teammates, seeing the end result of our project, and how enjoyable the environment is. hackMCST is the best and I definitely recommend joining!",
      author: "Yashi",
      location: "Parsippany",
    },
    {
      quote:
        "Participating in hackMCST is a highly enriching experience, characterized by a dynamic environment that seamlessly integrates STEM skills with teamwork, problem-solving, and continuous learning. The atmosphere is vibrant, showcasing a diverse array of groups and their impressive innovations.",
      author: "Adithi",
      location: "Parsippany",
    },
    {
      quote:
        "As a student in the Academy for Computer and Information Sciences at the Morris County School of Technology, I thought HackMCST's workshops would teach concepts already in my arsenal. I was wrong; HackMCST's workshops offered me a wide range of curricula I was unfamiliar with and new to.",
      author: "Brayden",
      location: "Parsippany",
    },
    {
      quote:
        "During the two years I participated in hackMCST, I had a great time. I learned new skills in various workshops, and I got to work with my friends to put together our projects, some of which I have used in my own personal endeavors since.",
      author: "Matthew",
      location: "Pequannock",
    },
    {
      quote:
        "Our team of sophomores placed 1st in HackMCST 2023 under the Artificial Intelligence category. For our project, we hacked together a simple AI audio transcripter tool, precise down to the millisecond, that could be applied for audio editing purposes.",
      author: "Mihir",
      location: "Morristown",
    },
    {
      quote:
        "HackMCST has been a wonderful experience. Not only did I have fun and meet new people, but I also learned many computer science and electrical engineering related concepts. I would highly recommend HackMCST to anyone and everyone.",
      author: "Jash",
      location: "Parsippany",
    },
    {
      quote:
        "hackMCST exposed me to various projects and ideas that other people have been working on. It helped me realize what goes into developing and deploying a project. The workshops also helped me learn new skills that I use to this day.",
      author: "Nishit",
      location: "Parsippany",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timerRef = useRef<number | null>(null)

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, testimonials.length])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, testimonials.length])

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    timerRef.current = window.setInterval(() => {
      nextSlide()
    }, 8000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [nextSlide])

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black/40 to-black/60 rounded-xl -z-10" />

      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card className="border-0 bg-transparent shadow-none">
                <CardContent className="p-6 md:p-10">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-red-600/30 rounded-full blur-xl" />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-700/20 rounded-full blur-xl" />

                    <blockquote className="relative z-10">
                      <div className="text-4xl text-red-600 font-serif leading-tight mb-2">"</div>
                      <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed">{testimonial.quote}</p>
                      <footer className="flex items-center mt-4">
                        <div className="w-10 h-1 bg-gradient-to-r from-red-600 to-red-900 mr-3" />
                        <div>
                          <p className="font-semibold text-white">{testimonial.author}</p>
                          <p className="text-sm text-white/70">{testimonial.location}</p>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <Button
          onClick={prevSlide}
          variant="outline"
          size="icon"
          className="bg-black/50 border-red-900/50 text-white hover:bg-red-950/30 hover:text-red-200"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true)
                setCurrentIndex(index)
                setTimeout(() => setIsAnimating(false), 500)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-red-600 w-4" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          variant="outline"
          size="icon"
          className="bg-black/50 border-red-900/50 text-white hover:bg-red-950/30 hover:text-red-200"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

