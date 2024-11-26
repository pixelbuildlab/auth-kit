'use client'
import React from 'react'
import toast from 'react-hot-toast'
import FormFooter from '../../ui/custom/FormFooter'
import { AUTH_KIT_ROUTES } from '@/constants'
import { createFirebaseUser, updateFirebaseUser } from '@/hooks/firebase'
import { Form, FormSubmission, TextInput } from '../../ui/FormUi'
import { firebaseCurrentUser } from '@/lib/firebase'
import { useUserAuthContext } from '@/hooks/common/useUserAuthContext'
import { AuthUser } from '@/types/AuthTypes'

type RegisterData = {
  email: string
  password: string
  username: string
}

const SignUp = () => {
  const { login } = useUserAuthContext()
  const formAction = async (formData: RegisterData) => {
    const { email, password, username } = formData

    if (!email) {
      toast.error('Email Required')
      return
    } else if (!password) {
      toast.error('Password Required')
      return
    } else if (!username) {
      toast.error('Username Required')
      return
    }

    try {
      await createFirebaseUser({ email, password })
      await updateFirebaseUser({ username })
      // redirect(AUTH_KIT_ROUTES.login, RedirectType.push)

      if (firebaseCurrentUser) {
        const authUser: AuthUser = {
          email: firebaseCurrentUser.email || '',
          id: firebaseCurrentUser.uid,
          provider: firebaseCurrentUser.providerId,
          profilePicture: firebaseCurrentUser.photoURL || '',
          username: firebaseCurrentUser.displayName + '',
        }

        login(authUser)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h5 className='mb-2'>Please sign up to continue</h5>
      <Form<RegisterData> onSave={formAction}>
        <TextInput
          name='username'
          label='Username'
          placeholder='user007'
        />
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
          linkPath={AUTH_KIT_ROUTES.login}
          primaryLabel='Sign Up'
          secondaryLabel='Login'
        />
      </Form>

      <FormFooter />
    </>
  )
}

export default SignUp
