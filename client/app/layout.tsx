import React from 'react'
import { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Toaster as HotToaster } from 'react-hot-toast'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import {
  TanstackQueryProvider,
  ThemeProvider,
  UserAuthProvider,
} from '@/components/Providers'
import { Toaster } from 'sonner'
// import { UserProvider } from '@auth0/nextjs-auth0/client'

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
        className={cn(inter.className, 'select-none')}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {/* <UserProvider> */}
          <UserAuthProvider>
            <TanstackQueryProvider>
              <Toaster position='top-right' />
              <HotToaster toastOptions={{ position: 'top-right' }} />
              {children}
            </TanstackQueryProvider>
          </UserAuthProvider>
          {/* </UserProvider> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
