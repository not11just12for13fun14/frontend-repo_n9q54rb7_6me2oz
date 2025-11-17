import { ArrowRight, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: 'Create your brand',
    desc: 'Customize cards, accounts, and onboarding flows to match your identity.'
  },
  { title: 'Launch in days', desc: 'Use our SDKs and guides to go live without heavy compliance lift.' },
  { title: 'Scale globally', desc: 'Expand to new markets with local rails, FX, and payout partners.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-black text-white py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">From idea to launch, guided.</h2>
            <p className="mt-3 text-white/70">We obsess over the details so you can focus on your product. Our team and partners help you navigate licensing, risk, and operations.</p>
            <div className="mt-6 space-y-4">
              {steps.map((s) => (
                <div key={s.title} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 text-emerald-400" />
                  <div>
                    <p className="font-medium">{s.title}</p>
                    <p className="text-white/70 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#cta" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 font-semibold hover:shadow-xl hover:-translate-y-0.5 transition">
              Talk to us <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-zinc-900 to-black grid place-items-center text-white/60 text-sm">
              Product demo placeholder
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/70">
              <div className="rounded-lg bg-black/60 p-3 border border-white/10">• PCI-ready vaulting</div>
              <div className="rounded-lg bg-black/60 p-3 border border-white/10">• 3DS & strong auth</div>
              <div className="rounded-lg bg-black/60 p-3 border border-white/10">• Tokenized cards</div>
              <div className="rounded-lg bg-black/60 p-3 border border-white/10">• Real-time ledgers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
