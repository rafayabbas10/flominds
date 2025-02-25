import Link from 'next/link'
import { 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope,
  FaCode,
  FaBriefcase,
  FaRobot,
  FaNewspaper
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      {/* Company Info */}
      <aside>
        <Link href="/" className="text-2xl font-bold mb-4">FloMinds.AI</Link>
        <p className="max-w-xs">
          Empowering businesses with AI-driven automation solutions for a more efficient future.
        </p>
      </aside>

      {/* Solutions Links */}
      <nav>
        <h6 className="footer-title flex items-center gap-2">
          <FaRobot className="text-primary" />
          Solutions
        </h6>
        <Link href="/solutions/content-automation" className="link link-hover">Content Automation</Link>
        <Link href="/solutions/email-automation" className="link link-hover">Email Outreach</Link>
        <Link href="/solutions/job-search-automation" className="link link-hover">Job Search</Link>
        <Link href="/solutions/custom-ai-workflows" className="link link-hover">Custom Workflows</Link>
      </nav>

      {/* Company Links */}
      <nav>
        <h6 className="footer-title flex items-center gap-2">
          <FaBriefcase className="text-primary" />
          Company
        </h6>
        <Link href="/about" className="link link-hover">About Us</Link>
        <Link href="/blog" className="link link-hover">Blog</Link>
        <Link href="/careers" className="link link-hover">Careers</Link>
        <Link href="/book-demo" className="link link-hover">Book a Demo</Link>
      </nav>

      {/* Legal Links */}
      <nav>
        <h6 className="footer-title flex items-center gap-2">
          <FaNewspaper className="text-primary" />
          Legal
        </h6>
        <Link href="/privacy" className="link link-hover">Privacy Policy</Link>
        <Link href="/terms" className="link link-hover">Terms of Service</Link>
        <Link href="/contact" className="link link-hover">Contact</Link>
      </nav>

      {/* Social Links */}
      <nav>
        <h6 className="footer-title flex items-center gap-2">
          <FaCode className="text-primary" />
          Connect
        </h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://twitter.com/flomindsai" className="text-2xl hover:text-primary transition-colors">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com/company/flomindsai" className="text-2xl hover:text-primary transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://github.com/flomindsai" className="text-2xl hover:text-primary transition-colors">
            <FaGithub />
          </a>
          <a href="mailto:contact@flominds.ai" className="text-2xl hover:text-primary transition-colors">
            <FaEnvelope />
          </a>
        </div>
      </nav>

      {/* Copyright */}
      <div className="footer footer-center p-4 border-t border-base-300 mt-4">
        <p className="text-sm opacity-75">
          &copy; {new Date().getFullYear()} FloMinds.AI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
