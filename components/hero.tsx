"use client"

import { useRef } from "react"
import Sky3d from "@/components/Sky3d"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    ScrollTrigger.getAll().forEach(st => st.kill())
    
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    const heroTl = gsap.timeline()
    heroTl.set(".hero", { opacity: 1 })
    heroTl.fromTo(".herotext", 
      { x: screenWidth / 2.75, y: screenHeight / 4, opacity: 0 },
      { opacity: 1, duration: 2 }
    )
    heroTl.fromTo(".captionherotext",
      { opacity: 0, y: screenHeight / 2, x: screenWidth / 2.71 },
      { opacity: 1, duration: 2, y: screenHeight / 2.75, ease: "power1.inOut" }
    )

    const sections = gsap.utils.toArray<HTMLElement>(".content-section")
    sections.forEach((section, index) => {
      gsap.set(section, { opacity: 0, y: 100 })
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        markers: false, 
        toggleActions: "play none none reverse",
        animation: gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        })
      })
    })

    ScrollTrigger.create({
      trigger: ".content-section",
      start: "top center",
      end: "+=300",
      markers: false, 
      onEnter: () => {
        gsap.to(".hero", { opacity: 0, duration: 0.5 })
      },
      onLeaveBack: () => {
        gsap.to(".hero", { opacity: 1, duration: 0.5 })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="hero opacity-0 h-screen sticky top-0 overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <Sky3d />
        </div>
        <div className="absolute top-0 left-0 z-30 text-black text-9xl font-medium herotext">
          HackMCST X
        </div>
        <div className="absolute top-0 left-0 z-30 text-black text-2xl font-medium captionherotext">
          April 26th, 2025
        </div>
      </div>
      <div className="content-section relative z-10 bg-transparent min-h-screen flex items-center justify-center w-full">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Welcome to HackMCST X</h2>
          <p className="text-xl mb-4">Join us for an exciting hackathon experience!</p>
        </div>
      </div>
      
    </div>
  )
}