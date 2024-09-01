'use client'
import React from 'react'
import {
  FirebaseContext,
  FirebaseContextValue,
} from '@/context/firebaseContext'

type Props = { children: React.ReactNode }

function FirebaseAuthProvider({ children }: Props) {
  // const [user, setUser] = React.useState<User | null>(null)
  // const [loading, setLoading] = React.useState(true)
  // const router = useRouter()
  // const pathname = usePathname()

  // React.useEffect(() => {
  //   if (UNPROTECTED_ROUTES.includes(pathname)) {
  //     alert('some')
  //     setLoading(false)
  //     return
  //   }
  //   const storageUser = localStorage.getItem('user')

  //   if (storageUser) {
  //     setUser(JSON.parse(storageUser))

  //     router.replace(AUTH_KIT_ROUTES.home)
  //     return
  //   } else {
  //     router.push(AUTH_KIT_ROUTES.login)
  //   }

  //   const unsubscribe = onAuthStateChanged(firebaseAppAuth, (authUser) => {
  //     if (authUser) {
  //       setUser(authUser)
  //       localStorage.setItem('user', JSON.stringify(authUser))
  //     } else {
  //       localStorage.removeItem('user')
  //       router.push(AUTH_KIT_ROUTES.login)
  //     }
  //     setLoading(false)
  //   })

  //   return () => unsubscribe()
  // }, [router])

  const firebaseContextValue: FirebaseContextValue = {
    firebaseUser: null,
  }

  // if (loading && !user) {
  //   return <LoadingSpinner />
  // }

  return (
    <FirebaseContext.Provider value={firebaseContextValue}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseAuthProvider
