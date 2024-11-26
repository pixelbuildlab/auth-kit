export type AuthUser = {
  id: string
  email: string
  username?: string
  profilePicture?: string
  provider: string
}

export type UserAuthContextValue = {
  user: AuthUser | null
  isAuthenticated: boolean
  login: (userData: AuthUser) => void
  logout: () => void
}
