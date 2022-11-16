import React from 'react'
import { useState } from 'react'

const Modal = (props: any) => {
  const { modal } = props

  const [form, setForm] = useState({
    date: '',
    title: '',
    text: '',
  })

  const handleChange = (e: any) => {
    console.log('handleChange -------->')

    const { name, value } = e.target

    let newForm = { ...form }
    newForm[name] = value

    setForm(newForm)
  }

  const handleSubmmit = (e: any) => {
    e.preventDefault()

    if (form.date === '' || form.title === '' || form.text === '') {
      alert('Please fill all the fields')
      return
    }

    if (form.date !== '' && form.title !== '' && form.text !== '') {
      setForm({
        date: Date().toLocaleString(),
        title: '',
        text: '',
      })
      // modal(false)
    }
  }

  return (
    <form onSubmit={handleSubmmit}>
      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div
          className='fixed inset-0 w-full h-full transition bg-black opacity-40'
          onClick={() => modal(false)}
        ></div>
        <div className='flex items-center min-h-screen px-4 py-8'>
          <div className='relative w-full max-w-[280px] p-4 mx-auto bg-white rounded-md shadow-lg'>
            <div className='flex'>
              <div className='w-full p-4 text-center sm:text-left'>
                <input
                  type='text'
                  name='title'
                  value={form.title}
                  onChange={handleChange}
                  className='w-full text-sm font-bold text-gray-700 resize-y focus:border-none focus:outline-none placeholder:text-sm placeholder:font-normal'
                  placeholder='title here..'
                ></input>
                <textarea
                  name='text'
                  rows={10}
                  value={form.text}
                  onChange={handleChange}
                  className='w-full mb-4 text-sm text-gray-500 resize-y focus:border-none focus:outline-none placeholder:text-sm'
                  placeholder='write something..'
                ></textarea>
                <div className='flex justify-center gap-2'>
                  <button
                    className='w-full p-2 text-xs text-white transition bg-yellow-400 rounded-md hover:bg-yellow-500'
                    onClick={handleSubmmit}
                  >
                    Add Note
                  </button>
                  <button
                    className='w-full p-2 text-xs text-white transition bg-gray-700 rounded-md hover:bg-gray-600'
                    onClick={() => modal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Modal
