import Spline from '@splinetool/react-spline'
import { ArrowRight, Search, UserPlus } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-gray-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/60 to-gray-950/95 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            Where Service Meets Empowerment
          </p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
            Find Experts At Your Fingertips
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg max-w-xl">
            Connect with skilled professionals or showcase your expertise. TakanTukan creates opportunities, streamlines service delivery, and empowers communities through meaningful work.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-gray-900 px-5 py-3 font-semibold hover:shadow-xl hover:-translate-y-0.5 transition">
              <Search className="size-4" /> Browse Services
            </a>
            <a href="#jobs" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-5 py-3 font-semibold hover:bg-white/20 transition">
              <UserPlus className="size-4" /> Find Jobs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
