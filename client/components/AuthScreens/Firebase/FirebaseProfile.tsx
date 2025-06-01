'use client'
import React from 'react'
import { signOut } from 'firebase/auth'
import { UserProfile } from '@/components/Profile/UserProfile'
import { firebaseAppAuth } from '@/lib/firebase'
import { useFirebaseContext } from '@/hooks/common/useFirebaseContext'
import { NoUserProfile } from '@/components/Profile'

export const FirebaseProfile = () => {
  const { user, logout } = useFirebaseContext()

  if (!user) {
    console.log('Firebase profile page: No user found in context')
    return <NoUserProfile />
  }

  const handleLogout = () => {
    signOut(firebaseAppAuth)
    logout()
    // Uncomment the below line to redirect after logout
    // router.push(AUTH_KIT_ROUTES.login)
  }

  return (
    <UserProfile
      user={user}
      logout={handleLogout}
      profileType='Firebase'
    />
  )
}
