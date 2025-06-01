import React from 'react'
import Link from 'next/link'
import { NoSSThemeManager } from '../ui/custom'

export const Header = () => {
  return (
    <header className='shadow-sm dark:shadow-gray-800 bg-white dark:bg-gray-900'>
      <div className='container mx-auto py-4 px-6 flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Auth-Kit</h1>
        <nav className='flex space-x-3 items-center'>
          <Link
            href='/onboarding'
            className='hover:text-primary'
          >
            Try Auth-Kit
          </Link>
          <Link
            href='/pricing'
            className='hover:text-primary'
          >
            Pricing
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
  )
}
