import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (
    <header className="navbar bg-base-100 shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li>
              <Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
              <ul className="p-2 bg-base-100">
                <li><Link href="/solutions/content-automation">Content Automation</Link></li>
                <li><Link href="/solutions/email-automation">Email Outreach</Link></li>
                <li><Link href="/solutions/job-search-automation">Job Search</Link></li>
                <li><Link href="/solutions/custom-ai-workflows">Custom Workflows</Link></li>
              </ul>
            </li>
            <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-cyber-pink">
            FloMinds.AI
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li>
            <details>
              <summary className="hover:text-primary transition-colors">Solutions</summary>
              <ul className="p-2 bg-base-100 rounded-box shadow-lg">
                <li><Link href="/solutions/content-automation">Content Automation</Link></li>
                <li><Link href="/solutions/email-automation">Email Outreach</Link></li>
                <li><Link href="/solutions/job-search-automation">Job Search</Link></li>
                <li><Link href="/solutions/custom-ai-workflows">Custom Workflows</Link></li>
              </ul>
            </details>
          </li>
          <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
          <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggle />
        <Link 
          href="/book-demo" 
          className="btn btn-primary btn-sm md:btn-md hover:scale-105 transition-transform duration-300 ml-2"
        >
          Book a Demo
        </Link>
      </div>
    </header>
  )
}

export default Header
