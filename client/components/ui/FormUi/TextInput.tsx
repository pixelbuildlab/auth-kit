import React from 'react'
import { Input } from '../input'

type TextInputProps = {
  name: string
  placeholder?: string
  type?: string
  label?: string
  defaultValue?: string
}

function TextInput({
  name,
  placeholder,
  type = 'text',
  label,
  defaultValue,
}: TextInputProps) {
  return (
    <div className='flex flex-col gap-2'>
      {label && <label htmlFor={name}>{label}</label>}
      <Input
        placeholder={placeholder}
        name={name}
        aria-label={name}
        id={name}
        defaultValue={defaultValue}
        type={type}
      />
    </div>
  )
}

export { TextInput }
