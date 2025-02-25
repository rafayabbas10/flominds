import CTAButton from './CTAButton'
import Link from 'next/link'
import Image from 'next/image'
import heroImage from '../../public/images/hero.jpg'

const HeroSection = () => {
  return (
    <div className="hero min-h-screen relative">
      <Image
        src={heroImage}
        alt="Futuristic cityscape with neon lights"
        fill
        priority
        className="object-cover blur-[2px]"
        quality={100}
      />
      {/* Dark overlay with opacity */}
      <div className="absolute inset-0 bg-black/70 z-[1]"></div>
      
      <div className="hero-content text-center text-neutral-content relative z-10">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-5xl md:text-7xl font-montserrat font-bold 
                       text-transparent bg-clip-text bg-gradient-to-r 
                       from-neon-blue to-cyber-pink">
            Automate Your Future
          </h1>
          <p className="mb-8 text-xl font-roboto text-gray-300">
            Welcome to FloMinds.AI—where custom AI solutions transform mundane tasks into dynamic workflows.
          </p>
          <Link href="/book-demo">
            <CTAButton size="lg">Book a Demo</CTAButton>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
