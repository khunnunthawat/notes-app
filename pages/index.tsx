import Head from 'next/head'
import {
  ChevronDownIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  Cog8ToothIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'

const mock = [
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Notes App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex w-full flex-row items-center justify-center relative my-8'>
        <span className='inline-flex text-yellow-400 text-lg mr-4 font-medium cursor-default'>
          Notes
          <ChevronDownIcon className='h-4 w-4 self-center ml-1 font-bold' />
        </span>
        <span className='inline-flex text-slate-700 text-lg font-semibold cursor-default'>
          Tasks
        </span>

        <div className='right-0 absolute'>
          <span className='self-center relative'>
            <Cog8ToothIcon className='h-6 w-6 text-yellow-400 cursor-pointer' />
          </span>
        </div>
      </div>

      <div className='relative flex items-center w-full h-8 rounded-md focus-within:shadow-md bg-white overflow-hidden hover:shadow-md transition'>
        <div className='grid place-items-center h-full w-10'>
          <MagnifyingGlassIcon className='h-4 w-4 text-gray-500' />
        </div>
        <input
          className='h-full w-full outline-none text-sm text-gray-700 pr-2 placeholder:text-xs placeholder:text-gray-500'
          type='text'
          id='search'
          placeholder='Search notes..'
        />
      </div>

      <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4 my-8'>
        {mock.map(item => (
          <Link href='/note/[noteId]' as={`note/${item.id}`} key={item.id}>
            <div className='flex w-full flex-col justify-between rounded-md bg-white py-5 px-4 cursor-pointer h-min hover:shadow-md transition'>
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

      <div className='flex justify-center my-8'>
        <div className='flex justify-center items-center w-8 h-8 bg-yellow-400 rounded-full cursor-pointer hover:shadow-md hover:bg-gray-700 transition'>
          <PlusIcon className='h-6 w-6 text-white' />
        </div>
      </div>
    </>
  )
}
