import { useState } from 'react'
import { Menu, X, Briefcase, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const NavLinks = () => (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm font-medium">
      <a className="px-3 py-2 rounded md:px-0 md:py-0 hover:text-orange-600 transition" href="#services">Services</a>
      <a className="px-3 py-2 rounded md:px-0 md:py-0 hover:text-orange-600 transition" href="#jobs">Find Jobs</a>
      <a className="px-3 py-2 rounded md:px-0 md:py-0 hover:text-orange-600 transition" href="#how">How It Works</a>
      <a className="px-3 py-2 rounded md:px-0 md:py-0 hover:text-orange-600 transition" href="#contact">Contact</a>
    </div>
  )

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-gray-900">
            <span className="inline-flex size-9 items-center justify-center rounded-md bg-gradient-to-tr from-orange-500 to-amber-300 text-white shadow-sm">
              <Briefcase className="size-5" />
            </span>
            <span className="text-lg font-bold tracking-tight">TakanTukan</span>
          </a>

          <div className="hidden md:block text-gray-700">
            <NavLinks />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#services" className="px-4 py-2 text-sm font-semibold rounded-md border border-black/10 text-gray-900 hover:bg-gray-50 transition">Browse Services</a>
            <a href="#jobs" className="px-4 py-2 text-sm font-semibold rounded-md bg-gradient-to-tr from-orange-500 to-amber-400 text-white shadow hover:shadow-md hover:-translate-y-0.5 transition">Find Jobs</a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center size-10 text-gray-900" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="size-6"/> : <Menu className="size-6"/>}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-gray-700">
              <NavLinks />
              <div className="h-px bg-black/10 my-2"/>
              <a className="px-3 py-2 rounded-md border border-black/10 text-gray-900" href="#services">Browse Services</a>
              <a className="px-3 py-2 rounded-md bg-gradient-to-tr from-orange-500 to-amber-400 text-white" href="#jobs">Find Jobs</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
