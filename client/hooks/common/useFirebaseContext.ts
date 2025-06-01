import React from 'react'
import { FirebAseUserAuthContext } from '@/context/firebaseContext'

export const useFirebaseContext = () => {
  const context = React.useContext(FirebAseUserAuthContext)
  if (context === undefined) {
    throw new Error('useFirebaseContext must be used within a FirebaseContext')
  }
  return context
}
