export type FirebaseAuthUser = {
  id: string
  email: string
  username?: string
  profilePicture?: string
  provider: string
}

export type FirebaseUserAuthContextValue = {
  user: FirebaseAuthUser | null
  isAuthenticated: boolean
  login: (userData: FirebaseAuthUser) => void
  logout: () => void
}

//global user auth context types
// we only need authentication status and login type

export type AuthTypes = 'firebase' | 'auth0' | 'custom' | null
export type GlobalUserAuthContextValue = {
  handleAuthType: (authType: AuthTypes) => void
  toggleAuthenticationType: () => void
  isAuthenticated: boolean
  authType: AuthTypes
}
