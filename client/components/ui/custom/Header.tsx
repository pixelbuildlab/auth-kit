'use client'
import { useTheme } from 'next-themes'
import React from 'react'
import { Button } from '../button'

function Header() {
  const { theme, setTheme } = useTheme()

  const currentState =
    theme === 'dark'
      ? { next: 'light', text: 'Lights' }
      : { next: 'dark', text: 'Go Dark' }

  return (
    <div className='flex justify-center align-middle mt-5 flex-col gap-2'>
      <Button
        onClick={() => {
          setTheme(currentState.next)
        }}
        className=''
      >
        {currentState.text}
      </Button>
      <hr />
    </div>
  )
}

export default Header
