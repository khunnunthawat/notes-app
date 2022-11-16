import React from 'react'
import * as Hero from '@heroicons/react/24/solid'

const NoteSearch = (): JSX.Element => {
  return (
    <div className='relative flex items-center w-full h-8 overflow-hidden transition bg-white rounded-md focus-within:shadow-md hover:shadow-md'>
      <div className='grid w-10 h-full place-items-center'>
        <Hero.MagnifyingGlassIcon className='w-4 h-4 text-gray-500' />
      </div>
      <input
        className='w-full h-full pr-2 text-sm text-gray-700 outline-none placeholder:text-xs placeholder:text-gray-500'
        type='text'
        id='search'
        placeholder='Search notes..'
      />
    </div>
  )
}

export default NoteSearch
