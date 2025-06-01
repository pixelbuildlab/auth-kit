import { getSession } from '@auth0/nextjs-auth0'
import { Auth0Boarding } from '@/components/AuthScreens/Auth0'

export const metadata = {
  title: 'Auth0',
  description: 'Try Auth0 full flow with Next.js',
}

async function MainPage() {
  const session = await getSession()
  const user = session?.user || null

  return <Auth0Boarding isLoggedIn={!!user} />
}

export default MainPage
