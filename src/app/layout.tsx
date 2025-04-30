import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SMARKET - Sell Directly to Buyers & Get Paid Instantly',
  description: 'Connect with buyers and sell your agricultural products directly with instant payment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}