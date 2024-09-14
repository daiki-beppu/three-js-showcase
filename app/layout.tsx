import Navigation from '@/components/Navigation'
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
      <body>
        <div className="flex h-screen bg-gray-100 text-gray-800">
          <div className="w-64 bg-white shadow-md">
            <Navigation />
          </div>

          <main className="flex-1 overflow-y-auto">
            <div>
              <div>{children}</div>
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
