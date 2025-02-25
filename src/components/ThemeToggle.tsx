'use client'

import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    document.documentElement.setAttribute('data-theme', savedTheme)
    setTheme(savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <FaMoon className="h-5 w-5" />
      ) : (
        <FaSun className="h-5 w-5" />
      )}
    </button>
  )
}

export default ThemeToggle