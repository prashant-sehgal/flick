import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import LayoutProvider from './contexts/LayoutContext'
// vidstack styles
import '@vidstack/react/player/styles/default/theme.css'
import '@vidstack/react/player/styles/default/layouts/video.css'
// remixicons styles
import 'remixicon/fonts/remixicon.css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// global styles
import './globals.css'
import AuthProvider from './AuthProvider'

export const metadata: Metadata = {
  title: 'Flick - Enjoy Movies & TV Show',
  description:
    'A next-generation streaming platform offering a vast library of movies and TV shows.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </AuthProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
