'use client'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  useConfirmPasswordReset,
  useVerifyPasswordCode,
} from '@/hooks/firebase'
import { LoadingSpinner } from '@/components/ui/custom/Loader'
import { Form, FormSubmission, TextInput } from '@/components/ui/FormUi'
import { AUTH_KIT_ROUTES } from '@/constants'
import { CenteredContent } from '@/components/ui/custom'
import { toast } from 'sonner'

type ResetPassword = {
  password: string
  confirmPassword: string
}

function FirebaseVerify() {
  const searchParams = useSearchParams()

  const code = searchParams.get('oobCode')
  const {
    data: firebaseResponse,
    error,
    isLoading,
  } = useVerifyPasswordCode(code)

  const { mutateAsync: updateUserPassword, isPending: isUpdatingPassword } =
    useConfirmPasswordReset()

  if (isLoading) return <LoadingSpinner />
  if (error) return <>An error occurred while processing request</>
  if (!code) return <>Unable to process request this time.</>
  const formAction = async (formValues: ResetPassword) => {
    const { confirmPassword, password } = formValues
    if (!confirmPassword || !password) {
      toast.error('Please enter password and confirm password')

      return
    }
    if (confirmPassword !== password) {
      toast.error('Confirm Password does not match')
      return
    }
    if (password.length < 6) {
      toast.error('Password should be greater than six characters')
      return
    }
    try {
      await updateUserPassword({ code, password })
    } catch (error) {
      toast.error('Unable to update password')
    }
  }
  return (
    <>
      <h5 className='mb-2'>Please enter easy to remember password</h5>
      <Form<ResetPassword> onSave={formAction}>
        <TextInput
          name='password'
          type='password'
          label='Password'
        />
        <TextInput
          name='confirmPassword'
          type='password'
          label='Confirm Password'
        />
        <FormSubmission
          linkPath={AUTH_KIT_ROUTES.login}
          primaryLabel='Reset'
          disableExtraButtons={true}
        />
      </Form>
    </>
  )
}

function FirebaseWrapped() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <FirebaseVerify />
    </Suspense>
  )
}

export { FirebaseWrapped as FirebaseVerify }
