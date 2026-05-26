export default function Brands() {
  return (
    <section className="sub-brands" id="brands">
      <div className="sub-brands-container">
        <h2 className="section-title">Our Brands</h2>
        <p className="section-subtitle">Specialized product lines serving the hospitality industry</p>
        <div className="brands-grid">
          <div className="brand-card">
            <div className="brand-logo"><i className="fas fa-fire"></i></div>
            <h3>PureBurn</h3>
            <p className="subtitle">Eco Fire Solutions by Kindle & Crate</p>
            <p>Our flagship line focused on sustainable fuels and fire products for commercial and residential use.</p>
            <ul>
              <li>Organic Briquettes</li>
              <li>Natural Fire Starters</li>
              <li>Charcoal Grills</li>
              <li>Premium Matchboxes</li>
            </ul>
          </div>
          <div className="brand-card">
            <div className="brand-logo"><i className="fas fa-carrot"></i></div>
            <h3>FreshStax</h3>
            <p className="subtitle">Coming Soon</p>
            <p>Innovative vegetable storage and display solutions designed for modern catering and hospitality environments.</p>
            <ul>
              <li>Vegetable Storage Stands</li>
              <li>Produce Crates</li>
              <li>Catering Display Units</li>
              <li>Serving Solutions</li>
            </ul>
          </div>
          <div className="brand-card">
            <div className="brand-logo"><i className="fas fa-temperature-high"></i></div>
            <h3>HeatWare</h3>
            <p className="subtitle">Coming Soon</p>
            <p>Professional cooking and heating equipment engineered for efficiency and durability in commercial kitchens.</p>
            <ul>
              <li>Commercial Cooking Equipment</li>
              <li>Heating Solutions</li>
              <li>Kitchen Accessories</li>
              <li>Professional Jikos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}