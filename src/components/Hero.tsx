import { useEffect, useRef } from 'react'
import { ChevronDown, Rocket } from 'lucide-react'

export default function Hero() {
  const rocketRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!rocketRef.current) return

      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 20
      const y = (e.clientY / innerHeight - 0.5) * 20

      rocketRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${-y}deg) rotateY(${x}deg)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none" />

      <div
        ref={rocketRef}
        className="absolute top-1/4 right-1/4 opacity-20 animate-float"
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      >
        <Rocket size={240} className="text-accent-cyan" strokeWidth={1} />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-display font-bold gradient-text mb-6 animate-fade-up">
          Upamanyu Kalburgi
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 font-medium mb-4 animate-fade-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
          Aerospace Engineer & CFD Specialist
        </p>

        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
          Designing autonomous flight systems, simulating complex fluid dynamics, and pushing the
          boundaries of aerospace innovation through computational modeling and hands-on development.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 bg-accent-gradient rounded-full font-semibold text-white shadow-glow hover:shadow-glow-orange hover:scale-105 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 glass-panel rounded-full font-semibold text-accent-cyan hover:bg-accent-cyan hover:text-space transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-accent-cyan animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} strokeWidth={2.5} />
      </button>
    </section>
  )
}
