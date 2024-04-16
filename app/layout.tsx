import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ConvertNow - Your Online File Format Converter',
  description: 'ConvertNow is the ultimate online tool to convert images, videos, and audio files to any format you need. Fast, free, and user-friendly. Try it now!',
  keywords: 'File converter, Image conversion, Video converter, Audio file format, Online conversion tool, Convert media files, Free file conversion, Unlimited file conversion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className='pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
