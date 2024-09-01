import React from 'react'
import { Tile } from '@/components/ui/custom'

function TestPage() {
  return (
    <>
      <div className='h-screen w-screen  p-20 flex gap-4'>
        NON PROTECT PAGE MAY BE FOR TESTING
        <Tile
          title='Firebase'
          active
          description='active'
          id='3'
        />
        <Tile
          title='Firebase'
          active={false}
          description='in active'
          id='3'
        />
        <Tile
          title='Firebase'
          active={false}
          description='Lorem10'
          id='3'
        />
        {/* <div
          className='relative  flex gap-3 flex-col  p-4 h-40
           w-72 bg-black rounded-lg cursor-pointer select-none 
        hover:outline hover:outline-2 hover:outline-white  active:bg-blue-950'
        >
          <h3 className=' font-semibold'>Firebase</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div
          className='relative  flex gap-3 flex-col  p-4 h-40
           w-72 bg-black rounded-lg cursor-pointer select-none 
        hover:outline hover:outline-2 hover:outline-white  active:bg-blue-950'
        >
          <h3 className=' font-semibold'>Firebase</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div
          className='relative  flex gap-3 flex-col  p-4 h-40
           w-72 bg-black rounded-lg cursor-pointer select-none 
        hover:outline hover:outline-2 hover:outline-white  active:bg-blue-950'
        >
          <h3 className=' font-semibold'>Firebase</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div> */}
      </div>
    </>
  )
}

export default TestPage
