import React from 'react'
import { HomePage } from '@/components/Home'
import { Header } from '@/components/Home/Header'

export const metadata = {
  title: 'Auth-Kit',
  description: 'A comprehensive authentication solution for your applications.',
}

export default function Home() {
  return (
    <div className='min-h-screen '>
      <Header />
      <HomePage />
    </div>
  )
}
