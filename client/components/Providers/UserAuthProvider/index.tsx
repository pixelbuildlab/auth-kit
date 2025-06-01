'use client'
import React, { useState } from 'react'
import { UserAuthContext } from '@/context/userAuthContext'
import type { AuthTypes } from '@/types/AuthTypes'

type Props = { children: React.ReactNode }

export function UserAuthProvider({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [authType, setAuthType] = useState<AuthTypes | null>(null)

  const toggleAuthenticationType = () => setIsAuthenticated(!isAuthenticated)
  const handleAuthType = (authType: AuthTypes) => setAuthType(authType)

  const value = {
    handleAuthType,
    toggleAuthenticationType,
    isAuthenticated,
    authType,
  }

  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  )
}
