'use client'
import React from 'react'
import { East } from '../SVG'

type Props = {
  id: string
  active: boolean
  title: string
  description: string
  onClick?: (id: string) => void
}

function Tile({ id, active, title, description, onClick }: Props) {
  const mainActiveClasses = active
    ? 'bg-blue-600 hover:bg-blue-600 outline-2 text-white'
    : 'outline-2'

  return (
    <div
      id={id}
      onClick={() => onClick && onClick(id)}
      className={`relative p-4 h-40 w-72 rounded-lg min-w-48 cursor-pointer group outline hover:bg-blue-400 hover:text-black hover:outline-0 outline-blue-500 ${mainActiveClasses}`}
    >
      <div
        className={`flex gap-3 flex-col ${active ? 'group-hover:hidden' : ''}`}
      >
        <h3 className='font-semibold'>{title}</h3>
        <p className='text-ellipsis'>{description}</p>
      </div>
      <div
        className={`hidden justify-center w-full h-full items-center ${
          active ? 'group-hover:flex' : ''
        }`}
      >
        <East />
      </div>
    </div>
  )
}

export { Tile }
