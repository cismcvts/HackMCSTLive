"use client"

import { useEffect, useRef } from "react"

interface CyberBackgroundProps {
  className?: string
}

export default function CyberBackground({ className }: CyberBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = document.documentElement.clientWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas()

    window.addEventListener("resize", resizeCanvas)

    const gridSize = 40

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    let animationFrameId: number

    const render = () => {
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = "rgba(255, 0, 0, 0.1)"
      ctx.lineWidth = 1

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      particles.forEach((particle) => {

        particle.x += particle.speedX
        particle.y += particle.speedY


        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.fillStyle = `rgba(255, 0, 0, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      if (Math.random() < 0.03) {
        const startX = Math.random() * canvas.width
        const startY = Math.random() * canvas.height
        const length = Math.random() * 200 + 50
        const angle = Math.random() * Math.PI * 2

        ctx.strokeStyle = "rgba(255, 0, 0, 0.7)"
        ctx.lineWidth = Math.random() * 2 + 1
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(startX + Math.cos(angle) * length, startY + Math.sin(angle) * length)
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()


    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 ${className || ""}`}
      {...({ crossOrigin: "anonymous" } as any)}
    />
  )
  
  

}
