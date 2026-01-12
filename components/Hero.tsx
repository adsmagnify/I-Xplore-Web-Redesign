'use client'

import { Navbar } from './Navbar'

export function Hero() {
  return (
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
      <Navbar />

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
  )
}

