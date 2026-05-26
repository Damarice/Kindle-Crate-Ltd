import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kindle & Crate Ltd - Supplying the Heart of Hospitality',
  description: 'Premium sustainable fire and hospitality supply solutions across Africa. From eco-fuels to catering equipment, we deliver quality, innovation, and environmental responsibility to hotels, restaurants, and retailers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
