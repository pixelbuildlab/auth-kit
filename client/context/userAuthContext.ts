import React from 'react'
import { GlobalUserAuthContextValue } from '@/types/AuthTypes'

export const UserAuthContext = React.createContext<
  GlobalUserAuthContextValue | undefined
>(undefined)
