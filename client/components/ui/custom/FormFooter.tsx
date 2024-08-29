import React from 'react'
import { Button } from '../button'

type Props = { formType?: 'register' | 'login'; action?: () => void }

function FormFooter({ formType }: Props) {
  return (
    <div className='flex flex-col mt-5 w-full gap-3'>
      <hr />
      <Button>Github</Button>
      <Button>Google</Button>
    </div>
  )
}

export default FormFooter
