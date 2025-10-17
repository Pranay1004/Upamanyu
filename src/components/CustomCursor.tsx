import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isProjectHover, setIsProjectHover] = useState(false)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0
    let trailX = 0
    let trailY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      const target = e.target as HTMLElement
      const isInteractive =
        target.closest('a, button, .project-card, input, textarea, .magnetic') !== null
      const isProject = target.closest('.project-card') !== null

      setIsHovering(isInteractive)
      setIsProjectHover(isProject)

      if (ringRef.current && isInteractive) {
        ringRef.current.classList.add('animate')
        setTimeout(() => {
          ringRef.current?.classList.remove('animate')
        }, 600)
      }
    }

    const animateCursor = () => {
      const speed = 0.2
      const trailSpeed = 0.12

      cursorX += (mouseX - cursorX) * speed
      cursorY += (mouseY - cursorY) * speed

      trailX += (mouseX - trailX) * trailSpeed
      trailY += (mouseY - trailY) * trailSpeed

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`
      }

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`
      }

      requestAnimationFrame(animateCursor)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animateCursor()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor-spotlight"
        style={{
          width: isHovering ? '40px' : '20px',
          height: isHovering ? '40px' : '20px',
          background: isProjectHover
            ? 'radial-gradient(circle, rgba(255, 107, 53, 0.95) 0%, rgba(255, 107, 53, 0.4) 60%, transparent 70%)'
            : 'radial-gradient(circle, rgba(0, 240, 255, 0.95) 0%, rgba(0, 240, 255, 0.4) 60%, transparent 70%)',
        }}
      />
      <div
        ref={trailRef}
        className="cursor-trail"
        style={{
          width: isHovering ? '16px' : '10px',
          height: isHovering ? '16px' : '10px',
          background: isProjectHover ? 'rgba(255, 107, 53, 0.45)' : 'rgba(0, 240, 255, 0.45)',
        }}
      />
      <div ref={ringRef} className={`cursor-ring ${isProjectHover ? 'project' : ''}`} />
    </>
  )
}
