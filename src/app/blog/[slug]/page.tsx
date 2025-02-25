import React from 'react'
import Link from 'next/link'

// Mock data - Replace with actual data fetching
const getBlogPost = (slug: string) => {
  return {
    title: "The Future of AI Automation",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h2>The Rise of AI</h2>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    `,
    date: "2024-03-20",
    author: "FloMinds Team"
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return (
    <div className="min-h-screen bg-base-100">
      <article className="container mx-auto max-w-4xl px-4 py-12">
        {/* Breadcrumbs */}
        <div className="breadcrumbs text-sm mb-8">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li>{post.title}</li>
          </ul>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm opacity-70">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share Section */}
        <div className="card bg-base-200 mt-12 p-6">
          <h3 className="text-xl font-bold mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button className="btn btn-primary btn-sm">Twitter</button>
            <button className="btn btn-primary btn-sm">LinkedIn</button>
            <button className="btn btn-primary btn-sm">Copy Link</button>
          </div>
        </div>
      </article>
    </div>
  )
}
