import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

// vidstack styles
import '@vidstack/react/player/styles/default/theme.css'
import '@vidstack/react/player/styles/default/layouts/video.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'Flick - Discover, Watch & Enjoy Movies & Shows',
  description:
    'Flick - Your ultimate destination for streaming movies and TV shows. Discover, watch, and enjoy a world of entertainment anytime, anywhere!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={openSans.variable}>{children}</body>
    </html>
  )
}
