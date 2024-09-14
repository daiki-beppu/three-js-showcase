import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thee.js Project Showcase',
  description: 'Explore amazing Three.js projects',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
