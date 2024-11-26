import React from 'react'
import { UserAuthContextValue } from '@/types/AuthTypes'

export const UserAuthContext = React.createContext<
  UserAuthContextValue | undefined
>(undefined)
