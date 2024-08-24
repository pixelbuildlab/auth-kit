import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

type Props = {}

function AdminDashboard({}: Props) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex justify-between flex-col'>
        Only allowed if logged in{' '}
        <Link
          className='bg-white text-black mt-4 p-4 text-center'
          href='/login'
        >
          Logout
        </Link>
      </div>
      <Button>Chad cn Ui</Button>
      <div>
        <Link href='/'>Home</Link>
      </div>
    </div>
  )
}

export default AdminDashboard
