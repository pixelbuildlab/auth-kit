'use client'
import React, { useEffect, useState } from 'react'
import { UserAuthContext } from '@/context/userAuthContext'

type Props = { children: React.ReactNode }

export function UserAuthProvider({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [authType, setAuthType] = useState('')

  const toggleAuthenticationType = () => setIsAuthenticated(!isAuthenticated)
  const handleAuthType = (authType: string) => setAuthType(authType)

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
