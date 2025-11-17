export default function CTA() {
  return (
    <section id="contact" className="relative bg-white text-gray-900 py-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-tr from-orange-500/10 to-amber-300/10 p-8 sm:p-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Get the App — Get More Done</h3>
              <p className="mt-2 text-gray-700">Stay connected and manage your needs from your phone. Book services, track requests, and chat with professionals — all in one place.</p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-md bg-black text-white px-5 py-3 font-semibold">Download on the App Store</a>
                <a href="#" className="inline-flex items-center justify-center rounded-md bg-green-600 text-white px-5 py-3 font-semibold">Get it on Google Play</a>
              </div>
            </div>
            <form className="grid sm:grid-cols-[1fr_auto] gap-3">
              <input type="email" required placeholder="Your email" className="w-full rounded-md bg-white border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50" />
              <button className="rounded-md bg-gradient-to-tr from-orange-500 to-amber-400 text-white px-5 py-3 font-semibold hover:shadow-md transition">Contact Me</button>
              <p className="sm:col-span-2 text-xs text-gray-500">We’ll send updates and links to download the app when it’s ready.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
