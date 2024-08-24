'use client'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'
import Link from 'next/link'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import FormFooter from '../ui/custom/FormFooter'
import firebase from 'firebase/compat/app'
import { firebaseApp } from '@/lib/firebase'
import { AUTH_KIT_ROUTES } from '@/constants'

const SubmitForm = () => {
  const { pending } = useFormStatus()
  return (
    <>
      <Button
        type='submit'
        disabled={pending}
      >
        {pending ? 'Loading' : 'Sign up'}
      </Button>
      <Button
        type='button'
        disabled={pending}
      >
        <Link href={AUTH_KIT_ROUTES.login}>Login</Link>
      </Button>
    </>
  )
}
const SignUp = () => {
  const auth = getAuth(firebaseApp)

  const formAction = async (formData: FormData) => {
    const email: string = formData.get('email') as string
    const password = formData.get('password') as string
    if (!email || !password) {
      return
    }
    await createUserWithEmailAndPassword(auth, email, password).catch((error) =>
      console.log(error)
    )
  }

  return (
    <>
      <h5 className='mb-2'>Please Sign up to continue</h5>
      <form
        className='flex flex-col gap-4'
        action={formAction}
      >
        <div>
          <label htmlFor='email'>Email</label>
          <Input
            placeholder='example@email.com'
            name='email'
            aria-label='email'
            type='email'
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <Input
            name='password'
            aria-label='password'
            type='password'
          />
        </div>
        <SubmitForm />
      </form>
      <FormFooter />
    </>
  )
}

export default SignUp
