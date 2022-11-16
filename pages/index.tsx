import Head from 'next/head'
import * as Hero from '@heroicons/react/24/solid'
import { useState } from 'react'
import NoteFrom from '../components/NoteFrom'
import NoteAll from '../components/NoteAll'

export default function Home() {
  const [noteModal, setNoteModal] = useState(false)

  const handleNoteModal = () => {
    setNoteModal(true)
  }

  return (
    <>
      <Head>
        <title>Notes App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='relative flex flex-row items-center justify-center w-full my-8'>
        <span className='inline-flex mr-4 text-lg font-medium text-yellow-400 cursor-default'>
          Notes
          <Hero.ChevronDownIcon className='self-center w-4 h-4 ml-1 font-bold' />
        </span>
        <span className='inline-flex text-lg font-semibold cursor-default text-slate-700'>
          Tasks
        </span>

        <div className='absolute right-0'>
          <span className='relative self-center'>
            <Hero.Cog8ToothIcon className='w-6 h-6 text-yellow-400 cursor-pointer' />
          </span>
        </div>
      </div>

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

      <NoteAll />

      <div className='flex justify-center my-8'>
        <div
          className='flex items-center justify-center w-8 h-8 transition bg-yellow-400 rounded-full cursor-pointer hover:shadow-md hover:bg-gray-700'
          onClick={handleNoteModal}
        >
          <Hero.PlusIcon className='w-6 h-6 text-white' />
        </div>
      </div>

      {noteModal ? (
        <>
          <NoteFrom modal={setNoteModal} />
        </>
      ) : null}
    </>
  )
}
