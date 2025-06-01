'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Tile } from '@/components/ui/custom'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/store'
import { AUTH_KIT_ROUTES } from '@/constants'

export function Auth0Boarding() {
  const router = useRouter()

  const restoreAuthFlow = useAuthStore((store) => store.resetAuthStore)
  const handleReset = () => {
    restoreAuthFlow()
    router.replace(AUTH_KIT_ROUTES.onboarding)
  }

  return (
    <div className='flex gap-3 flex-col w-full justify-center items-center'>
      <a
        href='/api/auth/login'
        className='w-full h-full flex items-center justify-center'
      >
        <Tile
          title='Auth0'
          description='Try Auth0 full flow with Next.js'
          key='auth0'
          active={false}
          id='auth0'
        />
      </a>
      <Button onClick={handleReset}>Select Again</Button>
    </div>
  )
}
