import React from 'react'
import { getSession } from '@auth0/nextjs-auth0'
import { Auth0Profile } from '@/components/AuthScreens/Auth0'
import { AUTH_KIT_ROUTES } from '@/constants'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

async function ProfilePage() {
  const session = await getSession()
  if (!session) {
    return (
      <div className='flex flex-col gap-3 items-center justify-center'>
        <p className='text-center'>
          You are not logged in. Please log in to view your profile.
        </p>
        <Link href={AUTH_KIT_ROUTES.home}>
          <Button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'>
            Go to Home
          </Button>
        </Link>
      </div>
    )
  }
  const user = session.user
  if (!user) {
    return (
      <div className='flex flex-col gap-3 items-center justify-center'>
        <p>No user information available. Please log in.</p>
        <Link href={AUTH_KIT_ROUTES.home}>
          <Button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'>
            Go to Home
          </Button>
        </Link>
      </div>
    )
  }

  return <Auth0Profile user={user} />
}

export default ProfilePage
