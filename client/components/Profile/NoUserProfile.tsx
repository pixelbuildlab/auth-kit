'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useAuthStore } from '@/store'
import { AUTH_KIT_ROUTES } from '@/constants'

export function NoUserProfile() {
  const restoreAuthFlow = useAuthStore((store) => store.resetAuthStore)

  return (
    <div className='flex flex-col gap-3 items-center justify-center'>
      <p className='text-center'>
        You are not logged in. Please log in to view your profile.
      </p>
      <Link
        href={AUTH_KIT_ROUTES.home}
        onClick={restoreAuthFlow}
      >
        <Button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'>
          Go to Home
        </Button>
      </Link>
    </div>
  )
}
