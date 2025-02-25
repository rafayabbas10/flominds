// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero py-16 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-cyber-pink">
              Get in Touch
            </h1>
            <p className="text-xl opacity-90">
              Have questions? We&apos;d love to hear from you. Whether you need technical support, 
              have partnership inquiries, or just want to learn more about our AI solutions, 
              we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <form className="space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered bg-base-100 w-full focus:border-electric-teal focus:ring-1 focus:ring-electric-teal"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="input input-bordered bg-base-100 w-full focus:border-electric-teal focus:ring-1 focus:ring-electric-teal"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Subject</span>
                  </label>
                  <select 
                    className="select select-bordered bg-base-100 w-full focus:border-electric-teal focus:ring-1 focus:ring-electric-teal"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="demo">Demo Request</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    placeholder="Your message here..."
                    className="textarea textarea-bordered bg-base-100 h-32 w-full focus:border-electric-teal focus:ring-1 focus:ring-electric-teal"
                  />
                </div>

                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary hover:scale-105 transition-transform duration-300 
                             hover:shadow-[0_0_30px_rgba(0,224,255,0.4)] animate-pulse-glow"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
  