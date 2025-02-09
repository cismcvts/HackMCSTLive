"use client";

import Sky3d from "@/components/Sky3d";
import { Navbar } from "@/components/Navbar";
import GlowButton from "@/components/GlowButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (screenWidth <= 768) {
      tl.to(".herotext", {
        x: 0, 
        y: screenHeight / 2 - 200, 
        duration: 0.1,
      });
    } else {
      tl.to(".herotext", {
        y: screenHeight / 2 - 900, 
        duration: 0.1,
      });
    }

    tl.to(".herotext", {
      opacity: 1,
      duration: 1,
    })

    tl.to(".bigtxt" , {
      opacity: 1,
      color: "white",
      duration: 1,
    })

  }, []);

  return (
    <div className="relative h-screen w-screen">
      <div className="inset-0 z-0 scroll-container">
        <Sky3d />
      </div>
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
      </div>
      <div className="absolute inset-x-0 bottom-5 z-10 px-4 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1 className="herotext opacity-0 text-white font-custom">
            Make the <span className="mx-3">Next</span> <span className="mx-3 bg-black bigtxt opacity-0 rounded-xl ">Big</span> Thing.
          </h1>
        </div>

        <div className="">
          <GlowButton />
        </div>

      </div>
    </div>
  );
}