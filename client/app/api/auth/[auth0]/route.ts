import { handleAuth, handleLogin } from '@auth0/nextjs-auth0'
import type { NextApiRequest, NextApiResponse } from 'next'

export const GET = handleAuth({
  login: async (req: NextApiRequest, res: NextApiResponse) => {
    const url = new URL(req.url!)
    const returnTo = url.searchParams.get('returnTo') || '/client/auth0/profile'

    return handleLogin(req, res, {
      returnTo,
      authorizationParams: {
        prompt: 'login',
      },
    })
  },
})
