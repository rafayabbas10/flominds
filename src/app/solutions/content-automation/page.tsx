// src/app/solutions/content-automation/page.tsx
import React from 'react'
import CTAButton from '../../../components/CTAButton'

export default function ContentAutomationPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="hero py-16 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-cyber-pink">
              Content Automation Pipeline
            </h1>
            <p className="text-xl opacity-90">
              Transform your channel&apos;s theme into dynamic, on-brand video reels in just 10 minutes. 
              With AI-driven precision, we ensure every piece of content resonates with your audience.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="badge badge-primary mb-4">Speed</div>
                <h3 className="card-title">Rapid Production</h3>
                <p>Create engaging reels in minutes, not hours. Our AI streamlines your content pipeline.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="badge badge-secondary mb-4">Consistency</div>
                <h3 className="card-title">Brand Alignment</h3>
                <p>Maintain consistent messaging and style across all your content automatically.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="badge badge-accent mb-4">Scale</div>
                <h3 className="card-title">Efficient Scaling</h3>
                <p>Scale your content production without sacrificing quality or brand consistency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-base-200">
        <div className="container mx-auto max-w-4xl">
          <div className="stats shadow w-full">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="stat-title">Production Time</div>
              <div className="stat-value text-primary">10 min</div>
              <div className="stat-desc">Per video reel</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div className="stat-title">Efficiency Boost</div>
              <div className="stat-value text-secondary">70%</div>
              <div className="stat-desc">Compared to manual creation</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl justify-center mb-4">Ready to Transform Your Content Creation?</h2>
              <p className="mb-6">Join hundreds of creators who have already automated their content pipeline.</p>
              <div className="card-actions justify-center">
                <CTAButton size="lg">Get Started Now</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
