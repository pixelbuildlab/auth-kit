import { FirebaseContext } from '@/context/firebaseContext'
import React from 'react'

export const useFirebaseContext = () => {
  const context = React.useContext(FirebaseContext)
  if (context === undefined) {
    throw new Error('useFirebaseContext must be used within a FirebaseContext')
  }
  return context
}
