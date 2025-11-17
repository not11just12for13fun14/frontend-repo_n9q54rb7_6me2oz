import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <footer className="bg-black border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-white/60 text-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p>© {new Date().getFullYear()} Takantukan. All rights reserved.</p>
          <nav className="flex items-center gap-5">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App