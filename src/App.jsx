import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <footer className="bg-gray-950 text-gray-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-lg font-bold">TakanTukan</div>
              <p className="mt-2 text-sm text-gray-400">Where Service Meets Empowerment</p>
              <div className="mt-4 grid grid-cols-4 gap-3 text-sm text-gray-400">
                <a href="#" aria-label="Facebook">Facebook</a>
                <a href="#" aria-label="Twitter">Twitter</a>
                <a href="#" aria-label="Instagram">Instagram</a>
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
              </div>
            </div>
            <div>
              <div className="font-semibold">Quick Links</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#how" className="hover:text-white">How It Works</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Blogs</a></li>
                <li><a href="#jobs" className="hover:text-white">Become a Provider</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Learn More</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Contact Us</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-400">
                <li>Thaiba Rd, Godawari 44700</li>
                <li>+977-9801655500</li>
                <li>info@ableinfotech.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs text-gray-500 border-t border-white/10 pt-6">
            <p>© {new Date().getFullYear()} TakanTukan. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a className="hover:text-white" href="#">Privacy Policy</a>
              <a className="hover:text-white" href="#">Terms & Conditions</a>
              <a className="hover:text-white" href="#">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
