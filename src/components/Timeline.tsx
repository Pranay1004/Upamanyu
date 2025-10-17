import { useEffect, useRef } from 'react'
import { timeline } from '../data'
import { Briefcase, GraduationCap } from 'lucide-react'

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (lineRef.current) {
              lineRef.current.classList.add('visible')
            }
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('is-visible')
              }, i * 180 + 600)
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
  }, [])

  return (
    <section id="timeline" ref={sectionRef} className="py-32 px-6 relative bg-space/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading text-5xl md:text-6xl font-bold text-center mb-20">
          Journey
        </h2>

        <div className="relative">
          <div ref={lineRef} className="timeline-line hidden md:block" />

          <div className="space-y-16">
            {timeline.map((item, i) => (
              <div
                key={item.title}
                className={`reveal flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2" />

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div className="timeline-dot" />
                </div>

                <div className="md:w-1/2">
                  <div className="glass-panel rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center flex-shrink-0">
                        {item.category === 'Experience' ? (
                          <Briefcase size={24} className="text-white" />
                        ) : (
                          <GraduationCap size={24} className="text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-accent-cyan font-medium mb-1">{item.organization}</p>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                          <span>{item.location}</span>
                          <span>•</span>
                          <span>{item.period}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="text-accent-cyan text-lg mt-0.5">▹</span>
                          <p className="text-gray-300 text-sm leading-relaxed">{bullet}</p>
                        </li>
                      ))}
                    </ul>
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
