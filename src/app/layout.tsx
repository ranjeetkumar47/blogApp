import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My name is Ranjeet kumarrrrrrrrrrrrrrrrrrrrr',
  description: 'My name is Ranjeet kumarrrrrrrrrrrrrrrrrrrrr'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
