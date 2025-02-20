import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
function Info2() {

useGSAP (() => {
    gsap.to(".navdext", {
        opacity: 1,
        duration: 2,
        ease: "power3.out",
    })
})


  return (
    <div className='bg-white info1txt text-center pt-9 pb-9 overheadDv d-flex flex-column justify-content-center align-items-center my-4'>
      <p>A Look in the Past</p>
      <p className="text-base pt-4 pb-4 text-balance">
      Check out this brief overview of last year's hackMCST VIII, featuring an ambitious project.
      </p>
      <div className='w-100 d-flex justify-content-center my-4'>
        <div className='text-center'>
        <div className='navdext opacity-0'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info2;