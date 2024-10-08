import React from 'react'
import { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Inter as FontSans } from 'next/font/google'
import { ThemeProvider } from '@/components/Providers'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import FirebaseAuthProvider from '@/components/Providers/FirebaseAuthProvider'
import TanstackQueryProvider from '@/components/Providers/TanstackQueryProvider'

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
      <body className={cn(inter.className, 'select-none')}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <TanstackQueryProvider>
            <FirebaseAuthProvider>
              <>
                <Toaster toastOptions={{ position: 'top-right' }} />
                {children}
              </>
            </FirebaseAuthProvider>
          </TanstackQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
