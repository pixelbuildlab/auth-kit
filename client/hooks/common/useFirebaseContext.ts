import { FirebAseUserAuthContext } from '@/context/firebaseContext'
import React from 'react'

export const useFirebaseContext = () => {
  const context = React.useContext(FirebAseUserAuthContext)
  if (context === undefined) {
    throw new Error('useFirebaseContext must be used within a FirebaseContext')
  }
  return context
}
