import { useState, useEffect, useRef } from 'react'
import { projects, filters, type ProjectCategory } from '../data'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All')
  const sectionRef = useRef<HTMLElement>(null)

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('is-visible')
              }, i * 120)
            })
          }
        })
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [activeFilter])

  useEffect(() => {
    const cards = document.querySelectorAll('.tilt-card')

    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * 8
      const rotateY = ((x - centerX) / centerX) * 8

      card.style.transform = `perspective(1200px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(12px)`
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)'
    }

    cards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMove as EventListener)
      card.addEventListener('mouseleave', handleMouseLeave as EventListener)
    })

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove as EventListener)
        card.removeEventListener('mouseleave', handleMouseLeave as EventListener)
      })
    }
  }, [filteredProjects])

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-5xl md:text-6xl font-bold text-center mb-12 reveal">
          Featured Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-16 reveal">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-accent-gradient text-white shadow-glow scale-105'
                  : 'glass-panel text-gray-300 hover:text-accent-cyan hover:border-accent-cyan/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, i) => (
            <div
              key={project.title}
              className={`project-card tilt-card glass-panel rounded-3xl p-8 reveal relative ${
                project.featured ? 'md:col-span-2' : ''
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="project-thumbnail mb-6 h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 flex items-center justify-center">
                <img
                  src={`/src/assets/${project.thumbnail}`}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-orange hover:text-accent-cyan transition-colors"
                  >
                    <ExternalLink size={22} />
                  </a>
                )}
              </div>

              <p className="text-accent-cyan font-medium mb-3">{project.subtitle}</p>
              <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

              <div className="space-y-2 mb-6">
                {project.metrics.map((metric) => (
                  <div key={metric} className="flex items-start gap-2">
                    <span className="text-accent-cyan text-lg mt-0.5">▹</span>
                    <p className="text-gray-400 text-sm">{metric}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag-chip px-4 py-2 rounded-full glass-panel text-xs font-medium text-accent-cyan border border-accent-cyan/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-accent-orange/20 text-accent-orange text-sm font-semibold">
                {project.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
