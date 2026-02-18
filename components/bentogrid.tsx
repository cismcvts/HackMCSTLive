"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function CyberBento() {
  const [timeLeft, setTimeleft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // const workshops = [
  //   {
  //     name: "",
  //     icon: "",
  //     description: "",
  //   },
  // ]
  // const [currentWorkshopIndex, setCurrentWorkshopIndex] = useState(0)
  useEffect(() => {
    const date = new Date("April 26, 2025").getTime()
    const timeleft = () => {
      const now = new Date().getTime()
      const diff = date - now
      if (diff > 0) {
        setTimeleft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        })
      }
    }
    timeleft()

    const timer = setInterval(timeleft, 1000)
    return () => clearInterval(timer)
  }, [])


  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div
        id="info"
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 auto-rows-[minmax(100px,auto)] gap-2 md:gap-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-2 sm:col-span-2 lg:col-span-3 row-span-2 relative rounded-xl bg-white border border-red-300 p-3 md:p-6 overflow-hidden"
        >
          <div className="absolute inset-0" />
          <div className="relative h-full flex flex-col justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="text-red-600 font-bold text-base sm:text-lg md:text-xl flex gap-1">
                HackMCST X Starts in
              </div>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 font-mono items-center text-center">
              <motion.span
                key={`days-${timeLeft.days}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {timeLeft.days}d
              </motion.span>
              <motion.span
                key={`hours-${timeLeft.hours}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {" "}
                {timeLeft.hours}h
              </motion.span>
              <motion.span
                key={`minutes-${timeLeft.minutes}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {" "}
                {timeLeft.minutes}m
              </motion.span>
              <motion.span
                key={`seconds-${timeLeft.seconds}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {" "}
                {timeLeft.seconds}s
              </motion.span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-2 sm:col-span-2 lg:col-span-3 relative rounded-xl bg-white border border-red-300 p-3 md:p-4 overflow-hidden"
        >
          <div className="absolute inset-0" />
          <div className="relative flex items-center justify-between">
            <h2 className="text-red-600 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
              Register Today
            </h2>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-1 relative rounded-xl bg-white border border-red-300 p-2 md:p-4 overflow-hidden group"
        >
          <div className="absolute inset-0 " />
          <div className="relative h-full flex flex-col justify-between">
            <p className="text-red-600 font-mono text-xs md:text-sm">April 26th, 2025</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-1 sm:col-span-2 lg:col-span-2 relative rounded-xl bg-white border border-red-300 p-2 md:p-4 overflow-hidden group"
        >
          <div className="absolute inset-0 " />
          <div className="relative h-full flex flex-col justify-between">
            <div>
              <h2 className="text-red-600 font-bold text-xs sm:text-sm md:text-base">Participants:</h2>
              <p className="text-red-500/80 font-mono text-xs">Grades 7-12</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="col-span-2 row-span-2 relative rounded-xl bg-white border border-red-300 p-3 md:p-6 overflow-hidden group"
        >
          <div className="absolute inset-0" />
          <div className="relative h-full flex flex-col items-center justify-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
              <Image
                src="/mainlogored.png"
                alt="Logo"
                fill
                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-2 relative rounded-xl bg-white border border-red-300 p-2 md:p-4 overflow-hidden group"
        >
          <div className="absolute inset-0" />
          <div className="relative h-full flex flex-col justify-between">
            <h2 className="text-red-600 font-bold text-s sm:text-sm md:text-base pb-2">Workshops:</h2>
            <div className="flex-1 flex items-center justify-center">
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-1 sm:col-span-1 lg:col-span-2 relative rounded-xl bg-white border border-red-300 p-2 md:p-4 overflow-hidden group"
        >
          <div className="absolute inset-0 " />
          <div className="relative h-full flex flex-col justify-between">
            <div>
              <h2 className="text-red-600 font-bold text-xs sm:text-sm md:text-base">Cost to Enter:</h2>
              <p className="text-red-500/80 font-mono text-xs">$0</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-2 sm:col-span-3 lg:col-span-4 relative rounded-xl bg-white border border-red-300 p-2 md:p-4 overflow-hidden group"
        >
          <div className="absolute inset-0" />
          <div className="relative h-full flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <h2 className="text-red-600 font-bold text-xs sm:text-sm md:text-base">Location</h2>
            </div>
            <div className="pl-30 sm:grid-cols-3 gap-1 sm:gap-4">
              <div className=" text-center text-red-500 font-mono text-xs sm:text-sm">
                400 E Main St, Denville, NJ 07834 | Morris County School Of Technology
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
