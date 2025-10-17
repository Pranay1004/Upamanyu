import { useEffect, useState, useRef } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      navRefs.current.forEach((link) => {
        if (!link) return

        const rect = link.getBoundingClientRect()
        const x = e.clientX - (rect.left + rect.width / 2)
        const y = e.clientY - (rect.top + rect.height / 2)
        const distance = Math.sqrt(x * x + y * y)

        if (distance < 100) {
          const strength = (100 - distance) / 100
          const moveX = (x / distance) * strength * 12
          const moveY = (y / distance) * strength * 12
          link.style.setProperty('--mx', `${moveX}px`)
          link.style.setProperty('--my', `${moveY}px`)
          link.classList.add('is-active')
        } else {
          link.classList.remove('is-active')
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          className="text-2xl font-display font-bold gradient-text"
        >
          UK
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              ref={(el) => {
                navRefs.current[i] = el
              }}
              className="magnetic text-sm font-medium tracking-wide text-gray-300 hover:text-accent-cyan transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-accent-cyan"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-panel mt-3 mx-4 rounded-2xl p-6 space-y-4 animate-fade-up">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="block text-lg font-medium text-gray-300 hover:text-accent-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
