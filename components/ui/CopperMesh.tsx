'use client'

import { useEffect, useRef, useState } from 'react'

interface CopperMeshProps {
  mousePosition: { x: number; y: number }
}

export function CopperMesh({ mousePosition }: CopperMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create mesh points
    const points: Array<{ x: number; y: number; originalX: number; originalY: number }> = []
    const spacing = 80
    const cols = Math.ceil(canvas.width / spacing) + 1
    const rows = Math.ceil(canvas.height / spacing) + 1

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * spacing
        const y = j * spacing
        points.push({ x, y, originalX: x, originalY: y })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update point positions based on mouse
      points.forEach(point => {
        const mouseX = (mousePosition.x / 100) * canvas.width
        const mouseY = (mousePosition.y / 100) * canvas.height
        
        const dx = mouseX - point.originalX
        const dy = mouseY - point.originalY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 200
        
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          point.x = point.originalX + dx * force * 0.3
          point.y = point.originalY + dy * force * 0.3
        } else {
          point.x += (point.originalX - point.x) * 0.05
          point.y += (point.originalY - point.y) * 0.05
        }
      })

      // Draw connections
      ctx.strokeStyle = 'rgba(184, 115, 51, 0.1)'
      ctx.lineWidth = 1

      for (let i = 0; i < cols - 1; i++) {
        for (let j = 0; j < rows - 1; j++) {
          const current = points[i * rows + j]
          const right = points[(i + 1) * rows + j]
          const bottom = points[i * rows + (j + 1)]

          if (current && right) {
            ctx.beginPath()
            ctx.moveTo(current.x, current.y)
            ctx.lineTo(right.x, right.y)
            ctx.stroke()
          }

          if (current && bottom) {
            ctx.beginPath()
            ctx.moveTo(current.x, current.y)
            ctx.lineTo(bottom.x, bottom.y)
            ctx.stroke()
          }
        }
      }

      // Draw points
      points.forEach(point => {
        const mouseX = (mousePosition.x / 100) * canvas.width
        const mouseY = (mousePosition.y / 100) * canvas.height
        
        const dx = mouseX - point.x
        const dy = mouseY - point.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        const opacity = Math.max(0.1, Math.min(0.6, 1 - distance / 300))
        const size = Math.max(1, Math.min(4, 4 - distance / 100))
        
        ctx.fillStyle = `rgba(184, 115, 51, ${opacity})`
        ctx.beginPath()
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [mousePosition, mounted])

  // Show static background until mounted
  if (!mounted) {
    return (
      <div className="absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-br from-copper-50/10 to-copper-100/10" />
    )
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}