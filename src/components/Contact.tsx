'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    category: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('Form submitted:', formData)
    
    alert('Thank you for your inquiry! We will get back to you within 24 hours.')
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      category: '',
      message: ''
    })
  }

  return (
    <section className="section contact-section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">Ready to partner with us? We&apos;d love to hear from you</p>
      
      <div className="contact-container">
        <div className="contact-info-box">
          <h3>Contact Information</h3>
          
          <div className="contact-item">
            <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
            <div>
              <strong>Address</strong>
              <p>Nairobi, Kenya<br />East Africa</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon"><i className="fas fa-phone"></i></div>
            <div>
              <strong>Phone</strong>
              <p>+254 XXX XXX XXX</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon"><i className="fas fa-envelope"></i></div>
            <div>
              <strong>Email</strong>
              <p>info@kindleandcrate.com<br />sales@kindleandcrate.com</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon"><i className="fas fa-clock"></i></div>
            <div>
              <strong>Business Hours</strong>
              <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="form-container">
          <h3>Request a Quote</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="company">Company/Organization</label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="category">Product Category *</label>
              <select 
                id="category" 
                name="category" 
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                <option value="fuel">Fuel Solutions (Briquettes, Fire Starters)</option>
                <option value="cooking">Cooking & Heating (Grills, Jikos)</option>
                <option value="displays">Hospitality Displays</option>
                <option value="wholesale">Wholesale/Distribution Inquiry</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required 
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  )
}