'use client'
import React from 'react'
import { Button } from '../button'
import { useTheme } from 'next-themes'
import { DarkMode, LightMode } from '../SVG'

function ThemeManager() {
  const { theme, setTheme } = useTheme()

  const currentState =
    theme === 'dark'
      ? {
          next: 'light',
          text: (
            <>
              <LightMode /> &nbsp; Light Mode
            </>
          ),
        }
      : {
          next: 'dark',
          text: (
            <>
              <DarkMode /> &nbsp; Dark Mode
            </>
          ),
        }

  return (
    <Button
      onClick={() => {
        setTheme(currentState.next)
      }}
      className='w-full'
    >
      {currentState.text}
    </Button>
  )
}

export default ThemeManager
