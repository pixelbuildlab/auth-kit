'use client'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Tile } from '../ui/custom'
import { Button } from '../ui/button'
import { AUTH_FINAL_OPTIONS, AUTH_KIT_ROUTES } from '@/constants'
import { useAuthStore } from '@/store'
import { useFirebaseContext } from '@/hooks/common/useFirebaseContext'

type Props = {
  isLoggedIn: boolean
}

function FinalScreenComp({ isLoggedIn }: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const selectedOption = useAuthStore(
    (store) => store.finalScreenSelectionOption
  )
  const restoreAuthFlow = useAuthStore((store) => store.resetAuthStore)
  const currentPath = useAuthStore((store) => store.route) || pathname || ''
  const setFinalScreenOptions = useAuthStore((store) => store.setFinalSelection)

  const handleTileClick = (id: string) => {
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

  const filteredTiles = React.useMemo(() => {
    return AUTH_FINAL_OPTIONS.filter((tile) => {
      if (tile.route === '/profile') {
        return isLoggedIn
      }
      return true
    })
  }, [isLoggedIn])

  return (
    <div className='flex gap-3 flex-col w-full justify-center items-center'>
      {filteredTiles.map((option) => (
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

export function FinalScreen() {
  const { user } = useFirebaseContext()
  console.log(user, 'FinalScreen user')
  return <FinalScreenComp isLoggedIn={!!user} />
}
