import { Button } from '@/components/ui/button'
import { AUTH_KIT_ROUTES } from '@/constants'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      Auth-Kit Home
      <br />
      THIS IS PROTECT PAGE REPORT IF YOU WERE NOT MEANT TO SEE
      <Button>
        <Link
          href={AUTH_KIT_ROUTES.profile}
          className='w-full'
        >
          Admin
        </Link>
      </Button>
    </main>
  )
}
