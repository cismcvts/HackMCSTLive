import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Carousel from "../components/Caro"

function Info1() {
  useGSAP(() => {
    gsap.to(".navdext", {
      opacity: 1,
      duration: 2,
      ease: "power1.out",
    })
  })

  return (
    <div
      id="about"
      className="bg-transparent text-black  text-center pt-9 pb-9 overheadDv bg-white d-flex flex-column justify-content-center align-items-center my-4"
    >
      <div className="text-center mb-16 relative">
        <h2 className="text-3xl md:text-4xl mb-4 text-red-600">
          Hack Your Dreams
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          HackMCST is an annual 12-hour hackathon at Morris County School of Technology hosted by the Computer and
          Information Sciences Academy. Students from grades 7 to 12 are given the opportunity to build, or "hack
          together", various apps, videogames, networks, or even robots! The event is 100% free (provided you bring your
          own technology), and lunch, dinner, and snacks are provided at no extra cost. Various workshops are held each
          year for hackers of all skill levels to learn new things, and final projects are judged at the end of the
          night, with the best projects winning various prizes!
        </p>
        <div className="absolute left-1/2 -bottom-4 w-32 h-1 bg-gradient-to-r from-red-600/0 via-red-600 to-red-600/0 transform -translate-x-1/2" />
      </div>
      <div className="w-100 d-flex justify-content-center my-4">
        <div className="text-center">
          <div className="navdext opacity-0">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info1

