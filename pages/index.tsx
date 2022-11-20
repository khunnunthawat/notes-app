import Head from 'next/head'
import * as Hero from '@heroicons/react/24/solid'
import { useState } from 'react'
import { NoteAll, NoteFrom, NoteSearch } from '../components'
import ButtonLike from '../components/ButtonLike'
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
            <Hero.Cog8ToothIcon className='w-6 h-6 text-yellow-400 cursor-pointer hover:text-gray-700' />
          </span>
        </div>
      </div>

      <NoteSearch />
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

      <ButtonLike />
    </>
  )
}
