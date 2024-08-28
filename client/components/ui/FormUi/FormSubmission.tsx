'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '../button'
import Link from 'next/link'
import { AUTH_KIT_ROUTES } from '@/constants'
type Keys = keyof typeof AUTH_KIT_ROUTES

type FormSubmissionProps = {
  primaryLabel: string
  secondaryLabel: string
  linkPath: (typeof AUTH_KIT_ROUTES)[Keys]
}

export function FormSubmission({
  primaryLabel,
  secondaryLabel,
  linkPath,
}: FormSubmissionProps) {
  const { pending } = useFormStatus()
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
          href={linkPath}
          className='w-full'
        >
          {secondaryLabel}
        </Link>
      </Button>
    </>
  )
}
