"use client"

import React from "react"

import { useEffect, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"

interface VortexProps {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  particleCount?: number
  baseHue?: number
  rangeY?: number
  baseSpeed?: number
  rangeSpeed?: number
  baseRadius?: number
  rangeRadius?: number
  backgroundColor?: string
}

export function Vortex({
  children,
  className,
  containerClassName,
  particleCount = 700,
  baseHue = 220,
  rangeY = 100,
  baseSpeed = 0.0,
  rangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  backgroundColor = "#000000",
}: VortexProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  const rand = useCallback((n: number) => n * Math.random(), [])
  const fadeInOut = useCallback(
    (t: number, m: number) => {
      const hm = 0.5 * m
      return Math.abs(((t + hm) % m) - hm) / hm
    },
    []
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)

    const center = [w / 2, h / 2]
    const tick = { val: 0 }

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      life: number
      ttl: number
      speed: number
      radius: number
      hue: number

      constructor() {
        this.x = 0
        this.y = 0
        this.vx = 0
        this.vy = 0
        this.life = 0
        this.ttl = 0
        this.speed = 0
        this.radius = 0
        this.hue = 0
        this.reset()
      }

      reset() {
        this.x = rand(w)
        this.y = center[1] + (rand(rangeY) - rangeY * 0.5)
        this.vx = 0
        this.vy = 0
        this.life = 0
        this.ttl = 150 + rand(200)
        this.speed = baseSpeed + rand(rangeSpeed)
        this.radius = baseRadius + rand(rangeRadius)
        this.hue = baseHue + rand(60) - 30
      }

      draw() {
        if (!ctx) return
        const dx = this.x - center[0]
        const dy = this.y - center[1]
        const angle = Math.atan2(dy, dx)
        const dist = Math.sqrt(dx * dx + dy * dy)

        this.vx += Math.cos(angle + Math.PI * 0.5 + Math.sin(tick.val * 0.001 + dist * 0.01)) * 0.2
        this.vy += Math.sin(angle + Math.PI * 0.5 + Math.sin(tick.val * 0.001 + dist * 0.01)) * 0.2

        this.vx *= 0.94
        this.vy *= 0.94

        this.x += this.vx * this.speed
        this.y += this.vy * this.speed
        this.life++

        const a = fadeInOut(this.life, this.ttl) * 0.8

        ctx.save()
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${a})`
        ctx.shadowBlur = this.radius * 3
        ctx.shadowColor = `hsla(${this.hue}, 80%, 50%, ${a * 0.5})`
        ctx.fill()
        ctx.restore()

        if (this.life > this.ttl || this.x < 0 || this.x > w || this.y < 0 || this.y > h) {
          this.reset()
        }
      }
    }

    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx) return
      tick.val++

      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, w, h)

      for (const p of particles) {
        p.draw()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
      center[0] = w / 2
      center[1] = h / 2
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", handleResize)
    }
  }, [particleCount, baseHue, rangeY, baseSpeed, rangeSpeed, baseRadius, rangeRadius, backgroundColor, rand, fadeInOut])

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {children && (
        <div className={cn("relative z-10", className)}>
          {children}
        </div>
      )}
    </div>
  )
}
