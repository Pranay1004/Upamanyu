import { useState, type FormEvent } from 'react'
import { Mail, Linkedin, Github, Send, Rocket } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [launching, setLaunching] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLaunching(true)

    try {
      // Using Formspree - replace YOUR_FORM_ID with your actual Formspree form ID
      // Get free form at: https://formspree.io/
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 4000)
      } else {
        alert('Failed to send message. Please try emailing directly.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      // Fallback: open email client
      window.location.href = `mailto:upamanyukalburgi@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`
    } finally {
      setLaunching(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-32 px-6 relative bg-gradient-to-b from-space via-space to-accent-purple/10"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading text-5xl md:text-6xl font-bold text-center mb-12">
          Let's Connect
        </h2>

        <p className="text-center text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
          I'm always open to discussing aerospace projects, CFD collaborations, or UAV development
          opportunities. Let's build something extraordinary together.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-6 py-4 glass-panel rounded-xl text-white placeholder-transparent peer focus:border-accent-cyan border-2 border-transparent transition-all duration-300 outline-none"
                  placeholder="Your Name"
                />
                <label className="absolute left-6 -top-6 text-sm text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent-cyan transition-all duration-300">
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-6 py-4 glass-panel rounded-xl text-white placeholder-transparent peer focus:border-accent-cyan border-2 border-transparent transition-all duration-300 outline-none"
                  placeholder="Your Email"
                />
                <label className="absolute left-6 -top-6 text-sm text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent-cyan transition-all duration-300">
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-6 py-4 glass-panel rounded-xl text-white placeholder-transparent peer focus:border-accent-cyan border-2 border-transparent transition-all duration-300 outline-none resize-none"
                  placeholder="Your Message"
                />
                <label className="absolute left-6 -top-6 text-sm text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent-cyan transition-all duration-300">
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={launching}
                className="w-full px-8 py-4 bg-accent-gradient rounded-full font-semibold text-white shadow-glow hover:shadow-glow-orange hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {launching ? (
                  <>
                    <Rocket className="animate-bounce" size={20} />
                    Launching...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {submitted && (
                <div className="text-center text-accent-cyan font-medium animate-fade-up">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect with me</h3>
              <div className="space-y-4">
                <a
                  href="mailto:upamanyukalburgi@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-full bg-accent-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white group-hover:text-accent-cyan transition-colors">
                      upamanyukalburgi@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/upamanyukalburgi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-full bg-accent-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Linkedin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-white group-hover:text-accent-cyan transition-colors">
                      /upamanyukalburgi
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/upamanyukalburgi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-full bg-accent-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Github size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="text-white group-hover:text-accent-cyan transition-colors">
                      /upamanyukalburgi
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-20 text-gray-500 text-sm">
        <p>© 2025 Upamanyu Kalburgi • Designed with 🚀 & React</p>
      </div>
    </section>
  )
}
