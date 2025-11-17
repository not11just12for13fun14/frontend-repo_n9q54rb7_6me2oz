import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Post your first job and start receiving offers.'
    ,features: [
      'Post up to 2 jobs/month',
      'Basic chat with providers',
      'Browse local services',
    ]
  },
  {
    name: 'Pro Provider',
    price: 'NPR 999/mo',
    description: 'Grow your business with priority listing and insights.',
    features: [
      'Unlimited job bids',
      'Priority placement in search',
      'Review & rating insights',
      'Calendar & booking tools',
    ]
  },
  {
    name: 'Business',
    price: 'Contact',
    description: 'For teams and agencies managing multiple providers.',
    features: [
      'Team accounts & permissions',
      'Bulk job management',
      'Dedicated support',
    ]
  }
]

export default function Pricing() {
  return (
    <section id="jobs" className="bg-white text-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Pricing</h2>
          <p className="mt-3 text-gray-600">Simple plans for customers and providers. Start free, upgrade when you grow.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className="rounded-2xl border border-gray-200 p-6 bg-white">
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className="mt-1 text-3xl font-bold bg-gradient-to-tr from-orange-500 to-amber-400 bg-clip-text text-transparent">{tier.price}</p>
              <p className="mt-2 text-sm text-gray-600">{tier.description}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><Check className="size-4 text-emerald-500 mt-0.5"/> <span>{f}</span></li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-tr from-orange-500 to-amber-400 text-white px-4 py-2 font-semibold">Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
