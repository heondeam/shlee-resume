import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@components/common/navbar'
import Sidebar from '@components/common/sidebar'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'shlee-portfolio',
  description: '이성헌의 포트폴리오 사이트입니다.',
  icons: ['/assets/svg/logo.svg']
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/assets/svg/logo.svg" sizes="any" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
