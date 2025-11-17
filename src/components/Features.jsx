import { CreditCard, Globe2, Shield, Wallet, Radar, Sparkle } from 'lucide-react'

const features = [
  {
    icon: CreditCard,
    title: 'Programmable Cards',
    desc: 'Issue physical and virtual cards with spend controls, budgets, and dynamic FX.'
  },
  {
    icon: Globe2,
    title: 'Global Accounts',
    desc: 'Hold and move money in multiple currencies, with local rails in key markets.'
  },
  { icon: Shield, title: 'Compliance Built-in', desc: 'KYC, AML, and fraud tooling ready to go so you launch faster.' },
  { icon: Wallet, title: 'Creator Payouts', desc: 'Automate cross-border payouts for your marketplace or community.' },
  { icon: Radar, title: 'Risk Intelligence', desc: 'Real-time monitoring and rules to reduce chargebacks and abuse.' },
  { icon: Sparkle, title: 'Developer-first', desc: 'Beautiful APIs and docs so your team ships in days, not months.' },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,115,0,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Everything you need to build travel fintech</h2>
          <p className="mt-3 text-white/70">A modular stack that scales from MVP to millions of users, designed for creators, OTAs, and global brands.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="inline-flex size-10 items-center justify-center rounded-lg bg-gradient-to-tr from-orange-500 to-amber-300 text-black">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
