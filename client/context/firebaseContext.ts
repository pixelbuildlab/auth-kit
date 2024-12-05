import React from 'react'
import { FirebaseUserAuthContextValue } from '@/types/AuthTypes'

export const FirebAseUserAuthContext = React.createContext<
  FirebaseUserAuthContextValue | undefined
>(undefined)
