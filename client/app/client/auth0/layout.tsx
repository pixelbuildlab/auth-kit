import React from 'react'
import { Header } from '@/components/ui/custom'

type Props = { children: React.ReactNode }

function layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default layout
