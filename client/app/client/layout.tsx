import { Header } from '@/components/ui/custom'
import React from 'react'

type Props = { children: React.ReactNode }

function layout({ children }: Props) {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center w-96 h-full overflow-hidden'>
        <div className='flex flex-col w-full p-4'>
          <Header />
          {children}
        </div>
      </div>
    </div>
  )
}

export default layout
