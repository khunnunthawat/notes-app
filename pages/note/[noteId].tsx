import React from 'react'
import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import * as Hero from '@heroicons/react/24/solid'
import { connect } from 'react-redux'
import { useState } from 'react'
import { NotesProps } from '../../types'

const Note = (props: any): JSX.Element => {
  const router: NextRouter = useRouter()
  const id: any = router.query.noteId

  const styledIcon =
    'h-4 w-4 text-white cursor-pointer hover:text-gray-700 transition'

  const [dataEdit, setDataEdit] = useState({
    id: parseInt(id),
    date: new Date().toLocaleString(),
    title: '',
    description: '',
    edit: false,
  })

  const noteItem = props.notes.filter((item: any) => {
    if (item.id === parseInt(id)) {
      return item
    }
  })

  const removeNote = () => {
    props.dispatch({
      type: 'DELETE_NOTE',
      id: parseInt(id),
    })
    router.push('/')
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target

    let newForm: any = { ...noteItem[0] }
    newForm[name] = value
    setDataEdit(newForm)
  }

  const handlerUpdateNote = (e: any) => {
    e.preventDefault()

    const newData: NotesProps = {
      id: parseInt(id),
      date: new Date().toLocaleString(),
      title: e.target.title.value,
      description: e.target.description.value,
      edit: true,
    }

    if (
      dataEdit.title !== '' ||
      dataEdit.description !== '' ||
      dataEdit.title === '' ||
      dataEdit.description === ''
    ) {
      console.log('update-note')
      props.dispatch({
        type: 'UPDATE_NOTE',
        id: parseInt(id),
        data: newData,
      })
      router.push('/')
    }
  }

  return (
    <>
      <div className='relative flex flex-row items-center justify-center w-full my-8'>
        <span className='inline-flex text-lg font-semibold text-slate-700'>
          Tasks
        </span>

        <Link href='/'>
          <div className='absolute left-0 cursor-pointer'>
            <span className='relative self-center'>
              <Hero.ArrowUturnLeftIcon className='w-4 h-4 text-slate-700' />
            </span>
          </div>
        </Link>

        <div className='absolute right-0 cursor-pointer' onClick={removeNote}>
          <span className='relative self-center'>
            <Hero.TrashIcon className='w-5 h-5 text-red-500 transition hover:text-gray-700' />
          </span>
        </div>
      </div>

      <div className='flex flex-col justify-between w-full px-4 py-5 mb-8 bg-white rounded-md'>
        {noteItem.map((item: any) => {
          return (
            <div key={item.id}>
              <form onSubmit={handlerUpdateNote}>
                <div className='flex justify-between mb-4'>
                  <h5 className='self-center text-xs text-gray-400 cursor-default'>
                    {item?.date} | {item?.description.length} characters
                  </h5>
                  <button className='inline-flex items-center justify-center w-6 h-6 gap-2 transition bg-yellow-400 rounded-full cursor-pointer hover:shadow-md hover:bg-gray-700'>
                    <Hero.CheckIcon className='w-4 h-4 text-white' />
                  </button>
                </div>
                <input
                  type='text'
                  name='title'
                  defaultValue={item?.title || ''}
                  className='w-full mb-3 text-sm font-bold text-gray-700 resize-y focus:border-none focus:outline-none placeholder:text-sm placeholder:font-normal'
                  placeholder='title here..'
                  onChange={handleChange}
                />
                <textarea
                  typeof='text'
                  name='description'
                  rows={10}
                  defaultValue={item?.description || ''}
                  className='w-full text-sm text-gray-500 resize-y focus:border-none focus:outline-none'
                  placeholder='write something..'
                  onChange={handleChange}
                />
              </form>
            </div>
          )
        })}
        <div className='flex justify-center'>
          <div className='flex items-center justify-between h-10 px-4 bg-yellow-400 rounded-md sm:w-full md:w-8/12 xl:w-6/12'>
            <Hero.PhotoIcon className={styledIcon} />
            <Hero.ClipboardDocumentIcon className={styledIcon} />
            <Hero.EllipsisHorizontalCircleIcon className={styledIcon} />
            <Hero.PaperClipIcon className={styledIcon} />
            <Hero.MicrophoneIcon className={styledIcon} />
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
