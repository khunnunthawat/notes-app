import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import { NotesProps } from '../types'

const NoteAll = (props: any) => {
  return (
    <div className='gap-4 my-8 columns-2'>
      {props.notes.map((item: NotesProps, index: number) => (
        <Link href='/note/[noteId]' as={`note/${item.id}`} key={index}>
          <div
            className='flex flex-col justify-between w-full px-4 py-5 mb-4 transition bg-white rounded-md cursor-pointer hover:shadow-md'
            onClick={() => props.dispatch({ type: 'EDIT_NOTE', id: item.id })}
          >
            {item.title ? (
              <h4 className='mb-3 font-bold text-gray-700 break-words'>
                {item.title}
              </h4>
            ) : null}
            {item.description ? (
              <p className='text-sm text-gray-500 break-words'>
                {item.description}
              </p>
            ) : null}
          </div>
        </Link>
      ))}
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    notes: state,
  }
}

export default connect(mapStateToProps)(NoteAll)
