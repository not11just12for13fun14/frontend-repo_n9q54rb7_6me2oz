import { ShieldCheck, Clock, WalletMinimal, Wrench, Users, Star } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Trusted & Verified',
    desc: 'Professionals are vetted for quality and reliability to keep your jobs worry‑free.'
  },
  {
    icon: Clock,
    title: 'On-Demand & Flexible',
    desc: 'Book services when you need them with clear timelines and availability.'
  },
  { icon: WalletMinimal, title: 'Transparent Pricing', desc: 'See rates upfront. Compare offers and choose what suits your budget.' },
  { icon: Wrench, title: 'Wide Range of Services', desc: 'From plumbing to IT support — find specialists across many categories.' },
  { icon: Users, title: 'Empowering Providers', desc: 'Create profiles, showcase skills, and grow your business locally.' },
  { icon: Star, title: 'Ratings & Reviews', desc: 'Make confident decisions with feedback from real customers.' },
]

export default function Features() {
  return (
    <section id="services" className="relative bg-white text-gray-900 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Top Services from Our Trusted Providers</h2>
          <p className="mt-3 text-gray-600">Start earning by sharing your expertise with customers who need your services.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg transition">
              <div className="inline-flex size-10 items-center justify-center rounded-lg bg-gradient-to-tr from-orange-500 to-amber-300 text-white">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
