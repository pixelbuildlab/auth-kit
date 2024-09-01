'use client'
import React from 'react'
import { NoSSThemeManager, Tile } from '../ui/custom'
import toast from 'react-hot-toast'
import { AUTH_OPTIONS } from '@/constants'
import { useAuthStore } from '@/store'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

export function Main() {
  const router = useRouter()
  //main function to store user selection
  const setScreenOptions = useAuthStore((store) => store.setScreenOptions)
  //main fn to change screens
  const setScreen = useAuthStore((store) => store.setScreen)
  //reset auth flow
  const resetAuth = useAuthStore((store) => store.resetAuthStore)

  //get screen or step status from store
  const storeScreen = useAuthStore((store) => store.screen)

  //checking if user made a selection to enable reset flow button
  const ifProgressed = useAuthStore((store) => store.isInProgress)

  //set route that will be used on final screen

  const setRoute = useAuthStore((store) => store.setRoute)

  const listOfAllScreenAndSelected = useAuthStore(
    (store) => store.screenOptions
  )

  const screen = AUTH_OPTIONS[storeScreen]

  const screenOption = listOfAllScreenAndSelected?.find(
    (opt) => opt.screen === storeScreen
  )

  const changeAuth = (id: string) => {
    const option = screen.options.find((opt) => opt.id === id)

    if (screenOption?.optionId === id) {
      if (id !== '1') {
        toast.error('Currently not implemented')
        return
      }
      if (storeScreen !== 'main') {
        const link = screen.mainRoute + option?.route
        setRoute(link)
        router.push(link)
      }
      if (screenOption.screen === 'main' && screenOption.optionId === '1') {
        setScreen('frontend')
      } else if (
        screenOption.screen === 'main' &&
        screenOption.optionId === '2'
      ) {
        setScreen('backend')
      }
      return
    }

    toast.success(option?.info || '')
    setScreenOptions({ screen: storeScreen, optionId: id })
  }

  return (
    <div className='w-screen py-4 md:p-0 md:h-screen flex justify-center items-center'>
      <div className='flex justify-center items-center flex-col gap-10 md:-mt-16'>
        <div>
          <NoSSThemeManager />
        </div>
        <p className='text-2xl font-semibold text-center'>{screen.heading}</p>
        <div className='flex gap-7 flex-col  justify-center items-center flex-wrap md:flex-row p-3 w-screen'>
          {screen.options.map((option) => (
            <Tile
              key={option.id}
              onClick={changeAuth}
              id={option.id}
              title={option.title}
              description={option.description}
              active={option.id === screenOption?.optionId}
            />
          ))}
        </div>
        <Button
          onClick={resetAuth}
          disabled={!ifProgressed}
        >
          Restart Flow
        </Button>
      </div>
    </div>
  )
}
