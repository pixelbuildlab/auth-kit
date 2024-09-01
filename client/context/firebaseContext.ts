import { User } from 'firebase/auth'
import React from 'react'

export type FirebaseUser = User | null

export type FirebaseContextValue = {
  firebaseUser: FirebaseUser
}

export const FirebaseContext = React.createContext<
  FirebaseContextValue | undefined
>(undefined)
