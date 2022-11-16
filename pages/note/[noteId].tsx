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
      <div className='relative flex flex-row items-center justify-center w-full my-8'>
        <span className='inline-flex text-lg font-semibold text-slate-700'>
          Tasks
        </span>

        <Link href='/'>
          <div className='absolute left-0'>
            <span className='relative self-center'>
              <ArrowUturnLeftIcon className='w-4 h-4 cursor-pointer text-slate-700' />
            </span>
          </div>
        </Link>
      </div>

      <div className='flex flex-col justify-between w-full px-4 py-5 mb-8 bg-white rounded-md'>
        <div>
          <div className='flex justify-between mb-4'>
            <h5 className='text-xs text-gray-400'>
              13 August 7:25PM | {count} characters
            </h5>
            <div className='inline-flex gap-2'>
              <CheckIcon className='w-4 h-4 text-gray-700' />
            </div>
          </div>

          <h4 className='mb-3 font-bold text-gray-700'>title : {id}</h4>
          <textarea
            typeof='text'
            rows={10}
            className='w-full text-sm text-gray-500 resize-y focus:border-none focus:outline-none'
            onChange={e => setCount(e.target.value.length)}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            saepe, iste voluptatum reprehenderit illum sed aliquid ad rerum?
            Architecto est nesciunt tenetur praesentium minus sit facilis
            explicabo ullam, aliquid ducimus.
          </textarea>

          <div className='flex justify-center'>
            <div className='flex items-center justify-between h-10 px-4 bg-yellow-400 rounded-md sm:w-full md:w-8/12 xl:w-6/12'>
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
