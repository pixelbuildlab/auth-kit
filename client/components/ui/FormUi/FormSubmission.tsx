'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '../button'
import Link from 'next/link'
import { AUTH_KIT_ROUTES } from '@/constants'
import { usePathname } from 'next/navigation'
type Keys = keyof typeof AUTH_KIT_ROUTES

type FormSubmissionProps = {
  primaryLabel: string
  secondaryLabel: string
  lastButtonLabel?: string
  linkPath: (typeof AUTH_KIT_ROUTES)[Keys]
  lastLink?: (typeof AUTH_KIT_ROUTES)[Keys]
}

export function FormSubmission({
  primaryLabel,
  secondaryLabel,
  lastButtonLabel = 'Forgot Password',
  lastLink = '/forgot-password',
  linkPath,
}: FormSubmissionProps) {
  const { pending } = useFormStatus()
  const pathname = usePathname()
  const regex = /^\/(client\/firebase)/
  const match = pathname.match(regex)

  const _route = match ? match[1] : null
  const route = '/' + _route
  return (
    <>
      <Button
        type='submit'
        disabled={pending}
      >
        {pending ? 'Loading' : primaryLabel}
      </Button>
      <Button
        type='button'
        disabled={pending}
      >
        <Link
          href={route + linkPath}
          className='w-full'
        >
          {secondaryLabel}
        </Link>
      </Button>
      <Button
        type='button'
        disabled={pending}
      >
        <Link
          href={route + lastLink}
          className='w-full'
        >
          {lastButtonLabel}
        </Link>
      </Button>
    </>
  )
}
