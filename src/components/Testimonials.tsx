import React from 'react'

interface Testimonial {
  name: string
  feedback: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Alex, Digital Marketing Lead',
    feedback: "FloMinds.AI transformed our content creation process. We're now 60% more efficient!",
  },
  {
    name: 'Jordan, CEO',
    feedback: "Their custom workflows saved us 30 hours every week. It's like having an extra team member.",
  },
]

const Testimonials = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
          <div className="divider max-w-md mx-auto">Testimonials</div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <div className="chat chat-start">
                  <div className="chat-bubble chat-bubble-primary">
                    "{testimonial.feedback}"
                  </div>
                </div>
                <div className="card-actions justify-end mt-4">
                  <div className="badge badge-primary badge-lg">{testimonial.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
