import Spline from '@splinetool/react-spline'
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <ShieldCheck className="size-4 text-emerald-400" />
            PCI-ready infrastructure for modern travel fintech
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
            Banking for travel creators and cross‑border businesses
          </h1>
          <p className="mt-5 text-white/70 text-base sm:text-lg max-w-xl">
            Takantukan blends payments, FX, and smart cards into one platform. Launch compliant, global financial experiences without the overhead.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-black px-5 py-3 font-semibold hover:shadow-xl hover:-translate-y-0.5 transition">
              Get started
              <ArrowRight className="size-4" />
            </a>
            <a href="#how" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 font-semibold hover:bg-white/10 transition">
              See how it works
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-sm text-white/60">
            <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-emerald-400"/><span>Instant virtual cards</span></div>
            <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-orange-400"/><span>Borderless payouts</span></div>
            <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-sky-400"/><span>Real-time FX</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
