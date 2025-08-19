import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getCurrentPractice } from '@/lib/practice-config'

const inter = Inter({ subsets: ['latin'] })
const practice = getCurrentPractice()

export const metadata: Metadata = {
  title: practice.template.pageTitle,
  description: `Professional healthcare services with ${practice.doctor} at ${practice.name}`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}