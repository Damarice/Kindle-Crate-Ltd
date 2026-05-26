'use client'

import { useEffect } from 'react'

export default function ClientScripts() {
  useEffect(() => {
    // Intersection Observer for Fade In Animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          target.style.opacity = '1'
          target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    // Observe elements for animation
    const elementsToObserve = document.querySelectorAll('.feature-card, .product-card, .brand-card')
    elementsToObserve.forEach(el => {
      const element = el as HTMLElement
      element.style.opacity = '0'
      element.style.transform = 'translateY(30px)'
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}