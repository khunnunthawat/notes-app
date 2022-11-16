import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

interface NotesProps {
  id: number
  date: string
  title?: string
  description?: string
}

const NoteAll = (props: any) => {
  return (
    <div className='grid gap-4 my-8 sm:grid-cols-2 xl:grid-cols-4'>
      {props.notes.map((item: NotesProps, index: number) => (
        <div
          key={index}
          onClick={() => props.dispatch({ type: 'EDIT_NOTE', id: item.id })}
        >
          <Link href='/note/[noteId]' as={`note/${item.id}`}>
            <div className='flex flex-col justify-between w-full px-4 py-5 transition bg-white rounded-md cursor-pointer h-min hover:shadow-md'>
              <div>
                {item.title ? (
                  <h4 className='mb-3 font-bold text-gray-700'>{item.title}</h4>
                ) : null}
                {item.description ? (
                  <p className='text-sm text-gray-500 break-words'>
                    {item.description}
                  </p>
                ) : null}
              </div>
            </div>
          </Link>
        </div>
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
