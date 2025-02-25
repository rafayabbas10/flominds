// app/page.tsx
import React from 'react'
import Link from 'next/link'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import Testimonials from '../components/Testimonials'
import ServiceCard from '../components/ServiceCard'
import CTAButton from '../components/CTAButton'
import { FaVideo, FaEnvelope, FaSearch, FaCogs } from 'react-icons/fa'

export default function HomePage() {
  return (
    <div className=" text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Transform Your Workflow Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body text-center">
              <h2 className="card-title text-3xl font-bold justify-center mb-6 text-transparent bg-clip-text 
                             bg-gradient-to-r from-neon-blue to-cyber-pink hover:from-cyber-pink hover:to-neon-blue 
                             transition-all duration-500">
                Transform Your Workflow
              </h2>
              
              <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-100 hover:shadow-[0_0_30px_rgba(0,224,255,0.2)] 
                          transition-all duration-300">
                <div className="stat transition-all duration-300 hover:bg-base-200">
                  <div className="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="stat-title">Productivity Boost</div>
                  <div className="stat-value text-primary">70%</div>
                  <div className="stat-desc">Increase in efficiency</div>
                </div>
                
                <div className="stat transition-all duration-300 hover:bg-base-200">
                  <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div className="stat-title">Video Creation</div>
                  <div className="stat-value text-secondary">10min</div>
                  <div className="stat-desc">Per branded reel</div>
                </div>
                
                <div className="stat transition-all duration-300 hover:bg-base-200">
                  <div className="stat-figure text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="stat-title">Email Outreach</div>
                  <div className="stat-value text-accent">200</div>
                  <div className="stat-desc">Prospects per day</div>
                </div>
              </div>

              <div className="divider">Our Impact</div>

              <div className="prose prose-lg max-w-none">
                <p className="mb-4 text-base-content/80">
                  Our AI-driven solutions are designed to automate your everyday tasks, 
                  transforming your workflow into a streamlined powerhouse of productivity.
                </p>
              </div>

              <div className="alert alert-success mt-6 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="font-bold">Over 500+ Businesses Trust Us</span>
                  <br />
                  <span className="text-sm opacity-80">Join the revolution that's already saved companies countless hours!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our AI-Powered Solutions Section */}
      <section className="py-16 px-4 bg-base-300">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-cyber-pink">
              Our AI-Powered Solutions
            </h2>
            <div className="divider max-w-md mx-auto">Transform Your Business</div>
            <p className="text-lg opacity-90 max-w-2xl mx-auto text-base-content/80">
              Harness the power of AI to transform your workflow and boost productivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Content Automation"
              description="Transform your channel's theme into captivating reels with consistent, engaging content that converts."
              icon={<FaVideo className="w-12 h-12" />}
            />
            <ServiceCard
              title="Email Outreach"
              description="Automate cold email campaigns using scraped data for more engagement, more conversions, and less manual work."
              icon={<FaEnvelope className="w-12 h-12" />}
            />
            <ServiceCard
              title="Job Search AI"
              description="Match your resume to top job openings on LinkedIn, streamlining applications so you can focus on what really matters."
              icon={<FaSearch className="w-12 h-12" />}
            />
            <ServiceCard
              title="Custom Workflows"
              description="Tailor AI solutions to your specific business needs for a seamless, personalized approach that scales with your vision."
              icon={<FaCogs className="w-12 h-12" />}
            />
          </div>
        </div>
      </section>

      {/* Real Results, Real Fast Section */}
      <section className="py-16 px-4 bg-base-300">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Real Results, Real Fast</h2>
            <div className="divider max-w-md mx-auto">Our Impact</div>
          </div>
          
          <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-200 w-full">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="stat-title">Reels Created</div>
              <div className="stat-value text-primary">10,000+</div>
              <div className="stat-desc">Engaging content delivered</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="stat-title">Emails Sent</div>
              <div className="stat-value text-secondary">50,000+</div>
              <div className="stat-desc">Automated outreach</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="stat-title">Businesses Automated</div>
              <div className="stat-value text-accent">500+</div>
              <div className="stat-desc">Workflows optimized</div>
            </div>
          </div>

          <div className="alert alert-info mt-8 max-w-2xl mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="italic">Numbers don't lie—our technology is changing the game, one workflow at a time.</span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
      <StatsSection />

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-base-300">
        <div className="container mx-auto">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body text-center">
              <h2 className="card-title text-3xl font-bold justify-center mb-4">
                Experience the Future Today
              </h2>
              <p className="text-lg mb-8">
                Ready to join the AI revolution? Book your personalized demo and see how FloMinds.AI can automate your future.
              </p>
              <div className="card-actions justify-center">
                <Link href="/book-demo">
                  <CTAButton size="lg" className="btn-wide transform hover:scale-105 transition-all duration-300 
                                                hover:shadow-[0_0_30px_rgba(0,224,255,0.4)] animate-pulse-glow">
                    <span>Book a Demo Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                         className="w-6 h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </CTAButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="py-12 px-4 bg-base-200">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="chat chat-start animate-fade-in-up">
              <div className="chat-bubble chat-bubble-primary hover:shadow-[0_0_15px_rgba(0,224,255,0.3)] 
                              transition-all duration-300">
                FloMinds.AI is not just a service—it's your partner in creating a world where technology handles the grunt work, leaving you free to innovate and create.
              </div>
            </div>
            <div className="divider animate-fade-in">Our Promise</div>
            <div className="chat chat-end animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="chat-bubble chat-bubble-secondary hover:shadow-[0_0_15px_rgba(255,59,129,0.3)] 
                              transition-all duration-300 italic">
                Let's get digital. Let's get creative. Let's automate.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
