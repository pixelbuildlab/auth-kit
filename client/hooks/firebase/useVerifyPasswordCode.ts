import { firebaseAppAuth } from '@/lib/firebase'
import { useQuery } from '@tanstack/react-query'
import { verifyPasswordResetCode } from 'firebase/auth'

export const useVerifyPasswordCode = (code: string | null) => {
  const query = useQuery({
    queryKey: ['verifyPasswordResetCode', code],
    queryFn: () => {
      if (code) {
        return verifyPasswordResetCode(firebaseAppAuth, code)
      }
    },
    enabled: !!code,
    retry: 2,
    refetchOnWindowFocus: false,
  })

  return query
}
