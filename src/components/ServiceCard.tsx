import React from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="card bg-base-200 shadow-xl hover:shadow-[0_0_30px_rgba(0,224,255,0.2)] 
                    transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
      <div className="card-body">
        {icon && (
          <figure className="text-primary mb-4 transform transition-transform duration-300 group-hover:scale-110">
            {icon}
          </figure>
        )}
        <h3 className="card-title font-montserrat text-transparent bg-clip-text bg-gradient-to-r 
                       from-neon-blue to-cyber-pink">{title}</h3>
        <p className="font-roboto opacity-80 transition-opacity duration-300 group-hover:opacity-100">
          {description}
        </p>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-sm hover:scale-105 transition-transform duration-300
                           hover:shadow-[0_0_15px_rgba(0,224,255,0.5)]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
