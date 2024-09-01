'use client'
import { Button } from '@/components/ui/button'
import { AUTH_KIT_ROUTES } from '@/constants'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeProvider } from '@/components/Providers'
import { NoSSThemeManager } from '@/components/ui/custom'

type Props = {}
export const metadata: Metadata = {
  title: 'Resource Unavailable',
  description: 'Authentication demo in Next.js 14',
}

function NotFound({}: Props) {
  return (
    <ThemeProvider>
      <div className='w-screen h-screen flex  flex-col gap-10 justify-center items-center'>
        <Image
          src='/not-found.png'
          alt='Error 404'
          width={480}
          height={0}
          style={{ width: 'auto' }}
          priority={true}
        />
        <b>Unable to locate requested Resource</b>
        <Button>
          <Link
            href={AUTH_KIT_ROUTES.onboarding}
            className='w-full'
          >
            Home
          </Link>
        </Button>
        <div>
          <NoSSThemeManager />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default NotFound
