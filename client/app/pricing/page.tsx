import { Header } from '@/components/Home/Header'
import { PricingPage } from '@/components/Pricing'

export const metadata = {
  title: 'Pricing - Auth-Kit',
  description:
    'Choose the right plan for your authentication needs with Auth-Kit.',
}
export default function Page() {
  return (
    <>
      <Header />
      <PricingPage />
    </>
  )
}
