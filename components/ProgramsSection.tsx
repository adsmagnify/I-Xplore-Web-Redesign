'use client'

import { useFadeUp } from './useFadeUp'

export function ProgramsSection() {
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
          {/* Section Heading */}
          <div className="mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Our Programs
            </h2>
          </div>

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

