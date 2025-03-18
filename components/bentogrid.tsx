"use client"

import { Calendar, Ticket, GraduationCap, WorkflowIcon as Workshop, Trophy } from "lucide-react"
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
        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-2 sm:col-span-2 lg:col-span-3 row-span-2 relative rounded-xl bg-white border border-red-300 p-3 md:p-6 overflow-hidden group hover:border-red-500 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-transparent" />
          <div className="relative h-full flex flex-col justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="text-red-600 font-bold text-base sm:text-lg md:text-xl flex gap-1">
                HackMCST 10 Starts in
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
          className="col-span-2 sm:col-span-2 lg:col-span-3 relative rounded-xl bg-white border border-red-300 p-3 md:p-4 overflow-hidden group hover:border-red-500 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-transparent" />
          <div className="relative flex items-center justify-between">
            <h2 className="text-red-600 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
              Register Today
            </h2>
            <Ticket className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-red-600" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-1 relative rounded-xl bg-white border border-red-300 p-2 md:p-4 overflow-hidden group hover:border-red-500 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-transparent" />
          <div className="relative h-full flex flex-col justify-between">
            <Calendar className="h-4 w-4 md:h-5 md:w-5 text-red-600" />
            <p className="text-red-600 font-mono text-xs md:text-sm">April 26th, 2025</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-1 sm:col-span-2 lg:col-span-2 relative rounded-xl bg-white border border-red-300 p-2 md:p-4 overflow-hidden group hover:border-red-500 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-transparent" />
          <div className="relative h-full flex flex-col justify-between">
            <GraduationCap className="h-4 w-4 md:h-5 md:w-5 text-red-600" />
            <div>
              <h2 className="text-red-600 font-bold text-xs sm:text-sm md:text-base">Participants:</h2>
              <p className="text-red-500/80 font-mono text-xs">Grades 7-12</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="col-span-2 row-span-2 relative rounded-xl bg-white border border-red-300 p-3 md:p-6 overflow-hidden group hover:border-red-500 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-transparent" />
          <div className="relative h-full flex flex-col items-center justify-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
              <Image src="/mainlogored.png" alt="Logo" fill className="object-contain" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-2 relative rounded-xl bg-white border border-red-300 p-2 md:p-4 overflow-hidden group hover:border-red-500 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-transparent" />
          <div className="relative h-full flex flex-col justify-between">
            <h2 className="text-red-600 font-bold text-xs sm:text-sm md:text-base">Workshops:</h2>
            <Workshop className="h-4 w-4 md:h-5 md:w-5 text-red-600" />
            <div className="grid grid-cols-2 gap-1 text-xs">
              <div className="text-red-500 font-mono">tbd</div>
              <div className="text-red-500 font-mono">tbd</div>
              <div className="text-red-500 font-mono">tbd</div>
              <div className="text-red-500 font-mono">tbd</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-1 sm:col-span-1 lg:col-span-2 relative rounded-xl bg-white border border-red-300 p-2 md:p-4 overflow-hidden group hover:border-red-500 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-transparent" />
          <div className="relative h-full flex flex-col justify-between">
            <Ticket className="h-4 w-4 md:h-5 md:w-5 text-red-600" />
            <div>
              <h2 className="text-red-600 font-bold text-xs sm:text-sm md:text-base">Cost to Enter:</h2>
              <p className="text-red-500/80 font-mono text-xs">$0</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-2 sm:col-span-3 lg:col-span-4 relative rounded-xl bg-white border border-red-300 p-2 md:p-4 overflow-hidden group hover:border-red-500 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-transparent" />
          <div className="relative h-full flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-red-600" />
              <h2 className="text-red-600 font-bold text-xs sm:text-sm md:text-base">Prizes:</h2>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
              <div className="text-red-500 font-mono text-xs sm:text-sm">1st: $300</div>
              <div className="text-red-500 font-mono text-xs sm:text-sm">2nd: $200</div>
              <div className="text-red-500 font-mono text-xs sm:text-sm">3rd: Amazon Gift Card</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

