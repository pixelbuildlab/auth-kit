import React from 'react'
import { NoSSThemeManager } from '@/components/ui/custom'
import Link from 'next/link'
import { HomePage } from '@/components/Home'

export const metadata = {
  title: 'Auth-Kit',
  description: 'A comprehensive authentication solution for your applications.',
}

export default function Home() {
  return (
    <div className='min-h-screen '>
      <header className='shadow-sm '>
        <div className='container mx-auto py-4 px-6 flex justify-between items-center'>
          <h1 className='text-xl font-bold'>Auth-Kit</h1>
          <nav className='flex space-x-3 items-center'>
            <Link
              href='/onboarding'
              className='hover:text-primary'
            >
              Try Auth-Kit
            </Link>
            {/* <a
              href='#features'
              className='hover:text-primary'
            >
              Features
            </a>
            <a
              href='#tech-stack'
              className='hover:text-primary'
            >
              Tech Stack
            </a>
            <a
              href='#setup'
              className='hover:text-primary'
            >
              Setup
            </a>
            <a
              href='#contact'
              className='hover:text-primary'
            >
              Contact
            </a> */}
            {/* <AuthStateFullLink /> */}
            <div className='ml-2'>
              <NoSSThemeManager />
            </div>
          </nav>
        </div>
      </header>
      <HomePage />
    </div>
  )
}
