import toast from 'react-hot-toast'
import { firebaseAppAuth } from '@/lib/firebase'
import { fetchSignInMethodsForEmail } from 'firebase/auth'

export function fetchExistingAccount({ email }: { email: string }) {
  const fetchAccount = fetchSignInMethodsForEmail(firebaseAppAuth, email)
  const userCredential = toast
    .promise(fetchAccount, {
      loading: 'Checking for existing user account',
      success: (data) => {
        console.log(data, 'in fn')
        if (data.length) return 'User account found'
        else throw new Error('Unable to get user account')
      },
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
