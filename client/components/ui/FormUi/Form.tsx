'use client'
import React from 'react'

type FormProps<T> = { children: React.ReactNode; onSave: (formData: T) => void }

function Form<T>({ children, onSave }: FormProps<T>) {
  const formAction = (formData: FormData) => {
    const formEntries = Object.fromEntries(formData.entries()) as unknown
    onSave(formEntries as T)
  }

  return (
    <form
      className='flex flex-col gap-4'
      action={formAction}
    >
      {children}
    </form>
  )
}

export { Form }
