import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

// vidstack styles
import '@vidstack/react/player/styles/default/theme.css'
import '@vidstack/react/player/styles/default/layouts/video.css'

// remixicons styles
import 'remixicon/fonts/remixicon.css'

// swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// react loading skeleton
import 'react-loading-skeleton/dist/skeleton.css'
import AuthProvider from './AuthProvider'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
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
      <body className={openSans.variable}>
        <AuthProvider>{children}</AuthProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
