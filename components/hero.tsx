import { useRef } from "react"
import Sky3d from "@/components/Sky3d"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Info1 from "./info1"
import Info2 from "./info2"
import Info3 from "./info3"
import Info4 from "./info4"
import PreviousWinners from "./previouswinners"
import Sponsors from "./sponosrs"
import Footer from "./footer"
import Bento from "./bentogrid"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    ScrollTrigger.getAll().forEach((st) => st.kill())

    const heroTl = gsap.timeline()
    heroTl.set(".hero", { opacity: 1 })
    heroTl.fromTo(
      ".herotext",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
      },
    )
    heroTl.fromTo(
      ".captionherotext",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.inOut",
      },
      "-=1.5",
    )

    const sections = gsap.utils.toArray<HTMLElement>(".content-section, .content-section-spade")
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
          ease: "power2.out",
        }),
      })

      if (index > 0) {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          markers: false,
          onEnter: () => {
            gsap.to(sections[index - 1], {
              opacity: 0,
              duration: 0.5,
              y: -50,
            })
          },
          onLeaveBack: () => {
            gsap.to(sections[index - 1], {
              opacity: 1,
              duration: 0.5,
              y: 0,
            })
          },
        })
      }
    })

    ScrollTrigger.create({
      trigger: sections[0],
      start: "top center",
      end: "bottom center",
      markers: false,
      onEnter: () => {
        gsap.to(".hero", { opacity: 0, duration: 0.5 })
      },
      onLeaveBack: () => {
        gsap.to(".hero", { opacity: 1, duration: 0.5 })
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="hero opacity-0 h-screen sticky top-0 overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <Sky3d />
        </div>
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center">
          <div className="relative w-full flex flex-col items-center">
            <h1
              className="herotext text-red-500 font-medium 
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
              text-center px-4"
            >
              hackMCST X
            </h1>
            <div
              className="captionherotext text-white font-medium 
              text-lg sm:text-xl md:text-2xl lg:text-3xl
              mt-4 sm:mt-6 md:mt-8 lg:mt-10
              text-center px-4"
            >
              April 26th, 2025
            </div>
          </div>
        </div>
      </div>

      <div className="content-section relative z-10 bg-transparent min-h-screen flex items-center justify-center w-full -mt-12 -mb-16">
        <br />
      </div>

      <div className="content-section relative z-10 bg-transparent min-h-screen flex items-center justify-center w-full -mt-16 -mb-16">
        <div className="container mx-auto text-center px-4">
          <Bento />
        </div>
      </div>

      <div className="content-section relative z-10 bg-transparent min-h-screen flex items-center justify-center w-full -mt-16 -mb-16">
        <div className="container mx-auto text-center px-4">
          <Info1 />
        </div>
      </div>

      <div className="content-section relative z-10 bg-transparent min-h-screen flex items-center justify-center w-full -mt-16 -mb-16">
        <div className="container mx-auto text-center px-4">
          <Info3 />
        </div>
      </div>

      <div className="content-section-spade container mx-auto text-center px-4">
      <PreviousWinners />
    </div>

      <div className="content-section-spade relative z-10 bg-transparent flex items-center justify-center w-full -mt-16 -mb-16">
        <div className="container mx-auto text-center px-4">
          <Info2 />
        </div>
      </div>

      <div className="content-section relative z-10 bg-transparent min-h-screen flex items-center justify-center w-full -mt-16 -mb-16">
        <div className="container mx-auto text-center px-4">
          <Info4 />
        </div>
      </div>

      <div className="content-section relative bg-transparent flex items-center justify-center w-full">
        <div className="container mx-auto text-center px-4">
          <Sponsors />
        </div>
      </div>

      <Footer />

    </div>


    
  )

  
}

