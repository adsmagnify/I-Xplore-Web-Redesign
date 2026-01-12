'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  startPercent?: number
  className?: string
}

export function AnimatedCounter({ end, suffix = '', startPercent = 0.6, className = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(Math.floor(end * startPercent))
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            const start = Math.floor(end * startPercent)
            const duration = 1500 // 1.5 seconds
            const increment = (end - start) / (duration / 16) // 60fps
            let current = start

            const timer = setInterval(() => {
              current += increment
              if (current >= end) {
                setCount(end)
                clearInterval(timer)
              } else {
                setCount(Math.floor(current))
              }
            }, 16)

            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, startPercent, hasAnimated])

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

