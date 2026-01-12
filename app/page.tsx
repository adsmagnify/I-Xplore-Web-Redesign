'use client'

import { Hero } from '@/components/Hero'
import { StatsSection } from '@/components/StatsSection'
import { PhilosophySection } from '@/components/PhilosophySection'
import { ProgramsSection } from '@/components/ProgramsSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />

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
