'use client'

import { useFadeUp } from './useFadeUp'

export function Footer() {
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

