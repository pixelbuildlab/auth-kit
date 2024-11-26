'use client'
import React from 'react'
import { redirect } from 'next/navigation'
import toast from 'react-hot-toast'
import FormFooter from '../../ui/custom/FormFooter'
import { AUTH_KIT_ROUTES } from '@/constants'
import { loginFirebaseUser } from '@/hooks/firebase'
import { Form, FormSubmission, TextInput } from '../../ui/FormUi'
import { firebaseCurrentUser } from '@/lib/firebase'
import { AuthUser } from '@/types/AuthTypes'
import { useUserAuthContext } from '@/hooks/common/useUserAuthContext'

type RegisterData = {
  email: string
  password: string
}

const Login = () => {
  const { login } = useUserAuthContext()

  const formAction = async (formData: RegisterData) => {
    const { email, password } = formData
    if (!email) {
      toast.error('Email Required')
      return
    } else if (!password) {
      toast.error('Password Required')
      return
    }
    try {
      const response = await loginFirebaseUser({ email, password })

      if (response) {
        const authUser: AuthUser = {
          email: response.user.email || '',
          id: response.user.uid,
          provider: response.providerId + '',
          profilePicture: response.user.photoURL || '',
          username: response.user.displayName + '',
        }

        login(authUser)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h5 className='mb-2'>Please login to continue</h5>
      <Form<RegisterData> onSave={formAction}>
        <TextInput
          name='email'
          label='Email'
          placeholder='example@email.com'
        />
        <TextInput
          name='password'
          label='Password'
          type='password'
        />
        <FormSubmission
          linkPath={AUTH_KIT_ROUTES.register}
          primaryLabel='Login'
          secondaryLabel='Sign Up'
        />
      </Form>
      <FormFooter />
    </>
  )
}

export default Login
