'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Tile } from '@/components/ui/custom'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/store'
import { AUTH0_TILES, AUTH_KIT_ROUTES } from '@/constants'

type Auth0BoardingProps = {
  isLoggedIn: boolean
}
export function Auth0Boarding({ isLoggedIn }: Auth0BoardingProps) {
  const [selectedOption, setSelectedOption] = React.useState('')

  const router = useRouter()
  const restoreAuthFlow = useAuthStore((store) => store.resetAuthStore)

  const handleReset = () => {
    restoreAuthFlow()
    router.replace(AUTH_KIT_ROUTES.onboarding)
  }

  const handleTileClick = (id: string) => {
    if (id === selectedOption && id === 'auth0') {
      setSelectedOption('')
      router.replace('/api/auth/login')
    } else if (id === selectedOption && id === 'profile') {
      router.push('/client/auth0/profile')
    } else {
      setSelectedOption(id)
    }
  }

  const tiles = React.useMemo(() => {
    return AUTH0_TILES.filter((tile) => {
      if (tile.id === 'profile') {
        return isLoggedIn
      }
      return true
    })
  }, [isLoggedIn])

  return (
    <div className='flex gap-3 flex-col w-full justify-center items-center'>
      {tiles.map((tile) => (
        <Tile
          key={tile.id}
          title={tile.title}
          description={tile.description}
          onClick={handleTileClick}
          id={tile.id}
          active={selectedOption === tile.id}
        />
      ))}
      <Button onClick={handleReset}>Select Again</Button>
    </div>
  )
}
