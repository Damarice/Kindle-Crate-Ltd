'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(target.getAttribute('href')!)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    // Sticky navigation background change on scroll
    const handleScroll = () => {
      const nav = document.querySelector('nav')
      const currentScroll = window.pageYOffset
      
      if (nav) {
        if (currentScroll > 100) {
          nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)'
        } else {
          nav.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)'
        }
      }
    }

    document.addEventListener('click', handleClick)
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <div className="logo-icon"><i className="fas fa-fire"></i></div>
          <span>Kindle & Crate</span>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#products" onClick={closeMenu}>Products</a></li>
          <li><a href="#brands" onClick={closeMenu}>Our Brands</a></li>
          <li><a href="#wholesale" onClick={closeMenu}>Wholesale</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li><a href="#contact" className="cta-button" onClick={closeMenu}>Request Quote</a></li>
        </ul>
      </div>
    </nav>
  )
}