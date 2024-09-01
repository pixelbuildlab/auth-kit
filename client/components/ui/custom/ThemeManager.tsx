import React from 'react'
import { Button } from '../button'
import { useTheme } from 'next-themes'

function ThemeManager() {
  const { theme, setTheme } = useTheme()

  const currentState =
    theme === 'dark'
      ? { next: 'light', text: 'Lights' }
      : { next: 'dark', text: 'Go Dark' }

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
