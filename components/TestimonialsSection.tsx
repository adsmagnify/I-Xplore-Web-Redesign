'use client'

import { useEffect, useRef, useState } from 'react'

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The journey with iXplore transformed how I see the world. Every moment was carefully crafted to challenge and inspire us, pushing us beyond our comfort zones while ensuring our safety and growth.",
      author: "Sarah Chen",
      role: "Student, University of California",
    },
    {
      quote: "What sets iXplore apart is their genuine care for each student's experience. The coordinators weren't just guides—they were mentors who helped us discover strengths we never knew we had.",
      author: "Michael Rodriguez",
      role: "Graduate, Stanford University",
    },
    {
      quote: "Through iXplore's programs, I learned that adventure isn't just about the destination—it's about the journey of self-discovery. The memories and lessons continue to shape my path every day.",
      author: "Emma Thompson",
      role: "Alumni, Harvard University",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000) // Change testimonial every 6 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 lg:py-32 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            What Others Have to Say
          </h2>
          <div className="w-16 h-0.5 bg-green-700 mx-auto opacity-60"></div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full px-4 sm:px-8"
                >
                  <div className="max-w-4xl mx-auto text-center">
                    {/* Quote */}
                    <blockquote className="mb-8">
                      <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed font-light italic">
                        "{testimonial.quote}"
                      </p>
                    </blockquote>

                    {/* Author */}
                    <div className="mt-10">
                      <div className="w-12 h-px bg-green-700/50 mx-auto mb-4"></div>
                      <p className="text-white font-medium text-base sm:text-lg">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-400 text-sm sm:text-base mt-1">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentIndex === index ? 'bg-green-700 w-8' : 'bg-gray-600 w-2 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

