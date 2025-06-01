import { Auth0Boarding } from '@/components/AuthScreens/Auth0'

export const metadata = {
  title: 'Auth0',
  description: 'Try Auth0 full flow with Next.js',
}

function MainPage() {
  return <Auth0Boarding />
}

export default MainPage
