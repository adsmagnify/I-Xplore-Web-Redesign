'use client'

import { useEffect, useRef, useState } from 'react'

// Animated Counter Component
function AnimatedCounter({ end, suffix = '', startPercent = 0.6, className = '' }: { end: number; suffix?: string; startPercent?: number; className?: string }) {
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

// Fade Up Animation Hook
function useFadeUp() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

export default function Home() {
  return (
    <>
      <main className="relative h-screen w-full overflow-hidden">
      {/* Mobile Background Image - Hidden on larger screens */}
      <div className="absolute inset-0 h-full w-full md:hidden">
        <img
          src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop"
          alt="Students trekking and learning outdoors in group activities"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Video Background - Hidden on mobile, visible on md and up */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden md:block absolute inset-0 h-full w-full object-cover"
        preload="auto"
        aria-label="Background video of students and youth participating in outdoor learning, trekking, camping, and educational travel activities"
      >
        <source
          src="/hero.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay - 50% opacity for optimal text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Transparent Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-30 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto relative flex items-center justify-between">
          {/* Logo on Left */}
          <div className="flex-shrink-0 z-10">
            <a href="/" className="text-white text-xl sm:text-2xl font-bold drop-shadow-lg hover:opacity-80 transition-opacity">
              Ixplore
            </a>
          </div>

          {/* Center Aligned Navigation Tabs */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-1 lg:space-x-2">
              <a href="#programs" className="px-4 py-2 text-white text-sm lg:text-base font-medium hover:text-green-600 transition-colors drop-shadow-md">
                Programs
              </a>
              <a href="#about" className="px-4 py-2 text-white text-sm lg:text-base font-medium hover:text-green-600 transition-colors drop-shadow-md">
                About
              </a>
              <a href="#experiences" className="px-4 py-2 text-white text-sm lg:text-base font-medium hover:text-green-600 transition-colors drop-shadow-md">
                Experiences
              </a>
              <a href="#contact" className="px-4 py-2 text-white text-sm lg:text-base font-medium hover:text-green-600 transition-colors drop-shadow-md">
                Contact
              </a>
            </div>
          </div>

          {/* Right side - Mobile menu button or spacer for balance */}
          <div className="flex-shrink-0 md:w-24">
            <button className="md:hidden text-white hover:text-green-600 transition-colors" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg leading-tight">
          Empowering Youth Through Adventure
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl drop-shadow-md px-2">
          Discover transformative outdoor experiences that inspire growth, resilience, and lifelong learning.
        </p>
        <button 
          className="px-6 py-3 sm:px-8 sm:py-4 bg-green-700 hover:bg-green-800 active:bg-green-900 text-white font-semibold text-base sm:text-lg rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation min-h-[44px] min-w-[120px]"
          aria-label="Explore our adventure programs"
        >
          Explore Programs
        </button>
      </div>
    </main>

    {/* Trust & Philosophy Section */}
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <StatsSection />

        {/* Philosophy Section */}
        <PhilosophySection />
      </div>
    </section>

    {/* Programs Section - Seamlessly connected */}
    <ProgramsSection />

    {/* Testimonials Section */}
    <TestimonialsSection />

    {/* Footer */}
    <Footer />
    </>
  )
}

// Stats Section Component
function StatsSection() {
  const { ref, isVisible } = useFadeUp()

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="grid grid-cols-2 gap-16 md:gap-24 lg:gap-32 mb-20 lg:mb-28">
        <div className="text-center">
          <div className="inline-block">
            <AnimatedCounter 
              end={15} 
              suffix="+" 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br from-green-700 via-green-600 to-green-800 bg-clip-text text-transparent"
            />
          </div>
          <p className="text-gray-600 mt-6 text-sm sm:text-base font-medium tracking-wide">Years of Experience</p>
        </div>
        <div className="text-center">
          <div className="inline-block">
            <AnimatedCounter 
              end={500} 
              suffix="+" 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br from-green-700 via-green-600 to-green-800 bg-clip-text text-transparent"
            />
          </div>
          <p className="text-gray-600 mt-6 text-sm sm:text-base font-medium tracking-wide">Schools Partnered</p>
        </div>
        <div className="text-center">
          <div className="inline-block">
            <AnimatedCounter 
              end={50000} 
              suffix="+" 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br from-green-700 via-green-600 to-green-800 bg-clip-text text-transparent"
            />
          </div>
          <p className="text-gray-600 mt-6 text-sm sm:text-base font-medium tracking-wide">Students Impacted</p>
        </div>
        <div className="text-center">
          <div className="inline-block">
            <AnimatedCounter 
              end={2000} 
              suffix="+" 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br from-green-700 via-green-600 to-green-800 bg-clip-text text-transparent"
            />
          </div>
          <p className="text-gray-600 mt-6 text-sm sm:text-base font-medium tracking-wide">Programs Conducted</p>
        </div>
      </div>
    </div>
  )
}

// Philosophy Section Component
function PhilosophySection() {
  const philosophyWords = ['DARE', 'DISCOVER', 'TRANSFORM']
  const philosophyText = "At iXplore, we believe that transformative experiences emerge when students step beyond their comfort zones, explore new perspectives, and return with newfound confidence. Our philosophy centers on three pillars that guide every journey we create."
  
  const imageRef = useFadeUp()
  const textRef = useFadeUp()
  const wordsRef = useFadeUp()

  return (
    <div className="mb-0 relative pt-16 lg:pt-24 pb-12 lg:pb-16">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Side - Experiential Image */}
        <div
          ref={imageRef.ref}
          className={`transition-all duration-1000 ease-out ${
            imageRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <div className="relative aspect-[4/5] lg:aspect-square rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/14520158/pexels-photo-14520158.jpeg"
              alt="Students in outdoor learning experience"
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        </div>

        {/* Right Side - Philosophy Content */}
        <div
          ref={textRef.ref}
          className={`transition-all duration-1000 ease-out delay-200 ${
            textRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div className="space-y-8 lg:space-y-12">
            {/* Philosophy Words */}
            <div
              ref={wordsRef.ref}
              className={`transition-all duration-1000 ease-out delay-300 ${
                wordsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="space-y-4 lg:space-y-6">
                {philosophyWords.map((word, index) => (
                  <h3
                    key={word}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none"
                    style={{
                      transitionDelay: `${400 + index * 100}ms`,
                    }}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-green-700 via-green-600 to-emerald-700">
                      {word}
                    </span>
                  </h3>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-green-700/40"></div>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light max-w-2xl">
              {philosophyText}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Programs Section Component
function ProgramsSection() {
  const programs = [
    {
      title: 'LSTC',
      subtitle: '',
      description: 'Intensive programs designed to build leadership capabilities, teamwork, and practical life skills through structured outdoor experiences.',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop',
      cta: 'Explore LSTC',
    },
    {
      title: 'Project-Based Trips',
      subtitle: '',
      description: 'Immersive experiences where students engage in meaningful projects, contributing to communities while developing critical thinking and problem-solving skills.',
      image: 'https://images.pexels.com/photos/917511/pexels-photo-917511.jpeg',
      cta: 'View Projects',
    },
    {
      title: 'Himalayan Treks',
      subtitle: '',
      description: 'Journeys through the majestic Himalayas that combine physical challenge with cultural immersion, fostering resilience and deep connection with nature.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',
      cta: 'Discover Treks',
    },
  ]

  const { ref, isVisible } = useFadeUp()

  return (
    <section className="bg-white pt-8 lg:pt-12 pb-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="group relative overflow-hidden rounded-lg bg-gray-900 aspect-[4/5] transition-all duration-700 ease-out hover:scale-[1.02]"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Soft gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-green-900/5 group-hover:bg-green-900/10 transition-colors duration-700"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10">
                  <div className="space-y-4">
                    {/* Subtitle */}
                    <p className="text-green-600 text-sm font-medium tracking-wide uppercase">
                      {program.subtitle}
                    </p>
                    
                    {/* Title */}
                    <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                      {program.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light max-w-md">
                      {program.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="pt-4">
                      <a
                        href="#"
                        className="inline-flex items-center text-white text-sm font-medium tracking-wide group/cta transition-all duration-300 hover:text-green-400"
                      >
                        <span>{program.cta}</span>
                        <svg
                          className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Testimonials Section Component
function TestimonialsSection() {
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

// Footer Component
function Footer() {
  const { ref, isVisible } = useFadeUp()

  return (
    <footer
      ref={ref}
      className="bg-gray-950 text-gray-300 py-12 lg:py-16 border-t border-gray-800"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
        transition: 'opacity 1000ms ease-out, transform 1000ms ease-out',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">iXplore</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering youth through transformative adventure and outdoor learning experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#programs" className="text-gray-400 hover:text-green-600 transition-colors text-sm">Adventure Programs</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-green-600 transition-colors text-sm">Educational Travel</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-green-600 transition-colors text-sm">Outdoor Learning</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">About</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-green-600 transition-colors text-sm">Our Story</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-green-600 transition-colors text-sm">Team</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-green-600 transition-colors text-sm">Partners</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-gray-400 hover:text-green-600 transition-colors text-sm">Get in Touch</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-green-600 transition-colors text-sm">Support</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-green-600 transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} iXplore. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-green-600 transition-colors text-sm">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-green-600 transition-colors text-sm">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

