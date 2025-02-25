// src/app/solutions/job-search-automation/page.tsx
import React from 'react'
import CTAButton from '../../../components/CTAButton'

export default function JobSearchAutomationPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="hero py-16 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-cyber-pink">
              Job Search Automation
            </h1>
            <p className="text-xl opacity-90">
              Let AI handle your job search while you focus on preparing for your next big opportunity.
              Our intelligent matching system connects your skills with the perfect positions.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="badge badge-primary badge-lg mb-4">1</div>
                <h3 className="card-title">Smart Matching</h3>
                <p className="opacity-75">
                  AI-powered algorithm matches your resume with the most relevant job postings on LinkedIn
                </p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="badge badge-secondary badge-lg mb-4">2</div>
                <h3 className="card-title">Automated Applications</h3>
                <p className="opacity-75">
                  Streamlined application process saves you hours of manual data entry
                </p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="badge badge-accent badge-lg mb-4">3</div>
                <h3 className="card-title">Interview Optimization</h3>
                <p className="opacity-75">
                  Get personalized insights to increase your interview success rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-base-200">
        <div className="container mx-auto max-w-5xl">
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
            <div className="stat">
              <div className="stat-title">Success Rate</div>
              <div className="stat-value text-primary">85%</div>
              <div className="stat-desc">Interview invitations</div>
            </div>
            
            <div className="stat">
              <div className="stat-title">Time Saved</div>
              <div className="stat-value text-secondary">20hrs</div>
              <div className="stat-desc">Per job search</div>
            </div>
            
            <div className="stat">
              <div className="stat-title">Job Matches</div>
              <div className="stat-value text-accent">50+</div>
              <div className="stat-desc">Weekly relevant positions</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl font-bold justify-center mb-4">
                Ready to Transform Your Job Search?
              </h2>
              <p className="mb-6">
                Join hundreds of successful job seekers who have already automated their way to better opportunities.
              </p>
              <div className="card-actions justify-center">
                <CTAButton size="lg">
                  Get Started Now
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
