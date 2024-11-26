import React from 'react'

type Props = { children: React.ReactNode }

function CenteredContent({ children }: Props) {
  return (
    <div className='flex h-[100vh] w-full justify-center items-center'>
      {children}
    </div>
  )
}

export { CenteredContent }
