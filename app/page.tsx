"use client"

import Sky3d from "@/components/Sky3d";
import { Navbar } from "@/components/Navbar";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import localFont from 'next/font/local'


const sfsans = localFont({
  src: "../public/fonts/SFPRODISPLAYMEDIUM.OTF",
  variable: '--font-appl-sf-prod',
});

export default function Home() {

  
  useGSAP(() => {

    var tl = gsap.timeline()
    tl.to(".herotext",{
      x:(screen.width/2)-500,
      y:(screen.height/2)-100,
      duration: .1,
    })
    tl.to(".herotext",{
      opacity: 1,
      duration: 1,
    })

  },[])


  return (
    <div className="relative h-screen w-screen">
      <div className="olute inset-0 z-0 scroll-container">
      <Sky3d />
      </div>
  <div className="fixed top-0 left-0 w-full z-10">
      <Navbar/>
    </div>
    <div className="absolute inset-x-0 bottom-35 h-16 z-10 px-50">
      <div className="">
      <h1 className={sfsans.className+"herotext opacity-0 text-white px-20"}>HackMCST</h1>
      </div>
    </div>


    </div>
  );
}
