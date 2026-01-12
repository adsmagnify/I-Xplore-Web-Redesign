'use client'

import { useFadeUp } from './useFadeUp'

export function PhilosophySection() {
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

