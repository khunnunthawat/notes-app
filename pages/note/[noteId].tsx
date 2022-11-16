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
import { connect } from 'react-redux'

const Note = (props: any): JSX.Element => {
  const router: NextRouter = useRouter()
  const id: any = router.query.noteId

  const styledIcon =
    'h-4 w-4 text-white cursor-pointer hover:text-gray-700 transition'

  const noteItem = props.notes.map((item: any) => {
    if (item.id === parseInt(id)) {
      return item
    }
  })

  return (
    <>
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
        {noteItem.map((item: any) => {
          const { title, date, description } = item
          return (
            <div key={item.id}>
              <div className='flex justify-between mb-4'>
                <h5 className='self-center text-xs text-gray-400'>
                  {date} | {description.length} characters
                </h5>
                <div className='inline-flex items-center justify-center w-6 h-6 gap-2 transition bg-yellow-400 rounded-full cursor-pointer hover:shadow-md hover:bg-gray-700'>
                  <CheckIcon className='w-4 h-4 text-white' />
                </div>
              </div>
              <input
                type='text'
                name='title'
                defaultValue={title}
                className='w-full mb-3 text-sm font-bold text-gray-700 resize-y focus:border-none focus:outline-none placeholder:text-sm placeholder:font-normal'
                placeholder='title here..'
              />
              <textarea
                typeof='text'
                rows={10}
                className='w-full text-sm text-gray-500 resize-y focus:border-none focus:outline-none'
                placeholder='write something..'
                defaultValue={description}
              />
            </div>
          )
        })}
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
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    notes: state,
  }
}

export default connect(mapStateToProps)(Note)
