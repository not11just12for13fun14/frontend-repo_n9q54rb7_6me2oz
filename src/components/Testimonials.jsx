export default function Testimonials() {
  const items = [
    { quote: "I've used this platform for various home services, and I'm always impressed by the quality of work. The providers are professional and reliable.", name: 'Nisha Shrestha', role: 'Homeowner', initials: 'NS' },
    { quote: 'We hired through TakanTukan for some office maintenance work, and the experience was seamless. The platform made it easy to book a professional, and the job was done efficiently.', name: 'Harish Chaudhary', role: 'Working Professional', initials: 'HC' },
    { quote: "I've been in the plumbing industry for 10 years, and joined TakanTukan for better work life balance. Since then, i've been enjoying connecting with new customers from many different areas.", name: 'Sabita Gautam', role: 'Plumbing Services Provider', initials: 'SG' },
    { quote: 'Great experience with TakanTukan! The service was prompt, and the handyman was very skilled. I’m happy with the results and would recommend their service to others.', name: 'Kiran Shrestha', role: 'Small Business Owner', initials: 'KS' },
    { quote: "The app is user-friendly, and I love how I can book services that I need around my busy schedule. It's made managing mundane tasks so much easier.", name: 'Pankaj Jaiswal', role: 'Business Owner', initials: 'PJ' },
  ]
  return (
    <section className="bg-gray-50 text-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Customer Experiences With Our Platform</h2>
          <p className="mt-3 text-gray-600">Real stories from customers and providers who trust TakanTukan.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure key={t.name} className="rounded-xl border border-gray-200 bg-white p-6">
              <blockquote className="text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="size-9 rounded-full bg-gradient-to-tr from-orange-500 to-amber-300 text-white grid place-items-center text-xs font-medium">{t.initials}</div>
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
