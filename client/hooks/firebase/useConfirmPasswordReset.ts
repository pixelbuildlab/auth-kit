import { firebaseAppAuth } from '@/lib/firebase'
import { useMutation } from '@tanstack/react-query'
import { confirmPasswordReset } from 'firebase/auth'

type mutationVariables = {
  code: string | null
  password: string
}
export const useConfirmPasswordReset = () => {
  function confirmPassword(newData: mutationVariables) {
    if (!newData.code) {
      return Promise.reject('Code is required')
    }
    return confirmPasswordReset(firebaseAppAuth, newData.code, newData.password)
  }

  const mutation = useMutation({ mutationFn: confirmPassword })
  return mutation
}
