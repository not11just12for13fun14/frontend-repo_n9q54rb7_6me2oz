import { CheckCircle2, FileText, Handshake, Wallet } from 'lucide-react'

const steps = [
  {
    title: 'Submit your first job',
    desc: 'Describe your job and set a rough budget. Get offers from nearby experts.'
  },
  { title: 'Review & negotiate', desc: 'Compare profiles, ratings and pricing. Chat to clarify scope and timeline.' },
  { title: 'Hire & pay securely', desc: 'Confirm your provider, track progress and pay with confidence.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-gray-50 text-gray-900 py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold text-orange-600">About Us</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">Connecting You with Trusted Professionals for On‑Demand Services</h2>
            <p className="mt-3 text-gray-600">We connect customers with reliable and skilled professionals offering on-demand services in their local area. Our platform makes it easy to find and book trusted service providers who can complete tasks efficiently and securely.</p>
            <div className="mt-6 space-y-3">
              {steps.map((s) => (
                <div key={s.title} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 text-emerald-500" />
                  <div>
                    <p className="font-medium">{s.title}</p>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl border border-gray-200 bg-white p-6">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-gray-100 to-white grid place-items-center text-gray-500 text-sm">
              Demo placeholder
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="rounded-lg bg-white p-3 border border-gray-200">• Empowers semi-skilled & skilled workers</div>
              <div className="rounded-lg bg-white p-3 border border-gray-200">• Create service profiles & set charges</div>
              <div className="rounded-lg bg-white p-3 border border-gray-200">• Increase local employment & dignity of labor</div>
              <div className="rounded-lg bg-white p-3 border border-gray-200">• Secure booking & payments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
