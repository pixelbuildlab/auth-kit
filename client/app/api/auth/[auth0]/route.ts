import { handleAuth, handleLogin } from '@auth0/nextjs-auth0'
import type { NextApiRequest, NextApiResponse } from 'next'

export const GET = handleAuth({
  login: async (req: NextApiRequest, res: NextApiResponse) => {
    const url = new URL(req.url!)
    const returnTo = url.searchParams.get('returnTo') || '/client/auth0/profile'

    //     // Behavior	How to do it
    // Logout from app only	/api/auth/logout
    // Logout from app + Auth0 global	/api/auth/logout?federated
    // Force login screen on next login	/api/auth/login?prompt=login
    return handleLogin(req, res, {
      returnTo,
      authorizationParams: {
        prompt: 'login',
      },
    })
  },
})
