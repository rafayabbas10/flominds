import React from 'react'
import BlogCard from '../../components/BlogCard'

// Mock data - Replace with actual data source
const blogPosts = [
  {
    title: "The Future of AI Automation",
    excerpt: "Discover how AI is revolutionizing workflow automation and what it means for your business.",
    slug: "future-of-ai-automation",
    date: "2024-03-20"
  },
  {
    title: "Maximizing Content Creation with AI",
    excerpt: "Learn how to leverage AI to streamline your content creation process and boost productivity.",
    slug: "maximizing-content-creation-ai",
    date: "2024-03-15"
  },
  {
    title: "Smart Email Outreach Strategies",
    excerpt: "Explore advanced techniques for automated email campaigns that drive engagement.",
    slug: "smart-email-outreach-strategies",
    date: "2024-03-10"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero py-16 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-cyber-pink">
              FloMinds Blog
            </h1>
            <p className="text-xl opacity-90">
              Insights, tutorials, and updates from the cutting edge of AI automation
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                date={post.date}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto max-w-3xl">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h2 className="card-title text-2xl justify-center mb-4">
                Stay Updated
              </h2>
              <p className="mb-6">
                Subscribe to our newsletter for the latest insights in AI automation
              </p>
              <div className="form-control">
                <div className="input-group justify-center">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <button className="btn btn-primary">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
