import { useState } from 'react'
import { Menu, X, Plane, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="inline-flex size-9 items-center justify-center rounded-md bg-gradient-to-tr from-orange-500 to-amber-300 text-black shadow-sm">
              <Plane className="size-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight">Takantukan</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a className="hover:text-white transition" href="#features">Features</a>
            <a className="hover:text-white transition" href="#how">How it works</a>
            <a className="hover:text-white transition" href="#pricing">Pricing</a>
            <a className="hover:text-white transition inline-flex items-center gap-1" href="#resources">Resources <ChevronDown className="size-4"/></a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="px-3 py-2 text-sm text-white/80 hover:text-white">Sign in</a>
            <a href="#cta" className="px-4 py-2 text-sm font-semibold rounded-md bg-white text-black hover:shadow-lg hover:-translate-y-0.5 transition">Get started</a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center size-10 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="size-6"/> : <Menu className="size-6"/>}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2 text-white/80">
              <a className="px-3 py-2 rounded hover:bg-white/5" href="#features">Features</a>
              <a className="px-3 py-2 rounded hover:bg-white/5" href="#how">How it works</a>
              <a className="px-3 py-2 rounded hover:bg-white/5" href="#pricing">Pricing</a>
              <a className="px-3 py-2 rounded hover:bg-white/5" href="#resources">Resources</a>
              <div className="h-px bg-white/10 my-2"/>
              <a className="px-3 py-2 rounded hover:bg-white/5" href="#">Sign in</a>
              <a className="px-3 py-2 rounded-md bg-white text-black font-semibold" href="#cta">Get started</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
