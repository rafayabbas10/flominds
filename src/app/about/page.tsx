
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero py-16 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-cyber-pink">
              Meet the Minds Behind the Magic
            </h1>
            <p className="text-xl opacity-90">
              Welcome to FloMinds.AI—where cutting-edge technology meets creativity, and automation transforms the way you work. 
              We&apos;re not just a team of AI engineers; we&apos;re digital trailblazers on a mission to make the mundane obsolete.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl mb-4">Our Story</h2>
              <p className="prose prose-lg">
                Born out of a passion for innovation and a desire to eliminate repetitive grunt work, 
                FloMinds.AI started as a bold idea: what if we could let AI handle the routine so you 
                could focus on what truly matters? Today, we stand at the forefront of AI-driven automation, 
                revolutionizing industries by streamlining workflows and unleashing creative potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-3xl mb-4">Our Mission</h2>
                <p className="text-xl">
                  To empower businesses and individuals by automating the everyday, so you can focus on building the extraordinary.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-3xl mb-4">Our Vision</h2>
                <p className="text-xl">
                  A future where every digital interaction is seamless, every task is optimized, and creativity knows no bounds—powered 
                  by AI that works tirelessly for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The FloMinds.AI Difference Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl mb-6">The FloMinds.AI Difference</h2>
              <div className="stats stats-vertical lg:stats-horizontal shadow">
                <div className="stat">
                  <div className="stat-title">Innovative Solutions</div>
                  <div className="stat-value text-primary">AI-Driven</div>
                  <div className="stat-desc">Custom-trained agents for dynamic workflows</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Proven Impact</div>
                  <div className="stat-value text-secondary">70%</div>
                  <div className="stat-desc">Boost in productivity</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Trusted by Many</div>
                  <div className="stat-value text-accent">500+</div>
                  <div className="stat-desc">Businesses automated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl mb-6">Meet the Team</h2>
              <div className="chat chat-start mb-4">
                <div className="chat-bubble chat-bubble-primary">
                  We&apos;re a diverse group of thinkers, makers, and innovators who thrive on solving challenges and pushing boundaries.
                </div>
              </div>
              <div className="chat chat-end mb-4">
                <div className="chat-bubble chat-bubble-secondary">
                  With years of experience in AI, automation, and digital transformation, our team is the creative force behind every breakthrough.
                </div>
              </div>
              <div className="divider">Join Our Journey</div>
              <p className="text-center text-lg">
                Join us on our journey to revolutionize the future of work, one AI-powered solution at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
  