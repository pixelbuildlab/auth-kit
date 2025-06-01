'use client'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Tile } from '../ui/custom'
import { Button } from '../ui/button'
import { AUTH_FINAL_OPTIONS, AUTH_KIT_ROUTES } from '@/constants'
import { useAuthStore } from '@/store'

type Props = {}

export function FinalScreen({}: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const selectedOption = useAuthStore(
    (store) => store.finalScreenSelectionOption
  )
  const restoreAuthFlow = useAuthStore((store) => store.resetAuthStore)
  const currentPath = useAuthStore((store) => store.route) || pathname || ''
  const setFinalScreenOptions = useAuthStore((store) => store.setFinalSelection)

  const handleTileClick = (id: string) => {
    const opt = AUTH_FINAL_OPTIONS.find((opt) => opt.id === id)
    if (id == selectedOption) {
      const opt = AUTH_FINAL_OPTIONS.find((opt) => opt.id === id)
      router.replace(currentPath + opt?.route || '/')
      setFinalScreenOptions('')
      return
    }
    setFinalScreenOptions(id)
  }
  const handleReset = () => {
    restoreAuthFlow()
    router.replace(AUTH_KIT_ROUTES.onboarding)
  }

  return (
    <div className='flex gap-3 flex-col w-full justify-center items-center'>
      {AUTH_FINAL_OPTIONS.map((option) => (
        <Tile
          key={option.id}
          title={option.title}
          description={option.description}
          onClick={handleTileClick}
          id={option.id}
          active={selectedOption === option.id}
        />
      ))}
      <Button onClick={handleReset}>Select Again</Button>
    </div>
  )
}

export default FinalScreen
