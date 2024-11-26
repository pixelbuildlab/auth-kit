'use client'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  useConfirmPasswordReset,
  useVerifyPasswordCode,
} from '@/hooks/firebase'
import { LoadingSpinner } from '@/components/ui/custom/Loader'
import { Form, FormSubmission, TextInput } from '@/components/ui/FormUi'
import { AUTH_KIT_ROUTES } from '@/constants'
import { CenteredContent } from '@/components/ui/custom'

type ResetPassword = {
  password: string
  confirmPassword: string
}

function FirebaseVerify() {
  const searchParams = useSearchParams()

  const code = searchParams.get('oobCode')
  const {
    data: firebaseResponse,
    error,
    isLoading,
  } = useVerifyPasswordCode(code)

  const { mutateAsync: updateUserPassword } = useConfirmPasswordReset()

  if (isLoading) return <LoadingSpinner />
  if (error)
    return (
      <CenteredContent>
        <>An error occurred while processing your request</>
      </CenteredContent>
    )
  if (!code)
    return (
      <CenteredContent>
        <>Unable to process request this time.</>
      </CenteredContent>
    )
  const formAction = async () => {
    await updateUserPassword({ code, password: 'qwerty12345' })
  }
  return (
    <>
      <h5 className='mb-2'>Please enter easy to remember password</h5>
      <Form<ResetPassword> onSave={formAction}>
        <TextInput
          name='password'
          label='Password'
        />
        <TextInput
          name='confirmPassword'
          label='Confirm Password'
        />
        <FormSubmission
          linkPath={AUTH_KIT_ROUTES.login}
          primaryLabel='Sign Up'
          secondaryLabel='Login'
        />
      </Form>
      {/* <FormFooter /> */}
    </>
  )
}
// 'use client'
// import React from 'react'
// import toast from 'react-hot-toast'
// import FormFooter from '../../ui/custom/FormFooter'
// import { AUTH_KIT_ROUTES } from '@/constants'
// import { createFirebaseUser, updateFirebaseUser } from '@/hooks/firebase'
// import { Form, FormSubmission, TextInput } from '../../ui/FormUi'
// import { firebaseCurrentUser } from '@/lib/firebase'
// import { useUserAuthContext } from '@/hooks/common/useUserAuthContext'
// import { AuthUser } from '@/types/AuthTypes'

// type RegisterData = {
//   email: string
//   password: string
//   username: string
// }

// const SignUp = () => {
//   const { login } = useUserAuthContext()
//   const formAction = async (formData: RegisterData) => {
//     const { email, password, username } = formData

//     if (!email) {
//       toast.error('Email Required')
//       return
//     } else if (!password) {
//       toast.error('Password Required')
//       return
//     } else if (!username) {
//       toast.error('Username Required')
//       return
//     }

//     try {
//       const response = await createFirebaseUser({ email, password })
//       await updateFirebaseUser({ username })
//       // redirect(AUTH_KIT_ROUTES.login, RedirectType.push)

//       if (response) {
//         const authUser: AuthUser = {
//           email: response.user.email || '',
//           id: response.user.uid,
//           provider: response.providerId + '',
//           profilePicture: response.user.photoURL || '',
//           username: response.user.displayName + '',
//         }

//         login(authUser)
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <>
//       <h5 className='mb-2'>Please sign up to continue</h5>
//       <Form<RegisterData> onSave={formAction}>
//         <TextInput
//           name='username'
//           label='Username'
//           placeholder='user007'
//         />
//         <TextInput
//           name='email'
//           label='Email'
//           placeholder='example@email.com'
//         />
//         <TextInput
//           name='password'
//           label='Password'
//           type='password'
//         />
//         <FormSubmission
//           linkPath={AUTH_KIT_ROUTES.login}
//           primaryLabel='Sign Up'
//           secondaryLabel='Login'
//         />
//       </Form>

//       <FormFooter />
//     </>
//   )
// }

// export default SignUp

export default function FirebaseWrapped() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <FirebaseVerify />
    </Suspense>
  )
}
