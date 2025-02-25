import React from 'react'

interface CTAButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  variant = 'primary',
  size = 'md'
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant} btn-${size} ${className}`}
    >
      {children}
    </button>
  )
}

export default CTAButton
