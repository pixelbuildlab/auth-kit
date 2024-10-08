import React from 'react'
import toast from 'react-hot-toast'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FIREBASE_AUTH_ERRORS } from '@/constants/firebaseErrors'
import { firebaseAppAuth } from '@/lib/firebase'

type Props = { email: string; password: string }

function createFirebaseUser({ email, password }: Props) {
  const createUserPromise = createUserWithEmailAndPassword(
    firebaseAppAuth,
    email,
    password
  )

  const userCredential = toast
    .promise(createUserPromise, {
      loading: 'Creating user with firebase auth',
      success: (data) => `User successfully created for ${data.user.email}`,
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

export { createFirebaseUser }
