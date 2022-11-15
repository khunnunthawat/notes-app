import React from 'react'
import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

const Note = () => {
  const router: NextRouter = useRouter()
  const id = router.query.noteId
  return (
    <div>
      <div className='flex w-full flex-row items-center justify-center relative my-8'>
        <span className='inline-flex text-slate-700 text-lg font-semibold'>
          Tasks
        </span>

        <Link href='/'>
          <div className='left-0 top-0 absolute'>
            <span className='self-center relative'>
              <ArrowUturnLeftIcon className='h-6 w-6 text-slate-700  cursor-pointer' />
            </span>
          </div>
        </Link>
      </div>

      <div className='flex w-full flex-col justify-between rounded-md bg-white py-5 px-4 mb-8'>
        <div>
          <h4 className='mb-3 font-bold text-gray-700'>title : {id}</h4>
          <p className='text-sm text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            saepe, iste voluptatum reprehenderit illum sed aliquid ad rerum?
            Architecto est nesciunt tenetur praesentium minus sit facilis
            explicabo ullam, aliquid ducimus.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Note
