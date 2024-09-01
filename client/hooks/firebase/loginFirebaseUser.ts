import React from 'react'
import toast from 'react-hot-toast'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseAppAuth } from '@/lib/firebase'
import { FIREBASE_AUTH_ERRORS } from '@/constants/firebaseErrors'

type Props = { email: string; password: string }

function loginFirebaseUser({ email, password }: Props) {
  const createUserPromise = signInWithEmailAndPassword(
    firebaseAppAuth,
    email,
    password
  )

  const userCredential = toast
    .promise(createUserPromise, {
      loading: 'Logging in user with firebase auth',
      success: (data) => `User successfully logged in for ${data.user.email}`,
      error: (err) =>
        FIREBASE_AUTH_ERRORS[err.code as keyof typeof FIREBASE_AUTH_ERRORS],
    })
    .catch((error) => {
      throw new Error(error)
    })
    .then((data) => {
      return data
    })

  return userCredential
}

export { loginFirebaseUser }
