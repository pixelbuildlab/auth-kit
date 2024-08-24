import React from 'react'
import { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Inter as FontSans } from 'next/font/google'
import { ThemeProvider } from '@/components/Providers'
import { DynamicHeader } from '@/components/ui/custom'
import './globals.css'

const inter = FontSans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Auth App',
  description: 'Authentication demo in Next.js 14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <head />
      <body className={cn(inter.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
