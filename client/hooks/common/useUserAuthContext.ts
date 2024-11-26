import React from 'react'
import { UserAuthContext } from '@/context/userAuthContext'

export const useUserAuthContext = () => {
  const context = React.useContext(UserAuthContext)
  if (!context) {
    throw new Error('useUserAuthContext must be used within an AuthProvider')
  }
  return context
}
