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
    seconds: 0
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
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        })
      }
    }
    timeleft()
    
    const timer = setInterval(timeleft, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div id="info" className="grid grid-cols-6 auto-rows-[120px] gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-3 row-span-2 relative rounded-xl bg-black border border-red-900/50 p-6 overflow-hidden group hover:border-red-500/50 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 to-transparent" />
          <div className="relative h-full flex flex-col justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="text-red-500 font-bold text-xl flex gap-1">
                HackMCST X Starts in
              </div>
            </div>
            <div className="text-5xl font-bold text-red-200 font-mono items-center">
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
                  {" "}{timeLeft.hours}h 
                </motion.span>
                <motion.span
                  key={`minutes-${timeLeft.minutes}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {" "}{timeLeft.minutes}m
                </motion.span>
                <motion.span
                  key={`seconds-${timeLeft.seconds}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {" "}{timeLeft.seconds}s
                </motion.span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-3 relative rounded-xl bg-black border border-red-900/50 p-4 overflow-hidden group hover:border-red-500/50 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 to-transparent" />
          <div className="relative flex items-center justify-between">
            <h2 className="text-red-500 font-bold text-6xl text-center">Register Today</h2>
            <Ticket className="h-6 w-6 text-red-500" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative rounded-xl bg-black border border-red-900/50 p-4 overflow-hidden group hover:border-red-500/50 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 to-transparent" />
          <div className="relative h-full flex flex-col justify-between">
            <Calendar className="h-5 w-5 text-red-500" />
            <p className="text-red-200 font-mono text-sm">April 26th, 2025</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-2 relative rounded-xl bg-black border border-red-900/50 p-4 overflow-hidden group hover:border-red-500/50 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 to-transparent" />
          <div className="relative h-full flex flex-col justify-between">
            <GraduationCap className="h-5 w-5 text-red-500" />
            <div>
              <h2 className="text-red-500 font-bold">Participants:</h2>
              <p className="text-red-200/70 font-mono text-xs">Grades 7-12</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="col-span-2 row-span-2 relative rounded-xl bg-black border border-red-900/50 p-6 overflow-hidden group hover:border-red-500/50 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 to-transparent" />
          <div className="relative h-full flex flex-col items-center justify-center">
            <div className="relative w-32 h-32">
              <Image src="/mainlogored.png" alt="Logo" fill className="object-contain" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-2 relative rounded-xl bg-black border border-red-900/50 p-4 overflow-hidden group hover:border-red-500/50 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 to-transparent" />
          <div className="relative h-full flex flex-col justify-between">
          <h2 className="text-red-500 font-bold">Workshops:</h2>
            <Workshop className="h-5 w-5 text-red-500" />
            <div className="grid grid-cols-2 gap-1 text-xs">
              <div className="text-red-200 font-mono">tbd</div>
              <div className="text-red-200 font-mono">tbd</div>
              <div className="text-red-200 font-mono">tbd</div>
              <div className="text-red-200 font-mono">tbd</div>


            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-2 relative rounded-xl bg-black border border-red-900/50 p-4 overflow-hidden group hover:border-red-500/50 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 to-transparent" />
          <div className="relative h-full flex flex-col justify-between">
            <Ticket className="h-5 w-5 text-red-500" />
            <div>
              <h2 className="text-red-500 font-bold">Cost to Enter:</h2>
              <p className="text-red-200/70 font-mono text-xs">$0</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-4 relative rounded-xl bg-black border border-red-900/50 p-4 overflow-hidden group hover:border-red-500/50 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 to-transparent" />
          <div className="relative h-full flex items-center gap-4">
            <Trophy className="h-6 w-6 text-red-500" />
            <h2 className="text-red-500 font-bold">Prizes:</h2>
            <div className="flex-1 grid grid-cols-3 gap-4">
              <div className="text-red-200 font-mono text-sm">1st: $300</div>
              <div className="text-red-200 font-mono text-sm">2nd: $200</div>
              <div className="text-red-200 font-mono text-sm">3rd: Amazon Gift Card</div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}