import { AuthStateFullLink, NoSSThemeManager } from '@/components/ui/custom'
import Link from 'next/link'
import React from 'react'

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

      <main className='container mx-auto px-6 py-12 space-y-16'>
        {/* Hero Section */}
        <section className='text-center space-y-6'>
          <h2 className='text-3xl font-extrabold'>
            Secure and Scalable Authentication Made Easy
          </h2>
          <p>
            Auth-Kit is your go-to solution for implementing robust
            authentication systems with modern tech.
          </p>
          <a
            href='#features'
            className='btn hover:bg-primary-dark'
          >
            Explore Features
          </a>
        </section>

        {/* Features Section */}
        <section
          id='features'
          className='space-y-6'
        >
          <h3 className='text-2xl font-semibold'>Key Features</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              {
                title: 'User Registration',
                description:
                  'Easily onboard users with secure and customizable forms.',
              },
              {
                title: 'User Login',
                description:
                  'Implement login with password or third-party providers.',
              },
              {
                title: 'Session Management',
                description:
                  'Handle secure sessions and maintain user data efficiently.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className='p-6 shadow-md rounded-lg hover:shadow-lg'
              >
                <h4 className='text-lg font-bold text-primary'>
                  {feature.title}
                </h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section
          id='tech-stack'
          className='space-y-6'
        >
          <h3 className='text-2xl font-semibold'>Tech Stack</h3>
          <ul className='list-disc list-inside space-y-2'>
            <li>Frontend: Next.js 14, React.js, ChadCN UI</li>
            <li>Backend: Nest.js, Express.js</li>
            <li>
              Authentication Services: Auth0, Firebase, Okta, Passport.js,
              Supabase Auth
            </li>
          </ul>
        </section>

        {/* Setup Section */}
        <section
          id='setup'
          className='space-y-6'
        >
          <h3 className='text-2xl font-semibold'>Setup Guide</h3>
          <p>Follow these steps to run Auth-Kit locally:</p>
          <ol className='list-decimal list-inside space-y-2'>
            <li>
              Clone the repository and navigate to the appropriate directory.
            </li>
            <li>
              Install dependencies with <code>npm install</code>.
            </li>
            <li>
              Start the development server using <code>npm run dev</code>.
            </li>
          </ol>
        </section>
      </main>

      <footer
        id='contact'
        className='py-6'
      >
        <div className='container mx-auto text-center'>
          <p>Created with 💻 by Muhammad Waqar</p>
          <p>
            <a
              href='mailto:waqardanish1@gmail.com'
              className='hover:text-primary'
            >
              waqardanish1@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
