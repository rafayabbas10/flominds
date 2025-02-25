import React from 'react'

const stats = [
  { 
    label: 'Reels Created', 
    value: '10,000+',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  { 
    label: 'Emails Sent', 
    value: '50,000+',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  { 
    label: 'Businesses Automated', 
    value: '500+',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
]

const StatsSection = () => {
  return (
    <section className="py-12 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-base-100">
          {stats.map((stat, index) => (
            <div key={index} className="stat">
              <div className="stat-figure text-primary">
                {stat.icon}
              </div>
              <div className="stat-title">{stat.label}</div>
              <div className="stat-value text-primary">{stat.value}</div>
              <div className="stat-desc">
                {index === 0 && 'Engaging content delivered'}
                {index === 1 && 'Automated outreach'}
                {index === 2 && 'Workflows optimized'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
