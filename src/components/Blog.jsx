export default function Blog() {
  const posts = [
    { tag: 'Introduction', title: 'Getting Started with Our Service', excerpt: 'An introduction to our service and how to get started.' },
    { tag: 'Features', title: 'Advanced Features of Our Service', excerpt: 'Explore the advanced features of our service.' },
    { tag: 'Tips', title: 'Tips and Tricks for Maximizing Efficiency', excerpt: 'Learn tips and tricks to maximize your efficiency with our service.' },
  ]
  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Latest from Our Blog</h2>
            <p className="mt-2 text-gray-600">News, tips, and platform updates.</p>
          </div>
          <a href="#" className="text-sm font-semibold text-orange-600 hover:text-orange-700">View All Posts</a>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-medium text-orange-600">{p.tag}</div>
              <h3 className="mt-2 font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.excerpt}</p>
              <a href="#" className="mt-4 inline-block text-sm font-semibold text-gray-900">Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
