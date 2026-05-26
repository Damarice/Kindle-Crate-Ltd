import Image from 'next/image'

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About Kindle & Crate</h2>
      <p className="section-subtitle">Pioneering sustainable hospitality solutions</p>
      <div className="about-content">
        <div className="about-text">
          <h3>Our Story</h3>
          <p>Kindle & Crate is a hospitality supply company built to power the hospitality industry through innovation, quality, and sustainable solutions.</p>
          <p>Driven by a vision to scale across the hospitality industry, we provide hotels, restaurants, caterers, retailers, and commercial hospitality spaces with reliable fire solutions, kitchen equipment, and operational essentials designed to meet modern industry demands.</p>
          <p>We proudly work with eco-conscious manufacturers and forward-thinking brands that share our commitment to efficiency, durability, and environmental responsibility. Every product we supply is carefully selected to help hospitality businesses enhance operations, elevate guest experiences, and grow sustainably.</p>
          <p>Kindle & Crate is focused on building long-term partnerships, expanding market reach, and becoming a trusted hospitality supply partner.</p>
          <h3>Our Mission</h3>
          <p>To deliver innovative and eco-sustainable hospitality solutions that help businesses operate smarter, grow faster, and create lasting impact across Africa&apos;s hospitality sector.</p>
        </div>
        <div className="about-image">
          <Image 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=400&fit=crop&crop=center" 
            alt="Fresh farm produce" 
            width={500}
            height={400}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              borderRadius: '8px' 
            }}
          />
        </div>
      </div>
    </section>
  )
}