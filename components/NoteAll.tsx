import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

interface NotesProps {
  id: number
  title?: string
  description?: string
}

const mock: NotesProps[] = [
  {
    id: 1,
    title: '13 things to work on',
    description:
      'Our interior design experts work with you to create the space that you have been dreaming about.',
  },
  {
    id: 2,
    title: '',
    description:
      'Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.',
  },
  {
    id: 3,
    title: 'Redux',
    description:
      'Redux works with any UI layer, and has a large ecosystem of addons to fit your needs.',
  },
  {
    id: 4,
    title: '',
    description:
      'Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.',
  },
]

const NoteAll = (props: any) => {
  console.log('NoteAll -------->', props.notes)

  return (
    <div>
      <div className='grid gap-4 my-8 sm:grid-cols-2 xl:grid-cols-4'>
        {mock.map((item: NotesProps) => (
          <Link href='/note/[noteId]' as={`note/${item.id}`} key={item.id}>
            <div className='flex flex-col justify-between w-full px-4 py-5 transition bg-white rounded-md cursor-pointer h-min hover:shadow-md'>
              <div>
                {item.title ? (
                  <h4 className='mb-3 font-bold text-gray-700'>{item.title}</h4>
                ) : null}
                <p className='text-sm text-gray-500'>{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    notes: state,
  }
}

export default connect(mapStateToProps)(NoteAll)
