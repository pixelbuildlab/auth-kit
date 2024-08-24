'use client'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'
import Link from 'next/link'
import FormFooter from '../ui/custom/FormFooter'

//To use formStatus component that using it must be outside of the component rendering form
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
        <Link href='/login'>Login</Link>
      </Button>
    </>
  )
}
const SignUp = () => {
  const formAction = (formData: FormData) => {
    const email = formData.get('email')
    const password = formData.get('password')
  }

  return (
    <>
      <h5>Please Sign up to continue</h5>
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
