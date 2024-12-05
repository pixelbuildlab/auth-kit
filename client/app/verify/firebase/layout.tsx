import { Button } from '@/components/ui/button'
import { Header } from '@/components/ui/custom'
import { AUTH_KIT_ROUTES } from '@/constants'
import Link from 'next/link'
import React from 'react'

type Props = { children: React.ReactNode }

function VerifyFirebaseLayout({ children }: Props) {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center w-96 h-full overflow-hidden'>
        <div className='flex flex-col w-full p-4'>
          <Header />
          {children}
          <Link
            href={AUTH_KIT_ROUTES.onboarding}
            className='grow mt-3'
          >
            <Button className='w-full'>Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default VerifyFirebaseLayout
