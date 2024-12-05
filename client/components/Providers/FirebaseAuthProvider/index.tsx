'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import {
  FirebaseAuthUser,
  FirebaseUserAuthContextValue,
} from '@/types/AuthTypes'
import { AUTH_KIT_KEY, AUTH_KIT_ROUTES } from '@/constants'
import { LoadingSpinner } from '@/components/ui/custom/Loader'
import { FirebAseUserAuthContext } from '@/context/firebaseContext'
import { useUserAuthContext } from '@/hooks/common/useUserAuthContext'

type Props = { children: React.ReactNode }

const PROTECTED_ROUTE = 'profile'

export function FirebaseAuthProvider({ children }: Props) {
  const [user, setUser] = useState<FirebaseAuthUser | null>(null)
  const [loading, setLoading] = useState(true)
  const { toggleAuthenticationType, handleAuthType } = useUserAuthContext()

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const isProtected = pathname?.split('/').includes(PROTECTED_ROUTE)

    const storageUser = localStorage.getItem(AUTH_KIT_KEY)
    const isAuthenticated = !!storageUser

    if (isProtected && !isAuthenticated) {
      router.push(AUTH_KIT_ROUTES.onboarding)
      return
    }

    if (isAuthenticated) {
      setUser(JSON.parse(storageUser))
    }

    setLoading(false)
  }, [pathname, router])

  const login = (userData: FirebaseAuthUser) => {
    setUser(userData)
    localStorage.setItem(AUTH_KIT_KEY, JSON.stringify(userData))
    router.replace('/client/firebase/profile')
    handleAuthType('firebase')
    toggleAuthenticationType()
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem(AUTH_KIT_KEY)
    router.push(AUTH_KIT_ROUTES.onboarding)
  }

  const value: FirebaseUserAuthContextValue = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  }

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <FirebAseUserAuthContext.Provider value={value}>
      {children}
    </FirebAseUserAuthContext.Provider>
  )
}
