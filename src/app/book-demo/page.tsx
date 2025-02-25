import React from 'react'
import BookingForm from '../../components/BookingForm'

export default function BookDemoPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero py-16 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-cyber-pink">
              Experience the Future Today
            </h1>
            <h2 className="text-3xl mb-8">Book Your Personalized Demo</h2>
            <p className="text-xl mb-8 opacity-90">
              Step into a world where AI transforms mundane tasks into dynamic, high-impact workflows. 
              Ready to see FloMinds.AI in action? Our live demo will walk you through how our custom-trained 
              AI agents can turbocharge your operations—saving you time, boosting productivity, and letting 
              your creativity shine.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-12 bg-base-300">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What to Expect
            <div className="divider max-w-md mx-auto">Your Demo Journey</div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-base-200 shadow-xl hover:shadow-[0_0_30px_rgba(0,224,255,0.2)] transition-all duration-300">
              <div className="card-body">
                <h3 className="card-title text-primary">Live Walkthrough</h3>
                <p>See our futuristic platform in action. Watch as we convert your data into streamlined content, smart outreach campaigns, or personalized job applications.</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl hover:shadow-[0_0_30px_rgba(0,224,255,0.2)] transition-all duration-300">
              <div className="card-body">
                <h3 className="card-title text-secondary">Tailored to You</h3>
                <p>Share your challenges, and we'll demonstrate solutions specific to your business needs. It's a demo built around your vision.</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl hover:shadow-[0_0_30px_rgba(0,224,255,0.2)] transition-all duration-300">
              <div className="card-body">
                <h3 className="card-title text-accent">Real-Time Impact</h3>
                <p>Experience firsthand how our AI-driven workflows can boost productivity by up to <span className="badge badge-primary">70%</span> and drive engagement like never before.</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl hover:shadow-[0_0_30px_rgba(0,224,255,0.2)] transition-all duration-300">
              <div className="card-body">
                <h3 className="card-title text-info">Interactive Q&A</h3>
                <p>Ask questions, get insights, and learn how our technology can integrate seamlessly into your operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Revolution Section */}
      <section className="py-12">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl justify-center mb-6">Join the AI Revolution</h2>
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-title">Businesses Automated</div>
                  <div className="stat-value text-primary">500+</div>
                  <div className="stat-desc">And growing daily</div>
                </div>
              </div>
              <p className="text-xl mt-6">
                Now, it's your turn to leave the grunt work behind and focus on what truly matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 bg-base-300">
        <div className="container mx-auto max-w-2xl">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl justify-center mb-8">Book Your Demo Now</h2>
              <BookingForm />
              <div className="alert alert-info mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>We promise a quick, frictionless experience—because your time is too valuable for anything less.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust the Future Section */}
      <section className="py-12">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-primary">
              Join a growing community that's already saving thousands of hours and unlocking new levels of productivity.
            </div>
          </div>
          <div className="chat chat-start mt-4">
            <div className="chat-bubble chat-bubble-secondary">
              With FloMinds.AI, you're not just booking a demo—you're stepping into the future of work.
            </div>
          </div>
          <div className="divider">Let's Get Started</div>
          <p className="text-xl italic text-primary">
            Let's get digital. Let's get creative. Let's automate.
          </p>
        </div>
      </section>
    </div>
  )
}
