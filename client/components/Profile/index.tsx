'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { AUTH_KIT_ROUTES } from '@/constants'
import type { FirebaseAuthUser } from '@/types/AuthTypes'
import type { Claims } from '@auth0/nextjs-auth0'

type Props = {
  user: FirebaseAuthUser | Claims | null
  logout?: () => void
  profileType?: 'Firebase' | 'Auth0' | 'Custom'
}

const UserProfile: React.FC<Props> = ({ logout, user, profileType }) => {
  const handleLogout = () => {
    logout && logout()
    // Uncomment the below line to redirect after logout
    // router.push(AUTH_KIT_ROUTES.login)
  }

  return (
    <div className='min-h-screen flex flex-col items-center py-10 px-6'>
      <div className=' shadow-lg rounded-lg p-8 max-w-md w-full text-center'>
        <h1 className='text-2xl font-bold  mb-4'>
          Welcome to Your <>{profileType}</> Profile
        </h1>
        <p className='mb-6'>
          {user
            ? `Logged in as ${user.email}`
            : 'No user information available.'}
        </p>
        <div className='flex justify-center items-center gap-4'>
          <Button
            onClick={handleLogout}
            className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded'
          >
            Logout
          </Button>
          <Link href={AUTH_KIT_ROUTES.home}>
            <Button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'>
              Go to Home
            </Button>
          </Link>
        </div>
      </div>
      <footer className='mt-10 text-sm'>
        &copy; {new Date().getFullYear()} Auth-Kit All rights reserved.
      </footer>
    </div>
  )
}

export { UserProfile }
