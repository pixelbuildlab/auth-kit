'use client'
import React from 'react'
import { useFirebaseContext } from '@/hooks/common/useFirebaseContext'
import Link from 'next/link'
import { AUTH_KIT_ROUTES } from '@/constants'
import { Button } from '../ui/button'
import { signOut } from 'firebase/auth'
import { firebaseAppAuth } from '@/lib/firebase'
import { useRouter } from 'next/navigation'
import { useUserAuthContext } from '@/hooks/common/useUserAuthContext'

type Props = {}

function UserProfile({}: Props) {
  const { user } = useUserAuthContext()
  const router = useRouter()
  const handleLogout = () => {
    signOut(firebaseAppAuth)
    // router.push(AUTH_KIT_ROUTES.login)
  }
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex justify-between flex-col'>
        Only allowed if logged in <br />
        PROFILE
        {JSON.stringify(user)}
      </div>
      <Button onClick={handleLogout}>Logout</Button>
      <div>
        <Link href={AUTH_KIT_ROUTES.home}>Home</Link>
      </div>
    </div>
  )
}

export default UserProfile
