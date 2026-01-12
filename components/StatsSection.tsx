'use client'

import { AnimatedCounter } from './AnimatedCounter'
import { useFadeUp } from './useFadeUp'

export function StatsSection() {
  const { ref, isVisible } = useFadeUp()

  const stats = [
    { value: 25, label: 'Years of Operation' },
    { value: 100, label: 'Schools & Colleges' },
    { value: 1000, label: 'Tours & Camps' },
    { value: 40000, label: 'Young Minds', suffix: '+' },
  ]

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 mb-20 lg:mb-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 justify-items-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-3">
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix || ''} 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-green-700"
                />
              </div>
              <p className="text-gray-600 text-sm sm:text-base font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

