'use client'

export function Navbar() {
  return (
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
  )
}

