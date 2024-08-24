import React from 'react'
import { Button } from '../button'

type Props = { formType?: 'register' | 'login'; action?: () => void }

function FormFooter({ formType }: Props) {
  return (
    <>
      <hr />
      <Button>Github</Button>
      <Button>Google</Button>
    </>
  )
}

export default FormFooter
