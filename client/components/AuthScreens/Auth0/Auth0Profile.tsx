'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { UserProfile } from '@/components/Profile'
import type { Claims } from '@auth0/nextjs-auth0'

type Props = { user: Claims }

export const Auth0Profile = ({ user }: Props) => {
  const router = useRouter()

  return (
    <UserProfile
      user={user}
      logout={() => {
        router.push('/api/auth/logout')
      }}
      profileType='Auth0'
    />
  )
}
