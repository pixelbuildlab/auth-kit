import React from 'react'
import { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Toaster } from 'react-hot-toast'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import {
  TanstackQueryProvider,
  ThemeProvider,
  UserAuthProvider,
} from '@/components/Providers'

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
            <UserAuthProvider>
              <>
                <Toaster toastOptions={{ position: 'top-right' }} />
                {children}
              </>
            </UserAuthProvider>
          </TanstackQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
