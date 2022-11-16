import React from 'react'
import * as Hero from '@heroicons/react/24/solid'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const NoteSearch = (props: any): JSX.Element => {
  const searchNote = (e: any) => {
    e.preventDefault()
    props.dispatch({
      type: 'SEARCH_NOTE',
      data: e.target.search.value,
    })
  }

  return (
    <div className='relative flex items-center w-full h-8 overflow-hidden transition bg-white rounded-md focus-within:shadow-md hover:shadow-md'>
      <div className='grid w-10 h-full place-items-center'>
        <Hero.MagnifyingGlassIcon className='w-4 h-4 text-gray-500' />
      </div>
      <form onSubmit={searchNote}>
        <input
          className='w-full h-full pr-2 text-sm text-gray-700 outline-none placeholder:text-xs placeholder:text-gray-500'
          type='text'
          id='search'
          placeholder='Search notes..'
        />
      </form>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    notes: state,
  }
}

export default connect(mapStateToProps)(NoteSearch)
