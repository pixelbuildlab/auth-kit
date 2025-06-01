import React from 'react'
import { FirebaseAuthProvider } from '@/components/Providers'
import { Header } from '@/components/ui/custom'

type Props = { children: React.ReactNode }

function layout({ children }: Props) {
  return (
    <FirebaseAuthProvider>
      <Header />
      {children}
    </FirebaseAuthProvider>
  )
}

export default layout
