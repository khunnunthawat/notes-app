import React from 'react'
import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import {
  ArrowUturnLeftIcon,
  CheckIcon,
  PhotoIcon,
  ClipboardDocumentIcon,
  PaperClipIcon,
  MicrophoneIcon,
  EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/solid'
import { useState } from 'react'

const Note = (): JSX.Element => {
  const router: NextRouter = useRouter()
  const id = router.query.noteId

  const [count, setCount] = useState<number>(0)

  const styledIcon =
    'h-4 w-4 text-white cursor-pointer hover:text-gray-700 transition'

  return (
    <div>
      <div className='flex w-full flex-row items-center justify-center relative my-8'>
        <span className='inline-flex text-slate-700 text-lg font-semibold'>
          Tasks
        </span>

        <Link href='/'>
          <div className='left-0 absolute'>
            <span className='self-center relative'>
              <ArrowUturnLeftIcon className='h-4 w-4 text-slate-700  cursor-pointer' />
            </span>
          </div>
        </Link>
      </div>

      <div className='flex w-full flex-col justify-between rounded-md bg-white py-5 px-4 mb-8'>
        <div>
          <div className='flex justify-between mb-4'>
            <h5 className='text-xs text-gray-400'>
              13 August 7:25PM | {count} characters
            </h5>
            <div className='inline-flex gap-2'>
              <CheckIcon className='h-4 w-4 text-gray-700' />
            </div>
          </div>

          <h4 className='mb-3 font-bold text-gray-700'>title : {id}</h4>
          <textarea
            typeof='text'
            rows={10}
            className='text-sm text-gray-500 w-full resize-y focus:border-none focus:outline-none'
            onChange={e => setCount(e.target.value.length)}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            saepe, iste voluptatum reprehenderit illum sed aliquid ad rerum?
            Architecto est nesciunt tenetur praesentium minus sit facilis
            explicabo ullam, aliquid ducimus.
          </textarea>

          <div className='flex justify-center'>
            <div className='bg-yellow-400 sm:w-full md:w-8/12 xl:w-6/12 h-10 rounded-md flex justify-between items-center px-4'>
              <PhotoIcon className={styledIcon} />
              <ClipboardDocumentIcon className={styledIcon} />
              <EllipsisHorizontalCircleIcon className={styledIcon} />
              <PaperClipIcon className={styledIcon} />
              <MicrophoneIcon className={styledIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Note
