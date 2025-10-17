import { useEffect, useRef } from 'react'
import { Code2, Wind, Rocket, Cpu } from 'lucide-react'

const skills = [
  { name: 'CFD & Simulation', level: 92, icon: Wind },
  { name: 'UAV Systems', level: 88, icon: Rocket },
  { name: 'CAD & Design', level: 85, icon: Code2 },
  { name: 'Autopilot Integration', level: 82, icon: Cpu },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('is-visible')
              }, i * 150)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-5xl md:text-6xl font-bold text-center mb-20 reveal">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 rounded-hex bg-gradient-to-br from-accent-cyan/30 to-accent-purple/30 animate-float" />
              <div className="absolute inset-4 rounded-hex glass-panel flex items-center justify-center text-8xl">
                🚀
              </div>
              <div className="absolute -top-3 -right-3 w-20 h-20 border-2 border-accent-cyan rounded-full animate-pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-accent-purple rounded-full animate-pulse-glow [animation-delay:0.5s]" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed reveal">
              I'm a graduating aerospace engineer passionate about merging computational fluid
              dynamics with real-world UAV design. My work spans defense R&D labs, remote aerospace
              startups, and competitive concept challenges.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed reveal">
              From simulating vortex ring impact on micro-UAVs at DRDO to building autonomous
              fixed-wing platforms with INAV autopilots, I thrive on bridging simulation accuracy
              with hardware validation.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed reveal">
              Currently seeking opportunities in aerospace systems engineering, CFD analysis, and
              autonomous vehicle development where I can contribute to next-generation flight systems.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className="glass-panel rounded-2xl p-6 reveal hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="w-full h-2 bg-space rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent-gradient rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-sm text-accent-cyan mt-2 text-right font-medium">
                  {skill.level}%
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
