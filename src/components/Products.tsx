import Image from 'next/image'

export default function Products() {
  return (
    <section className="section" id="products">
      <h2 className="section-title">Featured Products</h2>
      <p className="section-subtitle">Discover our range of eco-sustainable hospitality solutions</p>
      <div className="products-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(5, 1fr)', 
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div className="product-card">
          <div className="product-image" style={{ 
            backgroundColor: '#f5f1e8', 
            borderRadius: '8px', 
            marginBottom: '20px',
            overflow: 'hidden',
            height: '160px'
          }}>
            <Image 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" 
              alt="Organic Briquettes" 
              width={300}
              height={200}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }} 
            />
          </div>
          <div className="product-info">
            <h3>Organic Briquettes</h3>
            <p>Premium eco-friendly briquettes made from organic materials. Long-lasting burn time with minimal smoke and ash.</p>
            <a href="#contact" className="product-link">Request Quote <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image" style={{ 
            backgroundColor: '#f5f1e8', 
            borderRadius: '8px', 
            marginBottom: '20px',
            overflow: 'hidden',
            height: '160px'
          }}>
            <Image 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center" 
              alt="Fire Starters" 
              width={300}
              height={200}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }} 
            />
          </div>
          <div className="product-info">
            <h3>Fire Starters</h3>
            <p>Natural fire starters that ignite quickly and burn cleanly. Perfect for quick setup in any hospitality setting.</p>
            <a href="#contact" className="product-link">Request Quote <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image" style={{ 
            backgroundColor: '#f5f1e8', 
            borderRadius: '8px', 
            marginBottom: '20px',
            overflow: 'hidden',
            height: '160px'
          }}>
            <Image 
              src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=300&h=200&fit=crop&crop=center" 
              alt="Charcoal Grills" 
              width={300}
              height={200}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }} 
            />
          </div>
          <div className="product-info">
            <h3>Charcoal Grills</h3>
            <p>Durable commercial-grade charcoal grills. Built for professional kitchen environments.</p>
            <a href="#contact" className="product-link">Request Quote <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image" style={{ 
            backgroundColor: '#f5f1e8', 
            borderRadius: '8px', 
            marginBottom: '20px',
            overflow: 'hidden',
            height: '160px'
          }}>
            <Image 
              src="https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=300&h=200&fit=crop&crop=center" 
              alt="Premium Matchboxes" 
              width={300}
              height={200}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }} 
            />
          </div>
          <div className="product-info">
            <h3>Premium Matchboxes</h3>
            <p>Quality matchboxes for hospitality use. Available in bulk for hotels, restaurants, and retail partners.</p>
            <a href="#contact" className="product-link">Request Quote <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image" style={{ 
            backgroundColor: '#f5f1e8', 
            borderRadius: '8px', 
            marginBottom: '20px',
            overflow: 'hidden',
            height: '160px'
          }}>
            <Image 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop&crop=center" 
              alt="Fresh Farm Produce" 
              width={300}
              height={200}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }} 
            />
          </div>
          <div className="product-info">
            <h3>Fresh Farm Produce</h3>
            <p>We supply farm-fresh produce to hotels, restaurants, resorts, and commercial kitchens.</p>
            <a href="#contact" className="product-link">Request Quote <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}