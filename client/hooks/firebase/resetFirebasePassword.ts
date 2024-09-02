import React from 'react'
import toast from 'react-hot-toast'
import { sendPasswordResetEmail } from 'firebase/auth'
import { FIREBASE_AUTH_ERRORS } from '@/constants/firebaseErrors'
import { firebaseAppAuth } from '@/lib/firebase'

type Props = { email: string }

function resetFirebasePassword({ email }: Props) {
  const sendResetMain = sendPasswordResetEmail(firebaseAppAuth, email)

  const userCredential = toast
    .promise(sendResetMain, {
      loading: 'Sending password reset email to ' + email,
      success: (data) =>
        `Password reset email sent. Check your email to follow instructions`,
      error: (err) => err.message,
    })
    .catch((error) => {
      throw new Error(error)
    })
    .then((data) => {
      return data
    })
  return userCredential
}

export { resetFirebasePassword }
