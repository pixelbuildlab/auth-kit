import React from 'react'
import toast from 'react-hot-toast'
import { updateProfile } from 'firebase/auth'
import { firebaseAppAuth } from '@/lib/firebase'
import { FIREBASE_AUTH_ERRORS } from '@/constants/firebaseErrors'

type Props = { username: string; profile?: string }

function updateFirebaseUser({ username, profile }: Props) {
  if (!firebaseAppAuth.currentUser) return

  const createUserPromise = updateProfile(firebaseAppAuth.currentUser, {
    displayName: username,
    ...(profile && { photoURL: profile }),
  })

  const userCredential = toast
    .promise(createUserPromise, {
      loading: 'Updating firebase user',
      success: (data) => `User successfully updated`,
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

export { updateFirebaseUser }
