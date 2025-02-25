// src/app/solutions/layout.tsx
import React from 'react'
import Link from 'next/link'

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-base-100">
      <header className="bg-base-200 shadow-lg">
        <div className="container mx-auto px-4">
          {/* Hero section with gradient text */}
          <div className="hero py-8">
            <div className="hero-content text-center">
              <div>
                <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-cyber-pink">
                  Our Solutions
                </h1>
                <p className="text-lg max-w-2xl opacity-80">
                  Discover our suite of AI-powered solutions designed to transform your workflow
                </p>
              </div>
            </div>
          </div>

          {/* Navigation tabs */}
          <div className="tabs tabs-boxed justify-center gap-2 pb-4">
            <Link href="/solutions/content-automation" className="tab tab-lg hover:tab-active">
              Content Automation
            </Link>
            <Link href="/solutions/email-automation" className="tab tab-lg hover:tab-active">
              Email Outreach
            </Link>
            <Link href="/solutions/job-search-automation" className="tab tab-lg hover:tab-active">
              Job Search
            </Link>
            <Link href="/solutions/custom-ai-workflows" className="tab tab-lg hover:tab-active">
              Custom Workflows
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <div className="breadcrumbs text-sm">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/solutions">Solutions</Link></li>
          </ul>
        </div>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
