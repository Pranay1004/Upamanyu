import { useEffect, useRef, useState } from 'react'
import CustomCursor from './components/CustomCursor'
import ParticleField from './components/ParticleField'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'

function App() {
  const [blueprintVisible, setBlueprintVisible] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const shouldShow = scrollY > 200 && scrollY < document.body.scrollHeight - window.innerHeight - 300

      setBlueprintVisible(shouldShow)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-space text-white relative">
      <CustomCursor />
      <ParticleField />
      <div
        ref={overlayRef}
        className={`blueprint-overlay ${blueprintVisible ? 'visible' : ''}`}
      />

      <Navigation />

      <main>
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Contact />
      </main>
    </div>
  )
}

export default App
