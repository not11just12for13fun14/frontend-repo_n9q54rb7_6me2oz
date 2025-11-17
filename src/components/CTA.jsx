export default function CTA() {
  return (
    <section id="cta" className="relative bg-black text-white py-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-tr from-orange-500/20 to-amber-300/10 p-8 sm:p-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Start building with Takantukan</h3>
              <p className="mt-2 text-white/80">Join the early access program and co-design features with us.</p>
            </div>
            <form className="grid sm:grid-cols-[1fr_auto] gap-3">
              <input type="email" required placeholder="Work email" className="w-full rounded-md bg-black/60 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-400/50" />
              <button className="rounded-md bg-white text-black px-5 py-3 font-semibold hover:shadow-xl hover:-translate-y-0.5 transition">Request access</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
