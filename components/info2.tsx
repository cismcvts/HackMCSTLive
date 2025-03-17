import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Info2() {
  useGSAP(() => {
    gsap.to(".navdext", {
      opacity: 1,
      duration: 2,
      ease: "power3.out",
    })
  })

  return (
    <div id="documentary" className=' text-black info1txt fontarchytype text-center overheadDv d-flex flex-column justify-content-center align-items-center my-4'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-200 bg-clip-text text-transparent">
          A Look Into the Past
        </h2>
      <p className="text-base pt-1 pb-4 text-balance">
        Check out this brief overview of 2023's hackMCST VIII, featuring an ambitious project.
      </p>
      <div className='w-100 d-flex justify-content-center my-4'>
        <div className='text-center'>
          <div className='navdext opacity-0'>
            <div className="relative " style={{ maxWidth: "640px", margin: "0 auto" }}>
              <div className="relative pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://drive.google.com/file/d/1Fm1XiBBRFAbVqij9-JgTpAn42fWwYZrJ/preview" 
                  title="hackMCST VIII Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info2;