'use client'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  useConfirmPasswordReset,
  useVerifyPasswordCode,
} from '@/hooks/firebase'
import { LoadingSpinner } from '@/components/ui/custom/Loader'

function FirebaseVerify() {
  const searchParams = useSearchParams()
  const code = searchParams.get('oobCode')
  const {
    data: firebaseResponse,
    error,
    isLoading,
  } = useVerifyPasswordCode(code)
  const { mutateAsync: updateUserPassword } = useConfirmPasswordReset()

  if (isLoading) return <LoadingSpinner />
  if (error) return <>EROOR {JSON.stringify(error)}</>
  if (!code) return <>Unable to process request this time.</>
  const up = async () => {
    await updateUserPassword({ code, password: 'qwerty12345' })
  }
  return (
    <>
      <button onClick={up}>Verify</button>
    </>
  )
}

export default function FirebaseWrapped() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <FirebaseVerify />
    </Suspense>
  )
}
