'use client'
import React from 'react'
import { NoSSThemeManager } from './DynamicTMButton'

function Header() {
  return (
    <div className='flex justify-center mb-5 flex-col gap-2 text-center'>
      <h2 className='text-center text-xl'>Auth-Kit</h2>
      <NoSSThemeManager />
      <hr />
    </div>
  )
}

export { Header }
