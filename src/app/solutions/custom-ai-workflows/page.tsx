// src/app/solutions/custom-ai-workflows/page.tsx
import React from 'react'
import CTAButton from '../../../components/CTAButton'

export default function CustomAIWorkflowsPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="hero py-16 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-cyber-pink">
              Custom AI Workflows
            </h1>
            <p className="text-xl opacity-90">
              When off-the-shelf solutions won&apos;t cut it, our custom AI workflows are tailored 
              to your specific business needs. We collaborate with you to build, fine-tune, 
              and deploy AI models that integrate seamlessly into your operations.
            </p>
          </div>
        </div>
      </div>

      {/* Features Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-primary">Bespoke AI Solutions</h2>
                <p>Custom-trained models designed specifically for your unique business challenges and opportunities.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-secondary">Scalable Automation</h2>
                <p>Adaptive workflows that grow with your business, handling increasing workloads efficiently.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-accent">Maximum Efficiency</h2>
                <p>Optimize operations and drive innovation with AI-powered process automation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 px-4 bg-base-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Process</h2>
          <ul className="steps steps-vertical lg:steps-horizontal w-full">
            <li className="step step-primary">Requirements Analysis</li>
            <li className="step step-primary">Custom Model Development</li>
            <li className="step step-primary">Integration & Testing</li>
            <li className="step step-primary">Deployment & Support</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl mb-4">Ready to Transform Your Workflow?</h2>
              <p className="mb-6">Let&apos;s discuss how custom AI solutions can revolutionize your business operations.</p>
              <div className="card-actions">
                <CTAButton size="lg">
                  Book a Consultation
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
