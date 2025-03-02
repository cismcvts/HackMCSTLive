"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 15)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="relative w-64 flex flex-col items-center">
            {/* Glitch effect text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-red-500 mb-8 relative"
            >
              <span
                className="absolute top-0 left-0 w-full h-full text-red-500 opacity-80"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
                  animation: "glitch 1s infinite",
                  transform: "translateX(-2px)",
                }}
              >
                Loading
              </span>
              <span
                className="absolute top-0 left-0 w-full h-full text-red-300 opacity-80"
                style={{
                  clipPath: "polygon(0 45%, 100% 45%, 100% 100%, 0 100%)",
                  animation: "glitch 0.75s infinite",
                  transform: "translateX(2px)",
                }}
              >
                Loading
              </span>
              <span className="relative">Loading</span>
            </motion.div>

            {/* Progress bar container */}
            <div className="w-full h-2 bg-red-900/30 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.05 }}
                className="h-full bg-gradient-to-r from-red-700 to-red-500 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/30 to-transparent animate-[shimmer_1s_infinite]" />
              </motion.div>
            </div>

            {/* Percentage text */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              className="text-red-500/70 text-sm mt-2 font-mono"
            >
              {progress}%
            </motion.span>

            {/* Decorative elements */}
            <div className="absolute -z-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -z-10 w-64 h-64 bg-red-900/10 rounded-full blur-2xl animate-pulse delay-75" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

