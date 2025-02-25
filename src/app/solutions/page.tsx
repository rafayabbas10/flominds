// src/app/solutions/page.tsx
import React from 'react'
import ServiceCard from '../../components/ServiceCard'
import { FaVideo, FaEnvelope, FaSearch, FaCogs } from 'react-icons/fa'
import Link from 'next/link'
import CTAButton from '../../components/CTAButton'

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="hero py-16 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-cyber-pink">
              Our Suite of AI-Powered Solutions
            </h1>
            <p className="text-xl opacity-90">
              Welcome to the future of work—where AI handles the heavy lifting so you can focus on creativity and growth. 
              Our cutting-edge solutions transform routine tasks into streamlined, high-impact workflows.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Content Automation Pipeline"
              description="On-brand reels in just 10 minutes. Transform your channel's vision into captivating video reels effortlessly. 10x faster content production with consistent, engaging results."
              icon={<FaVideo size={32} />}
            />
            <ServiceCard
              title="Email Outreach Automation"
              description="Smart outreach that works while you sleep. Deploy up to 200 targeted, personalized emails daily with 40% higher open rates."
              icon={<FaEnvelope size={32} />}
            />
            <ServiceCard
              title="Job Search Automation"
              description="Land your dream job with zero legwork. Our AI matches your resume to top listings, resulting in 3x more interview invitations."
              icon={<FaSearch size={32} />}
            />
            <ServiceCard
              title="Custom AI Workflows"
              description="Tailored automation for your unique business needs. Over 100 custom solutions deployed, each driving significant efficiency gains."
              icon={<FaCogs size={32} />}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works: From Input to Impact
            <div className="divider max-w-md mx-auto"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="badge badge-primary badge-lg mb-4">1</div>
                <h3 className="card-title">Input Your Data</h3>
                <p className="opacity-75">Share your vision, goals, and any specific requirements.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="badge badge-secondary badge-lg mb-4">2</div>
                <h3 className="card-title">AI Magic</h3>
                <p className="opacity-75">Our custom-trained models get to work, processing your data with next-gen algorithms.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="badge badge-accent badge-lg mb-4">3</div>
                <h3 className="card-title">Automated Output</h3>
                <p className="opacity-75">Enjoy high-quality, streamlined results that drive engagement and productivity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body text-center">
              <h2 className="card-title text-3xl font-bold justify-center mb-6">Ready to redefine your workflow?</h2>
              <p className="text-xl mb-8 opacity-90">Join the AI revolution. Transform your operations. Embrace the future with FloMinds.AI.</p>
              <div className="card-actions justify-center">
                <Link href="/book-demo">
                  <CTAButton size="lg">Book a Demo Now</CTAButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
