"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const points = Array.from({ length: 5 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.2, // Slightly faster movement
      vy: (Math.random() - 0.5) * 1.2,
      radius: Math.random() * 250 + 80,
      alpha: Math.random() * 0.3 + 0.2,
    }))

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate)

      // Instead of clearing everything, we apply a fading effect to create a smoother trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)" // Slight transparency
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      points.forEach((point) => {
        point.x += point.vx
        point.y += point.vy

        if (point.x < 0 || point.x > canvas.width) point.vx *= -1
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1

        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.radius)
        gradient.addColorStop(0, `rgba(255, 0, 0, ${point.alpha})`)
        gradient.addColorStop(0.6, `rgba(139, 0, 0, ${point.alpha * 0.5})`)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/20 to-black -z-10" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)",
        }}
      />
    </>
  )
}
