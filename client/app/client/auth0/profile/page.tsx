import React from 'react'
import { getSession } from '@auth0/nextjs-auth0'
import { Auth0Profile } from '@/components/AuthScreens/Auth0'
import { NoUserProfile } from '@/components/Profile'

async function ProfilePage() {
  const session = await getSession()
  const user = session?.user || null

  if (!user) {
    console.log('Next.js Auth0 profile page: No user found in session')
    return <NoUserProfile />
  }

  return <Auth0Profile user={user} />
}

export default ProfilePage
