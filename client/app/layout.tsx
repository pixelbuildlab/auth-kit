import React from 'react'
import { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Inter as FontSans } from 'next/font/google'
import Header from '@/components/ui/custom/Header'
import { ThemeProvider } from '@/components/Theme/theme-provider'
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
      <body
        className={cn(
          'min-h-screen bg-background antialiased h-full',
          inter.className
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex justify-center align-middle relative'>
            <div className=' flex m-8 flex-col gap-5 w-2/12'>
              <Header />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
