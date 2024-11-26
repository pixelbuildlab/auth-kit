'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { AuthUser, UserAuthContextValue } from '@/types/AuthTypes'
import { UserAuthContext } from '@/context/userAuthContext'
import { AUTH_KIT_ROUTES } from '@/constants'

type Props = { children: React.ReactNode }

const PROTECTED_ROUTES = ['/', '/profile']

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const isProtected = PROTECTED_ROUTES.includes(pathname)

    const storageUser = localStorage.getItem('user')
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
    localStorage.setItem('user', JSON.stringify(userData))
    router.replace(AUTH_KIT_ROUTES.home)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    router.push(AUTH_KIT_ROUTES.login)
  }

  const value: UserAuthContextValue = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  )
}
