'use client'
import React from 'react'
import { signOut } from 'firebase/auth'
import { UserProfile } from '@/components/Profile'
import { firebaseAppAuth } from '@/lib/firebase'
import { useFirebaseContext } from '@/hooks/common/useFirebaseContext'

export const FirebaseProfile = () => {
  const { user, logout } = useFirebaseContext()

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
