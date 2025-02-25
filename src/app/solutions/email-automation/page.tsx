// src/app/solutions/email-automation/page.tsx
import React from 'react'
import CTAButton from '../../../components/CTAButton'

export default function EmailAutomationPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="hero py-16 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-cyber-pink">
              Email Outreach Automation
            </h1>
            <p className="text-xl opacity-90">
              Harness the power of AI to deliver personalized, cold email campaigns at scale. 
              Reach up to 200 prospects daily with targeted messages that drive engagement.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="badge badge-primary badge-lg mb-4">1</div>
                <h3 className="card-title">Automated Personalization</h3>
                <p className="opacity-75">
                  AI-driven personalization ensures each email feels handcrafted, 
                  leading to higher engagement rates.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="badge badge-secondary badge-lg mb-4">2</div>
                <h3 className="card-title">Smart Data Integration</h3>
                <p className="opacity-75">
                  Seamlessly integrate with scraped data to target the right prospects 
                  with relevant messaging.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="badge badge-accent badge-lg mb-4">3</div>
                <h3 className="card-title">Performance Analytics</h3>
                <p className="opacity-75">
                  Track open rates, responses, and conversions with detailed analytics 
                  and insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-base-300">
        <div className="container mx-auto px-4">
          <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-200 w-full">
            <div className="stat">
              <div className="stat-title">Daily Outreach</div>
              <div className="stat-value text-primary">200+</div>
              <div className="stat-desc">Personalized emails</div>
            </div>
            
            <div className="stat">
              <div className="stat-title">Open Rate</div>
              <div className="stat-value text-secondary">40%</div>
              <div className="stat-desc">Above industry average</div>
            </div>
            
            <div className="stat">
              <div className="stat-title">Time Saved</div>
              <div className="stat-value text-accent">85%</div>
              <div className="stat-desc">Compared to manual outreach</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body text-center">
              <h2 className="card-title text-3xl font-bold justify-center mb-4">
                Ready to Transform Your Outreach?
              </h2>
              <p className="text-lg mb-8">
                Join hundreds of businesses already using our AI-powered email automation.
              </p>
              <div className="card-actions justify-center">
                <CTAButton size="lg" className="btn-wide">
                  Book a Demo
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
