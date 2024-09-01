'use client'
import React from 'react'
import { redirect } from 'next/navigation'
import toast from 'react-hot-toast'
import FormFooter from '../../ui/custom/FormFooter'
import { AUTH_KIT_ROUTES } from '@/constants'
import { Form, FormSubmission, TextInput } from '../../ui/FormUi'
import { resetFirebasePassword } from '@/hooks/firebase'

type ForgotPasswordData = {
  email: string
}

const ForgotPassword = () => {
  const formAction = async (formData: ForgotPasswordData) => {
    const { email } = formData
    if (!email) {
      toast.error('Email Required')
      return
    }
    try {
      const response = await resetFirebasePassword({ email })
      redirect(AUTH_KIT_ROUTES.login)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h5 className='mb-2'>Enter email to reset password</h5>
      <Form<ForgotPasswordData> onSave={formAction}>
        <TextInput
          name='email'
          label='Email'
          placeholder='example@email.com'
        />
        <FormSubmission
          linkPath={AUTH_KIT_ROUTES.login}
          primaryLabel='Reset Password'
          secondaryLabel='Login'
          lastButtonLabel='Sign Up'
          lastLink={AUTH_KIT_ROUTES.register}
        />
      </Form>
      <FormFooter />
    </>
  )
}

export default ForgotPassword
