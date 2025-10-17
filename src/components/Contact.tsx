import { useForm, ValidationError } from '@formspree/react'
import { Mail, Linkedin, Github, Send, Rocket } from 'lucide-react'

export default function Contact() {
  const [state, handleSubmit] = useForm('xgvndlbk')

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
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-6 py-4 glass-panel rounded-xl text-white placeholder-transparent peer focus:border-accent-cyan border-2 border-transparent transition-all duration-300 outline-none"
                  placeholder="Your Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-6 -top-6 text-sm text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent-cyan transition-all duration-300"
                >
                  Your Name
                </label>
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-6 py-4 glass-panel rounded-xl text-white placeholder-transparent peer focus:border-accent-cyan border-2 border-transparent transition-all duration-300 outline-none"
                  placeholder="Your Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-6 -top-6 text-sm text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent-cyan transition-all duration-300"
                >
                  Your Email
                </label>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-6 py-4 glass-panel rounded-xl text-white placeholder-transparent peer focus:border-accent-cyan border-2 border-transparent transition-all duration-300 outline-none resize-none"
                  placeholder="Your Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-6 -top-6 text-sm text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent-cyan transition-all duration-300"
                >
                  Your Message
                </label>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full px-8 py-4 bg-accent-gradient rounded-full font-semibold text-white shadow-glow hover:shadow-glow-orange hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {state.submitting ? (
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

              {state.succeeded && (
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
