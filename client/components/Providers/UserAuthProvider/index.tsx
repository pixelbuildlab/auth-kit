'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { AuthUser, UserAuthContextValue } from '@/types/AuthTypes'
import { UserAuthContext } from '@/context/userAuthContext'
import { AUTH_KIT_KEY, AUTH_KIT_ROUTES } from '@/constants'
import { LoadingSpinner } from '@/components/ui/custom/Loader'

type Props = { children: React.ReactNode }

const PROTECTED_ROUTES = ['/', '/profile']

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const isProtected = PROTECTED_ROUTES.includes(pathname)

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

  const login = (userData: AuthUser) => {
    setUser(userData)
    localStorage.setItem(AUTH_KIT_KEY, JSON.stringify(userData))
    router.replace(AUTH_KIT_ROUTES.home)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem(AUTH_KIT_KEY)
    router.push(AUTH_KIT_ROUTES.onboarding)
  }

  const value: UserAuthContextValue = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  }

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  )
}
